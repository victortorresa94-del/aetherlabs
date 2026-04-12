import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agents Lab — Agentes de IA autónomos para tu empresa',
  description: '¿Procesos que dependen de una persona y se rompen cuando no está? Creamos agentes de IA que ejecutan tareas completas de forma autónoma. Prospección, atención, facturación y más.',
  openGraph: {
    title: 'Agents Lab — Agentes de IA autónomos | Aether Labs',
    description: 'Agentes de IA que trabajan 24/7 de forma autónoma. Prospección, atención al cliente, facturación y onboarding automatizados.',
    url: 'https://aetherlabs.es/agents-lab',
  },
  alternates: { canonical: 'https://aetherlabs.es/agents-lab' },
};

export default function AgentsLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
