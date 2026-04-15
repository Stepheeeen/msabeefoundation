import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MSA BEE Foundation'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Architectural Background Grid */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Branding */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
             <span style={{ fontSize: 100, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>MSA</span>
             <span style={{ fontSize: 100, fontWeight: 900, color: '#f59e0b', letterSpacing: '-0.05em' }}>BEE</span>
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: 'white', opacity: 0.4, letterSpacing: '0.8em', textTransform: 'uppercase' }}>
            Foundation
          </div>
        </div>

        {/* Motto / Impact */}
        <div style={{ marginTop: 80, fontSize: 32, color: 'white', textAlign: 'center', maxWidth: 800, lineHeight: 1.4, opacity: 0.8 }}>
          Holistic Development & Educational Excellence Through Sports in Nigeria
        </div>

        {/* Decorative Lines */}
        <div style={{ position: 'absolute', top: 60, left: 60, width: 60, height: 4, background: '#f59e0b' }} />
        <div style={{ position: 'absolute', bottom: 60, right: 60, width: 60, height: 4, background: '#f59e0b' }} />
      </div>
    ),
    {
      ...size,
    }
  )
}
