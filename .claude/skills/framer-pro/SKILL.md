---
name: framer-pro
description: Framer Motion v12 mastery — scroll animations, variants, gestures, layout animations, AnimatePresence, useInView, useScroll, useTransform. Use when adding any animation, transition, entrance effect, scroll-driven animation, or interactive motion to components.
version: 1.0.0
---

# Framer Motion v12 — Animation System

## Core Setup (already in this project)
```tsx
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
```

## Entrance Animations

### Fade + Slide (standard pattern for this site)
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

<motion.div variants={fadeUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Staggered children
```tsx
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map(i => (
    <motion.li key={i.id} variants={item}>{i.title}</motion.li>
  ))}
</motion.ul>
```

## Scroll-Triggered Animations

### useInView — trigger once when in viewport
```tsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Section() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      Content
    </motion.div>
  )
}
```

### useScroll + useTransform — parallax
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start']
})

const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

<motion.div style={{ y, opacity, scale }}>
  Parallax content
</motion.div>
```

### Page progress bar
```tsx
const { scrollYProgress } = useScroll()
<motion.div
  className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-50"
  style={{ scaleX: scrollYProgress }}
/>
```

## Hover & Tap Interactions

```tsx
// Button with spring
<motion.button
  whileHover={{ scale: 1.03, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
>
  Click me
</motion.button>

// Card hover
<motion.div
  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  className="rounded-2xl bg-white/5 p-6"
>
```

## AnimatePresence — mount/unmount animations

```tsx
// Modal
<AnimatePresence>
  {isOpen && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Modal />
    </motion.div>
  )}
</AnimatePresence>

// Route transitions (in layout.tsx)
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

## Layout Animations

```tsx
// Animate between different layouts automatically
<motion.div layout>
  {isExpanded ? <FullContent /> : <Summary />}
</motion.div>

// Shared layout — animate between pages (like selected card)
<motion.div layoutId="card-hero">
  <Card />
</motion.div>
```

## Number Counter Animation

```tsx
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
// Or use @number-flow/react (already installed in this project)
import NumberFlow from '@number-flow/react'
<NumberFlow value={count} />
```

## Custom Easing Reference
```tsx
// Smooth decelerate (most used)
ease: [0.22, 1, 0.36, 1]
// Standard
ease: 'easeOut'
// Spring (bouncy)
transition: { type: 'spring', stiffness: 300, damping: 20 }
// Spring (tight/snappy)
transition: { type: 'spring', stiffness: 500, damping: 35 }
```

## Performance Tips
- `will-change-transform` class on animated elements
- Animate `transform` and `opacity` only (no width/height/top/left)
- Use `layoutId` sparingly — expensive
- `useReducedMotion()` hook for accessibility
```tsx
const prefersReduced = useReducedMotion()
const animation = prefersReduced ? {} : { y: [0, -10, 0] }
```
