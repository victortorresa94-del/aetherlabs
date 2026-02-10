'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const agents = [
    {
        id: "maria",
        name: "María",
        role: "Ventas / Sales",
        checklist: [
            "Cualificación y filtrado 24/7.",
            "Agenda reuniones de alto valor.",
            "Sincronización con CRM."
        ],
        image: "/images/agentes/Maria.png",
    },
    {
        id: "laura",
        name: "Laura",
        role: "Atención al Cliente",
        checklist: [
            "Resolución de tickets L1.",
            "Aprendizaje continuo.",
            "Escalado inteligente a humanos."
        ],
        image: "/images/agentes/Laura.png",
    },
    {
        id: "diego",
        name: "Diego",
        role: "Soporte por Voz",
        checklist: [
            "Interacciones de voz naturales.",
            "Soporte multilingüe real.",
            "Análisis de sentimiento."
        ],
        image: "/images/agentes/Diego.png",
    },
    {
        id: "alvaro",
        name: "Álvaro",
        role: "Soporte Técnico N1",
        checklist: [
            "Diagnóstico de problemas técnicos.",
            "Guías paso a paso.",
            "Integración con ticketing."
        ],
        image: "/images/agentes/Álvaro.png",
    },
    {
        id: "clara",
        name: "Clara",
        role: "Atención Masiva",
        checklist: [
            "Gestión de picos de tráfico.",
            "Respuestas consistentes.",
            "Recopilación de datos masiva."
        ],
        image: "/images/agentes/Clara.png",
    },
    {
        id: "daniela",
        name: "Daniela",
        role: "Expansión Latam",
        checklist: [
            "Adaptación cultural de guiones.",
            "Modismos y jerga local.",
            "Horario extendido."
        ],
        image: "/images/agentes/Latina.png",
    }
];

const AgentsSection = () => {
    return (
        <section id="agentes" className="relative w-full py-24 px-6 bg-[#080808]">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <span className="text-[#82ff1f] text-xs font-mono mb-4 block tracking-widest uppercase font-bold">[ SELECCIÓN DE SISTEMA ]</span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        Nuestros <span className="font-bold">Agentes</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light">
                        Agentes de IA autónomos, entrenados para ejecutar tareas comerciales reales. Cada uno especializado en un eslabón de tu proceso de ventas.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {agents.map((agent, index) => (
                        <motion.article
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative flex flex-col bg-black rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 border border-zinc-900/50 hover:border-zinc-800"
                        >
                            {/* Image Container */}
                            <div className="relative h-[420px] overflow-hidden w-full">
                                <Image
                                    src={agent.image}
                                    alt={agent.name}
                                    fill
                                    className="w-full h-full object-cover object-top grayscale contrast-[1.1] brightness-90 transition-all duration-500 group-hover:brightness-100 group-hover:contrast-[1.15] group-hover:scale-[1.03]"
                                />
                                {/* Fade to black gradient overlay */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 80%, #000000 100%)' }}
                                ></div>
                            </div>

                            {/* Content Container - overlaps image */}
                            <div className="relative z-20 flex flex-col justify-between flex-grow px-8 pb-10 -mt-12 bg-transparent">
                                <div>
                                    {/* Role Label */}
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] shadow-[0_0_8px_rgba(130,255,31,0.6)]"></span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#82ff1f] font-bold">{agent.role}</span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{agent.name}</h3>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-8">
                                        {agent.checklist.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 group/item">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#82ff1f]/40 group-hover/item:bg-[#82ff1f] transition-colors"></span>
                                                <span className="text-zinc-400 text-sm font-light leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Link */}
                                <a href="#contacto" className="inline-flex items-center text-sm font-medium text-[#82ff1f] hover:text-white transition-colors duration-300 group/link mt-auto pt-4 border-t border-zinc-900">
                                    Conocer agente
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AgentsSection;
