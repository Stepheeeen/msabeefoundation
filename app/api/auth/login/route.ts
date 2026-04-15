import { login } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (await login(password)) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, message: 'Invalid protocol access code' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
  }
}
