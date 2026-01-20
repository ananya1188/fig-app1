  // This tells Next.js that this component runs on the client side (in the browser)
  "use client";

  // Import UI components from our component library
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import { Input } from "../../components/ui/input";
  import { Field, FieldGroup, FieldLabel } from "../../components/ui/field";
  // Import React's useState hook to manage component state
  import { useState } from "react";

  // Main component for the email test page
  export default function EmailTestPage() {
    // Create a state variable to track if the form is currently being submitted
    // isSubmitting = current value, setIsSubmitting = function to update it
    const [isSubmitting, setIsSubmitting] = useState(false);

    // This function handles the form submission
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      // Prevent the default form submission behavior (which would reload the page)
      e.preventDefault();
      // Set isSubmitting to true to disable the button and show "Sending..." text
      setIsSubmitting(true);

      // Store a reference to the form element before any async operations
      // This is important because e.currentTarget becomes null after async calls
      const form = e.currentTarget;
      // Create a FormData object from the form to easily extract all field values
      const formData = new FormData(form);
      // Convert FormData to a plain JavaScript object for easier handling
      const body = Object.fromEntries(formData.entries());

      try {
        // Send a POST request to our API route with the form data
        const res = await fetch("/api/email-test", {
          method: "POST",  // HTTP method
          headers: { "Content-Type": "application/json" },  // Tell server we're sending JSON
          body: JSON.stringify(body),  // Convert the object to a JSON string
        });

        // Check if the HTTP response was not successful (status code 200-299)
        if (!res.ok) {
          // Throw an error to jump to the catch block
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        // Parse the JSON response from the API
        const result = await res.json();
        // Log the response to the browser console for debugging
        console.log("API Response:", result);

        // Check if the API returned a success status
        if (result.success) {
          // Show a success message to the user
          alert("Email sent successfully!");
          // Clear all form fields after successful submission
          form.reset();
        } else {
          // Show an error message with details from the API
          alert("Failed to send email: " + (result.error || "Unknown error"));
        }
      } catch (error) {
        // This block runs if there was any error (network error, server error, etc.)
        alert("An error occurred while sending the email");
        // Log the error to the console for debugging
        console.error(error);
      } finally {
        // This block always runs, whether there was an error or not
        // Set isSubmitting back to false to re-enable the submit button
        setIsSubmitting(false);
      }
    }

    // Return the JSX (HTML-like syntax) for the page
    return (
      // Main container: full height screen, centered content, padding, background color
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        {/* Card component for the form container with max width */}
        <Card className="w-full max-w-2xl">
          {/* Card content with padding */}
          <CardContent className="p-8">
            {/* Page title */}
            <h1 className="text-3xl font-bold mb-2">Email Test Form</h1>
            {/* Page description */}
            <p className="text-muted-foreground mb-6">
              Fill out the form below to test the email functionality
            </p>

            {/* Form element - when submitted, it calls handleSubmit function */}
            <form onSubmit={handleSubmit}>
              {/* FieldGroup wraps all form fields with spacing */}
              <FieldGroup className="space-y-4">
                
                {/* Name input field */}
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input 
                    name="name"  // This name is used to identify the field in form data
                    placeholder="Enter your name"  // Placeholder text shown in empty field
                    required  // Makes this field mandatory
                  />
                </Field>

                {/* Email input field */}
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input 
                    name="email"  // Field name for form data
                    type="email"  // Input type for email validation
                    placeholder="Enter your email"  // Placeholder text
                    required  // Makes this field mandatory
                  />
                </Field>

                {/* Phone input field */}
                <Field>
                  <FieldLabel>Phone</FieldLabel>
                  <Input 
                    name="phone"  // Field name for form data
                    type="tel"  // Input type for telephone numbers
                    placeholder="Enter your phone number"  // Placeholder text
                    required  // Makes this field mandatory
                  />
                </Field>

                {/* Message textarea field */}
                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <textarea 
                    name="message"  // Field name for form data
                    rows={6}  // Number of visible text rows
                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"  // Styling classes
                    placeholder="Enter your message"  // Placeholder text
                    required  // Makes this field mandatory
                  />
                </Field>

                {/* Submit button container */}
                <div className="pt-4">
                  <Button 
                    type="submit"  // Makes this button submit the form
                    className="w-full"  // Full width button
                    disabled={isSubmitting}  // Disable button while form is submitting
                  >
                    {/* Show "Sending..." when submitting, otherwise show "Send Email" */}
                    {isSubmitting ? "Sending..." : "Send Email"}
                  </Button>
                </div>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
