import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Google Workspace con Gemini AI | Aether Labs',
  description:
    'Gmail, Drive, Sheets, Meet y Calendar con IA integrada. Gemini está dentro de todo tu Workspace. Te lo activamos, lo conectamos con Claude y automatizamos los flujos que más tiempo te roban.',
};

export default function GoogleWorkspaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
