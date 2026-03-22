import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Apollo.io en tu empresa | Aether Labs',
  description:
    '275M+ contactos. Encuentra a tu cliente ideal antes de que él te encuentre a ti. Configuramos Apollo con tu ICP, lo conectamos con Lemlist y HubSpot y automatizamos tu máquina de prospecting.',
};

export default function ApolloLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
