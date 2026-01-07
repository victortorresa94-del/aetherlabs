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
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArchitectureDiagram from "@/components/propuestas/architecture-diagram";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function LosMejoresHumosProposal() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 10; // Hero, Context, Benefits, Functions, Architecture, Tech Cost, Infrastructure Detail, Maintenance, Requirements, Final Investment
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

                        <h1 className="font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] mb-8 text-white">
                            <span className="block text-white/90">Chatbot Conversacional</span>
                            <span className="block font-semibold text-white">Impulsado por IA</span>
                        </h1>

                        <p className="text-lg md:text-xl font-normal max-w-2xl text-zinc-400 leading-relaxed">
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
                            <div className="relative aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/widow-robot.jpg"
                                    alt="Widow Robot"
                                    fill
                                    className="object-cover"
                                />
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

            {/* SLIDE 7: Infrastructure Detail (NEW) */}
            <section data-slide="7" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center py-16 relative border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="mb-10 text-center">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400 mb-4">Desglose Técnico</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold">Infraestructura Necesaria</h2>
                        <p className="text-zinc-500 mt-2 max-w-xl mx-auto text-sm">Coste mensual real de los servicios que mantienen el chatbot en producción.</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {/* Backend */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Server className="w-6 h-6 text-blue-400" />
                                <span className="text-xl font-bold text-white">20€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Backend Node.js</h4>
                            <p className="text-zinc-500 text-xs mb-3">API / "Cerebro" del chatbot</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Vercel Pro</li>
                                <li>• Serverless Functions</li>
                                <li>• Escalado automático</li>
                                <li>• HTTPS + Seguridad</li>
                            </ul>
                        </div>

                        {/* Database */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Database className="w-6 h-6 text-emerald-400" />
                                <span className="text-xl font-bold text-white">25€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Base de Datos</h4>
                            <p className="text-zinc-500 text-xs mb-3">PostgreSQL gestionado</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Supabase Pro</li>
                                <li>• Usuarios, sesiones, config</li>
                                <li>• Backups automáticos</li>
                                <li>• Conexiones simultáneas</li>
                            </ul>
                        </div>

                        {/* Vector DB */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <BrainCircuit className="w-6 h-6 text-purple-400" />
                                <span className="text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Vector Database</h4>
                            <p className="text-zinc-500 text-xs mb-3">Memoria del conocimiento</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Incluido en Supabase Pro</li>
                                <li>• FAQs, manuales, docs</li>
                                <li>• Búsqueda semántica</li>
                                <li>• Respuestas con contexto</li>
                            </ul>
                        </div>

                        {/* Storage */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <FileText className="w-6 h-6 text-amber-400" />
                                <span className="text-xl font-bold text-zinc-400">0-5€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Storage Archivos</h4>
                            <p className="text-zinc-500 text-xs mb-3">PDFs, documentos, logs</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Supabase Storage (S3)</li>
                                <li>• Normalmente 0€</li>
                                <li>• Depende del volumen</li>
                            </ul>
                        </div>

                        {/* Auth */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Lock className="w-6 h-6 text-red-400" />
                                <span className="text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Auth & Seguridad</h4>
                            <p className="text-zinc-500 text-xs mb-3">Control de acceso</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Supabase Auth</li>
                                <li>• Protección API</li>
                                <li>• Anti-abuso</li>
                            </ul>
                        </div>

                        {/* Logs */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Activity className="w-6 h-6 text-cyan-400" />
                                <span className="text-xl font-bold text-[#82ff1f]">0€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Logs & Monitorización</h4>
                            <p className="text-zinc-500 text-xs mb-3">Errores, llamadas, caídas</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Logs Vercel</li>
                                <li>• Logs Supabase</li>
                                <li>• Incluido en Pro</li>
                            </ul>
                        </div>

                        {/* Domain */}
                        <div className="bg-black p-5 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <Zap className="w-6 h-6 text-zinc-500" />
                                <span className="text-xl font-bold text-zinc-500">0-2€</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Dominio Técnico</h4>
                            <p className="text-zinc-500 text-xs mb-3">api.aetherlabs.es</p>
                            <ul className="text-xs text-zinc-600 space-y-1 border-t border-zinc-900 pt-3">
                                <li>• Opcional</li>
                                <li>• Subdominio existente</li>
                            </ul>
                        </div>

                        {/* Total Summary Card */}
                        <div className="bg-zinc-900/50 p-5 rounded-xl border border-[#82ff1f]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#82ff1f]/5 blur-2xl" />
                            <div className="relative z-10">
                                <h4 className="font-bold text-[#82ff1f] text-xs uppercase tracking-wider mb-2">Total Infraestructura</h4>
                                <div className="text-3xl font-bold text-white mb-2">45-52€<span className="text-sm font-normal text-zinc-500">/mes</span></div>
                                <p className="text-xs text-zinc-500">Sin incluir tokens de IA (10-50€ adicionales)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 8: Maintenance & Infra - Two Options */}
            <section data-slide="8" className="min-h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden py-16">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f]/50 to-transparent" />
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge className="bg-white text-black hover:bg-zinc-200 mb-4">Mantenimiento Mensual</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Elige tu Modalidad</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">Dos opciones para gestionar la infraestructura del chatbot según vuestras preferencias.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Option A: Self-Managed */}
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative">
                            <div className="mb-6">
                                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Opción A</span>
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
                                    <span className="text-4xl font-bold text-white">50-70€</span>
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
                        <div className="bg-zinc-900/50 border-2 border-[#82ff1f]/30 rounded-3xl p-8 relative shadow-[0_0_60px_rgba(130,255,31,0.05)]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#82ff1f] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Recomendado
                            </div>

                            <div className="mb-6">
                                <span className="text-[#82ff1f] font-mono text-xs uppercase tracking-widest">Opción B</span>
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
                                    <span className="text-5xl font-bold text-white">120€</span>
                                    <span className="text-zinc-500">/mes</span>
                                </div>
                                <p className="text-zinc-500 text-xs mt-2">Precio cerrado. Todo incluido.</p>
                            </div>

                            <Button className="w-full mt-6 bg-[#82ff1f] text-black hover:bg-[#72e61b] font-bold">
                                Elegir esta opción
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* SLIDE 9: Requirements */}
            <section data-slide="9" className="h-screen w-full snap-start bg-zinc-950 flex items-center justify-center border-t border-zinc-900">
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

            {/* SLIDE 10: Investment (Final) */}
            <section data-slide="10" className="h-screen w-full snap-start bg-black flex items-center justify-center relative border-t border-zinc-900">
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
                                    + desde 50€/mes (autogestión) o 120€/mes (todo incluido)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

