import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Inmobiliarias | Aether Labs",
    description: "Cualifica leads automáticamente, ofrece visitas virtuales 24/7 y cierra más operaciones sin aumentar tu equipo comercial.",
};


const realEstateData: ServicePageProps = {
    hero: {
        title: "IA para Inmobiliarias",
        subtitle: "Cualifica leads automáticamente, ofrece visitas virtuales 24/7 y cierra más operaciones sin aumentar tu equipo comercial.",
        image: "/images/illustrations/automation_gears_neon.png",
        ctaPrimary: "Ver Demo Inmobiliaria",
        ctaSecondary: "Casos de Éxito",
    },
    problems: {
        title: "El Mercado Inmobiliario no Espera",
        items: [
            {
                icon: "Phone",
                title: "Leads de Baja Calidad",
                description: "Tu equipo pierde horas llamando a curiosos de portales que no tienen presupuesto ni intención real.",
            },
            {
                icon: "Key",
                title: "Visitas Improductivas",
                description: "Enseñar pisos a personas que 'solo querían ver cómo era' es la mayor pérdida de tiempo del agente.",
            },
            {
                icon: "FileText",
                title: "Gestión Documental",
                description: "Contratos, arras, notas simples... El papeleo retrasa las firmas y frustra a los clientes.",
            },
        ],
    },
    solutions: {
        title: "Tu Inmobiliaria en Piloto Automático",
        items: [
            {
                icon: "Phone",
                title: "Agente de Cualificación",
                description: "IA que llama o chatea con los leads de Idealista/Fotocasa en < 1 min para filtrar interesados reales.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Camera",
                title: "Home Staging Virtual",
                description: "Amuebla pisos vacíos digitalmente con IA para que luzcan increíbles en las fotos por 1/10 del coste.",
                link: "/labs/creative",
            },
            {
                icon: "Search",
                title: "Matching Inteligente",
                description: "Algoritmo que cruza tu cartera con tu base de datos y avisa al comercial cuando hay coincidencia.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "FileText",
                title: "Redactor de Anuncios",
                description: "Genera descripciones atractivas y SEO-friendly para tus propiedades en segundos.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "MapPin",
                title: "Valuación Predictiva",
                description: "Estima el precio de mercado de una propiedad analizando miles de datos de la zona.",
                link: "/servicios/consultoria",
            },
            {
                icon: "UserCheck",
                title: "Gestión de Alquileres",
                description: "Automatiza el cobro, incidencias y renovación de contratos de tu cartera de alquiler.",
                link: "/servicios/agentes-ia",
            },
        ],
    },
    benefits: {
        title: "Vende Más, Enseña Menos",
        items: [
            { text: "Filtrado del 100% de leads", subtext: "Solo visitas con clientes cualificados" },
            { text: "Respuesta inmediata 24/7", subtext: "No pierdas ni una oportunidad por horario" },
            { text: "Ahorro de 30h/mes por agente", subtext: "En llamadas y trámites administrativos" },
            { text: "Mejor imagen de marca", subtext: "Fotos y descripciones premium en todos tus anuncios" },
        ],
    },
    useCases: {
        title: "Revolución PropTech",
        items: [
            {
                title: "Respuesta a Portales",
                before: "Llega un lead de Idealista el viernes noche. Se le llama el lunes. Ya ha visitado otro piso.",
                after: "Lead entra. IA le escribe por WhatsApp al instante, le hace 5 preguntas clave y agenda visita si cualifica.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Venta sobre Plano",
                before: "Enseñar planos 2D que el cliente no entiende.",
                after: "Generar renders fotorrealistas y tours virtuales con IA para que el cliente 'viva' el piso antes de construirlo.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se conecta con tu CRM Inmobiliario",
        logos: [
            { src: "https://st3.idealista.com/static/common/icons/logo-idealista-white.svg", alt: "Idealista" },
            { src: "https://img.icons8.com/color/96/fotocasa.png", alt: "Fotocasa" },
            { src: "https://img.icons8.com/color/96/salesforce.png", alt: "Salesforce" },
            { src: "https://img.icons8.com/color/96/hubspot.png", alt: "HubSpot" },
        ],
    },
    ctaFinal: {
        title: "Lidera el Mercado Inmobiliario",
        subtitle: "Moderniza tu agencia y ofrece un servicio exclusivo con la ayuda de la Inteligencia Artificial.",
        buttonText: "Auditoría Inmobiliaria",
        link: "/contacto",
    },
};

export default function InmobiliariaPage() {
    return <ServicePageLayout {...realEstateData} />;
}

