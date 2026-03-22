import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatización de procesos con n8n y Make | Aether Labs',
  description:
    'Conectamos tus herramientas y automatizamos los procesos que más tiempo te roban. Los flujos que antes requerían personas, ahora suceden solos. Sin código. Sin esperas.',
};

export default function AutomatizacionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
