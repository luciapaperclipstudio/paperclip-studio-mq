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
import { TrustStrip } from '@/components/site/trust-strip'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <Portfolio />
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
