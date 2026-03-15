'use client'

import React from "react";
import { motion } from "framer-motion";
import { X, Check, TrendingUp, Clock, PhoneOff, UserX, AlertTriangle, ArrowRight } from "lucide-react";

const stats = [
    { value: "80%", label: "de los leads se enfrían en la primera hora", highlight: true },
    { value: "<5 min", label: "tiempo crítico de respuesta para convertir" },
    { value: "300%", label: "aumento en conversión con respuesta inmediata" },
];

const beforePoints = [
    { icon: Clock, text: "Leads esperando horas o días sin respuesta" },
    { icon: UserX, text: "Seguimiento manual, inconsistente y olvidadizo" },
    { icon: PhoneOff, text: "Llamadas y mensajes perdidos fuera de horario" },
    { icon: AlertTriangle, text: "Equipo saturado respondiendo lo mismo una y otra vez" },
];

const afterPoints = [
    "Respuesta inmediata en <20 segundos, 24/7",
    "Seguimiento automático y persistente hasta el cierre",
    "Captura de ventas nocturnas y en fin de semana",
    "Equipo liberado para cerrar tratos y dar experiencia premium",
];

const ResultsSection = () => {
    return (
        <section className="relative w-full py-32 bg-zinc-950 flex flex-col items-center justify-center border-t border-zinc-900">
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Main Headline - Bigger and bolder */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
                        MENOS CAOS, <br />
                        <span className="text-[#82ff1f]">MÁS CIERRES.</span>
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        El problema no es que no tengas leads. El problema es que <strong className="text-white">el 80% de ellos se enfrían</strong> antes de que tu equipo pueda decir "hola".
                    </p>
                </div>

                {/* Stats Row - Highlighted */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-b border-white/5 pb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`text-center p-8 rounded-3xl ${stat.highlight ? 'bg-red-500/10 border border-red-500/20' : 'bg-zinc-900/30 border border-zinc-800'}`}
                        >
                            <div className={`text-5xl md:text-6xl font-bold mb-4 ${stat.highlight ? 'text-red-500' : 'text-white'}`}>{stat.value}</div>
                            <p className="text-base text-zinc-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison - Totally Separated */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative">

                    {/* VS Badge in center */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-16 h-16 bg-black border border-white/20 rounded-full items-center justify-center text-zinc-500 font-bold text-xl">
                        VS
                    </div>

                    {/* Without Aether */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 p-10 rounded-3xl bg-red-950/20 border border-red-900/30"
                    >
                        <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-3 uppercase tracking-wider">
                            <X className="w-8 h-8" />
                            Sin Agentes
                        </h3>
                        <ul className="space-y-6">
                            {beforePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 text-red-200/80 text-lg">
                                    <point.icon className="w-6 h-6 text-red-500/50 flex-shrink-0 mt-1" />
                                    <span>{point.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* With Aether */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 p-10 rounded-3xl bg-[#82ff1f]/5 border border-[#82ff1f]/30 relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#82ff1f]/10 rounded-full blur-[80px]" />

                        <h3 className="text-2xl font-bold text-[#82ff1f] mb-8 flex items-center gap-3 uppercase tracking-wider relative z-10">
                            <Check className="w-8 h-8" />
                            Con Agentes
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {afterPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 text-white text-lg">
                                    <div className="min-w-[24px] mt-1">
                                        <Check className="w-6 h-6 text-[#82ff1f]" />
                                    </div>
                                    <span className="font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ResultsSection;
