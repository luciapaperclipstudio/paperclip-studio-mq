import type { Metadata } from 'next'
import { Contact } from '@/components/site/contact'
import { faqJsonLd } from '@/app/layout'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { HowItWorks } from '@/components/site/how-it-works'
import { Navbar } from '@/components/site/navbar'
import { Portfolio } from '@/components/site/portfolio'
import { QuoteCta } from '@/components/site/quote-cta'
import { Services } from '@/components/site/services'
import { Testimonials } from '@/components/site/testimonials'
import { Promises } from '@/components/site/promises'
import { WhoWeBuildFor } from '@/components/site/who-we-build-for'
import { TrustStrip } from '@/components/site/trust-strip'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <TrustStrip />
        <WhoWeBuildFor />
        <Services />
        <Promises />
        <Portfolio />
        <HowItWorks />
        <QuoteCta
          variant="band"
          title="Like what you see? Let's build yours."
          subtitle="Tell us what you need and we'll send a free, no-obligation quote."
        />
        <Testimonials />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
