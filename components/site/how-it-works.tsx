import { ClipboardList, Code2, Eye, Flag } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const steps = [
  {
    n: '01',
    icon: ClipboardList,
    name: 'Brief',
    description:
      'Fill in our quick intake form with your business details, services, and any content you have.',
  },
  {
    n: '02',
    icon: Code2,
    name: 'Build',
    description:
      'We use AI-powered tools to design and build your site — no back-and-forth for weeks.',
  },
  {
    n: '03',
    icon: Eye,
    name: 'Review',
    description: 'We share a preview link. You give feedback. One round of revisions included.',
  },
  {
    n: '04',
    icon: Flag,
    name: 'Launch',
    description: 'We connect your domain and go live. Your business is online.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal md:text-4xl">
            Simple. Fast. Done.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-charcoal/15 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="relative">
              <div className="flex flex-col">
                <span className="font-serif text-4xl italic leading-none text-yellow">{s.n}</span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-md border border-charcoal/15 bg-white text-charcoal">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-charcoal">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
