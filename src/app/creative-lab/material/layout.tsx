import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contenido y social media con IA | Creative Lab — Aether Labs',
  description:
    'Estrategia de contenido, social media, blog SEO y newsletters producidos con IA. Publicaciones consistentes, calendario editorial y resultados medibles. Desde 600 euros al mes.',
};

export default function MaterialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
