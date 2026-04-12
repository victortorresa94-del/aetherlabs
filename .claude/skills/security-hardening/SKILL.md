---
name: security-hardening
description: Web security for Next.js — CSP headers, XSS prevention, CSRF protection, rate limiting, input sanitization, auth security, API key protection, Vercel security config. Use when auditing security, adding security headers, reviewing API routes for vulnerabilities, or hardening auth.
version: 1.0.0
---

# Web Security — Next.js Production Hardening

## Security Headers (next.config.ts)

```ts
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.openai.com https://generativelanguage.googleapis.com https://www.google-analytics.com",
      "frame-src 'none'",
    ].join('; ')
  }
]

const config: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  }
}
```

## Input Validation — Always Sanitize

```ts
import { z } from 'zod'
import DOMPurify from 'isomorphic-dompurify' // install if needed

// Zod schema for every API input
const ContactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().toLowerCase(),
  message: z.string().min(10).max(2000).trim(),
  // Never trust: phone: z.string().regex(/^\+?[0-9\s\-()]{7,20}$/)
})

// Sanitize HTML if you render user content
const clean = DOMPurify.sanitize(userInput)

// Never: dangerouslySetInnerHTML={{ __html: userContent }}
// Always: dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }}
```

## SQL Injection Prevention (Drizzle ORM)

```ts
// SAFE — Drizzle uses parameterized queries by default
const user = await db.select().from(users).where(eq(users.email, userEmail))

// NEVER build raw SQL with string interpolation:
// db.execute(`SELECT * FROM users WHERE email = '${email}'`) // VULNERABLE
```

## API Key & Secret Protection

```ts
// .env.local — NEVER commit this
OPENAI_API_KEY=sk-...
HUBSPOT_TOKEN=...
DATABASE_URL=...
BETTER_AUTH_SECRET=... // long random string

// Access only in server-side code:
// ✅ route.ts, page.tsx (server), lib/ files
// ❌ components/ (client), public/ folder

// Validate at build time
if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error('BETTER_AUTH_SECRET is required')
}

// Never expose in client:
// ❌ NEXT_PUBLIC_OPENAI_KEY (exposes to browser)
// ✅ OPENAI_API_KEY (server only)
```

## CSRF Protection

```ts
// Better Auth handles CSRF for auth endpoints
// For custom forms, use origin validation:
export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin')
  const allowed = ['https://aetherlabs.es', 'http://localhost:3000']

  if (!origin || !allowed.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  // ...
}
```

## Rate Limiting (production-grade with Vercel KV or edge)

```ts
// Simple sliding window rate limiter
const attempts = new Map<string, number[]>()

function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const timestamps = (attempts.get(key) || []).filter(t => now - t < windowMs)
  timestamps.push(now)
  attempts.set(key, timestamps)
  return timestamps.length > limit
}

// Usage in contact/auth routes
const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'unknown'
if (isRateLimited(`contact:${ip}`, 5, 60_000)) {
  return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
}
```

## Auth Security (Better Auth)

```ts
// lib/auth.ts — secure configuration
import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  trustedOrigins: ['https://aetherlabs.es'],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24,      // update if 24h old
  },
  // Never store sensitive data in session
})
```

## Dependency Security

```bash
# Audit regularly
npm audit
npm audit fix

# Check for known vulnerabilities
npx snyk test

# Keep dependencies updated
npm outdated
```

## vercel.json Security

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## Security Checklist Before Deploy
- [ ] No secrets in code or git history
- [ ] All API inputs validated with Zod
- [ ] Rate limiting on auth + contact endpoints
- [ ] Security headers configured
- [ ] HTTPS enforced (Vercel handles this)
- [ ] No SQL string interpolation
- [ ] No dangerouslySetInnerHTML without sanitization
- [ ] .env.local in .gitignore
- [ ] npm audit passes
