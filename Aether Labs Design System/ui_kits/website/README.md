# Aether Labs — Website UI Kit

## Overview
High-fidelity recreation of the Aether Labs marketing website (aetherlabs.es).
Built as a click-through prototype in vanilla HTML + React/Babel JSX.

## Structure
- `index.html` — Interactive prototype (homepage → lab page → contact)
- `Navbar.jsx` — Fixed navbar with scroll state + Labs dropdown
- `HeroSection.jsx` — Full-bleed hero with title
- `LabsBannerSection.jsx` — 7-labs bento grid (the signature section)
- `Footer.jsx` — 3-column footer with CTA

## Design Width
1280px max-width container, full-width backgrounds. Mobile-responsive.

## Key Visual Rules
- Sections alternate: dark (#080808) ↔ light (#F8F8F5)
- Advercase for all headings, DM Sans 300 for body, JetBrains Mono for labels
- Primary CTA: square button (border-radius: 0), light on dark / dark on light
- Cards: white bg, 1px #E8E8E5 border, 12px radius, hover translateY(-3px)
- Never use emoji. Never use colorful gradients.

## Sources
- `Web-Aether-3.0/src/components/v5/` — all v5 components
- `Web-Aether-3.0/CLAUDE.md` — design rules
- `Web-Aether-3.0/src/app/globals.css` — CSS tokens
