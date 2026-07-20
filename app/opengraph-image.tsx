import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'paperclip studio — AI-powered websites for South African businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0efe8',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontSize: 128, fontStyle: 'italic', color: '#8a8f98' }}>paper</span>
          <span style={{ fontSize: 128, fontWeight: 800, color: '#a9bcd6' }}>clip.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#333333',
          }}
        >
          Studio
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: '#5c5c5c' }}>
          AI-powered websites for South African businesses
        </div>
      </div>
    ),
    { ...size },
  )
}
