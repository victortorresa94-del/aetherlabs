import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Lab — Implementación de Claude en tu empresa',
  description: '¿Tu equipo tiene acceso a Claude pero nadie sabe usarlo? Implementamos Claude en tus procesos y formamos a tu equipo para usarlo en su trabajo real. Barcelona.',
  openGraph: {
    title: 'Claude Lab — Implementación de Claude en tu empresa | Aether Labs',
    description: 'Implementamos Claude en tus procesos y formamos a tu equipo. Resultados visibles en semanas.',
    url: 'https://aetherlabs.es/claude-lab',
  },
  alternates: { canonical: 'https://aetherlabs.es/claude-lab' },
};

export default function ClaudeLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
