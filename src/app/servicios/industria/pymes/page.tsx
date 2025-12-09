import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Autónomos y PYMES | Aether Labs",
    description: "La tecnología de las grandes empresas, ahora a tu alcance. Automatiza tareas, ahorra tiempo y compite con los gigantes.",
};


const pymesData: ServicePageProps = {
    hero: {
        title: "IA para Autónomos y PYMES",
        subtitle: "La tecnología de las grandes empresas, ahora a tu alcance. Automatiza tareas, ahorra tiempo y compite con los gigantes.",
        image: "/images/illustrations/automation_gears_neon.png",
        ctaPrimary: "Digitalizar mi Negocio",
        ctaSecondary: "Ver Herramientas",
    },
    problems: {
        title: "Ser Pequeño no Significa Pensar en Pequeño",
        items: [
            {
                icon: "Clock",
                title: "Hombre Orquesta",
                description: "Haces de CEO, comercial, administrativo y soporte técnico. No te da la vida para más.",
            },
            {
                icon: "DollarSign",
                title: "Presupuesto Limitado",
                description: "No puedes permitirte contratar a más personal ni pagar agencias caras.",
            },
            {
                icon: "Search",
                title: "Invisibilidad",
                description: "Tus clientes potenciales no te encuentran porque no tienes tiempo para el marketing.",
            },
        ],
    },
    solutions: {
        title: "Tu Equipo Virtual por una Fracción del Coste",
        items: [
            {
                icon: "Smartphone",
                title: "WhatsApp Business IA",
                description: "Responde a clientes automáticamente y cierra ventas mientras duermes o trabajas.",
                link: "/servicios/chatbots",
            },
            {
                icon: "FileText",
                title: "Facturación Automática",
                description: "Escanea tickets y facturas con el móvil y olvídate de picar datos para el trimestre.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "Search",
                title: "SEO Local Automático",
                description: "Posiciona tu negocio en Google Maps para que te encuentren los vecinos de tu zona.",
                link: "/servicios/web-ia",
            },
            {
                icon: "Rocket",
                title: "Redes Sociales Autopilot",
                description: "Genera y publica contenido en Instagram y Facebook sin perder horas pensando qué poner.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Shield",
                title: "Ciberseguridad Básica",
                description: "Protege los datos de tus clientes y tu negocio de ataques sin ser un experto.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Zap",
                title: "Asistente Personal",
                description: "Una IA que te recuerda citas, gestiona tu agenda y redacta emails por ti.",
                link: "/servicios/agentes-ia",
            },
        ],
    },
    benefits: {
        title: "Crece sin Morir en el Intento",
        items: [
            { text: "Ahorra 15h/semana", subtext: "En tareas que no dan dinero" },
            { text: "Imagen profesional", subtext: "Parece una empresa grande con respuesta inmediata" },
            { text: "Coste predecible", subtext: "Herramientas baratas que se pagan solas" },
            { text: "Tranquilidad mental", subtext: "Sabiendo que nada se olvida ni se pierde" },
        ],
    },
    useCases: {
        title: "Pequeños Gigantes",
        items: [
            {
                title: "El Fontanero Digital",
                before: "Pierde llamadas de clientes mientras está arreglando una tubería. Clientes se van a otro.",
                after: "Voicebot contesta, pide dirección y avería, y le pasa el aviso al móvil. 0 clientes perdidos.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
            {
                title: "La Tienda de Barrio",
                before: "Solo vende a quien pasa por la calle. Ventas estancadas.",
                after: "Tienda online sincronizada con stock físico y campañas de email automáticas a vecinos.",
                image: "/images/illustrations/data_flow_neon.png",
            },
        ],
    },
    integrations: {
        title: "Funciona con lo que ya usas",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png", alt: "WhatsApp" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/2048px-Google_Ads_logo.svg.png", alt: "Google My Business" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png", alt: "Instagram" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png", alt: "Excel / Sheets" },
        ],
    },
    ctaFinal: {
        title: "El Impulso que Necesitas",
        subtitle: "Democratizamos la Inteligencia Artificial para que tú también puedas aprovecharla.",
        buttonText: "Kit Digital IA",
        link: "/contacto",
    },
};

export default function PymesPage() {
    return <ServicePageLayout {...pymesData} />;
}

