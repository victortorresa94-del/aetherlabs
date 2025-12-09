import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para eCommerce y Marcas DTC | Aether Labs",
    description: "Personaliza la experiencia de compra, automatiza el soporte y escala tus campañas de marketing sin aumentar el equipo.",
};


const ecommerceData: ServicePageProps = {
    hero: {
        title: "IA para eCommerce y Marcas DTC",
        subtitle: "Personaliza la experiencia de compra, automatiza el soporte y escala tus campañas de marketing sin aumentar el equipo.",
        image: "/images/illustrations/data_flow_neon.png",
        ctaPrimary: "Escalar mi Tienda",
        ctaSecondary: "Ver Herramientas",
    },
    problems: {
        title: "Crecer en eCommerce es Caro",
        items: [
            {
                icon: "Zap",
                title: "Coste de Adquisición (CAC) Alto",
                description: "Los ads son cada vez más caros y menos efectivos si no personalizas al máximo.",
            },
            {
                icon: "MessageSquare",
                title: "Soporte Saturado",
                description: "En Black Friday o Navidad, tu bandeja de entrada explota con preguntas sobre pedidos.",
            },
            {
                icon: "ShoppingCart",
                title: "Carritos Abandonados",
                description: "El 70% de los usuarios se van sin comprar y no tienes un sistema efectivo para recuperarlos.",
            },
        ],
    },
    solutions: {
        title: "Tu eCommerce en Piloto Automático",
        items: [
            {
                icon: "Globe",
                title: "Personalización Web",
                description: "Muestra productos diferentes a cada usuario según su historial y comportamiento en tiempo real.",
                link: "/servicios/web-ia",
            },
            {
                icon: "MessageSquare",
                title: "Chatbot de Ventas",
                description: "No solo responde dudas, sino que recomienda productos y ayuda a completar la compra.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Mail",
                title: "Email Marketing IA",
                description: "Envía correos hiper-personalizados en el momento exacto para recuperar carritos y fidelizar.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "Camera",
                title: "Fotos de Producto IA",
                description: "Genera fotos de tus productos en cualquier escenario o con modelos virtuales sin sesiones.",
                link: "/labs/creative",
            },
            {
                icon: "BarChart",
                title: "Predicción de Ventas",
                description: "Anticípate a la demanda para no quedarte sin stock de los best-sellers.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Truck",
                title: "Logística Inteligente",
                description: "Optimiza rutas de reparto y automatiza la gestión de devoluciones.",
                link: "/servicios/automatizacion",
            },
        ],
    },
    benefits: {
        title: "Vende Más, Trabaja Menos",
        items: [
            { text: "Aumento del 15% en conversión", subtext: "Gracias a la personalización extrema" },
            { text: "Recuperación del 25% de carritos", subtext: "Con emails y mensajes automáticos" },
            { text: "Reducción del 50% en tickets de soporte", subtext: "El bot resuelve dudas de envío" },
            { text: "ROAS mejorado", subtext: "Ads más relevantes generados por IA" },
        ],
    },
    useCases: {
        title: "eCommerce Next-Gen",
        items: [
            {
                title: "Personalización de Portada",
                before: "Todos los usuarios ven los mismos productos destacados, sean hombres, mujeres o niños.",
                after: "La home cambia totalmente según quién entra, mostrando lo que más probabilidad tiene de comprar.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
            {
                title: "Descripción de Productos",
                before: "Copiar y pegar la descripción del proveedor. Malo para SEO y aburrido.",
                after: "IA reescribe 1.000 descripciones en 10 minutos, con tono de marca y optimizadas para Google.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Nativo para tu Plataforma",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png", alt: "Shopify" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png", alt: "WooCommerce" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Klaviyo_Logo.svg/2560px-Klaviyo_Logo.svg.png", alt: "Klaviyo" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png", alt: "Meta Ads" },
        ],
    },
    ctaFinal: {
        title: "Domina tu Nicho",
        subtitle: "La tecnología que usan los gigantes del eCommerce, ahora a tu alcance.",
        buttonText: "Auditoría eCommerce",
        link: "/contacto",
    },
};

export default function EcommercePage() {
    return <ServicePageLayout {...ecommerceData} />;
}

