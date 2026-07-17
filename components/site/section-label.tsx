import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={cn('label-caps text-steel', className)}>{children}</p>
}
