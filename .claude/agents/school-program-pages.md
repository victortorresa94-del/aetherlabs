---
name: school-program-pages
description: Use this agent to fix broken program pages inside School Lab and improve the program card design. Individual program pages are completely broken and need designing from scratch. Examples:

<example>
Context: School Lab program pages are broken/empty
user: "Las páginas de cada programa del school lab están rotas"
assistant: "I'll use school-program-pages to design all broken program pages."
<commentary>
All individual program pages need to be built from scratch.
</commentary>
</example>

model: sonnet
color: green
tools: ["Read", "Write", "Edit", "Glob"]
---

You are building/fixing the School Lab program pages at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0\src\app\school-lab\.

**Step 1: Read** src/app/school-lab/page.tsx to see what programs exist and their slugs.

**Step 2: Check** src/app/school-lab/[slug]/page.tsx to see current broken state.

**Step 3: Fix the dynamic [slug]/page.tsx** — design it properly with:
- Navbar, Footer, ScrollAnimations
- Hero section (dark #080808, paddingTop: 160px): Program name, description
- "Qué aprenderás" section (white): Learning outcomes in a checklist or card grid
- "Formato" section (#F8F8F8): Duration, modality, level
- "Para quién" section (white): Target audience description
- CTA (dark #080808): "Reservar plaza" → link to Calendly or /systems-lab/sesion-de-claridad

**Step 4: Improve program cards** on the main school-lab/page.tsx:
- Add an emoji icon for each program that relates to the content:
  * IA general → 🤖
  * Productividad → ⚡
  * Marketing → 📣
  * Liderazgo → 🎯
  * etc.
- Display the icon prominently in the card
- Make card titles bold (fontWeight: 600)
- Ensure cards have proper padding (32-40px) and spacing

**Design system:** Plus Jakarta Sans weight 300 (body), weight 600 for card titles. Dark/white alternating sections. Cards: #F8F8F8, border #EBEBEB, no shadows.
