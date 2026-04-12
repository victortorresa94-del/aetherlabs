import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web, vídeo y branding con IA | Creative Lab — Aether Labs',
};

export default function CreativeLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
