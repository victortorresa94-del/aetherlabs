import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Construcción y Reformas | Aether Labs",
    description: "Controla tus obras en tiempo real, automatiza presupuestos y evita sobrecostes con inteligencia artificial y visión por computador.",
};


const constructionData: ServicePageProps = {
    hero: {
        title: "IA para Construcción y Reformas",
        subtitle: "Controla tus obras en tiempo real, automatiza presupuestos y evita sobrecostes con inteligencia artificial.",
        image: "/images/illustrations/automation_gears_neon.png",
        ctaPrimary: "Optimizar Obras",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Sector con Menor Digitalización",
        items: [
            {
                icon: "Clock",
                title: "Retrasos Crónicos",
                description: "El 90% de las obras terminan tarde por falta de planificación y control de imprevistos.",
            },
            {
                icon: "Calculator",
                title: "Sobrecostes",
                description: "Presupuestos mal calculados y desperdicio de material que se comen tu margen de beneficio.",
            },
            {
                icon: "AlertTriangle",
                title: "Seguridad Laboral",
                description: "Accidentes que podrían evitarse con una mejor supervisión y cumplimiento de normas.",
            },
        ],
    },
    solutions: {
        title: "Construcción 4.0",
        items: [
            {
                icon: "Calculator",
                title: "Presupuestador IA",
                description: "Sube los planos y la IA calcula mediciones y costes de materiales en minutos con alta precisión.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Camera",
                title: "Supervisión Visual",
                description: "Drones y cámaras analizan el avance de la obra y detectan desviaciones respecto al plano.",
                link: "/servicios/computer-vision",
            },
            {
                icon: "AlertTriangle",
                title: "Seguridad IA",
                description: "Cámaras que alertan si un trabajador no lleva casco o entra en zona peligrosa.",
                link: "/servicios/computer-vision",
            },
            {
                icon: "FileText",
                title: "Gestión Documental",
                description: "Organiza planos, licencias y albaranes automáticamente para que nada se pierda.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Truck",
                title: "Control de Materiales",
                description: "Predice cuándo necesitarás más cemento o ladrillos para evitar paradas de obra.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Ruler",
                title: "Diseño Generativo",
                description: "Genera múltiples opciones de distribución para una reforma optimizando el espacio.",
                link: "/servicios/ia-generativa",
            },
        ],
    },
    benefits: {
        title: "Construye Mejor y Más Barato",
        items: [
            { text: "Reducción del 15% en costes", subtext: "Menos desperdicio y errores" },
            { text: "Presupuestos en horas, no semanas", subtext: "Gana más licitaciones por rapidez" },
            { text: "Control total de la obra", subtext: "Desde tu móvil, sin visitas constantes" },
            { text: "Mayor seguridad", subtext: "Protege a tus trabajadores y evita multas" },
        ],
    },
    useCases: {
        title: "Obras Inteligentes",
        items: [
            {
                title: "Certificación de Avance",
                before: "Aparejador visita la obra, mide manualmente y hace fotos. Tarda 1 día en hacer el informe.",
                after: "Dron escanea la obra en 15 min, IA compara con BIM y certifica el % de avance exacto.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Detección de EPIs",
                before: "El encargado tiene que estar pendiente de que todos lleven casco.",
                after: "Cámara en la entrada avisa por megafonía si alguien entra sin casco o chaleco.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu Software BIM y ERP",
        logos: [
            { src: "https://img.icons8.com/color/96/autocad.png", alt: "AutoCAD" },
            { src: "https://img.icons8.com/color/96/autodesk-revit.png", alt: "Revit" },
            { src: "https://www.rib-software.es/wp-content/uploads/2021/05/Presto-Logo-White.png", alt: "Presto" },
            { src: "https://img.icons8.com/color/96/procore.png", alt: "Procore" },
        ],
    },
    ctaFinal: {
        title: "Cimientos Sólidos para tu Empresa",
        subtitle: "La tecnología que necesitas para construir el futuro sin los problemas del pasado.",
        buttonText: "Digitalizar mi Constructora",
        link: "/contacto",
    },
};

export default function ConstruccionPage() {
    return <ServicePageLayout {...constructionData} />;
}

