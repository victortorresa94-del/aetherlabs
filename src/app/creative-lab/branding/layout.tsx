import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding e identidad visual con IA | Creative Lab — Aether Labs',
  description:
    'Identidad visual completa para tu marca: logo, paleta, tipografia, brand book y plantillas. Disenado con IA para iterar 10x mas rapido sin sacrificar calidad.',
};

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
