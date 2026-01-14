"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Video,
    Mic,
    Globe,
    Sparkles,
    AlertCircle,
    FlaskConical,
    ChevronDown,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Phase4Proposal() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 6;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const navPointerEvents = useTransform(scrollY, (y) => y > 100 ? "none" : "auto");

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

            {/* Navigation */}
            <motion.nav
                style={{ opacity: navOpacity, pointerEvents: navPointerEvents }}
                className="fixed top-0 inset-x-0 z-50 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md transition-all duration-500"
            >
                <div className="container px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/propuestas/los-mejores-humos/fase3" className="text-zinc-500 hover:text-white transition-colors text-xs md:text-sm">
                            ← Volver a Fase 3
                        </Link>
                        <span className="text-zinc-700">/</span>
                        <span className="font-bold tracking-tight text-xs md:text-sm uppercase">Los Mejores Humos</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Purple badge for experimental phase */}
                        <Badge variant="outline" className="border-purple-500 text-purple-400 bg-purple-500/10 text-[10px] md:text-sm">Fase 4 • Experimental</Badge>
                    </div>
                </div>
            </motion.nav>

            {/* Slide Counter */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-3 py-1 md:px-4 md:py-2 font-mono text-xs md:text-sm text-zinc-400">
                <span className="text-white font-bold">{String(currentSlide).padStart(2, '0')}</span>
                <span className="mx-1 md:mx-2 text-zinc-600">/</span>
                {String(totalSlides).padStart(2, '0')}
            </div>

            {/* SLIDE 1: Intro */}
            <section data-slide="1" className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] -z-10" />

                <div className="container px-4 md:px-6 relative z-10 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto md:mx-0"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8">
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <span className="text-purple-400 font-mono text-[10px] md:text-sm tracking-widest uppercase">Exploración Tecnológica • Fase 4</span>
                        </div>

                        <h1 className="font-light text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-white">
                            <span className="block text-white/90">Videoguías</span>
                            <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Generativas</span>
                        </h1>

                        <p className="text-base md:text-xl font-normal max-w-2xl text-zinc-400 leading-relaxed mx-auto md:mx-0">
                            Imaginad poder crear contenido cultural de alta calidad sin cámaras, sin actores y en múltiples idiomas al instante.
                        </p>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 opacity-50"
                        >
                            <span className="text-xs uppercase tracking-widest">Descubrir Piloto</span>
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SLIDE 2: Challenge */}
            <section data-slide="2" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center py-20 border-y border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">El Reto Cultural</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                Los clubes cannábicos tienen una historia rica que contar, pero producir videoguías o audioguías tradicionales es:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white font-medium p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                    <span className="text-red-400">01.</span> Costoso (Equipos, edición, actores)
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                    <span className="text-red-400">02.</span> Rígido (Difícil de actualizar si algo cambia)
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                    <span className="text-red-400">03.</span> Limitado (Un solo idioma habitualmente)
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full bg-zinc-900 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-800"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black" />
                            <Video className="w-24 h-24 text-zinc-800" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/80 backdrop-blur p-4 rounded-xl border border-zinc-800">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AlertCircle className="w-4 h-4 text-red-400" />
                                        <span className="text-xs font-bold text-red-400 uppercase">Producción Tradicional</span>
                                    </div>
                                    <div className="h-1 w-full bg-zinc-800 rounded overflow-hidden">
                                        <div className="h-full w-[90%] bg-red-500" />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                                        <span>Coste Alto</span>
                                        <span>Tiempo Alto</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: Proposal Proposal */}
            <section data-slide="3" className="min-h-screen w-full snap-start bg-black flex items-center justify-center py-20 relative border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge className="bg-purple-500 hover:bg-purple-600 text-white mb-4">Propuesta de Piloto</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Video Generativo IA</h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Proponemos realizar una prueba de concepto limitada para validar la tecnología actual.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-colors">
                            <Sparkles className="w-8 h-8 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">Imagen & Video</h3>
                            <p className="text-zinc-400 text-sm">Generación de clips visuales artísticos o realistas que acompañan la narración sin necesidad de grabar.</p>
                        </div>
                        <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-colors">
                            <Mic className="w-8 h-8 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">Voz Sintética</h3>
                            <p className="text-zinc-400 text-sm">Locuciones ultra-realistas en múltiples idiomas sin contratar estudio de grabación.</p>
                        </div>
                        <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-colors">
                            <Globe className="w-8 h-8 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">Inclusividad</h3>
                            <p className="text-zinc-400 text-sm">Capacidad de adaptar el contenido a distintos idiomas y niveles cognitivos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: Scope */}
            <section data-slide="4" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center py-20 border-t border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-purple-950/10 border border-purple-500/20 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5" /> Alcance de la Prueba
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                                    <span>Producción de <b>1 Videoguía Piloto</b> (duración ~1-2 min).</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                                    <span>Guion generado por IA y curado por humanos.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                                    <span>Voz generada por IA (Castellano neutro).</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                                    <span>Entrega en formato digital para validación interna.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">¿Por qué es una prueba?</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                La tecnología avanza cada semana. Lo que hoy es costoso computacionalmente, mañana será estándar.
                            </p>
                            <div className="p-4 bg-zinc-900 border-l-2 border-yellow-500">
                                <h4 className="text-white font-bold text-sm mb-1">Limitaciones Actuales</h4>
                                <p className="text-zinc-500 text-xs">
                                    No buscamos automatizar la producción entera hoy, sino validar que la <b>calidad</b> y el <b>estilo</b> encajan con Los Mejores Humos antes de invertir en una plataforma completa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 5: Cost & Close */}
            <section data-slide="5" className="min-h-screen w-full snap-start bg-black flex items-center justify-center py-20 border-t border-zinc-900">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Coste del Piloto</h2>
                    <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
                        Un coste único y controlado para realizar esta exploración sin compromiso posterior.
                    </p>

                    <div className="inline-block p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-12">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">350€</div>
                        <div className="text-zinc-500 text-sm">Pago único por la prueba de concepto</div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="/propuestas/los-mejores-humos/fase1">
                            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white rounded-full px-8 py-6">
                                Volver al inicio
                            </Button>
                        </Link>
                        <Link href="https://wa.me/34600000000">
                            <Button className="bg-[#82ff1f] text-black hover:bg-[#72e61b] text-lg px-8 py-6 rounded-full font-bold">
                                Hablar con Victor
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
