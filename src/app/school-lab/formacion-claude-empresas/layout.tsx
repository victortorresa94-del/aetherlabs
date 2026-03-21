import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Empresas — Aether Labs School Lab',
  description: 'Forma a tu equipo en Claude, la IA más potente del mercado. Talleres, programas intensivos y formación continua para equipos de marketing, RRHH, ventas, finanzas y operaciones.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
