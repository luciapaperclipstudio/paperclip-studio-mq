'use client'

import { submitContact } from '@/app/actions/leads'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const inputClass =
  'w-full rounded border border-charcoal/30 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/40'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('saving')
    setError(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await submitContact({
      name: String(data.get('name') ?? ''),
      businessName: String(data.get('businessName') ?? ''),
      phone: String(data.get('phone') ?? ''),
      email: String(data.get('email') ?? ''),
      packageInterest: String(data.get('packageInterest') ?? ''),
      message: String(data.get('message') ?? ''),
    })
    if (!res.ok) {
      setStatus('error')
      setError(res.error ?? 'Something went wrong.')
      return
    }
    setStatus('done')
    form.reset()
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <SectionLabel>Get a Quote</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Let&apos;s get your business online.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            Fill in the form and we&apos;ll come back to you with a confirmed quote within 24 hours.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-charcoal">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-steel" />
              hello@paperclipstudio.co.za
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-steel" />
              WhatsApp: +27 XX XXX XXXX
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-steel" />
              South Africa (serving clients nationwide)
            </li>
          </ul>
          <a
            href="#pricing"
            className="mt-8 inline-block font-serif text-lg italic text-steel transition-colors hover:text-charcoal"
          >
            Or start building your package &rarr;
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-charcoal/15 bg-white p-6 md:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-charcoal">
                  Full Name
                </label>
                <input id="name" name="name" required className={inputClass} />
              </div>
              <div>
                <label
                  htmlFor="businessName"
                  className="mb-1.5 block text-xs font-medium text-charcoal"
                >
                  Business Name
                </label>
                <input id="businessName" name="businessName" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-charcoal">
                  Phone / WhatsApp number
                </label>
                <input id="phone" name="phone" type="tel" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-charcoal">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required className={inputClass} />
              </div>
              <div>
                <label
                  htmlFor="packageInterest"
                  className="mb-1.5 block text-xs font-medium text-charcoal"
                >
                  Package interested in
                </label>
                <select id="packageInterest" name="packageInterest" className={inputClass}>
                  <option>Not sure yet</option>
                  <option>Starter Landing Page</option>
                  <option>Business Website</option>
                  <option>Premium + Ads-Ready</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-charcoal"
                >
                  Message / Tell us about your business
                </label>
                <textarea id="message" name="message" rows={4} className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={status === 'saving'}
                className="mt-1 w-full rounded bg-yellow px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95 disabled:opacity-60"
              >
                {status === 'saving' ? 'Sending…' : 'Send My Quote Request'}
              </button>
              {status === 'done' ? (
                <p className="text-sm text-charcoal">
                  Thanks! We&apos;ve received your request and will reply within 24 hours.
                </p>
              ) : null}
              {status === 'error' ? <p className="text-sm text-red-600">{error}</p> : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
