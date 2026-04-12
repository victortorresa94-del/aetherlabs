---
name: gsap-pro
description: GSAP 3 + ScrollTrigger mastery — timelines, scroll-driven animations, text animations, SVG morphing, pinning, scrub. Use when building complex scroll animations, parallax sections, text reveals, SVG animations, or when Framer Motion isn't enough.
version: 1.0.0
---

# GSAP 3 — Animation Engine

## Setup (GSAP already in package.json)
```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText' // Club GreenSock

// Register plugins once (ideally in a shared lib/gsap.ts)
gsap.registerPlugin(ScrollTrigger, TextPlugin)
```

## Shared GSAP Config (create lib/gsap.ts)
```ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Match Next.js smooth scrolling
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger }
```

## Basic Animations

```tsx
useEffect(() => {
  // Simple tween
  gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2
  })

  // From (element starts from these values)
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.4
  })

  // fromTo (explicit start and end)
  gsap.fromTo('.cta-button',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }
  )
}, [])
```

## ScrollTrigger — Core Patterns

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {

    // Fade in on scroll
    gsap.utils.toArray('.fade-section').forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',    // when top of el hits 80% viewport
          end: 'top 20%',
          toggleActions: 'play none none reverse'
          // play | pause | resume | reset | restart | complete | none
        }
      })
    })

    // Pinned section + scrub
    gsap.to('.parallax-bg', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5   // smooth lag behind scroll
      }
    })

  }, containerRef) // scope to container

  return () => ctx.revert() // cleanup — critical for Next.js!
}, [])
```

## Timeline — Sequenced Animations

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section',
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl
      .from('.section-label', { opacity: 0, y: 10, duration: 0.4 })
      .from('.section-title', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' }, '-=0.2')
      .from('.section-desc', { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
      .from('.section-cards > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')

  }, sectionRef)

  return () => ctx.revert()
}, [])
```

## Horizontal Scroll Section

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const panels = gsap.utils.toArray('.panel')

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-container',
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${document.querySelector('.horizontal-container')?.scrollWidth}`
      }
    })
  })

  return () => ctx.revert()
}, [])
```

## Text Reveal Animations

```tsx
// Word by word reveal (without SplitText)
const words = title.split(' ')
return (
  <h1>
    {words.map((word, i) => (
      <motion.span
        key={i}
        className="inline-block mr-2"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    ))}
  </h1>
)

// With GSAP TextPlugin (typewriter)
gsap.to('.typewriter', {
  text: 'Hello World',
  duration: 2,
  ease: 'none'
})
```

## Number Counter
```tsx
gsap.from({ val: 0 }, {
  val: 500,
  duration: 2,
  ease: 'power2.out',
  onUpdate: function() {
    el.textContent = Math.round(this.targets()[0].val).toString()
  },
  scrollTrigger: { trigger: el, start: 'top 80%' }
})
```

## Critical: Cleanup in Next.js
```tsx
// ALWAYS use gsap.context() + ctx.revert()
// ALWAYS cleanup in useEffect return
useEffect(() => {
  const ctx = gsap.context(() => { /* animations */ }, ref)
  return () => ctx.revert()
}, [])

// Refresh ScrollTrigger after dynamic content loads
ScrollTrigger.refresh()
```
