'use client'

import React from "react";
import { motion } from "framer-motion";

const AgentsIntro = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 lg:px-12 overflow-hidden bg-black">
            {/* Tech Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(130, 255, 31, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(130, 255, 31, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            ></div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#82ff1f]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col justify-center h-full pt-8"
                    >
                        <div className="inline-flex items-center space-x-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#82ff1f] shadow-[0_0_10px_rgba(130,255,31,0.6)]"></span>
                            <span className="text-[#82ff1f] text-sm font-bold tracking-widest uppercase">Infraestructura Conversacional</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white tracking-tight">
                            Agentes de IA: <br />
                            <span className="text-zinc-400">Tu equipo de ventas que </span>
                            <span className="text-white relative inline-block">
                                nunca duerme.
                                <svg className="absolute w-full h-2 bottom-1 left-0 text-[#82ff1f] opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-lg text-zinc-400 leading-relaxed font-light mb-10 max-w-md">
                            Sistemas inteligentes diseñados para automatizar la captación, cualificación y cierre de oportunidades comerciales en tiempo real. Deja de perder leads fuera del horario laboral.
                        </p>

                        <div className="flex items-center space-x-4 group cursor-pointer w-fit">
                            <a href="#agentes" className="text-white font-medium border-b border-[#82ff1f] pb-0.5 hover:text-[#82ff1f] transition-colors duration-300">
                                Explorar integración
                            </a>
                            <span className="text-[#82ff1f] group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </motion.div>

                    {/* Right Column: Capabilities Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid gap-6">

                            {/* Capability Card 1: Multicanalidad */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="group relative p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-[#82ff1f]/50 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#82ff1f]/0 via-[#82ff1f]/5 to-[#82ff1f]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 p-3 rounded-lg bg-zinc-800/50 text-zinc-300 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#82ff1f] transition-colors">Multicanalidad</h3>
                                        <p className="text-zinc-400 font-light leading-relaxed mb-4">Conectados a WhatsApp, Instagram, Web y Telefonía. Un solo cerebro gestionando todas tus puertas de entrada.</p>
                                        {/* Visual Channel Indicators */}
                                        <div className="flex items-center space-x-4 mt-2 border-t border-zinc-800 pt-4">
                                            {["WA", "IG", "WEB", "TEL"].map((channel, i) => (
                                                <div key={channel} className="flex items-center space-x-1 text-xs text-zinc-500 uppercase tracking-wider">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#82ff1f]/60' : 'bg-zinc-600'}`}></span>
                                                    <span>{channel}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Capability Card 2: Inteligencia Real */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="group relative p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-[#82ff1f]/50 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#82ff1f]/0 via-[#82ff1f]/5 to-[#82ff1f]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 p-3 rounded-lg bg-zinc-800/50 text-zinc-300 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#82ff1f] transition-colors">Inteligencia Real</h3>
                                        <p className="text-zinc-400 font-light leading-relaxed">Entienden contexto, resuelven dudas complejas y hablan como humanos. Olvida los chatbots de menús rígidos.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Capability Card 3: Integración Total */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="group relative p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-[#82ff1f]/50 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#82ff1f]/0 via-[#82ff1f]/5 to-[#82ff1f]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 p-3 rounded-lg bg-zinc-800/50 text-zinc-300 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#82ff1f] transition-colors">Integración Total</h3>
                                        <p className="text-zinc-400 font-light leading-relaxed mb-4">Sincronización instantánea con tu CRM y flujos de trabajo existentes.</p>
                                        {/* Mini visual representing data flow */}
                                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#82ff1f]/40 w-1/3 group-hover:w-full transition-all duration-1000 ease-out rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-mono uppercase">
                                            <span>Agent Input</span>
                                            <span>CRM Sync</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* Bottom footer for section context */}
                <div className="mt-20 border-t border-zinc-900 pt-6 flex justify-between items-center text-zinc-600 text-xs uppercase tracking-widest font-mono">
                    <div>Aether Labs System v3.0</div>
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span>System Online</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentsIntro;
