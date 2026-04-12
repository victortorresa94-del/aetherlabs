import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Lab — Software a medida con IA',
  description: '¿Necesitas una herramienta a medida sin pagar fortunas a una agencia? Construimos software a medida con IA en 3–6 semanas. ERP, CRM, portales y apps de campo.',
  openGraph: {
    title: 'Software Lab — Software a medida con IA | Aether Labs',
    description: 'Software a medida construido con IA. De idea a producción en semanas, no meses.',
    url: 'https://aetherlabs.es/software-lab',
  },
  alternates: { canonical: 'https://aetherlabs.es/software-lab' },
};

export default function SoftwareLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
