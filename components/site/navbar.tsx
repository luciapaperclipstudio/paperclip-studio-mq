'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from './logo'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#services' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow',
        scrolled ? 'border-b border-[#eeeeee] shadow-[0_1px_0_0_#eeeeee]' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="shrink-0" aria-label="paperclip studio home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-charcoal/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-charcoal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/get-a-quote"
            className="rounded bg-steel px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:brightness-95"
          >
            Get a Free Quote &rarr;
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-charcoal md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-charcoal"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 pt-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[#eeeeee] py-4 font-serif text-2xl italic text-charcoal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-6">
            <a
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="block rounded bg-steel px-4 py-3 text-center text-sm font-semibold text-charcoal"
            >
              Get a Free Quote &rarr;
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
