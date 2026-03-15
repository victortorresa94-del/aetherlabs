import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Academias y Centros de Formación | Aether Labs",
    description: "Capta más alumnos, personaliza su aprendizaje y automatiza la gestión administrativa de tu centro educativo con IA.",
};


const educationData: ServicePageProps = {
    hero: {
        title: "IA para Academias y Centros de Formación",
        subtitle: "Capta más alumnos, personaliza su aprendizaje y automatiza la gestión administrativa de tu centro educativo.",
        image: "/images/illustrations/ai_brain_neon.png",
        ctaPrimary: "Captar Alumnos",
        ctaSecondary: "Ver Herramientas",
    },
    problems: {
        title: "El Reto de la Educación Moderna",
        items: [
            {
                icon: "Users",
                title: "Captación Costosa",
                description: "Cada vez cuesta más llenar las aulas (físicas o virtuales) y los leads son de baja calidad.",
            },
            {
                icon: "BookOpen",
                title: "Abandono Escolar",
                description: "Los alumnos se desmotivan si no reciben atención personalizada, pero no tienes profesores infinitos.",
            },
            {
                icon: "Calendar",
                title: "Caos Administrativo",
                description: "Matrículas, pagos, horarios y certificados consumen el 50% del tiempo de tu equipo.",
            },
        ],
    },
    solutions: {
        title: "Tu Academia, Potenciada por IA",
        items: [
            {
                icon: "MessageCircle",
                title: "Chatbot de Admisiones",
                description: "Asistente que informa sobre cursos, precios y horarios, y cierra matrículas 24/7.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Brain",
                title: "Tutor Personal IA",
                description: "Un profesor particular para cada alumno disponible a cualquier hora para resolver dudas.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Video",
                title: "Generador de Clases",
                description: "Crea contenido educativo en vídeo con avatares IA en minutos, sin grabar nada.",
                link: "/servicios/ia-generativa/anuncios-videos",
            },
            {
                icon: "Users",
                title: "Seguimiento Predictivo",
                description: "Detecta qué alumnos están en riesgo de abandonar antes de que ocurra para intervenir.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Award",
                title: "Evaluación Automática",
                description: "IA que corrige exámenes y trabajos, dando feedback detallado al instante.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Calendar",
                title: "Gestión de Horarios",
                description: "Optimiza el uso de aulas y profesores automáticamente evitando conflictos.",
                link: "/servicios/agentes-ia",
            },
        ],
    },
    benefits: {
        title: "Más Alumnos, Mejor Educación",
        items: [
            { text: "Aumento del 30% en matrículas", subtext: "Gracias a la atención inmediata a interesados" },
            { text: "Reducción del 20% en abandonos", subtext: "Por el seguimiento personalizado" },
            { text: "Creación de cursos 10x más rápida", subtext: "Lanza nueva oferta formativa en días" },
            { text: "Diferenciación total", subtext: "Ofrece tecnología que tu competencia no tiene" },
        ],
    },
    useCases: {
        title: "Innovación Educativa",
        items: [
            {
                title: "Campaña de Matriculación",
                before: "Responder emails y llamadas manualmente. Se pierden el 40% de los interesados.",
                after: "Chatbot cualifica al interesado, le envía el temario y le ayuda a matricularse en el momento.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Soporte al Estudiante",
                before: "El profesor tarda 2 días en contestar un email con dudas.",
                after: "El Tutor IA responde en 3 segundos, explicando el concepto con ejemplos adaptados al alumno.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se conecta con tu LMS y CRM",
        logos: [
            { src: "https://img.icons8.com/color/96/moodle.png", alt: "Moodle" },
            { src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-canvas-by-instructure-a-web-based-learning-management-system-logo-color-tal-revivo.png", alt: "Canvas" },
            { src: "https://img.icons8.com/color/96/salesforce.png", alt: "Salesforce Education" },
            { src: "https://img.icons8.com/color/96/hubspot.png", alt: "HubSpot" },
        ],
    },
    ctaFinal: {
        title: "Lleva tu Centro al Siglo XXI",
        subtitle: "Ofrece una experiencia educativa superior y escala tu negocio sin límites.",
        buttonText: "Demo para Educación",
        link: "/contacto",
    },
};

export default function FormacionIndustriaPage() {
    return <ServicePageLayout {...educationData} />;
}

