'use client'

import React from "react";
import { ArrowRight, Megaphone, Bot, Share2, GraduationCap } from "lucide-react";

const features = [
    {
        id: "01",
        icon: Megaphone,
        title: "ADS CON IA",
        subtitle: "Genera oportunidades reales, no tráfico vacío",
        bullets: [
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
        ctaLink: "#ads"
    },
    {
        id: "02",
        icon: Bot,
        title: "AGENTES IA (CHAT & VOZ)",
        subtitle: "Atiende y vende sin límites humanos",
        bullets: [
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
        ctaLink: "#agentes"
    },
    {
        id: "03",
        icon: Share2, // 'hub' icon equivalent
        title: "CRM CON IA",
        subtitle: "Tu pipeline ordenado y en movimiento automático",
        bullets: [
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
        ctaLink: "#crm"
    },
    {
        id: "04",
        icon: GraduationCap,
        title: "FORMACIÓN EN IA",
        subtitle: "Tu equipo domina el sistema, no depende de él",
        bullets: [
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
        ctaLink: "#formacion"
    }
];

const SolutionSection = () => {
    return (
        <section className="relative w-full bg-black text-white flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-32 relative overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}>
            </div>

            {/* Header */}
            <div className="w-full max-w-[88rem] mx-auto z-10">
                <header className="mb-20 lg:mb-24">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.85] text-white">
                        AETHER SALES<br />
                        AUTOMATION SYSTEM
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-8 md:mt-12 border-t border-zinc-800 pt-8">
                        <div className="max-w-xl">
                            <p className="text-xl md:text-2xl text-zinc-500 font-serif italic">
                                Infraestructura modular de inteligencia artificial diseñada para escalar sin límites humanos.
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <span className="text-xs text-zinc-600 uppercase tracking-widest">Protocolo: Obsidian v.01</span>
                        </div>
                    </div>
                </header>

                {/* Grid Section */}
                <div className="border-t border-b border-zinc-800 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-zinc-800">
                        {features.map((feature) => (
                            <article key={feature.id} className="group relative p-8 lg:p-10 h-full min-h-[500px] flex flex-col justify-between transition-colors duration-500 hover:bg-zinc-900/30">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[#82ff1f] font-mono text-sm">{feature.id}</span>
                                        <feature.icon className="text-zinc-600 w-6 h-6 group-hover:text-[#82ff1f] transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{feature.title}</h2>
                                    <p className="font-serif text-zinc-400 text-lg leading-snug italic mb-8">{feature.subtitle}</p>

                                    <ul className="space-y-4 mb-8">
                                        {feature.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-light leading-relaxed">
                                                <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-[#82ff1f] transition-colors duration-300 flex-shrink-0"></span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ideal For Section */}
                                <div className="mt-auto pt-6 border-t border-zinc-800/50">
                                    <p className="text-[10px] uppercase tracking-widest text-[#82ff1f] font-bold mb-3">Ideal si:</p>
                                    <ul className="space-y-2 mb-6">
                                        {feature.idealFor.map((pain, idx) => (
                                            <li key={idx} className="text-xs text-zinc-500 font-medium leading-relaxed">
                                                - {pain}
                                            </li>
                                        ))}
                                    </ul>

                                    <a href={feature.ctaLink} className="inline-flex items-center text-xs font-bold text-white hover:text-[#82ff1f] transition-colors uppercase tracking-wider group/link">
                                        {feature.cta}
                                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-2 max-w-lg text-center md:text-left">
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.15em]">
                            Arquitectura Escalable
                        </p>
                        <p className="text-white text-lg font-light leading-relaxed">
                            Puedes empezar por una sola solución y escalar el sistema completo.
                        </p>
                    </div>
                    <button className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm transition-all duration-300 bg-transparent border border-[#82ff1f]/40 hover:border-[#82ff1f] hover:shadow-[0_0_20px_rgba(130,255,31,0.15)]">
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        <span className="relative flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#82ff1f] transition-colors">
                            AGENDAR AUDITORÍA PROCESO DE VENTAS
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </button>
                </footer>

            </div>
        </section>
    );
};

export default SolutionSection;
