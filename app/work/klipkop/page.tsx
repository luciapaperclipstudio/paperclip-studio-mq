import type { Metadata } from 'next'
import Image from 'next/image'
import { BookOpen, Palette, Sparkles } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

const SITE_URL = 'https://luciapaperclipstudio.github.io/klipkop/'

export const metadata: Metadata = {
  title: 'KLIPKOP Gallery (Concept) | Paperclip Studio',
  description:
    'A concept website for a fictional Cape Town art gallery, built by Paperclip Studio to show what an editorial, eclectic and fully on-brand website can look like.',
  alternates: { canonical: 'https://www.paperclipstudio.co.za/work/klipkop' },
}

// KLIPKOP is a mock-up, not a client. Everything on this page says so
// plainly: no testimonial, no results, no client name.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KLIPKOP Gallery — Concept Website by Paperclip Studio',
  author: { '@type': 'Organization', name: 'Paperclip Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Paperclip Studio',
    url: 'https://www.paperclipstudio.co.za',
  },
  description:
    'Concept project: an editorial, magazine-style website for a fictional art gallery in Woodstock, Cape Town.',
  url: 'https://www.paperclipstudio.co.za/work/klipkop',
}

const features = [
  {
    icon: BookOpen,
    title: 'Editorial structure',
    body: 'The whole site reads like a printed catalogue: issue numbers, page references, a contents list and a cover story. The layout carries the personality, not just the pictures.',
  },
  {
    icon: Palette,
    title: 'A brand, not a template',
    body: 'A tight five-colour palette, a custom tile pattern, and four typefaces with clear jobs. Every section uses the same system, so it feels designed rather than assembled.',
  },
  {
    icon: Sparkles,
    title: 'Eclectic, with a voice',
    body: 'Handwritten asides, a scrolling ticker, and copy with local character. Playful touches that make the brand memorable without getting in the way of the content.',
  },
]

export default function KlipkopCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Concept Project · Art Gallery · Cape Town</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                KLIPKOP Gallery
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                A mock-up website for a fictional art gallery in Cape Town, made to show what
                Paperclip Studio can do with an editorial, eclectic and completely on-brand design.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-xl border border-[#e0ddda] bg-[#e0ddda] md:grid-cols-2">
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    Why We Made It
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    KLIPKOP isn&apos;t a real gallery. We invented it, along with its artists,
                    exhibitions and artworks, to stretch beyond the clean, minimal sites most small
                    businesses ask for. We wanted to show that a website can have as much personality
                    as the brand behind it.
                  </p>
                </div>
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Approach
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    We designed the site as an independent art magazine, with a cover story, artist
                    profiles, a collection page, a visit section and a newsletter sign-up. If your
                    brand is bold, quirky or creative, this is the kind of website we can build
                    for you.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full-page preview in a scrollable browser frame */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
            <Reveal>
              <figure className="overflow-hidden rounded-xl border border-charcoal/15 bg-white shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
                <div className="flex items-center gap-2 border-b border-charcoal/10 bg-cream px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="ml-3 truncate rounded bg-white px-3 py-1 text-xs text-charcoal/50">
                    KLIPKOP Gallery · concept site
                  </span>
                </div>
                <div className="h-[600px] overflow-y-auto overscroll-contain bg-white">
                  <Image
                    src="/work/klipkop-full.jpeg"
                    alt="Full homepage of the KLIPKOP Gallery concept website, designed by Paperclip Studio"
                    width={1200}
                    height={8666}
                    className="block h-auto w-full"
                    priority
                  />
                </div>
              </figure>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Scroll within the frame to explore the full homepage, or{' '}
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-charcoal underline underline-offset-2"
                >
                  visit the live concept site
                </a>
                .
              </figcaption>
            </Reveal>
          </div>
        </section>

        {/* What it shows */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>What It Shows</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                Bold brands deserve bold websites.
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

        {/* Bottom CTA */}
        <section className="bg-charcoal">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
              Got a brand with personality? Let&apos;s show it off.
            </h2>
            <p className="max-w-xl text-white/70 leading-relaxed">
              We&apos;ll design a website that looks and sounds like you, not like a template.
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
