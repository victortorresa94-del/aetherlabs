"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, FileText, Bot, ChevronLeft, Image as ImageIcon, Database, Wand2, ArrowRight, Star, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FichasProductoPage() {
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

            {/* Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#82ff1f] origin-left z-50" style={{ scaleX }} />

            {/* Header */}
            <nav className="fixed top-0 inset-x-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 h-16 flex items-center px-6 justify-between">
                <Link href="/propuestas/los-mejores-humos/fase2" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Volver a Fase 2
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white uppercase hidden md:block">Fichas de Producto</span>
                    <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f]">Generative AI</Badge>
                </div>
            </nav>

            <main className="pt-32 pb-32">

                {/* HERO */}
                <section className="container px-4 md:px-6 mb-24 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-8">
                        <Wand2 className="w-12 h-12 text-[#82ff1f]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Páginas de producto con IA
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Transforma una simple lista de nombres en un catálogo profesional con imágenes y descripciones generadas por IA.
                    </motion.p>
                </section>

                {/* DEMO INTERACTION */}
                <section className="container px-4 md:px-6 mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-zinc-900/20 border border-zinc-800 rounded-[3rem] p-8 md:p-12">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400">Antes (Lo que tienes)</Badge>
                            <div className="bg-black border border-zinc-800 p-6 rounded-2xl font-mono text-sm text-zinc-500">
                                <div>Producto: <span className="text-white">Amnesia Haze</span></div>
                                <div>Tipo: <span className="text-white">Flor</span></div>
                                <div>Precio: <span className="text-white">8€/g</span></div>
                                <div className="mt-4 text-zinc-700 italic">// Sin descripción</div>
                                <div className="text-zinc-700 italic">// Sin foto</div>
                            </div>

                            <div className="flex justify-center py-4">
                                <ArrowRight className="rotate-90 lg:rotate-0 text-zinc-600 animate-bounce" />
                            </div>

                            <Badge variant="outline" className="border-[#82ff1f]/30 text-[#82ff1f] bg-[#82ff1f]/5 mb-4">Después (Lo que genera la IA)</Badge>

                            {/* Rich Product Page Mock */}
                            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                                {/* Mock Browser Header */}
                                <div className="h-6 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-1.5 align-middle">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>

                                <div className="p-6 relative">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/5 blur-3xl rounded-full -z-10 pointer-events-none" />

                                    <div className="grid gap-6">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f] mb-2 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold">Sativa</Badge>
                                                <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">Amnesia Haze</h2>
                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    <Star className="w-3.5 h-3.5 fill-zinc-800 text-zinc-800" />
                                                    <span className="text-zinc-500 text-xs ml-1 font-medium">(142)</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-white">8€<span className="text-sm text-zinc-500 font-normal">/g</span></div>
                                                <div className="text-[10px] text-[#82ff1f] font-medium tracking-wide uppercase mt-1">Disponible</div>
                                            </div>
                                        </div>

                                        {/* Main Content Grid */}
                                        <div className="grid grid-cols-10 gap-4">
                                            {/* Product Image */}
                                            <div className="col-span-3 bg-zinc-900 rounded-xl aspect-[3/4] flex items-center justify-center border border-zinc-800 relative overflow-hidden group/img">
                                                <Image
                                                    src="/images/cannabis_mock.png"
                                                    alt="Amnesia Haze AI Generated"
                                                    fill
                                                    className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                            </div>

                                            {/* Description & Tags */}
                                            <div className="col-span-7 flex flex-col justify-between">
                                                <p className="text-sm text-zinc-300 leading-relaxed">
                                                    "Una leyenda de Ámsterdam. Experimenta un subidón cerebral potente y enérgico, perfecto para comenzar el día. Sus notas cítricas y terrosas envuelven el paladar con una frescura inconfundible..."
                                                </p>

                                                <div className="flex flex-wrap gap-1.5 mt-3">
                                                    <Badge variant="secondary" className="bg-zinc-900 text-zinc-400 text-[10px] border border-zinc-800 px-2">Cítrico</Badge>
                                                    <Badge variant="secondary" className="bg-zinc-900 text-zinc-400 text-[10px] border border-zinc-800 px-2">Terroso</Badge>
                                                    <Badge variant="secondary" className="bg-zinc-900 text-zinc-400 text-[10px] border border-zinc-800 px-2">Energía</Badge>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="pt-2 border-t border-zinc-800/50">
                                            <Button className="w-full bg-white text-black hover:bg-zinc-200 font-semibold h-9 rounded-lg text-sm">
                                                Añadir al Carrito
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Sin Esfuerzo Editorial</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Muchos clubes tienen menús digitales vacíos porque <strong className="text-white">nadie tiene tiempo para escribir descripciones</strong> ni para hacer fotos profesionales a cada lote.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Bot className="w-6 h-6 text-[#82ff1f] shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block">Base de Conocimiento Cannábico</strong>
                                        <p className="text-sm text-zinc-500">La IA conoce miles de variedades genéticas. Sabe que la Amnesia es Sativa y la Northern Lights es Indica. Usa ese conocimiento para rellenar los huecos.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ImageIcon className="w-6 h-6 text-[#82ff1f] shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block">Imágenes Ilustrativas</strong>
                                        <p className="text-sm text-zinc-500">Genera una imagen representativa de alta calidad (macro, estudio) de la variedad, manteniendo una estética uniforme en todo el menú.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Layout className="w-6 h-6 text-[#82ff1f] shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block">Maquetación Automática</strong>
                                        <p className="text-sm text-zinc-500">La IA organiza textos, imágenes y metadatos en un diseño atractivo y listo para vender.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* DETAILS GRID */}
                <section className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Beneficios Operativos</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                            <Sparkles className="w-8 h-8 text-[#82ff1f] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Imagen Premium</h3>
                            <p className="text-zinc-400 text-sm">Un menú completo y uniforme transmite profesionalidad y justifica precios premium.</p>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                            <Database className="w-8 h-8 text-[#82ff1f] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">SEO Estructurado</h3>
                            <p className="text-zinc-400 text-sm">El contenido generado sigue estructuras lógicas, ideal si algún día indexáis partes del menú.</p>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                            <FileText className="w-8 h-8 text-[#82ff1f] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Ahorro de Tiempo</h3>
                            <p className="text-zinc-400 text-sm">Subir un producto con ficha completa pasa de 15 minutos a 30 segundos.</p>
                        </motion.div>
                    </div>
                </section>

                <div className="container px-4 md:px-6 pt-20 text-center">
                    <p className="text-zinc-500 mb-8">Esta solución es modular y se paga por uso (tokens).</p>
                    <Link href="/propuestas/los-mejores-humos/fase2">
                        <Button variant="outline" className="rounded-full px-8 py-6 border-zinc-700 hover:bg-white hover:text-black transition-all">
                            ← Volver al menú
                        </Button>
                    </Link>
                </div>

            </main>
        </div>
    );
}
