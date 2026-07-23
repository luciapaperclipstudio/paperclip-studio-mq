import { Mail, MapPin, Phone } from 'lucide-react'
import { QuoteQuiz } from './quote-quiz'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'
import { WhatsAppButton } from './whatsapp-button'

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Get a Quote</SectionLabel>
          </div>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Let&apos;s get your business online.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            Answer three quick questions and we&apos;ll come back to you with a confirmed quote
            within 24 hours.
          </p>

          <ul className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-charcoal sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li className="flex items-center gap-2.5">
              <Mail className="h-5 w-5 text-steel" />
              <a href="mailto:hello@paperclipstudio.co.za" className="hover:text-steel">
                hello@paperclipstudio.co.za
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-5 w-5 text-steel" />
              <a href="tel:+277784429357" className="hover:text-steel">
                +27 77 844 29357
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-5 w-5 text-steel" />
              South Africa (serving clients nationwide)
            </li>
          </ul>

          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <QuoteQuiz />
        </Reveal>
      </div>
    </section>
  )
}
