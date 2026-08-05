import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { WhatsAppButton } from '@/components/site/whatsapp-button'

export const metadata: Metadata = {
  title: 'Thank You — paperclip studio',
  description: 'Your quote request has been received. We\u2019ll be in touch within 24 hours.',
  robots: { index: false, follow: false },
}

type SearchParams = Promise<{
  name?: string
  business?: string
  whatsapp?: string
  email?: string
  package?: string
  addons?: string
}>

export default async function ThankYouPage({ searchParams }: { searchParams: SearchParams }) {
  const { name, business, whatsapp, email, package: pkg, addons } = await searchParams

  const rows = [
    ['Package', pkg || '—'],
    ['Add-ons', addons || 'None selected'],
    ['Name', name || ''],
    ['Business', business || ''],
    ['WhatsApp', whatsapp || ''],
    ['Email', email || ''],
  ].filter(([, value]) => value !== '')

  return (
    <>
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
              You&apos;re all set{name ? `, ${name.split(' ')[0]}` : ''}.
            </h1>
            <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#888888]">
              We&apos;ll review your selections and send a custom quote to your email and WhatsApp
              within 24 hours.
            </p>

            {rows.length ? (
              <div className="mx-auto mb-8 max-w-md border border-[#E0DDDA] bg-[#F7F6F2] p-5 text-left">
                <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
                  Your selections
                </p>
                {rows.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-start gap-2.5 py-2 text-[13.5px] ${
                      i < rows.length - 1 ? 'border-b border-[#E0DDDA]' : ''
                    }`}
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                    <span className="w-20 shrink-0 font-semibold text-charcoal">{k}</span>
                    <span className="min-w-0 flex-1 break-words text-[#888888]">{v}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <p className="mb-5 text-[13px] leading-relaxed text-[#888888]">
              Got a question in the meantime? Message us on WhatsApp — we respond fast.
            </p>
            <WhatsAppButton className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95" />

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
