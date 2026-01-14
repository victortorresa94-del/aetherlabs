"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Bot,
    Users,
    CheckCircle2,
    Zap,
    BookOpen,
    MessageSquare,
    ShieldCheck,
    BrainCircuit,
    Lock,
    Coins,
    Server,
    Activity,
    ChevronDown,
    Database,
    FileText,
    Clock,
    TrendingUp,
    Sparkles,
    Rocket,
    PiggyBank,
    BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArchitectureDiagram from "@/components/propuestas/architecture-diagram";
import WidowChat from "@/components/propuestas/widow-chat";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function LosMejoresHumosProposal() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 12; // Added Business Impact Slide
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll for nav visibility
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const navPointerEvents = useTransform(scrollY, (y) => y > 100 ? "none" : "auto");

    // Intersection Observer for slide counting
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const slideId = Number(entry.target.getAttribute('data-slide'));
                    if (slideId) setCurrentSlide(slideId);
                }
            });
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('section[data-slide]');
        sections.forEach(s => observer.observe(s));

        return () => sections.forEach(s => observer.unobserve(s));
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
    };

    return (
        <div ref={containerRef} className="h-screen w-full bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* 0. Dynamic Top Navigation */}
            <motion.nav
                style={{ opacity: navOpacity, pointerEvents: navPointerEvents }}
                className="fixed top-0 inset-x-0 z-50 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md transition-all duration-500"
            >
                <div className="container px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                        <span className="font-bold tracking-tight text-xs md:text-sm uppercase truncate max-w-[120px] md:max-w-none">Los Mejores Humos</span>
                        <span className="text-zinc-700">/</span>
                        <Badge variant="outline" className="border-[#82ff1f] text-[#82ff1f] bg-[#82ff1f]/10 text-[10px] md:text-sm">Propuesta</Badge>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <span className="text-xs text-zinc-500">Desliza para navegar</span>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Slide Counter */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-3 py-1 md:px-4 md:py-2 font-mono text-xs md:text-sm text-zinc-400">
                <span className="text-white font-bold">{String(currentSlide).padStart(2, '0')}</span>
                <span className="mx-1 md:mx-2 text-zinc-600">/</span>
                {String(totalSlides).padStart(2, '0')}
            </div>

            {/* SLIDE 1: Hero Section */}
            <section data-slide="1" className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#82ff1f]/5 blur-[120px] -z-10" />

                <div className="container px-4 md:px-6 relative z-10 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto md:mx-0"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-[#82ff1f] font-mono text-[10px] md:text-sm tracking-widest uppercase">Propuesta de Implementación • Fase 1</span>
                        </div>

                        <h1 className="font-light text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-white">
                            <span className="block text-white/90">Chatbot Conversacional</span>
                            <span className="block font-semibold text-white">Impulsado por IA</span>
                        </h1>

                        <p className="text-base md:text-xl font-normal max-w-2xl text-zinc-400 leading-relaxed mx-auto md:mx-0">
                            Inteligencia artificial que entiende, aprende y resuelve dudas operativas para eliminar el cuello de botella en soporte y formación.
                        </p>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 opacity-50"
                        >
                            <span className="text-xs uppercase tracking-widest">Desliza</span>
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SLIDE 2: Context Banner */}
            <section data-slide="2" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-y border-zinc-900 relative py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <motion.div {...fadeInUp} className="space-y-6 md:space-y-8 text-center md:text-left">
                            <Badge variant="outline" className="text-[#82ff1f] border-[#82ff1f]/20 bg-[#82ff1f]/5">Situación Actual</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                ¿Por qué un Chatbot IA? <br />
                                <span className="text-zinc-500">La necesidad de evolucionar.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                                Actualmente, el equipo de Los Mejores Humos invierte demasiadas horas en responder dudas repetitivas que frenan el crecimiento. Un "upgrade" tecnológico no solo soluciona esto, sino que posiciona a la marca como líder innovador frente a la competencia.
                            </p>
                        </motion.div>

                        <div className="grid gap-4 md:gap-6">
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-black p-5 md:p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-lg"><ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg">Saturación de Soporte</h4>
                                    <p className="text-zinc-500 mt-1 text-sm md:text-base">El mismo personal respondiendo lo mismo una y otra vez.</p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-black p-5 md:p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-lg"><Activity className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg">Onboarding Lento</h4>
                                    <p className="text-zinc-500 mt-1 text-sm md:text-base">Los nuevos clientes tardan en ser productivos.</p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-black p-5 md:p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-lg"><Zap className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg">Oportunidad de Mercado</h4>
                                    <p className="text-zinc-500 mt-1 text-sm md:text-base">Diferenciarse de la competencia ofreciendo tecnología punta 24/7.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: Benefits & Widow */}
            <section data-slide="3" className="min-h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-8 items-center">
                        {/* 1. Description */}
                        <motion.div {...fadeInUp} className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 md:mb-6">
                                <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-[#82ff1f] text-sm md:text-base uppercase tracking-wider font-bold">La Solución</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">Conoce a Widow</h2>
                            <p className="text-zinc-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Un <span className="text-white font-medium">agente de conocimiento</span> que resuelve dudas sobre cuotas, stock, pedidos y operativa del club en segundos.
                            </p>

                            <ul className="space-y-3 md:space-y-4 text-left inline-block">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                    <span className="text-zinc-300 text-sm md:text-base">Autonomía para el equipo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                    <span className="text-zinc-300 text-sm md:text-base">Resuelve tickets básicos</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                    <span className="text-zinc-300 text-sm md:text-base">Entrenado con vuestras FAQs</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* 2. Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative flex justify-center w-full"
                        >
                            <div className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-[380px] overflow-hidden">
                                <Image
                                    src="/images/widow-robot.jpg"
                                    alt="Widow Robot"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                {/* Soft glow behind to make it pop without a frame */}
                                <div className="absolute inset-0 bg-[#82ff1f]/5 blur-[60px] -z-10 rounded-full" />
                            </div>
                        </motion.div>

                        {/* 3. Live Chat */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-full flex justify-center lg:justify-end"
                        >
                            <WidowChat />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: Business Impact (NEW) */}
            <section data-slide="4" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900 py-12 md:py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#82ff1f] via-transparent to-transparent opacity-20" />
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="font-light text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em] mb-4 md:mb-6 text-white/90">
                            Impacto directo en el día a día
                        </h2>
                        <p className="text-zinc-400 max-w-3xl mx-auto text-base md:text-xl font-light">
                            La implementación del chatbot Widow no es solo una mejora técnica, es una mejora operativa y comercial medible desde el primer mes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* Block 1: Support Load */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Carga de Soporte</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                El chatbot puede resolver automáticamente entre un 60% y 80% de las consultas repetitivas, reduciendo emails y mensajes básicos.
                            </p>
                            <div className="text-2xl md:text-3xl font-light text-white tracking-tight">60–80% <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">menos consultas repetitivas</span></div>
                        </div>

                        {/* Block 2: Time Savings */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Ahorro de Tiempo</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                Cada consulta resuelta ahorra unos 5 min. Con solo 20 consultas diarias, el impacto es directo.
                            </p>
                            <div className="text-2xl md:text-3xl font-light text-white tracking-tight">≈ 33h <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">5' x 20 tickets/día x 20 días</span></div>
                        </div>

                        {/* Block 3: UX */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Experiencia Usuario</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                Respuestas inmediatas, disponibles 24/7, sin filtrar manuales o vídeos. Menos frustración y errores.
                            </p>
                            <div className="text-2xl md:text-3xl font-light text-white tracking-tight">24/7 <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">disponibilidad total</span></div>
                        </div>

                        {/* Block 4: Onboarding */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <Rocket className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Onboarding</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                Nuevos clientes aprenden a usar el software desde el primer día sin depender de formación manual constante.
                            </p>
                            <div className="text-lg font-medium text-white">Menos fricción <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">adaptación inmediata</span></div>
                        </div>

                        {/* Block 5: Differentiation */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Diferenciación</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                Tu software destaca con IA integrada, aportando una percepción de producto moderno y avanzado.
                            </p>
                            <div className="text-lg font-medium text-white">Ventaja competitiva <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">producto premium</span></div>
                        </div>

                        {/* Block 6: Cost */}
                        <div className="bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-[#82ff1f]/30 transition-colors group">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="bg-[#82ff1f]/10 p-2 md:p-3 rounded-xl group-hover:bg-[#82ff1f]/20 transition-colors">
                                    <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                </div>
                                <h3 className="font-medium text-white text-base md:text-lg">Coste Controlado</h3>
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed font-light">
                                Coste operativo bajo y muy inferior al coste de ampliar soporte humano. Escalabilidad sin fronteras.
                            </p>
                            <div className="text-lg font-medium text-white">Escalable <span className="text-[10px] md:text-xs font-normal text-zinc-500 block mt-1">sin contratar personal</span></div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="mt-12 md:mt-16 max-w-4xl mx-auto text-center border-t border-zinc-900 pt-8 md:pt-10 px-4">
                        <p className="text-white text-lg md:text-2xl font-light leading-relaxed">
                            "Widow no sustituye al equipo humano. Elimina las preguntas repetitivas para que el equipo pueda centrarse en lo que realmente <span className="text-[#82ff1f] font-normal">aporta valor</span>."
                        </p>
                    </div>
                </div>
            </section>

            {/* SLIDE 5: Capabilities */}
            <section data-slide="5" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4">Capacidades Extendidas</h2>
                        <p className="text-zinc-400 text-base md:text-xl">Potencia real desde el día 1.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { icon: Zap, title: "Soporte Nivel 1", desc: "Resuelve instantáneamente el 80% de las dudas técnicas repetitivas." },
                            { icon: BookOpen, title: "Formación Interactiva", desc: "Guía a los empleados paso a paso en el uso de herramientas." },
                            { icon: ShieldCheck, title: "Diagnóstico Previo", desc: "Recopila datos técnicos antes de escalar a un humano." },
                            { icon: Users, title: "Onboarding 24/7", desc: "Capacita a nuevos usuarios fuera del horario laboral." },
                            { icon: MessageSquare, title: "Contexto Real", desc: "Entiende referencias a preguntas anteriores (memoria)." },
                            { icon: Lock, title: "Seguridad Garantizada", desc: "Solo responde con información aprobada y documentada." },
                            { icon: BrainCircuit, title: "Base Vectorial", desc: "Alimentado con manuales, PDFs y FAQs existentes." },
                            { icon: CheckCircle2, title: "Escalado Inteligente", desc: "Sabe cuándo transferir el ticket a un humano." }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={i}
                                className="group p-5 md:p-6 rounded-xl border border-zinc-900 hover:border-[#82ff1f]/50 bg-black transition-all hover:-translate-y-1"
                            >
                                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-600 group-hover:text-[#82ff1f] mb-4 transition-colors" />
                                <h3 className="text-sm md:text-base font-bold mb-2 text-zinc-200 group-hover:text-white">{item.title}</h3>
                                <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 6: Architecture */}
            <section data-slide="6" className="min-h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden py-12 md:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,255,31,0.03),transparent_70%)]" />
                <div className="container px-4 md:px-6 h-full flex flex-col justify-center">
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4">Arquitectura Técnica</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-xs md:text-base">
                            El cerebro IA vive en una capa intermedia segura, protegiendo vuestro core PHP.
                        </p>
                    </div>

                    <div className="bg-zinc-950/50 rounded-2xl md:rounded-3xl border border-zinc-800 p-2 md:p-8 backdrop-blur-sm overflow-x-auto">
                        <div className="min-w-[600px] md:min-w-0">
                            <ArchitectureDiagram />
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 7: Technical Cost Detail (EXPANDED) */}
            <section data-slide="7" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center relative border-t border-zinc-900 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                        {/* Left: Explanation & Pricing */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Coste de Inteligencia Artificial</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    El chatbot funciona mediante el consumo de <strong>tokens</strong> (unidades de texto). El coste depende directamente del volumen de uso y la complejidad de las respuestas.
                                </p>
                                <div className="border-l-4 border-[#82ff1f] pl-6 py-1">
                                    <p className="text-white font-medium text-lg">
                                        Modelo elegido: <span className="text-[#82ff1f]">DeepSeek-V3</span>
                                    </p>
                                    <p className="text-zinc-500 text-sm">El modelo más eficiente calidad/precio del mercado actual.</p>
                                </div>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl">
                                <h4 className="text-white font-bold mb-6 flex items-center gap-3 text-lg">
                                    <Coins className="w-5 h-5 text-[#82ff1f]" />
                                    Precios de Mercado (1M tokens)
                                </h4>
                                <ul className="space-y-4 text-sm text-zinc-400">
                                    <li className="flex justify-between items-center">
                                        <span>Entrada (Cache Hit)</span>
                                        <span className="text-white font-mono bg-zinc-800 px-2 py-0.5 rounded">0,026€</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Entrada (Normal)</span>
                                        <span className="text-white font-mono bg-zinc-800 px-2 py-0.5 rounded">0,26€</span>
                                    </li>
                                    <li className="flex justify-between items-center border-t border-zinc-700 pt-3">
                                        <span className="text-[#82ff1f]">Salida (Generado)</span>
                                        <span className="text-[#82ff1f] font-bold font-mono text-lg">0,39€</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-center text-[#82ff1f] font-mono text-[10px] mt-4 uppercase tracking-widest">
                                1 MILLON DE TOKENS : 750.000 PALABRAS ≈ 0,40€
                            </p>
                        </div>

                        {/* Right: Examples & Scenarios */}
                        <div className="w-full lg:w-2/3 space-y-8">

                            {/* Examples */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-[#82ff1f]" /> Ejemplos de Consumo Real
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-black border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-colors">
                                        <div className="text-zinc-500 text-[10px] font-bold uppercase mb-3 tracking-wider">Frase Corta (~20 tokens)</div>
                                        <p className="text-[#82ff1f] text-sm italic font-medium">"¿Dónde puedo subir un producto?"</p>
                                        <div className="mt-3 text-[10px] text-zinc-600 text-right">Coste insignificante</div>
                                    </div>
                                    <div className="bg-black border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-colors">
                                        <div className="text-zinc-500 text-[10px] font-bold uppercase mb-3 tracking-wider">Respuesta Breve (~400 tokens)</div>
                                        <p className="text-zinc-300 text-sm italic">"Para subir un producto ve a Inventario &gt; Añadir. Rellena nombre, variedad y precio..."</p>
                                        <div className="mt-3 text-[10px] text-zinc-600 text-right">~0.0001$</div>
                                    </div>
                                    <div className="bg-black border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-colors col-span-1 md:col-span-3 lg:col-span-1">
                                        <div className="text-zinc-500 text-[10px] font-bold uppercase mb-3 tracking-wider">Compleja (~1k tokens)</div>
                                        <p className="text-zinc-300 text-sm italic">"Explicación paso a paso de cómo configurar la impresora de tickets, incluyendo la instalación de drivers, configuración de puertos y pruebas de impresión final para asegurar que el logotipo sale centrado..."</p>
                                        <div className="mt-3 text-[10px] text-zinc-600 text-right">~0.0004$</div>
                                    </div>
                                </div>
                            </div>

                            {/* Projections */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-[#82ff1f]" /> Proyección Mensual Estimada
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Low */}
                                    <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/20 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                                        <h4 className="text-zinc-400 font-bold mb-1">Bajo</h4>
                                        <p className="text-xs text-zinc-600 mb-4">1.000 consultas/mes</p>
                                        <div className="text-3xl font-bold text-white">≈ 2€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                                    </div>

                                    {/* Medium */}
                                    <div className="bg-zinc-900/50 p-6 rounded-2xl border border-[#82ff1f]/30 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 rounded-full -mr-12 -mt-12 blur-2xl transition-opacity group-hover:opacity-100" />
                                        <h4 className="text-white font-bold mb-1">Medio (Normal)</h4>
                                        <p className="text-xs text-[#82ff1f] mb-4">5.000 consultas/mes</p>
                                        <div className="text-4xl font-bold text-white">≈ 10-15€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                                        <p className="text-[10px] text-zinc-400 mt-2">Uso activo diario</p>
                                    </div>

                                    {/* High */}
                                    <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                                        <h4 className="text-zinc-400 font-bold mb-1">Alto</h4>
                                        <p className="text-xs text-amber-600 mb-4">15.000+ consultas</p>
                                        <div className="text-3xl font-bold text-white">≈ 35€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                                        <p className="text-[10px] text-zinc-500 mt-2">Uso masivo 24/7</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-zinc-500 italic mt-4 text-center bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                                Estos costes son estimados y dependen del uso real. Se facturará el consumo exacto de la API, sin margen añadido por gestión en la opción de pago directo.
                            </p>
                        </div>
                    </div>

                    {/* New Full Width Banner */}
                    <div className="mt-12 pt-8 border-t border-zinc-900">
                        <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
                                    <span className="text-[#82ff1f]">Ejemplo Práctico</span> de Cálculo
                                </h4>
                                <p className="text-zinc-400 text-sm">
                                    1.000 consultas/mes × 5.000 tokens <span className="text-zinc-600 text-xs">(5 respuestas/consulta)</span> = 5.000.000 tokens
                                </p>
                            </div>
                            <div className="flex bg-black px-6 py-3 rounded-xl border border-zinc-800 items-baseline gap-2">
                                <span className="text-zinc-500 text-xs uppercase font-bold mr-2">Coste Aprox</span>
                                <span className="text-3xl font-bold text-[#82ff1f]">≈ 2,10€</span>
                                <span className="text-zinc-500 text-sm">/mes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 8: Infrastructure Detail (NEW) */}
            <section data-slide="8" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center py-12 md:py-20 relative border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="mb-8 md:mb-10 text-center">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400 mb-4">Desglose Técnico</Badge>
                        <h2 className="text-2xl md:text-4xl font-bold">Infraestructura Necesaria</h2>
                        <p className="text-zinc-500 mt-2 max-w-xl mx-auto text-xs md:text-sm">Coste mensual real de los servicios que mantienen el chatbot en producción.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {/* Backend */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Server className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-white">20€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Backend Node.js</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">API / "Cerebro" del chatbot</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">VERCEL PRO</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Ejecución del chat en la nube</li>
                                <li>• Respuesta ultrarrápida (Edge)</li>
                                <li>• Sin servidores que mantener</li>
                            </ul>
                        </div>

                        {/* Database */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Database className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-white">25€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Base de Datos</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">PostgreSQL gestionado</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">SUPABASE PRO</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Gestión de usuarios y permisos</li>
                                <li>• Copias de seguridad diarias</li>
                                <li>• Panel de control visual</li>
                            </ul>
                        </div>

                        {/* Vector DB */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Vector Database</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">Memoria del conocimiento</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">SUPABASE VECTORS</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Incluido en Supabase Pro</li>
                                <li>• FAQs, manuales, docs</li>
                                <li>• Búsqueda semántica</li>
                                <li>• Respuestas con contexto</li>
                            </ul>
                        </div>

                        {/* Storage */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-zinc-400">0-5€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Storage Archivos</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">PDFs, documentos, logs</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">SUPABASE STORAGE</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Alojamiento de PDFs/Docs</li>
                                <li>• Copias de seguridad de manuales</li>
                                <li>• Acceso rápido y seguro</li>
                            </ul>
                        </div>

                        {/* Auth */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Lock className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Auth & Seguridad</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">Control de acceso</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">SUPABASE AUTH</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Protección de la API</li>
                                <li>• Sistemas anti-abuso y límites</li>
                                <li>• Gestión segura de claves</li>
                            </ul>
                        </div>

                        {/* Logs */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Logs & Monitorización</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">Errores, llamadas, caídas</p>
                            <div className="text-[#82ff1f] text-xs font-bold mb-3 uppercase tracking-wider">VERCEL LOGS</div>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Historial de errores</li>
                                <li>• Alerta de caídas</li>
                                <li>• Monitorización en tiempo real</li>
                            </ul>
                        </div>

                        {/* Domain */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#82ff1f]" />
                                <span className="text-lg md:text-xl font-bold text-zinc-500">0-2€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Dominio Técnico</h4>
                            <p className="text-zinc-500 text-[10px] md:text-xs mb-3">api.aetherlabs.es</p>
                            <ul className="text-[10px] md:text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Dirección web profesional</li>
                                <li>• Certificados SSL seguros</li>
                                <li>• Mejor reputación técnica</li>
                            </ul>
                        </div>

                        {/* Total Summary Card */}
                        <div className="bg-zinc-900/50 p-5 rounded-xl border border-[#82ff1f]/20 relative overflow-hidden sm:col-span-2 md:col-span-1">
                            <div className="absolute inset-0 bg-[#82ff1f]/5 blur-2xl" />
                            <div className="relative z-10">
                                <h4 className="font-bold text-[#82ff1f] text-xs uppercase tracking-wider mb-2">Total Infraestructura</h4>
                                <div className="text-3xl font-bold text-white mb-2">50€ aprox<span className="text-sm font-normal text-zinc-500">/mes</span></div>
                                <p className="text-xs text-zinc-500">Sin incluir tokens de IA (10-50€ adicionales)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 9: Roadmap / Timeline (NEW) */}
            <section data-slide="9" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400 mb-4">Roadmap de Implementación</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cómo implementamos a Widow</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">Cuatro semanas para transformar la atención al cliente con IA.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-10" />

                        {[
                            {
                                week: "Semana 1",
                                title: "Preparación y Entendimiento",
                                desc: "Recopilación de documentación, análisis de consultas reales y definición del tono y límites.",
                                items: [
                                    "Recopilación de documentación (FAQs, manuales)",
                                    "Revisión de consultas reales de soporte",
                                    "Definición de tono, límites, comportamiento",
                                    "Diseño del comportamiento (respuesta vs humano)"
                                ]
                            },
                            {
                                week: "Semana 2",
                                title: "Construcción y Entrenamiento",
                                desc: "Configuración de la base de conocimiento y enseñanza del 'cerebro' del chatbot.",
                                items: [
                                    "Configuración de la infraestructura",
                                    "Entrenamiento del agente",
                                    "Configuración de la Base de Conocimiento",
                                    "Definición de prompts internos y reglas",
                                    "Conversión de contenidos a formato entrenable"
                                ]
                            },
                            {
                                week: "Semana 3",
                                title: "Integración Técnica",
                                desc: "Desarrollo del widget, conexión segura y pruebas dentro del entorno PHP.",
                                items: [
                                    "Desarrollo del widget del chatbot",
                                    "Integración mediante iframe/componente",
                                    "Conexión segura con infraestructura externa",
                                    "Pruebas de funcionamiento en entorno PHP",
                                    "Pruebas de funcionamiento dentro del software"
                                ]
                            },
                            {
                                week: "Semana 4",
                                title: "Pruebas y Optimización",
                                desc: "Validación con casos reales, ajustes finales de respuestas y puesta en producción.",
                                items: [
                                    "Pruebas con casos reales de usuarios",
                                    "Ajustes de respuestas confusas o incompletas",
                                    "Optimización de costes y tiempos",
                                    "Preparación para uso continuo y producción",
                                    "Detección de errores y nuevas posibles preguntas y respuestas"
                                ]
                            }
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black border border-zinc-800 p-6 rounded-2xl relative group hover:border-zinc-700 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400 mb-4 md:absolute md:-top-4 md:left-1/2 md:-translate-x-1/2 md:bg-black z-10 group-hover:border-[#82ff1f] group-hover:text-[#82ff1f] transition-colors">
                                    {i + 1}
                                </div>
                                <div className="text-[#82ff1f] text-xs font-bold uppercase tracking-wider mb-2">{phase.week}</div>
                                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{phase.title}</h3>
                                <ul className="text-zinc-500 text-xs space-y-2">
                                    {phase.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <div className="w-1 h-1 bg-zinc-600 rounded-full mt-1.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 10: Investment (Final) */}
            <section data-slide="10" className="min-h-screen w-full snap-start bg-black flex items-center justify-center relative border-t border-zinc-900 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/10 blur-[100px]" />

                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12 space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Inversión Fase 1</h2>
                                    <p className="text-zinc-400 text-sm md:text-base">Proyecto llave en mano</p>
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300 text-sm md:text-base">Desarrollo del Cerebro IA</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300 text-sm md:text-base">Integración de Widget</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300 text-sm md:text-base">Puesta en Marcha y Tuning</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#82ff1f]" />
                                        <span className="text-zinc-300 text-sm md:text-base">Revisión y optimización</span>
                                    </div>
                                </div>
                                <Link href="https://wa.me/34627281459?text=Hola%20Víctor!%20He%20revisado%20la%20propuesta%20de%20la%20Fase%201%20para%20Los%20Mejores%20Humos%20y%20me%20gustaría%20aprobar%20el%20presupuesto%20para%20empezar." target="_blank" className="w-full md:w-auto mt-4 inline-block">
                                    <Button className="bg-[#82ff1f] text-black hover:bg-[#72e61b] rounded-full px-8 py-5 md:py-6 text-base md:text-lg font-bold w-full">
                                        Aprobar Presupuesto
                                    </Button>
                                </Link>
                            </div>
                            <div className="bg-zinc-900/50 p-8 md:p-12 flex flex-col justify-center items-center border-l-0 md:border-l border-zinc-900 border-t md:border-t-0">
                                <span className="text-zinc-500 font-mono text-[10px] md:text-xs mb-2 uppercase tracking-widest">PAGO ÚNICO</span>
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">1.200€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 11: Maintenance & Infra - Two Options */}
            <section data-slide="11" className="min-h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden py-12 md:py-20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f]/50 to-transparent" />
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4">Mantenimiento Mensual</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">Dos opciones para gestionar la infraestructura del chatbot según vuestras preferencias.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Option A: Self-Managed */}
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 md:p-8 relative">
                            <div className="mb-6">
                                <span className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest">Opción A</span>
                                <h3 className="text-2xl font-bold text-white mt-2">Autogestión</h3>
                                <p className="text-zinc-500 text-sm mt-2">Vosotros gestionáis las cuentas de los proveedores directamente.</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Pagáis directamente a Vercel, Supabase, etc.",
                                    "Control total de vuestras facturas",
                                    "Configuración inicial incluida",
                                    "Formación para gestión básica"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-zinc-400 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-zinc-800 pt-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-bold text-white">50-70€</span>
                                    <span className="text-zinc-500">/mes aprox.</span>
                                </div>
                                <p className="text-zinc-600 text-xs mt-2">Coste real de proveedores. Sin margen.</p>
                            </div>

                            <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                <p className="text-amber-400 text-xs font-medium flex items-center gap-2">
                                    <Activity className="w-4 h-4" />
                                    Cualquier ajuste, mejora o incidencia se factura aparte
                                </p>
                            </div>
                        </div>

                        {/* Option B: Fully Managed (Recommended) */}
                        <div className="bg-zinc-900/50 border-2 border-[#82ff1f]/30 rounded-3xl p-6 md:p-8 relative shadow-[0_0_60px_rgba(130,255,31,0.05)]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#82ff1f] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider w-max">
                                Recomendado
                            </div>

                            <div className="mb-6">
                                <span className="text-[#82ff1f] font-mono text-[10px] md:text-xs uppercase tracking-widest">Opción B</span>
                                <h3 className="text-2xl font-bold text-white mt-2">Todo Gestionado</h3>
                                <p className="text-zinc-400 text-sm mt-2">Nosotros nos encargamos de absolutamente todo.</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Pago y gestión de todos los proveedores",
                                    "Consumo de IA (Tokens) incluido",
                                    "Monitorización y ajustes continuos",
                                    "Soporte técnico directo ilimitado",
                                    "Sin sorpresas ni facturas extra"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-[#82ff1f] mt-0.5 flex-shrink-0" />
                                        <span className="text-zinc-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-zinc-700 pt-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-white">120€</span>
                                    <span className="text-zinc-500">/mes</span>
                                </div>
                                <p className="text-zinc-500 text-xs mt-2">Precio cerrado. Todo incluido.</p>
                                <div className="mt-4 bg-[#82ff1f]/10 p-3 rounded-lg border border-[#82ff1f]/20">
                                    <p className="text-[#82ff1f] text-xs font-bold text-center">
                                        🎁 Primer mes incluido en el precio inicial
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-[10px] md:text-xs text-zinc-500 text-center">
                                * Recomendamos contratar todo gestionado durante al menos los 3 primeros meses
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SLIDE 12: Requirements (Moved here) */}
            <section data-slide="12" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Qué necesitamos para empezar</h2>
                        <p className="text-zinc-400 text-sm md:text-base px-4">
                            Para construir el cerebro de Widow, necesitamos alimentarlo con vuestro conocimiento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
                        <div className="bg-black p-6 md:p-8 rounded-2xl border border-zinc-800">
                            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-[#82ff1f]" />
                                Documentación
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">Manuales de usuario (PDF, Docs)</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">FAQs o listado de preguntas frecuentes</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">Vídeos formativos existentes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black p-6 md:p-8 rounded-2xl border border-zinc-800">
                            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-[#82ff1f]" />
                                Accesos y Definiciones
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">Acceso visual al software (Demo o Test)</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">Política de registro de datos de clientes</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                                    <span className="text-sm md:text-base">Lista de temas "Prohibidos" (Blacklist)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

            {/* SLIDE 13: FAQ Section */}
            <section data-slide="13" className="min-h-screen w-full snap-start bg-zinc-950 py-12 md:py-20 border-t border-zinc-900">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Preguntas frecuentes (FAQ)</h2>
                        <p className="text-zinc-500 text-sm md:text-base px-6">Aspectos técnicos y operativos</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {
                                q: "¿Qué tecnología hay detrás del chatbot?",
                                a: "El sistema se compone de un widget frontend (React), un backend independiente (Node.js) con la lógica del chatbot, y servicios externos para recuperar conocimiento (Vector DB) y generar respuestas (LLM vía API). El backend PHP del cliente no se modifica."
                            },
                            {
                                q: "¿Dónde \"vive\" realmente el chatbot?",
                                a: "El chatbot vive en una infraestructura externa, completamente desacoplada. No se toca el core del sistema, se puede actualizar sin desplegar el software y escala de forma independiente."
                            },
                            {
                                q: "¿Qué información usa el chatbot para responder?",
                                a: "Se entrena con documentación del software, FAQs, material formativo y conocimiento general del sector. No necesita acceder a datos personales de los clientes finales."
                            },
                            {
                                q: "¿Se almacenan datos o conversaciones?",
                                a: "Por defecto, no se almacenan datos personales. Se pueden guardar logs técnicos anónimos para mejorar respuestas. La política exacta se define conjuntamente con el cliente."
                            },
                            {
                                q: "¿Hay riesgos de seguridad o privacidad?",
                                a: "El chatbot no ejecuta acciones críticas, no modifica datos sin permisos y no sustituye decisiones humanas. Se comporta como un asistente informativo."
                            },
                            {
                                q: "¿Cómo se controla el coste mensual?",
                                a: "Mediante límites de consultas, respuestas optimizadas, control activo del consumo y caché de respuestas frecuentes. El coste depende del volumen de uso."
                            },
                            {
                                q: "¿Cuánto puede variar el coste mensual?",
                                a: "Uso bajo: ~10€/mes. Uso medio: 20-30€/mes. Uso alto: hasta 50€/mes. Cifras realistas según el volumen de consultas estimado."
                            },
                            {
                                q: "¿Qué pasa si hay más consultas de lo previsto?",
                                a: "El sistema escala automáticamente. No se cae el software. Si se detecta un patrón inusual, se revisa y ajusta con aviso previo."
                            },
                            {
                                q: "¿Se pueden poner límites por usuario?",
                                a: "Sí. Se pueden definir límites para evitar abusos, controlar costes y garantizar la estabilidad del sistema."
                            },
                            {
                                q: "¿Qué mantenimiento requiere el sistema?",
                                a: "Revisión de logs, ajustes de conocimiento, control de consumo y soporte técnico. Todo cubierto por la cuota mensual."
                            },
                            {
                                q: "¿Qué pasa si el proveedor de IA cambia precios?",
                                a: "La arquitectura es flexible. Se puede cambiar de proveedor, ajustar el modelo o adaptar la configuración sin rehacer el sistema."
                            },
                            {
                                q: "¿Qué ocurre si la IA deja de funcionar temporalmente?",
                                a: "El software del cliente sigue funcionando. El chatbot simplemente deja de responder hasta que se restablece. No afecta a la operativa diaria."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group bg-black border border-zinc-800 rounded-xl overflow-hidden h-fit">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                                        <span className="text-sm font-medium text-white pr-4 text-left">{item.q}</span>
                                        <ChevronDown className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                                    </summary>
                                    <div className="px-5 pb-5 pt-0">
                                        <p className="text-zinc-400 text-sm leading-relaxed text-left">{item.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div >
    );
}

