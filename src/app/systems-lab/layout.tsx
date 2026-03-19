import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Claude, Copilot y ClickUp en tu empresa | Aether Labs',
};

export default function SystemsLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
