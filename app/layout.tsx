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
  metadataBase: new URL('https://www.paperclipstudio.co.za'),
  // Keyword first, brand omitted. The front of a title tag carries the most
  // weight and gets shown before truncation (~60 chars), so it goes to the
  // term people actually search rather than a brand name they don't know yet.
  // Brand searches find the homepage regardless of the title.
  title: 'Web Design South Africa | Custom Websites in 3–7 Days',
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
    canonical: 'https://www.paperclipstudio.co.za',
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
    url: 'https://www.paperclipstudio.co.za',
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

// Structured data (JSON-LD). Each object below is rendered into its own
// <script type="application/ld+json"> tag so search engines can parse them
// independently. Keep these in sync with the visible content on the page.
// Canonical profile URLs. These are what let an engine confirm that a mention
// of "Paperclip Studio" elsewhere is this business — there are several
// similarly-named South African companies, so the disambiguation is load-bearing.
// TODO: add the Google Business Profile once the canonical Maps URL is known
// (a share.google short link redirects to a search wrapper, not a stable page).
export const SAME_AS = [
  // Google Business Profile, in ?cid= form. Derived from the listing's own CID
  // rather than a maps.app.goo.gl share link, which is a redirect and can expire.
  'https://maps.google.com/?cid=16979307826701520713',
  'https://www.instagram.com/paperclip.studio_/',
  'https://www.facebook.com/people/Paperclip-Studio/61586866732770/',
]

export const GOOGLE_MAPS_URL = SAME_AS[0]

// The author entity behind the site's advice content. Answer engines weight who
// wrote something, so articles are attributed to a real person rather than
// nobody.
export const AUTHOR = {
  '@type': 'Person',
  '@id': 'https://www.paperclipstudio.co.za/#lucia',
  name: 'Lucia',
  jobTitle: 'Founder',
  worksFor: { '@type': 'Organization', name: 'Paperclip Studio' },
  url: 'https://www.paperclipstudio.co.za/about',
} as const

const jsonLdBlocks = [
  // 1. WebSite
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Paperclip Studio',
    url: 'https://www.paperclipstudio.co.za',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.paperclipstudio.co.za/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  // 2. LocalBusiness
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Paperclip Studio',
    url: 'https://www.paperclipstudio.co.za',
    email: 'hello@paperclipstudio.co.za',
    description:
      'AI-powered websites and landing pages for South African businesses. Custom-built, mobile-ready, SEO-optimised and delivered in 3–7 days.',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    serviceType: ['Web Design', 'Landing Page Design', 'AI Website Development'],
    image: 'https://www.paperclipstudio.co.za/opengraph-image',
    sameAs: SAME_AS,
    hasMap: GOOGLE_MAPS_URL,
    founder: AUTHOR,
  },
  // 2b. Person — the author entity, declared once so articles can reference it
  // by @id rather than repeating it.
  {
    '@context': 'https://schema.org',
    ...AUTHOR,
    description:
      'Founder of Paperclip Studio, building websites and landing pages for South African businesses.',
    sameAs: SAME_AS,
  },
  // 3. Service — Starter Landing Page
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Starter Landing Page',
    provider: { '@type': 'LocalBusiness', name: 'Paperclip Studio' },
    description:
      'A single-page website built to convert visitors into leads. Mobile-first, SEO-optimised and delivered fast.',
  },
  // 3. Service — Business Website
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Website',
    provider: { '@type': 'LocalBusiness', name: 'Paperclip Studio' },
    description:
      'A multi-section business website with portfolio, services, and contact — built with AI and delivered in under a week.',
  },
  // 3. Service — Premium + Ads-Ready Website
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Premium + Ads-Ready Website',
    provider: { '@type': 'LocalBusiness', name: 'Paperclip Studio' },
    description:
      'Full premium website with Google Ads and Meta Ads integration, conversion tracking, and advanced SEO.',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${dmSans.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {jsonLdBlocks.map((block, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1966914974191354');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1966914974191354&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}


// FAQPage schema. Exported rather than included in jsonLdBlocks because that
// array renders in the root layout on every page, and this markup is only
// valid where the FAQ is actually visible — the homepage and location pages.
// Emitting it site-wide described content that was not on the page.
export const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to build my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects are completed in 3–7 business days, depending on how quickly we receive your content.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your logo, business photos (or we use stock images), your services list, and contact details. We send a simple intake form to collect everything.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website work on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — every site we build is fully mobile-responsive and tested across devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle hosting and domain setup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can register your domain and set up hosting as an add-on, or deliver the files to host on your own server. Either way it is priced in your quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept EFT, credit/debit card (via PayFast or Yoco), and PayPal for international clients. A 50% deposit is required to start; the balance is due on delivery.',
        },
      },
    ],
}
