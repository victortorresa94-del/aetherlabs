"use client";

import React, { useRef } from "react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    TrendingUp,
    Target,
    Share2,
    Zap,
    CheckCircle,
    ArrowRight,
    Database,
    BrainCircuit,
} from "lucide-react";
import SalviaEcosystem from "@/components/v3/salvia-ecosystem";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";

// ─── Aurora Canvas ─────────────────────────────────────────────────────────────
function AuroraCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const t = useRef(0);

    useAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        t.current += 0.0025;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const draw = (
            cx: number, cy: number, rx: number, ry: number,
            c1: string, c2: string, phase: number
        ) => {
            const x = cx + Math.sin(t.current + phase) * rx * 0.3;
            const y = cy + Math.cos(t.current * 0.7 + phase) * ry * 0.22;
            const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
            g.addColorStop(0, c1);
            g.addColorStop(1, c2);
            ctx.globalCompositeOperation = "screen";
            ctx.beginPath();
            ctx.ellipse(x, y, rx, ry, t.current * 0.08, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        };

        const w = canvas.width, h = canvas.height;
        draw(w * 0.2, h * 0.35, w * 0.4, h * 0.5, "rgba(110,40,240,0.16)", "rgba(0,0,0,0)", 0);
        draw(w * 0.75, h * 0.3, w * 0.35, h * 0.48, "rgba(0,160,255,0.11)", "rgba(0,0,0,0)", 2.1);
        draw(w * 0.5, h * 0.65, w * 0.48, h * 0.42, "rgba(170,30,210,0.08)", "rgba(0,0,0,0)", 4.2);
        draw(w * 0.88, h * 0.55, w * 0.26, h * 0.36, "rgba(0,210,170,0.06)", "rgba(0,0,0,0)", 3.3);
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    );
}

// ─── Particles ─────────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.4 + 0.4,
    dur: 9 + Math.random() * 13,
    delay: Math.random() * 9,
    dx: (Math.random() - 0.5) * 5,
    dy: -(4 + Math.random() * 7),
    opacity: 0.12 + Math.random() * 0.28,
}));

export default function AgentesPage() {
    return (
        <main className="bg-[#050505] text-white font-sans antialiased selection:bg-[#7bff00] selection:text-black min-h-screen overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .agent-card { transition: all 0.3s ease; background-color: #0a0a0a; border: 1px solid #1f1f1f; }
                .agent-card:hover { border-color: #7bff00; box-shadow: 0 0 40px rgba(123,255,0,0.1); }
            `}} />

            <HeaderNavigation />

            {/* ── HERO ── */}
            <section className="relative min-h-[115dvh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20 px-6">

                {/* Grid */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.028) 1px,transparent 1px)`,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(ellipse 85% 70% at 50% 40%, black 0%, transparent 100%)",
                }} />

                {/* Aurora */}
                <AuroraCanvas />

                {/* Glows */}
                <motion.div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: "65vw", height: "50vh", top: "5%", left: "50%", translateX: "-50%",
                        background: "radial-gradient(ellipse at center,rgba(110,40,255,0.13) 0%,transparent 70%)",
                        filter: "blur(50px)",
                    }}
                    animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: "40vw", height: "30vh", top: "10%", left: "65%",
                        background: "radial-gradient(ellipse at center,rgba(0,150,255,0.07) 0%,transparent 70%)",
                        filter: "blur(60px)",
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {PARTICLES.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full bg-white"
                            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
                            animate={{
                                x: [0, p.dx, -p.dx * 0.5, 0],
                                y: [0, p.dy, p.dy * 1.5, p.dy * 0.3, 0],
                                opacity: [p.opacity, p.opacity * 1.4, 0, 0, p.opacity],
                            }}
                            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                        />
                    ))}
                </div>

                {/* Noise */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat", backgroundSize: "200px 200px",
                }} />

                {/* Bottom fade into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                    style={{ background: "linear-gradient(to top,#050505 0%,transparent 100%)" }} />

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 120% 100% at 50% 0%,transparent 40%,rgba(0,0,0,0.55) 100%)" }} />

                {/* Content */}
                <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7bff00] animate-pulse" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Directorio de Agentes Especializados</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display font-normal text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white"
                    >
                        <span className="font-bold">Agentes IA</span>
                        <br />
                        que convierten{" "}
                        <span
                            className="font-instrument italic font-normal"
                            style={{
                                background: "linear-gradient(135deg,#ffffff 0%,rgba(123,255,0,0.85) 55%,rgba(0,180,255,0.8) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            conversaciones
                        </span>
                        {" "}en ventas.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22 }}
                        className="font-light text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        No son bots. Son perfiles entrenados para vender, atender y gestionar procesos comerciales dentro de tu empresa.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }}
                    >
                        <Link
                            href="/contacto"
                            className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:scale-105 active:scale-95 transition-transform"
                        >
                            Crear mi agente IA
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Stat pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.46 }}
                        className="flex flex-wrap justify-center gap-3 pt-4"
                    >
                        {[
                            ["6", "Perfiles especializados"],
                            ["24/7", "Disponibilidad total"],
                            ["+50", "Empresas activas"],
                        ].map(([val, label]) => (
                            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
                                <span className="text-sm font-bold text-white">{val}</span>
                                <span className="text-xs text-zinc-500">{label}</span>
                            </div>
                        ))}
                    </motion.div>
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

            {/* Section 3: Directory */}
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
                        {/* Laura */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Laura - Atención & Citas" src="/images/agentes/Laura.png" />
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
                                <Link href="/agentes/laura" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Agente</Link>
                            </div>
                        </div>

                        {/* María */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="María - Ventas Directas" src="/images/agentes/Maria.png" />
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
                                <Link href="/agentes/maria" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Agente</Link>
                            </div>
                        </div>

                        {/* Álvaro */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Álvaro - Inmobiliaria" src="/images/agentes/Álvaro.png" />
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
                                <Link href="/agentes/alvaro" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Agente</Link>
                            </div>
                        </div>

                        {/* Diego */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Diego - Técnico-Comercial" src="/images/agentes/Diego.png" />
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
                                <Link href="/agentes/diego" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Agente</Link>
                            </div>
                        </div>

                        {/* Daniela */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Daniela - Retención & Reactivación" src="/images/agentes/Latina.png" />
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
                                <Link href="/agentes/daniela" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-bold hover:bg-white hover:text-black transition-all">Ver Agente</Link>
                            </div>
                        </div>

                        {/* Clara */}
                        <div className="agent-card group rounded-xl overflow-hidden flex flex-col">
                            <div className="relative h-[400px] bg-zinc-800">
                                <img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Clara - Soporte Operativo" src="/images/agentes/Clara.png" />
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
                                <Link href="/agentes/clara" className="block w-full text-center mt-8 py-3 border border-[#1f1f1f] rounded-lg font-medium hover:bg-white hover:text-black transition-all">Ver Agente</Link>
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

            {/* Section 5: Comparison */}
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
                                {[
                                    ["Contexto y Memoria", "Respuestas rígidas y flujos cerrados", "Contexto dinámico y memoria real"],
                                    ["Objetivos de Negocio", "Sin contexto real de venta", "Objetivo comercial y cierre"],
                                    ["Tecnología e Integración", "Sin conexión real al pipeline", "Integrado con CRM (HubSpot/Salesforce)"],
                                    ["Propósito Principal", "Atención básica pasiva", "Pensado para vender y convertir"],
                                ].map(([cap, bad, good]) => (
                                    <tr key={cap} className="hover:bg-zinc-50/50 transition-colors">
                                        <td className="py-8 px-8 font-bold text-sm uppercase tracking-tight">{cap}</td>
                                        <td className="py-8 px-8 text-center text-zinc-500 text-sm italic">{bad}</td>
                                        <td className="py-8 px-8 text-center font-bold text-black text-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <Zap className="text-[#7bff00] w-4 h-4" />
                                                {good}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 6: Ecosystem */}
            <SalviaEcosystem variant="dark" />

            <Footer />
        </main>
    );
}
