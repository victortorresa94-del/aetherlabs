import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatividades para anuncios con IA | Creative Lab — Aether Labs',
  description:
    'Creatividades para Meta, Google, LinkedIn y TikTok Ads generadas con IA. Anuncios que paran el scroll, producidos 10x mas rapido y a una fraccion del coste de una agencia tradicional.',
};

export default function AnunciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
