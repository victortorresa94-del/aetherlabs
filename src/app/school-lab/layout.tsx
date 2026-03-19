import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formación en IA para empresas y personas | School Lab — Aether Labs',
};

export default function SchoolLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
