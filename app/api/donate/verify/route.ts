import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendDonationEmail } from '@/lib/mail'
import { decrypt } from '@/lib/crypto'

export async function POST(req: Request) {
  try {
    const { transaction_id, tx_ref } = await req.json()

    if (!transaction_id) {
      return new NextResponse('Transaction ID required', { status: 400 })
    }

    // Fetch credentials from DB
    const settings = await db.siteSettings.findFirst()
    const flwKey = decrypt(settings?.flwSecretKey) || process.env.FLW_SECRET_KEY

    if (!flwKey) {
      return new NextResponse('Logistics Error: Secure keys missing', { status: 500 })
    }

    // Call Flutterwave to verify
    const response = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${flwKey}`,
      },
    })

    const data = await response.json()

    if (data.status === 'success' && data.data.status === 'successful') {
      const { amount, currency, customer, tx_ref: flw_tx_ref } = data.data

      // Update or Create Donation record
      const donation = await db.donation.upsert({
        where: { txRef: flw_tx_ref },
        update: {
          status: 'SUCCESS',
          flwId: transaction_id,
          customerName: customer.name,
        },
        create: {
          email: customer.email,
          amount: parseFloat(amount),
          currency,
          txRef: flw_tx_ref,
          flwId: transaction_id,
          status: 'SUCCESS',
          customerName: customer.name,
        },
      })

      // Send Email Notification to Admin
      await sendDonationEmail(
        amount, 
        currency, 
        customer.email, 
        decrypt(settings?.resendApiKey), 
        settings?.adminReportEmail
      )

      return NextResponse.json(donation)
    } else {
      return new NextResponse('Payment verification failed', { status: 400 })
    }
  } catch (error) {
    console.error('[DONATE_VERIFY]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
