import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Atención al Cliente | Aether Labs",
    description: "Ofrece soporte 24/7, reduce tiempos de espera y resuelve consultas automáticamente con Chatbots y Voicebots IA.",
};


const customerServiceData: ServicePageProps = {
    hero: {
        title: "IA para Atención al Cliente",
        subtitle: "Ofrece soporte 24/7, reduce tiempos de espera a cero y resuelve el 80% de las consultas automáticamente.",
        image: "/images/experimental-lab-bg-v2.png",
        ctaPrimary: "Probar Chatbot",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Coste de una Mala Atención",
        items: [
            {
                icon: "Clock",
                title: "Tiempos de Espera Largos",
                description: "Tus clientes se frustran esperando respuestas por email o teléfono, y se van a la competencia.",
            },
            {
                icon: "Headphones",
                title: "Equipo Saturado",
                description: "Tus agentes responden las mismas 10 preguntas repetitivas todo el día, quemándose (burnout).",
            },
            {
                icon: "Globe",
                title: "Horario Limitado",
                description: "Pierdes ventas y clientes porque nadie atiende a partir de las 18:00 o los fines de semana.",
            },
        ],
    },
    solutions: {
        title: "Soporte de Clase Mundial con IA",
        items: [
            {
                icon: "MessageSquare",
                title: "Chatbot Web 24/7",
                description: "Asistente inteligente que resuelve dudas, rastrea pedidos y gestiona devoluciones al instante.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Phone",
                title: "Voicebot Telefónico",
                description: "IA que contesta el teléfono, entiende el problema y lo resuelve o transfiere al departamento correcto.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "RefreshCcw",
                title: "Gestión de Devoluciones",
                description: "Automatiza todo el proceso de cambios y devoluciones sin intervención humana.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Database",
                title: "Base de Conocimiento IA",
                description: "Un buscador interno para tus agentes que encuentra la respuesta correcta en milisegundos.",
                link: "/servicios/ai-hub",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/whatsapp--v1.png',
                    alt: 'WhatsApp Business'
                },
                title: "WhatsApp Business API",
                description: "Atiende a tus clientes en su app favorita con respuestas automáticas y escalado a humanos.",
                link: "/servicios/chatbots",
            },
            {
                icon: "ShieldCheck",
                title: "Análisis de Sentimiento",
                description: "Detecta clientes enfadados en tiempo real y alerta a un supervisor inmediatamente.",
                link: "/servicios/consultoria",
            },
        ],
    },
    benefits: {
        title: "Clientes Felices, Negocio Rentable",
        items: [
            { text: "Resolución automática del 80% de tickets", subtext: "Libera a tu equipo para casos complejos" },
            { text: "Tiempo de respuesta < 5 segundos", subtext: "En cualquier canal, a cualquier hora" },
            { text: "Reducción del 60% en costes de soporte", subtext: "Menos personal necesario para más volumen" },
            { text: "Aumento del CSAT y NPS", subtext: "La rapidez es el factor #1 de satisfacción" },
        ],
    },
    useCases: {
        title: "Revolución en el Soporte",
        items: [
            {
                title: "Gestión de Pedidos eCommerce",
                before: "Cliente escribe email preguntando '¿dónde está mi pedido?'. Agente responde 24h después.",
                after: "Cliente pregunta al bot. Bot conecta con la empresa de transporte y le da la ubicación exacta en 2 segundos.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Centralita Médica Saturada",
                before: "Pacientes llaman para pedir cita y esperan 15 minutos con música de espera.",
                after: "Voicebot contesta al primer tono, verifica identidad y agenda la cita en el calendario del doctor.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu Helpdesk",
        logos: [
            { src: "https://img.icons8.com/color/96/zendesk.png", alt: "Zendesk" },
            { src: "https://img.icons8.com/color/96/intercom.png", alt: "Intercom" },
            { src: "https://img.icons8.com/color/96/whatsapp--v1.png", alt: "WhatsApp" },
            { src: "https://img.icons8.com/color/96/salesforce.png", alt: "Salesforce" },
        ],
    },
    successStory: {
        company: "GlobalRetail Inc.",
        challenge: "Saturación del call center en Black Friday, con tiempos de espera de +20 min y abandono del 30%.",
        solution: "Despliegue de Chatbot híbrido y Voicebot para triaje inicial y resolución de consultas frecuentes.",
        results: "-80% Tickets L1",
        quote: "Nuestros clientes obtienen respuestas inmediatas a cualquier hora. La satisfacción ha subido 20 puntos NPS.",
        author: "Laura G., Head of Customer Experience"
    },
    ctaFinal: {
        title: "Ofrece el Soporte que tus Clientes Merecen",
        subtitle: "Convierte tu atención al cliente en una ventaja competitiva con IA que nunca duerme.",
        buttonText: "Mejorar mi Soporte",
        link: "/contacto",
    },
};

export default function AtencionClientePage() {
    return <ServicePageLayout {...customerServiceData} />;
}

