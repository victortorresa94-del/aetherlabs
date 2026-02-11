'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
    {
        value: "< 30 s",
        title: "tiempo medio de primera respuesta",
        description: "Leads atendidos mientras todavía mantienen intención real de compra.",
        delay: 0.1,
    },
    {
        value: "x10",
        title: "capacidad comercial por persona",
        description: "Un solo sistema atiende el volumen que antes requería varios comerciales.",
        delay: 0.2,
    },
    {
        value: "0",
        title: "leads olvidados",
        description: "Seguimiento automático y persistente hasta cierre o descarte.",
        delay: 0.3,
    },
    {
        value: <>+ ventas <span className="font-light">fuera de horario</span></>,
        title: "ingresos adicionales",
        description: "Captura de oportunidades en noches, fines de semana y festivos.",
        delay: 0.4,
    },
];

const DataImpactSection = () => {
    return (
        <section className="relative w-full py-28 md:py-36 px-4 sm:px-8 bg-white overflow-hidden border-t border-zinc-200">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 flex flex-col justify-center space-y-8"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                        Transformamos interacciones en{" "}
                        <span className="text-black underline decoration-[#82ff1f] decoration-4 underline-offset-4">
                            resultados
                        </span>
                        :
                    </h2>

                    <div className="space-y-6">
                        <p className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed">
                            Más capacidad comercial, cero leads perdidos. <br />
                            <span className="font-medium">Sin ampliar equipo.</span>
                        </p>
                        <p className="text-base text-gray-500 max-w-md leading-relaxed">
                            El sistema completo de{" "}
                            <strong className="text-black font-semibold">Aether Labs</strong>{" "}
                            trabaja 24/7 para que cada oportunidad sea atendida, cualificada y convertida en resultado.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-[#82ff1f] rounded-full hover:bg-[#6ee000] transition-all duration-300 shadow-lg shadow-[#82ff1f]/20 hover:shadow-[#82ff1f]/40 transform hover:-translate-y-1"
                        >
                            Agenda una demostración
                            <svg
                                className="h-5 w-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: Stats Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay, duration: 0.5 }}
                            className="group bg-black rounded-3xl p-8 flex flex-col justify-between h-full min-h-[280px] hover:scale-[1.02] transition-transform duration-500 shadow-2xl border border-white/10"
                        >
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter group-hover:text-[#82ff1f] transition-colors duration-300">
                                    {stat.value}
                                </div>
                                <h3 className="text-xl font-semibold text-[#82ff1f] mb-2">
                                    {stat.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-light">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataImpactSection;
