import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Claude en tu empresa | Systems Lab — Aether Labs',
  description:
    'Claude no es solo un chat. Es un agente que lee tus documentos, se conecta a tus herramientas y completa tareas de varios pasos. Te lo implementamos, configuramos y ponemos a trabajar.',
};

export default function ClaudeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
