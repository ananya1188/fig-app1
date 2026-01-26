import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const response = await fetch(
      `https://msijllgzruotalrpujcj.supabase.co/rest/v1/Blogs?id=eq.${id}&select=*`,
      {
        headers: {
          'Content-Type': 'application/json',
          apikey: 'sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb',
          Authorization:
            'Bearer sb_publishable_rfsw-RpXcYDHOfJq4eMPEA_6NHDWUsb',
        },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Failed to fetch blog' },
        { status: response.status }
      )
    }

    const result = await response.json()

    // Supabase array return karta hai
    if (!result || result.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: result[0],
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
