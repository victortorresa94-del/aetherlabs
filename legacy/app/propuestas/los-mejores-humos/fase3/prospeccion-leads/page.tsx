"use client";

import { motion, useScroll } from "framer-motion";
import { Search, Filter, Database, ChevronLeft, MapPin, AlertTriangle, ShieldAlert, Server, ListChecks, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeadProspectingPage() {
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
                    <span className="text-sm font-bold text-white uppercase hidden md:block">Prospección</span>
                    <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f]">Data Mining</Badge>
                </div>
            </nav>

            <main className="pt-32 pb-32">

                <section className="container px-4 md:px-6 mb-24 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-8">
                        <Search className="w-12 h-12 text-[#82ff1f]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Prospección<br /><span className="text-zinc-500">Quirúrgica</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Localiza clubes, asociaciones y grows en zonas específicas, filtra por relevancia y organiza los datos para tu equipo comercial.
                    </motion.p>
                </section>

                <section className="container px-4 md:px-6 mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold mb-4">Mapeado de Mercado</h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                El sector cannábico es opaco. No hay listados oficiales fiables. Nuestro sistema utiliza técnicas de scraping ético y cruzado de datos (Maps + Instagram + Directorios) para encontrar lo que Google a veces esconde.
                            </p>

                            <div className="grid gap-4">
                                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-[#82ff1f] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Geolocalización Precisa</h4>
                                        <p className="text-sm text-zinc-500">"Todos los clubes en un radio de 5km de Sants, Barcelona". El sistema devuelve listado con direcciones y estado (abierto/cerrado).</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex items-start gap-4">
                                    <Filter className="w-6 h-6 text-[#82ff1f] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Enriquecimiento de Datos</h4>
                                        <p className="text-sm text-zinc-500">A partir de un nombre, buscamos su Instagram para ver si están activos, qué estética tienen y si encajan con vuestra marca.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DO's and DON'Ts */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/5 blur-[80px] -z-10" />
                            <h3 className="text-xl font-bold text-white mb-8">Filosofía de Seguridad</h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-[#82ff1f] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                        <Database className="w-4 h-4" /> Lo que Hacemos
                                    </h4>
                                    <ul className="space-y-2 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#82ff1f] rounded-full" /> Recopilar información pública disponible.</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#82ff1f] rounded-full" /> Estructurar datos desordenados en Excel/CRM.</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#82ff1f] rounded-full" /> Identificar decisores cuando sea posible.</li>
                                    </ul>
                                </div>

                                <div className="pt-8 border-t border-zinc-900">
                                    <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                        <ShieldAlert className="w-4 h-4" /> Lo que NO Hacemos
                                    </h4>
                                    <ul className="space-y-2 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full" /> SPAM masivo automatizado.</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full" /> Extracción de datos privados no expuestos.</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full" /> Vulnerar normativas de protección de datos.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="container px-4 md:px-6 mb-32">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Detalles de Implementación</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><Server className="w-5 h-5 text-[#82ff1f]" /></div>
                                        Infraestructura
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Desplegamos scripts de scraping a medida (Python/Node.js) utilizando redes de <strong>Proxies Rotatorios</strong> residenciales para evitar bloqueos y acceder a datos públicos geolocalizados como si fuéramos un usuario real.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><ListChecks className="w-5 h-5 text-[#82ff1f]" /></div>
                                        Qué necesitamos
                                    </h3>
                                    <ul className="text-zinc-400 text-sm space-y-2">
                                        <li className="flex items-start gap-2">• Definición clara del "Cliente Ideal" (Buyer Persona).</li>
                                        <li className="flex items-start gap-2">• Zonas geográficas prioritarias (Barrios, Ciudades, Radio Km).</li>
                                        <li className="flex items-start gap-2">• Criterios de filtrado (p.ej. "Solo con Instagram activo").</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><ArrowRight className="w-5 h-5 text-[#82ff1f]" /></div>
                                        Roadmap Estimado
                                    </h3>
                                    <div className="space-y-3 relative pl-4 border-l border-zinc-800">
                                        <div className="relative">
                                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600" />
                                            <h4 className="text-white text-sm font-bold">Semana 1</h4>
                                            <p className="text-zinc-500 text-xs">Configuración de parámetros y prueba piloto.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600" />
                                            <h4 className="text-white text-sm font-bold">Semana 2</h4>
                                            <p className="text-zinc-500 text-xs">Ejecución masiva, limpieza y enriquecimiento.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#82ff1f]" />
                                            <h4 className="text-white text-sm font-bold">Semana 3</h4>
                                            <p className="text-zinc-500 text-xs">Entrega de base de datos final y reporte.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black p-6 rounded-2xl border border-zinc-800 shadow-xl">
                                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Recomendación</h3>
                                    <div className="text-xl font-bold text-white mb-2">Formación o Mini-Agente</div>
                                    <p className="text-zinc-500 text-xs leading-relaxed">
                                        Para prospección, recomendamos formaros internamente (podemos dar capacitación gratuita/low-cost) o desarrollar un pequeño ejecutable a medida (precio a definir según alcance).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container px-4 md:px-6 pt-20 text-center">
                    <p className="text-zinc-500 mb-8">Esta solución es un servicio puntual o recurrente de generación de bases de datos.</p>
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
