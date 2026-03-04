'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import {
    Brain,
    Shield,
    Zap,
    Clock,
    TrendingUp,
    MessageSquare,
    FileText,
    Database,
    Cpu,
    Check,
    X,
    ArrowRight,
    Bot,
    Layers
} from 'lucide-react';

export default function CustomAIServicePage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
            <HeaderNavigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                    {/* Background Animation */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000] to-[#000] opacity-60" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] animate-pulse" />
                        {/* Subtle grid */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.05 }} />
                    </div>

                    <div className="container relative z-10 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
                                <SparkleIcon className="w-4 h-4 text-[#82ff1f]" />
                                <span className="text-sm font-medium tracking-wide text-[#e0e0e0]">Consultoría IA Premium</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
                                Tu propia IA, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#808080]">creada a tu medida</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-[#a0a0a0] mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                                LLMs privados que entienden tu negocio, hablan como tu marca, automatizan tus procesos y funcionan en local con máxima privacidad.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                                <Link
                                    href="/contacto"
                                    className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    Diseña tu IA
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/labs/llm-lab"
                                    className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-all"
                                >
                                    Ver ejemplos (Brains)
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. EXPLANATION SECTION */}
                <section className="py-32 bg-[#050505] border-t border-white/5">
                    <div className="container px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                                    ¿Qué es un LLM privado y por qué <span className="text-[#82ff1f]">cambia tu negocio</span>?
                                </h2>
                            </div>
                            <div className="space-y-6 text-lg text-[#a0a0a0] font-light leading-relaxed">
                                <p>
                                    Imagina un modelo de inteligencia artificial entrenado exclusivamente para tu empresa.
                                    No es un chat genérico; es un cerebro digital que ha leído tus manuales, conoce tus productos,
                                    entiende tu tono de voz y respeta tus protocolos.
                                </p>
                                <p>
                                    Puede leer PDFs, excels, facturas y contratos en segundos. Puede responder a tus clientes
                                    24/7 con precisión absoluta. Puede automatizar tareas administrativas que hoy consumen horas.
                                </p>
                                <p className="text-white font-medium">
                                    Y lo más importante: es 100% privado. Tus datos nunca salen de tu control.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. COMPARISON SECTION */}
                <section className="py-32 bg-black relative">
                    <div className="container px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light mb-4">Privacidad y control total</h2>
                            <p className="text-[#a0a0a0] text-xl">La diferencia entre alquilar inteligencia y ser dueño de ella.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Cloud AI Card */}
                            <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <CloudIcon className="w-24 h-24 text-red-500/20" />
                                </div>
                                <h3 className="text-2xl font-medium mb-2 text-[#808080]">IA en la Nube</h3>
                                <p className="text-sm text-[#666] mb-8 uppercase tracking-wider">ChatGPT, Gemini, Claude (Públicos)</p>

                                <ul className="space-y-4">
                                    {[
                                        "Datos suben a servidores externos",
                                        "No es tu modelo (es alquilado)",
                                        "No puedes afinarlo a tu estilo real",
                                        "Riesgos de privacidad y compliance",
                                        "Sin control de memoria a largo plazo",
                                        "No aprende internamente tu negocio"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#a0a0a0]">
                                            <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Local AI Card */}
                            <div className="p-8 rounded-3xl border border-[#82ff1f]/30 bg-[#0a0a0a] relative overflow-hidden shadow-[0_0_50px_rgba(130,255,31,0.05)]">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <Database className="w-24 h-24 text-[#82ff1f]/20" />
                                </div>
                                <h3 className="text-2xl font-medium mb-2 text-white">IA Local / Privada</h3>
                                <p className="text-sm text-[#82ff1f] mb-8 uppercase tracking-wider">Aether Labs Brains</p>

                                <ul className="space-y-4">
                                    {[
                                        "Los datos nunca salen de tu entorno",
                                        "Tu propio modelo (propiedad intelectual)",
                                        "Aprendizaje continuo sobre tus datos",
                                        "Personalidad de marca 100% fiel",
                                        "Más control, más seguridad",
                                        "Se integra en tus procesos reales"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white">
                                            <Check className="w-5 h-5 text-[#82ff1f] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. BENEFITS SECTION */}
                <section className="py-32 bg-[#050505] border-y border-white/5">
                    <div className="container px-6">
                        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Beneficios reales de tener tu propio LLM</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: "Clock", title: "Ahorro de tiempo", desc: "Procesos que tardaban horas se hacen en segundos." },
                                { icon: "TrendingUp", title: "Reducción de costes", desc: "Necesitas menos personal para tareas repetitivas." },
                                { icon: "MessageSquare", title: "Atención 24/7", desc: "En WhatsApp, web, email o teléfono, sin descanso." },
                                { icon: "SparkleIcon", title: "Calidad de contenido", desc: "Texto, imágenes y vídeo coherentes con la marca." },
                                { icon: "Zap", title: "Decisiones rápidas", desc: "Analiza documentos, datos y contratos al instante." },
                                { icon: "Shield", title: "Privacidad garantizada", desc: "Nada se envía a terceros sin tu permiso explícito." },
                                { icon: "Brain", title: "Expertise sectorial", desc: "Cada Brain está especializado en tu nicho." },
                                { icon: "Cpu", title: "Tecnología sólida", desc: "Base en Gemini 3 + modelos propios + embeddings." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <item.icon className="w-8 h-8 text-[#a0a0a0] mb-4" />
                                    <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                                    <p className="text-[#808080] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. PROCESS SECTION */}
                <section className="py-32 bg-black">
                    <div className="container px-6">
                        <h2 className="text-3xl md:text-4xl font-light mb-20 text-center">Cómo se crea tu IA</h2>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Line */}
                            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                            {[
                                { step: "01", title: "Diagnóstico del negocio", desc: "Analizamos tus flujos de trabajo y puntos de dolor." },
                                { step: "02", title: "Entrenamiento", desc: "Alimentamos al modelo con tus documentos y datos históricos." },
                                { step: "03", title: "Definición de funciones", desc: "Configuramos las tareas específicas que debe automatizar." },
                                { step: "04", title: "Integración y Despliegue", desc: "Conectamos el Brain a tu web, WhatsApp o sistemas internos." },
                            ].map((item, i) => (
                                <div key={i} className={`relative flex items-center gap-8 mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Dot */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-[#1a1a1a] z-10" />

                                    {/* Content */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                        <span className="text-xs font-bold text-[#82ff1f] tracking-widest mb-2 block">PASO {item.step}</span>
                                        <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                                        <p className="text-[#808080]">{item.desc}</p>
                                    </div>
                                    {/* Empty half for desktop layout balance */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. BRAINS INTRO */}
                <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
                    <div className="container px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6">
                                <Layers className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light mb-6">Brains y Minibrains: tu IA especializada</h2>
                            <p className="text-xl text-[#a0a0a0] mb-10 leading-relaxed">
                                En Aether Labs desarrollamos modelos personalizados según el tipo de negocio o la función que necesitas.
                                Los <span className="text-white">Brains</span> cubren un negocio entero.
                                Los <span className="text-white">Minibrains</span> se centran en departamentos concretos.
                            </p>

                            <Link
                                href="/labs/llm-lab"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all hover:scale-105"
                            >
                                Explorar Brains y Minibrains
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-32 bg-black">
                    <div className="container px-6">
                        <div className="max-w-4xl mx-auto p-12 rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#111] to-black text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                                Construimos tu IA. <br />
                                <span className="text-[#808080]">100% adaptada a ti.</span>
                            </h2>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="/contacto"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#e0e0e0] transition-colors"
                                >
                                    Reserva una llamada
                                </Link>
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1a] text-white border border-[#333] rounded-full font-medium text-lg hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-3">
                                    <Bot className="w-5 h-5" />
                                    Hablar con Jason
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Simple icons for local use
function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
    )
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a4 4 0 1 1 .9-7.9 4 4 0 0 1 7.8 1.6 3 3 0 0 1 5.3 6.3Z" />
        </svg>
    )
}

