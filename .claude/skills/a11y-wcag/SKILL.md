---
name: a11y-wcag
description: WCAG 2.1 accessibility for Next.js — semantic HTML, ARIA, keyboard navigation, focus management, color contrast, screen reader support, skip links, dialog accessibility. Use when auditing accessibility, fixing a11y issues, or building accessible components.
version: 1.0.0
---

# Accessibility — WCAG 2.1 AA Compliance

## Semantic HTML First
```tsx
// ✅ Semantic structure
<header>
  <nav aria-label="Navegación principal">
    <ul>
      <li><a href="/nosotros">Nosotros</a></li>
    </ul>
  </nav>
</header>
<main id="main-content">
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">Aether Labs</h1>
  </section>
</main>
<footer>...</footer>

// ❌ div soup (inaccessible)
<div class="header">
  <div class="nav"><div class="item">...</div></div>
</div>
```

## Skip Link (every page needs this)
```tsx
// First element in layout.tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
>
  Saltar al contenido principal
</a>
```

## ARIA Labels
```tsx
// Buttons with only icons
<button aria-label="Cerrar menú">
  <XIcon className="w-5 h-5" aria-hidden="true" />
</button>

// Links that open new tab
<a href="..." target="_blank" rel="noopener noreferrer">
  Ver en GitHub
  <span className="sr-only">(abre en nueva pestaña)</span>
</a>

// Loading states
<button aria-busy={isLoading} disabled={isLoading}>
  {isLoading ? 'Enviando...' : 'Enviar'}
</button>

// Expandable sections
<button
  aria-expanded={isOpen}
  aria-controls="faq-answer-1"
>
  ¿Cuánto cuesta?
</button>
<div id="faq-answer-1" hidden={!isOpen}>...</div>

// Form fields
<label htmlFor="email">Email *</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<p id="email-error" role="alert" aria-live="polite">
  {errors.email}
</p>
```

## Keyboard Navigation
```tsx
// Focus trap for modals (use Radix Dialog — handles this)
import { Dialog } from '@radix-ui/react-dialog'

// Custom focus management
function Modal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Focus first element when modal opens
    const firstFocusable = ref.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    firstFocusable?.focus()
  }, [])

  // Trap focus inside modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return <div ref={ref} role="dialog" aria-modal="true">...</div>
}
```

## Color Contrast (WCAG AA)
```
Normal text: 4.5:1 ratio minimum
Large text (18px+ bold or 24px+): 3:1 ratio minimum
UI components: 3:1 ratio minimum

This project's dark theme:
✅ #F5F5F5 on #0A0A0A = 18.9:1 (excellent)
✅ #A0A0A0 on #0A0A0A = 5.6:1 (passes AA)
❌ #666666 on #0A0A0A = 3.8:1 (fails AA for normal text)

Check: https://webaim.org/resources/contrastchecker/
```

## Images + Media
```tsx
// Decorative images — empty alt
<Image src="/decoration.svg" alt="" aria-hidden="true" />

// Informative images — descriptive alt
<Image src="/team.jpg" alt="Equipo de Aether Labs en la oficina de Barcelona" />

// Videos
<video autoPlay muted playsInline>
  <track kind="captions" src="/captions-es.vtt" srcLang="es" label="Español" />
</video>

// Don't autoplay with sound — always muted + controls available
```

## Reduced Motion
```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedSection() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
    >
      Content
    </motion.div>
  )
}
```

```css
/* In globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

## Accessibility Audit Tools
```bash
# axe-core (automated testing)
npm install --save-dev @axe-core/react

# In _app or layout (dev only):
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => axe.default(React, ReactDOM, 1000))
}

# Lighthouse in Chrome DevTools
# VoiceOver (Mac): Cmd+F5
# NVDA (Windows): Free screen reader for testing
```

## Quick A11y Checklist
- [ ] All images have alt text (or empty alt="" if decorative)
- [ ] All form inputs have visible labels
- [ ] Color is not the only way to convey information
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Error messages linked to their inputs
- [ ] Headings in logical order (h1 → h2 → h3)
- [ ] Videos have captions
- [ ] No flashing content (3+ flashes/sec)
