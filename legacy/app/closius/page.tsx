import type { Metadata } from 'next';
import ClosiusPage from '@/components/closius/ClosiusPage';

export const metadata: Metadata = {
    title: 'Closius en España | AI Sales Coach para Equipos Comerciales | Aether Labs',
    description: 'Distribuidor oficial de Closius en España. Coaching de ventas con IA: análisis de llamadas en tiempo real, feedback automático y entrenamiento personalizado por comercial. Demo gratuita.',
    keywords: ['Closius', 'AI Sales Coach', 'coaching ventas IA', 'análisis llamadas', 'Aether Labs', 'España', 'LATAM'],
    openGraph: {
        title: 'Closius en España | AI Sales Coach | Aether Labs',
        description: 'El AI Sales Coach que analiza, guía y entrena a tu equipo de ventas — antes, durante y después de cada llamada.',
        url: 'https://aetherlabs.es/closius',
        type: 'website',
    },
};

export default function Page() {
    return <ClosiusPage />;
}
