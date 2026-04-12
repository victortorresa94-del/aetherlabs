# Aether Labs — Dirección Gráfica Permanente

> Este archivo define la identidad visual, de copy y de UX de Web Aether 3.0.
> TODO Claude Code, agente o IA que trabaje en este proyecto DEBE leer esto primero.
> No hay excusas. No hay excepciones.

---

## El Estilo Aprobado

El estilo de referencia fue validado por el cliente en abril 2026 con el LabsBannerSection:

- **Fondo blanco o crema (#F8F8F5)** para secciones de contenido
- **Fondo negro (#080808 / #111)** para hero, featured cards y CTAs
- **Cards blancas con borde sutil** (`#e8e8e5`) y hover lift + shadow
- **Tipografía display: Advercase** (serif editorial, sin cursiva por defecto)
- **Tipografía body: DM Sans** (ligera, 300-400 weight)
- **Tipografía mono: JetBrains Mono** (para labels, índices, badges)
- **Sin colores de acento llamativos** — máximo sobriedad, máxima elegancia
- **Grid asimétrico**: featured card ancha arriba, grid 3 columnas abajo
- **Números/índices en mono** (01, 02...) como elementos decorativos mínimos

---

## Tokens de Diseño

```css
--v5-font-advercase: 'Advercase', 'Playfair Display', Georgia, serif;
--v5-font-display:   'Plus Jakarta Sans', sans-serif;
--v5-font-body:      'DM Sans', sans-serif;
--v5-font-mono:      'JetBrains Mono', monospace;

/* Colores core */
--v5-bg-dark:    #080808;
--v5-bg-light:   #F8F8F5;
--v5-bg-white:   #FFFFFF;
--v5-text-dark:  #111111;
--v5-text-light: #F5F5F0;
--v5-border:     #E8E8E5;
--v5-muted:      #888888;
```

---

## Reglas Absolutas

### ✅ SIEMPRE
- Alternar fondos entre secciones: oscuro → claro → oscuro → claro
- Usar `fontWeight: 300` o `400` en body. NUNCA 700 en textos largos
- Usar `letterSpacing: '-0.02em'` en headings grandes (Advercase)
- Cards: `borderRadius: 12-16px`, borde `1px solid #e8e8e5`, bg blanco
- El heading principal de cada sección es en **Advercase, sin cursiva**
- Copy en español, tono directo, sin academicismos ni corporativismo
- Animaciones: `ease: [0.16, 1, 0.3, 1]` — spring premium, no lineal
- Hover en cards: `translateY(-3px)` + `boxShadow: 0 12px 32px rgba(0,0,0,0.07)`

### ❌ NUNCA
- Degradados coloridos (no purple-to-pink, no rainbow gradients)
- Fondos de colores saturados en secciones grandes
- Font-weight 700 o 800 en textos de más de 2 palabras
- Glassmorphism exagerado
- Bordes redondeados mayores de 20px
- Emojis en la UI (solo en código interno/comentarios)
- CTAs genéricos como "Descubre más" o "Haz click aquí"
- Logos o imágenes descentradas o de tamaños inconsistentes

---

## Estructura de Páginas

### Home (page.tsx)
```
Navbar → HeroSection → LabsBannerSection → Footer
```
El home es intencionalmente minimalista. Solo Hero + Labs.

### Labs / subpáginas
```
Navbar → Hero (dark, Advercase, video o imagen) → Secciones alternadas → CTA → Footer
```

### Secciones estándar
- `v5-section`: padding 100-120px vertical
- `v5-container`: max-width 1280px, padding horizontal 32px
- `v5-reveal`: animación de entrada (opacity 0→1, translateY 20→0)

---

## Copy y Tono

- **Audiencia**: Empresarios, directores, equipos que quieren IA pero no saben por dónde empezar
- **Tono**: Directo, seguro, sin vender humo. Como un amigo experto
- **Pain-first**: Cada lab empieza con el dolor del cliente, no con features
- **Verbos de acción**: Implementamos, automatizamos, construimos, formamos
- **Sin**: "innovador", "disruptivo", "soluciones", "ecosistema", "sinergia"

---

## Los 7 Labs

| Lab | Pain principal | Ruta |
|-----|---------------|------|
| Claude Lab | ¿Tu equipo sigue en 2020 mientras la IA más potente ya está disponible? | /systems-lab |
| Software Lab | ¿Necesitas herramientas a medida sin pagar fortunas a una agencia? | /systems-lab |
| Agents Lab | ¿Procesos que dependen de una persona y se rompen cuando no está? | /open-lab |
| Gen AI Lab | ¿Produces menos contenido visual del que necesitas porque es caro y lento? | /creative-lab |
| Marketing Lab | ¿Inviertes en marketing sin saber qué funciona ni por qué tu competencia crece más? | /creative-lab |
| Learn Lab | ¿Tu equipo sabe que la IA existe pero no sabe cómo aplicarla en su trabajo real? | /school-lab |
| AI Team Lab | ¿No sabes por dónde empezar mientras tu competencia ya lleva ventaja? | /systems-lab/sesion-de-claridad |

---

## Componentes Clave

- `HeroSection.tsx` — Video hero Seedance, Advercase, sin CTA, solo título + subtítulo
- `LabsBannerSection.tsx` — 7 labs, bento grid, pain-driven, fondo claro
- `Navbar.tsx` — Logo blanco que se invierte al hacer scroll, height=29 width=112
- `ScrollAnimations.tsx` — Activa `.v5-reveal` con IntersectionObserver
- `Footer.tsx` — Links reales, sin relleno

---

## Archivo /old

La página `/old` es el **archivo de componentes retirados**.
- Cuando el cliente dice "usa X de /old", buscar ahí el componente y reutilizarlo
- Cuando se retira un componente del home, moverlo a /old antes de eliminar
- NUNCA borrar componentes sin moverlos a /old primero

---

## Convenciones de Código

- `'use client'` solo cuando el componente usa hooks o eventos del browser
- Styles: **inline styles** para diseño, **Tailwind** solo para layout (flex, grid, gap)
- No crear archivos CSS por componente — todo en globals.css o inline
- Imágenes: en `/public/images/`, siempre con alt text
- Videos: en `/public/videos/`
- Fuentes: en `/public/fonts/`

---

*Última actualización: Abril 2026 — Validado por Victor Torres*
