import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function BrowserMock({
  label,
  className,
  tone,
  image,
}: {
  label: string
  className?: string
  tone: string
  image?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-charcoal/15 bg-white shadow-[0_10px_30px_-12px_rgba(51,51,51,0.25)] ${className ?? ''}`}
    >
      <div className="flex items-center gap-1.5 border-b border-charcoal/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-charcoal/20" />
        <span className="h-2 w-2 rounded-full bg-charcoal/20" />
        <span className="h-2 w-2 rounded-full bg-charcoal/20" />
      </div>
      {image ? (
        <img
          src={image || '/placeholder.svg'}
          alt={label}
          className="block h-auto w-full"
          loading="lazy"
        />
      ) : (
        <div className="p-3">
          <div className="mb-3 h-16 rounded" style={{ backgroundColor: tone }} />
          <div className="mb-2 h-2 w-2/3 rounded bg-charcoal/10" />
          <div className="mb-2 h-2 w-full rounded bg-charcoal/10" />
          <div className="h-2 w-1/2 rounded bg-charcoal/10" />
          <p className="mt-3 text-[11px] font-medium text-charcoal/60">{label}</p>
        </div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
        <Reveal className="md:col-span-3">
          <SectionLabel>Web Design Studio · South Africa</SectionLabel>
          <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
            AI-Powered Websites for South African Businesses
          </h1>
          <p className="mt-4 font-serif text-xl italic font-light leading-snug text-charcoal/70 text-balance md:text-2xl">
            Built to convert. Delivered in 3–7 days.
          </p>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            We build clean, fast, and mobile-first websites for South African businesses — powered
            by AI, delivered in days.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {['Delivered in 3–7 days', 'Mobile-first', 'Built for SA businesses'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-steel" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={150}>
          <div className="relative rounded-xl bg-gradient-to-br from-cream to-white p-6 shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
            <BrowserMock
              label="Sea & Salt Events Studio · Durban"
              tone="#dce7ef"
              image="/portfolio/sea-and-salt-desktop.png"
              className="w-[88%] -rotate-2"
            />
            <BrowserMock
              label="Eventure Escapes · Luxury Travel"
              tone="#f0e7c8"
              image="/portfolio/eventure-escapes-desktop.jpeg"
              className="-mt-6 ml-auto w-[82%] rotate-1"
            />
            <BrowserMock
              label="The Harvest Table · Catering"
              tone="#dbe4ee"
              image="/portfolio/harvest-table-desktop.png"
              className="-mt-6 w-[74%] -rotate-1"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
