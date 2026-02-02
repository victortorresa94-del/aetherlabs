"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    Globe,
    ArrowRight,
    Zap,
    RefreshCw,
    Layers,
    ShieldCheck,
    DollarSign,
    MessageCircle,
    AlertTriangle,
    Workflow,
    Camera,
    ShoppingBag,
    Database,
    ArrowDown,
    XCircle,
    TrendingDown,
    Clock,
    Check,
    CheckCircle2,
    Store,
    BrainCircuit,
    Lock,
    Server
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
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

            {/* 1. HERO / PORTADA */}
            <header className="py-24 md:py-32 border-b border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,rgba(130,255,31,0.05),transparent_70%)] relative overflow-hidden">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 text-[#82ff1f] text-xs font-bold uppercase tracking-widest mb-6 border border-[#82ff1f]/20">
                                <Store className="w-3 h-3" />
                                Propuesta Privada
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                                Gestionar tu tienda <br />
                                <span className="text-zinc-500">desde tu bolsillo.</span>
                            </h1>
                            <p className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                                Una mini herramienta privada conectada a tu web actual para subir productos, controlar stock y vender más sin tocar el ordenador.
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
                                        className="flex items-center gap-3 text-zinc-300"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#82ff1f]/10 flex items-center justify-center text-[#82ff1f]">
                                            <Check className="w-3 h-3" />
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
                            className="relative"
                        >
                            {/* Abstract Phone Mockup */}
                            <div className="relative z-10 mx-auto w-64 md:w-72 h-[500px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-900 shadow-2xl flex flex-col overflow-hidden">
                                <div className="h-full w-full bg-zinc-900/50 p-6 flex flex-col gap-4 relative">
                                    {/* Mock UI Elements */}
                                    <div className="w-12 h-1 bg-zinc-800 mx-auto rounded-full mb-4"></div>
                                    <div className="h-8 w-3/4 bg-zinc-800 rounded-lg"></div>
                                    <div className="h-32 w-full bg-zinc-800/50 rounded-xl border border-dashed border-zinc-700 flex items-center justify-center">
                                        <Camera className="w-8 h-8 text-zinc-600" />
                                    </div>
                                    <div className="h-10 w-full bg-[#82ff1f] rounded-lg mt-auto opacity-80"></div>
                                </div>
                                {/* Glow behind phone */}
                                <div className="absolute -inset-1 blur-2xl bg-[#82ff1f]/20 -z-10 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* 2. EL PROBLEMA ACTUAL */}
            <section className="py-24 bg-zinc-950 relative border-b border-zinc-900/50">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Lo que pasa hoy con tu web
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Tienes una tienda online potente, pero el día a día te come. Subir un producto es lento, requiere sentarse en el ordenador y muchas veces <span className="text-white">simplemente no se hace</span> por falta de tiempo.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Clock, title: "Proceso Lento", desc: "Demasiados clics para subir una sola camiseta." },
                            { icon: XCircle, title: "Stock Desactualizado", desc: "Vendes algo en tienda y olvidas quitarlo de la web." },
                            { icon: TrendingDown, title: "Web Estática", desc: "Al no haber novedades, los clientes dejan de entrar." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-200 mb-2">{item.title}</h3>
                                <p className="text-zinc-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div {...fadeInUp} className="mt-16 text-center">
                        <p className="text-2xl md:text-3xl font-light text-zinc-400">
                            "La web no me ayuda a vender porque <br /> <span className="text-white font-medium">me cuesta demasiado alimentarla</span>."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. LO QUE SE ESTÁ PERDIENDO HOY */}
            <section className="py-24 bg-black border-b border-zinc-900/50">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ventas que se escapan
                            </h2>
                            <p className="text-zinc-400 mb-8">
                                Tus clientes ven novedades en Instagram, preguntan, pero si no está en la web, la compra se enfría. El impulso de compra muere en el trayecto "Redes Social → Mensaje Directo → Esperar respuesta".
                            </p>

                            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0"></div>
                                    <div className="bg-zinc-800/50 px-4 py-3 rounded-tr-xl rounded-b-xl text-sm text-zinc-300">
                                        "¿Tenéis esta en talla M? No la veo en la web..."
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 justify-end opacity-50">
                                    <div className="bg-[#82ff1f]/10 px-4 py-3 rounded-tl-xl rounded-b-xl text-sm text-[#82ff1f]">
                                        (Respuesta 4 horas después) Sí, perdona, es que no nos dio tiempo a subirla...
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertTriangle className="w-32 h-32" />
                            </div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Estimación conservadora</h3>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                                15-20%
                            </div>
                            <p className="text-zinc-400">
                                de ventas perdidas por no tener el producto disponible online en el momento del interés.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. TU REALIDAD ACTUAL (PROCESO MANUAL) */}
            <section className="py-24 bg-zinc-950 border-b border-zinc-900/50">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl font-bold text-white mb-6">Sabemos cómo trabajas</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
                            Compras de forma manual, viajas, ves oportunidades y las traes. Ese sistema funciona y es tu esencia. <span className="text-[#82ff1f]">No queremos cambiar tu forma de comprar, solo tu forma de digitalizarlo.</span>
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-0 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-8 bg-zinc-900/50 rounded-2xl md:rounded-r-none border border-zinc-800"
                        >
                            <h3 className="text-zinc-500 mb-4 font-mono text-sm">HOY</h3>
                            <ul className="text-left space-y-4 text-zinc-400">
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Foto con el móvil</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Pasarla al ordenador</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Retocar en Photoshop</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Entrar en WordPress</li>
                                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Crear ficha técnica</li>
                            </ul>
                        </motion.div>

                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border border-zinc-800 rounded-full items-center justify-center z-10 text-zinc-500">
                            VS
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-8 bg-[#82ff1f]/5 rounded-2xl md:rounded-l-none border border-[#82ff1f]/20 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#82ff1f]/5 to-transparent pointer-events-none"></div>
                            <h3 className="text-[#82ff1f] mb-4 font-mono text-sm">NUEVA SOLUCIÓN</h3>
                            <ul className="text-left space-y-4 text-zinc-200">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Foto con el móvil</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Subir a la App</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> <strong>¡Listo!</strong> (IA hace el resto)</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. LA SOLUCIÓN */}
            <section className="py-32 bg-black relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

                <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <div className="inline-block px-4 py-1 rounded-full border border-[#82ff1f]/30 bg-[#82ff1f]/10 text-[#82ff1f] text-sm font-medium mb-6">
                                Presentamos
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Tu Panel de Control <br /> de Bolsillo
                            </h2>
                            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                                No vamos a cambiar tu web actual. Vamos a crear una <span className="text-white">puerta trasera inteligente</span>. Una mini aplicación web privada, solo para ti y tu equipo, diseñada para usarse exclusivamente desde el móvil.
                            </p>
                            <p className="text-zinc-500 border-l-2 border-[#82ff1f] pl-4 italic">
                                "Como tener un asistente digital que sabe usar WordPress por ti."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Illustration of solution */}
                            <div className="aspect-square bg-zinc-900/50 rounded-3xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(130,255,31,0.05),transparent_60%)]"></div>
                                <Smartphone className="w-32 h-32 text-zinc-700 group-hover:text-[#82ff1f] transition-colors duration-500" />
                                <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-zinc-800 flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse"></div>
                                    <span className="text-xs text-zinc-300 font-mono">CONECTADO A BRONSONWLB.ES</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. QUÉ SE PODRÁ HACER */}
            <section className="py-24 bg-zinc-950 border-y border-zinc-900">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Todo lo que necesitas, nada más</h2>
                        <p className="text-zinc-400">Funcionalidades diseñadas para la velocidad.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { icon: ShoppingBag, title: "Subir Productos", desc: "Foto, precio y listo." },
                            { icon: Camera, title: "Fotos IA", desc: "Mejora automática de imágenes." },
                            { icon: Database, title: "Gestión Stock", desc: "Sincronizado en tiempo real." },
                            { icon: RefreshCw, title: "Editar Rápido", desc: "Cambia precios al vuelo." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 bg-zinc-900/30 border border-zinc-800 hover:border-[#82ff1f]/30 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60"
                            >
                                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 flex items-center justify-center mb-4 transition-colors">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                <p className="text-sm text-zinc-500">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CÓMO SE SUBE UN PRODUCTO (FLUJO) */}
            <section className="py-24 bg-black">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold text-white text-center mb-16">
                        Subir una zapatilla en 1 minuto
                    </motion.h2>

                    <div className="relative">
                        {/* Line connecting steps */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-900 -translate-y-1/2 z-0"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "1", title: "Haces la foto", desc: "Desde la propia app con tu móvil." },
                                { step: "2", title: "Rellenas info básica", desc: "Nombre y Precio. Nada más." },
                                { step: "3", title: "IA trabaja", desc: "Mejora la foto y crea descripción." },
                                { step: "4", title: "Publicado", desc: "Ya está a la venta en la web." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-800 text-zinc-500 font-bold flex items-center justify-center mb-4 relative z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-500 px-2">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. IMÁGENES CON IA */}
            <section className="py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="order-2 md:order-1">
                            <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                                {/* Pseudo Compare Image slider */}
                                <div className="grid grid-cols-2 h-64 md:h-80">
                                    <div className="bg-zinc-800 flex items-center justify-center relative border-r border-zinc-700">
                                        <span className="absolute top-4 left-4 text-xs font-mono text-zinc-500 bg-black/50 px-2 py-1 rounded">ORIGINAL</span>
                                        <Camera className="w-12 h-12 text-zinc-600 opacity-50" />
                                        <p className="absolute bottom-4 text-zinc-600 text-xs">Foto casera (oscura)</p>
                                    </div>
                                    <div className="bg-[#82ff1f]/5 flex items-center justify-center relative">
                                        <span className="absolute top-4 right-4 text-xs font-mono text-[#82ff1f] bg-[#82ff1f]/10 px-2 py-1 rounded border border-[#82ff1f]/20">MEJORADA CON IA</span>
                                        <Zap className="w-12 h-12 text-[#82ff1f] opacity-80" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50"></div>
                                        <p className="absolute bottom-4 text-[#82ff1f] text-xs font-semibold">Fondo limpio + Luz ajustada</p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform cursor-grab">
                                    <div className="flex gap-1">
                                        <div className="w-0.5 h-4 bg-zinc-300"></div>
                                        <div className="w-0.5 h-4 bg-zinc-300"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-white mb-6">Tus fotos, nivel estudio</h2>
                            <p className="text-zinc-400 text-lg mb-6">
                                No necesitas una caja de luz ni un fotógrafo. Haz la foto sobre el mostrador o el suelo. El sistema usa Inteligencia Artificial para:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></div>
                                    Eliminar fondos molestos
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></div>
                                    Ajustar iluminación y color
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></div>
                                    Optimizar para carga web rápida
                                </li>
                            </ul>
                            <div className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg inline-block">
                                <p className="text-xs text-zinc-500 font-mono">
                                    <span className="text-[#82ff1f]">NOTA:</span> Todo incluido en el precio. Sin sorpresas.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. STOCK SINCRONIZADO */}
            <section className="py-24 bg-black">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                    <motion.div {...fadeInUp} className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Un solo stock, cero líos</h2>
                        <p className="text-zinc-400">Se acabó vender lo que ya no tienes.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-zinc-900/30 rounded-3xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                                <Store className="w-8 h-8" />
                            </div>
                            <span className="font-semibold text-white">Tienda Física</span>
                        </div>

                        <div className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full h-1 bg-gradient-to-r from-zinc-800 via-[#82ff1f]/50 to-zinc-800 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-[#82ff1f] rounded-full flex items-center justify-center">
                                    <RefreshCw className="w-4 h-4 text-[#82ff1f]" />
                                </div>
                            </div>
                            <span className="text-xs font-mono text-[#82ff1f]">SYNC TIEMPO REAL</span>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                                <Globe className="w-8 h-8" />
                            </div>
                            <span className="font-semibold text-white">Web Online</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 10. ARQUITECTURA / CONEXIÓN */}
            <section className="py-32 bg-zinc-950 border-y border-zinc-900 relative">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center relative z-10">
                    <motion.div {...fadeInUp} className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Cómo se conecta todo</h2>
                        <p className="text-zinc-400">Un ecosistema robusto, invisible para ti, que lo hace funcionar todo.</p>
                    </motion.div>

                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                        {/* Central Hub */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-zinc-900 rounded-full border border-zinc-700 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(130,255,31,0.1)]"
                        >
                            <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-[#82ff1f] mb-2" />
                            <span className="text-[10px] md:text-sm font-bold text-zinc-200 uppercase tracking-widest text-center px-2">Sistema Automático</span>
                        </motion.div>

                        {/* Orbiting Elements */}
                        {[
                            { icon: Smartphone, label: "Tu Mini App", x: "0", y: "-150px", delay: 0.2 },
                            { icon: Globe, label: "Web Pública", x: "140px", y: "80px", delay: 0.4 },
                            { icon: Camera, label: "Modulo IA", x: "-140px", y: "80px", delay: 0.6 }
                        ].map((node, i) => (
                            <React.Fragment key={i}>
                                {/* Connection Line */}
                                <motion.div
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    whileInView={{ opacity: 1, pathLength: 1 }}
                                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                >
                                    {/* Using simple divs as lines for simplicity in this swift implementation, typically SVG lines */}
                                    <span
                                        className="absolute top-1/2 left-1/2 h-[1px] bg-zinc-800 origin-left"
                                        style={{
                                            width: '140px',
                                            transform: `rotate(${i === 0 ? '-90deg' : i === 1 ? '30deg' : '150deg'}) translateY(-50%)`
                                        }}
                                    />
                                </motion.div>

                                {/* Node */}
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    whileInView={{ opacity: 1, x: parseFloat(node.x), y: parseFloat(node.y) }}
                                    transition={{ delay: node.delay, duration: 0.8 }}
                                    className="absolute z-20 w-24 h-24 bg-black rounded-xl border border-zinc-800 flex flex-col items-center justify-center hover:border-[#82ff1f] transition-colors"
                                    style={{ transform: `translate(${node.x}, ${node.y})` }} // Fallback
                                >
                                    <node.icon className="w-6 h-6 text-zinc-400 mb-2" />
                                    <span className="text-xs text-zinc-500 font-medium">{node.label}</span>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. PRECIO */}
            <section className="py-32 bg-black">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <motion.div
                        {...fadeInUp}
                        className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f] to-transparent opacity-50"></div>

                        <h2 className="text-2xl font-medium text-zinc-400 mb-8 uppercase tracking-widest text-sm">Inversión Única</h2>

                        <div className="flex items-baseline justify-center gap-2 mb-8">
                            <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">1.250€</span>
                            <span className="text-xl text-zinc-500">+ IVA</span>
                        </div>

                        <div className="max-w-md mx-auto space-y-4 mb-12 text-left">
                            <div className="flex items-center gap-3 text-zinc-300">
                                <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                <span>Diseño y Desarrollo de la Mini App</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                <span>Conexión con tu Web actual</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                <span>Configuración de IA para imágenes</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                <span>1 Mes de Soporte y Ajustes incluido</span>
                            </div>
                        </div>

                        <div className="inline-block px-6 py-3 bg-[#82ff1f]/10 rounded-lg border border-[#82ff1f]/20">
                            <p className="text-[#82ff1f] text-sm">
                                Sin cuotas de mantenimiento mensual obligatorias.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 12. CIERRE */}
            <footer className="py-24 border-t border-zinc-900/50 bg-zinc-950 text-center">
                <div className="container px-4 md:px-6">
                    <motion.div {...fadeInUp}>
                        <p className="text-2xl md:text-3xl text-zinc-300 font-light mb-12 max-w-2xl mx-auto leading-normal">
                            Es hora de que tu web trabaje para ti, <br />
                            <span className="text-white font-medium">no tú para ella.</span>
                        </p>

                        <Link href="#">
                            <Button className="bg-[#82ff1f] hover:bg-[#72e01b] text-black font-bold text-lg px-8 py-6 rounded-full transition-all hover:scale-105">
                                Comenzar Proyecto
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </footer>

        </div>
    );
}
