import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Restaurantes y Hostelería | Aether Labs",
    description: "Llena tus mesas automáticamente, gestiona reservas sin coger el teléfono y aumenta el ticket medio con menús inteligentes y voicebots.",
};


const restaurantData: ServicePageProps = {
    hero: {
        title: "IA para Restaurantes y Hostelería",
        subtitle: "Llena tus mesas automáticamente, gestiona reservas sin coger el teléfono y aumenta el ticket medio con menús inteligentes.",
        image: "/images/experimental-lab-bg-v2.png",
        ctaPrimary: "Ver Demo RestaurAI",
        ctaSecondary: "Casos de Éxito",
    },
    problems: {
        title: "La Hostelería es Dura, la IA lo hace Fácil",
        items: [
            {
                icon: "Phone",
                title: "Teléfono que no Para",
                description: "Pierdes reservas porque estás atendiendo mesas y no puedes coger el teléfono en hora punta.",
            },
            {
                icon: "CalendarCheck",
                title: "No-Shows",
                description: "Mesas vacías porque los clientes reservan y no aparecen, perdiendo dinero cada día.",
            },
            {
                icon: "MessageCircle",
                title: "Reseñas Negativas",
                description: "No te da tiempo a gestionar las opiniones en Google y TripAdvisor, dañando tu reputación.",
            },
        ],
    },
    solutions: {
        title: "El Restaurante del Futuro, Hoy",
        items: [
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/whatsapp--v1.png',
                    alt: 'WhatsApp Booking'
                },
                title: "RestaurAI Voicebot",
                description: "IA que contesta el teléfono, gestiona reservas y responde dudas sobre la carta 24/7.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "MessageCircle",
                title: "WhatsApp Reservas",
                description: "Permite reservar mesa directamente por WhatsApp sin intervención humana.",
                link: "/servicios/chatbots",
            },
            {
                icon: "Camera",
                title: "Fotografía Gastronómica IA",
                description: "Genera fotos de tus platos tan apetitosas que se comen con los ojos, sin fotógrafo.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Star",
                title: "Gestor de Reseñas",
                description: "IA que responde a todas las reseñas agradeciendo o gestionando quejas automáticamente.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "ChefHat",
                title: "Ingeniería de Menú",
                description: "Analiza qué platos son más rentables y sugiere cambios en la carta para ganar más.",
                link: "/servicios/consultoria",
            },
            {
                icon: "QrCode",
                title: "Carta Digital Inteligente",
                description: "Menú QR que recomienda maridajes y extras según lo que pida el cliente.",
                link: "/servicios/web-ia",
            },
        ],
    },
    benefits: {
        title: "Más Reservas, Menos Estrés",
        items: [
            { text: "0 llamadas perdidas", subtext: "Atiende a 10 clientes a la vez" },
            { text: "Reducción del 50% en no-shows", subtext: "Gracias a recordatorios automáticos por WhatsApp" },
            { text: "Aumento del 15% en ticket medio", subtext: "Con recomendaciones inteligentes" },
            { text: "Ahorro de 20h/semana al encargado", subtext: "En gestión de reservas y proveedores" },
        ],
    },
    useCases: {
        title: "Éxito en Hostelería",
        items: [
            {
                title: "Gestión de Reservas Automática",
                before: "El encargado pasa 2 horas al día al teléfono y apuntando en una libreta de papel.",
                after: "RestaurAI gestiona el 100% de las reservas, las anota en el libro digital y confirma asistencia.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Marketing Gastronómico",
                before: "Fotos oscuras hechas con el móvil que no hacen justicia a la comida.",
                after: "Fotos generadas por IA con iluminación de estudio que llenan el Instagram y atraen foodies.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se conecta con tu Libro de Reservas",
        logos: [
            { src: "https://www.covermanager.com/wp-content/uploads/2022/06/Logo-CoverManager-Blanco.png", alt: "CoverManager" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/OpenTable_Logo.svg/2560px-OpenTable_Logo.svg.png", alt: "OpenTable" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/TheFork_logo_2022.svg/2560px-TheFork_logo_2022.svg.png", alt: "TheFork" },
            { src: "https://www.gloriafood.com/images/logo-white.png", alt: "GloriaFood" },
        ],
    },
    successStory: {
        company: "Bistro 180",
        challenge: "Muchos clientes llamaban durante el servicio de cenas y nadie podía atender el teléfono.",
        solution: "Voicebot IA que atiende llamadas y gestiona reservas en CoverManager.",
        results: "+40 Reservas/Mes",
        quote: "Al principio tenía dudas de si sonaría robótico, pero los clientes ni se dan cuenta. Es como tener una recepcionista extra.",
        author: "Javier S., Propietario"
    },
    ctaFinal: {
        title: "Llena tu Restaurante en Piloto Automático",
        subtitle: "Céntrate en la comida y el servicio, deja que la IA se encargue de traer a los clientes.",
        buttonText: "Probar RestaurAI",
        link: "/contacto",
    },
};

export default function RestauracionPage() {
    return <ServicePageLayout {...restaurantData} />;
}

