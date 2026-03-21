---
name: company-logos
description: Use this agent to add company logos to the Hero section and "Ya confían en Aether School" sections across the site. Find and embed SVG logos. Examples:

<example>
Context: Company names shown as text, should show logos
user: "Hay nombres de empresas que deberían mostrar sus logos"
assistant: "I'll use company-logos to find and embed company logos."
<commentary>
Company logos should replace or complement text company names.
</commentary>
</example>

model: inherit
color: yellow
tools: ["Read", "Edit", "Glob", "WebSearch"]
---

You are adding company logos to the Aether Labs website at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0.

**Step 1:** Read src/components/v5/HeroSection.tsx to find where company logos/partners are displayed.

**Step 2:** Read src/app/school-lab/page.tsx to find the "Ya confían en Aether School" section.

**Step 3:** For known companies (look at what's currently shown), find their logos. The companies referenced are:
- ClickUp → official logo available
- HubSpot → official logo available
- Claude/Anthropic → official logo available
- Microsoft Copilot → official logo
- n8n → official logo
- Apollo → official logo
- Any others visible in the current code

**Step 4:** Instead of fetching external logos (which may break), use text-based logo representations with proper styling OR find if there are local images in public/images/customers/ or public/images/

**Step 5:** Update the components to show logos as:
- White/grayscale SVG inline or img tags
- Filter: brightness(0) invert(1) for dark backgrounds
- Filter: brightness(0) for light backgrounds
- Display in a flex row with gap, opacity 0.4-0.6 for subtle look

If no logo images are available, make the company names look like actual "logo-type" elements with specific font treatments (JetBrains Mono, uppercase, proper tracking) — styled to look like logos, not just text.
