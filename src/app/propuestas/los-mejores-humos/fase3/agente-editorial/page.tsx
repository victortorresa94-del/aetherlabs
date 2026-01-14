"use client";

import { motion, useScroll } from "framer-motion";
import { Newspaper, Rss, ArrowRight, ChevronLeft, Bot, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EditorialAgentPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useScroll().scrollYProgress;

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans">

            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#82ff1f] origin-left z-50" style={{ scaleX }} />

            <nav className="fixed top-0 inset-x-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 h-16 flex items-center px-6 justify-between">
                <Link href="/propuestas/los-mejores-humos/fase3" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Volver a Fase 3
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white uppercase hidden md:block">Agente Editorial</span>
                    <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f]">LangChain / GPT-4</Badge>
                </div>
            </nav>

            <main className="pt-32 pb-32">

                <section className="container px-4 md:px-6 mb-24 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-8">
                        <Newspaper className="w-12 h-12 text-[#82ff1f]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Periodismo Autónomo<br /><span className="text-zinc-500">Sectorial</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Un agente que monitoriza internet 24/7 buscando noticias sobre cannabis, legalidad y cultura, y redacta artículos optimizados para tu blog.
                    </motion.p>
                </section>

                <section className="container px-4 md:px-6 mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#82ff1f]/5 blur-3xl rounded-full" />
                            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-auto text-xs text-zinc-500 font-mono">agent_workflow.py</span>
                                </div>

                                <div className="space-y-4 font-mono text-sm">
                                    <div className="text-zinc-500"># Paso 1: Escaneo</div>
                                    <div className="text-green-400">$ scanning sources [ "High Times", "BOE", "Cannabis Magazine" ]...</div>
                                    <div className="text-white">Found: "Nueva regulación de clubes en Cataluña"</div>

                                    <div className="text-zinc-500 pt-2"># Paso 2: Análisis</div>
                                    <div className="text-white">Analizando sentimiento y relevancia... <span className="text-[#82ff1f]">Alta (95%)</span></div>

                                    <div className="text-zinc-500 pt-2"># Paso 3: Redacción</div>
                                    <div className="text-white">Generando borrador adaptado al tono de "Los Mejores Humos"...</div>
                                    <div className="pl-4 border-l border-zinc-700 text-zinc-400 italic">
                                        "Hoy traemos novedades importantes para el sector. El nuevo marco regulatorio propone..."
                                    </div>

                                    <div className="text-zinc-500 pt-2"># Paso 4: Entrega</div>
                                    <div className="text-[#82ff1f] blink">Done. Borrador guardado en CMS.</div>
                                </div>
                            </div>
                        </div>

                        <motion.div {...fadeInUp} className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Modos de Funcionamiento</h2>
                                <p className="text-zinc-400 mb-8">
                                    Tú decides el nivel de autonomía. Desde la sugerencia de temas hasta la publicación casi automática.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-[#82ff1f]/30 transition-colors">
                                    <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                        <Bot className="w-5 h-5 text-[#82ff1f]" /> Modo Totalmente Automático
                                    </h3>
                                    <p className="text-sm text-zinc-400">
                                        El agente detecta la noticia, la resume, la redacta y la guarda como "Borrador" en tu panel de control. Tú solo entras, revisas y pulsas "Publicar".
                                    </p>
                                </div>

                                <div className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-[#82ff1f]/30 transition-colors">
                                    <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-blue-400" /> Modo Asistido (Clipping)
                                    </h3>
                                    <p className="text-sm text-zinc-400">
                                        El agente te envía cada mañana un resumen por Telegram/Email de lo que ha pasado en el sector. Tú eliges qué tema te interesa y le pides "escribe sobre esto".
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-900">
                                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Beneficios SEO</h4>
                                <ul className="text-sm text-zinc-400 space-y-2">
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#82ff1f]" /> Contenido fresco constante (Google ama esto)</li>
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#82ff1f]" /> Autoridad de dominio como referente informativo</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </section>

                <div className="container px-4 md:px-6 pt-20 text-center">
                    <p className="text-zinc-500 mb-8">Esta solución requiere un setup inicial y un coste mensual de mantenimiento.</p>
                    <Link href="/propuestas/los-mejores-humos/fase3">
                        <Button variant="outline" className="rounded-full px-8 py-6 border-zinc-700 hover:bg-white hover:text-black transition-all">
                            ← Volver al menú
                        </Button>
                    </Link>
                </div>

            </main>
        </div>
    );
}
