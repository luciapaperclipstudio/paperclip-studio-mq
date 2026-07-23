import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://paperclipstudio.co.za'),
  title: 'paperclip studio — AI-Powered Websites for South African Businesses',
  description:
    'Professional websites and landing pages for South African businesses. Custom-built with AI, delivered in 3–7 days. Mobile-ready, SEO-optimised, and built to convert.',
  keywords: [
    'web design South Africa',
    'professional website South Africa',
    'landing page design SA',
    'small business website Johannesburg',
    'AI website builder South Africa',
    'web designer South Africa',
    'website for small business',
    'landing page South Africa',
    'web design agency Johannesburg',
    'business website South Africa',
  ],
  alternates: {
    canonical: 'https://paperclipstudio.co.za',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'paperclip studio | Websites for South African Businesses',
    description:
      'A professional, mobile-ready website — delivered in 3–7 days. Custom-built for SA businesses. From salons to contractors, we build sites that work.',
    type: 'website',
    url: 'https://paperclipstudio.co.za',
    siteName: 'paperclip studio',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'paperclip studio | AI Websites · South Africa',
    description:
      'Custom websites delivered in 3–7 days. Built for South African small businesses that are serious about their online presence.',
  },
  other: {
    'geo.region': 'ZA',
    'geo.placename': 'South Africa',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0efe8',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'paperclip studio',
  description:
    'AI-powered web design studio building sharp, mobile-ready websites and landing pages for South African businesses — fast turnaround, no agency markup.',
  url: 'https://paperclipstudio.co.za',
  email: 'hello@paperclipstudio.co.za',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'Gauteng',
  },
  areaServed: 'South Africa',
  priceRange: 'R1800–R7500',
  serviceType: ['Web Design', 'Landing Page Design', 'Business Website', 'SEO'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter Landing Page', price: '1800', priceCurrency: 'ZAR' },
      { '@type': 'Offer', name: 'Business Website', price: '3500', priceCurrency: 'ZAR' },
      { '@type': 'Offer', name: 'Premium + Ads-Ready', price: '7500', priceCurrency: 'ZAR' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${dmSans.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DE22GSB30T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DE22GSB30T');
          `}
        </Script>
      </body>
    </html>
  )
}
