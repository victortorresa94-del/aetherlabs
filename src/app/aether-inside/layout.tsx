import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aether Inside — Implementamos IA en tu empresa',
  description:
    'Vamos a tu empresa. Formamos a tu equipo. Construimos los sistemas. Nos aseguramos de que funcionen. Implementación real de IA para pymes.',
  keywords: [
    'implementar ia empresa',
    'implementación ia pymes',
    'consultoría ia empresas',
    'agencia ia barcelona',
    'automatización empresas',
  ],
  alternates: { canonical: 'https://aetherlabs.es/aether-inside' },
  openGraph: {
    title: 'Aether Inside — Implementamos IA en tu empresa | Aether Labs',
    description:
      'Vamos a tu empresa. Formamos a tu equipo. Construimos los sistemas.',
    url: 'https://aetherlabs.es/aether-inside',
    siteName: 'Aether Labs',
    locale: 'es_ES',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aether Inside',
  provider: { '@type': 'Organization', name: 'Aether Labs', url: 'https://aetherlabs.es' },
  description:
    'Servicio de implementación de IA en empresas. Auditoría, plan, construcción y garantía de funcionamiento.',
  areaServed: { '@type': 'Country', name: 'España' },
  serviceType: 'Implementación de Inteligencia Artificial',
  url: 'https://aetherlabs.es/aether-inside',
};

export default function AetherInsideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
