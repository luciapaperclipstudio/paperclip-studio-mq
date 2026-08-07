'use client'

import { cn } from '@/lib/utils'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const faqs = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most projects are completed in 3–7 business days, depending on how quickly we receive your content.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Your logo, business photos (or we use stock images), your services list, and contact details. We send a simple intake form to collect everything.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Yes — every site we build is fully mobile-responsive and tested across devices.',
  },
  {
    q: 'Do you handle hosting and domain setup?',
    a: 'We can register your domain and set up hosting as an add-on, or deliver the files to host on your own server. Either way it is priced in your quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept EFT, credit/debit card (via PayFast or Yoco), and PayPal for international clients. A 50% deposit is required to start; the balance is due on delivery.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal md:text-4xl">
            Questions answered.
          </h2>
        </Reveal>

        <Reveal className="mt-10 divide-y divide-charcoal/15 border-y border-charcoal/15">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-charcoal">{f.q}</span>
                  <span className="shrink-0 text-charcoal">
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
