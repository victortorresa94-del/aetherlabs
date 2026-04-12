---
name: auth-patterns
description: Better Auth + Next.js authentication — setup, session management, protected routes, middleware, OAuth providers, magic links, role-based access. Use when implementing auth, protecting routes, managing sessions, or adding login/signup flows.
version: 1.0.0
---

# Better Auth — Authentication Patterns

## Setup (already in this project: better-auth + bcrypt)

```ts
// lib/auth.ts
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from './db'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.NEXT_PUBLIC_URL!,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // true for production
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24,     // refresh if 1 day old
  },
})

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user
```

## Auth API Route

```ts
// src/app/api/auth/[...all]/route.ts
import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'

export const { GET, POST } = toNextJsHandler(auth)
```

## Client-side Auth

```tsx
'use client'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_URL!,
})

export const { useSession, signIn, signOut, signUp } = authClient
```

## Login / Signup Form

```tsx
'use client'
import { signIn, signUp } from '@/lib/auth-client'

function LoginForm() {
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)

    await signIn.email({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      callbackURL: '/dashboard',
    })
    setLoading(false)
  }

  // Google OAuth
  async function handleGoogle() {
    await signIn.social({ provider: 'google', callbackURL: '/dashboard' })
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
      <button type="button" onClick={handleGoogle}>
        Entrar con Google
      </button>
    </form>
  )
}
```

## Protected Pages (Server Component)

```tsx
// src/app/dashboard/page.tsx
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Bienvenido, {session.user.name}</h1>
    </div>
  )
}
```

## Middleware (protect routes globally)

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

const protectedPaths = ['/dashboard', '/admin', '/account']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (protectedPaths.some(p => pathname.startsWith(p))) {
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/account/:path*'],
}
```

## Session Hook (client component)

```tsx
'use client'
import { useSession } from '@/lib/auth-client'

function UserMenu() {
  const { data: session, isPending } = useSession()

  if (isPending) return <Spinner />
  if (!session) return <a href="/login">Entrar</a>

  return (
    <div>
      <img src={session.user.image} alt={session.user.name} />
      <button onClick={() => signOut({ callbackURL: '/' })}>
        Cerrar sesión
      </button>
    </div>
  )
}
```

## Role-Based Access

```ts
// Add role to user schema
export const users = sqliteTable('user', {
  // ... better-auth required fields
  role: text('role', { enum: ['admin', 'user', 'client'] }).default('user'),
})

// Check role in server component
if (session.user.role !== 'admin') {
  redirect('/unauthorized')
}

// Check in API route
const session = await auth.api.getSession({ headers: req.headers })
if (!session || session.user.role !== 'admin') {
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}
```

## Environment Variables Needed
```env
BETTER_AUTH_SECRET=generate-with-openssl-rand-base64-32
NEXT_PUBLIC_URL=https://aetherlabs.es
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```
