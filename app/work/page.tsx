import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

export const metadata: Metadata = {
  title: 'Our Work | Paperclip Studio',
  description:
    'Case studies from Paperclip Studio — real websites built for South African businesses, elegant, on-brand, and built to convert.',
  alternates: { canonical: 'https://www.paperclipstudio.co.za/work' },
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Our Work</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                Websites we&apos;re proud of.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                A closer look at the businesses we&apos;ve helped bring online — and the thinking
                behind each build.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Featured case study */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal>
              <a
                href="/work/eventure-escapes"
                className="group grid overflow-hidden rounded-xl border border-[#e0ddda] bg-cream transition-shadow hover:shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)] md:grid-cols-2"
              >
                <div className="overflow-hidden border-b border-[#e0ddda] md:border-b-0 md:border-r">
                  <Image
                    src="/portfolio/eventure-escapes-desktop.jpeg"
                    alt="Eventure Escapes luxury travel website — designed by Paperclip Studio"
                    width={1200}
                    height={900}
                    className="block h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    Luxury Travel · South Africa
                  </span>
                  <h2 className="mt-3 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                    Eventure Escapes
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                    A luxury travel website built to attract high-net-worth clients and turn
                    visitors into qualified booking enquiries — delivered in 5–7 days.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal">
                    View Case Study
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-12 text-center text-sm text-muted-foreground">
                More case studies coming soon.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
