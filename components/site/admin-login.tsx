'use client'

import { adminLogin } from '@/app/actions/admin'
import { useActionState } from 'react'
import { Logo } from './logo'

const initial: { error?: string } = {}

export function AdminLogin() {
  const [state, formAction, pending] = useActionState(adminLogin, initial)

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="w-full max-w-sm rounded-lg border border-charcoal/15 bg-white p-8">
        <Logo />
        <h1 className="mt-6 font-serif text-2xl italic text-charcoal">Admin access</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the admin password to view captured leads.
        </p>
        <form action={formAction} className="mt-6 flex flex-col gap-3">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded border border-charcoal/30 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-steel focus:ring-2 focus:ring-steel/40"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? 'Checking…' : 'Sign in'}
          </button>
          {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
        </form>
      </div>
    </main>
  )
}
