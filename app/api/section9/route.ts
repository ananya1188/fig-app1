import { type NextRequest, NextResponse } from 'next/server'

type ResponseData = {
  success: boolean
  data?: any
  error?: string
  details?: string
}


// POST method
export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Client se JSON body lena

    const response = await fetch('https://msijllgzruotalrpujcj.supabase.co/rest/v1/ContactRequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'apikey': `sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
        'Authorization': `Bearer sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
       
      },
      body: JSON.stringify([body]), 
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: `Request failed: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
