---
name: responsive-mobile
description: Mobile-first responsive design for Next.js + Tailwind — breakpoints, touch interactions, mobile navigation, fluid typography, viewport units, safe areas, iOS/Android quirks. Use when fixing mobile layouts, implementing responsive design, or testing mobile UX.
version: 1.0.0
---

# Mobile-First Responsive Design

## Breakpoints (Tailwind v4)
```
default: 0px+      → mobile phones
sm: 640px+         → large phones, small tablets
md: 768px+         → tablets
lg: 1024px+        → laptops
xl: 1280px+        → desktops
2xl: 1536px+       → large screens
```

## Mobile-First Approach
```tsx
// ALWAYS start with mobile, add desktop overrides
// ❌ Desktop-first (bad)
<h1 className="text-7xl md:text-5xl sm:text-3xl">

// ✅ Mobile-first (correct)
<h1 className="text-3xl sm:text-5xl lg:text-7xl">

// Section padding
<section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">

// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

## Fluid Typography
```tsx
// Responsive text that scales smoothly
<h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold">
<p className="text-[clamp(0.875rem,2vw,1.125rem)]">

// Common fluid scales
// 24px → 72px: text-[clamp(1.5rem,5vw,4.5rem)]
// 14px → 18px: text-[clamp(0.875rem,1.5vw,1.125rem)]
// 16px → 20px: text-[clamp(1rem,2vw,1.25rem)]
```

## Mobile Navigation Pattern
```tsx
'use client'
import { useState } from 'react'

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger */}
      <button
        className="md:hidden p-2 -mr-2"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className={cn('block w-5 h-0.5 bg-white transition-all', open && 'rotate-45 translate-y-1.5')} />
        <span className={cn('block w-5 h-0.5 bg-white my-1 transition-all', open && 'opacity-0')} />
        <span className={cn('block w-5 h-0.5 bg-white transition-all', open && '-rotate-45 -translate-y-1.5')} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[72px] bg-[#0A0A0A] z-40 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

## Touch-Friendly Targets
```tsx
// Minimum 44x44px touch target (Apple HIG / WCAG)
<button className="min-h-[44px] min-w-[44px] px-4 py-3">

// Increase tap area without changing visual size
<button className="relative p-2 before:absolute before:inset-[-8px]">

// Spacing between tappable items
<nav className="flex flex-col gap-2"> {/* min 8px between items */}
```

## Viewport Units
```tsx
// Full height accounting for mobile browser chrome
<div className="h-screen"> {/* problematic on mobile */}
<div className="h-[100svh]"> {/* small viewport height — safe on mobile */}
<div className="h-[100dvh]"> {/* dynamic viewport height */}
<div className="min-h-[100svh]"> {/* minimum full screen */}

// Full width
<div className="w-screen overflow-x-hidden"> {/* avoid horizontal scroll */}
```

## iOS Safari Quirks
```css
/* Prevent zoom on input focus */
input, select, textarea {
  font-size: 16px; /* must be 16px+ to prevent zoom */
}

/* Safe area for notch/home bar */
.navbar {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.footer {
  padding-bottom: env(safe-area-inset-bottom);
}
```

```tsx
// In Tailwind
<nav className="pt-[env(safe-area-inset-top)] px-[env(safe-area-inset-left)]">
```

## Responsive Images
```tsx
// Different crops for mobile vs desktop
<picture>
  <source media="(max-width: 768px)" srcSet="/hero-mobile.webp" />
  <source media="(min-width: 769px)" srcSet="/hero-desktop.webp" />
  <img src="/hero-desktop.webp" alt="Hero" />
</picture>

// Or with Next.js Image
<Image
  src="/hero.webp"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

## Grid Responsive Patterns
```tsx
// Auto-responsive grid (no breakpoints needed)
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">

// Explicit breakpoints
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// Masonry (react-responsive-masonry — already installed)
import Masonry from 'react-responsive-masonry'
<Masonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
```

## Mobile Testing Checklist
- [ ] Test on real iOS Safari and Android Chrome
- [ ] Check 375px (iPhone SE) and 390px (iPhone 14)
- [ ] All tap targets 44x44px minimum
- [ ] No horizontal scroll on any viewport
- [ ] Font size 16px+ on all inputs
- [ ] Safe areas respected (notch, home bar)
- [ ] Images don't overflow
- [ ] Modals/drawers work with virtual keyboard open
