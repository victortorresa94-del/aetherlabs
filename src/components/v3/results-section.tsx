'use client'

import React from "react";
import { motion } from "framer-motion";
import { X, Check, TrendingUp, Clock, PhoneOff, UserX, AlertTriangle } from "lucide-react";

const stats = [
    { value: "80%", label: "de empresas pierden ventas por no responder a tiempo" },
    { value: "<20s", label: "es el tiempo ideal de respuesta para convertir un lead" },
    { value: "5x", label: "más probabilidad de cerrar si contactas en el primer minuto" },
    { value: "+483K€", label: "facturación extra generada en un caso real (21 clínicas)" },
];

const beforePoints = [
    { icon: Clock, text: "Leads esperando horas o días sin respuesta" },
    { icon: UserX, text: "Seguimiento manual, inconsistente y olvidadizo" },
    { icon: PhoneOff, text: "Llamadas y mensajes perdidos fuera de horario" },
    { icon: AlertTriangle, text: "Equipo saturado respondiendo lo mismo una y otra vez" },
    { icon: TrendingUp, text: "Oportunidades enfriándose sin siguiente paso claro" },
];

const afterPoints = [
    "Respuesta inmediata en <20 segundos, 24/7",
    "Seguimiento automático y persistente hasta el cierre",
    "Captura de ventas nocturnas y en fin de semana",
    "Equipo liberado para cerrar tratos y dar experiencia premium",
    "Pipeline ordenado: cada lead con su estado y siguiente paso",
];

const ResultsSection = () => {
    return (
        <section className="relative w-full py-24 bg-black flex flex-col items-center justify-center border-t border-zinc-900">
            <div className="container px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#82ff1f] text-xs font-mono mb-4 block tracking-widest uppercase font-bold">[ DATOS REALES ]</span>
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        Menos caos. <span className="text-[#82ff1f] font-normal">Más cierres.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        El 80% de las empresas pierde ventas por seguimiento, no por marketing. Transformamos la fricción en fluidez operativa.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-[#82ff1f] mb-2">{stat.value}</div>
                            <p className="text-xs text-zinc-500 leading-relaxed">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Before / After Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Before Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-12 rounded-3xl bg-black border border-zinc-700"
                    >
                        <h3 className="text-2xl font-light text-red-400 mb-8 flex items-center gap-3">
                            <X className="w-6 h-6" />
                            Sin Aether Labs
                        </h3>
                        <ul className="space-y-5">
                            {beforePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 text-white">
                                    <point.icon className="w-5 h-5 text-red-500/60 flex-shrink-0 mt-0.5" />
                                    <span>{point.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* After Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-12 rounded-3xl bg-black border border-zinc-700 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Check className="w-32 h-32 text-[#82ff1f]" />
                        </div>

                        <h3 className="text-2xl font-light text-[#82ff1f] mb-8 flex items-center gap-3 relative z-10">
                            <Check className="w-6 h-6" />
                            Con Aether Labs
                        </h3>
                        <ul className="space-y-5 relative z-10">
                            {afterPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 text-white">
                                    <Check className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-0.5" />
                                    <span className="font-medium text-white">{point}</span>
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
