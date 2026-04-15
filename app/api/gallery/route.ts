import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const items = await db.galleryItem.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(items)
  } catch (error) {
    console.error('[GALLERY_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { assets, title, description, category, year, location } = body

    if (!assets || !Array.isArray(assets) || assets.length === 0 || !title || !category || !year) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    const items = await db.galleryItem.createMany({
      data: assets.map((asset: any) => ({
        url: asset.url,
        publicId: asset.publicId,
        type: asset.type,
        title,
        description,
        category,
        year,
        location,
      })),
    })

    return NextResponse.json({ count: items.count })
  } catch (error) {
    console.error('[GALLERY_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
