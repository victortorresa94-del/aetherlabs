import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Microsoft 365 Copilot en tu empresa | Aether Labs',
  description:
    'Ya pagas por Microsoft 365. Copilot está ahí dentro y nadie lo usa. Lo activamos, lo configuramos y formamos al equipo para que saque partido real desde la primera semana.',
};

export default function CopilotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
