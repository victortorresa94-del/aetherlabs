import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Producto y eCommerce | Aether Labs",
    description: "Acelera el time-to-market, genera fotos de producto perfectas sin estudio y optimiza tu catálogo con inteligencia artificial.",
};


const productData: ServicePageProps = {
    hero: {
        title: "IA para Equipos de Producto y eCommerce",
        subtitle: "Acelera el time-to-market, genera fotos de producto perfectas sin estudio y optimiza tu catálogo con inteligencia artificial.",
        image: "/images/experimental-lab-bg-v4.png",
        ctaPrimary: "Mejorar Producto",
        ctaSecondary: "Ver Ejemplos",
    },
    problems: {
        title: "El Reto de Escalar el Catálogo",
        items: [
            {
                icon: "Camera",
                title: "Fotografía Costosa",
                description: "Cada nuevo producto requiere una sesión de fotos, retoque y semanas de espera.",
            },
            {
                icon: "PenTool",
                title: "Descripciones Aburridas",
                description: "Escribir textos únicos y persuasivos para miles de SKUs es una tarea titánica y repetitiva.",
            },
            {
                icon: "Search",
                title: "Falta de Innovación",
                description: "Tardas meses en lanzar nuevos productos porque el proceso de diseño y validación es lento.",
            },
        ],
    },
    solutions: {
        title: "Diseña y Vende Más Rápido",
        items: [
            {
                icon: "Camera",
                title: "Fotografía de Producto IA",
                description: "Genera fotos de estudio, lifestyle y 360º de tus productos sin cámaras físicas.",
                link: "/labs/creative",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/google-logo.png',
                    alt: 'Google SEO'
                },
                title: "Redactor de Fichas SEO",
                description: "IA que escribe descripciones de producto optimizadas para Google y persuasivas para el cliente.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "Layers",
                title: "Prototipado Rápido",
                description: "Visualiza nuevos diseños y variaciones de color en segundos antes de fabricar nada.",
                link: "/servicios/ia-generativa",
            },
            {
                icon: "ShoppingCart",
                title: "Recomendador Inteligente",
                description: "Algoritmos que sugieren el producto perfecto a cada usuario, aumentando el ticket medio.",
                link: "/servicios/web-ia",
            },
            {
                icon: "BarChart2",
                title: "Análisis de Competencia",
                description: "Monitoriza precios y catálogo de tus rivales en tiempo real para ajustar tu oferta.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "Zap",
                title: "Virtual Try-On",
                description: "Permite que tus clientes se prueben ropa o accesorios virtualmente usando su cámara.",
                link: "/servicios/computer-vision",
            },
        ],
    },
    benefits: {
        title: "Catálogos que Venden Solos",
        items: [
            { text: "Coste de fotografía cercano a cero", subtext: "Genera miles de imágenes por el precio de una sesión" },
            { text: "Lanzamientos 5x más rápidos", subtext: "De la idea a la tienda en días, no meses" },
            { text: "Aumento del 20% en conversión", subtext: "Gracias a mejores imágenes y descripciones" },
            { text: "Reducción de devoluciones", subtext: "El Virtual Try-On ayuda a elegir mejor la talla" },
        ],
    },
    useCases: {
        title: "Innovación en eCommerce",
        items: [
            {
                title: "Campaña de Moda",
                before: "Contratar modelos, estudio, maquillador y fotógrafo. Coste 10.000€, tiempo 3 semanas.",
                after: "IA genera modelos virtuales vistiendo tus prendas en cualquier escenario. Coste 500€, tiempo 24h.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Internacionalización",
                before: "Traducir manualmente 5.000 fichas de producto a 4 idiomas. Meses de trabajo.",
                after: "IA traduce y adapta culturalmente todo el catálogo en una noche.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Se conecta con tu Tienda",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png", alt: "Shopify" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png", alt: "WooCommerce" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Magento_Logo.svg/2560px-Magento_Logo.svg.png", alt: "Magento" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/PrestaShop_Logo.svg/2560px-PrestaShop_Logo.svg.png", alt: "PrestaShop" },
        ],
    },
    successStory: {
        company: "UrbanStyle Shoes",
        challenge: "Coste insostenible de fotografía para cada nueva colección semanal y descripciones genéricas.",
        solution: "Generación de modelos IA para todo el catálogo y redacción automática de fichas SEO.",
        results: "+40% Tiempo en Página",
        quote: "Nuestras fichas de producto ahora enamoran a Google y a los clientes. Las ventas orgánicas han subido como la espuma.",
        author: "Sofía L., Brand Manager"
    },
    ctaFinal: {
        title: "Revoluciona tu Catálogo",
        subtitle: "Crea productos irresistibles y véndelos mejor con la potencia de la IA generativa.",
        buttonText: "Demo para eCommerce",
        link: "/contacto",
    },
};

export default function ProductoPage() {
    return <ServicePageLayout {...productData} />;
}

