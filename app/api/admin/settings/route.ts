import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { decrypt, encrypt, maskCredential } from '@/lib/crypto'
import { z } from 'zod'

const SettingsSchema = z.object({
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  contactLocation: z.string().optional(),
  impactAthletes: z.number().int().min(0).optional(),
  impactScholarships: z.number().int().min(0).optional(),
  impactCommunities: z.number().int().min(0).optional(),
  impactTeams: z.number().int().min(0).optional(),
  bankName: z.string().optional(),
  accountName: z.string().optional(),
  accountNumber: z.string().optional(),
  settlementBankCode: z.string().optional(),
  settlementAccountNumber: z.string().optional(),
  flwSecretKey: z.string().optional(),
  resendApiKey: z.string().optional(),
  adminReportEmail: z.string().email().optional(),
  cloudinaryCloudName: z.string().optional(),
  cloudinaryUploadPreset: z.string().optional(),
})

export async function GET(request: Request) {
  try {
    let settings = await db.siteSettings.findFirst()

    if (!settings) {
      // Initialize if not exists
      settings = await db.siteSettings.create({
        data: {}, // Uses defaults from schema
      })
    }

    const { searchParams } = new URL(request.url)
    const unmask = searchParams.get('unmask') === 'true'

    const decryptField = (value: string | null | undefined) => {
      if (!value) return null
      return decrypt(value)
    }

    // Return unmasked details if requested (Admin UI flow)
    if (unmask) {
      return NextResponse.json({
        ...settings,
        flwSecretKey: decryptField(settings.flwSecretKey),
        resendApiKey: decryptField(settings.resendApiKey),
        cloudinaryUploadPreset: decryptField(settings.cloudinaryUploadPreset),
      })
    }

    // Mask sensitive fields for general telemetry
    const maskedSettings = {
      ...settings,
      flwSecretKey: maskCredential(settings.flwSecretKey),
      resendApiKey: maskCredential(settings.resendApiKey),
      cloudinaryUploadPreset: maskCredential(settings.cloudinaryUploadPreset),
    }

    return NextResponse.json(maskedSettings)
  } catch (error) {
    console.error('[SETTINGS_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.json()
    
    // Validate with Zod
    const validation = SettingsSchema.safeParse(rawBody)
    if (!validation.success) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid data protocol', 
        errors: validation.error.flatten().fieldErrors 
      }, { status: 400 })
    }

    const body = validation.data
    
    // Fetch existing for comparison
    const existing = await db.siteSettings.findFirst()

    // Function to handle conditional encryption
    const processField = (newValue: any, oldValue: any) => {
      if (!newValue) return null
      // If it looks like a mask, keep the old encrypted value
      if (typeof newValue === 'string' && newValue.includes('••••')) return oldValue
      return encrypt(newValue)
    }

    const dataToUpdate = {
      ...body,
      flwSecretKey: processField(body.flwSecretKey, existing?.flwSecretKey),
      resendApiKey: processField(body.resendApiKey, existing?.resendApiKey),
      cloudinaryUploadPreset: processField(body.cloudinaryUploadPreset, existing?.cloudinaryUploadPreset),
    }

    if (!existing) {
      const settings = await db.siteSettings.create({
        data: dataToUpdate,
      })
      return NextResponse.json(settings)
    }

    const updatedSettings = await db.siteSettings.update({
      where: { id: existing.id },
      data: dataToUpdate,
    })

    return NextResponse.json(updatedSettings)
  } catch (error) {
    console.error('[SETTINGS_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
