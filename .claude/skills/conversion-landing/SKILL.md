---
name: conversion-landing
description: CRO and landing page optimization for Aether Labs — above-the-fold, CTAs, social proof, FAQ, hero copy, value proposition, pricing psychology, form optimization, A/B testing. Use when improving landing page conversion, writing copy, optimizing CTAs, or designing sections to maximize leads.
version: 1.0.0
---

# Conversion Rate Optimization — Landing Page Mastery

## Aether Labs Value Proposition Framework

**Core message:** "Ayudamos a empresas con buen producto a conseguir clientes con IA"
- **Problem:** Empresas con buen producto pero sin presencia digital ni tiempo para crear contenido
- **Solution:** IA + equipo humano que implementa, produce y escala
- **Proof:** Casos reales, sesión de claridad gratuita como lead magnet
- **CTA:** "Reserva tu sesión de claridad gratis"

## Hero Section Formula

```
Headline: [Big Outcome] + [For Who] + [Differentiator]
Subheadline: [How] + [Timeframe/Ease] + [Remove Fear]
CTA Primary: [Action] + [Benefit] + [Zero Risk]
CTA Secondary: [See Social Proof / Learn More]
```

**Strong CTAs for Aether Labs:**
- "Reserva tu sesión gratis →" (lead magnet)
- "Ver cómo funciona" (curiosity)
- "Habla con nosotros" (low friction)

**Weak CTAs to avoid:**
- "Más información"
- "Click aquí"
- "Enviar"

## Above the Fold Checklist
- [ ] Clear headline answering "what do you do?"
- [ ] Subheadline answering "why should I care?"
- [ ] Primary CTA visible without scrolling
- [ ] Social proof signal (logos, numbers, testimonial)
- [ ] No navigation leading users away
- [ ] Hero loads in < 2.5s (LCP)

## Section Order (proven for service agencies)
1. Hero — problem + solution + CTA
2. Social proof — logos of clients/tools used
3. Problem — amplify pain (esto te pasa?)
4. Solution — how you solve it
5. How it works — 3 simple steps
6. Services/Labs — what you offer
7. Case studies — real results
8. Pricing/Offer — clarity session
9. More social proof — testimonials
10. FAQ — objection handling
11. Final CTA — last chance

## Copy Patterns That Convert

### Problem Section (PAS)
```
Pain: "La mayoría de empresas pierden clientes porque..."
Agitate: "Y lo peor es que mientras tú tardas semanas en..."
Solution: "Nosotros implementamos IA para que..."
```

### Feature → Benefit Translation
```
Feature: "Automatización con Claude"
Benefit: "Tu equipo hace en 2h lo que antes tardaba 2 días"

Feature: "Contenido con IA"
Benefit: "50 posts listos para publicar esta semana"

Feature: "Clarity Session"
Benefit: "En 45 min sabes exactamente qué implementar primero"
```

### Social Proof Hierarchy (strongest to weakest)
1. Video testimonials with name + company
2. Case studies with specific numbers
3. Text quotes with photo + name
4. Company logos (use recognizable brands)
5. Review counts / star ratings
6. "X empresas ya confían en nosotros"

## FAQ — Objection Handling
Key objections to address:
- "¿Cuánto cuesta?" → Transparency about session + process
- "¿Funciona para mi sector?" → Case studies per vertical
- "¿Cómo sé que va a funcionar?" → Garantías, primera sesión gratis
- "¿Es complicado de implementar?" → 3-step process
- "¿Necesito saber de IA?" → "Lo hacemos nosotros, tú solo usas el resultado"

## Form Optimization
```tsx
// Fewer fields = higher conversion
// Bad: Name, Surname, Email, Phone, Company, Role, Message, Budget, Timeline
// Good: Email, Company, "¿Qué necesitas?" (optional)

// Progressive disclosure
<form>
  <input type="email" placeholder="Tu email de empresa" required />
  {/* Show more fields only after email entered */}
</form>

// Social login reduces friction
<button>Continuar con Google</button>

// Trust signals near CTA
<p className="text-xs text-muted">Sin spam. Cancelar cuando quieras.</p>
```

## Pricing Psychology
- Anchor with highest tier first (left to right)
- Middle tier = recommended (highlighted)
- Use "por día" pricing to reduce sticker shock
- Include everything in base price, no hidden fees
- "Más popular" badge on recommended plan
- Stripe Checkout with logos of payment methods

## A/B Testing Ideas for Aether Labs
1. Hero CTA: "Reserva sesión gratis" vs "Empieza gratis"
2. Hero headline: benefit-first vs pain-first
3. Social proof: logos before fold vs after
4. Pricing: show prices vs "pide presupuesto"
5. CTA color: white button vs violet/blue gradient

## Page Speed = Conversion
- Every 1s delay = 7% less conversions
- LCP > 4s loses 40% of visitors
- Use next/image for all images
- Lazy load below-fold sections
