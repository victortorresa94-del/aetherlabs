'use client'

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const metrics = [
    {
        value: "80%",
        label: "Pérdida de Interés",
        description: "de los leads pierden interés en la primera hora si no reciben respuesta clara.",
        accent: "red", // High Risk
        delay: 0.1
    },
    {
        value: "3-5 min",
        label: "Ventana Crítica",
        description: "es la ventana crítica donde un lead mantiene intención real de compra.",
        accent: "orange", // Critical
        delay: 0.2
    },
    {
        value: "40%",
        label: "Desatendidos",
        description: "de los mensajes y llamadas no se atienden a tiempo fuera de horario laboral.",
        accent: "red", // Lost Opportunity
        delay: 0.3
    }
];

const RealitySection = () => {
    return (
        <section className="relative w-full py-24 pb-32 px-6 md:px-12 bg-black text-white flex flex-col items-center overflow-hidden border-t border-white/5">

            {/* Background Noise & Glow */}
            <div className="absolute inset-0 bg-[#050505] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="w-full max-w-7xl relative z-10">

                {/* Header */}
                <div className="mb-16 text-center border-b border-white/10 pb-10">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-[#82ff1f] uppercase">
                            La Realidad
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                        Datos que <span className="font-bold text-white">duelen</span>
                    </h2>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 relative">
                    {/* Dividers for Desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                    {metrics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            className="group relative p-8 md:p-10 flex flex-col justify-between h-full border-b border-white/10 md:border-b-0"
                        >
                            <div>
                                <h3 className="text-xs font-bold tracking-[0.15em] text-[#82ff1f] uppercase mb-2">
                                    {item.label}
                                </h3>
                                <div className="mb-4">
                                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                                        {item.value}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Accent Bar */}
                            <div className="mt-8 flex items-center gap-2">
                                <div className={cn(
                                    "h-[1px] w-8 transition-colors duration-500",
                                    item.accent === 'red' ? "bg-red-900/60 group-hover:bg-red-500/50" :
                                        item.accent === 'orange' ? "bg-amber-900/60 group-hover:bg-amber-500/50" : "bg-white/10"
                                )}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RealitySection;
