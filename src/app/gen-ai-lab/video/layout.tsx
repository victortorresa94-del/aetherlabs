import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produccion de video con IA | Creative Lab — Aether Labs',
  description:
    'Produccion de video con IA para reels, anuncios y contenido corporativo. Runway, Sora y Kling para crear video profesional mas rapido y a menor coste.',
};

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
