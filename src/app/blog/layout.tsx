import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn — Guías y recursos sobre IA para empresas | Aether Labs',
  description: 'Guías prácticas, comparativas y casos de uso reales de IA para empresas. Claude, automatización, formación corporativa y mucho más.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
