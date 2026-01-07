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
        title: "Chatbot IA (Widow)",
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
        title: "Funcionalidades internas con IA",
        icon: Cpu,
        description: [
            "En esta fase se incorporan funcionalidades internas basadas en IA directamente dentro del software.",
            "Son mejoras que automatizan procesos concretos y mejoran la operativa diaria de los clubes, reduciendo tareas manuales y mejorando la calidad de la información.",
            "Incluye el reconocimiento automático de DNI, la generación automática de páginas de producto y el uso de IA para estructurar y enriquecer datos internos."
        ],
        cta: "Ver Fase 2",
        color: "#3b82f6"
    },
    {
        number: "3",
        title: "Automatizaciones y agentes IA externos",
        icon: Zap,
        description: [
            "Esta fase agrupa todas las automatizaciones y agentes de IA que no forman parte directa del core del software, pero que apoyan la operación y el crecimiento del negocio.",
            "Incluye procesos administrativos, generación de contenido y herramientas de apoyo a la captación, siempre manteniendo control humano sobre las acciones sensibles.",
            "Se contemplan automatizaciones administrativas, agentes editoriales para noticias del sector y sistemas de apoyo a la prospección."
        ],
        cta: "Ver Fase 3",
        color: "#8b5cf6"
    },
    {
        number: "4",
        title: "IA generativa avanzada (audioguías)",
        icon: Beaker,
        description: [
            "Esta fase está orientada a soluciones de IA generativa más avanzadas, como audioguías o videoguías para proyectos culturales.",
            "Es una fase experimental, que se plantea trabajar mediante pruebas y validación previa antes de una implementación completa.",
            "Esta fase se evalúa de forma independiente y no es prioritaria para el arranque del proyecto."
        ],
        cta: "Ver Fase 4",
        color: "#f59e0b"
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

            {/* 2. INTRODUCTION */}
            <section className="py-20 border-b border-zinc-900">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <motion.div {...fadeInUp} className="space-y-8 bg-zinc-950/50 p-8 md:p-12 rounded-3xl border border-zinc-800">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-xl font-semibold mb-4 text-white">Estrategia de implementación</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Este proyecto abarca diversas soluciones de inteligencia artificial que, aunque complementarias, presentan diferentes niveles de prioridad e impacto.
                                    El desarrollo por fases nos permite:
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {[
                                        "Priorizar las soluciones más críticas",
                                        "Validar cada bloque antes de avanzar",
                                        "Evitar desarrollos innecesarios",
                                        "Mantener un control técnico y económico total"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                            <CheckCircle2 className="w-4 h-4 text-[#82ff1f]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-zinc-400 space-y-4 pt-2">
                                <p>
                                    El objetivo no es implementar todo de golpe, sino construir una base sólida y avanzar paso a paso.
                                </p>
                                <p>
                                    Cada fase tiene sentido por sí misma y aporta valor real al negocio. Esto permite empezar por lo más importante ahora y dejar preparadas las siguientes etapas para cuando tenga sentido activarlas.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

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
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold border"
                                        style={{
                                            borderColor: `${phase.color}33`,
                                            backgroundColor: `${phase.color}11`,
                                            color: phase.color
                                        }}
                                    >
                                        {phase.number}
                                    </div>
                                    {index !== phases.length - 1 && (
                                        <div className="w-px h-full bg-gradient-to-b from-zinc-800 to-transparent mt-4" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className="group relative bg-zinc-950/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="p-3 rounded-xl md:hidden"
                                                style={{ backgroundColor: `${phase.color}11`, color: phase.color }}
                                            >
                                                <phase.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors">
                                                FASE {phase.number} — {phase.title}
                                            </h3>
                                        </div>
                                        {phase.link ? (
                                            <Link href={phase.link}>
                                                <Button
                                                    variant="outline"
                                                    className="rounded-full border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all group/btn"
                                                >
                                                    {phase.cta}
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                variant="outline"
                                                disabled
                                                className="rounded-full border-zinc-900 text-zinc-600 cursor-not-allowed opacity-50"
                                            >
                                                Próximamente
                                            </Button>
                                        )}
                                    </div>

                                    <div className="space-y-4 max-w-3xl">
                                        {phase.description.map((para, i) => (
                                            <p key={i} className="text-zinc-400 text-base md:text-lg leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    {phase.highlight && (
                                        <div className="mt-8 pt-6 border-t border-zinc-900">
                                            <span
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
                                                style={{ borderColor: `${phase.color}44`, color: phase.color, backgroundColor: `${phase.color}08` }}
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
                                <span className="text-white font-medium">Fase actual:</span> La propuesta se centra en comenzar por la <span className="text-[#82ff1f] font-semibold">Fase 1 — Chatbot IA</span>.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}
