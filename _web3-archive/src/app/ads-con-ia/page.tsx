"use client";

import React from "react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    Zap,
    ArrowRight,
    Target,
    MousePointer2,
    Layout,
    MessageSquare,
    Database,
    BarChart3,
    CheckCircle2,
    Search,
    Layers,
    Activity,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceHero } from "@/components/v3/service-hero";

export default function AdsPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="bg-[#050505] text-white font-sans antialiased selection:bg-[#7bff00] selection:text-black min-h-screen overflow-x-hidden">
            <HeaderNavigation />

            {/* 1. HERO */}
            <ServiceHero
                badge="Fase 01 · Captación Estructurada"
                titleLine1="Ads con IA"
                titleLine2="que convierten tráfico en"
                titleAccent="ventas."
                subtitle="No lanzamos campañas. Construimos la primera fase de tu arquitectura de ventas. Cada anuncio conecta directamente con agentes y CRM."
                ctaLabel="Solicitar diagnóstico"
            />

            {/* 2. PROBLEMA SECTION */}
            <section className="py-32 bg-white text-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-12">
                                La mayoría de campañas <span className="text-zinc-400 font-light">no fallan por el anuncio.</span>
                            </h2>
                            <p className="text-3xl font-light text-zinc-400 italic">Fallan por falta de sistema.</p>
                        </div>
                        <div className="space-y-12">
                            {[
                                "Leads que no responden.",
                                "Formularios sin seguimiento.",
                                "Mensajes desconectados.",
                                "Falta de integración con ventas.",
                                "Coste por lead sin conversión real."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-6 items-center group border-b border-zinc-100 pb-8 last:border-0">
                                    <span className="text-zinc-200 font-mono text-xl">0{i + 1}</span>
                                    <p className="text-2xl font-light text-zinc-600 group-hover:text-black transition-colors">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. QUÉ HACEMOS REALMENTE */}
            <section className="py-32 bg-[#0a0a0a] border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 italic tracking-tighter">
                        Convertimos tráfico en <br />
                        <span className="text-[#7bff00]">conversaciones estructuradas.</span>
                    </h2>
                    <div className="space-y-8 text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                        <p>El objetivo no es conseguir clics.</p>
                        <p>Es generar oportunidades reales dentro de tu pipeline.</p>

                        <div className="pt-16 grid grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <h4 className="text-[#7bff00] font-bold text-xs uppercase tracking-widest">Conexión Native</h4>
                                <ul className="space-y-2 text-sm text-zinc-500">
                                    <li>• Landing optimizada</li>
                                    <li>• Agente especializado</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[#7bff00] font-bold text-xs uppercase tracking-widest">Escalabilidad</h4>
                                <ul className="space-y-2 text-sm text-zinc-500">
                                    <li>• CRM estructurado</li>
                                    <li>• Seguimiento automático</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. QUÉ INCLUYE */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Investigación estratégica",
                                icon: <Search className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Análisis de oferta, cliente y ángulos de comunicación."
                            },
                            {
                                title: "Creatividades optimizadas",
                                icon: <Activity className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Mensajes y variaciones adaptadas a cada industria."
                            },
                            {
                                title: "Landing de conversión",
                                icon: <Layout className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Diseñada para activar conversación, no solo capturar datos."
                            },
                            {
                                title: "Integración con Agentes",
                                icon: <Zap className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Cada lead entra directamente en conversación."
                            },
                            {
                                title: "Conexión con CRM",
                                icon: <Layers className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Registro automático en pipeline."
                            },
                            {
                                title: "Optimización continua",
                                icon: <BarChart3 className="w-8 h-8 text-[#7bff00]" />,
                                desc: "Ajuste de mensajes y segmentación según resultados."
                            }
                        ].map((card, i) => (
                            <div key={i} className="p-10 rounded-2xl bg-[#0a0a0a] border border-zinc-900 transition-all hover:bg-zinc-900/50 group">
                                <div className="mb-6">{card.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                                <p className="text-zinc-500 leading-relaxed font-light text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. DIFERENCIA CLAVE */}
            <section className="py-32 bg-white text-black">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-20 text-center italic uppercase tracking-tighter">Comparativa de Captación</h2>
                    <div className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                        <div className="bg-white p-12 space-y-8">
                            <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">Campaña Tradicional</h4>
                            <div className="space-y-6">
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Lead aislado.
                                </p>
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Formulario estático.
                                </p>
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Sin seguimiento automático.
                                </p>
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Sin integración real.
                                </p>
                            </div>
                        </div>
                        <div className="bg-zinc-50 p-12 space-y-8">
                            <h4 className="text-zinc-800 font-mono text-xs uppercase tracking-[0.3em] mb-4">Ads con IA SALVIA</h4>
                            <div className="space-y-6">
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Conectados a agente.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Integrados en CRM.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Seguimiento estructurado.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Pensados para conversión real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CÓMO ENCAJA EN SALVIA */}
            <section className="py-32 bg-[#0a0a0a] border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold italic mb-6 uppercase tracking-tighter">Arquitectura de Entrada</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 hidden lg:block"></div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                            {[
                                { label: "Captación", icon: <MousePointer2 />, active: true },
                                { label: "Conversación", icon: <MessageSquare /> },
                                { label: "Clasificación", icon: <Target /> },
                                { label: "Seguimiento", icon: <RefreshCw /> },
                                { label: "Cierre", icon: <Check /> }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${step.active
                                        ? "bg-[#7bff00] text-black shadow-[0_0_20px_rgba(123,255,0,0.3)] scale-110"
                                        : "bg-zinc-900 text-zinc-500 border border-zinc-800"
                                        }`}>
                                        {React.isValidElement(step.icon) && React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                                    </div>
                                    <h5 className={`font-bold uppercase text-[10px] tracking-widest ${step.active ? "text-[#7bff00]" : "text-zinc-600"}`}>
                                        {step.label}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-24 text-center text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                        <p>Ads es la puerta de entrada.</p>
                        <p className="font-bold text-white italic mt-2">Sin puerta, no hay sistema.</p>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className="py-48 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7bff00]/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none italic">
                        Activa la primera fase <br />
                        de tu <span className="text-[#7bff00]">sistema comercial.</span>
                    </h2>
                    <p className="text-xl text-zinc-500 font-light">
                        Deja de generar leads sueltos. <br />
                        Empieza a generar oportunidades estructuradas.
                    </p>
                    <div className="pt-8">
                        <Link href="/contacto" className="bg-[#7bff00] text-black px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform inline-flex items-center gap-3">
                            Solicitar Diagnóstico Estratégico
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Minimal icon helper for flow
const RefreshCw = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
    </svg>
);

const Check = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
