import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Empresas | School Lab — Aether Labs',
  description: 'Forma a tu equipo en Claude, la IA más potente del mercado. Casos de uso reales por departamento. Presencial y remoto. Barcelona y toda España.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
