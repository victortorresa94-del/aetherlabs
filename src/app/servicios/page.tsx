"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import {
    Share2,
    Brain,
    Zap,
    ArrowRight,
    Cpu,
    Bot,
    Phone,
    MessageSquare,
    Target,
    BarChart3,
    GraduationCap,
    BookOpen
} from "lucide-react";

/* ──────────────────────────────────────────
   DATA (Preserved from original page)
   ────────────────────────────────────────── */
const problems = [
    {
        label: "No generamos suficientes leads",
        title: "Problema de Adquisición",
        desc: "Tu equipo está perdiendo tiempo buscando prospectos en frío en lugar de cerrar tratos. El flujo de entrada es inconsistente y manual.",
        solution: "Ads con IA + Scraping",
        checks: ["Automatización de campañas en Meta/Google.", "Enriquecimiento de base de datos con IA."],
        cta: "Explorar módulo de Ads",
    },
    {
        label: "Leads de baja calidad",
        title: "Problema de Cualificación",
        desc: "Recibes muchas consultas pero la mayoría no son clientes reales. Tu equipo pierde tiempo filtrando curiosos de compradores.",
        solution: "Agentes IA + Scoring",
        checks: ["Filtrado inteligente de leads en tiempo real.", "Puntuación automática según intención de compra."],
        cta: "Explorar módulo de Agentes",
    },
    {
        label: "Equipo de ventas saturado",
        title: "Problema de Capacidad",
        desc: "Tu equipo no da abasto respondiendo mensajes, siguiendo leads y gestionando clientes. Las oportunidades se enfrían sin seguimiento.",
        solution: "CRM Autónomo + Agentes IA",
        checks: ["Seguimiento automático y persistente.", "Derivación inteligente solo de oportunidades reales."],
        cta: "Explorar módulo de CRM",
    },
    {
        label: "Tasa de cierre baja",
        title: "Problema de Conversión",
        desc: "Tus leads llegan pero no cierran. Falta velocidad de respuesta, seguimiento estructurado y un sistema que no dependa de la memoria humana.",
        solution: "Pipeline IA + Formación",
        checks: ["Respuesta instantánea y follow-up automático.", "Formación del equipo en técnicas de cierre con IA."],
        cta: "Explorar módulo de Formación",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ServiciosPage() {
    const [activeProblem, setActiveProblem] = useState(0);

    return (
        <main className="min-h-screen bg-white text-black selection:bg-[#82ff1f] selection:text-black font-sans">
            <HeaderNavigation />

            {/* ═══════════════════════════════════════
               HERO SECTION (From New HTML)
               ═══════════════════════════════════════ */}
            <header className="pt-52 pb-40 px-8 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-5xl">
                        <span className="inline-block py-1 px-3 bg-black text-[#82ff1f] font-mono text-[10px] tracking-[0.3em] uppercase mb-10">
                            Sales Automation Ecosystem
                        </span>
                        <h1 className="font-display font-semibold text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight mb-12 text-black">
                            Automatiza todo tu proceso comercial con <span className="font-normal text-black">SALVIA™</span>
                        </h1>
                        <p className="text-2xl text-zinc-500 font-light max-w-2xl leading-relaxed mb-16">
                            Desplegamos infraestructuras de inteligencia artificial que gestionan desde la captura de demanda hasta el cierre técnico.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-6 bg-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#82ff1f] hover:text-black transition-all">
                                Ver el sistema completo
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══════════════════════════════════════
               SECTION 2: ELIMINA EL CAOS
               ═══════════════════════════════════════ */}
            <section className="pt-10 pb-[250px] bg-white">
                <div className="max-w-[1400px] mx-auto bg-black rounded-[24px] p-12 md:p-24 text-white">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Elimina el caos.<br /><span className="text-[#82ff1f]">Estandariza el éxito.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                                Las empresas pierden hasta el 60% de sus oportunidades por falta de seguimiento o procesos manuales lentos. SALVIA™ integra cada etapa del embudo en un organismo digital coherente.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 rounded-2xl border border-white/10 hover:border-[#82ff1f]/50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-[#82ff1f] flex items-center justify-center flex-shrink-0">
                                        <Share2 className="text-black font-bold w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Control Centralizado</h4>
                                        <p className="text-sm text-zinc-500">Adiós a los silos de información y a los leads perdidos en excels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white/5 p-1 rounded-3xl">
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { num: "01", label: "Adquisición" },
                                        { num: "02", label: "Conversación" },
                                        { num: "03", label: "Conversión" },
                                        { num: "04", label: "Escala" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
                                            <span className="text-[#82ff1f] text-3xl font-bold mb-2">{item.num}</span>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               SECTION: PRESERVED DIAGNOSIS / PROBLEM TABS
               (Integrated here as high-value interaction)
               ═══════════════════════════════════════ */}
            <section className="pt-[250px] pb-24 bg-zinc-950 relative overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                    }}
                />
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left: Problem Tabs */}
                        <div className="lg:col-span-5">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
                                <h2 className="text-3xl font-bold text-white mb-2">Identifica tu cuello de botella</h2>
                                <p className="text-zinc-400 mb-8 text-sm">Selecciona tu desafío actual para ver nuestra solución recomendada.</p>
                            </motion.div>

                            <div className="flex flex-col gap-3">
                                {problems.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveProblem(i)}
                                        className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${activeProblem === i
                                            ? "bg-white/5 border-l-4 border-[#82ff1f]"
                                            : "bg-transparent border border-white/5 border-l-4 border-l-transparent hover:border-l-zinc-500 hover:bg-white/5"
                                            }`}
                                    >
                                        <span className={`font-medium ${activeProblem === i ? "text-white" : "text-zinc-400"}`}>
                                            {p.label}
                                        </span>
                                        <span className={`text-sm ${activeProblem === i ? "text-[#82ff1f]" : "text-zinc-600"}`}>›</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Solution Reveal */}
                        <div className="lg:col-span-7">
                            <div className="h-full bg-black rounded-2xl p-8 lg:p-10 border border-white/10 relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#82ff1f]/20 blur-[80px] rounded-full" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-xs font-bold text-[#82ff1f] uppercase tracking-widest border border-[#82ff1f]/20 px-2 py-1 rounded bg-[#82ff1f]/5">
                                            Diagnóstico
                                        </span>
                                        <span className="h-px w-12 bg-white/10" />
                                        <span className="text-xs text-zinc-500">RECOMENDACIÓN DEL SISTEMA</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{problems[activeProblem].title}</h3>
                                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">{problems[activeProblem].desc}</p>

                                    <div className="bg-zinc-950 rounded-xl p-6 border border-white/5 mb-8">
                                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                                            Solución Aether:{" "}
                                            <span className="text-[#82ff1f]">{problems[activeProblem].solution}</span>
                                        </h4>
                                        <ul className="space-y-2">
                                            {problems[activeProblem].checks.map((c, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <span className="text-[#82ff1f] mt-0.5">✓</span>
                                                    <span className="text-sm text-zinc-300">{c}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/contacto"
                                        className="text-white font-medium border-b border-[#82ff1f] pb-0.5 hover:text-[#82ff1f] transition-colors inline-flex items-center gap-2"
                                    >
                                        {problems[activeProblem].cta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               SECTION 3: ADS & LANDINGS
               ═══════════════════════════════════════ */}
            <section className="py-32 px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden bg-zinc-100 aspect-[4/5]">
                                <img
                                    alt="High Contrast AI Ads"
                                    className="w-full h-full object-cover grayscale contrast-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsScU6sLMaM09i93vrKP2el6cZeJ6KITzctJy2rzoqNbOql6l76e5h2UYyS09z2vNjEmjzAyXwX8GFNOTnzW9NTrWZl14puaFa53G_gf2dNyznZsqonZ6nBhIL_n05JWRmKzXVluuvAQCH4jU30o62liwsjoF-GHaAUVLsGZwhzKftOFPE4VuwSifcNHs5oQJ4R8ZSAbrlxRMPM8QLysc158gQmfFthLu1zKPtD7sdjWIWSBlABZP1dx4EuGQkJSXvaQ8MdeeGeNg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-[#82ff1f] font-mono text-xs tracking-widest uppercase">Phase 01: Demand Gen</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <span className="text-zinc-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">Estrategia de Captación</span>
                            <h2 className="text-6xl font-extrabold mb-10 tracking-tight leading-[0.9]">
                                ADS CON IA & <br />LANDINGS 3.0
                            </h2>
                            <p className="text-xl text-zinc-600 font-light mb-12 leading-relaxed">
                                Utilizamos modelos de visión y lenguaje para generar miles de variaciones de anuncios y páginas de aterrizaje dinámicas que se adaptan en tiempo real al perfil del visitante.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <li className="flex flex-col gap-2">
                                    <Brain className="text-[#82ff1f] w-8 h-8" />
                                    <h4 className="font-bold text-sm uppercase tracking-wider">Creatividad Algorítmica</h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed">Análisis de patrones ganadores en tu industria para crear piezas de alto impacto.</p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <Zap className="text-[#82ff1f] w-8 h-8" />
                                    <h4 className="font-bold text-sm uppercase tracking-wider">Conversion Engine</h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed">Landings optimizadas para carga instantánea y fricción mínima.</p>
                                </li>
                            </ul>
                            <Link href="/ads-con-ia" className="group flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase">
                                Saber más
                                <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#82ff1f] group-hover:text-black transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               SECTION 4: AGENTES IA
               ═══════════════════════════════════════ */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-[1400px] mx-auto bg-black rounded-[24px] p-12 md:p-24 text-white">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#82ff1f] font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">24/7 Autonomy</span>
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Agentes IA Multicanal</h2>
                        <p className="text-xl text-zinc-400 font-light">
                            Tu fuerza de ventas nunca duerme. Agentes que escuchan, hablan y escriben con la misma precisión que tu mejor ejecutivo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {/* WhatsApp AI */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-20 h-20 bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                                <img alt="Agent 1" className="w-full h-full object-cover grayscale contrast-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9xvgWIBPi15mfOxe4wA64WtWsHsc36nI5hWRWMWfc8Lple6Fh5Wxou2sFQkmB84NJOiVjucBn5yEdxNnvlW47RT7sJUnKW_Irq6HSxwxUsvyZeiKbv1uYoRcRmsEzA-x1EcPSvqCjJ9yeOxN1JuMkaVEuOKnq0ZH_6mLu5nIJ2VcIKMk4oGCN2pithww9AzdnXEQc6WGxR0WoKLQHFv0r5Ii1Rv8x9BHlH9ML-OxTT04pld8VXwHvthcX3n3tiAxdz-mnuaxzQ2v" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">WhatsApp AI</h4>
                            <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Gestión masiva de chats. Cualificación en frío y agendamiento directo en tu calendario.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Latencia &lt; 2s</span>
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Multilingüe</span>
                            </div>
                        </div>

                        {/* Voice AI */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-20 h-20 bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                                <img alt="Agent 2" className="w-full h-full object-cover grayscale contrast-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPvY80_-MkRrhgw7KuaT0SZCY-ah0YtNkyr_TNg4Xe-2x2R3CkBumTF9HAODf-_CnqKdiW5I7wiWmIf0Kux5fP10EgRPvFyL0xf7i1BDvOpX6tyfWDqTrCXUrlHGYnBmDJ6p3XjKwz9j1aNR8Y_FhJvQas9aM2Kk2RzHSYC-8v2nLhV2W-Ksc-XvFt0YwsMHx-N5gbrCvagu5ZCrGMHz0XdRqaWApC3boKeL4bo0z-16-LhfKGhUK7X4N5dYnZO3fv5_o0GouOB-Iz" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Voice AI</h4>
                            <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Llamadas salientes de confirmación y reactivación de leads con voz humana hiperrealista.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Tono Natural</span>
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Outbound</span>
                            </div>
                        </div>

                        {/* Web Concierge */}
                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-20 h-20 bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                                <img alt="Agent 3" className="w-full h-full object-cover grayscale contrast-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhnVA2VfSA0Y1GGbxzgCUZ9q6rIJ4udCixFmuTUfsGuGZ_IxthlJhq9XYI5Gh5jmrYIm93ZcbbDYTSsGQfND3tXigd5sVZDohuz5W8uV3N69Duh9evA_1SsngwctV9ODrADIbue3TGzQJUm8SmJfcbrjDBhv29cT6TTFai87nhhzpmHtTZngQolmaldQHm64DbbLT1fRRUWS9GiwBk1IA9WGzUVXA4BFalV40VdVG5c9nOaBi-QLFplQrw9r6NT_Z90uQ3Ns8ImrCg" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Web Concierge</h4>
                            <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Captura a los visitantes de tu web en el momento de máxima intención con asistencia guiada.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Interactivo</span>
                                <span className="text-[9px] px-2 py-1 rounded bg-white/10 font-bold uppercase tracking-widest">Real-Time</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#82ff1f]/10 border border-[#82ff1f]/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#82ff1f] rounded-full flex items-center justify-center flex-shrink-0">
                                <Cpu className="text-black text-3xl" />
                            </div>
                            <div>
                                <h5 className="text-xl font-bold">Capacidad de Escala Infinita</h5>
                                <p className="text-zinc-400 text-sm">Gestiona 10 o 10,000 conversaciones simultáneas sin degradar la calidad.</p>
                            </div>
                        </div>
                        <Link href="/agentes" className="bg-white text-black px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#82ff1f] transition-all">
                            Saber más
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               SECTION 5: CRM
               ═══════════════════════════════════════ */}
            <section className="py-32 px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="max-w-xl">
                            <span className="text-zinc-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">Conversión Inteligente</span>
                            <h2 className="text-6xl font-extrabold mb-10 tracking-tight leading-[0.9]">
                                CRM: El Cerebro <br />del Pipeline
                            </h2>
                            <p className="text-xl text-zinc-600 font-light mb-12 leading-relaxed">
                                Un sistema que no solo registra datos, sino que te dice dónde está el dinero. Priorización predictiva de leads y automatización de seguimientos post-reunión.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-1 bg-[#82ff1f]"></div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Lead Scoring Dinámico</h4>
                                        <p className="text-sm text-zinc-500">La IA analiza el comportamiento y califica al lead para que el equipo humano solo hable con el Top 5%.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-1 bg-black"></div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Seguimiento Invisible</h4>
                                        <p className="text-sm text-zinc-500">Secuencias personalizadas que nutren al cliente durante semanas sin intervención humana.</p>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <Link href="/crm-con-ia" className="group flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase">
                                        Saber más
                                        <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#82ff1f] group-hover:text-black transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-zinc-100 rounded-[32px] p-1 overflow-hidden shadow-2xl">
                                <img alt="CRM Interface" className="w-full rounded-[30px] grayscale contrast-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUgA6MWMAdIy8AJjkWINiLzEM97QTXd-MWXhKUcHM6DSZcIkMUDTFOPUqyGznCGthS21tq3m4AGMkGN9ErmWoDWvFahJLFBtguoo7IQABvy90Ntp2o7Yox3Mc0IOnbkbXFs9Zmsc5RugS70qEAlwTzsjBo1if3-7qYM5eqc3QwYbZXUCd9JMfcmTUbgzTtx46mJYhkXCl8OfOlNNm3Po76iQL2DBuXD1dKKhxyeE8OVLAD4RLGO8FQ96mEp_RE87r289EVpUqIdFQY" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-black p-10 rounded-3xl text-white hidden xl:block shadow-2xl">
                                <div className="text-4xl font-bold text-[#82ff1f] mb-1">94%</div>
                                <div className="text-[10px] font-bold tracking-[0.3em] uppercase">Reducción de fuga</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               SECTION 6: LEGACY
               ═══════════════════════════════════════ */}
            <section className="py-10 px-6 bg-white mb-20">
                <div className="max-w-[1400px] mx-auto bg-black rounded-[24px] overflow-hidden text-white">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 md:p-24 flex flex-col justify-center">
                            <span className="text-[#82ff1f] font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Legacy & Knowledge</span>
                            <h2 className="text-6xl font-bold tracking-tighter mb-10 leading-[0.9]">
                                Transferencia <br />de Autonomía
                            </h2>
                            <p className="text-xl text-zinc-400 font-light mb-12">
                                No instalamos software y nos vamos. Formamos a tu equipo comercial para que domine el Framework SALVIA™ y sea capaz de iterar el sistema de forma independiente.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="text-[#82ff1f] font-bold text-xs uppercase tracking-widest mb-3">Workshops Elite</h5>
                                    <p className="text-xs text-zinc-500">Capacitación técnica y estratégica para managers de ventas.</p>
                                </div>
                                <div>
                                    <h5 className="text-[#82ff1f] font-bold text-xs uppercase tracking-widest mb-3">SOPs Digitales</h5>
                                    <p className="text-xs text-zinc-500">Manuales operativos personalizados para tu nueva infraestructura IA.</p>
                                </div>
                            </div>
                            <div className="mt-12">
                                <Link href="/servicios/formacion" className="group flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase">
                                    Saber más
                                    <span className="w-12 h-12 rounded-full bg-[#82ff1f] text-black flex items-center justify-center group-hover:bg-white transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative min-h-[500px]">
                            <img alt="Team Training" className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgNvvZpaNGUxADqYLjfM9TXcVhQotCGaP_T8YaUnQvwrKL5ONvp1Q3StodolBf-vmulX9RpMKaOBl2ej5ol8DJnAQPxzgwa1E8dUeSyYV7Q1S6gN2L7hJGQ-JBB0il--SCni-KcPjejpeN_vTdmghGxCvowGZkmAblCEQNVcW9z4gdPKgUnNTRpRnXk1cXjFFS34lQHg9gpFXGlg4JBA81woyzhC3QZBa3sY0MGtjsPFYekWgCHi85bEmmzpTXA3ibwXzKteKtYLZ" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
