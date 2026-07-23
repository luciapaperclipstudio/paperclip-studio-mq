import { WhatsAppButton } from './whatsapp-button'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#services' },
  { label: 'Get a Quote', href: '/get-a-quote' },
]

const areasWeServe = [
  { label: 'Web Design Cape Town', href: '/locations/web-designer-cape-town' },
  { label: 'Web Design Johannesburg', href: '/locations/web-designer-johannesburg' },
  { label: 'Web Design Durban', href: '/locations/web-designer-durban' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <span
            role="img"
            aria-label="paperclip studio"
            className="block h-9 w-[168px] overflow-hidden"
            style={{
              backgroundImage: 'url(/paperclip-logo-footer.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'auto 500%',
              filter: 'brightness(0) invert(1)',
            }}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            AI-powered websites for South African businesses.
          </p>
        </div>

        <div>
          <p className="label-caps mb-4 text-white/50">Navigate</p>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps mb-4 text-white/50">Contact</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="mailto:hello@paperclipstudio.co.za" className="transition-colors hover:text-white">
                hello@paperclipstudio.co.za
              </a>
            </li>
            <li>
              <a href="tel:+277784429357" className="transition-colors hover:text-white">
                +27 77 844 29357
              </a>
            </li>
            <li>South Africa</li>
          </ul>
          <div className="mt-5">
            <WhatsAppButton />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 py-6 text-center text-sm text-white/70">
          {areasWeServe.map((area, i) => (
            <span key={area.href} className="flex items-center gap-3">
              <a href={area.href} className="transition-colors hover:text-white">
                {area.label}
              </a>
              {i < areasWeServe.length - 1 ? (
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#2b2b2b]">
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-white/50">
          © 2026 paperclip studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
