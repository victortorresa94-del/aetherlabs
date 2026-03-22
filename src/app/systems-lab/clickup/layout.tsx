import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementamos ClickUp en tu empresa | Systems Lab — Aether Labs',
  description:
    'ClickUp es el sistema operativo de tu empresa. Proyectos, tareas, SOPs, automatizaciones y tu equipo trabajando con un sistema que no depende de que tú estés para funcionar.',
};

export default function ClickUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
