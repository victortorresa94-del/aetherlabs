import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Lab — Marketing con IA que escala',
  description: '¿Inviertes en marketing sin saber qué funciona? Construimos sistemas de captación automática, campañas de lanzamiento y lead nurturing con IA. ROI medible desde el día 1.',
  openGraph: {
    title: 'Marketing Lab — Marketing automatizado con IA | Aether Labs',
    description: 'Sistemas de captación, campañas de lanzamiento y lead nurturing con IA. El marketing que escala sin consumirte.',
    url: 'https://aetherlabs.es/marketing-lab',
  },
  alternates: { canonical: 'https://aetherlabs.es/marketing-lab' },
};

export default function MarketingLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
