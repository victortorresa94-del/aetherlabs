"use client";

import React from "react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    TrendingUp,
    PlayCircle,
    Target,
    Badge,
    Share2,
    Zap,
    CheckCircle,
    ArrowRight,
    MessageSquare,
    Database,
    Check,
    BrainCircuit
} from "lucide-react";
import SalviaEcosystem from "@/components/v3/salvia-ecosystem";
import Link from "next/link";

export default function AgentesPage() {
    return (
        <main className="bg-[#050505] text-white font-sans antialiased selection:bg-[#7bff00] selection:text-black min-h-screen overflow-x-hidden">
            {/* Styles from the provided HTML */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .obsidian-gradient {
                    background: linear-gradient(180deg, #050505 0%, #0a0a0a 100%);
                }
                .hero-pattern {
                    background-image: radial-gradient(circle at 2px 2px, #1f1f1f 1px, transparent 0);
                    background-size: 40px 40px;
                }
                .glow-subtle {
                    box-shadow: 0 0 20px rgba(123, 255, 0, 0.05);
                }
                .agent-card {
                    transition: all 0.3s ease;
                    background-color: #0a0a0a;
                    border: 1px solid #1f1f1f;
                }
                .agent-card:hover {
                    border-color: #7bff00;
                    box-shadow: 0 0 40px rgba(123, 255, 0, 0.1);
                }
            `}} />

            <HeaderNavigation />

            {/* Section 1: Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden hero-pattern">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <span className="px-4 py-1 rounded-full border border-[#7bff00]/30 bg-[#7bff00]/10 text-[#7bff00] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                            Directorio de Agentes Especializados
                        </span>
                        <h1 className="text-6xl md:text-9xl font-display font-normal tracking-tight leading-[1.0] mb-8 uppercase">
                            Agentes <span className="font-instrument italic lowercase">ia</span> <br />
                            <span className="text-5xl md:text-7xl lowercase block mt-4">
                                que convierten <span className="text-[#7bff00] font-instrument italic font-normal">conversaciones</span> en ventas.
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
                            No son bots. Son perfiles entrenados para vender, atender y gestionar procesos comerciales dentro de tu empresa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link href="/contacto" className="bg-[#7bff00] text-black px-8 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Solicitar Diagnóstico Estratégico
                                <TrendingUp className="w-5 h-5" />
                            </Link>
                            <Link href="/industrias" className="border border-white/20 hover:border-white/50 bg-white/5 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                                Ver cómo funciona SALVIA
                                <PlayCircle className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual: Minimalist System Grid */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
                        <div className="h-32 border border-[#1f1f1f] rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                            <span className="text-xs font-mono text-zinc-600">NODE_01_CAPTURE</span>
                        </div>
                        <div className="h-32 border border-[#7bff00]/20 rounded-xl bg-[#7bff00]/5 flex items-center justify-center">
                            <span className="text-xs font-mono text-[#7bff00]">NODE_02_INTELLIGENCE</span>
                        </div>
                        <div className="h-32 border border-[#1f1f1f] rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                            <span className="text-xs font-mono text-zinc-600">NODE_03_CRM_SYNC</span>
                        </div>
                        <div className="h-32 border border-[#1f1f1f] rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                            <span className="text-xs font-mono text-zinc-600">NODE_04_CLOSING</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: La Evolución del Servicio */}
            <section className="bg-white py-32 px-6 text-black relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-5xl mb-24">
                        <h2 className="text-5xl md:text-7xl font-display font-normal mb-10 leading-[1.05] tracking-tight uppercase">
                            La evolución del servicio:<br />
                            <span className="text-zinc-300">Un agente IA no es un chatbot.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="w-1.5 bg-[#7bff00] h-32 hidden md:block self-stretch"></div>
                            <p className="text-2xl font-light text-zinc-600 leading-relaxed md:pl-0 pl-8 md:border-l-0 border-l-4 border-[#7bff00]">
                                Mientras que un chatbot tradicional responde preguntas basadas en reglas fijas, un Agente IA de Aether Labs razona sobre objetivos, entiende el contexto emocional del cliente e integra datos en tiempo real para cerrar ventas.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                        <div className="space-y-6 group">
                            <div className="w-16 h-16 bg-[#7bff00]/10 flex items-center justify-center rounded-xl group-hover:bg-[#7bff00] transition-colors duration-500">
                                <Target className="w-8 h-8 text-[#7bff00] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-sm font-medium uppercase tracking-[0.2em] pt-2">Objetivo claro</h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">Capacidad de priorizar la conversión sobre la simple respuesta informativa.</p>
                        </div>
                        <div className="space-y-6 group">
                            <div className="w-16 h-16 bg-[#7bff00]/10 flex items-center justify-center rounded-xl group-hover:bg-[#7bff00] transition-colors duration-500">
                                <BrainCircuit className="w-8 h-8 text-[#7bff00] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-sm font-medium uppercase tracking-[0.2em] pt-2">Rol definido</h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">Cada agente posee una personalidad y tono de voz ajustado a su función comercial.</p>
                        </div>
                        <div className="space-y-6 group">
                            <div className="w-16 h-16 bg-[#7bff00]/10 flex items-center justify-center rounded-xl group-hover:bg-[#7bff00] transition-colors duration-500">
                                <Database className="w-8 h-8 text-[#7bff00] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-sm font-medium uppercase tracking-[0.2em] pt-2">Integración CRM</h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">Escritura automática de prospectos y notas en Salesforce, HubSpot o SAP.</p>
                        </div>
                        <div className="space-y-6 group">
                            <div className="w-16 h-16 bg-[#7bff00]/10 flex items-center justify-center rounded-xl group-hover:bg-[#7bff00] transition-colors duration-500">
                                <Zap className="w-8 h-8 text-[#7bff00] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-sm font-medium uppercase tracking-[0.2em] pt-2">Escalar volumen</h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">Atención simultánea de 10,000 <span className="font-bold">conversaciones</span> sin perder calidad humana.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Directory - NUESTROS AGENTES */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-5xl font-display font-medium mb-4 italic tracking-tight">Perfiles Especializados</h2>
                            <p className="text-zinc-500">Nuestros Agentes IA especializados por función.</p>
                        </div>
                        <div className="hidden md:block text-right">
                            <span className="text-sm text-zinc-600 font-mono tracking-widest uppercase">Directory [v1.0.4]</span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Agent Card 1: Laura */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="Laura - Atención & Citas"
                                    src="/images/agentes/Laura.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold leading-tight uppercase">Laura</h3>
                                    <p className="text-[#7bff00] font-medium">Atención & Citas</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Ideal para clínicas, estética y salud.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Responde en segundos.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Filtra según criterios.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Agenda automáticamente.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Reactiva pacientes inactivos.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>

                        {/* Agent Card 2: María */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="María - Ventas Directas"
                                    src="/images/agentes/Maria.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold leading-tight uppercase">María</h3>
                                    <p className="text-[#7bff00] font-medium">Ventas Directas</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Ventas high ticket o servicios B2B.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Cualifica leads.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Detecta intención real.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Gestiona objeciones.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Agenda con el comercial humano.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>

                        {/* Agent Card 3: Álvaro */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="Álvaro - Inmobiliaria"
                                    src="/images/agentes/Álvaro.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold leading-tight uppercase">Álvaro</h3>
                                    <p className="text-[#7bff00] font-medium">Inmobiliaria</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Especializado en real estate.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Filtra compradores reales.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Clasifica por presupuesto.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Prioriza leads calientes.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Coordina visitas.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>

                        {/* Agent Card 4: Diego */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="Diego - Técnico-Comercial"
                                    src="/images/agentes/Diego.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold leading-tight uppercase">Diego</h3>
                                    <p className="text-[#7bff00] font-medium">Técnico-Comercial</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Reformas, instalaciones y servicios técnicos.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Detecta urgencia.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Solicita información clave.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Genera presupuestos base.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Agenda visitas técnicas.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>

                        {/* Agent Card 5: Daniela */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="Daniela - Retención & Reactivación"
                                    src="/images/agentes/Latina.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold leading-tight uppercase">Daniela</h3>
                                    <p className="text-[#7bff00] font-medium">Retención & Reactivación</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Gestión de carteras activas.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Detecta oportunidades de upsell.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Reactiva clientes inactivos.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Hace seguimiento automático.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Mejora recurrencia.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>

                        {/* Agent Card 6: Clara */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                    alt="Clara - Soporte Operativo"
                                    src="/images/agentes/Clara.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-medium leading-tight uppercase">Clara</h3>
                                    <p className="text-[#7bff00] font-normal">Soporte Operativo</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-zinc-400 text-sm mb-6 italic">Gestión interna y procesos repetitivos.</p>
                                <ul className="space-y-4 text-sm text-zinc-400 flex-grow">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Gestiona consultas repetitivas.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Centraliza información.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Reduce carga administrativa.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-[#7bff00] w-5 h-5 flex-shrink-0" /> Ordena procesos internos.</li>
                                </ul>
                                <button className="w-full mt-8 py-3 border border-[#1f1f1f] rounded-lg font-medium hover:bg-white hover:text-black transition-all">Ver Perfil Técnico</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Cómo Funcionan */}
            <section className="py-24 bg-[#0a0a0a] border-y border-[#1f1f1f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-medium italic mb-6 tracking-tight">Cómo funcionan</h2>
                        <div className="w-20 h-1 bg-[#7bff00] mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#050505] border border-[#1f1f1f]">
                            <div className="w-16 h-16 rounded-full bg-[#7bff00]/10 flex items-center justify-center mb-6">
                                <Share2 className="text-[#7bff00] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Conexión Omnicanal</h3>
                            <p className="text-zinc-400 text-sm">Se conectan a tus canales actuales (WhatsApp, Web, Redes Sociales, etc.) sin cambiar tu operativa.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#050505] border border-[#1f1f1f]">
                            <div className="w-16 h-16 rounded-full bg-[#7bff00]/10 flex items-center justify-center mb-6">
                                <Database className="text-[#7bff00] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Integración CRM</h3>
                            <p className="text-zinc-400 text-sm">Se integran con tu CRM para registrar cada interacción y actualizar el pipeline en tiempo real.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#050505] border border-[#1f1f1f]">
                            <div className="w-16 h-16 rounded-full bg-[#7bff00]/10 flex items-center justify-center mb-6">
                                <TrendingUp className="text-[#7bff00] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Escala Infinita</h3>
                            <p className="text-zinc-400 text-sm">Escalan volumen de atención masiva sin depender de contratar más personal humano.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-zinc-500 font-medium">
                        <p>✓ Registran cada interacción • ✓ Escalan volumen masivo • ✓ Derivan a humano cuando corresponde</p>
                    </div>
                </div>
            </section>

            {/* Section 5: Comparison - CHATBOT VS AGENTE */}
            <section className="py-32 bg-white text-black border-y border-zinc-100">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-5xl font-display font-semibold mb-16 text-center tracking-tight uppercase leading-[1.05]">Arquitectura:<br /><span className="text-zinc-300">Chatbot vs Agente SALVIA</span></h2>
                    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 bg-zinc-50">
                                    <th className="py-6 px-8 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Capacidad</th>
                                    <th className="py-6 px-8 font-mono text-[10px] text-zinc-400 uppercase text-center tracking-widest">Chatbot Tradicional</th>
                                    <th className="py-6 px-8 font-mono text-[10px] text-[#71e600] uppercase text-center tracking-widest font-black">Agente SALVIA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                <tr className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="py-8 px-8 font-bold text-sm uppercase tracking-tight">Contexto y Memoria</td>
                                    <td className="py-8 px-8 text-center text-zinc-500 text-sm italic">Respuestas rígidas y flujos cerrados</td>
                                    <td className="py-8 px-8 text-center font-bold text-black text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <Zap className="text-[#7bff00] w-4 h-4" />
                                            Contexto dinámico y memoria real
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="py-8 px-8 font-bold text-sm uppercase tracking-tight">Objetivos de Negocio</td>
                                    <td className="py-8 px-8 text-center text-zinc-500 text-sm italic">Sin contexto real de venta</td>
                                    <td className="py-8 px-8 text-center font-bold text-black text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <Zap className="text-[#7bff00] w-4 h-4" />
                                            Objetivo comercial y cierre
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="py-8 px-8 font-bold text-sm uppercase tracking-tight">Tecnología e Integración</td>
                                    <td className="py-8 px-8 text-center text-zinc-500 text-sm italic">Sin conexión real al pipeline</td>
                                    <td className="py-8 px-8 text-center font-bold text-black text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <Zap className="text-[#7bff00] w-4 h-4" />
                                            Integrado con CRM (HubSpot/Salesforce)
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="py-8 px-8 font-bold text-sm uppercase tracking-tight">Propósito Principal</td>
                                    <td className="py-8 px-8 text-center text-zinc-500 text-sm italic">Atención básica pasiva</td>
                                    <td className="py-8 px-8 text-center font-bold text-black text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <Zap className="text-[#7bff00] w-4 h-4" />
                                            Pensado para vender y convertir
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 6: Integration in SALVIA */}
            <SalviaEcosystem variant="dark" />

            <Footer />
        </main>
    );
}
