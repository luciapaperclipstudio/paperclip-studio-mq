'use client'

import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

type Project = {
  label: string
  subLabel: string
  url?: string
  displayUrl?: string
  image?: string
  tone?: string
}

const projects: Project[] = [
  {
    label: 'Eventure Escapes',
    subLabel: 'Luxury Travel — Cape Town',
    url: 'https://eventureescapes.com',
    displayUrl: 'eventureescapes.com',
    image: '/portfolio/eventure-escapes.png',
  },
  {
    label: 'Electrical Contractor',
    subLabel: 'Trade Services — Johannesburg',
    tone: '#dbe4ee',
  },
  {
    label: 'Catering Company',
    subLabel: 'Hospitality — Pretoria',
    tone: '#e3e2d6',
  },
]

// Full-page mobile screenshot via thum.io. viewportWidth forces the site's
// mobile layout; width sets the (retina) output resolution; fullpage captures
// the entire page so it can scroll inside the phone.
function shot(url: string) {
  return `https://image.thum.io/get/viewportWidth/430/width/860/fullpage/${url}`
}

function PhoneCard({ project }: { project: Project }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  function onScroll() {
    const el = scrollRef.current
    if (el) setScrolled(el.scrollTop > 8)
  }

  return (
    <figure className="flex flex-col items-center">
      {/* Phone frame */}
      <div className="relative w-full max-w-[280px] rounded-[2.25rem] border border-charcoal/15 bg-charcoal p-2.5 shadow-lg">
        {/* Notch (hidden when the screenshot already includes a status bar) */}
        {!project.image ? (
          <div className="absolute left-1/2 top-2.5 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-charcoal" />
        ) : null}
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="aspect-[9/19] w-full overflow-y-scroll overscroll-contain"
          >
            {project.image ? (
              <img
                src={project.image || '/placeholder.svg'}
                alt={`Mobile preview of the ${project.label} website`}
                className="block w-full"
                loading="lazy"
              />
            ) : project.url ? (
              <img
                src={shot(project.url) || '/placeholder.svg'}
                alt={`Mobile preview of the ${project.label} website`}
                className="block w-full"
                loading="lazy"
              />
            ) : (
              <PlaceholderPage tone={project.tone ?? '#dbe4ee'} label={project.label} />
            )}
          </div>

          {/* Scroll hint */}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white/95 to-transparent pb-3 pt-8 transition-opacity duration-300 ${
              scrolled ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <figcaption className="mt-4 flex w-full max-w-[280px] items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-charcoal">{project.label}</p>
          <p className="truncate text-xs text-charcoal/55">{project.subLabel}</p>
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
    <div className="min-h-full" style={{ backgroundColor: tone }}>
      <div className="flex h-56 flex-col justify-center gap-2 px-5">
        <div className="h-2 w-10 rounded bg-charcoal/20" />
        <div className="h-4 w-3/4 rounded bg-charcoal/25" />
        <div className="h-2 w-2/3 rounded bg-charcoal/15" />
        <div className="mt-2 h-6 w-24 rounded bg-charcoal/25" />
      </div>
      <div className="space-y-3 bg-white/70 px-5 py-6">
        <div className="h-24 w-full rounded-lg bg-charcoal/10" />
        <div className="h-3 w-1/2 rounded bg-charcoal/15" />
        <div className="h-2 w-full rounded bg-charcoal/10" />
        <div className="h-2 w-5/6 rounded bg-charcoal/10" />
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="h-20 rounded-lg bg-charcoal/10" />
          <div className="h-20 rounded-lg bg-charcoal/10" />
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
            Real sites, shown exactly as they appear on a phone. Scroll any preview to explore the
            full page.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <PhoneCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
