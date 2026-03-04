'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageSquare, Database, RefreshCw, Check, BrainCircuit } from 'lucide-react';

interface SalviaEcosystemProps {
    variant?: 'light' | 'dark';
    hideHeader?: boolean;
    noSection?: boolean;
}

const SalviaEcosystem = ({ variant = 'dark', hideHeader = false, noSection = false }: SalviaEcosystemProps) => {
    const isLight = variant === 'light';

    const steps = [
        {
            title: "Ads",
            desc: "Fuentes de Tráfico",
            icon: MousePointerClick,
            shape: "rounded-full"
        },
        {
            title: "Conversación",
            desc: "Agente IA en acción",
            icon: MessageSquare,
            shape: "rounded-full",
            highlight: true
        },
        {
            title: "CRM",
            desc: "Data & Sincronización",
            icon: Database,
            shape: "rounded-xl"
        },
        {
            title: "Seguimiento",
            desc: "Nurturing Automático",
            icon: RefreshCw,
            shape: "rounded-full"
        },
        {
            title: "Cierre",
            desc: "Venta o Cita",
            icon: Check,
            shape: "rounded-full",
            success: true
        },
        {
            title: "Formación",
            desc: "Optimización de IA",
            icon: BrainCircuit,
            shape: "rounded-full"
        }
    ];

    const content = (
        <div className={`max-w-7xl mx-auto px-6 ${noSection ? 'pb-20' : ''}`}>
            {hideHeader ? null : (
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-display font-medium mb-6 italic uppercase tracking-tight">Ecosistema SALVIA™</h2>
                    <p className={`${isLight ? 'text-zinc-500' : 'text-zinc-400'} text-lg font-light`}>
                        El sistema completo que conectamos a tu negocio para que no pierdas ni una sola oportunidad.
                    </p>
                </div>
            )}

            <div className="relative pt-10">
                {/* Connector Line */}
                <div className={`absolute top-[72px] left-0 w-full h-[1px] ${isLight ? 'bg-zinc-100' : 'bg-[#1f1f1f]'} hidden lg:block`}>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isLight ? 'via-[#7bff00]/30' : 'via-[#7bff00]/40'} to-transparent`}></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`
                                    w-16 h-16 mb-6 flex items-center justify-center transition-all duration-500
                                    ${step.shape}
                                    ${step.success
                                        ? 'bg-[#7bff00] shadow-[0_0_25px_rgba(123,255,0,0.5)] border-transparent'
                                        : step.highlight
                                            ? `bg-transparent border ${isLight ? 'border-[#7bff00]' : 'border-[#7bff00]/50'} shadow-[0_0_15px_rgba(123,255,0,0.15)]`
                                            : `${isLight ? 'bg-white border-zinc-200 shadow-sm' : 'bg-[#050505] border-[#1f1f1f]'} border`
                                    }
                                    group-hover:border-[#7bff00] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(123,255,0,0.2)]
                                `}>
                                    <Icon className={`
                                        transition-colors duration-500
                                        ${step.success
                                            ? 'text-black w-8 h-8'
                                            : step.highlight
                                                ? 'text-[#7bff00] w-6 h-6'
                                                : isLight ? 'text-zinc-400 w-5 h-5' : 'text-zinc-500 w-5 h-5'
                                        }
                                        group-hover:text-[#7bff00] group-hover:w-6 group-hover:h-6
                                    `} />
                                </div>
                                <h4 className={`text-sm font-medium mb-1 ${isLight ? 'text-black' : 'text-white'} uppercase tracking-tight`}>{step.title}</h4>
                                <p className={`
                                    text-[9px] uppercase tracking-[.2em] font-medium leading-tight
                                    ${step.highlight ? 'text-[#7bff00]' : isLight ? 'text-zinc-400' : 'text-zinc-600'}
                                `}>
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    if (noSection) {
        return content;
    }

    return (
        <section className={`py-24 ${isLight ? 'bg-white text-black pt-12' : 'bg-[#0a0a0a] text-white'} overflow-hidden transition-colors duration-500`}>
            {content}
        </section>
    );
};

export default SalviaEcosystem;
