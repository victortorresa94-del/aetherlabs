"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const carouselImages = [
    "/images/creative/skyflex-fence.jpg",
    "/images/creative/cosmetica.jpg",
    "/images/creative/real-estate.jpg",
    "/images/creative/twojeys.jpg"
];

export default function GenAICampaignCTA() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-6">
                            <Sparkles size={12} />
                            Campaña IA Generativa
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                            Crea tu campaña con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82ff1f] to-blue-400 font-medium">
                                IA Generativa
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                            Transforma tu marketing con contenido visual impactante generado por IA.
                            Desde fotos de producto hiperrealistas hasta avatares personalizados y videos promocionales.
                            Reduce costes y tiempos de producción sin sacrificar calidad.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/servicios/ia-generativa"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                Ver Servicios
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors"
                            >
                                Cuéntanos tu idea
                            </Link>
                        </div>
                    </div>

                    {/* Right Carousel */}
                    <div className="relative aspect-[4/3] lg:aspect-square w-full max-w-2xl mx-auto">
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={carouselImages[currentImage]}
                                        alt="Campaña IA Generativa"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating UI Elements */}
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] text-white/90 uppercase tracking-wider font-medium">
                                        Video Gen
                                    </span>
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] text-white/90 uppercase tracking-wider font-medium">
                                        Avatar
                                    </span>
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] text-white/90 uppercase tracking-wider font-medium">
                                        Product Shot
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex gap-2">
                                    {carouselImages.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-[#82ff1f]' : 'w-2 bg-white/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
