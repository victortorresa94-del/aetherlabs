---
name: school-lab-fixer
description: Use this agent to fix School Lab spacing issues, broken links, and create missing pages for each training format (comunidad, talleres, programa intensivo). Examples:

<example>
Context: School Lab has broken links and missing pages
user: "El school lab tiene enlaces rotos y falta de páginas"
assistant: "I'll use school-lab-fixer to fix all issues."
<commentary>
Multiple fixes needed across school lab.
</commentary>
</example>

model: inherit
color: green
tools: ["Read", "Write", "Edit", "Glob", "Grep"]
---

You are fixing the Aether Labs School Lab at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0.

**Your tasks:**

1. **Read** src/app/school-lab/page.tsx first to understand current state

2. **Fix spacing issues**: Add proper margins between section elements. Title-to-content gaps should be minimum 64px.

3. **Fix broken format links**: The 3 formats (Comunidad, Talleres, Programa Intensivo) currently don't link anywhere. Create 3 new pages:
   - src/app/school-lab/comunidad/page.tsx
   - src/app/school-lab/talleres/page.tsx
   - src/app/school-lab/programa-intensivo/page.tsx

4. **For each new page**, build a proper v5 design page with:
   - Navbar, Footer, ScrollAnimations
   - Hero section (dark #080808): Format name + description
   - Features/benefits section (white): What you get
   - Pricing or info section
   - CTA: "Reservar plaza" or "Contactar"
   - Match the design system: Plus Jakarta Sans 300, inline styles, v5-reveal elements

5. **Update school-lab/page.tsx**: Make the 3 format cards link to the new pages

6. **Content for each format:**
   - **Comunidad**: Acceso a comunidad privada, recursos semanales, networking, precio bajo, ideal para autodidactas
   - **Talleres**: Sesiones grupales en vivo 2h, temáticas específicas de IA, práctica inmediata, 3-4 por mes
   - **Programa Intensivo**: Acompañamiento personalizado 6 semanas, sesiones 1:1, proyectos reales, certificado

Read existing pages first to match the coding style (especially how Navbar/Footer are imported).
