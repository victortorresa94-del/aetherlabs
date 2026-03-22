import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Lemlist en tu empresa | Aether Labs',
  description:
    'Outreach de email frío personalizado a escala. Secuencias multicanal con imágenes personalizadas, variables dinámicas y seguimiento automático. Lo configuramos para que tus emails no parezcan spam.',
};

export default function LemlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
