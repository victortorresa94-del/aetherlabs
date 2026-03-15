'use client'

import React from "react";
import { motion } from "framer-motion";
import { Microscope, Settings, PlugZap, LineChart, Clock } from "lucide-react";

const steps = [
    {
        icon: <Microscope className="w-7 h-7 text-black" />,
        title: "Analizamos tu proceso",
        description: "Entendemos cómo vendes hoy para identificar cuellos de botella.",
        step: "PASO 01"
    },
    {
        icon: <Settings className="w-7 h-7 text-black" />,
        title: "Configuramos el agente",
        description: "Personalizamos el tono, las respuestas y los objetivos de tu IA.",
        step: "PASO 02"
    },
    {
        icon: <PlugZap className="w-7 h-7 text-black" />,
        title: "Conectamos todo",
        description: "Integramos el agente en tu WhatsApp, teléfono o Instagram sin fricción.",
        step: "PASO 03"
    },
    {
        icon: <LineChart className="w-7 h-7 text-black" />,
        title: "Medimos y optimizamos",
        description: "Te entregamos reportes claros de rendimiento y mejora continua.",
        step: "PASO 04"
    }
];

const ProcessSection = () => {
    return (
        <section id="como-funciona" className="relative w-full py-24 md:py-32 bg-black flex flex-col items-center justify-center border-t border-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-40 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                        Así lo ponemos en marcha
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Sin proyectos eternos. Sin complicaciones técnicas.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between min-h-[280px] hover:border-[#82ff1f]/40 transition-all duration-500"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-[#82ff1f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon Circle */}
                                <div className="w-14 h-14 rounded-full bg-[#82ff1f] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(130,255,31,0.2)] group-hover:shadow-[0_0_25px_rgba(130,255,31,0.4)] transition-shadow duration-500">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#82ff1f] transition-colors duration-300">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>

                            {/* Step Number */}
                            <div className="relative z-10 mt-8 pt-4 border-t border-zinc-800">
                                <span className="text-xs text-zinc-600 font-mono tracking-widest italic">
                                    {step.step}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline Estimate */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-16 md:mt-24 flex items-center justify-center gap-3 text-zinc-500 border-t border-white/5 pt-12"
                >
                    <Clock className="w-5 h-5 text-[#82ff1f]" />
                    <span className="text-lg font-mono tracking-wide">TIEMPO APROXIMADO: <span className="text-white font-bold">30 DÍAS</span></span>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSection;
