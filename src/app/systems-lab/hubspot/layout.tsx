import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos HubSpot en tu empresa | Aether Labs',
  description:
    'CRM, marketing automation y pipeline de ventas en una sola plataforma. La mayoría de empresas usa solo el 20% de HubSpot. Nosotros lo configuramos completo, lo conectamos con IA y formamos al equipo.',
};

export default function HubSpotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
