---
name: nextjs-perf
description: Next.js 16 performance optimization — Core Web Vitals, bundle splitting, image optimization, Turbopack, RSC patterns, lazy loading, caching strategies. Use when the app is slow, LCP/CLS/FID are bad, bundle is too large, or you need to optimize any Next.js route.
version: 1.0.0
---

# Next.js 16 Performance Mastery

## Core Web Vitals Targets
- LCP < 2.5s — largest contentful paint
- CLS < 0.1 — cumulative layout shift
- INP < 200ms — interaction to next paint
- TTFB < 600ms — time to first byte

## Bundle Optimization

### Analyze bundle
```bash
ANALYZE=true npm run build
# or add @next/bundle-analyzer to next.config.ts
```

### Dynamic imports for heavy components
```tsx
// Heavy 3D / animation components → lazy load
const SplineScene = dynamic(() => import('@/components/SplineScene'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-[#111] animate-pulse" />
})

// Framer Motion — import only what you need
import { motion, AnimatePresence } from 'framer-motion'
// NOT: import * as framer from 'framer-motion'
```

### Tree-shakeable imports
```tsx
// GOOD — tree-shakeable
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// BAD — imports entire library
import * as Icons from 'lucide-react'
```

## Image Optimization

```tsx
import Image from 'next/image'

// Always provide width/height or fill to prevent CLS
<Image
  src="/hero.webp"
  alt="Hero"
  width={1200}
  height={630}
  priority          // above-the-fold images
  quality={85}      // 85 is sweet spot quality/size
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// For background/fill images
<div className="relative h-[600px]">
  <Image src="/bg.webp" alt="" fill className="object-cover" priority />
</div>
```

## React Server Components (RSC) Patterns

```tsx
// page.tsx — server by default, no 'use client'
// Fetch data directly, no useEffect/useState needed
export default async function Page() {
  const data = await db.select().from(table) // runs on server
  return <ClientComponent initialData={data} />
}

// 'use client' only at the leaf — not at layout/page level
// Push 'use client' as deep as possible
```

## Caching Strategy

```tsx
// next.config.ts
const config: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,   // cache dynamic routes 30s
      static: 180,   // cache static routes 3min
    }
  }
}

// Route-level cache
export const revalidate = 3600 // revalidate every hour
export const dynamic = 'force-static' // fully static

// fetch with cache
const data = await fetch('/api/data', {
  next: { revalidate: 60, tags: ['data'] }
})
```

## Font Optimization

```tsx
// layout.tsx — use next/font, never @import in CSS
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

## Scroll Performance

```tsx
// Virtualize long lists
import { useVirtualizer } from '@tanstack/react-virtual'

// Debounce scroll handlers
const handleScroll = useMemo(
  () => debounce(() => { /* ... */ }, 16), // 60fps
  []
)

// Use CSS transforms over position for animations — GPU-accelerated
// transform: translateY() > top/left
// opacity > visibility/display
```

## Vercel Edge + Streaming

```tsx
// Stream slow pages
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <FastSection />
      <Suspense fallback={<Skeleton />}>
        <SlowDataSection />  {/* streams when ready */}
      </Suspense>
    </>
  )
}
```

## Turbopack (already enabled in this project)
`next dev --turbopack` is active. Avoid:
- CJS-only packages that can't be transpiled
- Webpack-specific plugins in next.config.ts (use turbo.rules instead)
