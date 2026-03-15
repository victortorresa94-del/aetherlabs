"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, CheckCircle2, ScanFace, ChevronLeft, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LecturaDNIPage() {
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
                    <span className="text-sm font-bold text-white uppercase hidden md:block">Lectura DNI</span>
                    <Badge className="bg-[#82ff1f] text-black hover:bg-[#82ff1f]">Computer Vision</Badge>
                </div>
            </nav>

            <main className="pt-32 pb-32">

                {/* HERO */}
                <section className="container px-4 md:px-6 mb-24 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 mb-8">
                        <ScanFace className="w-12 h-12 text-[#82ff1f]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Alta de Socios <span className="text-zinc-500">en Segundos</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Elimina el tecleo manual, los errores de transcripción y las colas en recepción utilizando visión por computador para leer DNIs y Pasaportes al instante.
                    </motion.p>
                </section>

                {/* PROBLEM vs SOLUTION */}
                <section className="container px-4 md:px-6 mb-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp} className="bg-red-950/10 border border-red-500/20 p-8 rounded-3xl">
                            <h3 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
                                <span className="p-2 bg-red-500/10 rounded-lg">⛔</span> El Problema Actual
                            </h3>
                            <ul className="space-y-4 text-zinc-300">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span><strong>Lentitud:</strong> Teclear nombre, apellidos, dirección y número de documento lleva 2-3 minutos por persona.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span><strong>Errores:</strong> Un dígito mal copiado en el DNI puede generar problemas legales graves.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span><strong>Fricción:</strong> Crea colas innecesarias en momentos de alta afluencia.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 p-8 rounded-3xl relative">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#82ff1f] text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg shadow-[#82ff1f]/20">La Solución IA</div>
                            <h3 className="text-[#82ff1f] font-bold text-xl mb-4 flex items-center gap-2">
                                <span className="p-2 bg-[#82ff1f]/10 rounded-lg"><Zap className="w-5 h-5" /></span> Solución Automática
                            </h3>
                            <ul className="space-y-4 text-zinc-300">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] mt-2 flex-shrink-0" />
                                    <span><strong>Velocidad:</strong> Todo el proceso se reduce a 1 fotografía (5 segundos).</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] mt-2 flex-shrink-0" />
                                    <span><strong>Precisión:</strong> Extracción literal (OCR) de los datos del documento oficial.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] mt-2 flex-shrink-0" />
                                    <span><strong>Control:</strong> El recepcionista siempre valida los datos antes de guardar.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="container px-4 md:px-6 mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center">Flujo Técnico de Funcionamiento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Captura", desc: "El recepcionista hace una foto al DNI desde la Webcam o Tablet." },
                            { step: "02", title: "Pre-procesado", desc: "El sistema recorta la imagen, ajusta el brillo y detecta los bordes." },
                            { step: "03", title: "OCR + IA", desc: "Google Vision API extrae el texto y una capa lógica lo estructura (Nombre, ID, Fecha)." },
                            { step: "04", title: "Relleno", desc: "El formulario de alta se autocompleta. Humano confirma y guarda." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative"
                            >
                                <div className="text-5xl font-bold text-zinc-800 absolute top-4 right-4 opacity-50">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                                <p className="text-zinc-400 text-sm relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* TECHNICAL SPECS */}
                <section className="bg-zinc-900/30 border-y border-zinc-800 py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Especificaciones y Privacidad</h2>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    Diseñado pensando en la RGPD y la seguridad de los datos sensibles del club.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 bg-black p-4 rounded-xl border border-zinc-800">
                                        <ShieldCheck className="w-6 h-6 text-[#82ff1f]" />
                                        <div>
                                            <div className="font-bold text-white">Privacidad Efímera</div>
                                            <div className="text-xs text-zinc-500">La imagen del DNI se procesa en memoria volátil y se destruye tras la extracción. No se guarda.</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4 bg-black p-4 rounded-xl border border-zinc-800">
                                        <Camera className="w-6 h-6 text-[#82ff1f]" />
                                        <div>
                                            <div className="font-bold text-white">Multidispositivo</div>
                                            <div className="text-xs text-zinc-500">Funciona con cualquier Webcam HD estándar o cámara de dispositivo móvil.</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
                                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Datos Extraídos</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Nombre", "Apellidos", "DNI / NIE / Pasaporte", "Fecha de Nacimiento", "Dirección (si legible)", "Fecha Validez"].map((d, i) => (
                                        <div key={i} className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-zinc-600" /> {d}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container px-4 md:px-6 pt-20 text-center">
                    <p className="text-zinc-500 mb-8">Esta solución es modular y se puede activar independientemente.</p>
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
