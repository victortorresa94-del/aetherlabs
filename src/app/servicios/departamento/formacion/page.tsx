import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Formación y Desarrollo | Aether Labs",
    description: "Crea planes de formación personalizados, genera contenido educativo en minutos y asegura que tu equipo siempre esté actualizado.",
};


const trainingData: ServicePageProps = {
    hero: {
        title: "IA para Formación y Desarrollo",
        subtitle: "Crea planes de formación personalizados, genera contenido educativo en minutos y asegura que tu equipo siempre esté actualizado.",
        image: "/images/illustrations/ai_brain_neon.png",
        ctaPrimary: "Transformar Formación",
        ctaSecondary: "Ver Herramientas",
    },
    problems: {
        title: "La Formación Tradicional es Lenta y Cara",
        items: [
            {
                icon: "FileText",
                title: "Contenido Obsoleto",
                description: "Crear manuales y cursos lleva tanto tiempo que cuando los terminas ya están desactualizados.",
            },
            {
                icon: "Users",
                title: "Formación Genérica",
                description: "El 'café para todos' no funciona. Cada empleado tiene necesidades y ritmos de aprendizaje únicos.",
            },
            {
                icon: "Brain",
                title: "Baja Retención",
                description: "Los empleados olvidan el 90% de lo aprendido en cursos presenciales tradicionales.",
            },
        ],
    },
    solutions: {
        title: "Aprendizaje Adaptativo con IA",
        items: [
            {
                icon: "BookOpen",
                title: "Generador de Cursos IA",
                description: "Convierte tus manuales PDF en cursos interactivos con quizzes y vídeos en minutos.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Video",
                title: "Avatares Formadores",
                description: "Crea vídeos educativos con presentadores virtuales en cualquier idioma sin cámaras.",
                link: "/servicios/ia-generativa/anuncios-videos",
            },
            {
                icon: "Brain",
                title: "Tutor Personal IA",
                description: "Un mentor virtual disponible 24/7 para resolver dudas y guiar el aprendizaje de cada empleado.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Award",
                title: "Planes Personalizados",
                description: "La IA analiza las skills de cada empleado y diseña una ruta de aprendizaje a medida.",
                link: "/servicios/consultoria",
            },
            {
                icon: "PlayCircle",
                title: "Roleplay con IA",
                description: "Simulaciones de ventas o atención al cliente con avatares para practicar situaciones reales.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "GraduationCap",
                title: "LMS Inteligente",
                description: "Plataforma que recomienda contenido relevante automáticamente según el rol y desempeño.",
                link: "/servicios/web-ia",
            },
        ],
    },
    benefits: {
        title: "Conocimiento que Impulsa el Negocio",
        items: [
            { text: "Creación de contenido 10x más rápida", subtext: "Actualiza tus cursos en tiempo real" },
            { text: "Aumento del 40% en retención", subtext: "Gracias al aprendizaje interactivo y personalizado" },
            { text: "Formación escalable", subtext: "Forma a 100 o 10.000 empleados con el mismo esfuerzo" },
            { text: "Reducción de costes de formación", subtext: "Elimina gastos de viajes y formadores externos" },
        ],
    },
    useCases: {
        title: "La Nueva Universidad Corporativa",
        items: [
            {
                title: "Formación de Producto",
                before: "Lanzamiento de producto: 2 semanas de roadshow para formar a la red de ventas.",
                after: "Vídeo interactivo con avatar IA enviado al móvil de cada vendedor el día del lanzamiento.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Entrenamiento de Soft Skills",
                before: "Roleplay presencial costoso y difícil de organizar para todos.",
                after: "Simulador IA donde el empleado practica conversaciones difíciles con un avatar que reacciona emocionalmente.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu LMS",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Moodle-logo-white-bg.svg/2560px-Moodle-logo-white-bg.svg.png", alt: "Moodle" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Canvas_logo.svg/2560px-Canvas_logo.svg.png", alt: "Canvas" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/LinkedIn_Logo_2019.svg/2560px-LinkedIn_Logo_2019.svg.png", alt: "LinkedIn Learning" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cornerstone_OnDemand_logo.svg/2560px-Cornerstone_OnDemand_logo.svg.png", alt: "Cornerstone" },
        ],
    },
    ctaFinal: {
        title: "Empodera a tu Equipo",
        subtitle: "Haz que el aprendizaje sea continuo, accesible y efectivo con la ayuda de la Inteligencia Artificial.",
        buttonText: "Demo de Formación IA",
        link: "/contacto",
    },
};

export default function FormacionPage() {
    return <ServicePageLayout {...trainingData} />;
}

