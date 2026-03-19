import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos y proyectos reales | Aether Labs',
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
