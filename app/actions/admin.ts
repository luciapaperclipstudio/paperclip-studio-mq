'use server'

import { createHash } from 'crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const COOKIE = 'pc_admin'

function token(password: string) {
  return createHash('sha256').update(password).digest('hex')
}

export async function isAdminAuthed(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  const store = await cookies()
  return store.get(COOKIE)?.value === token(password)
}

export async function adminLogin(_prev: unknown, formData: FormData) {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    return { error: 'Admin password is not configured. Set ADMIN_PASSWORD to enable access.' }
  }
  const entered = String(formData.get('password') ?? '')
  if (entered !== password) {
    return { error: 'Incorrect password.' }
  }
  const store = await cookies()
  // In the v0 preview the app runs inside a cross-site iframe, so the session
  // cookie must be SameSite=None; Secure or the browser silently drops it.
  const isDev = process.env.NODE_ENV !== 'production'
  store.set(COOKIE, token(password), {
    httpOnly: true,
    sameSite: isDev ? 'none' : 'lax',
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 8,
  })
  redirect('/admin')
}

export async function adminLogout() {
  const store = await cookies()
  store.delete(COOKIE)
  redirect('/admin')
}
