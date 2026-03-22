import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño web y landing pages con IA | Creative Lab — Aether Labs',
  description:
    'Webs corporativas y landing pages que convierten. Diseñadas con IA, entregadas en días. SEO técnico desde el día 1. Sin agencias lentas ni presupuestos inflados.',
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
