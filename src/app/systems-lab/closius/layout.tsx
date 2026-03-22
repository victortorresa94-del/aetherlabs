import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Closius en tu empresa | Aether Labs',
  description:
    'IA que escucha tus llamadas de ventas, analiza cómo vende cada comercial y le dice exactamente qué mejorar. El coaching de ventas que ninguna empresa puede permitirse no tener.',
};

export default function ClosiusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
