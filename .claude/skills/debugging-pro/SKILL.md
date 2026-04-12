---
name: debugging-pro
description: Systematic debugging for Next.js — hydration errors, TypeScript errors, build failures, API errors, performance issues, network debugging, React DevTools, Vercel logs. Use when hitting errors, debugging broken features, or diagnosing production issues.
version: 1.0.0
---

# Systematic Debugging — Next.js Production

## Error Triage Process
1. Read the full error message (first line + stack trace)
2. Identify: client error? server error? build error? type error?
3. Find the exact file + line number
4. Understand what the code is trying to do
5. Form hypothesis → test → verify

## Hydration Errors (most common in Next.js)

```
Error: Hydration failed because the initial UI does not match what was rendered on the server
```

**Causes:**
- Using `window`, `localStorage`, `document` during SSR
- `Math.random()` or `Date.now()` in render
- Browser extensions modifying HTML
- Wrong HTML nesting (div inside p, etc.)

**Fix:**
```tsx
// Wrap browser-only code in useEffect
const [isClient, setIsClient] = useState(false)
useEffect(() => setIsClient(true), [])

if (!isClient) return <Skeleton />
return <BrowserOnlyComponent />

// Or use suppressHydrationWarning for timestamps
<time suppressHydrationWarning>{new Date().toLocaleDateString()}</time>

// Add 'use client' directive for interactive components
'use client'
```

## Common Next.js Errors

```bash
# "Module not found: Can't resolve..."
→ Check import path is correct (case-sensitive on Linux/Vercel)
→ Verify package is installed: npm list package-name
→ Check tsconfig paths aliases

# "Dynamic server usage: headers/cookies"
→ Add to the page: export const dynamic = 'force-dynamic'

# "useXxx only works in Client Components"
→ Add 'use client' at top of file

# Build failed: "Type error"
→ Run locally: npx tsc --noEmit
→ Fix all TypeScript errors before pushing

# "Cannot read properties of undefined"
→ Add optional chaining: data?.user?.name
→ Check API response shape matches your type
```

## API Debugging

```ts
// Add logging to API routes
export async function POST(req: NextRequest) {
  console.log('[API /chat] Request from:', req.headers.get('origin'))
  console.log('[API /chat] Body:', await req.clone().text())

  try {
    // ... code
  } catch (error) {
    console.error('[API /chat] Error:', {
      message: error instanceof Error ? error.message : 'Unknown',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    })
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// View Vercel logs
npx vercel logs [deployment-url] --follow
```

## React DevTools Debugging
```
1. Open Chrome DevTools → Components tab
2. Click component → inspect props/state
3. Use "Highlight updates" to find unnecessary re-renders
4. Profiler tab → record → find slow renders

// Add display names to anonymous components
const MyComponent = memo(function MyComponent() { ... })
MyComponent.displayName = 'MyComponent'
```

## Performance Debugging
```bash
# Bundle analysis
ANALYZE=true npm run build
# Shows bundle composition, find large packages

# Core Web Vitals in DevTools
# Lighthouse → Performance tab
# Look for: render-blocking resources, unused JS, image optimization

# React renders
import { useEffect, useRef } from 'react'
function useWhyDidYouUpdate(name: string, props: Record<string, any>) {
  const previous = useRef(props)
  useEffect(() => {
    const changes: Record<string, any> = {}
    Object.keys(props).forEach(key => {
      if (previous.current[key] !== props[key]) {
        changes[key] = { from: previous.current[key], to: props[key] }
      }
    })
    if (Object.keys(changes).length) {
      console.log('[why-update]', name, changes)
    }
    previous.current = props
  })
}
```

## Network Debugging
```tsx
// Log all fetch calls in development
if (process.env.NODE_ENV === 'development') {
  const originalFetch = window.fetch
  window.fetch = async (...args) => {
    console.log('[fetch]', args[0])
    const res = await originalFetch(...args)
    console.log('[fetch result]', args[0], res.status)
    return res
  }
}

// In DevTools: Network tab → filter XHR/Fetch
// Check: status code, request payload, response body, timing
```

## CSS Debugging
```tsx
// Temporary: add colored borders to see layout
.debug * { outline: 1px solid red; }

// In browser console:
document.querySelectorAll('*').forEach(el => {
  el.style.outline = '1px solid rgba(255,0,0,0.3)'
})

// Check Tailwind class actually exists
// Install Tailwind CSS IntelliSense VSCode extension
```

## Environment Variable Debugging
```bash
# Check if vars are available
console.log('Env check:', {
  hasOpenAI: !!process.env.OPENAI_API_KEY,
  hasHubspot: !!process.env.HUBSPOT_TOKEN,
  nodeEnv: process.env.NODE_ENV,
})

# Pull from Vercel
npx vercel env pull .env.local
```

## Checklist When Stuck
1. Clear `.next` cache: `rm -rf .next && npm run dev`
2. Check browser console for errors
3. Check server terminal for errors
4. Verify environment variables exist
5. Check network tab for failed API calls
6. Add console.logs to narrow down location
7. Read the error message character by character
