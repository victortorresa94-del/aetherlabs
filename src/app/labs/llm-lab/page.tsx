'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import {
    ArrowRight,
    Utensils,
    Building,
    ShoppingBag,
    Briefcase,
    Video,
    FileText,
    Users,
    Megaphone,
    TrendingUp,
    MessageCircle
} from 'lucide-react';

export default function LLMLabPage() {
    const brains = [
        {
            title: "RestaurAI",
            desc: "El cerebro completo para restaurantes: genera cartas, gestiona reservas, crea fotos de platos, redacta anuncios y más.",
            icon: Utensils,
            color: "#ff9f43",
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "Real Estate Brain",
            desc: "Analiza fotos de pisos, genera descripciones, valora propiedades y crea vídeos inmobiliarios realistas.",
            icon: Building,
            color: "#0abde3",
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "Ecommerce Brain",
            desc: "Tu asistente total para tiendas online: fichas de producto, análisis de catálogo, fotos, vídeos y optimización de ventas.",
            icon: ShoppingBag,
            color: "#ee5253",
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "Consulting Brain",
            desc: "Auditoría instantánea de tu empresa: análisis, recomendaciones, funnels, estrategia y copywriting.",
            icon: Briefcase,
            color: "#5f27cd",
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "Content Creator Brain",
            desc: "Generador automático de contenido: guiones, ideas, calendario, copys y fotos tipo influencer.",
            icon: Video,
            color: "#1dd1a1",
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        }
    ];

    const minibrains = [
        {
            title: "AdminBrain",
            desc: "Tu ayudante administrativo para facturas, excels, mails y presupuestos.",
            icon: FileText,
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "TalentBrain",
            desc: "Analiza candidatos, roles, CVs y genera entrevistas técnicas adaptadas.",
            icon: Users,
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "MarketingBrain",
            desc: "Ideas, copys, anuncios, análisis del mercado y calendarios.",
            icon: Megaphone,
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "SalesBrain",
            desc: "Scripts de ventas, objeciones, CRM y seguimiento de clientes.",
            icon: TrendingUp,
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        },
        {
            title: "SupportBrain",
            desc: "Atención al cliente, respuestas automáticas, clasificación de tickets.",
            icon: MessageCircle,
            link: "https://restaur-ai-159705655877.us-west1.run.app"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
            <HeaderNavigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="pt-32 pb-20 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-50" />

                    <div className="container relative z-10 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
                                Labs / LLM Lab
                            </p>
                            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                                LLM Lab <br />
                                <span className="text-[#808080]">Prueba la Inteligencia Artificial a Medida</span>
                            </h1>
                            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto font-light">
                                Descubre cómo funcionan nuestros Brains y MiniBrains.
                                Interactúa con demos reales y visualiza cómo sería tener tu propio LLM privado.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. BRAINS GRID */}
                <section className="py-20 bg-[#050505] border-t border-white/5">
                    <div className="container px-6">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-white/10" />
                            <h2 className="text-2xl font-light text-white uppercase tracking-widest">Brains</h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {brains.map((brain, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                    <div className="relative z-10">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                            style={{ backgroundColor: `${brain.color}20` }}
                                        >
                                            <brain.icon className="w-7 h-7" style={{ color: brain.color }} />
                                        </div>

                                        <h3 className="text-2xl font-light text-white mb-3">{brain.title}</h3>
                                        <p className="text-[#a0a0a0] text-sm leading-relaxed mb-8 min-h-[60px]">
                                            {brain.desc}
                                        </p>

                                        <a
                                            href={brain.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-white font-medium text-sm hover:text-[#82ff1f] transition-colors"
                                        >
                                            Probar {brain.title} <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. MINIBRAINS GRID */}
                <section className="py-20 bg-black border-t border-white/5">
                    <div className="container px-6">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-white/10" />
                            <h2 className="text-2xl font-light text-white uppercase tracking-widest">MiniBrains</h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {minibrains.map((mini, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 transition-all duration-300 hover:border-white/20"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <mini.icon className="w-5 h-5 text-[#a0a0a0] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">{mini.title}</h3>
                                            <p className="text-[#808080] text-xs leading-relaxed mb-4">
                                                {mini.desc}
                                            </p>
                                            <a
                                                href={mini.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-bold text-white uppercase tracking-wider hover:text-[#82ff1f] transition-colors"
                                            >
                                                Probar →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FINAL CTA */}
                <section className="py-32 bg-[#050505]">
                    <div className="container px-6">
                        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-[#2a2a2a] bg-gradient-to-b from-[#111] to-[#0a0a0a] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                                    ¿Quieres tu propio LLM privado?
                                </h2>
                                <p className="text-lg text-[#a0a0a0] mb-10 max-w-2xl mx-auto">
                                    Construimos Brains y MiniBrains adaptados a tu empresa, 100% privados, seguros y con motor Gemini 3 + Imagen.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/contacto"
                                        className="px-8 py-4 bg-white text-black rounded-full font-semibold text-base hover:bg-[#e0e0e0] transition-colors w-full sm:w-auto"
                                    >
                                        Solicitar demo
                                    </Link>
                                    <Link
                                        href="/servicios/ia-a-medida"
                                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/5 transition-colors w-full sm:w-auto"
                                    >
                                        Explorar servicios
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
