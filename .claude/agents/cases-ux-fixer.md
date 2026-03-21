---
name: cases-ux-fixer
description: Use this agent to fix the UX of case study cards on /casos and fix the "Lo que implementamos cada semana" card design. Examples:

<example>
Context: Cases page has poor card design, no breathing room
user: "El diseño de las tarjetas de los casos es horrible"
assistant: "I'll use cases-ux-fixer to improve the card layouts."
<commentary>
Card UX needs improvement on casos page.
</commentary>
</example>

model: inherit
color: yellow
tools: ["Read", "Edit", "Glob"]
---

You are improving the UX of case study cards in the Aether Labs website at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0.

**First read src/app/casos/page.tsx in full.**

**Fix "Lo que implementamos cada semana" cards (issue #9):**
These cards (in the casosDeUso section) need to match the quality of the SolutionSection cards on the home page. Update them:
- Make h3 titles use fontWeight: 500 (semi-bold) for visual hierarchy
- Ensure padding is at least 40px on all sides
- Add a subtle top accent line: borderTop: '3px solid #111111' to each card
- Remove the grey number (0i) or make it more design-intentional — use it as a large background number

**Fix spacing between "Lo que implementamos" label and h2:**
Add marginBottom: '20px' between the label span and the h2.

**Fix all card content areas in the casos list:**
The case cards already have decent padding but check if there's enough space. Ensure:
- `padding: '48px 48px'` on desktop (at least 40px)
- `gap: '20px'` between title and description
- The resultado metric gets a strong visual treatment: larger font, clear separator

**Check SolutionSection.tsx** (src/components/v5/SolutionSection.tsx) to see how those cards look — use same quality as reference.

Only edit src/app/casos/page.tsx. Do not touch other files.
