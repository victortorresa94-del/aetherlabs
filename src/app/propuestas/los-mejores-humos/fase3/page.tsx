"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Briefcase,
    Newspaper,
    Search,
    ChevronDown,
    ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Phase3Proposal() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;
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
                        <Link href="/propuestas/los-mejores-humos/fase2" className="text-zinc-500 hover:text-white transition-colors text-xs md:text-sm">
                            ← Volver a Fase 2
                        </Link>
                        <span className="text-zinc-700">/</span>
                        <span className="font-bold tracking-tight text-xs md:text-sm uppercase">Los Mejores Humos</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-[#82ff1f] text-[#82ff1f] bg-[#82ff1f]/10 text-[10px] md:text-sm">Fase 3</Badge>
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
                            <span className="text-[#82ff1f] font-mono text-[10px] md:text-sm tracking-widest uppercase">Propuesta de Implementación • Fase 3</span>
                        </div>

                        <h1 className="font-light text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 text-white">
                            <span className="block text-white/90">Automatizaciones</span>
                            <span className="block font-semibold text-white">Externas y Agentes</span>
                        </h1>

                        <p className="text-base md:text-xl font-normal max-w-2xl text-zinc-400 leading-relaxed mx-auto md:mx-0">
                            Procesos inteligentes que no viven en el software, sino que trabajan en paralelo para apoyar la operativa diaria y las ventas.
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

            {/* SLIDE 2: Hub Navigation */}
            <section data-slide="2" className="min-h-screen w-full snap-start bg-zinc-950 flex items-center justify-center py-20 border-y border-zinc-900">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Agentes Disponibles</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Selecciona un área para ver cómo los agentes autónomos pueden liberar la carga de trabajo de tu equipo.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto h-[500px] lg:h-auto">
                        {/* Card 1: Admin */}
                        <Link href="/propuestas/los-mejores-humos/fase3/automatizacion-admin" className="group h-full">
                            <motion.div {...fadeInUp} className="h-full bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#82ff1f]/30 transition-all hover:bg-zinc-900/50 flex flex-col cursor-pointer hover:shadow-[0_0_30px_rgba(130,255,31,0.05)]">
                                <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-[#82ff1f]/30">
                                    <Briefcase className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Administración</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm flex-grow">Automatización de tareas repetitivas, facturas, cobros y recordatorios internos.</p>
                                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs">
                                    <span className="text-[#82ff1f] font-bold group-hover:underline decoration-[#82ff1f]">Ver Detalles</span>
                                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#82ff1f] group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        </Link>

                        {/* Card 2: Editorial */}
                        <Link href="/propuestas/los-mejores-humos/fase3/agente-editorial" className="group h-full">
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="h-full bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#82ff1f]/30 transition-all hover:bg-zinc-900/50 flex flex-col cursor-pointer hover:shadow-[0_0_30px_rgba(130,255,31,0.05)]">
                                <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-[#82ff1f]/30">
                                    <Newspaper className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Agente Editorial</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm flex-grow">Generación automática de noticias cannábicas para mantener la web viva y posicionada.</p>
                                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs">
                                    <span className="text-[#82ff1f] font-bold group-hover:underline decoration-[#82ff1f]">Ver Detalles</span>
                                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#82ff1f] group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        </Link>

                        {/* Card 3: Leads */}
                        <Link href="/propuestas/los-mejores-humos/fase3/prospeccion-leads" className="group h-full">
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="h-full bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#82ff1f]/30 transition-all hover:bg-zinc-900/50 flex flex-col cursor-pointer hover:shadow-[0_0_30px_rgba(130,255,31,0.05)]">
                                <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-[#82ff1f]/30">
                                    <Search className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Prospección</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm flex-grow">Crawler inteligente para detectar y organizar leads en un nicho sensible.</p>
                                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs">
                                    <span className="text-[#82ff1f] font-bold group-hover:underline decoration-[#82ff1f]">Ver Detalles</span>
                                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#82ff1f] group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: Cierre */}
            <section data-slide="3" className="min-h-[50vh] w-full snap-start bg-zinc-950 flex items-center justify-center py-20 border-t border-zinc-900">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">El Futuro es Generativo</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
                        Hemos cubierto el presente y la eficiencia. ¿Queréis ver una prueba de concepto experimental?
                    </p>
                    <Link href="/propuestas/los-mejores-humos/fase4">
                        <Button className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full font-bold">
                            Ver Fase 4: Piloto Experimental →
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
