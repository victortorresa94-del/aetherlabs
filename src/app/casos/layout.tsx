import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos — Resultados reales con IA',
  description: 'Proyectos reales de implementación de IA: +20.000€ en ventas, 40 proyectos gestionados en paralelo, lanzamientos internacionales y programas formativos institucionales.',
  openGraph: {
    title: 'Casos de éxito — Aether Labs',
    description: 'Resultados reales de implementación de IA en empresas. Sin humo, sin presentaciones.',
    url: 'https://aetherlabs.es/casos',
  },
  alternates: { canonical: 'https://aetherlabs.es/casos' },
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
