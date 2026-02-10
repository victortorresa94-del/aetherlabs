"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

/* ──────────────────────────────────────────
   DATA
   ────────────────────────────────────────── */

const processSteps = [
    { icon: "📡", num: "1", title: "Adquisición", desc: "Captura de leads cualificados mediante segmentación IA avanzada." },
    { icon: "💬", num: "2", title: "Conversación", desc: "Agentes conversacionales nutren el interés 24/7 en tiempo real." },
    { icon: "✅", num: "3", title: "Conversión", desc: "Cierre de ventas automatizado o agendamiento directo a CRM." },
    { icon: "🎧", num: "4", title: "Atención", desc: "Onboarding instantáneo y soporte postventa sin esperas." },
];

const services = [
    {
        mod: "MOD. 01",
        icon: "🎯",
        title: "Ads con IA",
        desc: "Algoritmos predictivos que optimizan tu inversión publicitaria en tiempo real, identificando audiencias de alto valor antes que la competencia.",
        bullets: ["Optimización de ROAS automático", "Generación de creatividades dinámica", "A/B Testing masivo 24/7"],
    },
    {
        mod: "MOD. 02",
        icon: "🤖",
        title: "Agentes IA",
        desc: "Fuerza de ventas digital que nunca duerme. Agentes entrenados en tu producto capaces de mantener conversaciones complejas y cerrar tratos.",
        bullets: ["Respuestas en < 5 segundos", "Manejo de objeciones avanzado", "Multicanal (WhatsApp, Email, Web)"],
    },
    {
        mod: "MOD. 03",
        icon: "🗄️",
        title: "CRM Autónomo",
        desc: "El sistema nervioso de tu empresa. Limpieza de datos, scoring de leads y asignación de tareas totalmente automatizada.",
        bullets: ["Lead Scoring predictivo", "Enriquecimiento de datos B2B", "Pipeline auto-gestionado"],
    },
    {
        mod: "MOD. 04",
        icon: "🎓",
        title: "Formación Corporativa",
        desc: "Capacitación para tu equipo humano. Enséñales a gobernar las herramientas de IA en lugar de competir con ellas.",
        bullets: ["Workshops de Prompt Engineering", "Gobernanza de datos y ética", "Certificación interna"],
    },
];

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

const whyPoints = [
    {
        title: "Implementación en 14 días",
        desc: "Sin periodos de onboarding eternos. Conectamos, configuramos y lanzamos en tiempo récord.",
    },
    {
        title: "Infraestructura Propia",
        desc: "No revendemos software de terceros. Utilizamos nuestros propios modelos ajustados a ventas.",
    },
    {
        title: "ROI Auditado",
        desc: "Dashboard transparente en tiempo real. Si no generamos retorno, ajustamos el sistema sin coste.",
    },
];

/* ──────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────── */

export default function ServiciosPage() {
    const [activeProblem, setActiveProblem] = useState(0);

    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* ═══════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#82ff1f]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Enterprise AI Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Automatiza todo tu <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                                proceso comercial
                            </span>{" "}
                            con IA
                        </h1>

                        <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-400 font-light leading-relaxed">
                            Desde la captación hasta la atención postventa. Eliminamos la fricción humana en tareas repetitivas para escalar tus ingresos con precisión quirúrgica.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contacto"
                                className="group bg-[#82ff1f] hover:bg-[#6de018] text-black px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Solicitar diagnóstico
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                            <button className="group bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-center gap-2">
                                Ver cómo funciona
                                <span className="opacity-50 group-hover:opacity-100">▶</span>
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-16 pt-8 border-t border-white/5">
                            <p className="text-[10px] text-zinc-500 mb-6 uppercase tracking-widest font-semibold">
                                Integrado con los líderes de la industria
                            </p>
                            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale text-xl font-bold">
                                <span>Salesforce</span>
                                <span>HubSpot</span>
                                <span>Meta</span>
                                <span>OpenAI</span>
                                <span>Zendesk</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SECTION 2 — PROCESS FLOW
      ═══════════════════════════════════════ */}
            <section className="py-20 bg-zinc-950 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 z-0" />
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-[#82ff1f]/0 via-[#82ff1f] to-[#82ff1f]/0 z-0 opacity-20" />

                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                                className="relative z-10 group"
                            >
                                <div className="w-24 h-24 mx-auto bg-black rounded-2xl border border-white/10 group-hover:border-[#82ff1f]/50 transition-colors flex items-center justify-center mb-6 relative">
                                    <div className="absolute inset-0 bg-[#82ff1f]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-3xl relative z-10">{step.icon}</span>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                        <div className="w-6 h-6 rounded-full bg-black border border-[#82ff1f] flex items-center justify-center text-[10px] text-[#82ff1f] font-bold">
                                            {step.num}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-center text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-center text-sm text-zinc-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SECTION 3 — CORE SERVICES GRID
      ═══════════════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Arquitectura de Crecimiento</h2>
                        <p className="text-zinc-400">Nuestras soluciones modulares se integran perfectamente en tu infraestructura actual.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((svc, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-zinc-950 rounded-2xl p-8 border border-white/5 hover:border-[#82ff1f]/30 transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-lg text-2xl group-hover:bg-[#82ff1f]/10 transition-colors">
                                        {svc.icon}
                                    </div>
                                    <span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded">
                                        {svc.mod}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
                                <p className="text-zinc-400 mb-8 text-sm leading-relaxed">{svc.desc}</p>
                                <ul className="space-y-3">
                                    {svc.bullets.map((b, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] shadow-[0_0_8px_rgba(130,255,31,0.8)]" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SECTION 4 — DIAGNOSIS / PROBLEM TABS
      ═══════════════════════════════════════ */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                                        {problems[activeProblem].cta} <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SECTION 5 — WHY AETHER
      ═══════════════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                                No somos una agencia. <br />
                                <span className="text-zinc-500">Somos ingeniería de ventas.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8">
                                Dejamos atrás las promesas vacías del marketing tradicional. Construimos sistemas predecibles, escalables y auditables.
                            </p>
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="text-white font-mono text-sm">
                                        SYSTEM_STATUS: <span className="text-[#82ff1f]">ONLINE</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            {whyPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="group border-l border-white/10 pl-8 hover:border-[#82ff1f] transition-colors duration-300"
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#82ff1f] transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-zinc-500 max-w-sm">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SECTION 6 — FINAL CTA
      ═══════════════════════════════════════ */}
            <section className="py-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-black to-zinc-950 rounded-3xl p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/10 blur-[100px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#82ff1f]/5 blur-[100px] rounded-full" />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Descubre cuánto estás perdiendo hoy
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                                Cada día sin automatización es dinero que dejas sobre la mesa. Agenda una auditoría gratuita de 15 minutos y te mostraremos dónde está la fuga.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/contacto"
                                    className="bg-[#82ff1f] hover:bg-[#6de018] text-black px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(130,255,31,0.3)] hover:shadow-[0_0_30px_rgba(130,255,31,0.5)]"
                                >
                                    Auditar mi proceso ahora
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-all"
                                >
                                    Hablar con un experto
                                </Link>
                            </div>

                            <p className="mt-8 text-xs text-zinc-500">
                                Sin compromiso. Solo datos reales sobre tu potencial de crecimiento.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
