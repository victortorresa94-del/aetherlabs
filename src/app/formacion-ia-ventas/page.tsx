'use client'

import React from "react";
import Link from "next/link";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    Users,
    Zap,
    TrendingUp,
    Database,
    PlayCircle,
    ArrowRight,
    GraduationCap,
    BookOpen,
    Briefcase,
    CheckCircle2,
    BarChart3,
    Network,
    Target,
    BrainCircuit
} from "lucide-react";

export default function FormacionVentasPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#7bff00] selection:text-black">
            <HeaderNavigation />

            {/* 1. HERO */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[#7bff00]/5 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col items-start text-left">
                            <span className="px-4 py-1 rounded-full border border-[#7bff00]/30 bg-[#7bff00]/10 text-[#7bff00] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                                Capacitación Estratégica
                            </span>
                            <h1 className="text-6xl md:text-7xl font-display font-normal tracking-tight leading-[1.05] mb-8">
                                Formación <span className="font-instrument italic uppercase">ia</span> <br /> de Ventas
                                <span className="text-zinc-400 font-instrument italic font-normal text-4xl md:text-5xl block mt-4 tracking-tight">Convierte tu equipo en parte del sistema.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
                                No implementamos herramientas para que luego nadie las use.
                                Entrenamos a tu equipo para vender con estructura y tecnología.
                            </p>
                            <p className="text-md text-zinc-500 mb-10 max-w-lg border-l-2 border-[#7bff00] pl-4">
                                La automatización no sustituye al equipo.<br />
                                Lo potencia.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto" className="bg-[#7bff00] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    Solicitar Diagnóstico
                                    <TrendingUp className="w-5 h-5" />
                                </Link>
                                <Link href="/industrias" className="border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                                    Ver el sistema completo
                                    <PlayCircle className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Visual Schema */}
                        <div className="relative h-[500px] w-full border border-[#1f1f1f] bg-[#0a0a0a] rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* System Schema */}
                            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm">
                                {/* Top: Equipo */}
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 w-full justify-center group hover:border-[#7bff00]/50 transition-colors">
                                    <Users className="w-6 h-6 text-zinc-400 group-hover:text-[#7bff00]" />
                                    <span className="font-mono text-sm uppercase tracking-widest text-zinc-300">EQUIPO_HUMANO</span>
                                </div>

                                {/* Connector */}
                                <div className="h-8 w-[1px] bg-gradient-to-b from-zinc-800 to-[#7bff00]"></div>

                                {/* Row: Agents + CRM */}
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#7bff00]/5 border border-[#7bff00]/20 text-center">
                                        <BrainCircuit className="w-6 h-6 text-[#7bff00]" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#7bff00]">AGENTES_IA</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#7bff00]/5 border border-[#7bff00]/20 text-center">
                                        <Database className="w-6 h-6 text-[#7bff00]" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#7bff00]">CRM_CORE</span>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="h-8 w-[1px] bg-gradient-to-b from-[#7bff00] to-white"></div>

                                {/* Bottom: System */}
                                <div className="w-full p-4 rounded-lg bg-zinc-100 text-black font-bold text-center uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    SISTEMA_ESTRUCTURADO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. EL PROBLEMA REAL */}
            <section className="bg-white text-black py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-tight leading-[1.05] mb-8">
                                La mayoría de sistemas fallan por falta de <span className="text-[#6bbd00]">adopción</span>.
                            </h2>
                            <div className="w-20 h-1.5 bg-black mb-8"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {[
                                "Comerciales que no usan el CRM porque 'es complicado'.",
                                "Seguimiento inconsistente: cada vendedor lo hace a su manera.",
                                "Procesos improvisados sin un estándar claro.",
                                "Dependencia total de 'personas estrella' en lugar de procesos.",
                                "Tecnología potente infrautilizada por falta de conocimiento."
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
                        No es teoría.<br />
                        <span className="text-zinc-500">Es implementación aplicada.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-16 max-w-2xl mx-auto">
                        No enseñamos "qué es la IA". Enseñamos cómo vender mejor con ella.
                        Nuestra formación está enfocada en el uso práctico de Agentes IA, gestión real del CRM, estructura de seguimiento y organización del pipeline.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col items-center text-center gap-3">
                            <BrainCircuit className="w-6 h-6 text-[#7bff00]" />
                            <span className="font-bold text-sm">Uso de Agentes</span>
                        </div>
                        <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col items-center text-center gap-3">
                            <Database className="w-6 h-6 text-[#7bff00]" />
                            <span className="font-bold text-sm">Gestión CRM</span>
                        </div>
                        <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col items-center text-center gap-3">
                            <Network className="w-6 h-6 text-[#7bff00]" />
                            <span className="font-bold text-sm">Pipeline</span>
                        </div>
                        <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col items-center text-center gap-3">
                            <Target className="w-6 h-6 text-[#7bff00]" />
                            <span className="font-bold text-sm">Sectorial</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. QUÉ INCLUYE */}
            <section className="py-32 bg-black px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[#7bff00] font-mono text-xs uppercase tracking-widest mb-2 block">Módulos de Implementación</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">El método SALVIA aplicado</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <Users className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Formación por rol</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Sesiones específicas para comerciales, dirección y equipo operativo. Cada uno aprende lo que necesita.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <Briefcase className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Adaptación por industria</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Contenido adaptado a clínicas, inmobiliaria, educación o servicios técnicos. No usamos ejemplos genéricos.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <BookOpen className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Playbooks comerciales</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Guías paso a paso: cómo responder, cómo hacer seguimiento, cuándo escalar a una llamada.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <BrainCircuit className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Uso estratégico de agentes</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Entendimiento profundo de cuándo automatizar y cuándo es necesaria la intervención humana.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <BarChart3 className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Gestión de pipeline</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Cómo estructurar oportunidades correctamente para tener una previsión de ventas real.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#7bff00]/50 transition-colors group">
                            <TrendingUp className="w-8 h-8 text-zinc-500 group-hover:text-[#7bff00] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">Optimización continua</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Revisión de procesos y mejora iterativa basada en los datos que arroja el propio sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DIFERENCIA CLAVE */}
            <section className="py-32 bg-white text-black bg-opacity-95">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-display font-semibold mb-20 text-center italic uppercase tracking-tight">Comparativa de Enfoque</h2>
                    <div className="grid md:grid-cols-2 gap-px bg-zinc-200">
                        <div className="bg-white p-12 space-y-8">
                            <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">Formación Tradicional</h4>
                            <div className="space-y-6">
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Teoría genérica.
                                </p>
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Conceptos abstractos.
                                </p>
                                <p className="flex items-center gap-4 text-zinc-500 font-light italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                                    Sin conexión real al negocio.
                                </p>
                            </div>
                        </div>
                        <div className="bg-zinc-50 p-12 space-y-8">
                            <h4 className="text-zinc-800 font-mono text-xs uppercase tracking-[0.3em] mb-4">Formación SALVIA</h4>
                            <div className="space-y-6">
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Aplicada al sistema.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Enfocada a resultados.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Adaptada por sector.
                                </p>
                                <p className="flex items-center gap-4 text-black font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-[#7bff00]" />
                                    Integrada en el día a día.
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
                        <h2 className="text-4xl font-display font-semibold italic mb-6 uppercase tracking-tight">La pieza final del puzzle</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 hidden lg:block"></div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                { label: "Ads", icon: <TrendingUp /> },
                                { label: "Agentes", icon: <BrainCircuit /> },
                                { label: "CRM", icon: <Database /> },
                                { label: "Formación", icon: <GraduationCap />, active: true },
                                { label: "Escala", icon: <Zap /> },
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${step.active
                                        ? "bg-[#7bff00] text-black shadow-[0_0_20px_rgba(123,255,0,0.3)] scale-110"
                                        : "bg-zinc-900 text-zinc-500 border border-zinc-800"
                                        }`}>
                                        {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                                    </div>
                                    <h5 className={`font-bold uppercase text-[10px] tracking-widest ${step.active ? "text-[#7bff00]" : "text-zinc-600"}`}>
                                        {step.label}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-24 text-center text-xl text-zinc-400 font-light max-w-2xl mx-auto space-y-4">
                        <p>La tecnología sin equipo es frágil.</p>
                        <p>El equipo sin sistema es caótico.</p>
                        <p className="font-bold text-white">SALVIA une ambos.</p>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className="py-48 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7bff00]/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-none italic">
                        Convierte tu equipo en una <br />
                        <span className="text-[#7bff00]">máquina estructurada.</span>
                    </h2>
                    <p className="text-xl text-zinc-500 font-light">
                        No basta con instalar el sistema.<br />
                        Hay que saber usarlo.
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
