import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Equipos de Marketing | Aether Labs",
    description: "Multiplica tu producción de contenido, personaliza campañas a escala y automatiza tareas repetitivas con Inteligencia Artificial.",
};


const marketingData: ServicePageProps = {
    hero: {
        title: "IA para Equipos de Marketing",
        subtitle: "Multiplica tu producción de contenido, personaliza campañas a escala y automatiza lo aburrido para centrarte en la estrategia.",
        image: "/images/services/marketing/hero.png",
        ctaPrimary: "Ver Demo",
        ctaSecondary: "Explorar Casos",
    },
    problems: {
        title: "El Cuello de Botella Creativo",
        items: [
            {
                icon: "Calendar",
                title: "Siempre Falta Contenido",
                description: "Necesitas alimentar Instagram, TikTok, LinkedIn y el Blog, pero tu equipo no da abasto.",
            },
            {
                icon: "Zap",
                title: "Costes de Producción Altos",
                description: "Rodajes, sesiones de fotos y agencias externas consumen gran parte de tu presupuesto.",
            },
            {
                icon: "BarChart",
                title: "Datos Dispersos",
                description: "No sabes qué creatividad funciona mejor porque los datos están en 5 plataformas distintas.",
            },
        ],
    },
    solutions: {
        title: "Tu Agencia Creativa In-House con IA",
        items: [
            {
                icon: "ImageIcon",
                title: "Generación de Imágenes",
                description: "Crea fotos de producto, assets para web y contenido social fotorrealista sin cámaras.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Video",
                title: "Video Marketing IA",
                description: "De texto a video publicitario en minutos. Avatares, b-roll y edición automática.",
                link: "/servicios/ia-generativa/anuncios-videos",
            },
            {
                icon: "PenTool",
                title: "Redacción de Contenidos",
                description: "Posts de blog, copys para ads y newsletters generados con tu tono de voz de marca.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/instagram-new--v1.png',
                    alt: 'Instagram Automation'
                },
                title: "Automatización de Redes",
                description: "Planifica, genera y publica contenido automáticamente en todas tus redes.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/wordpress.png',
                    alt: 'WordPress SEO'
                },
                title: "SEO Programático",
                description: "Genera miles de landing pages optimizadas para captar tráfico long-tail.",
                link: "/servicios/web-ia",
            },
            {
                icon: "Users",
                title: "Influencers Virtuales",
                description: "Crea embajadores de marca digitales que nunca duermen y controlas al 100%.",
                link: "/labs/creative",
            },
        ],
    },
    benefits: {
        title: "Creatividad sin Límites, Ejecución Perfecta",
        items: [
            { text: "Reducción del 80% en costes de producción", subtext: "Adiós a los rodajes costosos" },
            { text: "10x más contenido generado", subtext: "Llena tu calendario editorial en minutos" },
            { text: "Personalización masiva", subtext: "Un anuncio único para cada segmento de audiencia" },
            { text: "Time-to-market instantáneo", subtext: "De la idea a la publicación en el mismo día" },
        ],
    },
    useCases: {
        title: "Transformación del Marketing",
        items: [
            {
                title: "Campaña de Lanzamiento Global",
                before: "3 meses de planificación, agencia externa, rodaje en 2 localizaciones, coste 50k€.",
                after: "Generación de assets con IA, traducción automática a 10 idiomas, coste 5k€, listo en 1 semana.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
            {
                title: "Gestión de Redes Sociales",
                before: "Community Manager saturado respondiendo lo mismo y publicando cuando puede.",
                after: "IA analiza tendencias, propone temas, genera los posts (texto + imagen) y responde comentarios 24/7.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Conectado con tu Stack de Marketing",
        logos: [
            { src: "https://img.icons8.com/color/96/hubspot.png", alt: "HubSpot" },
            { src: "https://img.icons8.com/color/96/meta.png", alt: "Meta Ads" },
            { src: "https://img.icons8.com/color/96/google-ads.png", alt: "Google Ads" },
            { src: "https://img.icons8.com/color/96/wordpress.png", alt: "WordPress" },
        ],
    },
    successStory: {
        company: "FashionNova Style",
        challenge: "Necesidad de generar 500+ creatividades semanales para Ads en TikTok e Instagram con presupuesto limitado.",
        solution: "Generación automática de modelos virtuales y vídeos de producto con IA Generativa.",
        results: "-70% Coste CPA",
        quote: "Hemos multiplicado por 10 nuestro volumen de tests creativos sin aumentar el equipo. El ROAS se ha disparado.",
        author: "Elena R., CMO"
    },
    ctaFinal: {
        title: "Domina tu Mercado con IA",
        subtitle: "Deja de competir por atención y empieza a generarla a escala industrial.",
        buttonText: "Auditoría de Marketing IA",
        link: "/contacto",
    },
};

export default function MarketingPage() {
    return <ServicePageLayout {...marketingData} />;
}

