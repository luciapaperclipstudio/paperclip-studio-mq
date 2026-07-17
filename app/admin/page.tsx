import { adminLogout, isAdminAuthed } from '@/app/actions/admin'
import { AdminLogin } from '@/components/site/admin-login'
import { Logo } from '@/components/site/logo'
import { db } from '@/lib/db'
import { leads, type Lead } from '@/lib/db/schema'
import { formatRand } from '@/lib/packages'
import { desc } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

function formatDate(d: Date) {
  return new Date(d).toLocaleString('en-ZA', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default async function AdminPage() {
  const authed = await isAdminAuthed()
  if (!authed) return <AdminLogin />

  const rows: Lead[] = await db.select().from(leads).orderBy(desc(leads.createdAt))

  const completed = rows.filter((r) => r.completed).length
  const fromCalculator = rows.filter((r) => r.source === 'calculator').length

  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <form action={adminLogout}>
            <button
              type="submit"
              className="rounded border border-charcoal px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-serif text-3xl italic text-charcoal">Leads</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Every visitor who left their details — including partial calculator sessions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Stat label="Total leads" value={String(rows.length)} />
          <Stat label="From calculator" value={String(fromCalculator)} />
          <Stat label="Completed requests" value={String(completed)} />
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-charcoal/15 bg-white">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="border-b border-charcoal/10 text-xs uppercase tracking-wider text-charcoal/60">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Package / Interest</th>
                <th className="px-4 py-3 font-medium">Add-ons</th>
                <th className="px-4 py-3 font-medium">Estimate</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-10 text-center text-muted-foreground">
                    No leads yet.
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="align-top text-charcoal">
                    <td className="whitespace-nowrap px-4 py-3 text-charcoal/70">
                      {formatDate(r.createdAt)}
                    </td>
                    <td className="px-4 py-3 font-medium">{r.name}</td>
                    <td className="px-4 py-3 text-charcoal/80">{r.email}</td>
                    <td className="px-4 py-3 text-charcoal/70">{r.phone ?? '—'}</td>
                    <td className="px-4 py-3 text-charcoal/80">
                      {r.selectedPackage ?? r.packageInterest ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-charcoal/70">
                      {r.selectedAddons && r.selectedAddons.length > 0
                        ? r.selectedAddons.map((a) => a.label).join(', ')
                        : '—'}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {r.estimateTotal ? formatRand(r.estimateTotal) : '—'}
                    </td>
                    <td className="px-4 py-3 capitalize text-charcoal/70">{r.source}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          r.completed
                            ? 'rounded-full bg-charcoal px-2.5 py-1 text-xs text-white'
                            : 'rounded-full bg-yellow px-2.5 py-1 text-xs text-charcoal'
                        }
                      >
                        {r.completed ? 'Completed' : 'Partial'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {rows.some((r) => r.message) ? (
          <div className="mt-8">
            <h2 className="font-serif text-xl italic text-charcoal">Messages</h2>
            <ul className="mt-4 space-y-3">
              {rows
                .filter((r) => r.message)
                .map((r) => (
                  <li
                    key={r.id}
                    className="rounded-lg border border-charcoal/15 bg-white p-4 text-sm"
                  >
                    <span className="font-medium text-charcoal">{r.name}</span>
                    <span className="text-charcoal/50"> · {r.email}</span>
                    <p className="mt-1 text-charcoal/80">{r.message}</p>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-charcoal/15 bg-white p-5">
      <p className="text-xs uppercase tracking-wider text-charcoal/50">{label}</p>
      <p className="mt-2 font-serif text-3xl italic text-charcoal">{value}</p>
    </div>
  )
}
