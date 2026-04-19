# Aether Labs — Design System

> **Validated April 2026 by Victor Torres (CEO)**  
> Source of truth for all visual, copy, and UX decisions across Aether Labs products.

## About the Company

**Aether Labs** (aetherlabs.es) is a Barcelona-based AI implementation agency. They help Spanish businesses adopt AI — specifically Claude (Anthropic) — across operations, sales, marketing, and training. The brand positioning is: *direct, expert, no-nonsense*. Like a knowledgeable friend, not a corporate consultant.

**Tagline:** *El puente entre personas y tecnología.*  
**Copy language:** Spanish  
**Market:** Spanish SMEs and mid-market (directores, empresarios, equipos)

---

## Sources Provided

- **Codebase:** `Web-Aether-3.0/` — Next.js 15 / React 19 / Tailwind 4 website (mounted locally)
  - Main app: `Web-Aether-3.0/src/app/`
  - Components: `Web-Aether-3.0/src/components/v5/` (current) + `ui/`
  - Design rules: `Web-Aether-3.0/CLAUDE.md` ← **start here**
  - Global CSS: `Web-Aether-3.0/src/app/globals.css`
- **GitHub repo:** `victortorresa94-del/aetherlabs` (reference only)
- **Font assets:** `Web-Aether-3.0/public/fonts/` — Advercase .otf files
- **Resources:** `Web-Aether-3.0/_recursos_y_inputs/` — brand materials, GameBible doc

---

## Products / Surfaces

| Surface | Description | Key components |
|---|---|---|
| **Marketing Website** | Main site at aetherlabs.es — the primary product | Navbar, HeroSection, LabsBannerSection, Footer |
| **Labs sub-pages** | 7 service labs, each with hero + alternating sections | Lab-specific hero, FAQ, CTA |
| **Experimentos** | Public experiments / demos section | ExperimentCard, 3D scene |
| **Blog / Archivo** | Article archive | Blog layout, cards |

### The 7 Labs

| # | Lab | Pain addressed |
|---|---|---|
| 01 | Claude Lab | Equipo con acceso a Claude pero nadie sabe usarlo |
| 02 | Software Lab | Necesitan herramienta a medida sin pagar fortunas |
| 03 | Agents Lab | Procesos que dependen de 1 persona (⭐ Más demandado) |
| 04 | Gen AI Lab | Producen poco contenido visual porque es caro y lento |
| 05 | Marketing Lab | Invierten en marketing sin saber qué funciona |
| 06 | Learn Lab | El equipo sabe que la IA existe pero no sabe aplicarla |
| 07 | Open Lab | Necesitan chatbots, webs o dashboards a medida |
| 08 | AI Team Lab | No saben por dónde empezar (flagship retainer) |

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **Language:** Spanish (es-ES). Never mix languages in UI copy.
- **Voice:** Direct, confident, expert. Like a trusted friend who knows AI — not a salesperson.
- **Pain-first:** Every lab/section opens with the client's pain, not features.
- **Forbidden words:** "innovador", "disruptivo", "soluciones", "ecosistema", "sinergia", "descubre más", "haz click aquí"
- **Preferred verbs:** Implementamos, automatizamos, construimos, formamos, ejecutamos
- **Tense/person:** Nosotros (we) do things FOR tú/vosotros (the client)
- **Numbers/stats:** Used sparingly and only when real. No "data slop."

### Casing
- **Headings (Advercase):** Sentence case. Never ALL CAPS in display headings.
- **Mono labels:** ALL CAPS + letter-spacing. Used for categories, section eyebrows, index numbers.
- **CTAs:** Short, action-first. e.g. "Auditoría gratuita →", "Implementar IA →"

### Emoji & Special Characters
- **No emoji in UI** — ever. Internal comments only.
- **Arrow →** used in CTAs (not →→, not ▶)
- **Mono indices** (01, 02...) used as decorative elements

### Vibe
Retro-minimal editorial tech. Think a premium architecture studio meets a 90s hacker terminal. Sophisticated restraint, not cold minimalism.

---

## VISUAL FOUNDATIONS

### Color System
| Token | Value | Usage |
|---|---|---|
| `--al-bg-dark` | `#080808` | Hero, footer, featured cards, navbar pre-scroll |
| `--al-bg-dark-2` | `#111111` | Featured lab card bg |
| `--al-bg-light` | `#F8F8F5` | Main content sections (Labs, etc.) |
| `--al-bg-white` | `#FFFFFF` | Lab card bg |
| `--al-bg-warm` | `#EDE8DF` | 3D/editorial "warm card" |
| `--al-text-primary` | `#F5F5F0` | Primary text on dark |
| `--al-text-secondary` | `rgba(245,245,240,0.55)` | Secondary text on dark |
| `--al-text-on-light` | `#111111` | Primary text on light |
| `--al-accent-indigo` | `#6366F1` | "Lab" label accent only |
| `--al-accent-green` | `#00FF41` | Selection highlight (retro terminal) |

**Color rules:**
- Alternate sections: dark → light → dark → light
- No colorful gradients — only white-to-white-opacity or bg overlays
- Max 2 background colors per page view

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / H1 / H2 | **Advercase** | 400 (regular) | The brand's editorial voice. Never bold in body. |
| Subheadings | Advercase | 300-400 | Letter spacing -0.02em |
| Body | **DM Sans** | 300 | Primary reading weight |
| Labels / Mono | **JetBrains Mono** | 400-500 | ALL CAPS, 0.15em tracking |
| Serif accent | Playfair Display | 400 | Used in select editorial moments |

**Rules:**
- Never use font-weight 700+ on text longer than 2 words
- All display headings: `letter-spacing: -0.02em`
- Body line-height: 1.7–1.8
- Minimum font size: 12px in footer / labels; 15px in body

### Spacing & Layout
- **Section padding:** 120px vertical (80px on mobile)
- **Container:** max-width 1280px, padding `clamp(24px, 6vw, 120px)`
- **Card gap in grids:** 8–12px
- **Inner card padding:** 28–52px

### Backgrounds & Imagery
- **Video hero:** Full-bleed video background with subtle dark overlay (`rgba(8,8,8,0.22)`)
- **3D objects:** Custom `.glb` models (Fluby, Weebo) rendered in Three.js
- **Photography:** Retro pixel-aesthetic images (pixel-camera, pixel-mac, pixel-pcb)
- **No hand-drawn illustrations; no pattern fills; no grain textures**
- **Imagery color vibe:** Desaturated, cool-neutral, slightly grainy/low-fi

### Borders & Radii
| Use | Value |
|---|---|
| Small elements (pills, badges) | 4–6px |
| Lab cards | 12px |
| Featured / hero cards | 16px |
| Warm/editorial cards | 20px |
| CTA buttons (primary) | **0px** (square — intentional brand signature) |
| Secondary buttons | 100px (full pill) |
| **Maximum ever** | 20px |

### Shadows
- **Lab card hover:** `0 12px 32px rgba(0,0,0,0.07)` — subtle lift
- **Warm/3D card:** `0 40px 80px rgba(0,0,0,0.40)` — dramatic elevation
- **Dropdown:** `0 8px 32px rgba(0,0,0,0.30)`
- **No decorative glow or neon shadows**

### Animations & Transitions
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — spring premium. Use everywhere.
- **Duration:** 200ms fast (hovers), 550–800ms (scroll reveals)
- **Scroll reveals:** `opacity 0→1`, `translateY(30px→0)`, `blur(4px→0)` simultaneously
- **Stagger:** 60ms between children
- **Card hover:** `translateY(-3px)` + box-shadow
- **No linear easing; no bounce; no infinite loops in content areas**
- **Reduced motion:** All animations disabled via `prefers-reduced-motion`

### Navbar Behavior
- **Pre-scroll:** Transparent, logo white, links `rgba(255,255,255,0.6)`
- **Post-scroll:** Frosted glass `rgba(255,255,255,0.85)` + blur, logo inverted (black), links `#555`
- **CTA button:** Square, bg flips (white on dark / black on light)
- **Height:** 60px fixed

### Hover & Press States
- **Cards:** `translateY(-3px)` + soft shadow lift
- **Buttons:** Slightly darker background, `translateY(-1px)`
- **Nav links:** Underline slides in from left via `scaleX(0→1)`
- **Ghost buttons:** border opacity + bg opacity both increase
- **Social icons:** border + icon opacity up

### Glass / Blur
- **Navbar frosted:** `backdrop-filter: blur(20px)` on scroll
- **Floating pills:** `backdrop-filter: blur(16px)` on dark overlay
- **No full-page glassmorphism; no frosted cards in content areas**

---

## ICONOGRAPHY

### Approach
Aether Labs uses **Lucide React** icons exclusively in the UI. No custom icon set, no icon font, no SVG sprites beyond Lucide. Icons are:
- Stroke-based, 1.5px stroke weight (Lucide default)
- Used at 14–18px in UI elements
- Color: contextual (inherits text color or `rgba(0,0,0,0.35)` on light, `#F5F5F0` on dark)
- Never used decoratively in large sizes — used functionally in nav, cards, buttons

### Lucide icons in use
`MessageSquare` (Claude Lab), `Code2` (Software Lab), `Bot` (Agents Lab), `Sparkles` (Gen AI Lab), `Megaphone` (Marketing Lab), `GraduationCap` (Learn Lab), `Wrench` (Open Lab), `Users` (AI Team Lab), `ArrowUpRight` (CTAs), `ChevronDown` (dropdowns)

### Partner / Tool Logos
Stored in `assets/logos/`. Used in trust bands and tool integrations:
- Claude, Make, n8n, Notion, HubSpot, Google Workspace, and more
- Always displayed at consistent small sizes; no color alteration

### Brand Mascots
- **Fluby** — 3D character (`assets/Fluby.png`, `.glb` model). Used in experimental/fun contexts.
- **Weebo** — Secondary 3D mascot. GLB model in public/. Not widely deployed.

### Pixel Imagery
Retro pixel-aesthetic photos (`assets/pixel-camera.jpeg`, `assets/pixel-mac.jpeg`) — used as editorial imagery in hero cards and sections to reinforce the "minimal tech retro" vibe.

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All design tokens + semantic classes
├── fonts/
│   ├── Advercase.otf            ← Primary display font (regular)
│   ├── Advercase-Bold.otf       ← Bold variant
│   └── Advercase-Italic.otf     ← Italic variant
├── assets/
│   ├── aether-logo-white.png    ← Logo (white, for dark bgs)
│   ├── aether-logo-transparent.png ← Logo transparent bg
│   ├── aether-logo-new.png      ← Newer logo variant
│   ├── logo-pixel.png           ← Pixel/retro version
│   ├── og-image-black.png       ← OG/social share image
│   ├── experimental-lab-bg.jpg  ← Full-bleed dark bg image
│   ├── pixel-camera.jpeg        ← Retro pixel editorial photo
│   ├── pixel-mac.jpeg           ← Retro pixel editorial photo
│   ├── Fluby.png                ← Brand mascot 3D render
│   ├── tech_neon_set.png        ← Neon icon set
│   └── logos/                   ← Partner/tool logos
├── preview/                     ← Design System card previews
└── ui_kits/
    └── website/                 ← Marketing website UI kit
        ├── README.md
        ├── index.html           ← Interactive prototype
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── LabsBannerSection.jsx
        └── Footer.jsx
```
