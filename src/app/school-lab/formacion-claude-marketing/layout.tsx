import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Marketing — Aether Labs',
  description: 'Forma a tu equipo de marketing en Claude. Crea contenido x3 más rápido, automatiza informes y diseña campañas con IA. Taller práctico para equipos reales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
