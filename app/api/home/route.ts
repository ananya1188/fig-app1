import { type NextRequest, NextResponse } from 'next/server'

type ResponseData = {
  success: boolean
  data?: any
  error?: string
  details?: string
}
export async function POST(request: NextRequest) {
   // Get API key from environment variables
  //const SUPABASE_API_KEY = process.env.API || 'sb_publishable_I2IYJd2zj86CS_6tZNkBZQ_NCGt_rv1'
 //console.log(SUPABASE_API_KEY);

  try {
      const body = await request.json(); 
    // Make the request to Supabase
    const response = await fetch('https://msijllgzruotalrpujcj.supabase.co/rest/v1/ContactRequests', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
        'apikey': `sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
        'Authorization': `Bearer sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
      },
      body: JSON.stringify([body]), 
    })

    // Check if the request was successful
    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        {
          success: false,
          error: `Request failed: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      )
    }

    // Parse the response
    const result = await response.json()

    // Return the result
    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    )
  }
}