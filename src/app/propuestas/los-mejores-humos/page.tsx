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
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArchitectureDiagram from "@/components/propuestas/architecture-diagram";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function LosMejoresHumosProposal() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 9; // Hero, Context, Benefits, Functions, Architecture, Requirements, Tech Cost, Maintenance, Final Investment
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
        <div ref={containerRef} className="h-screen w-full bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* 0. Dynamic Top Navigation */}
            <motion.nav
                style={{ opacity: navOpacity, pointerEvents: navPointerEvents }}
                className="fixed top-0 inset-x-0 z-50 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md transition-all duration-500"
            >
                <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-bold tracking-tight text-sm uppercase">Los Mejores Humos</span>
                        <span className="text-zinc-700">/</span>
                        <Badge variant="outline" className="border-[#82ff1f] text-[#82ff1f] bg-[#82ff1f]/10">Propuesta de Implementación</Badge>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <span className="text-xs text-zinc-500">Desliza para navegar</span>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Slide Counter */}
            <div className="fixed bottom-8 right-8 z-50 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-4 py-2 font-mono text-sm text-zinc-400">
                <span className="text-white font-bold">{String(currentSlide).padStart(2, '0')}</span>
                <span className="mx-2 text-zinc-600">/</span>
                {String(totalSlides).padStart(2, '0')}
            </div>

            {/* SLIDE 1: Hero Section */}
            <section data-slide="1" className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#82ff1f]/5 blur-[120px] -z-10" />

                <div className="container px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase">Propuesta de Implementación • Fase 1</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none text-white mb-8">
                            Chatbot Conversacional <br />
                            <span className="text-zinc-500">Impulsado por IA</span>
                        </h1>

                        <p className="text-xl md:text-3xl text-zinc-400 max-w-3xl leading-relaxed border-l-4 border-[#82ff1f] pl-8">
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
            <section data-slide="2" className="h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-y border-zinc-900 relative">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="space-y-8">
                            <Badge variant="outline" className="text-red-400 border-red-500/20 bg-red-500/5">Situación Actual</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                ¿Por qué un Chatbot IA? <br />
                                <span className="text-zinc-500">La necesidad de evolucionar.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                Actualmente, el equipo invierte demasiadas horas en responder dudas repetitivas que frenan el crecimiento. Un "upgrade" tecnológico no solo soluciona esto, sino que posiciona a la marca como líder innovador frente a la competencia.
                            </p>
                        </motion.div>

                        <div className="grid gap-6">
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-black p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-red-500/10 p-3 rounded-lg"><ShieldCheck className="w-6 h-6 text-red-500" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Saturación de Soporte</h4>
                                    <p className="text-zinc-500 mt-1">El mismo personal respondiendo lo mismo una y otra vez.</p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-black p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-amber-500/10 p-3 rounded-lg"><Activity className="w-6 h-6 text-amber-500" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Onboarding Lento</h4>
                                    <p className="text-zinc-500 mt-1">Los nuevos clientes tardan en ser productivos.</p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-black p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
                                <div className="bg-[#82ff1f]/10 p-3 rounded-lg"><Zap className="w-6 h-6 text-[#82ff1f]" /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Oportunidad de Mercado</h4>
                                    <p className="text-zinc-500 mt-1">Diferenciarse de la competencia ofreciendo tecnología punta 24/7.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: Benefits & Widow */}
            <section data-slide="3" className="h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <div className="flex items-center gap-2 mb-6">
                                <Bot className="w-6 h-6 text-[#82ff1f]" />
                                <span className="text-[#82ff1f] uppercase tracking-wider font-bold">La Solución</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Conoce a Widow</h2>
                            <p className="text-zinc-400 text-xl mb-10 leading-relaxed max-w-lg">
                                Más que un chat, es un <span className="text-white font-medium">agente de conocimiento</span> integrado. Conoce tus manuales, tus procesos y tus "trucos" mejor que nadie.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#82ff1f]" />
                                    <span className="text-xl text-zinc-300">Autonomía Total para el usuario</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#82ff1f]" />
                                    <span className="text-xl text-zinc-300">Reducción drástica de tickets básicos</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#82ff1f]" />
                                    <span className="text-xl text-zinc-300">Disponibilidad 24/7 real</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center"
                        >
                            <div className="absolute inset-0 bg-[#82ff1f]/20 blur-[100px] rounded-full opacity-30" />
                            <div className="relative aspect-square w-full max-w-lg rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                                <Image
                                    src="/images/widow-robot.jpg"
                                    alt="Widow Robot"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8 pt-32">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#82ff1f] animate-pulse" />
                                        <span className="text-[#82ff1f] text-sm font-mono tracking-widest uppercase">System Online</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: Capabilities */}
            <section data-slide="4" className="h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Capacidades Extendidas</h2>
                        <p className="text-zinc-400 text-xl">Potencia real desde el día 1.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
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
                                className="group p-6 rounded-xl border border-zinc-900 hover:border-[#82ff1f]/50 bg-black transition-all hover:-translate-y-1"
                            >
                                <item.icon className="w-8 h-8 text-zinc-600 group-hover:text-[#82ff1f] mb-4 transition-colors" />
                                <h3 className="text-base font-bold mb-2 text-zinc-200 group-hover:text-white">{item.title}</h3>
                                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 5: Architecture */}
            <section data-slide="5" className="h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,255,31,0.03),transparent_70%)]" />
                <div className="container px-4 md:px-6 h-full flex flex-col justify-center">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Arquitectura Técnica Segura</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            El cerebro IA vive en una capa intermedia segura, protegiendo vuestro core PHP.
                        </p>
                    </div>

                    <div className="bg-zinc-950/50 rounded-3xl border border-zinc-800 p-8 backdrop-blur-sm">
                        <ArchitectureDiagram />
                    </div>
                </div>
            </section>

            {/* SLIDE 6: Technical Cost Detail (NEW) */}
            <section data-slide="6" className="h-screen w-full snap-start bg-zinc-950 flex items-center justify-center relative border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left: Explanation */}
                        <div className="md:w-1/3 space-y-6">
                            <h2 className="text-4xl font-bold">Coste de Inteligencia Artificial</h2>
                            <div className="space-y-4 text-zinc-400 text-lg">
                                <p>El chatbot funciona mediante el consumo de <strong>tokens</strong> (unidades de texto). El coste depende directamente del volumen de uso.</p>
                                <p className="text-white font-medium border-l-2 border-[#82ff1f] pl-4">El gasto es variable pero predecible y siempre controlable.</p>
                            </div>

                            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mt-8">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Coins className="w-5 h-5 text-[#82ff1f]" />
                                    ¿Qué es un token?
                                </h4>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li>• 1 frase corta ≈ 20 tokens</li>
                                    <li>• 1 respuesta breve ≈ 400 tokens</li>
                                    <li>• 1 respuesta detallada ≈ 1.000 tokens</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Scenarios */}
                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Scenario A */}
                            <div className="bg-black p-6 rounded-2xl border border-zinc-800 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-800/50 rounded-bl-full -mr-8 -mt-8" />
                                <h4 className="text-lg font-bold text-zinc-300 mb-1">Escenario Bajo</h4>
                                <p className="text-xs text-zinc-500 mb-6 font-mono">USO CONTROLADO</p>
                                <ul className="space-y-2 text-sm text-zinc-400 mb-8 border-t border-zinc-900 pt-4">
                                    <li>• 1.000 consultas/mes</li>
                                    <li>• Respuestas breves</li>
                                    <li>• Soporte básico</li>
                                </ul>
                                <div className="text-3xl font-bold text-white mb-1">≈ 10€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                            </div>

                            {/* Scenario B */}
                            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-[#82ff1f]/30 relative group shadow-[0_0_30px_rgba(130,255,31,0.05)]">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#82ff1f] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Más Probable
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">Escenario Medio</h4>
                                <p className="text-xs text-[#82ff1f] mb-6 font-mono">USO INTENSIVO NORMAL</p>
                                <ul className="space-y-2 text-sm text-zinc-300 mb-8 border-t border-zinc-800 pt-4">
                                    <li>• 2k - 4k consultas/mes</li>
                                    <li>• Respuestas elaboradas</li>
                                    <li>• Onboarding + Soporte</li>
                                </ul>
                                <div className="text-3xl font-bold text-white mb-1">≈ 25€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                            </div>

                            {/* Scenario C */}
                            <div className="bg-black p-6 rounded-2xl border border-zinc-800 relative group overflow-hidden">
                                <h4 className="text-lg font-bold text-zinc-300 mb-1">Escenario Alto</h4>
                                <p className="text-xs text-amber-500 mb-6 font-mono">CRECIMIENTO FUERTE</p>
                                <ul className="space-y-2 text-sm text-zinc-400 mb-8 border-t border-zinc-900 pt-4">
                                    <li>• 5.000+ consultas/mes</li>
                                    <li>• Canal principal</li>
                                    <li>• Uso continuo 24h</li>
                                </ul>
                                <div className="text-3xl font-bold text-white mb-1">≈ 45€ <span className="text-sm font-normal text-zinc-500">/mes</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 7: Maintenance & Infra (NEW) */}
            <section data-slide="7" className="h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f]/50 to-transparent" />
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <Badge className="bg-white text-black hover:bg-zinc-200 mb-4">Mantenimiento y Soporte</Badge>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Infraestructura <br />Gestionada</h2>
                                    <p className="text-zinc-400 text-lg">
                                        Para evitar gestiones técnicas por vuestra parte, proponemos un precio mensual único y cerrado que lo incluye todo.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Pago y gestión de servidores (Vercel/Node.js)",
                                        "Consumo de IA (Tokens) incluido con margen de seguridad",
                                        "Bases de datos Vectoriales (Supabase)",
                                        "Monitorización, Logs y Ajustes continuos",
                                        "Soporte técnico directo ante incidencias"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0" />
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center bg-black rounded-2xl border border-zinc-800 p-8 shadow-2xl relative">
                                <div className="absolute inset-0 bg-[#82ff1f]/5 blur-3xl opacity-50" />
                                <div className="relative z-10 text-center space-y-2">
                                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Cuota Mensual "Todo Incluido"</span>
                                    <div className="text-7xl font-bold text-white tracking-tighter">100€</div>
                                    <div className="bg-zinc-900/80 px-4 py-2 rounded-full text-xs text-zinc-400 border border-zinc-800 mt-4 inline-block">
                                        Olvídate de facturas de proveedores
                                    </div>
                                </div>
                                <Button className="w-full mt-8 bg-white text-black hover:bg-zinc-200 font-bold">
                                    Ver detalles del servicio
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 8: Requirements */}
            <section data-slide="8" className="h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900">
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

            {/* SLIDE 9: Investment (Final) */}
            <section data-slide="9" className="h-screen w-full snap-start bg-black flex items-center justify-center relative border-t border-zinc-900">
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
                                    + 100€/mes infraestructura y soporte
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

