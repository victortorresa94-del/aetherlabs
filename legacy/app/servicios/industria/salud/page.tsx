import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Clínicas y Sector Salud | Aether Labs",
    description: "Mejora la atención al paciente, automatiza la gestión de citas y reduce la carga administrativa de tu personal médico con IA.",
};


const healthData: ServicePageProps = {
    hero: {
        title: "IA para Clínicas y Sector Salud",
        subtitle: "Mejora la atención al paciente, automatiza la gestión de citas y reduce la carga administrativa de tu personal médico.",
        image: "/images/experimental-lab-bg-final.jpg",
        ctaPrimary: "Automatizar Citas",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Paciente Espera, la Clínica se Satura",
        items: [
            {
                icon: "Phone",
                title: "Teléfono Colapsado",
                description: "Pacientes frustrados que no logran contactar para pedir cita o resultados.",
            },
            {
                icon: "Calendar",
                title: "Absentismo (No-Shows)",
                description: "Huecos vacíos en la agenda por pacientes que olvidan su cita, perdiendo ingresos.",
            },
            {
                icon: "FileText",
                title: "Burocracia Excesiva",
                description: "Médicos dedicando más tiempo a rellenar informes que a mirar a los ojos al paciente.",
            },
        ],
    },
    solutions: {
        title: "Salud Digital y Humana",
        items: [
            {
                icon: "Phone",
                title: "Voicebot de Citas",
                description: "IA que atiende llamadas 24/7, agenda, cambia o cancela citas sincronizándose con tu software.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/whatsapp--v1.png',
                    alt: 'WhatsApp Triage'
                },
                title: "Chatbot Médico",
                description: "Resuelve dudas frecuentes (preparación pruebas, horarios) y triaje básico por WhatsApp.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Calendar",
                title: "Recordatorios Inteligentes",
                description: "Sistema proactivo que confirma asistencia por WhatsApp/SMS y rellena huecos libres.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "FileText",
                title: "Transcripción de Consultas",
                description: "IA que escucha la consulta (con consentimiento) y redacta el informe clínico automáticamente.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Activity",
                title: "Seguimiento de Pacientes",
                description: "Agentes que preguntan periódicamente al paciente cómo se encuentra tras una intervención.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Shield",
                title: "Anonimización de Datos",
                description: "Protege la privacidad del paciente eliminando datos sensibles de documentos automáticamente.",
                link: "/servicios/consultoria",
            },
        ],
    },
    benefits: {
        title: "Más Tiempo para Cuidar",
        items: [
            { text: "Reducción del 40% en llamadas", subtext: "El Voicebot filtra lo administrativo" },
            { text: "Disminución del 60% en no-shows", subtext: "Agenda siempre optimizada" },
            { text: "Ahorro de 2h/día al médico", subtext: "En redacción de informes" },
            { text: "Atención 24/7 real", subtext: "El paciente siempre se siente atendido" },
        ],
    },
    useCases: {
        title: "Eficiencia Clínica",
        items: [
            {
                title: "Gestión de Citas",
                before: "Recepcionista desbordada con 3 teléfonos sonando y cola de pacientes en el mostrador.",
                after: "Voicebot atiende las llamadas, agenda citas y deja a la recepcionista atender a quien tiene delante.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
            {
                title: "Resultados de Pruebas",
                before: "Paciente llama 5 veces para saber si ya están sus análisis.",
                after: "Sistema automático envía notificación segura al paciente en cuanto los resultados están listos.",
                image: "/images/illustrations/data_flow_neon.png",
            },
        ],
    },
    integrations: {
        title: "Compatible con tu Software Médico",
        logos: [
            { src: "https://www.doctoralia.es/img/doctoralia-white.svg", alt: "Doctoralia" },
            { src: "https://www.topdoctors.es/images/logo_topdoctors_white.png", alt: "TopDoctors" },
            { src: "https://clinic-cloud.com/wp-content/uploads/2019/09/logo-clinic-cloud-blanco.png", alt: "Clinic Cloud" },
            { src: "https://img.icons8.com/color/96/salesforce.png", alt: "Salesforce Health Cloud" },
        ],
    },
    successStory: {
        company: "Clínica Dental Pro",
        challenge: "Alta tasa de absentismo (15%) y recepción colapsada los lunes por la mañana.",
        solution: "Voicebot para gestión de citas y sistema de confirmación por WhatsApp.",
        results: "-80% Llamadas Perdidas",
        quote: "Nuestras recepcionistas ahora se dedican a recibir al paciente con una sonrisa, no a estar colgadas del teléfono. La facturación ha subido un 20%.",
        author: "Dr. Carlos M., Director Médico"
    },
    ctaFinal: {
        title: "Cuida de tu Clínica con IA",
        subtitle: "Ofrece una experiencia de paciente premium y optimiza tus recursos médicos.",
        buttonText: "Diagnóstico Digital Gratuito",
        link: "/contacto",
    },
};

// Helper imports


export default function SaludPage() {
    return <ServicePageLayout {...healthData} />;
}

