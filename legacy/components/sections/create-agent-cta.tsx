"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, MessageSquare, Cog } from 'lucide-react';

export default function CreateAgentCTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] pointer-events-none"
                style={{ backgroundSize: '50px 50px' }}
            >
                <motion.div
                    animate={{ y: [0, 50] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[url('/images/grid-pattern.png')] opacity-20"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content (Text Left) */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-6">
                            <Bot size={12} />
                            Agentes IA
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
                        >
                            Crea tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82ff1f] to-blue-400 font-medium">
                                Agente IA a medida
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            Diseñamos empleados digitales que automatizan tareas repetitivas y complejas.
                            Desde atención al cliente 24/7 hasta cualificación de leads, gestión de reservas o análisis de datos.
                            Libera a tu equipo humano para que se centre en lo estratégico.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/servicios/agentes-ia"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                Ver Agentes
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors"
                            >
                                Presupuesto
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image (Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-square w-full max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
                            <Image
                                src="/images/agents/automation-workflow.png"
                                alt="Agente IA a medida"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Overlay UI Mockup */}
                            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-20 mix-blend-overlay pointer-events-none" />

                            {/* Floating Capabilities */}
                            <div className="absolute top-8 right-8 flex flex-col gap-3 items-end">
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-medium text-white flex items-center gap-2"
                                >
                                    <MessageSquare size={14} className="text-blue-400" />
                                    Responde 24/7
                                </motion.div>
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-medium text-white flex items-center gap-2"
                                >
                                    <Cog size={14} className="text-[#82ff1f]" />
                                    Ejecuta Tareas
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#82ff1f]/10 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
