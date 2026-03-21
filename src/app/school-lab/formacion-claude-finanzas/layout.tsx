import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Finanzas y Contabilidad — Aether Labs',
  description: 'Automatiza informes financieros, análisis de datos y reporting con Claude. Formación práctica para equipos de finanzas, contabilidad y controlling.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
