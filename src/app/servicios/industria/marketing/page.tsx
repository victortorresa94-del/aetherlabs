import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Agencias de Marketing | Aether Labs",
    description: "Escala tu producción, reduce costes operativos y ofrece servicios innovadores de IA white-label a tus clientes.",
};


const agencyData: ServicePageProps = {
    hero: {
        title: "IA para Agencias de Marketing",
        subtitle: "Escala tu producción, reduce costes operativos y ofrece servicios innovadores de IA a tus clientes.",
        image: "/images/illustrations/data_flow_neon.png",
        ctaPrimary: "Escalar Agencia",
        ctaSecondary: "Ver Servicios White-Label",
    },
    problems: {
        title: "El Modelo de Agencia Tradicional Sufre",
        items: [
            {
                icon: "DollarSign",
                title: "Márgenes Ajustados",
                description: "Los costes de personal y producción se comen tu beneficio. Vender horas ya no es escalable.",
            },
            {
                icon: "Zap",
                title: "Clientes Exigentes",
                description: "Quieren más contenido, más rápido y más barato. Tu equipo está quemado intentando cumplir.",
            },
            {
                icon: "Layers",
                title: "Commoditización",
                description: "Es difícil diferenciarte cuando todas las agencias ofrecen los mismos servicios de siempre.",
            },
        ],
    },
    solutions: {
        title: "Tu Partner Tecnológico Invisible",
        items: [
            {
                icon: "Wand2",
                title: "Fábrica de Contenido IA",
                description: "Genera miles de assets (imágenes, copy, vídeo) para tus clientes en una fracción del tiempo.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Users",
                title: "Influencers Virtuales",
                description: "Crea y gestiona perfiles de influencers generados por IA para tus marcas, sin derechos de imagen.",
                link: "/labs/creative",
            },
            {
                icon: "Copy",
                title: "Generador de Ads Masivo",
                description: "Crea cientos de variaciones de anuncios para test A/B automáticos y mejora el ROAS.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "Rocket",
                title: "Servicios de IA White-Label",
                description: "Vende chatbots y automatizaciones a tus clientes bajo tu propia marca. Nosotros lo construimos.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Palette",
                title: "Branding Automatizado",
                description: "Sistemas de diseño que generan piezas on-brand automáticamente para cualquier formato.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Layers",
                title: "SEO Programático",
                description: "Ofrece a tus clientes estrategias de SEO masivo que captan tráfico long-tail.",
                link: "/servicios/web-ia",
            },
        ],
    },
    benefits: {
        title: "Recupera tu Rentabilidad",
        items: [
            { text: "Márgenes del 60%+", subtext: "Al desacoplar ingresos de horas trabajadas" },
            { text: "Entrega 5x más rápido", subtext: "Sorprende a tus clientes con velocidad absurda" },
            { text: "Nuevas líneas de negocio", subtext: "Vende tecnología e IA, no solo servicios" },
            { text: "Equipo más feliz", subtext: "Elimina el trabajo repetitivo y déjales ser creativos" },
        ],
    },
    useCases: {
        title: "Agencias 2.0",
        items: [
            {
                title: "Campaña UGC Masiva",
                before: "Contratar 50 micro-influencers, gestionar envíos, revisar vídeos... Un caos logístico.",
                after: "Generar 50 vídeos de testimonios con avatares IA hiperrealistas en diferentes idiomas.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
            {
                title: "Gestión de Redes para Pymes",
                before: "Un Community Manager lleva 10 cuentas y apenas llega a publicar 2 veces por semana.",
                after: "Sistema automático genera y programa contenido diario para 50 clientes. El CM solo supervisa.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu Stack",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png", alt: "Meta Business" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/2048px-Google_Ads_logo.svg.png", alt: "Google Ads" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png", alt: "HubSpot" },
            { src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png", alt: "TikTok Ads" },
        ],
    },
    ctaFinal: {
        title: "Evoluciona tu Agencia",
        subtitle: "Deja de vender horas y empieza a vender resultados escalables con IA.",
        buttonText: "Partner Program para Agencias",
        link: "/contacto",
    },
};

export default function MarketingAgenciaPage() {
    return <ServicePageLayout {...agencyData} />;
}

