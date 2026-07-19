'use client'

import { useState } from 'react'
import { ArrowUpDown, ExternalLink, Lock } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

type Project = {
  label: string
  url: string
  displayUrl: string
  live?: boolean
  gradient?: string
}

const projects: Project[] = [
  {
    label: 'Travel Agency Website',
    url: 'https://eventureescapes.com',
    displayUrl: 'eventureescapes.com',
    live: true,
  },
  {
    label: 'Electrical Contractor — Johannesburg',
    url: '#',
    displayUrl: 'voltpro.co.za',
    gradient: 'linear-gradient(160deg, #dbe4ee 0%, #a8bdd0 55%, #6f8598 100%)',
  },
  {
    label: 'Catering Company — Pretoria',
    url: '#',
    displayUrl: 'tablefeast.co.za',
    gradient: 'linear-gradient(160deg, #efe8d6 0%, #ddd27a 55%, #b8ad57 100%)',
  },
]

function BrowserChrome({ displayUrl }: { displayUrl: string }) {
  return (
    <div
      className="flex h-8 items-center gap-3 border-b px-3"
      style={{ backgroundColor: '#F5F5F5', borderColor: '#E0DDDA' }}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#28C840' }} />
      </div>
      <div
        className="mx-auto flex h-[18px] w-[200px] items-center justify-center gap-1 rounded-full"
        style={{ backgroundColor: '#EBEBEB' }}
      >
        <Lock size={10} color="#888888" aria-hidden="true" />
        <span className="text-[10px]" style={{ color: '#888888' }}>
          {displayUrl}
        </span>
      </div>
    </div>
  )
}

function PortfolioCard({ project }: { project: Project }) {
  const [scrolled, setScrolled] = useState(false)

  return (
    <div
      className="group flex flex-col border bg-white transition-all duration-300 hover:-translate-y-[3px]"
      style={{ borderColor: '#E0DDDA' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#A8BDD0')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E0DDDA')}
    >
      <BrowserChrome displayUrl={project.displayUrl} />

      <div
        className="relative w-full overflow-y-scroll overflow-x-hidden bg-white"
        style={{ height: 380 }}
        onScroll={(e) => {
          if (e.currentTarget.scrollTop > 4 && !scrolled) setScrolled(true)
        }}
      >
        {project.live ? (
          <iframe
            src={project.url}
            title={project.label}
            scrolling="yes"
            className="border-0"
            style={{
              width: 1280,
              height: 3200,
              transform: 'scale(0.28)',
              transformOrigin: 'top left',
              pointerEvents: 'none',
              border: 'none',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: 1200, background: project.gradient }}>
            <div className="flex flex-col gap-3 px-6 pt-10">
              <div className="h-4 w-1/2 rounded bg-white/40" />
              <div className="h-2.5 w-3/4 rounded bg-white/30" />
              <div className="h-2.5 w-2/3 rounded bg-white/30" />
              <div className="mt-4 h-8 w-32 rounded bg-white/50" />
              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="h-24 rounded bg-white/30" />
                <div className="h-24 rounded bg-white/30" />
                <div className="h-24 rounded bg-white/30" />
                <div className="h-24 rounded bg-white/30" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="flex h-8 items-center justify-center gap-2 border-t transition-opacity duration-300"
        style={{
          backgroundColor: '#F0EFE8',
          borderColor: '#E0DDDA',
          opacity: scrolled ? 0 : 1,
        }}
      >
        <ArrowUpDown size={12} color="#A8BDD0" aria-hidden="true" />
        <span
          className="text-[11px] uppercase"
          style={{ color: '#A8BDD0', letterSpacing: '0.15em' }}
        >
          Scroll to explore
        </span>
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-sm font-semibold" style={{ color: '#333333' }}>
            {project.label}
          </p>
          <p className="text-xs" style={{ color: '#A8BDD0' }}>
            {project.displayUrl}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.displayUrl} in a new tab`}
          className="transition-transform hover:-translate-y-0.5"
        >
          <ExternalLink size={14} color="#A8BDD0" aria-hidden="true" />
        </a>
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
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <PortfolioCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
