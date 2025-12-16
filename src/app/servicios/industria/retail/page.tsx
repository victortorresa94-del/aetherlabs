import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Retail y Tiendas Físicas | Aether Labs",
    description: "Conecta el mundo físico y digital, personaliza la experiencia de compra y optimiza tu stock con inteligencia artificial.",
};


const retailData: ServicePageProps = {
    hero: {
        title: "IA para Retail y Tiendas Físicas",
        subtitle: "Conecta el mundo físico y digital, personaliza la experiencia de compra y optimiza tu stock con inteligencia artificial.",
        image: "/images/experimental-lab-bg-final.jpg",
        ctaPrimary: "Modernizar mi Tienda",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Retail Físico Necesita Reinventarse",
        items: [
            {
                icon: "Users",
                title: "Cliente Desconocido",
                description: "Entran en tu tienda, compran (o no) y se van. No sabes quiénes son ni qué querían realmente.",
            },
            {
                icon: "Box",
                title: "Roturas de Stock",
                description: "Pierdes ventas por no tener el producto en la talla correcta, o acumulas stock que no se vende.",
            },
            {
                icon: "Smartphone",
                title: "Competencia Online",
                description: "Los clientes comparan precios con Amazon desde tu propia tienda. Necesitas darles un valor extra.",
            },
        ],
    },
    solutions: {
        title: "La Tienda Inteligente",
        items: [
            {
                icon: "MapPin",
                title: "Geomarketing IA",
                description: "Envía ofertas personalizadas al móvil del cliente cuando pasa cerca de tu tienda.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Camera",
                title: "Espejos Inteligentes",
                description: "Probadores virtuales que recomiendan prendas complementarias y permiten pedir otra talla sin salir.",
                link: "/servicios/computer-vision",
            },
            {
                icon: "BarChart",
                title: "Analítica de Tienda",
                description: "Cámaras que analizan el tráfico, zonas calientes y demografía de tus visitantes (como Google Analytics pero físico).",
                link: "/servicios/computer-vision",
            },
            {
                icon: "Box",
                title: "Predicción de Demanda",
                description: "IA que te dice exactamente qué pedir a proveedores basándose en tendencias locales y clima.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Tag",
                title: "Precios Dinámicos",
                description: "Etiquetas electrónicas que ajustan precios automáticamente según demanda, caducidad o competencia.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Users",
                title: "Fidelización Omnicanal",
                description: "Reconoce al cliente online cuando entra en la tienda física y ofrece trato VIP.",
                link: "/servicios/ai-hub",
            },
        ],
    },
    benefits: {
        title: "Experiencia de Compra Superior",
        items: [
            { text: "Aumento del 20% en ticket medio", subtext: "Gracias al cross-selling inteligente" },
            { text: "Reducción del 30% en stock sobrante", subtext: "Compras más precisas" },
            { text: "Conocimiento total del cliente", subtext: "Une datos online y offline" },
            { text: "Diferenciación clara", subtext: "Ofrece experiencias que Amazon no puede" },
        ],
    },
    useCases: {
        title: "Retail del Futuro",
        items: [
            {
                title: "Escaparate Interactivo",
                before: "Maniquíes estáticos que se cambian una vez al mes.",
                after: "Pantallas con avatares IA que interactúan con los viandantes y muestran la colección según quién mira.",
                image: "/images/illustrations/ai_brain_neon.png",
            },
            {
                title: "Gestión de Colas",
                before: "Clientes abandonando la compra al ver mucha cola en caja.",
                after: "Sistema que avisa al personal para abrir caja nueva antes de que se forme la cola.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se integra con tu TPV y ERP",
        logos: [
            { src: "https://img.icons8.com/color/96/shopify.png", alt: "Shopify POS" },
            { src: "https://img.icons8.com/color/96/salesforce.png", alt: "Salesforce Commerce" },
            { src: "https://img.icons8.com/color/96/sap.png", alt: "SAP Retail" },
            { src: "https://img.icons8.com/color/96/square.png", alt: "Square" },
        ],
    },
    successStory: {
        company: "Fashion Retail S.L.",
        challenge: "Exceso de stock al final de temporada y baja conversión en probadores.",
        solution: "Probadores inteligentes que recomiendan combinaciones y sistema de predicción de demanda.",
        results: "-30% Stock Sobrante",
        quote: "Nuestras tiendas ahora 'entienden' al cliente. La IA nos dice qué se va a vender antes de que lo pidamos, es casi mágico.",
        author: "Marta R., Directora de Operaciones"
    },
    ctaFinal: {
        title: "Digitaliza tu Punto de Venta",
        subtitle: "Convierte tu tienda en un espacio de experiencias conectado e inteligente.",
        buttonText: "Consultoría Retail",
        link: "/contacto",
    },
};

export default function RetailPage() {
    return <ServicePageLayout {...retailData} />;
}

