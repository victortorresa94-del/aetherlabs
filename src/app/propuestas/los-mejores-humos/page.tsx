"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Zap, Beaker, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const phases = [
    {
        number: "1",
        subtitle: "Chatbot IA (Widow)",
        icon: Bot,
        description: [
            "Esta fase se centra en la implementación de un chatbot interno con IA dentro del software.",
            "El chatbot permitirá resolver dudas técnicas, guiar a los usuarios durante el uso del software y formar a nuevos clientes desde cero.",
            "Es la primera fase porque aporta valor inmediato, reduce carga de soporte y permite diferenciar el software desde el primer momento."
        ],
        highlight: "Fase inicial recomendada para empezar el proyecto.",
        link: "/propuestas/los-mejores-humos/fase1",
        cta: "Ver Fase 1",
        color: "#82ff1f"
    },
    {
        number: "2",
        subtitle: "Funcionalidades internas con IA",
        icon: Cpu,
        description: [
            "Incorporación de funcionalidades internas basadas en IA directamente dentro del software.",
            "Estas mejoras automatizan procesos concretos y mejoran la calidad de la información, como el alta de socios o la generación de contenido estructurado para productos."
        ],
        details: [
            "Reconocimiento automático de DNI",
            "Páginas automáticas de producto"
        ],
        cta: "Ver fase 2",
        link: "/propuestas/los-mejores-humos/fase2",
        color: "#82ff1f"
    },
    {
        number: "3",
        subtitle: "Automatizaciones y agentes IA externos",
        icon: Zap,
        description: [
            "Desarrollo de automatizaciones y agentes de IA que apoyan la operación diaria y el crecimiento del negocio, sin formar parte directa del core del software.",
            "Incluye tareas administrativas, generación de contenido y herramientas de apoyo a la captación, siempre manteniendo control humano sobre los procesos sensibles."
        ],
        details: [
            "Automatizaciones administrativas",
            "Agente de noticias del sector",
            "Prospección y apoyo a ventas (RAMI / LMH)"
        ],
        cta: "Ver fase 3",
        link: "/propuestas/los-mejores-humos/fase3",
        color: "#82ff1f"
    },
    {
        number: "4",
        subtitle: "IA generativa avanzada (audioguías)",
        icon: Beaker,
        description: [
            "Soluciones de IA generativa orientadas a proyectos culturales, como audioguías y videoguías.",
            "Esta fase se plantea como un desarrollo experimental, que se valida mediante pruebas antes de una implementación completa."
        ],
        details: [
            "Esta fase no es prioritaria y se evalúa de forma independiente."
        ],
        cta: "Ver fase 4",
        link: "/propuestas/los-mejores-humos/fase4",
        color: "#82ff1f"
    }
];

export default function ProjectPhasesPage() {
    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#82ff1f]/30">
            {/* 1. HEADER */}
            <header className="py-20 md:py-32 border-b border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,rgba(130,255,31,0.05),transparent_50%)]">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
                    >
                        Estructura del proyecto por fases
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Para asegurar una implementación ordenada, escalable y con control de costes, el proyecto se plantea en fases independientes pero conectadas entre sí.
                    </motion.p>
                </div>
            </header>

            {/* 3. TIMELINE / PHASES */}
            <section className="py-24 relative">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <div className="space-y-24 md:space-y-32">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                className="relative grid md:grid-cols-[120px_1fr] gap-8 md:gap-16 items-start"
                            >
                                {/* Indicator */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold border border-[#82ff1f]/33 bg-[#82ff1f]/11 text-[#82ff1f]"
                                    >
                                        {phase.number}
                                    </div>
                                    {index !== phases.length - 1 && (
                                        <div className="w-px h-full bg-gradient-to-b from-[#82ff1f]/40 to-transparent mt-4" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className="group relative bg-zinc-950/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="p-3 rounded-xl md:hidden bg-[#82ff1f]/11 text-[#82ff1f]"
                                            >
                                                <phase.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-1">
                                                    FASE {phase.number}
                                                </h3>
                                                <span className="text-2xl md:text-3xl font-normal text-zinc-400 leading-tight">
                                                    {phase.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={phase.link || "#"} className="mt-2 md:mt-0">
                                            <Button
                                                variant="outline"
                                                className="rounded-full border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all group/btn"
                                            >
                                                {phase.cta}
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="space-y-4 max-w-3xl">
                                        {phase.description.map((para, i) => (
                                            <p key={i} className="text-zinc-400 text-base md:text-lg leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    {phase.details && (
                                        <div className="mt-8 pt-8 border-t border-zinc-900/50">
                                            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                                                Se han identificado las siguientes posibles soluciones IA:
                                            </h4>
                                            <ul className="space-y-3">
                                                {phase.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm md:text-base text-zinc-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {phase.highlight && (
                                        <div className="mt-8 pt-6 border-t border-zinc-900">
                                            <span
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#82ff1f]/33 text-[#82ff1f] bg-[#82ff1f]/08"
                                            >
                                                <Zap className="w-3 h-3" />
                                                {phase.highlight}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CLOSURE */}
            <footer className="py-32 border-t border-zinc-900 bg-zinc-950">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
                    <motion.div {...fadeInUp}>
                        <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed mb-12">
                            Esta estructura permite avanzar con claridad, sin comprometer recursos antes de tiempo y asegurando que cada fase tenga sentido por sí misma.
                        </p>
                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700">
                            <div className="px-8 py-4 bg-black rounded-full text-zinc-400 text-sm md:text-base">
                                <span className="text-white font-medium">Fase actual:</span> La propuesta se centra en comenzar por la <span className="text-[#82ff1f] font-semibold">FASE 1 — Chatbot IA</span>.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}
