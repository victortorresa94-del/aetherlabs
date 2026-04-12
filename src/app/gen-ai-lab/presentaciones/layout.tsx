import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presentaciones profesionales con IA | Creative Lab — Aether Labs',
  description:
    'Pitch decks, propuestas comerciales y presentaciones corporativas diseñadas con IA. Narrativa que convence, datos que impactan y diseño editorial premium. Desde 500 euros.',
};

export default function PresentacionesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
