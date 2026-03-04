"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScanEye, ArrowRight, Sparkles } from 'lucide-react';

export default function ComputerVisionBanner() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/labs/computer-vision-banner.png"
                    alt="Computer Vision Lab"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="px-3 py-1 rounded-full border border-[#82ff1f]/30 bg-[#82ff1f]/10 backdrop-blur-md">
                            <span className="text-[#82ff1f] text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                                Nuevo Lanzamiento
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
                    >
                        Controla la realidad <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82ff1f] to-emerald-500 font-medium">
                            con tus manos
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg"
                    >
                        Experimenta nuestro nuevo laboratorio de Visión por Computadora.
                        Sistemas de partículas interactivos que responden a tus gestos en tiempo real.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="https://gesture-particles-3d-159705655877.us-west1.run.app/"
                            target="_blank"
                            className="group relative px-8 py-4 bg-[#82ff1f] text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(130,255,31,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                Probar Experiencia
                                <ScanEye size={18} />
                            </span>
                        </Link>

                        <Link
                            href="/labs"
                            className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group"
                        >
                            Ver todos los Labs
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-l from-[#82ff1f]/5 to-transparent" />
            </div>
        </section>
    );
}
