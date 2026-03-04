import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Recursos Humanos | Aether Labs",
    description: "Atrae al mejor talento, automatiza el filtrado de CVs y mejora la experiencia del empleado con asistentes inteligentes de RRHH.",
};


const hrData: ServicePageProps = {
    hero: {
        title: "IA para Recursos Humanos",
        subtitle: "Atrae al mejor talento, automatiza el filtrado de CVs y mejora la experiencia del empleado con asistentes inteligentes.",
        image: "/images/services/recursos-humanos/hero.png",
        ctaPrimary: "Optimizar RRHH",
        ctaSecondary: "Ver Casos de Uso",
    },
    problems: {
        title: "El Talento se Pierde en la Burocracia",
        items: [
            {
                icon: "FileText",
                title: "Avalancha de CVs",
                description: "Recibes cientos de currículums para una vacante y pasas días filtrando manualmente.",
            },
            {
                icon: "MessageCircle",
                title: "Dudas Repetitivas",
                description: "Tu equipo de RRHH responde las mismas preguntas sobre vacaciones y nóminas una y otra vez.",
            },
            {
                icon: "UserCheck",
                title: "Onboarding Lento",
                description: "Los nuevos empleados tardan semanas en ser productivos por falta de formación accesible.",
            },
        ],
    },
    solutions: {
        title: "Gestión de Talento Potenciada por IA",
        items: [
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/linkedin.png',
                    alt: 'LinkedIn Recruiting'
                },
                title: "Filtrado de CVs con IA",
                description: "Analiza miles de candidatos en segundos y te presenta solo a los que encajan con la cultura y skills.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/slack-new.png',
                    alt: 'Slack Employee Bot'
                },
                title: "Chatbot del Empleado",
                description: "Resuelve dudas sobre políticas, beneficios y nóminas al instante, 24/7.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Phone",
                title: "Entrevistas de Voz IA",
                description: "Un agente de voz realiza la primera entrevista de cribado y te entrega un resumen detallado.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "BookOpen",
                title: "Generador de Formación",
                description: "Crea manuales, tests y cursos de onboarding personalizados para cada rol automáticamente.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/workday.png',
                    alt: 'Workday Shifts'
                },
                title: "Gestión de Turnos",
                description: "Algoritmos que optimizan los horarios y turnos de trabajo según disponibilidad y demanda.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/bamboohr.png',
                    alt: 'BambooHR Analytics'
                },
                title: "Análisis de Clima Laboral",
                description: "Detecta problemas de satisfacción y burnout antes de que el talento se vaya.",
                link: "/servicios/consultoria",
            },
        ],
    },
    benefits: {
        title: "RRHH Estratégico, No Administrativo",
        items: [
            { text: "Reducción del 90% en tiempo de cribado", subtext: "Encuentra al candidato ideal en minutos" },
            { text: "Onboarding 2x más rápido", subtext: "Empleados productivos desde la primera semana" },
            { text: "Soporte al empleado 24/7", subtext: "Sin aumentar la carga de trabajo del equipo" },
            { text: "Eliminación de sesgos", subtext: "Selección basada puramente en datos y méritos" },
        ],
    },
    useCases: {
        title: "Reinventando la Gestión de Personas",
        items: [
            {
                title: "Selección Masiva",
                before: "5 recruiters leyendo CVs durante 2 semanas para cubrir 10 vacantes.",
                after: "IA procesa 2.000 CVs, entrevista a los top 50 y agenda a los 10 finalistas en 48 horas.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Onboarding Interactivo",
                before: "Entregar un PDF de 100 páginas que nadie lee el primer día.",
                after: "Un tutor IA guía al nuevo empleado paso a paso, resolviendo dudas y verificando aprendizaje.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Compatible con tu Software de RRHH",
        logos: [
            { src: "https://img.icons8.com/color/96/linkedin.png", alt: "LinkedIn" },
            { src: "https://img.icons8.com/color/96/workday.png", alt: "Workday" },
            { src: "https://img.icons8.com/color/96/bamboohr.png", alt: "BambooHR" },
            { src: "https://img.icons8.com/color/96/slack-new.png", alt: "Slack" },
        ],
    },
    successStory: {
        company: "TalentHive",
        challenge: "Proceso de contratación lento (45 días de media) y alta rotación en los primeros 3 meses.",
        solution: "Filtrado de CVs con IA y Onboarding gamificado automatizado.",
        results: "-60% Tiempo Contratación",
        quote: "Hemos reducido nuestro time-to-hire drásticamente y los nuevos empleados están más comprometidos desde el día 1.",
        author: "Marta S., HR Director"
    },
    ctaFinal: {
        title: "Construye el Equipo del Futuro",
        subtitle: "Deja que la IA gestione los procesos para que tú puedas liderar a las personas.",
        buttonText: "Modernizar RRHH",
        link: "/contacto",
    },
};

// Helper for the missing Phone icon import


export default function RecursosHumanosPage() {
    return <ServicePageLayout {...hrData} />;
}

