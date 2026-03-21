import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para RRHH — Aether Labs',
  description: 'Automatiza el cribado de CV, mejora las entrevistas y redacta políticas de empresa con Claude. Formación práctica para equipos de Recursos Humanos.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
