import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <SectionLabel>Web Design Studio · South Africa</SectionLabel>
          <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
            Web Design for South African Businesses
          </h1>
          <p className="mt-4 font-serif text-xl italic font-light leading-snug text-charcoal/70 text-balance md:text-2xl">
            Built to convert. Delivered in 3–7 days.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            An innovative web design studio building clean, fast, mobile-first websites for
            businesses in{' '}
            <a href="/locations/web-designer-cape-town" className="underline-offset-2 hover:underline">
              Cape Town
            </a>
            ,{' '}
            <a href="/locations/web-designer-johannesburg" className="underline-offset-2 hover:underline">
              Joburg
            </a>
            ,{' '}
            <a href="/locations/web-designer-durban" className="underline-offset-2 hover:underline">
              Durban
            </a>
            ,{' '}
            <a href="/locations/web-designer-pretoria" className="underline-offset-2 hover:underline">
              Pretoria
            </a>{' '}
            and across South Africa. Designed by hand, built faster with AI.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/get-a-quote"
              className="rounded bg-steel px-6 py-3 text-center text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Get a Free Quote &rarr;
            </a>
            <a
              href="#portfolio"
              className="rounded border border-charcoal px-6 py-3 text-center text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              See Our Work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {['Delivered in 3–7 days', 'Mobile-first', 'Built for SA businesses'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-steel" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
