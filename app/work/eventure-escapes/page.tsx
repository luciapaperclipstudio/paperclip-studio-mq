import type { Metadata } from 'next'
import Image from 'next/image'
import { Palette, Images, Send, Quote } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

export const metadata: Metadata = {
  title: 'Eventure Escapes | Paperclip Studio',
  description:
    'How Paperclip Studio built a luxury travel website for Eventure Escapes in 5–7 days — elegant, on-brand, and built to convert.',
  alternates: { canonical: 'https://paperclipstudio.co.za/work/eventure-escapes' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eventure Escapes — Luxury Travel Website by Paperclip Studio',
  author: { '@type': 'Organization', name: 'Paperclip Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Paperclip Studio',
    url: 'https://paperclipstudio.co.za',
  },
  description:
    'Case study: AI-powered luxury travel website built for Eventure Escapes in 5–7 days.',
  url: 'https://paperclipstudio.co.za/work/eventure-escapes',
}

const features = [
  {
    icon: Palette,
    title: 'Luxury visual identity',
    body: "A refined, editorial design system that reflects the premium nature of Eventure Escapes' brand — not a generic travel template.",
  },
  {
    icon: Images,
    title: 'Package showcase & gallery',
    body: 'A curated showcase of travel experiences with a full photo gallery, designed to inspire and convert high-intent visitors.',
  },
  {
    icon: Send,
    title: 'Enquiry-optimised flow',
    body: 'Every design decision points toward one goal: getting the right clients to make contact. The enquiry form is prominent, frictionless, and mobile-friendly.',
  },
]

const stats = [
  { value: '5–7', label: 'Days from brief to launch' },
  { value: 'Simple', label: 'Smooth, collaborative process' },
  { value: 'R3,500', label: 'Total investment' },
]

export default function EventureEscapesCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* a) Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Luxury Travel · South Africa</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                Eventure Escapes
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                A luxury travel website built to attract high-net-worth clients and turn visitors
                into qualified booking enquiries.
              </p>
            </Reveal>
          </div>
        </section>

        {/* b) Project overview */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-xl border border-[#e0ddda] bg-[#e0ddda] md:grid-cols-2">
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Brief
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    Eventure Escapes is a boutique South African travel company crafting
                    personalised luxury journeys. Emma needed a website that matched the premium,
                    considered nature of her brand — something that felt as elegant as the trips
                    themselves, and that would generate genuine enquiries from the right kind of
                    clients.
                  </p>
                </div>
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Solution
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    We built a full business website with a luxury visual identity, curated package
                    showcase, photo gallery, and an enquiry form — all designed to feel as premium
                    as the experiences Eventure Escapes sells. The entire process took 5–7 days from
                    brief to launch.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* c) Full-width website preview */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-charcoal/15 bg-white shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
                {/* Replace with actual screenshot */}
                <Image
                  src="/portfolio/eventure-escapes-desktop.jpeg"
                  alt="Eventure Escapes luxury travel website — designed by Paperclip Studio"
                  width={1600}
                  height={1000}
                  className="block h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* d) What we built */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>What We Built</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                Designed to feel as premium as the trips.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 100}>
                  <article className="flex h-full flex-col border border-[#e0ddda] bg-white p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-steel/25 text-charcoal">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-charcoal">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* e) Results / stats */}
        <section className="bg-charcoal">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 text-center sm:grid-cols-3 md:py-20">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <p className="font-serif text-4xl italic text-steel md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* f) Client testimonial */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <Quote
                className="mx-auto h-12 w-12 text-steel"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-charcoal text-balance md:text-[2rem] md:leading-[1.4]">
                &ldquo;When it came to building the website for Eventure Escapes, I knew I wanted
                something that truly reflected the luxury and personal touch we bring to every
                journey we craft. Lucia understood that vision from day one — translating my brand
                into a site that&apos;s as elegant and considered as the trips themselves. The whole
                process was smooth, collaborative, and honestly enjoyable. I couldn&apos;t be
                happier with the result, and I&apos;d recommend Paperclip Studio to anyone looking
                for a website that actually feels like their brand.&rdquo;
              </blockquote>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal/60">
                — Emma, Eventure Escapes
              </p>
            </Reveal>
          </div>
        </section>

        {/* g) Bottom CTA */}
        <section className="bg-charcoal">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
              Like what you see? Let&apos;s build yours.
            </h2>
            <p className="max-w-xl text-white/70 leading-relaxed">
              We&apos;ll translate your brand into a website you&apos;re proud of — in under a week.
            </p>
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-2 rounded bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95"
            >
              Get a Free Quote &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
