import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos Odoo en tu empresa | Aether Labs',
  description:
    'ERP modular para pymes. Ventas, inventario, contabilidad, RRHH y más. Integrado con Claude para automatizar procesos y obtener información de tu negocio en segundos.',
};

export default function OdooLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
