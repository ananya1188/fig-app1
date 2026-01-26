import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  if (isNaN(id)) {
    return NextResponse.json(
      { success: false, message: 'Invalid blog id' },
      { status: 400 }
    )
  }

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

  const result = await response.json()

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
}
