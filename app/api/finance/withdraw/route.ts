import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { decrypt } from '@/lib/crypto'

export async function POST(req: Request) {
  try {
    const { amount, currency } = await req.json()

    if (!amount || amount <= 0) {
      return new NextResponse('Invalid amount', { status: 400 })
    }

    const settings = await db.siteSettings.findFirst()
    const flwKey = decrypt(settings?.flwSecretKey) || process.env.FLW_SECRET_KEY

    if (!flwKey) {
      return new NextResponse('Logistics Error: Secure keys missing', { status: 500 })
    }

    if (!settings || !settings.settlementBankCode || !settings.settlementAccountNumber) {
      return new NextResponse('Settlement account not configured', { status: 400 })
    }

    // Call Flutterwave Transfer API
    const response = await fetch('https://api.flutterwave.com/v3/transfers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${flwKey}`,
      },
      body: JSON.stringify({
        account_bank: settings.settlementBankCode,
        account_number: settings.settlementAccountNumber,
        amount: amount,
        currency: currency || 'NGN',
        reference: `WD-${Date.now()}`,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/finance/webhook`,
        debit_currency: currency || 'NGN'
      }),
    })

    const data = await response.json()

    if (data.status === 'success') {
      // Record in DB
      const withdrawal = await db.withdrawal.create({
        data: {
          amount: parseFloat(amount),
          currency: currency || 'NGN',
          bankName: settings.settlementBankCode,
          accountNumber: settings.settlementAccountNumber,
          status: 'PENDING',
          transferCode: data.data.id.toString(),
          reference: data.data.reference
        }
      })

      return NextResponse.json(withdrawal)
    } else {
      console.error('[FLW_TRANSFER_ERROR]', data)
      return new NextResponse(data.message || 'Transfer failed', { status: 400 })
    }
  } catch (error) {
    console.error('[WITHDRAW_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
