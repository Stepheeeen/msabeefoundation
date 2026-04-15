import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.SESSION_SECRET || 'fallback_secret_for_dev_only'
const key = new TextEncoder().encode(secretKey)

export async function encryptSession(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key)
}

export async function decryptSession(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(password: string) {
  if (password !== process.env.ADMIN_PASSWORD) {
    return false
  }

  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours
  const session = await encryptSession({ user: 'admin', expires })

  const cookieStore = await cookies()
  cookieStore.set('msabee_session', session, { expires, httpOnly: true, secure: process.env.NODE_ENV === 'production' })
  return true
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.set('msabee_session', '', { expires: new Date(0) })
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('msabee_session')?.value
  if (!session) return null
  return await decryptSession(session)
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('msabee_session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire while active
  const parsed = await decryptSession(session)
  parsed.expires = new Date(Date.now() + 2 * 60 * 60 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'msabee_session',
    value: await encryptSession(parsed),
    httpOnly: true,
    expires: parsed.expires as Date,
  })
  return res
}
