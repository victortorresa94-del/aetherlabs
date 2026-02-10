"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { agentsData } from "@/data/agents";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AgentesPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* ═══════════════════════════════════════
                SECTION 1 — HERO
            ═══════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#82ff1f] mb-8 tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82ff1f] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#82ff1f]" />
                            </span>
                            Nueva Generación v2.4
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Agentes IA que atienden,<br />
                            <span className="text-[#82ff1f]">cualifican y venden</span> por ti.
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            Disponibles por WhatsApp, web y llamadas. Diseñados para negocios con{" "}
                            <span className="text-white font-medium border-b border-[#82ff1f]/50">volumen real</span>.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-zinc-500 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="text-[#82ff1f]">✓</span>
                                <span>No son chatbots genéricos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#82ff1f]">✓</span>
                                <span>Entrenados para situaciones reales</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#82ff1f]">✓</span>
                                <span>Integración en 5 minutos</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 2 — DEFINITION
            ═══════════════════════════════════════ */}
            <section className="max-w-4xl mx-auto px-6 mb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="border-l-2 border-[#82ff1f] pl-8 md:pl-12 py-4 bg-gradient-to-r from-white/5 to-transparent rounded-r-xl"
                >
                    <h3 className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-widest">Definición</h3>
                    <p className="text-2xl md:text-3xl text-zinc-200 leading-relaxed font-light">
                        Un <strong className="text-white font-semibold">Agente Aether</strong> no es un script predefinido. Es una entidad digital autónoma capaz de razonar, mantener contexto, gestionar objeciones complejas y ejecutar acciones en tu CRM como lo haría tu mejor empleado.
                    </p>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 3 — AGENT CARDS
            ═══════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Catálogo de Agentes</h2>
                        <p className="text-zinc-400">Selecciona el perfil especializado para tu necesidad</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agentsData.map((agent, i) => (
                        <motion.div
                            key={agent.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={`/agentes/${agent.id}`}
                                className="group relative bg-white/[0.02] border border-white/10 hover:border-[#82ff1f]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#82ff1f]/5 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="aspect-[4/5] w-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />
                                    <Image
                                        src={agent.image}
                                        alt={agent.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        {agent.badge && (
                                            <span className="inline-block bg-[#82ff1f] text-black text-xs font-bold px-2 py-1 rounded mb-2">
                                                {agent.badge}
                                            </span>
                                        )}
                                        <h3 className="text-3xl font-bold text-white">{agent.name}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Rol Funcional</p>
                                        <p className="text-lg text-white font-medium">{agent.roleShort}</p>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">Ideal para</p>
                                        <p className="text-sm text-zinc-300 bg-white/5 p-2 rounded border border-white/5 inline-block">
                                            {agent.idealFor}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-8 text-sm text-zinc-400 flex-grow">
                                        {agent.checklist.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <span className="text-[#82ff1f] mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-[#82ff1f] transition-colors border-t border-white/10 pt-4 w-full">
                                        Ver cómo trabaja {agent.name}
                                        <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 4 — INTEGRATION FLOW
            ═══════════════════════════════════════ */}
            <section className="max-w-6xl mx-auto px-6 mb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 md:p-16 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Flujo de Trabajo Integrado</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
                        {/* Step 1: Client */}
                        <div className="relative z-10 bg-black border border-white/20 p-6 rounded-xl w-64 h-40 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-2xl">
                                👤
                            </div>
                            <h4 className="text-white font-bold text-lg">Cliente</h4>
                            <p className="text-xs text-zinc-500 mt-1">WhatsApp / Web / Tlf</p>
                        </div>

                        {/* Connection 1 */}
                        <div className="h-12 w-0.5 md:h-0.5 md:w-24 bg-gradient-to-b md:bg-gradient-to-r from-white/20 via-[#82ff1f]/50 to-white/20 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#82ff1f] rounded-full animate-ping" />
                            </div>
                        </div>

                        {/* Step 2: AI Agent */}
                        <div className="relative z-10 bg-black border border-[#82ff1f] p-6 rounded-xl w-64 h-40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(130,255,31,0.1)]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#82ff1f] text-black text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                INTELIGENCIA AETHER
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#82ff1f]/20 flex items-center justify-center mb-3 text-2xl">
                                🧠
                            </div>
                            <h4 className="text-white font-bold text-lg">Agente IA</h4>
                            <p className="text-xs text-zinc-400 mt-1">Cualifica, Responde, Vende</p>
                        </div>

                        {/* Connection 2 */}
                        <div className="h-12 w-0.5 md:h-0.5 md:w-24 bg-gradient-to-b md:bg-gradient-to-r from-white/20 via-[#82ff1f]/50 to-white/20 relative" />

                        {/* Step 3: CRM/Team */}
                        <div className="relative z-10 bg-black border border-white/20 p-6 rounded-xl w-64 h-40 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-2xl">
                                👥
                            </div>
                            <h4 className="text-white font-bold text-lg">Equipo / CRM</h4>
                            <p className="text-xs text-zinc-500 mt-1">HubSpot, Salesforce, Slack</p>
                        </div>
                    </div>
                    <p className="mt-12 text-sm text-zinc-400">
                        <span className="text-[#82ff1f] font-bold">100% Transparente:</span> Tus comerciales reciben leads listos para cerrar, con todo el historial de la conversación.
                    </p>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 5 — USE CASES
            ═══════════════════════════════════════ */}
            <section className="max-w-5xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">¿Cuándo tiene sentido implementarlos?</h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            No todos los negocios necesitan IA. Pero si te identificas con estos problemas operativos, Aether Labs es la solución escalar.
                        </p>
                        <div className="h-1 w-20 bg-[#82ff1f] rounded-full" />
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { title: "Leads fríos por demora", desc: "Pierdes el 40% de tus oportunidades porque tu equipo tarda más de 15 minutos en responder el primer mensaje." },
                            { title: "Saturación en Atención al Cliente", desc: "Tu equipo de soporte responde las mismas 5 preguntas el 80% del tiempo, impidiendo resolver problemas complejos." },
                            { title: 'Citas "No-Show"', desc: "Tus comerciales tienen la agenda llena, pero la mitad de las reuniones no se presentan porque no hubo confirmación previa." },
                        ].map((c, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1">
                                    <span className="text-red-500 text-sm">✕</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{c.title}</h4>
                                    <p className="text-zinc-400 text-sm mt-1">{c.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 6 — FINAL CTA
            ═══════════════════════════════════════ */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-12 relative overflow-hidden text-center"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#82ff1f]/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#82ff1f]/10 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Descubre qué agente encaja contigo
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Analizamos tu flujo de ventas actual y te proponemos una demo personalizada del agente ideal para tu negocio.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 bg-[#82ff1f] hover:bg-[#6de018] text-black text-lg font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(130,255,31,0.4)] hover:shadow-[0_0_30px_rgba(130,255,31,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            Solicitar diagnóstico gratuito
                            <span>↗</span>
                        </Link>
                        <p className="mt-4 text-xs text-zinc-500">Sin compromiso • Implementación en 7 días</p>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
