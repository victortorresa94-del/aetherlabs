import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Aether Labs — Barcelona',
  description: 'Contacta con Aether Labs. IA, contenido y presencia digital para empresas. Barcelona.',
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
