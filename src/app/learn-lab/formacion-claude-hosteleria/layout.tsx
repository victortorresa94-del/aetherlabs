import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Hostelería y Restauración — Aether Labs',
  description: 'Gestiona reseñas, optimiza la comunicación con clientes y mejora la operativa de tu negocio hostelero con Claude. Formación práctica para hostelería.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
