---
name: seo-meta
description: Next.js SEO — generateMetadata, OpenGraph, Twitter cards, structured data (JSON-LD), sitemap, robots.txt, canonical URLs, hreflang, Core Web Vitals for ranking. Use when adding metadata to pages, fixing SEO issues, creating sitemaps, or adding structured data.
version: 1.0.0
---

# Next.js SEO — Complete Setup

## generateMetadata (App Router)

```tsx
// Static metadata
export const metadata: Metadata = {
  title: 'Aether Labs — Implementación de IA para empresas',
  description: 'Ayudamos a empresas con buen producto a conseguir clientes con IA. Implementación, contenido y presencia digital.',
  metadataBase: new URL('https://aetherlabs.es'),
}

// Dynamic metadata for content pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} — Aether Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aetherlabs.es/blog/${params.slug}`,
      images: [{ url: post.ogImage || '/og-image-black.png', width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || '/og-image-black.png'],
    },
    alternates: {
      canonical: `https://aetherlabs.es/blog/${params.slug}`,
    },
  }
}
```

## Full Metadata Template

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://aetherlabs.es'),
  title: {
    default: 'Aether Labs — El puente entre personas y tecnología',
    template: '%s | Aether Labs'
  },
  description: '...',
  keywords: ['agencia IA España', 'implementar IA empresa', 'Barcelona'],
  authors: [{ name: 'Aether Labs', url: 'https://aetherlabs.es' }],
  creator: 'Aether Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://aetherlabs.es',
    siteName: 'Aether Labs',
    title: '...',
    description: '...',
    images: [{ url: '/og-image-black.png', width: 1200, height: 630, alt: 'Aether Labs' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aetherlabs',
    creator: '@aetherlabs',
  },
  alternates: {
    canonical: 'https://aetherlabs.es',
    languages: { 'es-ES': 'https://aetherlabs.es' }
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
  }
}
```

## Structured Data (JSON-LD)

```tsx
// components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization schema
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aether Labs',
  url: 'https://aetherlabs.es',
  logo: 'https://aetherlabs.es/logo.png',
  description: 'Implementación de IA para empresas en Barcelona',
  address: { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressCountry: 'ES' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'info@aetherlabs.es' }
}

// FAQ schema (boosts rich snippets)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
}

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Implementación IA para Empresas',
  provider: { '@type': 'Organization', name: 'Aether Labs' },
  description: '...',
  areaServed: { '@type': 'Country', name: 'Spain' }
}
```

## Sitemap (app/sitemap.ts)

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aetherlabs.es'

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/nosotros`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contacto`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/casos`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily', priority: 0.9 },
  ]

  return staticPages.map(page => ({
    ...page,
    lastModified: new Date(),
  }))
}
```

## robots.txt (app/robots.ts)

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/secret-lab/'] }
    ],
    sitemap: 'https://aetherlabs.es/sitemap.xml',
  }
}
```

## SEO Checklist
- [ ] Unique title + description on every page
- [ ] OG image 1200x630 for every page
- [ ] Canonical URL set
- [ ] Sitemap generated and submitted to GSC
- [ ] JSON-LD on homepage + blog posts + FAQ
- [ ] Images have descriptive `alt` text
- [ ] Heading hierarchy: one H1 per page
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
- [ ] Internal linking between pages
