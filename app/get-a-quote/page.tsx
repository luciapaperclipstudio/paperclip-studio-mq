import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { QuoteQuiz } from '@/components/site/quote-quiz'

export const metadata: Metadata = {
  title: 'Get a Quote — paperclip studio',
  description:
    'Answer three quick questions and get a custom website quote from paperclip studio within 24 hours.',
}

export default function GetAQuotePage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel">
              Free · No obligation
            </p>
            <h1 className="mt-3 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
              Let&apos;s build your website.
            </h1>
            <p className="mx-auto mt-3 max-w-md text-charcoal/70 leading-relaxed">
              Three quick questions — we&apos;ll send a tailored quote to your email and WhatsApp
              within 24 hours.
            </p>
          </div>
          <QuoteQuiz />
        </section>
      </main>
      <Footer />
    </>
  )
}
