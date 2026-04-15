import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const history = await db.withdrawal.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(history)
  } catch (error) {
    console.error('[WITHDRAW_HISTORY]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
