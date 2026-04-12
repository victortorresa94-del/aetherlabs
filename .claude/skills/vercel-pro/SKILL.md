---
name: vercel-pro
description: Vercel deployment mastery — vercel.json config, Edge Functions, ISR, environment variables, preview deployments, domain config, build optimization, analytics, cron jobs. Use when deploying, fixing build errors, configuring Vercel, or optimizing serverless functions.
version: 1.0.0
---

# Vercel — Production Deployment

## vercel.json (this project has one)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["mad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    },
    "src/app/api/chat/route.ts": {
      "maxDuration": 60
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/sitemap.xml", "destination": "/api/sitemap" }
  ]
}
```

## Environment Variables Strategy

```bash
# Three environments in Vercel dashboard:
# - Production: aetherlabs.es
# - Preview: branch deploys
# - Development: local

# .env.local (never commit)
DATABASE_URL=file:./local.db
NEXT_PUBLIC_URL=http://localhost:3000

# Vercel dashboard → Settings → Environment Variables:
DATABASE_URL=libsql://...
NEXT_PUBLIC_URL=https://aetherlabs.es
STRIPE_SECRET_KEY=sk_live_...

# In code — always check existence
const url = process.env.NEXT_PUBLIC_URL
if (!url) throw new Error('NEXT_PUBLIC_URL required')
```

## Incremental Static Regeneration (ISR)

```tsx
// Revalidate on time
export const revalidate = 3600 // every hour

// Revalidate on demand
import { revalidatePath, revalidateTag } from 'next/cache'

// In a server action or API route:
revalidatePath('/blog')
revalidatePath('/blog/[slug]', 'page')
revalidateTag('posts')

// Fetch with tags
const posts = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts'], revalidate: 3600 }
})
```

## Edge Functions (for low-latency)

```ts
// Runs at edge — no Node.js APIs
export const runtime = 'edge'

export async function GET(req: Request) {
  const geo = req.geo // Vercel geo headers
  const ip = req.ip

  return Response.json({ country: geo?.country, city: geo?.city })
}
```

## Cron Jobs (vercel.json)

```json
{
  "crons": [
    {
      "path": "/api/cron/sync-hubspot",
      "schedule": "0 9 * * *"
    },
    {
      "path": "/api/cron/cleanup",
      "schedule": "0 0 * * 0"
    }
  ]
}
```

```ts
// src/app/api/cron/sync-hubspot/route.ts
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  // Verify it's a Vercel cron request
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Do the work
  await syncLeadsToHubSpot()
  return Response.json({ ok: true, timestamp: new Date().toISOString() })
}
```

## Build Optimization

```ts
// next.config.ts
const config: NextConfig = {
  // Compress images in build
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },

  // Reduce bundle for i18n
  experimental: {
    optimizePackageImports: ['lucide-react', '@tabler/icons-react', 'framer-motion']
  },

  // Output standalone for Docker (not needed for Vercel)
  // output: 'standalone'
}
```

## Deployment Workflow

```bash
# Preview deploy (auto on PR/branch push)
git push origin feature/my-feature
# → Creates preview.aetherlabs.es/... URL

# Production deploy
git push origin main
# → Auto-deploys to aetherlabs.es

# Manual deploy via CLI
npx vercel --prod

# Check deploy status
npx vercel ls
npx vercel logs [deployment-url]

# Pull env vars locally
npx vercel env pull .env.local
```

## Vercel Analytics (already installed)
```tsx
// layout.tsx — already configured
import { Analytics } from '@vercel/analytics/next'
<Analytics />

// Speed Insights
import { SpeedInsights } from '@vercel/speed-insights/next'
<SpeedInsights />
```

## Common Build Errors

```bash
# "Module not found" in edge runtime
# → Move to Node.js runtime or use edge-compatible alternative

# "Dynamic server usage" error
# → Add export const dynamic = 'force-dynamic' to the page

# Memory exceeded
# → Use streaming, break up large computations

# Type errors failing build
# → Fix all TypeScript errors locally: npm run build
```
