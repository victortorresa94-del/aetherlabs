import React from 'react';
import type { Metadata } from 'next';
import ServicePageLayout, { ServicePageProps } from '@/components/templates/ServicePageLayout';

export const metadata: Metadata = {
    title: "IA para Operaciones y Procesos | Aether Labs",
    description: "Elimina ineficiencias, automatiza flujos de trabajo complejos y toma decisiones basadas en datos en tiempo real con IA.",
};


const operationsData: ServicePageProps = {
    hero: {
        title: "IA para Operaciones y Procesos",
        subtitle: "Elimina ineficiencias, automatiza flujos de trabajo complejos y toma decisiones basadas en datos en tiempo real.",
        image: "/images/experimental-lab-bg-v3.png",
        ctaPrimary: "Automatizar Procesos",
        ctaSecondary: "Ver Soluciones",
    },
    problems: {
        title: "El Caos Operativo Frena tu Crecimiento",
        items: [
            {
                icon: "ClipboardCheck",
                title: "Tareas Manuales y Errores",
                description: "Copiar y pegar datos entre Excel y el ERP genera errores humanos costosos y retrasos.",
            },
            {
                icon: "Layers",
                title: "Procesos Desconectados",
                description: "Ventas no habla con Logística, y Finanzas no ve lo que hace Producción.",
            },
            {
                icon: "AlertTriangle",
                title: "Falta de Visibilidad",
                description: "No detectas los cuellos de botella hasta que ya han causado un problema grave.",
            },
        ],
    },
    solutions: {
        title: "Excelencia Operativa con IA",
        items: [
            {
                icon: "Settings",
                title: "Automatización de Workflows",
                description: "Conecta tus apps (ERP, CRM, Email) para que los datos fluyan solos sin intervención humana.",
                link: "/servicios/automatizacion",
            },
            {
                icon: "Database",
                title: "Procesamiento de Documentos",
                description: "IA que lee facturas, albaranes y contratos, y extrae los datos directamente a tu base de datos.",
                link: "/servicios/agentes-ia",
            },
            {
                icon: "Truck",
                title: "Optimización Logística",
                description: "Algoritmos que calculan las mejores rutas y predicen la demanda de stock.",
                link: "/servicios/consultoria",
            },
            {
                icon: "Cpu",
                title: "Mantenimiento Predictivo",
                description: "Sensores e IA que avisan antes de que una máquina se rompa, evitando paradas.",
                link: "/servicios/computer-vision",
            },
            {
                icon: "ClipboardCheck",
                title: "Control de Calidad Visual",
                description: "Cámaras con IA que detectan defectos en productos a alta velocidad en la línea de producción.",
                link: "/servicios/computer-vision",
            },
            {
                icon: {
                    type: 'image',
                    src: 'https://img.icons8.com/color/96/microsoft-power-bi-2021.png',
                    alt: 'PowerBI Dashboard'
                },
                title: "Dashboard Inteligente",
                description: "Un centro de mando que unifica datos de todas las áreas y alerta de anomalías.",
                link: "/servicios/ai-hub",
            },
        ],
    },
    benefits: {
        title: "Máquina Perfectamente Engrasada",
        items: [
            { text: "Reducción del 99% en errores de datos", subtext: "La IA no se cansa ni se distrae" },
            { text: "Ahorro de miles de horas/año", subtext: "En tareas administrativas repetitivas" },
            { text: "Visibilidad total en tiempo real", subtext: "Controla tu negocio desde un solo panel" },
            { text: "Escalabilidad sin fricción", subtext: "Crece sin necesidad de multiplicar la estructura" },
        ],
    },
    useCases: {
        title: "Operaciones sin Fricción",
        items: [
            {
                title: "Gestión de Facturas",
                before: "Un administrativo pica datos de 500 facturas al mes en el ERP. Tarda 40 horas.",
                after: "La IA lee el PDF, valida los datos y crea el asiento en el ERP automáticamente. Tarda 10 minutos.",
                image: "/images/illustrations/data_flow_neon.png",
            },
            {
                title: "Control de Stock",
                before: "Inventarios manuales con errores y roturas de stock frecuentes.",
                after: "Cámaras IA cuentan el stock en tiempo real y lanzan pedidos automáticos a proveedores.",
                image: "/images/illustrations/automation_gears_neon.png",
            },
        ],
    },
    integrations: {
        title: "Integración Total con tu ERP",
        logos: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png", alt: "SAP" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png", alt: "Oracle" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Microsoft_Dynamics_365_logo.svg/2560px-Microsoft_Dynamics_365_logo.svg.png", alt: "Microsoft Dynamics" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sage_Group_logo.svg/2560px-Sage_Group_logo.svg.png", alt: "Sage" },
        ],
    },
    successStory: {
        company: "LogisticsPro 360",
        challenge: "Errores recurrentes en la facturación y descoordinación entre almacén y ventas.",
        solution: "Automatización end-to-end con IA para lectura de albaranes y sincronización ERP en tiempo real.",
        results: "0% Errores Manuales",
        quote: "Hemos eliminado el trabajo administrativo de bajo valor. Ahora nuestro equipo se dedica a optimizar rutas y negociar con proveedores.",
        author: "Javier R., COO"
    },
    ctaFinal: {
        title: "Optimiza cada Proceso de tu Empresa",
        subtitle: "Convierte tus operaciones en una ventaja competitiva con automatización inteligente.",
        buttonText: "Auditoría de Procesos",
        link: "/contacto",
    },
};

export default function OperacionesPage() {
    return <ServicePageLayout {...operationsData} />;
}

