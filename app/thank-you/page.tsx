import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { GoogleLeadEvent } from '@/components/site/google-lead-event'
import { MetaLeadEvent } from '@/components/site/meta-lead-event'
import { Navbar } from '@/components/site/navbar'
import { QuoteSummary, ThankYouGreeting } from '@/components/site/quote-summary'

export const metadata: Metadata = {
  title: 'Thank You — paperclip studio',
  description: 'Your quote request has been received. We\u2019ll be in touch within 24 hours.',
  robots: { index: false, follow: false },
}

// Details come from sessionStorage (see components/site/quote-summary.tsx),
// never the query string, so they stay out of analytics and ad tags.
export default function ThankYouPage() {
  return (
    <>
      <MetaLeadEvent />
      <GoogleLeadEvent />
      <Navbar />
      <main className="bg-cream">
        <section className="mx-auto max-w-2xl px-6 pb-24 pt-16 md:pt-20">
          <div className="border border-[#E0DDDA] bg-white px-6 py-10 text-center md:px-10">
            <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-steel text-charcoal">
              <Check size={28} strokeWidth={2.4} />
            </div>
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
              Quote request received
            </p>
            <h1 className="mb-2 font-serif text-3xl italic leading-tight text-charcoal md:text-4xl">
              <ThankYouGreeting />
            </h1>
            <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#888888]">
              We&apos;ll review your selections and send a custom quote to your email and WhatsApp
              within 24 hours.
            </p>

            <QuoteSummary />

            <div className="mt-6">
              <Link href="/" className="text-[13px] text-charcoal underline transition hover:text-charcoal/70">
                ← Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
