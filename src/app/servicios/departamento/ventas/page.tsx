import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Departamentos de Ventas | Aether Labs",
    description: "Automatiza la prospección, cualifica leads 24/7 y cierra más ventas con agentes inteligentes. Descubre cómo la IA transforma tu equipo comercial.",
};


const salesData: ServicePageProps = {
    hero: {
        title: "IA para Departamentos de Ventas",
        subtitle: "Automatiza la prospección, cualifica leads 24/7 y cierra más ventas con agentes inteligentes que trabajan por ti.",
        image: "/images/services/ventas/hero.png",
        ctaPrimary: "Solicitar Demo",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Problema: Tu Equipo de Ventas Pierde Tiempo",
        items: [
            {
                icon: "Phone",
                title: "Llamadas en Frío Ineficientes",
                description: "Tus comerciales pasan horas llamando a números que no contestan o no están interesados.",
            },
            {
                icon: "Mail",
                title: "Seguimiento Inconsistente",
                description: "El 60% de los leads se pierden por falta de follow-up rápido y personalizado.",
            },
            {
                icon: "FileText",
                title: "Tareas Administrativas",
                description: "Actualizar el CRM, redactar correos y generar presupuestos consume el 40% del día.",
            },
        ],
    },
    solutions: {
        title: "Soluciones de IA para Ventas",
        items: [
            {
                icon: "Bot",
                title: "Agentes de Prospección",
                description: "IA que busca, filtra y contacta clientes potenciales automáticamente por LinkedIn y Email.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "MessageSquare",
                title: "Respuesta de Leads 24/7",
                description: "Chatbots que responden al instante, cualifican y agendan reuniones en tu calendario.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Phone",
                title: "Voicebots de Ventas",
                description: "Agentes de voz que llaman a tus leads para confirmar interés o reactivar clientes antiguos.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "FileText",
                title: "Generador de Presupuestos",
                description: "IA que crea propuestas personalizadas en segundos basándose en tus datos.",
                link: "/servicios/automatizacion",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/salesforce.png',
                    alt: 'Salesforce CRM'
                },
                title: "CRM Autopilot",
                description: "Actualización automática de HubSpot/Salesforce tras cada interacción.",
                link: "/servicios/ai-hub",
            },
            {
                icon: "Target",
                title: "Scoring Predictivo",
                description: "Analiza patrones para decirte qué leads tienen más probabilidad de compra.",
                link: "/servicios/consultoria",
            },
        ],
    },
    benefits: {
        title: "Resultados Medibles desde el Día 1",
        items: [
            { text: "Aumento del 30% en tasa de conversión", subtext: "Al responder en < 1 minuto" },
            { text: "Ahorro de 20h/semana por comercial", subtext: "En tareas manuales y CRM" },
            { text: "Cobertura 24/7 real", subtext: "No pierdas leads fuera de horario" },
            { text: "Escalabilidad infinita", subtext: "Atiende 10 o 10.000 leads simultáneamente" },
        ],
    },
    useCases: {
        title: "Casos de Uso Reales",
        items: [
            {
                title: "Cualificación Automática de Leads",
                before: "Un humano lee el formulario, investiga la empresa y decide si llamar. Tarda 2-4 horas.",
                after: "La IA analiza el lead, verifica datos, le escribe por WhatsApp y agenda reunión si es válido. Tarda 30 segundos.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Reactivación de Base de Datos",
                before: "Miles de leads antiguos 'muertos' en el CRM que nadie tiene tiempo de contactar.",
                after: "Un Voicebot llama a 5.000 contactos en una tarde, filtra interesados y los pasa a un humano.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tus herramientas favoritas",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png", alt: "HubSpot" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png", alt: "Salesforce" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pipedrive_logo.svg/2560px-Pipedrive_logo.svg.png", alt: "Pipedrive" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png", alt: "WhatsApp" },
        ],
    },
    successStory: {
        company: "TechFlow Solutions",
        challenge: "El equipo de ventas dedicaba el 40% de su tiempo a cualificar leads manualmente, perdiendo oportunidades clave.",
        solution: "Implementación de agentes de IA para prospección en LinkedIn y cualificación automática vía email.",
        results: "+35% Conversión",
        quote: "La IA de Aether Labs ha transformado nuestro proceso comercial. Ahora nuestros vendedores solo hablan con clientes listos para comprar.",
        author: "Carlos M., Director Comercial"
    },
    ctaFinal: {
        title: "¿Listo para multiplicar tus ventas?",
        subtitle: "Deja que la IA se encargue de la prospección y administración, para que tu equipo se centre en cerrar.",
        buttonText: "Hablar con un Experto",
        link: "/contacto",
    },
};

export default function VentasPage() {
    return <ServicePageLayout {...salesData} />;
}

