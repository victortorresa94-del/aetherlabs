import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Servicios Profesionales | Aether Labs",
    description: "Abogados, consultores y asesores: automatizad la burocracia, revisad documentos en segundos y facturad más horas de valor.",
};


const professionalServicesData: ServicePageProps = {
    hero: {
        title: "IA para Servicios Profesionales",
        subtitle: "Abogados, consultores y asesores: automatizad la burocracia, revisad documentos en segundos y facturad más horas de valor.",
        image: "/images/illustrations/ai_brain_neon.png",
        ctaPrimary: "Automatizar Despacho",
        ctaSecondary: "Ver Herramientas",
    },
    problems: {
        title: "El Tiempo es vuestro Activo Más Valioso",
        items: [
            {
                icon: "FileText",
                title: "Montañas de Papel",
                description: "Revisar contratos, sentencias y normativas consume el 70% de vuestro tiempo facturable.",
            },
            {
                icon: "Clock",
                title: "Gestión Ineficiente",
                description: "Coordinar agendas, perseguir facturas y responder emails repetitivos os impide crecer.",
            },
            {
                icon: "Users",
                title: "Captación Difícil",
                description: "Dependéis del boca a boca y os cuesta llegar a nuevos clientes en el entorno digital.",
            },
        ],
    },
    solutions: {
        title: "El Despacho del Futuro",
        items: [
            {
                icon: "Search",
                title: "Análisis Legal IA",
                description: "Sube un contrato y la IA te resume las cláusulas peligrosas y sugiere cambios en segundos.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "FileText",
                title: "Redacción Automática",
                description: "Genera demandas, informes y correos legales basándose en tus plantillas y el caso concreto.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Calendar",
                title: "Agendamiento Inteligente",
                description: "IA que coordina reuniones con clientes y juzgados evitando conflictos de agenda.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Shield",
                title: "Compliance Automático",
                description: "Monitoriza cambios regulatorios y avisa qué clientes se ven afectados.",
                link: "/servicios/consultoria",
            },
            {
                icon: "PenTool",
                title: "Transcripción de Reuniones",
                description: "Graba las reuniones con clientes y obtén un acta estructurada con tareas automáticamente.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Briefcase",
                title: "Gestión del Conocimiento",
                description: "Buscador interno que encuentra 'aquel caso parecido de hace 3 años' al instante.",
                link: "/servicios/ai-hub",
            },
        ],
    },
    benefits: {
        title: "Más Valor, Menos Burocracia",
        items: [
            { text: "Revisión de documentos 20x más rápida", subtext: "Lo que antes llevaba horas, ahora son minutos" },
            { text: "Cero errores humanos", subtext: "La IA no se cansa ni se salta detalles" },
            { text: "Atención al cliente 24/7", subtext: "Resuelve dudas básicas sin interrumpir tu trabajo" },
            { text: "Escalabilidad real", subtext: "Acepta más casos sin contratar más juniors" },
        ],
    },
    useCases: {
        title: "Eficiencia Profesional",
        items: [
            {
                title: "Due Diligence Legal",
                before: "Un equipo de 3 abogados revisando 5.000 documentos durante 2 semanas en una 'data room'.",
                after: "IA procesa todos los documentos en 4 horas, clasificando riesgos y extrayendo datos clave.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Asesoría Fiscal",
                before: "Picar facturas manualmente en trimestre de impuestos. Estrés y horas extra.",
                after: "IA extrae datos de facturas (foto o PDF) y contabiliza automáticamente en el software.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu Software de Gestión",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lexnet_Logo.png/800px-Lexnet_Logo.png", alt: "Lexnet" },
            { src: "https://www.thomsonreuters.es/content/dam/openweb/images/logos/thomson-reuters-logo-white.svg", alt: "Aranzadi" },
            { src: "https://img.icons8.com/color/96/sage.png", alt: "Sage Despachos" },
            { src: "https://img.icons8.com/color/96/microsoft-office-2019.png", alt: "Office 365" },
        ],
    },
    ctaFinal: {
        title: "Moderniza tu Práctica Profesional",
        subtitle: "Ofrece un servicio más rápido, preciso y rentable con herramientas de IA de vanguardia.",
        buttonText: "Digitalizar mi Despacho",
        link: "/contacto",
    },
};

export default function ServiciosProfesionalesPage() {
    return <ServicePageLayout {...professionalServicesData} />;
}

