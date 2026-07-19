import { cn } from '@/lib/utils'

export function PaperclipMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn('h-5 w-5', className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 4.8 6.6 15.2a3.2 3.2 0 0 0 6.17 1.7l2.9-10.4a1.9 1.9 0 0 0-3.66-1.02l-2.6 9.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.9" cy="18.4" r="1.15" fill="currentColor" />
    </svg>
  )
}

export function Wordmark({
  className,
  studio = true,
}: {
  className?: string
  studio?: boolean
}) {
  return (
    <span className={cn('inline-flex items-baseline gap-1', className)}>
      <span className="font-serif text-xl italic leading-none text-charcoal">paper</span>
      <span className="text-xl font-bold leading-none text-steel">clip.</span>
      {studio ? (
        <span className="label-caps ml-1 self-end pb-[3px] text-[10px] text-charcoal/70">
          Studio
        </span>
      ) : null}
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  // The source PNG is a 2000x2000 square with the "paperclip. studio" wordmark
  // centred inside empty padding. Framing it in a wide box and scaling the
  // background to ~500% tall, centred, crops the padding so only the wordmark
  // shows. `overflow-hidden` guarantees nothing spills outside the box.
  return (
    <span
      role="img"
      aria-label="paperclip studio"
      className={cn('block h-8 w-[150px] overflow-hidden md:h-9 md:w-[168px]', className)}
      style={{
        backgroundImage: 'url(/paperclip-logo.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'auto 500%',
      }}
    />
  )
}
