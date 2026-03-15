'use client'

import React from 'react';

const LossBanner = () => {
    return (
        <section className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-[#7CFF00] selection:text-black overflow-hidden flex flex-col items-center justify-center">

            {/* Noise Background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}></div>

            {/* Top Left Status */}
            <div className="absolute top-12 left-6 md:left-12 z-20">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7CFF00] shadow-[0_0_10px_#7CFF00]"></div>
                    <span className="font-mono text-xs tracking-[0.3em] text-[#7CFF00]/80 uppercase">
                        [ ERROR DE CONVERSIÓN : 33.3% ]
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col gap-24">
                <div className="flex flex-col md:flex-row items-end gap-12 border-l border-white/10 pl-6 md:pl-12 py-4">
                    <div className="flex items-baseline leading-none select-none">
                        <span className="text-[clamp(6rem,15vw,12rem)] font-extralight tracking-tighter text-white">
                            1/
                        </span>
                        <span className="text-[clamp(6rem,15vw,12rem)] font-thin tracking-tighter text-transparent ml-[-0.05em]" style={{ WebkitTextStroke: '1px #7CFF00' }}>
                            3
                        </span>
                    </div>
                    <div className="flex flex-col pb-6">
                        <div className="h-px w-12 bg-[#7CFF00]/60 mb-8"></div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 leading-[1.1]">
                            DE TUS VENTAS <br />
                            <span className="font-instrument italic font-normal text-[1.05em] text-white">Se pierden</span>
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl md:ml-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-8">
                        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] pt-1.5 border-t border-zinc-800">
                            AUDIT_LOG.01
                        </div>
                        <div className="md:col-span-3">
                            <p className="text-xl md:text-2xl text-zinc-400 font-extralight leading-relaxed">
                                No por falta de interés ni de producto — sino por no responder en el {' '}
                                <span className="text-white font-normal">momento crítico</span> de la decisión de compra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer / Status Bar */}
            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-6 gap-4 md:gap-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-500 flex flex-col md:flex-row gap-4 md:gap-12 text-center md:text-left">
                    <span className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1 h-1 bg-zinc-700"></span>
                        AETHER_SYSTEMS_V2.04
                    </span>
                    <span className="hidden md:flex items-center gap-2">
                        <span className="w-1 h-1 bg-zinc-700"></span>
                        LATENCY_OPTIMIZED: TRUE
                    </span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-400">
                    SYSTEM_STATUS: <span className="text-[#7CFF00]/70">CRITICAL_LOSS</span>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[#7CFF00]/5 blur-[150px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-white/5 blur-[120px] pointer-events-none -z-10"></div>

        </section>
    );
};

export default LossBanner;
