import type { Metadata } from 'next';
import { experiments } from '@/data/experiments-page';

export const metadata: Metadata = {
  title: 'Experimentos — Aether Labs',
  description:
    'Proyectos de IA aplicada: automatización, agentes conversacionales, visión artificial y más. 10 experimentos reales de Aether Labs.',
  alternates: { canonical: 'https://aetherlabs.es/experimentos' },
  openGraph: {
    title: 'Experimentos — Aether Labs',
    description:
      'Proyectos de IA aplicada: automatización, agentes conversacionales, visión artificial y más.',
    url: 'https://aetherlabs.es/experimentos',
    siteName: 'Aether Labs',
    locale: 'es_ES',
    type: 'website',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Experimentos de Aether Labs',
  description: 'Proyectos de IA aplicada desarrollados por Aether Labs',
  numberOfItems: experiments.length,
  itemListElement: experiments.map((exp, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: exp.name,
    description: exp.description,
    url: `https://aetherlabs.es/experimentos#${exp.id}`,
  })),
};

export default function ExperimentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  );
}
