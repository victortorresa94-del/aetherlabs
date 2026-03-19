import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes somos | Aether Labs — Barcelona',
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
