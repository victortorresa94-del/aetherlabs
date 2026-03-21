import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Operaciones — Aether Labs',
  description: 'Optimiza procesos, automatiza documentación y mejora la eficiencia operativa con Claude. Formación práctica para equipos de operaciones y gestión.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
