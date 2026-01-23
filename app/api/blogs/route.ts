import { type NextRequest, NextResponse } from 'next/server'

type ResponseData = {
  success: boolean
  data?: any
  error?: string
  details?: string
}

// GET all blogs
export async function GET() {
  try {
    const response = await fetch('https://msijllgzruotalrpujcj.supabase.co/rest/v1/Blogs?select=*&order=created_at.desc', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': `sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
        'Authorization': `Bearer sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
      },
    })

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

    const result = await response.json()

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    )
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch('https://msijllgzruotalrpujcj.supabase.co/rest/v1/Blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': `sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
        'Authorization': `Bearer sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(body),
    })

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

    const result = await response.json()

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    )
  }
}
