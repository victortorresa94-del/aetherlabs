import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Notion en tu empresa | Aether Labs',
  description:
    'Notion es donde vive el conocimiento de tu empresa. Wiki interna, documentación de procesos, base de datos de proyectos y clientes. Lo configuramos para que el equipo lo use de verdad.',
};

export default function NotionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
