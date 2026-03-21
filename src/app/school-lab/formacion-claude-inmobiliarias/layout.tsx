import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en Claude para Agencias Inmobiliarias — Aether Labs',
  description: 'Crea descripciones de inmuebles, gestiona clientes y automatiza el marketing de tu agencia inmobiliaria con Claude. Formación práctica para inmobiliarias.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
