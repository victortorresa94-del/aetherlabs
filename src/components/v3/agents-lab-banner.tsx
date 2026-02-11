'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AgentsLabBanner = () => {
    return (
        <section className="relative w-full py-28 md:py-36 px-4 sm:px-8 bg-white overflow-hidden">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                    <span className="text-xs font-semibold tracking-wide uppercase text-zinc-600">Agents Lab</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-black"
                >
                    Tu infraestructura a medida
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 font-light"
                >
                    Construye el componente que le falta a tu sistema comercial. Define el rol, el canal y los objetivos.
                </motion.p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 items-end">
                    {/* Laura Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl bg-zinc-900"
                    >
                        <Image
                            src="/images/agentes/Laura.png"
                            alt="Laura, agente de atención al cliente"
                            fill
                            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-left w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                <span className="text-xs font-bold text-[#82ff1f] tracking-wider uppercase">Atención al cliente</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Laura</h3>
                            <p className="text-zinc-400 text-sm">Especialista en retención y soporte 24/7.</p>
                        </div>
                    </motion.div>

                    {/* Center: Custom Agent CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative h-[440px] -mt-6 rounded-2xl border-2 border-dashed border-[#82ff1f] bg-zinc-50 flex flex-col items-center justify-center p-8 shadow-[0_0_20px_rgba(130,255,31,0.3)] transition-all duration-300 hover:bg-green-50"
                    >
                        <div className="w-20 h-20 rounded-full bg-[#82ff1f]/10 flex items-center justify-center mb-6 animate-pulse">
                            <svg className="w-10 h-10 text-[#82ff1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-2 text-center">
                            TU AGENTE<br />
                            <span className="text-[#82ff1f]">IA!</span>
                        </h3>
                        <div className="space-y-3 w-full mt-6">
                            <div className="h-2 bg-zinc-200 rounded-full w-3/4 mx-auto overflow-hidden">
                                <div className="h-full bg-[#82ff1f]/50 w-1/2 rounded-full" />
                            </div>
                            <div className="h-2 bg-zinc-200 rounded-full w-1/2 mx-auto" />
                            <div className="h-2 bg-zinc-200 rounded-full w-2/3 mx-auto" />
                        </div>
                    </motion.div>

                    {/* Diego Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl bg-zinc-900"
                    >
                        <Image
                            src="/images/agentes/Diego.png"
                            alt="Diego, técnico comercial"
                            fill
                            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-left w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                <span className="text-xs font-bold text-[#82ff1f] tracking-wider uppercase">Técnico Comercial</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Diego</h3>
                            <p className="text-zinc-400 text-sm">Experto en cualificación de leads B2B.</p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <Link
                        href="/agents-lab"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#82ff1f] rounded-full hover:bg-[#6ee000] transition-all duration-300 shadow-lg shadow-[#82ff1f]/20 hover:shadow-[#82ff1f]/40 transform hover:-translate-y-1"
                    >
                        <span>Configurar mi agente ahora</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <p className="mt-4 text-sm text-zinc-500">
                        Sin compromiso. Diseña tu prototipo en 3 minutos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AgentsLabBanner;
