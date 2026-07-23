import { ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

type Project = {
  label: string
  subLabel: string
  url?: string
  image?: string
  tone?: string
  caseStudy?: string
}

const projects: Project[] = [
  {
    label: 'Sea & Salt Events Studio',
    subLabel: 'Event Planning — Durban',
    image: '/portfolio/sea-and-salt-desktop.png',
  },
  {
    label: 'Eventure Escapes',
    subLabel: 'Luxury Travel — Cape Town',
    url: 'https://eventureescapes.com',
    image: '/portfolio/eventure-escapes-desktop.jpeg',
    caseStudy: '/work/eventure-escapes',
  },
  {
    label: 'The Harvest Table',
    subLabel: 'Event Catering — Johannesburg',
    image: '/portfolio/harvest-table-desktop.png',
  },
]

function BrowserCard({ project }: { project: Project }) {
  return (
    <figure className="flex flex-col">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-lg border border-charcoal/15 bg-white shadow-[0_14px_40px_-16px_rgba(51,51,51,0.3)]">
        <div className="flex items-center gap-1.5 border-b border-charcoal/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-charcoal/20" />
          <span className="h-2 w-2 rounded-full bg-charcoal/20" />
          <span className="h-2 w-2 rounded-full bg-charcoal/20" />
        </div>
        {project.image ? (
          <img
            src={project.image || '/placeholder.svg'}
            alt={`Desktop preview of the ${project.label} website`}
            className="block aspect-[4/3] w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <PlaceholderPage tone={project.tone ?? '#dbe4ee'} label={project.label} />
        )}
      </div>

      {/* Caption */}
      <figcaption className="mt-4 flex w-full items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-charcoal">{project.label}</p>
          <p className="truncate text-xs text-charcoal/55">{project.subLabel}</p>
          {project.caseStudy ? (
            <a
              href={project.caseStudy}
              className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-charcoal transition-colors hover:text-charcoal/70"
            >
              View Case Study &rarr;
            </a>
          ) : null}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.label} website in a new tab`}
            className="shrink-0 rounded-full border border-charcoal/15 p-2 text-charcoal/70 transition hover:bg-steel hover:text-charcoal"
          >
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <span className="shrink-0 rounded-full bg-charcoal/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-charcoal/50">
            Sample
          </span>
        )}
      </figcaption>
    </figure>
  )
}

function PlaceholderPage({ tone, label }: { tone: string; label: string }) {
  return (
    <div className="aspect-[4/3] w-full" style={{ backgroundColor: tone }}>
      <div className="flex h-full flex-col justify-center gap-2 px-6">
        <div className="h-2 w-12 rounded bg-charcoal/20" />
        <div className="h-4 w-3/4 rounded bg-charcoal/25" />
        <div className="h-2 w-2/3 rounded bg-charcoal/15" />
        <div className="mt-2 h-6 w-28 rounded bg-charcoal/25" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-12 rounded-lg bg-white/60" />
          <div className="h-12 rounded-lg bg-white/60" />
          <div className="h-12 rounded-lg bg-white/60" />
        </div>
        <div className="pt-3 text-center text-[10px] uppercase tracking-wider text-charcoal/40">
          {label} — sample layout
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Clean, purposeful, and built to convert.
          </h2>
          <p className="mt-4 max-w-xl text-charcoal/70 leading-relaxed">
            Real sites we&apos;ve designed and shipped for South African businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <BrowserCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
