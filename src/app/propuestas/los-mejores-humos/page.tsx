"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Users,
    CheckCircle2,
    Zap,
    BookOpen,
    MessageSquare,
    ShieldCheck,
    BrainCircuit,
    Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArchitectureDiagram from "@/components/propuestas/architecture-diagram";
import Image from "next/image";

export default function LosMejoresHumosProposal() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans">

            {/* 0. Top Navigation (Mockup) */}
            <nav className="border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-bold tracking-tight text-sm uppercase">Los Mejores Humos</span>
                        <span className="text-zinc-700">/</span>
                        <Badge variant="outline" className="border-[#82ff1f] text-[#82ff1f] bg-[#82ff1f]/10">Fase 1: Widow</Badge>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <Button variant="ghost" className="text-zinc-400 hover:text-white h-8 text-xs font-medium bg-zinc-900/50">Fase 1: Chatbot</Button>
                        <Button variant="ghost" disabled className="text-zinc-700 h-8 text-xs font-medium">Fase 2: DNI</Button>
                        <Button variant="ghost" disabled className="text-zinc-700 h-8 text-xs font-medium">Fase 3: Auto</Button>
                        <Button variant="ghost" disabled className="text-zinc-700 h-8 text-xs font-medium">Fase 4: Media</Button>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section (More Corporate/Premium) */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#82ff1f]/5 blur-[120px] -z-10" />

                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase">Propuesta de Implementación IA</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tighter text-white mb-6">
                            Chatbot <span className="text-zinc-500">Widow</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed border-l-2 border-[#82ff1f] pl-6">
                            Inteligencia artificial integrada para eliminar la carga operativa de soporte y formación.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Context Banner (Minimalist) */}
            <section className="border-y border-zinc-900 bg-zinc-950">
                <div className="container px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 max-w-2xl">
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Situación Actual</h3>
                        <p className="text-lg md:text-xl text-zinc-300">
                            El equipo humano invierte demasiadas horas en <span className="text-white font-medium">dudas repetitivas</span>. Aunque hay FAQs, la atención manual sigue siendo el cuello de botella.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-red-400 bg-red-500/5 px-6 py-4 rounded-xl border border-red-500/10">
                        <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">Soporte Sobrecargado</span>
                    </div>
                </div>
            </section>

            {/* 3. Benefits & What is Widow (Merged) */}
            <section className="py-24 bg-black">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold mb-6">La Solución: Widow</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Widow no es un simple chat de preguntas y respuestas. Es un <span className="text-white font-medium">agente de conocimiento</span> integrado en vuestro software que conoce vuestros manuales, procesos y "trucos" mejor que nadie.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Autonomía Total", desc: "El usuario resuelve sus dudas sin salir del software." },
                                    { title: "Reducción de Costes", desc: "Menos horas humanas dedicadas a explicar lo básico." },
                                    { title: "Disponibilidad 24/7", desc: "Formación y ayuda disponible cualquier día a cualquier hora." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                                        <CheckCircle2 className="w-5 h-5 text-[#82ff1f] mt-1" />
                                        <div>
                                            <h4 className="text-white font-medium">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="relative">
                            <div className="absolute inset-0 bg-[#82ff1f]/20 blur-[60px] rounded-full opacity-20" />
                            <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                                <Image
                                    src="/images/widow-robot.jpg"
                                    alt="Widow Robot"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                                        <span className="text-[#82ff1f] text-xs font-mono tracking-widest uppercase">Widow System Online</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg">Tu Nuevo Empleado Digital</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Functions & Knowledge (Expanded v3) */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Capacidades Extendidas</h2>
                        <p className="text-zinc-400">Lo que Widow puede hacer por tu negocio.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "Soporte Nivel 1", desc: "Resuelve instantáneamente el 80% de las dudas técnicas repetitivas." },
                            { icon: BookOpen, title: "Formación Interactiva", desc: "Guía a los empleados paso a paso en el uso de herramientas complejas." },
                            { icon: ShieldCheck, title: "Diagnóstico Previo", desc: "Antes de escalar a un humano, recopila los datos técnicos del problema." },
                            { icon: Users, title: "Onboarding 24/7", desc: "Recibe y capacita a nuevos usuarios fuera del horario laboral." },
                            { icon: MessageSquare, title: "Contexto Conversacional", desc: "Entiende referencias a preguntas anteriores y mantiene el hilo." },
                            { icon: Lock, title: "Garantía de Seguridad", desc: "Solo responde con información aprobada y documentada." },
                            { icon: BrainCircuit, title: "Base de Conocimiento", desc: "Se alimenta de manuales, PDFs y FAQs existentes." },
                            { icon: CheckCircle2, title: "Escalado Inteligente", desc: "Sabe cuándo rendirse y transferir el ticket a un humano." }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="group p-6 rounded-xl border border-zinc-900 hover:border-[#82ff1f]/50 bg-zinc-950 transition-colors"
                            >
                                <item.icon className="w-8 h-8 text-zinc-600 group-hover:text-[#82ff1f] mb-4 transition-colors" />
                                <h3 className="text-base font-bold mb-2 text-zinc-200 group-hover:text-white">{item.title}</h3>
                                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Technical Architecture */}
            <section className="py-24 bg-black overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,255,31,0.03),transparent_70%)]" />
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Arquitectura Técnica Segura</h2>
                            <p className="text-zinc-400 max-w-xl">
                                Diseñada para ser robusta, escalable y totalmente controlada. El cerebro IA vive en una capa intermedia segura, nunca en el navegador.
                            </p>
                        </div>
                        <Badge variant="outline" className="border-zinc-800 text-zinc-400">
                            <BrainCircuit className="w-3 h-3 mr-2" />
                            DeepSeek AI Core
                        </Badge>
                    </div>

                    <ArchitectureDiagram />

                </div>
            </section>

            {/* 6. Requirements */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Qué necesitamos para empezar</h2>
                        <p className="text-zinc-400">
                            Para construir el cerebro de Widow, necesitamos alimentarlo con vuestro conocimiento.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-black p-8 rounded-2xl border border-zinc-800">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-[#82ff1f]" />
                                Documentación
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>Manuales de usuario (PDF, Docs)</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>FAQs o listado de preguntas frecuentes</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>Vídeos formativos existentes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black p-8 rounded-2xl border border-zinc-800">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-[#82ff1f]" />
                                Accesos y Definiciones
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>Acceso visual al software (Demo o Test)</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>Definición de "Tono de Voz" (Forma/Cercano)</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2" />
                                    <span>Lista de temas "Prohibidos" (Blacklist)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Investment */}
            <section className="py-24 bg-black border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/10 blur-[100px]" />

                        <div className="grid md:grid-cols-2">
                            <div className="p-12 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">Inversión Fase 1</h2>
                                    <p className="text-zinc-400">Proyecto llave en mano</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300">Desarrollo del Cerebro IA</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300">Integración de Widget</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300">Puesta en Marcha y Tuning</span>
                                    </div>
                                </div>
                                <Button className="bg-[#82ff1f] text-black hover:bg-[#72e61b] rounded-full px-8 py-6 text-lg font-bold w-full md:w-auto">
                                    Aprobar Presupuesto
                                </Button>
                            </div>
                            <div className="bg-zinc-900/50 p-12 flex flex-col justify-center items-center border-l border-zinc-900 border-t md:border-t-0">
                                <span className="text-zinc-500 font-mono mb-2">PAGO ÚNICO</span>
                                <span className="text-6xl font-bold text-white tracking-tight">1.000€</span>
                                <span className="text-zinc-500 text-sm mt-4 text-center max-w-xs">
                                    *No incluye costes de uso de API (aprox 10-20€/mes según volumen)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
