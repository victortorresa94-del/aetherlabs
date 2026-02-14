'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Zap, BarChart3, Users, MonitorSmartphone, BrainCircuit, Globe, BookOpen } from "lucide-react";

// Images from the user's HTML reference
const IMAGES = {
    ads: "https://lh3.googleusercontent.com/aida-public/AB6AXuADFB46W34CThudnGlRUVOHt9bzrK1qTKow-bC0Z29s0CjimOkxKDXlHBZkuIEE15KGz_JnqE-CTvHfohsgoC3YzVhcpfS7PZautguCJg5qlpNd3PPtXoGyp-wTCXqPPPft0ALnCz-5SYrU7RV26UXADZ4l4rKnYykb8I5Nd1LTmpv-Ev0FOAotyB4M7_7oQInEr8iztvGlsRAxi-Nm0ZxcOEVAWulUdDuNRde-yP7wnL6GVgYlNsZ_X50XlULbMicRCDCDeczDmy26",
    agents: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi-9aMg7wAJat8_wbe2BzXb7Cqalgwno9y9fxTmN-PKN8mf7g-Vmn8xxFpUnnpryHBbggt34ReuE2MGtpNIFT16CTc4ME91QcTXq75rKQBZRIZCN4NWOd-iH_odmHHZfkmaKbfteiLCfeU8nmQLGUont1qjJMHUiimswvuCS5g_6UWX0di70imR8UTlK0eWze3H4D1O3s-7nJcWmp3ScPmSnV7iwNRKYmdierAlf4Fg9f32cYISiHkOo1apZscJ09cJpy68teUGPF1",
    crm: "https://lh3.googleusercontent.com/aida-public/AB6AXuCshkqRkj5bzXIYaxyvCcvCwpmRbWOnRe3Cmx7St229nKOqslJwVsTuVwiXv1lrX3sRk5R9HqwQUUJka8ZpYniTij46ad25AupefCvX3bQIv6DZ99pkdB4dEaZXwJYIkyhpqda0rZt_DThaNNMFBeGheHMPfmpVUNh6nD-6GpKdLEDIUeMOiWNobvNoVq2T_xjZgUnqzFCkGCRqs3hX630CPaWOw2F2Hyo_nfPb91ZReKJc8PMQ51b_3Lfj1wS98DxN2Shy0PJmY9zi",
    training: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUzpaeh3-PkZWpIsGwm0a4xwJBED0mpoQoIS8RXs-582eRX4r-2HVIvoD12G2k3kVclw6ZSFVLLcR8WteCo-d6LqE3-4lUXD9IUn1yDISmJZ5l3LLVWFZtvamoEcoc9Op3No3kaAtFagIcUR6bU5kUXa56_0Ae7nba4ykDnWqng5s415ZeO2PIdtHjgBhTnTCTGiHKycDvQEX0T_7wmcOhwL5FI7YG-fO_To3qjGTIRhXR6D4YNVbBzi1afLusSp5mNdNwPXwArYdb"
};

const services = [
    {
        id: "01",
        step: "CAPTACIÓN",
        title: "Ads con IA",
        description: "Genera oportunidades reales, no tráfico vacío.",
        image: IMAGES.ads,
        icon: MonitorSmartphone,
        items: [
            "Conceptos creativos y anuncios generados con IA",
            "Creatividades y vídeos listos para escalar campañas",
            "Landing pages conectadas a conversación y conversión"
        ],
        idealFor: [
            "Necesitas escalar tu volumen de leads cualificados",
            "Tus campañas actuales traen tráfico pero no ventas",
            "Dependes demasiado de referidos y boca a boca"
        ],
        cta: "Ver Servicios de Ads",
        link: "/servicios"
    },
    {
        id: "02",
        step: "ATENCIÓN & CONVERSACIÓN",
        title: "Agentes IA",
        description: "Atiende y vende sin límites humanos.",
        image: IMAGES.agents,
        icon: Bot,
        items: [
            "+1.000 conversaciones o llamadas simultáneas",
            "Atención 24/7 por WhatsApp, Instagram, Web y Teléfono",
            "Agenda citas, envía info y filtra oportunidades reales"
        ],
        idealFor: [
            "Tienes leads pero tardas horas en responderles",
            "Tu equipo pierde tiempo filtrando curiosos",
            "Quieres atender y vender 24/7 sin más personal"
        ],
        cta: "Ver Agentes IA",
        link: "/agentes"
    },
    {
        id: "03",
        step: "CONVERSIÓN & ORDEN",
        title: "CRM con IA",
        description: "Tu pipeline ordenado y en movimiento automático.",
        image: IMAGES.crm,
        icon: BrainCircuit,
        items: [
            "Organiza leads y oportunidades con IA",
            "Prioriza cierres según probabilidad real",
            "Automatiza seguimientos y estados sin esfuerzo humano"
        ],
        idealFor: [
            "Tienes mucho volumen y pierdes el control de los leads",
            "Haces seguimiento manual o desordenado",
            "Desconoces el estado real de tu pipeline"
        ],
        cta: "Explorar CRM",
        link: "/servicios"
    },
    {
        id: "04",
        step: "ESCALA & CONTROL",
        title: "Formación en IA",
        description: "Tu equipo domina el sistema, no depende de él.",
        image: IMAGES.training,
        icon: BookOpen,
        items: [
            "Formación práctica para ventas y atención",
            "Uso real de agentes, CRM y automatizaciones",
            "Escala sin contratar ni improvisar procesos"
        ],
        idealFor: [
            "Quieres que tu equipo adopte la IA sin miedos",
            "Necesitas optimizar los procesos internos",
            "Buscas multiplicar la productividad de tus vendedores"
        ],
        cta: "Ver Formaciones",
        link: "/servicios"
    }
];

const SolutionSection = () => {
    return (
        <section className="bg-white text-zinc-900 w-full py-12 md:py-24 overflow-hidden relative">
            <div className="w-full overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <header className="text-center mb-16 max-w-4xl mx-auto border-b border-zinc-200 pb-12">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-black font-display">
                            Cubrimos todo el proceso comercial con <span className="font-normal">SALVIA</span><sup className="text-xl md:text-2xl align-super">™</sup>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-500 font-light tracking-wide">
                            Sistema de Automatización de Leads &amp; Ventas con Inteligencia Artificial
                        </p>
                    </header>

                    {/* Grid */}
                    <div className="border border-zinc-200 bg-white shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                            {services.map((service, index) => (
                                <article
                                    key={index}
                                    className="group relative flex flex-col h-full bg-white hover:bg-zinc-50 transition-colors duration-500"
                                >
                                    {/* Step Label */}
                                    <div className="px-6 py-2.5 border-b border-zinc-200">
                                        <span className="text-[10px] font-normal text-zinc-400 tracking-[0.15em] uppercase">{service.step}</span>
                                    </div>

                                    {/* Image Section */}
                                    <div className="h-64 overflow-hidden relative border-b border-zinc-200">
                                        <Image
                                            src={service.image}
                                            alt={service.description}
                                            fill
                                            className="object-cover transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                                            unoptimized
                                        />
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="text-[#39FF14] font-mono text-sm font-bold tracking-widest bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
                                                {service.id}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4 z-10 text-zinc-400 group-hover:text-black transition-colors">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-black">
                                                {service.title}
                                            </h3>
                                            <p className="font-serif italic text-zinc-600 mb-8 text-lg leading-relaxed">
                                                {service.description}
                                            </p>

                                            <ul className="space-y-4 text-sm text-zinc-600 mb-8">
                                                {service.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-[#39FF14] transition-colors"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>


                                        </div>

                                        <div className="mt-10">
                                            <Link
                                                href={service.link}
                                                className="inline-flex items-center text-sm font-bold text-[#39FF14] hover:text-green-600 transition-colors uppercase tracking-widest group-hover:translate-x-1 duration-300"
                                            >
                                                {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
