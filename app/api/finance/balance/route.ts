import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { decrypt } from '@/lib/crypto'

export async function GET() {
  try {
    const settings = await db.siteSettings.findFirst()
    const flwKey = decrypt(settings?.flwSecretKey) || process.env.FLW_SECRET_KEY

    // Call Flutterwave Balance API
    const response = await fetch('https://api.flutterwave.com/v3/balances/NGN', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${flwKey}`,
      },
    })

    const data = await response.json()

    if (data.status === 'success') {
      return NextResponse.json(data.data)
    } else {
      // Fallback/Mock for sandbox
      return NextResponse.json({
        currency: 'NGN',
        available_balance: 0,
        ledger_balance: 0
      })
    }
  } catch (error) {
    console.error('[FINANCE_BALANCE]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
