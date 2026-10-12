import { Wrench } from 'lucide-react'
import { ProcessStepper } from './process-stepper'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// Monthly maintenance is the only care plan (see the 'maintenance' add-on in
// lib/packages). Its price is confirmed in the quote rather than shown here.
const maintenancePoints = [
  'Content updates when you need them',
  'Regular backups',
  'Uptime monitoring, so we know if your site goes down',
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
              From first message to live website.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Seven simple steps. Most websites are live within a week of us receiving your
              content.
            </p>
          </div>
        </Reveal>

        <ProcessStepper />

        {/* The one care plan */}
        <Reveal>
          <div
            id="care-plans"
            className="mx-auto mt-16 flex max-w-3xl flex-col gap-6 border border-[#e0ddda] bg-white p-7 sm:flex-row sm:items-center md:p-9"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-steel/25 text-charcoal">
              <Wrench className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-charcoal">Monthly Maintenance</h3>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                  Optional add-on
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Prefer to hand it over after launch? We&apos;ll look after your website month to
                month. Add it when you order or any time later.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                {maintenancePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-charcoal">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
