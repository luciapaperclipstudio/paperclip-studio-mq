'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpDown, ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

type Project = {
  label: string
  url: string
  displayUrl: string
  live?: boolean
  gradient?: string
}

const MOBILE_VW = 390 // emulate an iPhone-class mobile viewport width
const MOBILE_VH = 844 // one phone "screen" height (~19.5:9)
const PAGE_VH = 5200 // tall enough to scroll the full mobile landing page

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

function PhoneCard({ project }: { project: Project }) {
  const [scrolled, setScrolled] = useState(false)
  const [width, setWidth] = useState(0)
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = screenRef.current
    if (!el) return
    const update = () => setWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Scale the emulated 390px mobile viewport down to the phone screen width, so
  // the site renders exactly as it would on a real phone, just zoomed to fit.
  const scale = width > 0 ? width / MOBILE_VW : 0
  const screenHeight = Math.round(MOBILE_VH * scale)

  return (
    <div className="group flex flex-col items-center">
      {/* Phone body */}
      <div
        className="relative w-full max-w-[280px] rounded-[2.2rem] p-2.5 shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
        style={{ backgroundColor: '#1c1c1e' }}
      >
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
          {/* Notch */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1c1c1e]" />

          <div
            ref={screenRef}
            className="relative w-full overflow-y-scroll overflow-x-hidden bg-white"
            style={{ height: screenHeight || 480 }}
            onScroll={(e) => {
              if (e.currentTarget.scrollTop > 4 && !scrolled) setScrolled(true)
            }}
          >
            {project.live ? (
              scale > 0 && (
                // Sizer height = scaled iframe height so the scroll range matches
                // the mobile page exactly (no empty space, no cut-off).
                <div style={{ width: '100%', height: Math.round(PAGE_VH * scale) }}>
                  <iframe
                    src={project.url}
                    title={project.label}
                    scrolling="no"
                    className="border-0"
                    style={{
                      width: MOBILE_VW,
                      height: PAGE_VH,
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left',
                      pointerEvents: 'none',
                      border: 'none',
                    }}
                  />
                </div>
              )
            ) : (
              <div
                style={{
                  width: '100%',
                  minHeight: screenHeight ? screenHeight * 1.9 : 900,
                  background: project.gradient,
                }}
              >
                <div className="flex flex-col gap-3 px-5 pt-10">
                  <div className="h-4 w-3/4 rounded bg-white/45" />
                  <div className="h-2.5 w-full rounded bg-white/30" />
                  <div className="h-2.5 w-5/6 rounded bg-white/30" />
                  <div className="mt-3 h-8 w-32 rounded bg-white/55" />
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="h-24 rounded bg-white/30" />
                    <div className="h-24 rounded bg-white/30" />
                    <div className="h-24 rounded bg-white/30" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Scroll hint */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-8 items-center justify-center gap-2 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0))',
              opacity: scrolled ? 0 : 1,
            }}
          >
            <ArrowUpDown size={12} color="#A8BDD0" aria-hidden="true" />
            <span
              className="text-[10px] uppercase"
              style={{ color: '#8a9db0', letterSpacing: '0.15em' }}
            >
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5 flex w-full max-w-[280px] items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold" style={{ color: '#333333' }}>
            {project.label}
          </p>
          <p className="truncate text-[11px]" style={{ color: '#A8BDD0' }}>
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
          <ExternalLink size={16} color="#A8BDD0" aria-hidden="true" />
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

        <div className="mt-12 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
