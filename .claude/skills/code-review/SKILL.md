---
name: code-review
description: Code review standards for Next.js — performance, security, type safety, accessibility, component quality, API design, and PR checklist. Use when reviewing code, auditing components, checking PRs, or doing a quality pass before deploying.
version: 1.0.0
---

# Code Review — Quality Standards

## Review Checklist

### Performance
- [ ] No `useEffect` fetching data that could be done in server component
- [ ] Images use `next/image` with width/height or fill
- [ ] Heavy components are dynamically imported with `dynamic()`
- [ ] No `import * as X from 'library'` — use named imports
- [ ] `useCallback`/`useMemo` used only where re-render is actual problem
- [ ] No creating new objects/arrays in JSX render (`{[]}` pattern)
- [ ] Animations use `transform`/`opacity` not layout-triggering properties
- [ ] `will-change-transform` on animated elements

### Security
- [ ] All API inputs validated with Zod
- [ ] No secrets in code (`console.log(process.env.STRIPE_KEY)`)
- [ ] No `dangerouslySetInnerHTML` without `DOMPurify.sanitize()`
- [ ] No SQL string interpolation
- [ ] Rate limiting on public-facing endpoints
- [ ] Auth check before sensitive operations

### TypeScript
- [ ] No `any` types (use `unknown` + type guard instead)
- [ ] No non-null assertions (`!`) without comment explaining why
- [ ] Props interfaces defined (not inline)
- [ ] Return types on async functions
- [ ] Zod schema for external data

### Accessibility
- [ ] All images have `alt` text
- [ ] Interactive elements keyboard accessible
- [ ] Form inputs have labels
- [ ] Color contrast sufficient (4.5:1 AA)
- [ ] No `<div onClick>` without role/keyboard handler

### Component Quality
- [ ] Single responsibility (does one thing well)
- [ ] Props don't expose implementation details
- [ ] `className` prop accepted and passed through (`cn()`)
- [ ] Loading, error, empty states handled
- [ ] `'use client'` only where necessary

### API Routes
- [ ] Input validated before processing
- [ ] Errors return appropriate status codes
- [ ] No sensitive data in response
- [ ] Streaming responses for AI (not waiting for full response)

## Common Anti-Patterns to Flag

```tsx
// ❌ useEffect for data (use RSC instead)
useEffect(() => { fetch('/api/data').then(setData) }, [])
// ✅ Server component
const data = await fetch('/api/data')

// ❌ Fetching on every render
function Component() {
  const data = useSWR('/api/...') // ok, but consider RSC
}

// ❌ Prop drilling 4+ levels
<A data={x}><B data={x}><C data={x}><D data={x} /></C></B></A>
// ✅ Context or composition

// ❌ Inline styles when Tailwind works
<div style={{ display: 'flex', alignItems: 'center' }}>
// ✅ Tailwind
<div className="flex items-center">

// ❌ Index as key for dynamic lists
{items.map((item, i) => <Card key={i} />)}
// ✅ Stable unique ID
{items.map(item => <Card key={item.id} />)}

// ❌ Nested ternaries
{a ? (b ? 'x' : 'y') : (c ? 'z' : 'w')}
// ✅ Early returns or lookup object

// ❌ console.log left in production code
console.log('Debug:', data) // remove before merge

// ❌ Magic numbers
const delay = 847
// ✅ Named constant
const ANIMATION_DELAY_MS = 847
```

## PR Description Template
```markdown
## What changed
Brief description of what this PR does

## Why
What problem does it solve / what feature does it add

## Screenshots
[before/after for UI changes]

## Testing done
- [ ] Tested on mobile (375px)
- [ ] Tested on desktop (1440px)
- [ ] No console errors
- [ ] Build passes: `npm run build`
- [ ] Animations smooth (60fps)

## Deploy notes
Any env vars needed, migration required, etc.
```

## Quick Quality Score (0-10)
- TypeScript strict: +2
- No any types: +1
- Zod validation: +2
- Mobile responsive: +2
- Accessible: +1
- No console.logs: +1
- Clean component structure: +1
