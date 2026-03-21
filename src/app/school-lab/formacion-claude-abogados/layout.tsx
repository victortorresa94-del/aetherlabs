import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Despachos y Equipos Legales — Aether Labs',
  description: 'Redacta contratos, analiza documentación legal y prepara informes jurídicos más rápido con Claude. Formación práctica para abogados y equipos legales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
