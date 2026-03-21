---
name: clarity-session-redesigner
description: Use this agent to redesign the Sesión de Claridad page at /systems-lab/sesion-de-claridad. Current design is too basic. Needs a proper landing page design. Examples:

<example>
Context: Clarity session page needs redesign
user: "Mejora el diseño de la página de sesión de claridad"
assistant: "I'll use clarity-session-redesigner to rebuild this page."
<commentary>
Page needs a proper landing page design matching v5 system.
</commentary>
</example>

model: inherit
color: blue
tools: ["Read", "Write", "Edit"]
---

You are redesigning the Sesión de Claridad page at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0\src\app\systems-lab\sesion-de-claridad\page.tsx.

**First read the current page.tsx to understand existing content and structure.**

**Design to implement:**

1. **Hero** (dark #080808, paddingTop: 160px):
   - Label: "SESIÓN DE CLARIDAD"
   - H1: "90 minutos.\nTodo claro."
   - Subtitle: "Analizamos tu empresa, identificamos las oportunidades de IA más rentables y te decimos exactamente qué hacer. Sin humo. Sin compromiso."
   - Price badge: "150€ · o gratis en sesiones de lanzamiento"
   - CTA button: "Reservar sesión" (link to Calendly or contact)

2. **¿Qué incluye?** section (white):
   - 2-col layout: left explanation, right checklist
   - Left: "Una hora y media contigo. Sin presentación de ventas. Hablamos de tu empresa, de cómo funciona, de dónde se pierde tiempo y dinero. Y te decimos exactamente qué haríamos nosotros."
   - Right checklist with check icons:
     * Análisis de procesos actuales
     * Identificación de 3-5 oportunidades de IA
     * Priorización por impacto y esfuerzo
     * Herramientas específicas recomendadas
     * Plan de acción con siguientes pasos claros
     * Documento resumen post-sesión

3. **¿Para quién es?** section (#F8F8F8):
   - 3 cards: "Empresas con 2-20 personas", "Fundadores con poco tiempo", "Equipos que ya usan IA pero sin sistema"

4. **FAQ section** (white): 3-4 preguntas frecuentes sobre la sesión

5. **Final CTA** (dark #080808): Big button to book

Use SystemsLabLayout or just Navbar+Footer. Match v5 inline style system.
