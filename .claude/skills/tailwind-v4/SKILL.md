---
name: tailwind-v4
description: Tailwind CSS v4 mastery — new CSS-first config, OKLCH colors, container queries, arbitrary variants, @layer, @apply, custom utilities, and this project's design system. Use when styling components, building layouts, fixing responsive issues, or working with the design system.
version: 1.0.0
---

# Tailwind CSS v4 — Complete Reference

## v4 Key Changes (this project uses v4)
- Config is now in CSS (`globals.css`) not `tailwind.config.js`
- `@theme` replaces `theme.extend`
- OKLCH color system by default
- `@import 'tailwindcss'` instead of directives
- PostCSS plugin: `@tailwindcss/postcss`

## Project Design System (globals.css pattern)

```css
@import "tailwindcss";

@theme {
  /* Colors — this project uses dark #0A0A0A bg */
  --color-bg: oklch(7% 0 0);           /* #0A0A0A */
  --color-surface: oklch(12% 0 0);     /* #1A1A1A */
  --color-border: oklch(20% 0 0);      /* subtle borders */
  --color-text: oklch(96% 0 0);        /* #F5F5F5 */
  --color-muted: oklch(60% 0 0);       /* gray text */
  --color-accent: oklch(65% 0.2 260);  /* brand violet/blue */

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', sans-serif;

  /* Spacing scale */
  --spacing-section: 5rem;   /* section padding */
  --spacing-container: 1.5rem; /* container padding */
}
```

## Core Patterns

### Layout
```tsx
// Full-width section with centered content
<section className="w-full px-6 py-20 md:py-32">
  <div className="max-w-7xl mx-auto">...</div>
</section>

// CSS Grid for complex layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flexbox shortcuts
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col gap-2">
```

### Responsive (mobile-first)
```tsx
// Breakpoints: sm:640 md:768 lg:1024 xl:1280 2xl:1536
<h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
<div className="hidden md:flex">        {/* desktop only */}
<div className="flex md:hidden">        {/* mobile only */}
<p className="text-sm md:text-base lg:text-lg">
```

### Dark Theme (this project is dark-first)
```tsx
// Base dark, light overrides with light: variant
<div className="bg-[#0A0A0A] text-[#F5F5F5]">
// Glassmorphism cards
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
// Subtle gradients
<div className="bg-gradient-to-b from-white/5 to-transparent">
```

### Typography
```tsx
// Display headings
<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
// Body
<p className="text-base text-[#A0A0A0] leading-relaxed max-w-prose">
// Labels / caps
<span className="text-xs uppercase tracking-widest text-muted-foreground">
// Gradient text
<span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
```

### Interactive States
```tsx
// Buttons
<button className="
  px-6 py-3 rounded-xl font-medium
  bg-white text-black
  hover:bg-white/90
  active:scale-[0.98]
  transition-all duration-150
  disabled:opacity-40 disabled:cursor-not-allowed
">

// Links / cards hover
<div className="
  group cursor-pointer
  hover:bg-white/10
  transition-colors duration-200
">
  <span className="group-hover:text-white transition-colors">text</span>
```

### Arbitrary Values
```tsx
// When you need exact pixel values
<div className="h-[600px] w-[calc(100%-2rem)] top-[72px]">
// Grid template
<div className="grid-cols-[1fr_2fr_1fr]">
// Custom colors
<div className="bg-[#0A0A0A] text-[#F5F5F5] border-[#333]">
```

### Container Queries (v4)
```css
@container (min-width: 400px) {
  .card-title { font-size: 1.25rem; }
}
```
```tsx
<div className="@container">
  <div className="@sm:flex-row flex-col">
```

### Animations
```tsx
// Built-in
<div className="animate-pulse animate-spin animate-bounce animate-ping">
// Combined with Framer — add will-change for GPU
<motion.div className="will-change-transform">
// Tailwind Animate (tailwindcss-animate is in this project)
<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
```

## cn() utility — always use for conditional classes
```tsx
import { cn } from '@/lib/utils' // clsx + tailwind-merge

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === 'primary' ? "primary-classes" : "secondary-classes",
  className  // always pass through className prop
)}>
```

## Common Mistakes to Avoid
- Don't use `!important` — use specificity or `!` modifier
- Don't inline styles when Tailwind class exists
- Don't mix Tailwind v3 config (`theme.extend`) with v4 CSS config
- Purge issues: use full class names, not dynamic `text-${color}`
