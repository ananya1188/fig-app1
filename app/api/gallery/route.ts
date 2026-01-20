// Import Next.js server utilities for handling API requests and responses
import { type NextRequest, NextResponse } from 'next/server'
// Import Resend library for sending emails
import { Resend } from 'resend';

// Define the structure of our API response
type ResponseData = {
  success: boolean  // Indicates if the operation was successful
  data?: any        // Optional: Contains response data if successful
  error?: string    // Optional: Contains error message if failed
  details?: string  // Optional: Contains additional error details
}

// This is a POST API route handler - it runs on the server when someone submits the form
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON data from the request body
    const body = await request.json();
    // Extract the form fields (name, email, phone, message) from the body
    const { FullName, CompanyName, Email, Phone, ShadeType, Address, Message } = body;

    // Log the received data to the console for debugging purposes
    console.log('Received form data:', { FullName, CompanyName, Email, Phone, ShadeType, Address, Message });

    // Create a new Resend instance with your API key
    // This key authenticates your app with the Resend email service
    const resend = new Resend('re_VuvbR2pV_NPGzhYvGG87Uk7zK42mqaQSL');

    // Send the email using Resend's API
    const data = await resend.emails.send({
      from: 'Shadeplus <onboarding@resend.dev>',  // Sender's email address
      to: ['ananya.strix@gmail.com'],            // Recipient's email address (your verified email)
      subject: `New Contact Form Submission from ${FullName}`,  // Email subject line with user's name
      // HTML content of the email - formatted with the form data
       html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Email Template</title>
</head>
<body>
 <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;">
                <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #345C72; padding: 40px; text-align: center; color: white; font-size: 24px;">
                        Responsive Email Template
                        </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                        <td class="body" style="padding: 40px; font-size: 16px; line-height: 1.5; color: #333333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>FullName:</strong> ${FullName}</p>
        <p><strong>CompanyName:</strong> ${CompanyName}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phone}</p>
        <p><strong>ShadeType:</strong> ${ShadeType}</p>
        <p><strong>Address:</strong> ${Address}</p>
        <p><strong>Message:</strong></p>
        <p>${Message}</p>
                        </td>
                    </tr>
        <tr>
           <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                        Copyright &copy; 2024 | Your brand name
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
      `,
    });

    // Log the response from Resend API to see if it was successful
    console.log('Resend API response:', data);

    // Check if Resend returned an error (even if HTTP request was successful)
    if (data.error) {
      // Log the error for debugging
      console.error('Resend API error:', data.error);
      // Return an error response to the frontend with status 400 (Bad Request)
      return NextResponse.json(
        {
          success: false,
          error: data.error.message || 'Failed to send email',  // Error message
          details: data.error,  // Full error details
        },
        { status: 400 }  // HTTP status code
      )
    }

    // If everything worked, return a success response to the frontend
    return NextResponse.json({
      success: true,
      data: data,  // Include the Resend response data
    })
  } catch (error) {
    // This catch block handles any unexpected errors (network issues, JSON parsing errors, etc.)
    console.error('Error sending email:', error);
    // Return an error response with status 500 (Internal Server Error)
    return NextResponse.json(
      {
        success: false,
        // Check if error is an Error object, otherwise use a generic message
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }  // HTTP status code for server errors
    )
  }
}
