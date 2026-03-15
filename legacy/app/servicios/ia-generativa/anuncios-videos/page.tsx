'use client';

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { useRef, useState, useEffect } from 'react';

// --- Components ---

const VideoSection = ({
    videoId,
    title,
    subtitle,
    description,
    align = 'left',
    index
}: {
    videoId: string;
    title: string;
    subtitle: string;
    description: string;
    align?: 'left' | 'right';
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", amount: 0.5 });

    // Construct the correct embed URL
    // Using https://play.gumlet.io/embed/{ASSET_ID} format
    // Added start_high_res=true to prevent pixelation
    // Changed boolean values to 'true' for better compatibility
    const embedUrl = `https://play.gumlet.io/embed/${videoId}?autoplay=true&loop=true&muted=true&controls=false&start_high_res=true&disable_player_controls=true`;

    return (
        <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black border-t border-white/5">
            {/* Background Video Container */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-30'}`}>
                <iframe
                    src={embedUrl}
                    className="w-full h-full object-cover scale-110 pointer-events-none"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    style={{ border: 'none' }}
                    title={title}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="container relative z-10">
                <div className={`flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} max-w-4xl mx-auto md:mx-0 ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-mono tracking-widest uppercase">
                            0{index} — {subtitle}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-[0.9]"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-xl"
                    >
                        {description}
                    </motion.p>

                </div>
            </div>
        </section>
    );
};

const TechLogo = ({ src, alt, width = 120, height = 40, variant = 'blend' }: { src: string, alt: string, width?: number, height?: number, variant?: 'blend' | 'invert' }) => (
    <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-500">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`object-contain ${variant === 'blend' ? 'mix-blend-screen' : 'brightness-0 invert'}`}
        />
    </div>
);

export default function AnunciosVideosPage() {
    return (
        <main className="bg-black text-white font-sans selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            {/* 1. HERO REVOLUTION */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        className="w-full h-full object-cover pointer-events-none opacity-60"
                        src="/videos/hero.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
                </div>

                <div className="relative z-20 container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-light mb-8 tracking-tighter leading-[0.9] text-white">
                            La Nueva Era del <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">Video Marketing</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Producción cinematográfica generativa al servicio de tu marca.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Descubre Más</span>
                        <div className="w-px h-12 bg-gradient-to-b from-[#82ff1f] to-transparent" />
                    </motion.div>
                </div>
            </section>

            {/* 2. TECH STICKER */}
            <div className="border-y border-white/10 bg-black py-12 overflow-hidden">
                <div className="container flex flex-wrap justify-center md:justify-between items-center gap-12">
                    <TechLogo src="/images/logos/runway_logo_white.png" alt="Runway" variant="blend" />
                    <TechLogo src="/images/logos/sora_logo_white.png" alt="OpenAI Sora" variant="blend" />
                    <TechLogo src="/images/logos/kling_logo_white.png" alt="Kling AI" width={100} variant="blend" />
                    <TechLogo src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/654693d569494e624c79c5d5_Luma%20Logo.svg" alt="Luma Dream Machine" width={100} variant="invert" />
                    <TechLogo src="/images/logos/midjourney_logo_white.png" alt="Midjourney" width={140} variant="blend" />
                    <TechLogo src="/images/logos/elevenlabs_logo_white.png" alt="ElevenLabs" width={120} variant="blend" />
                </div>
            </div>

            {/* 3. CINEMATIC SHOWCASE - THE PROOF */}
            <div className="bg-black">

                <VideoSection
                    index={1}
                    videoId="6934423b03bcee22ddd0d7aa"
                    subtitle="ATMOSPHERE CONTROL"
                    title="AI Relighting"
                    description="Control total sobre la iluminación y la atmósfera en post-producción. Transformamos el día en noche, o un estudio en un bosque de neón, sin necesidad de volver a rodar."
                    align="left"
                />

                <VideoSection
                    index={2}
                    videoId="6934423b7d19d070282b0f3a"
                    subtitle="PERFECT CONTINUITY"
                    title="Subject Swap"
                    description="Reemplazo de actores o vestuario manteniendo la física y la iluminación original de la escena. La flexibilidad definitiva para campañas globales."
                    align="right"
                />

                <VideoSection
                    index={3}
                    videoId="6934423a7d19d070282b0f19"
                    subtitle="VIRTUAL WORLDS"
                    title="Game Simulation"
                    description="Generación de entornos inmersivos con estética de videojuego AAA. Ideal para trailers, experiencias de marca y narrativas futuristas."
                    align="left"
                />

                <VideoSection
                    index={4}
                    videoId="6934423a491e9c48bfb1f1a9"
                    subtitle="IMPOSSIBLE COMMERCIALS"
                    title="Product Showcase"
                    description="Spots publicitarios que desafían las leyes de la física. Líquidos, partículas y dinámicas imposibles de capturar con cámaras tradicionales."
                    align="right"
                />

                <VideoSection
                    index={5}
                    videoId="6934423b03bcee22ddd0d7b3"
                    subtitle="VISUAL RHYTHMS"
                    title="Music Video"
                    description="Sincronización perfecta entre audio y video generativo. Estilos visuales abstractos y oníricos que evolucionan con la música."
                    align="left"
                />

                <VideoSection
                    index={6}
                    videoId="69342e067d19d07028299898"
                    subtitle="NARRATIVE CONSISTENCY"
                    title="Character AI"
                    description="Mantenemos la identidad y rasgos de tus personajes a través de múltiples escenas y escenarios. Storytelling coherente generado por IA."
                    align="right"
                />

            </div>

            {/* 4. CAPABILITIES SPEC SHEET */}
            <section className="py-32 bg-[#050505] border-t border-white/10">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 md:mb-0">Especificaciones<br />Técnicas</h2>
                        <p className="text-xl text-zinc-400 max-w-md font-light">
                            Nuestra suite de herramientas cubre cada aspecto de la producción moderna.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                        {[
                            { label: "TEXT-TO-VIDEO", val: "Sora / Gen-3", desc: "Guion a video cinematográfico 4K" },
                            { label: "IMAGE-TO-VIDEO", val: "Kling / Luma", desc: "Animación de assets estáticos con control de cámara" },
                            { label: "VIDEO-TO-VIDEO", val: "Runway / Domo", desc: "Transferencia de estilo y rotoscopia IA" },
                            { label: "INPAINTING", val: "Adobe / Davinci", desc: "Modificación selectiva de elementos en escena" },
                            { label: "LIP SYNC", val: "SyncLabs", desc: "Sincronización labial perfecta en cualquier idioma" },
                            { label: "UPSCALING", val: "Topaz / Magnific", desc: "Restauración y escalado hasta 8K" }
                        ].map((spec, i) => (
                            <div key={i} className="group border-b border-white/10 pb-8 hover:border-[#82ff1f] transition-colors duration-500">
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-sm font-mono text-[#82ff1f] tracking-widest">{spec.label}</span>
                                    <span className="text-lg font-medium text-white">{spec.val}</span>
                                </div>
                                <p className="text-zinc-500 font-light">{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-40 bg-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-12 mix-blend-difference">
                        EMPIEZA AHORA
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link
                            href="/contacto"
                            className="group relative px-12 py-6 bg-[#82ff1f] text-black font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Iniciar Proyecto
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link
                            href="/labs/creative"
                            className="text-white text-lg font-light hover:text-[#82ff1f] transition-colors border-b border-transparent hover:border-[#82ff1f]"
                        >
                            Explorar Creative Lab
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

