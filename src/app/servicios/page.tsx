import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';


export const metadata: Metadata = {
    title: "Servicios de Inteligencia Artificial | Aether Labs",
    description: "Explora nuestras soluciones de IA por tecnología, departamento o industria. Transformamos tu negocio con automatización y creatividad.",
};

const servicesData: ServicePageProps = {
    hero: {
        title: "Soluciones de IA para cada Necesidad",
        subtitle: "Ya sea por tecnología, departamento o industria, tenemos la herramienta perfecta para escalar tu negocio.",
        image: "/images/illustrations/ai_brain_neon.png",
        ctaPrimary: "Explorar Servicios",
        ctaSecondary: "Hablar con un Experto",
    },
    problems: {
        title: "¿Por dónde empezar?",
        items: [
            {
                icon: "Cpu",
                title: "Por Tecnología",
                description: "Buscas una solución específica como Chatbots, Visión Artificial o Automatización.",
            },
            {
                icon: "Layers",
                title: "Por Departamento",
                description: "Necesitas optimizar un área concreta: Ventas, RRHH, Marketing, Operaciones...",
            },
            {
                icon: "Factory",
                title: "Por Industria",
                description: "Quieres ver casos de éxito y herramientas adaptadas a tu sector: Salud, Retail, Inmobiliaria...",
            },
        ],
    },
    solutions: {
        title: "Nuestras Categorías",
        items: [
            {
                icon: "Zap",
                title: "IA Generativa",
                description: "Crea contenido, imágenes y vídeo a escala.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Users",
                title: "Agentes IA",
                description: "Empleados digitales que trabajan 24/7.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Globe",
                title: "Web con IA",
                description: "Sitios web que se adaptan al usuario.",
                link: "/servicios/web-ia",
            },
            {
                icon: "Shield",
                title: "Consultoría",
                description: "Estrategia e implementación a medida.",
                link: "/servicios/consultoria",
            },
            {
                icon: "BookOpen", // Using BookOpen or similar for Education/Training
                title: "Formación IA",
                description: "Capacita a tu equipo o aprende tú mismo.",
                link: "/servicios/formacion",
            },

            {
                icon: "Cpu",
                title: "Computer Vision",
                description: "IA que ve y entiende el mundo físico.",
                link: "/servicios/computer-vision",
            },
        ],
    },
    benefits: {
        title: "Impacto Real en tu Negocio",
        items: [
            { text: "Implementación en semanas, no meses", subtext: "Metodología ágil y probada" },
            { text: "ROI medible desde el primer día", subtext: "Ahorro de costes y aumento de ingresos" },
            { text: "Tecnología de vanguardia", subtext: "Siempre a la última en modelos de IA" },
            { text: "Soporte y acompañamiento", subtext: "No te dejamos solo con la tecnología" },
        ],
    },
    useCases: {
        title: "Transformación Digital",
        items: [
            {
                title: "De Tradicional a Digital",
                before: "Procesos manuales, papel, Excel y decisiones basadas en intuición.",
                after: "Empresa automatizada, datos en tiempo real y decisiones basadas en IA.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Escalado sin Dolor",
                before: "Crecer significaba contratar más personal y aumentar la complejidad.",
                after: "Crecer significa añadir más capacidad de computación a tus agentes IA.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Trabajamos con tu Stack",
        logos: [
            { src: "https://img.icons8.com/color/96/amazon-web-services.png", alt: "AWS" },
            { src: "https://img.icons8.com/color/96/azure-1.png", alt: "Microsoft Azure" },
            { src: "https://img.icons8.com/color/96/google-cloud.png", alt: "Google Cloud" },
            { src: "https://img.icons8.com/color/96/chatgpt.png", alt: "OpenAI" },
        ],
    },
    ctaFinal: {
        title: "Empieza tu Transformación",
        subtitle: "Descubre cómo la IA puede llevar tu empresa al siguiente nivel.",
        buttonText: "Agendar Consultoría",
        link: "/contacto",
    },
};

export default function ServiciosPage() {
    return <ServicePageLayout {...servicesData} />;
}

