import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Dirección y Management | Aether Labs",
    description: "Toma decisiones estratégicas basadas en datos reales, automatiza el reporting y libera tu agenda con asistentes ejecutivos IA.",
};


const managementData: ServicePageProps = {
    hero: {
        title: "IA para Dirección y Management",
        subtitle: "Toma decisiones estratégicas basadas en datos reales, automatiza el reporting y libera tu agenda de tareas operativas.",
        image: "/images/illustrations/ai_brain_neon.png",
        ctaPrimary: "Optimizar Gestión",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "La Soledad del Directivo",
        items: [
            {
                icon: "Activity",
                title: "Sobrecarga de Información",
                description: "Recibes cientos de emails y reportes diarios, imposible distinguir lo urgente de lo importante.",
            },
            {
                icon: "Eye",
                title: "Puntos Ciegos",
                description: "Tomas decisiones basándote en la intuición porque los datos tardan semanas en llegar a tu mesa.",
            },
            {
                icon: "TrendingUp",
                title: "Foco en lo Operativo",
                description: "Pasas el día apagando fuegos en lugar de diseñando la estrategia de crecimiento.",
            },
        ],
    },
    solutions: {
        title: "Tu Copiloto Estratégico IA",
        items: [
            {
                icon: "Brain",
                title: "Agente Ejecutivo IA",
                description: "Un asistente personal que gestiona tu agenda, resume emails y prepara tus reuniones.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "LineChart",
                title: "Dashboard en Tiempo Real",
                description: "Visualiza los KPIs críticos de toda la empresa en una sola pantalla, actualizados al segundo.",
                link: "/servicios/ai-hub",
            },
            {
                icon: "Shield",
                title: "Análisis de Riesgos",
                description: "IA que monitoriza el mercado y tu empresa para alertarte de amenazas potenciales.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Globe",
                title: "Inteligencia de Mercado",
                description: "Agentes que rastrean a la competencia y tendencias globales para darte ventaja competitiva.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "PieChart",
                title: "Reportes Automáticos",
                description: "Generación automática de informes de resultados semanales/mensuales sin intervención humana.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Activity",
                title: "Predicción de Ventas",
                description: "Modelos predictivos que te dicen cuánto vas a vender el próximo trimestre con alta precisión.",
                link: "/servicios/consultoria",
            },
        ],
    },
    benefits: {
        title: "Liderazgo Potenciado por Datos",
        items: [
            { text: "Recupera 15h/semana", subtext: "Para dedicar a estrategia y liderazgo" },
            { text: "Visión 360º del negocio", subtext: "Sin esperar a los cierres mensuales" },
            { text: "Decisiones 10x más rápidas", subtext: "Basadas en datos, no en opiniones" },
            { text: "Anticipación al mercado", subtext: "Detecta tendencias antes que nadie" },
        ],
    },
    useCases: {
        title: "El CEO Aumentado",
        items: [
            {
                title: "Reuniones de Consejo",
                before: "Semanas preparando PowerPoints y Excel estáticos que ya están obsoletos al presentarlos.",
                after: "Dashboard interactivo en tiempo real donde puedes hacer drill-down en cualquier dato al instante.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Gestión del Email",
                before: "2 horas diarias limpiando la bandeja de entrada y respondiendo correos triviales.",
                after: "La IA prioriza lo urgente, redacta borradores de respuesta y archiva lo irrelevante. 15 min/día.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Conectado con Todo tu Negocio",
        logos: [
            { src: "/images/logos/salesforce.png", alt: "Salesforce" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png", alt: "SAP" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282020%29.svg/2560px-Microsoft_365_%282020%29.svg.png", alt: "Microsoft 365" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png", alt: "Google Workspace" },
        ],
    },
    ctaFinal: {
        title: "Lidera con Inteligencia",
        subtitle: "Transforma tu forma de dirigir y lleva a tu empresa al siguiente nivel con IA.",
        buttonText: "Consultoría Estratégica",
        link: "/contacto",
    },
};

export default function DireccionPage() {
    return <ServicePageLayout {...managementData} />;
}

