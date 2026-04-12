import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gen AI Lab — Contenido generado con IA',
  description: '¿Produces menos contenido visual del que necesitas porque es caro y lento? Vídeo, imágenes, anuncios y creatividades producidas con IA generativa. En días, no en meses.',
  openGraph: {
    title: 'Gen AI Lab — Contenido con IA generativa | Aether Labs',
    description: 'Vídeo, branding, ads y presentaciones producidos con IA. 72h de entrega media. -65% coste vs agencia tradicional.',
    url: 'https://aetherlabs.es/gen-ai-lab',
  },
  alternates: { canonical: 'https://aetherlabs.es/gen-ai-lab' },
};

export default function GenAILabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
