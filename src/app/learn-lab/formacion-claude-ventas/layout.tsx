import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Ventas — Aether Labs',
  description: 'Forma a tu equipo comercial en Claude. Propuestas más rápidas, emails que convierten y preparación de reuniones con IA. Formación práctica para equipos de ventas.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
