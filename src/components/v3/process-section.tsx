'use client'

import React from "react";
import { motion } from "framer-motion";
import { Microscope, Settings, PlugZap, LineChart } from "lucide-react";

const steps = [
    {
        icon: <Microscope className="w-8 h-8 text-[#82ff1f]" />,
        title: "Analizamos tu proceso",
        description: "Entendemos cómo vendes hoy para identificar cuellos de botella."
    },
    {
        icon: <Settings className="w-8 h-8 text-[#82ff1f]" />,
        title: "Configuramos el agente",
        description: "Personalizamos el tono, las respuestas y los objetivos de tu IA."
    },
    {
        icon: <PlugZap className="w-8 h-8 text-[#82ff1f]" />,
        title: "Conectamos todo",
        description: "Integramos el agente en tu WhatsApp, teléfono o Instagram sin fricción."
    },
    {
        icon: <LineChart className="w-8 h-8 text-[#82ff1f]" />,
        title: "Medimos y optimizamos",
        description: "Te entregamos reportes claros de rendimiento y mejora continua."
    }
];

const ProcessSection = () => {
    return (
        <section id="como-funciona" className="relative w-full py-24 bg-black flex flex-col items-center justify-center border-t border-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-40 pointer-events-none" />

            <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        Así lo ponemos en marcha
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Sin proyectos eternos. Sin complicaciones técnicas.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Horizontal connector line for large screens */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex flex-col items-center text-center bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                            <div className="mt-6 text-xs text-zinc-600 font-mono">
                                PASO 0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
