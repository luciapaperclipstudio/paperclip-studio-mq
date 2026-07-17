import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const projects = [
  { label: 'Hair Salon — Cape Town', tone: '#f0e7c8' },
  { label: 'Electrical Contractor — Johannesburg', tone: '#dbe4ee' },
  { label: 'Catering Company — Pretoria', tone: '#e3e2d6' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Clean, purposeful, and built to convert.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <figure>
                <div className="group relative overflow-hidden rounded-lg border border-charcoal/20 bg-white">
                  <div className="flex items-center gap-1.5 border-b border-charcoal/10 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-charcoal/20" />
                    <span className="h-2 w-2 rounded-full bg-charcoal/20" />
                    <span className="h-2 w-2 rounded-full bg-charcoal/20" />
                  </div>
                  <div className="relative h-56" style={{ backgroundColor: p.tone }}>
                    <div className="flex h-full flex-col justify-center gap-2 px-6">
                      <div className="h-3 w-1/2 rounded bg-charcoal/15" />
                      <div className="h-2 w-3/4 rounded bg-charcoal/10" />
                      <div className="h-2 w-2/3 rounded bg-charcoal/10" />
                      <div className="mt-3 h-7 w-28 rounded bg-charcoal/20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/70 group-hover:opacity-100">
                      <span className="text-sm font-medium text-white">View Project &rarr;</span>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-medium text-charcoal/80">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
