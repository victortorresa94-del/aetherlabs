'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { agentsData } from "@/data/agents"; // Importing shared data

// Custom order implementation
const orderedIds = ["laura", "diego", "clara", "alvaro", "maria", "daniela"];
const orderedAgents = orderedIds.map(id => agentsData.find(a => a.id === id)).filter(Boolean);

const AgentsSection = () => {
    return (
        <section id="agentes" className="relative w-full py-24 px-6 bg-[#080808] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-instrument text-white mb-6 tracking-tight font-normal">
                        Nuestros Agentes
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light">
                        Agentes de IA autónomos, entrenados para ejecutar tareas comerciales reales.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {orderedAgents.map((agent: any, index: number) => (
                        <Link key={agent.id} href={`/agentes/${agent.id}`} className="block h-full">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative flex flex-col bg-zinc-900/30 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#82ff1f]/50 transition-all duration-500 h-full hover:shadow-[0_0_30px_rgba(130,255,31,0.1)]"
                            >
                                {/* Image Container */}
                                <div className="relative h-[380px] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                                    <Image
                                        src={agent.image}
                                        alt={agent.name}
                                        fill
                                        className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                    />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">

                                        {/* Name */}
                                        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-md">{agent.name}</h3>

                                        {/* Role */}
                                        <div className="mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] shadow-[0_0_8px_rgba(130,255,31,0.6)]"></span>
                                            <span className="text-[11px] uppercase tracking-[0.2em] text-[#82ff1f] font-bold drop-shadow-sm">{agent.role}</span>
                                        </div>

                                        {/* Checklist */}
                                        <ul className="space-y-2 mb-2">
                                            {agent.checklist?.map((item: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-200 font-medium drop-shadow-sm">
                                                    <span className="text-[#82ff1f] mt-1 shrink-0">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Extended Details Container (Benefit + Ideal For) */}
                                <div className="px-8 pb-8 -mt-4 bg-black flex-grow flex flex-col gap-6 relative z-20">
                                    {/* Benefit */}
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Beneficio</p>
                                        <p className="text-white text-sm font-medium border-l-2 border-[#82ff1f] pl-3 py-1">
                                            {agent.benefit?.replace("👉 ", "")}
                                        </p>
                                    </div>

                                    {/* Ideal For */}
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Ideal para</p>
                                        <ul className="space-y-1">
                                            {Array.isArray(agent.idealFor) ? agent.idealFor.map((item: string, idx: number) => (
                                                <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                                                    <span className="text-zinc-600 mt-1">▪</span>
                                                    {item}
                                                </li>
                                            )) : (
                                                <li className="text-zinc-400 text-sm">{agent.idealFor}</li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* CTA Link */}
                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <span className="inline-flex items-center text-sm font-medium text-[#82ff1f] hover:text-white transition-colors duration-300 group/link">
                                            Conocer agente
                                            <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AgentsSection;
