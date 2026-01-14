"use client";

import { motion, useScroll } from "framer-motion";
import { Mail, Calendar, Bot, ChevronLeft, Clock, Zap, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminAutoPage() {
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
                    <span className="text-sm font-bold text-white uppercase hidden md:block">Administración</span>
                    <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f]">n8n / Make</Badge>
                </div>
            </nav>

            <main className="pt-32 pb-32">

                <section className="container px-4 md:px-6 mb-24 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-8">
                        <Mail className="w-12 h-12 text-[#82ff1f]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Secretario Virtual<br /><span className="text-zinc-500">24/7</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Delega las tareas repetitivas, el seguimiento de facturas y los recordatorios a agentes autónomos que no duermen.
                    </motion.p>
                </section>

                <section className="container px-4 md:px-6 mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp} className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold">Coste de Oportunidad</h2>
                            <p className="text-zinc-400 text-lg">
                                Cada minuto que tu equipo dedica a enviar facturas recurrentes o reclamar cobros es un minuto que no dedican a generar negocio o cuidar a los clientes.
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="bg-zinc-900 p-3 rounded-xl h-fit border border-zinc-800"><Clock className="w-6 h-6 text-red-500" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Tiempo Perdido</h4>
                                        <p className="text-sm text-zinc-500">Reclamar un impago manual: ~15 mins (buscar correo, redactar, adjuntar, enviar).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-zinc-900 p-3 rounded-xl h-fit border border-zinc-800"><Zap className="w-6 h-6 text-[#82ff1f]" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Tiempo Ganado</h4>
                                        <p className="text-sm text-zinc-500">Automatizado: 0 mins. El sistema detecta el impago y envía el recordatorio suave automáticamente.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-6">Casos de Uso Implementables</h3>
                            <ul className="space-y-4">
                                <li className="bg-black p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-[#82ff1f] mt-1" />
                                    <div>
                                        <strong className="text-white block">Gestión de Facturas</strong>
                                        <p className="text-xs text-zinc-400 mt-1">Generación y envío automático de facturas recurrentes a socios o proveedores el día 1 de cada mes.</p>
                                    </div>
                                </li>
                                <li className="bg-black p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-[#82ff1f] mt-1" />
                                    <div>
                                        <strong className="text-white block">Email Trriage</strong>
                                        <p className="text-xs text-zinc-400 mt-1">Un agente lee la bandeja de entrada, clasifica los correos (Urgente, Factura, Spam) y genera borradores de respuesta.</p>
                                    </div>
                                </li>
                                <li className="bg-black p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-[#82ff1f] mt-1" />
                                    <div>
                                        <strong className="text-white block">Onboarding Automático</strong>
                                        <p className="text-xs text-zinc-400 mt-1">Cuando un socio se da de alta, recibe automáticamente un "Welcome Pack" digital con normas y horarios.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="container px-4 md:px-6 pt-20 text-center">
                    <p className="text-zinc-500 mb-8">Esta solución se presupuesta por flujo de trabajo implementado.</p>
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
