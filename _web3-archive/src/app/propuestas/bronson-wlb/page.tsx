"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    Globe,
    ArrowRight,
    Zap,
    RefreshCw,
    Camera,
    ShoppingBag,
    Database,
    XCircle,
    TrendingDown,
    Clock,
    Check,
    CheckCircle2,
    Store,
    BrainCircuit,
    Sparkles,
    TrendingUp,
    Euro,
    Mic,
    Image as ImageIcon,
    Bell,
    BarChart3,
    MessageSquare,
    Files
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import BronsonAppDemo from "@/components/propuestas/bronson-app-demo";
import { EmailTicketMockup } from "@/components/propuestas/email-ticket-mockup";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function BronsonWLBProposal() {
    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#82ff1f]/30 overflow-x-hidden">

            {/* 1. HERO / PORTADA - FULL SCREEN */}
            <header className="min-h-screen flex items-center border-b border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,rgba(130,255,31,0.05),transparent_70%)] relative overflow-hidden">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-lg font-bold text-white mb-8 tracking-wider">BRONSON WLB</h2>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                                Gestiona tu tienda<br />
                                <span className="text-zinc-500">desde tu bolsillo</span>
                            </h1>

                            <p className="text-zinc-400 text-xl md:text-2xl mb-10 leading-relaxed max-w-lg">
                                Una mini-app privada conectada a tu web actual para subir productos, controlar stock y vender más sin tocar el ordenador.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Sube productos en 1 minuto",
                                    "Stock sincronizado tienda ↔ web",
                                    "Fotos profesionales con IA"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center gap-4 text-lg text-zinc-300"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-[#82ff1f]/10 flex items-center justify-center text-[#82ff1f] border border-[#82ff1f]/20">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative flex justify-center items-center"
                        >
                            <div className="relative z-10">
                                <Image
                                    src="/images/bronson/app-mockup.png"
                                    alt="Bronson WLB App Mockup"
                                    width={400}
                                    height={800}
                                    className="rounded-3xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute -inset-4 blur-3xl bg-[#82ff1f]/20 -z-10 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* 2. EL PROBLEMA ACTUAL - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-zinc-950 relative border-b border-zinc-900/50 py-24">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Lo que pasa hoy
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: Clock, title: "Proceso Lento", desc: "Demasiados clics para subir una sola bamba" },
                            { icon: XCircle, title: "Stock Desactualizado", desc: "Vendes algo en tienda y olvidas quitarlo de la web" },
                            { icon: TrendingDown, title: "Web Estática", desc: "Al no haber novedades, los clientes dejan de entrar" },
                            { icon: Euro, title: "Pérdida de ventas", desc: "Los productos no están online cuando el cliente quiere comprar" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center hover:border-zinc-700 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-full bg-zinc-900 text-zinc-500 flex items-center justify-center mb-6 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-200 mb-3">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. VENTAS QUE SE ESCAPAN - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-black border-b border-zinc-900/50 py-24">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Ventas que se escapan
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
                            Tus clientes ven novedades en Instagram, preguntan, pero si no está en la web, la venta se enfría.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            {...fadeInUp}
                            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 text-center relative group hover:border-[#82ff1f]/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-[#82ff1f]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="text-6xl font-bold text-white mb-2 relative z-10">15-20%</div>
                            <p className="text-zinc-400 relative z-10">de ventas perdidas por productos no disponibles online</p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 text-center relative group hover:border-[#82ff1f]/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-[#82ff1f]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="text-6xl font-bold text-[#82ff1f] mb-2 relative z-10">~10</div>
                            <p className="text-zinc-400 relative z-10">ventas perdidas cada mes</p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 text-center relative group hover:border-[#82ff1f]/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-[#82ff1f]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="text-6xl font-bold text-[#82ff1f] mb-2 relative z-10">~600€</div>
                            <p className="text-zinc-400 relative z-10">pérdida mensual estimada</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. AUTOMATIZAMOS TU PROCESO MANUAL - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-zinc-950 border-b border-zinc-900/50 py-24">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Automatizamos tu proceso manual
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                            Compras de forma manual, viajas, ves oportunidades y las traes. <span className="text-[#82ff1f]">No queremos cambiar tu forma de comprar, solo tu forma de digitalizarlo.</span>
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800"
                        >
                            <h3 className="text-zinc-500 mb-6 font-mono text-sm font-bold uppercase tracking-widest">HOY (Manual)</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Foto con el móvil</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Subir foto a Gemini y promptear</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Guardar la imagen</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Encender PC</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Entrar en WordPress</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Subir la imagen a la web</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Rellenar ficha técnica completa (nombre, precio, tallas, descripción, categorías...)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <span>Subir producto</span>
                                </li>
                            </ul>
                        </motion.div>

                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-zinc-700 rounded-full items-center justify-center z-10 text-zinc-400 font-bold text-sm">
                            VS
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-10 bg-[#82ff1f]/5 rounded-3xl border border-[#82ff1f]/30 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#82ff1f]/10 to-transparent pointer-events-none"></div>
                            <h3 className="text-[#82ff1f] mb-6 font-mono text-sm font-bold uppercase tracking-widest relative z-10">NUEVA SOLUCIÓN (Automática)</h3>
                            <ul className="space-y-4 text-zinc-200 relative z-10">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] mt-1 flex-shrink-0" />
                                    <span>Foto con el móvil</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] mt-1 flex-shrink-0" />
                                    <span>Abres la mini-app</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] mt-1 flex-shrink-0" />
                                    <span>Rellenar formulario rápido</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] mt-1 flex-shrink-0" />
                                    <span className="font-bold text-[#82ff1f]">¡Listo! La IA hace el resto</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. LA SOLUCIÓN (UNIFIED) - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-black relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#82ff1f]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Tu solución completa en una sola app
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
                            Gestiona tu web de zapatillas desde el móvil. Sube productos, edita stock y publica todo sin tocar el ordenador.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* App Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <BronsonAppDemo />
                                <div className="absolute -inset-6 blur-3xl bg-[#82ff1f]/15 -z-10 rounded-full"></div>
                            </div>
                        </motion.div>

                        {/* Features & Flow */}
                        <div className="space-y-8">
                            <motion.div {...fadeInUp}>
                                <h3 className="text-2xl font-bold text-white mb-6">Funcionalidades incluidas</h3>
                                <div className="grid gap-4">
                                    {[
                                        { icon: Camera, title: "Subir producto", desc: "Foto, nombre, precio y listo" },
                                        { icon: Sparkles, title: "Inteligencia artificial", desc: "Genera la foto profesional y la descripción" },
                                        { icon: Database, title: "Control de stock", desc: "Sincronizado en tiempo real" },
                                        { icon: ShoppingBag, title: "Gestión rápida", desc: "Edita precios y disponibilidad al vuelo" }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-[#82ff1f]/30 transition-all">
                                            <div className="w-12 h-12 rounded-lg bg-[#82ff1f]/10 text-[#82ff1f] flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                                <p className="text-sm text-zinc-500">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div {...fadeInUp}>
                                <h3 className="text-2xl font-bold text-white mb-6">Subir una zapatilla en 1 minuto</h3>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", title: "Haces la foto", desc: "Desde la propia app con tu móvil." },
                                        { step: "2", title: "Rellenas info básica", desc: "Nombre y Precio. Nada más." },
                                        { step: "3", title: "IA trabaja", desc: "Mejora la foto y crea descripción." },
                                        { step: "4", title: "Publicado", desc: "Ya está a la venta en la web." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#82ff1f]/10 border-2 border-[#82ff1f]/30 text-[#82ff1f] font-bold flex items-center justify-center flex-shrink-0">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                                <p className="text-sm text-zinc-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DOBLE BANNER: IA FOTOS + SEO - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-zinc-950 border-y border-zinc-900 py-24">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Inteligencia Artificial integrada
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* IA Photos */}
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold text-white mb-6">Fotos que venden</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Sin fotógrafo. Sin caja de luz. La IA transforma tus fotos caseras en imágenes profesionales listas para vender.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl mb-8">
                                <div className="grid grid-cols-2 min-h-[300px]">
                                    <div className="bg-zinc-800 flex flex-col items-center justify-center relative p-8">
                                        <span className="absolute top-4 left-4 text-xs font-mono text-zinc-500 bg-black/50 px-3 py-1 rounded">ANTES</span>
                                        <Image
                                            src="/images/bronson/sneaker-before.png"
                                            alt="Foto casera de zapatilla"
                                            width={200}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="bg-white flex flex-col items-center justify-center relative p-8">
                                        <span className="absolute top-4 right-4 text-xs font-mono text-[#82ff1f] bg-[#82ff1f]/10 px-3 py-1 rounded border border-[#82ff1f]/20">DESPUÉS</span>
                                        <Image
                                            src="/images/bronson/sneaker-after.png"
                                            alt="Foto profesional de zapatilla"
                                            width={200}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-zinc-300 font-medium mb-4">
                                IA preentrenada para que no tengas que promptear, y genere automáticamente imágenes con:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-zinc-400">
                                    <div className="w-2 h-2 rounded-full bg-[#82ff1f]"></div>
                                    Fondos limpios automáticos
                                </li>
                                <li className="flex items-center gap-3 text-zinc-400">
                                    <div className="w-2 h-2 rounded-full bg-[#82ff1f]"></div>
                                    Iluminación profesional
                                </li>
                                <li className="flex items-center gap-3 text-zinc-400">
                                    <div className="w-2 h-2 rounded-full bg-[#82ff1f]"></div>
                                    Múltiples perspectivas
                                </li>
                            </ul>
                        </motion.div>

                        {/* SEO Descriptions */}
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold text-white mb-6">Descripciones que posicionan</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                La IA crea descripciones optimizadas para SEO que ayudan a que tus productos aparezcan en Google cuando la gente busca.
                            </p>

                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 mb-8">
                                <div className="flex items-start gap-3 mb-4">
                                    <Zap className="w-5 h-5 text-[#82ff1f] mt-1" />
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-2">TÚ ESCRIBES:</p>
                                        <p className="text-zinc-300">"Nike Air Max"</p>
                                    </div>
                                </div>
                                <div className="h-px bg-zinc-800 my-6"></div>
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-[#82ff1f] mt-1" />
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-2">LA IA GENERA:</p>
                                        <p className="text-zinc-300 italic leading-relaxed">
                                            "Zapatillas Nike Air Max originales con sistema de amortiguación visible. Perfectas para uso diario y estilo urbano. Disponibles en tallas 38-45. Envío gratis península. Compra auténticas Nike Air Max en Bronson WLB."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#82ff1f]/10 rounded-xl border border-[#82ff1f]/20 inline-block">
                                <p className="text-sm text-[#82ff1f] font-medium">
                                    ✓ Optimizado para buscadores · Sin trabajo extra
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. ARQUITECTURA DEL SISTEMA - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-black border-y border-zinc-900 relative py-24">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center relative z-10">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cómo se conecta todo</h2>
                        <p className="text-zinc-400 text-xl">El sistema completo que hace funcionar tu tienda online</p>
                    </motion.div>

                    {/* New Simple Diagram */}
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            {/* MINI-APP */}
                            <div className="bg-zinc-950 border-2 border-[#82ff1f] rounded-2xl p-8">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <Smartphone className="w-8 h-8 text-[#82ff1f]" />
                                    <h3 className="text-2xl font-bold text-white">MINI-APP</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                                        <Camera className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-xs text-zinc-500 text-center">IA FOTOS</p>
                                    </div>
                                    <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                                        <ShoppingBag className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-xs text-zinc-500 text-center">FORMULARIO</p>
                                    </div>
                                    <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                                        <Database className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-xs text-zinc-500 text-center">STOCK</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-12 w-px bg-gradient-to-b from-[#82ff1f] to-zinc-800"></div>
                                <RefreshCw className="w-6 h-6 text-[#82ff1f] animate-pulse" />
                                <div className="h-12 w-px bg-gradient-to-b from-zinc-800 to-[#82ff1f]"></div>
                            </div>

                            {/* WORDPRESS */}
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                                <div className="flex items-center justify-center gap-3">
                                    <BrainCircuit className="w-7 h-7 text-zinc-400" />
                                    <h3 className="text-xl font-bold text-white">WORDPRESS</h3>
                                </div>
                                <p className="text-zinc-500 text-sm mt-2">Sistema de gestión automatizado</p>
                            </div>

                            {/* Arrow */}
                            <div className="flex items-center justify-center">
                                <div className="h-12 w-px bg-gradient-to-b from-[#82ff1f] to-zinc-800"></div>
                            </div>

                            {/* WEB EN VIVO */}
                            <div className="bg-gradient-to-r from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/30 rounded-2xl p-6">
                                <div className="flex items-center justify-center gap-3">
                                    <Globe className="w-7 h-7 text-[#82ff1f]" />
                                    <h3 className="text-xl font-bold text-white">WEB EN VIVO</h3>
                                </div>
                                <p className="text-zinc-400 text-sm mt-2">bronsonwlb.es — Tu tienda pública</p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="mt-12 p-6 bg-zinc-900/30 rounded-xl border border-zinc-800">
                            <p className="text-zinc-400 text-lg">
                                <span className="text-white font-semibold">El stock es bidireccional:</span> Vendes en la web → se actualiza. Actualizas desde la app → se refleja en la tienda.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. UPGRADES OPCIONALES - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-zinc-950 border-y border-zinc-900 py-24">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Ampliaciones opcionales
                        </h2>
                        <p className="text-zinc-400 text-xl">Funcionalidades avanzadas que puedes añadir en el futuro</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Voice Upload */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <span className="text-xs font-bold text-amber-500">OPCIONAL</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                                <Mic className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Subida por voz</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                "He comprado unas Air Force Max, número 42, precio 85 euros, tengo 3 pares... súbelas a la web"
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                    Requiere API de IA adicional
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                    Uso 3 veces/día ≈ 10€/mes
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-purple-500/10 rounded-lg inline-block">
                                <p className="text-sm text-purple-400">No incluido en el precio base</p>
                            </div>
                        </motion.div>

                        {/* Integrated IA */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-[#82ff1f]/30 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-[#82ff1f]/10 border border-[#82ff1f]/20 rounded-full">
                                <span className="text-xs font-bold text-[#82ff1f]">INCLUIDO</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-[#82ff1f]/10 text-[#82ff1f] flex items-center justify-center mb-6">
                                <ImageIcon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">IA de imágenes integrada</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Genera las fotos profesionales directamente desde la app, sin usar Gemini por separado.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                                    <p className="text-xs text-zinc-500 mb-1">FLUJO ACTUAL</p>
                                    <p className="text-sm text-zinc-300">Gemini → Descargar → App</p>
                                </div>
                                <div className="p-4 bg-[#82ff1f]/5 rounded-lg border border-[#82ff1f]/20">
                                    <p className="text-xs text-[#82ff1f] mb-1">FLUJO INTEGRADO</p>
                                    <p className="text-sm text-white">Foto → App → ¡Listo!</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></div>
                                    API Gemini a tu nombre
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></div>
                                    Coste mensual según uso
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-[#82ff1f]/10 rounded-lg inline-block">
                                <p className="text-sm text-[#82ff1f] font-bold">Incluido en el precio base</p>
                            </div>
                        </motion.div>

                        {/* NEW 1: Avisos inteligentes de stock */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <span className="text-xs font-bold text-amber-500">OPCIONAL</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                                <Bell className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Avisos inteligentes de stock</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                El sistema te avisa automáticamente cuando un modelo o una talla se está agotando o se vende más rápido de lo habitual.
                            </p>

                            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 mb-6 space-y-2">
                                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase">Ejemplos de alertas</p>
                                <p className="text-sm text-zinc-300">“Quedan 2 pares de este modelo”</p>
                                <p className="text-sm text-zinc-300">“Esta talla se ha vendido muy rápido”</p>
                                <p className="text-sm text-zinc-300">“Este producto se agotó en 3 días”</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                    Evita quedarte sin producto top
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                    Te ayuda a decidir re-stock
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                    Sin revisar nada manualmente
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-rose-500/10 rounded-lg inline-block">
                                <p className="text-sm text-rose-400">No incluido en el precio base</p>
                            </div>
                        </motion.div>

                        {/* NEW 2: Histórico de ventas */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <span className="text-xs font-bold text-amber-500">OPCIONAL</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Histórico de ventas y rotación</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Un panel sencillo dentro de la app donde puedes ver qué se vende más, qué tallas vuelan y qué productos se quedan parados.
                            </p>

                            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 mb-6 space-y-2">
                                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase">Qué muestra</p>
                                <p className="text-sm text-zinc-300 flex justify-between"><span>Modelos más vendidos</span> <span className="text-emerald-500">Top 5</span></p>
                                <p className="text-sm text-zinc-300 flex justify-between"><span>Tallas con mayor rotación</span> <span className="text-emerald-500">42, 43</span></p>
                                <p className="text-sm text-zinc-300 flex justify-between"><span>Tiempo medio venta</span> <span className="text-emerald-500">~12 días</span></p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Compra mejor al viajar
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Evita modelos que no rotan
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Datos claros, sin líos
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-emerald-500/10 rounded-lg inline-block">
                                <p className="text-sm text-emerald-400">No incluido en el precio base</p>
                            </div>
                        </motion.div>

                        {/* NEW 3: Pedidos automáticos */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <span className="text-xs font-bold text-amber-500">OPCIONAL</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6">
                                <MessageSquare className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Pedidos auto WhatsApp/IG</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Cuando alguien te escribe preguntando por una bamba, el sistema puede responder solo consultando el stock y enviando el link.
                            </p>

                            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 mb-6 relative">
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                    <MessageSquare className="w-12 h-12" />
                                </div>
                                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase">Ejemplo real</p>
                                <p className="text-sm text-zinc-400 mb-1 italic">Usuario: "¿La tienes en 42?"</p>
                                <p className="text-sm text-pink-400">Bot: "¡Sí! Nos quedan 2. Cómpralas aquí: [Link]"</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    Menos tiempo respondiendo
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    No pierdas ventas por tardar
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    Conexión directa Redes ↔ Web
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-pink-500/10 rounded-lg inline-block">
                                <p className="text-sm text-pink-400">Coste mensual extra según uso</p>
                            </div>
                        </motion.div>

                        {/* NEW 4: Subida masiva */}
                        <motion.div {...fadeInUp} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <span className="text-xs font-bold text-amber-500">OPCIONAL</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                                <Files className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Subida masiva de productos</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Sube varios productos de golpe a la web cuando tengas más volumen, usando listados, facturas o archivos preparados.
                            </p>

                            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 mb-6">
                                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase">Casos de uso</p>
                                <ul className="space-y-1">
                                    <li className="text-sm text-zinc-300">• Cuando recibes 20 pares a la vez</li>
                                    <li className="text-sm text-zinc-300">• Si trabajas con proveedores</li>
                                    <li className="text-sm text-zinc-300">• Para escalar más rápido</li>
                                </ul>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    Ahorra horas en cargas grandes
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    Ideal fase de crecimiento
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    Compatible con la mini-app
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-cyan-500/10 rounded-lg inline-block">
                                <p className="text-sm text-cyan-400">No incluido en el precio base</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. PRECIO - FULL SCREEN */}
            <section className="min-h-screen flex items-center bg-black py-24">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <motion.div
                        {...fadeInUp}
                        className="bg-zinc-900/40 border-2 border-[#82ff1f]/30 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden mb-12"
                    >
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#82ff1f] to-transparent"></div>

                        <h2 className="text-xl font-medium text-zinc-400 mb-10 uppercase tracking-widest">Inversión Total</h2>

                        <div className="flex items-baseline justify-center gap-3 mb-10">
                            <span className="text-7xl md:text-9xl font-bold text-white tracking-tighter">799€</span>
                            <span className="text-2xl text-zinc-500">+ IVA</span>
                        </div>

                        <div className="max-w-lg mx-auto space-y-4 mb-12 text-left">
                            {[
                                "Diseño y desarrollo de la mini-app",
                                "Conexión con tu WordPress actual",
                                "Configuración de IA para fotos y descripciones",
                                "1 mes de soporte y ajustes incluido"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-lg text-zinc-300">
                                    <CheckCircle2 className="w-6 h-6 text-[#82ff1f] flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="inline-block px-8 py-4 bg-[#82ff1f]/10 rounded-xl border border-[#82ff1f]/20">
                            <p className="text-[#82ff1f] text-lg font-medium">
                                Sin cuotas mensuales obligatorias
                            </p>
                        </div>
                    </motion.div>

                    {/* ROI Block Moved Here */}
                    <motion.div
                        {...fadeInUp}
                        className="bg-gradient-to-r from-[#82ff1f]/10 to-transparent p-10 rounded-3xl border border-[#82ff1f]/30 text-center"
                    >
                        <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Inversión recuperada en ~1 mes
                        </p>
                        <p className="text-zinc-400 text-lg">
                            Con sólo evitar 1-2 ventas perdidas al mes, la inversión de 799€ se paga sola.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* NEW EXTRA BLOCK: EMAIL TICKET */}
            <section className="py-24 bg-zinc-950 border-t border-zinc-900">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div
                        {...fadeInUp}
                        className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden relative"
                    >
                        {/* Label */}
                        {/* Label */}
                        <div className="md:absolute md:top-6 md:right-6 mb-8 md:mb-0 px-4 py-1.5 bg-[#82ff1f]/10 border border-[#82ff1f]/20 rounded-full flex flex-col items-end w-max">
                            <span className="text-xs font-bold text-[#82ff1f] uppercase tracking-wider">Extra Opcional</span>
                            <span className="text-[10px] font-medium text-zinc-500">Activable cuando quieras</span>
                        </div>

                        <div className="p-6 md:p-16">
                            <div className="max-w-3xl mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Del ticket al producto listo para vender
                                </h2>
                                <p className="text-lg md:text-xl text-zinc-400">
                                    El sistema prepara el producto automáticamente. Tú solo revisas y confirmas.
                                </p>
                            </div>

                            {/* Visual Process - Simplified */}
                            <div className="mb-16 text-center">
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Flujo automático</p>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 opacity-90 origin-top bg-zinc-950/50 p-6 rounded-2xl border border-zinc-900 inline-flex w-full md:w-auto">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white text-xl">📩</div>
                                        <span className="text-xs font-medium text-zinc-500">Email</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-700 rotate-90 md:rotate-0" />
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#82ff1f]">
                                            <BrainCircuit className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-medium text-zinc-500">Análisis</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-700 rotate-90 md:rotate-0" />
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                                            <Smartphone className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-medium text-zinc-500">App (Borrador)</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-700 rotate-90 md:rotate-0" />
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#82ff1f] text-xl">👀</div>
                                        <span className="text-xs font-medium text-zinc-500">Revisión</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-700 rotate-90 md:rotate-0" />
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-medium text-zinc-500">Web</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Mockup */}
                            <div className="mb-16">
                                <EmailTicketMockup />
                            </div>

                            {/* System Features - New Block */}
                            <div className="bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800 mb-12">
                                <h3 className="text-lg font-bold text-white mb-6">Qué hace el sistema por ti</h3>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-[#82ff1f]/10 p-1 rounded">
                                                <Check className="w-3 h-3 text-[#82ff1f]" />
                                            </div>
                                            <p className="text-sm text-zinc-400">Extrae modelo y referencia desde el ticket</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-[#82ff1f]/10 p-1 rounded">
                                                <Check className="w-3 h-3 text-[#82ff1f]" />
                                            </div>
                                            <p className="text-sm text-zinc-400">Detecta precio de compra automáticamente</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-[#82ff1f]/10 p-1 rounded">
                                                <Check className="w-3 h-3 text-[#82ff1f]" />
                                            </div>
                                            <p className="text-sm text-zinc-400">Busca imágenes de referencia si falta foto</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-purple-500/10 p-1 rounded">
                                                <Sparkles className="w-3 h-3 text-purple-400" />
                                            </div>
                                            <p className="text-sm text-zinc-400">Recomienda margen y precio de venta</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-[#82ff1f]/10 p-1 rounded">
                                                <Check className="w-3 h-3 text-[#82ff1f]" />
                                            </div>
                                            <p className="text-sm text-zinc-400">Prepara el producto en la app en borrador</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-zinc-800 p-1 rounded">
                                                <Check className="w-3 h-3 text-zinc-500" />
                                            </div>
                                            <p className="text-sm text-zinc-400"><strong>Nunca publica nada</strong> sin tu confirmación</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center pt-8 border-t border-zinc-800">
                                <p className="text-zinc-500 text-lg italic mb-8">
                                    "El sistema prepara el trabajo pesado. Tú decides cuándo y cómo se publica."
                                </p>

                                <div className="inline-block px-8 py-4 bg-[#82ff1f]/10 rounded-2xl border border-[#82ff1f]/20">
                                    <p className="text-[#82ff1f] text-xl font-bold">
                                        Precio final con este extra: 999€ + IVA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 10. CIERRE - FULL SCREEN */}
            <footer className="min-h-screen flex items-center border-t border-zinc-900/50 bg-zinc-950 text-center py-24">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <motion.div {...fadeInUp}>
                        <p className="text-3xl md:text-5xl text-zinc-300 font-light mb-16 max-w-3xl mx-auto leading-normal">
                            Es hora de que tu web trabaje para ti,<br />
                            <span className="text-white font-medium">no tú para ella.</span>
                        </p>

                        <Link href="https://wa.me/34627281459?text=Hola%20Victor!%20He%20revisado%20la%20propuesta%20y%20quiero%20tirarlo%20hacia%20delante">
                            <Button className="bg-[#82ff1f] hover:bg-[#72e01b] text-black font-bold text-xl px-12 py-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#82ff1f]/20">
                                Comenzar Proyecto
                                <ArrowRight className="ml-3 w-6 h-6" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </footer >

        </div >
    );
}
