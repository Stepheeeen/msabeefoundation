import crypto from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const AUTH_TAG_LENGTH = 16

const getEncryptionKey = () => {
  const key = process.env.MASTER_ENCRYPTION_KEY
  if (!key) {
    throw new Error('MASTER_ENCRYPTION_KEY is required for sensitive logistics operations.')
  }
  // Ensure exactly 32 bytes for aes-256
  return crypto.scryptSync(key, 'salt', 32)
}

export function encrypt(text: string | null | undefined): string | null {
  if (!text) return null
  
  const iv = crypto.randomBytes(IV_LENGTH)
  const key = getEncryptionKey()
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
  
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  const authTag = cipher.getAuthTag().toString('hex')
  
  // Format: iv:authTag:encrypted
  return `${iv.toString('hex')}:${authTag}:${encrypted}`
}

export function decrypt(encryptedText: string | null | undefined): string | null {
  if (!encryptedText) return null
  
  try {
    const [ivHex, authTagHex, encrypted] = encryptedText.split(':')
    if (!ivHex || !authTagHex || !encrypted) return encryptedText // Not encrypted?

    const iv = Buffer.from(ivHex, 'hex')
    const authTag = Buffer.from(authTagHex, 'hex')
    const key = getEncryptionKey()
    
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
    decipher.setAuthTag(authTag)
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  } catch (error) {
    console.warn('Decryption failed, returning original value.', error)
    return encryptedText
  }
}

export function maskCredential(text: string | null | undefined): string | null {
  if (!text) return null
  if (text.length <= 8) return '••••••••'
  return `${text.slice(0, 4)}••••${text.slice(-4)}`
}
