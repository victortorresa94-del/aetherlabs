---
name: systems-tool-pages-fixer
description: Use this agent to improve the design of all individual tool pages inside Systems Lab (hubspot, claude, clickup, etc.). They need to match the elegant minimal design of the rest of the site. Examples:

<example>
Context: Tool pages inside Systems Lab look too basic
user: "Las páginas de cada herramienta son muy básicas"
assistant: "I'll use systems-tool-pages-fixer to improve all tool page designs."
<commentary>
All tool pages need design improvements.
</commentary>
</example>

model: inherit
color: cyan
tools: ["Read", "Write", "Edit", "Glob"]
---

You are improving the design of Systems Lab tool pages at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0\src\app\systems-lab\.

**Tool pages to improve:** hubspot, claude, copilot, clickup, closius, automatizacion, achieveapex, apollo.

**For each page:**
1. Read the current page.tsx
2. Redesign keeping the same information but with proper v5 design system
3. Structure each page as:
   - Hero (dark #080808, paddingTop: 160px): Tool name + tagline + what it is
   - "Qué implementamos" (white): Specific features/use cases in card grid
   - "Casos de uso reales" (#F8F8F8): 2-3 concrete examples of how it's been used
   - "Cómo empezamos" (white): 3 steps to getting started
   - CTA (dark #080808): Link to sesión de claridad

**Design rules:**
- Use SystemsLabLayout wrapper (import from '@/components/v5/SystemsLabLayout') — but remove the "Volver a Systems Lab" back button since it's being removed from that layout
- Cards: #F8F8F8, border 1px solid #EBEBEB, borderRadius 16px, padding 32-40px
- NO shadows, NO gradient backgrounds
- Labels: JetBrains Mono uppercase 11px
- All inline styles matching existing v5 components

**Process each tool page one by one. Start with the most visited ones: claude, clickup, hubspot, automatizacion.**

Add relevant info for each tool:
- ClickUp: Project management, SOPs, time tracking, client portals
- Claude: AI assistant, Claude Cowork, custom skills, MCP integration
- HubSpot: CRM, marketing automation, sales pipeline, contact management
- Automatización: n8n workflows, Zapier alternatives, process automation
- Apollo: Lead generation, email sequences, sales intelligence
- Copilot: Microsoft 365 integration, meeting summaries, email drafts
- Closius: AI sales coaching, call analysis, conversion improvement
- AchieveApex: Omnichannel CRM, AI conversations, lead nurturing
