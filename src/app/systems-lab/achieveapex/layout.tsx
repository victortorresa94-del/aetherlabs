import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos AchieveApex en tu empresa | Aether Labs',
  description:
    'CRM conversacional omnicanal. WhatsApp, Instagram, email y más en una sola bandeja con IA. Ningún lead se pierde. Ningún seguimiento se olvida.',
};

export default function AchieveApexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
