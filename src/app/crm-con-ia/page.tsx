'use client'

import React from "react";
import Link from "next/link";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    LayoutDashboard,
    MessageSquare,
    GitPullRequest,
    Zap,
    BarChart3,
    Users,
    CheckCircle2,
    TrendingUp,
    PlayCircle,
    ArrowRight,
    Search,
    BrainCircuit,
    Database,
    Network
} from "lucide-react";

export default function CRMPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#7bff00] selection:text-black">
            <HeaderNavigation />

            {/* 1. HERO */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#7bff00]/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col items-start text-left">
                            <span className="px-4 py-1 rounded-full border border-[#7bff00]/30 bg-[#7bff00]/10 text-[#7bff00] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                                Sistema de Gestión Inteligente
                            </span>
                            <h1 className="text-6xl md:text-7xl font-display font-semibold tracking-tight leading-[1.05] mb-8">
                                CRM CON IA <br />
                                <span className="text-zinc-400 font-light text-4xl md:text-5xl block mt-4">El cerebro de tu sistema comercial.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
                                Centraliza conversaciones, organiza oportunidades y automatiza el seguimiento en un solo lugar.
                            </p>
                            <p className="text-md text-zinc-500 mb-10 max-w-lg border-l-2 border-[#7bff00] pl-4">
                                Sin control del pipeline, no hay sistema.<br />
                                El CRM es donde todo se ordena y escala.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto" className="bg-[#7bff00] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    Solicitar Diagnóstico
                                    <TrendingUp className="w-5 h-5" />
                                </Link>
                                <Link href="/industrias" className="border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                                    Ver cómo funciona SALVIA
                                    <PlayCircle className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Visual abstract architecture */}
                        <div className="relative h-[500px] w-full border border-[#1f1f1f] bg-[#0a0a0a] rounded-2xl p-8 flex items-center justify-center overflow-hidden group">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* Diagram Container */}
                            <div className="relative z-10 w-full max-w-md aspect-square flex flex-col justify-between py-8">
                                {/* Top Nodes */}
                                <div className="flex justify-between px-8">
                                    <div className="w-12 h-12 rounded-lg border border-[#7bff00]/30 bg-[#7bff00]/5 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-[#7bff00]" />
                                    </div>
                                    <div className="w-12 h-12 rounded-lg border border-[#7bff00]/30 bg-[#7bff00]/5 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-[#7bff00]" />
                                    </div>
                                </div>

                                {/* Central Hub */}
                                <div className="self-center w-32 h-32 rounded-full border-2 border-[#7bff00] bg-[#7bff00]/5 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(123,255,0,0.1)] relative">
                                    <Database className="w-10 h-10 text-[#7bff00] mb-2" />
                                    <span className="text-[10px] font-mono text-[#7bff00] tracking-widest uppercase">CORE_CRM</span>

                                    {/* Connecting Lines */}
                                    <div className="absolute -top-16 left-4 w-[1px] h-16 bg-gradient-to-b from-transparent via-[#7bff00]/50 to-[#7bff00]"></div>
                                    <div className="absolute -top-16 right-4 w-[1px] h-16 bg-gradient-to-b from-transparent via-[#7bff00]/50 to-[#7bff00]"></div>
                                    <div className="absolute top-1/2 -left-16 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#7bff00]/50 to-[#7bff00]"></div>
                                    <div className="absolute top-1/2 -right-16 w-16 h-[1px] bg-gradient-to-l from-transparent via-[#7bff00]/50 to-[#7bff00]"></div>
                                    <div className="absolute -bottom-16 w-[1px] h-16 bg-gradient-to-t from-transparent via-[#7bff00]/50 to-[#7bff00]"></div>
                                </div>

                                {/* Side Nodes */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                                    <Network className="w-4 h-4 text-zinc-500" />
                                </div>
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                                    <Users className="w-4 h-4 text-zinc-500" />
                                </div>

                                {/* Bottom Node */}
                                <div className="self-center flex flex-col items-center">
                                    <div className="w-24 h-8 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400">
                                        PIPELINE
                                    </div>
                                    <div className="flex gap-1 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-[#7bff00]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#7bff00]/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEMA */}
            <section className="bg-white text-black py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-tight leading-[1.05] mb-8">
                                Tu negocio pierde ventas cuando no hay <span className="text-[#6bbd00]">sistema</span>.
                            </h2>
                            <div className="w-20 h-1.5 bg-black mb-8"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {[
                                "Leads repartidos en WhatsApp, email y hojas de cálculo (Excel/Sheets).",
                                "Seguimientos olvidados por falta de agenda unificada.",
                                "Comerciales sin visibilidad real del estado de cada prospecto.",
                                "Falta de trazabilidad: no sabes qué pasa dentro de tu pipeline.",
                                "Decisiones estratégicas basadas en intuición, no en datos."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border-l-2 border-zinc-200 hover:border-black transition-colors">
                                    <div className="mt-1 min-w-[20px] text-zinc-400 font-mono text-sm">0{i + 1}</div>
                                    <p className="text-lg font-medium text-zinc-800 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. QUÉ ES REALMENTE */}
            <section className="py-32 bg-[#050505] border-y border-[#1f1f1f]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 tracking-tight">
                        No es solo un CRM.<br />
                        <span className="text-zinc-500">Es un sistema comercial estructurado.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-16 max-w-2xl mx-auto">
                        El CRM con IA de Aether Labs integra conversaciones multicanal, gestión de contactos, pipeline visual, automatizaciones y seguimiento inteligente en una sola plataforma.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f]">
                            <div className="w-10 h-10 bg-[#7bff00]/10 flex items-center justify-center rounded-lg mb-4">
                                <MessageSquare className="w-5 h-5 text-[#7bff00]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Interacción</h3>
                            <p className="text-sm text-zinc-500">Cada interacción queda registrada automáticamente.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f]">
                            <div className="w-10 h-10 bg-[#7bff00]/10 flex items-center justify-center rounded-lg mb-4">
                                <GitPullRequest className="w-5 h-5 text-[#7bff00]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Estado</h3>
                            <p className="text-sm text-zinc-500">Cada oportunidad tiene un estado claro en el pipeline.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f]">
                            <div className="w-10 h-10 bg-[#7bff00]/10 flex items-center justify-center rounded-lg mb-4">
                                <Users className="w-5 h-5 text-[#7bff00]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Acción</h3>
                            <p className="text-sm text-zinc-500">Cada comercial sabe exactamente qué hacer a continuación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. QUÉ INCLUYE */}
            <section className="py-32 bg-black px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[#7bff00] font-mono text-xs uppercase tracking-widest mb-2 block">Capacidades del Sistema</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">Potencia bajo control</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <LayoutDashboard className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Conversaciones Centralizadas</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                WhatsApp, web y otros canales unificados en una sola vista. Olvida cambiar de pestaña para responder.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <GitPullRequest className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Pipeline Visual (Kanban)</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Gestión clara de oportunidades por fases. Arrastra y suelta leads según avanzan hacia el cierre.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <Zap className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Automatizaciones</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Recordatorios, seguimiento y acciones automáticas. El sistema trabaja para que tú solo vendas.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <BarChart3 className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Lead Scoring</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Priorización automática según comportamiento e interés. Atiende primero a quien está listo para comprar.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <BrainCircuit className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Integración con Agentes IA</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Cada conversación de tus agentes IA se vuelca y actualiza automáticamente en el CRM.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <Search className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Dashboard de Control</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Visión global del rendimiento comercial. Tasas de conversión, volumen y actividad en tiempo real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CÓMO FUNCIONA EN SALVIA */}
            <section className="py-32 bg-white text-black px-6 border-y border-zinc-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 tracking-tight">El flujo del Sistema SALVIA</h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-zinc-200 z-0"></div>

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                            {[
                                { title: "Ads", icon: TrendingUp },
                                { title: "Agente IA", icon: BrainCircuit },
                                { title: "CRM", icon: Database, active: true },
                                { title: "Seguimiento", icon: MessageSquare },
                                { title: "Cierre", icon: CheckCircle2 },
                                { title: "Formación", icon: Users }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-4">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${step.active ? 'bg-black border-black text-[#7bff00]' : 'bg-white border-zinc-200 text-zinc-400'}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <span className={`font-bold text-sm ${step.active ? 'text-black' : 'text-zinc-500'}`}>{step.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 max-w-2xl mx-auto">
                        <p className="text-2xl font-light italic text-zinc-600">
                            "El CRM conecta cada fase. Sin CRM, no hay sistema. Con CRM, todo escala."
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. DIFERENCIA CLAVE */}
            <section className="py-32 bg-[#050505] px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Traditional */}
                        <div className="p-10 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]/50 opacity-60 hover:opacity-100 transition-opacity">
                            <h3 className="text-2xl font-bold mb-8 text-zinc-400 uppercase tracking-widest text-sm">CRM Tradicional</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-zinc-500">
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    Registro manual de datos (error humano).
                                </li>
                                <li className="flex items-center gap-4 text-zinc-500">
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    Seguimiento dependiente 100% del comercial.
                                </li>
                                <li className="flex items-center gap-4 text-zinc-500">
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    Conversaciones separadas del dato.
                                </li>
                                <li className="flex items-center gap-4 text-zinc-500">
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    Visión limitada y fragmentada.
                                </li>
                            </ul>
                        </div>

                        {/* SALVIA */}
                        <div className="p-10 rounded-2xl border border-[#7bff00]/30 bg-[#7bff00]/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Zap className="w-24 h-24 text-[#7bff00]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 text-[#7bff00] uppercase tracking-widest text-sm">CRM SALVIA (Con IA)</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Integración automática de datos.
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Seguimiento automatizado inteligente.
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Pipeline estructurado y visual.
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Visión completa 360º del proceso.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className="py-40 bg-black text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#7bff00]/5 blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-none mb-8">
                        Convierte tu proceso comercial en un <span className="text-[#7bff00]">sistema</span>.
                    </h2>
                    <p className="text-xl text-zinc-400 mb-12">
                        El CRM no es un extra. Es el centro de todo.<br />
                        Empieza a escalar con orden.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
                        Solicitar Diagnóstico Estratégico
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
