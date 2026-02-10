'use client'

import React from "react";
import Link from 'next/link';
import Image from "next/image"; // Converting to next/image where possible for optimization
import { ArrowRight, Play } from "lucide-react";
import WordRotate from "@/components/ui/word-rotate";

// Hero Animation replaced by video

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-black">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/Video%20Hero%20Aether%20v3.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 z-[1] bg-black/75"></div>

            {/* Bottom Gradient Fade (no hard line) */}
            <div className="absolute bottom-0 left-0 w-full h-40 z-[3] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 z-[2] pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full opacity-20 bg-[radial-gradient(circle,_rgba(130,255,31,0.15)_0%,_rgba(0,0,0,0)_70%)]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-12">

                {/* Text Content - Centered */}
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse"></span>
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Enterprise AI Systems</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
                        Convertimos <br className="hidden md:block" />
                        conversaciones en <WordRotate
                            words={["sistemas", "ventas", "clientes", "negocios", "resultados"]}
                            className="text-zinc-400 inline-flex"
                            duration={2500}
                        />
                    </h1>

                    {/* Subtitle */}
                    <p className="font-light text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                        Automatiza todo tu proceso comercial con IA, desde la captación hasta la atención postventa. Precisión absoluta para tu empresa.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <Link
                            href="#contacto"
                            className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span>Empezar ahora</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                            className="group px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-medium hover:border-white transition-colors flex items-center gap-2 backdrop-blur-sm"
                            onClick={() => console.log('Demo Clicked')}
                        >
                            <span>Ver demo</span>
                            <Play className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity fill-current" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
