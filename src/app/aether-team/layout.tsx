import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aether Team — Tu equipo de IA dedicado',
  description:
    'No contratas herramientas. Contratas un equipo dedicado que implementa, evoluciona y mejora continuamente tu operativa con IA.',
  keywords: [
    'equipo ia empresa',
    'implementar ia empresa',
    'consultoría ia empresas',
    'agencia ia barcelona',
    'automatización empresas',
  ],
  alternates: { canonical: 'https://aetherlabs.es/aether-team' },
  openGraph: {
    title: 'Aether Team — Tu equipo de IA dedicado | Aether Labs',
    description:
      'No contratas herramientas. Contratas un equipo dedicado que implementa, evoluciona y mejora continuamente tu operativa con IA.',
    url: 'https://aetherlabs.es/aether-team',
    siteName: 'Aether Labs',
    locale: 'es_ES',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aether Team',
  provider: { '@type': 'Organization', name: 'Aether Labs', url: 'https://aetherlabs.es' },
  description:
    'Equipo dedicado de IA para empresas. Implementación, evolución y mejora continua de la operativa con inteligencia artificial.',
  areaServed: { '@type': 'Country', name: 'España' },
  serviceType: 'Equipo de Inteligencia Artificial Dedicado',
  url: 'https://aetherlabs.es/aether-team',
};

export default function AetherTeamLayout({ children }: { children: React.ReactNode }) {
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
