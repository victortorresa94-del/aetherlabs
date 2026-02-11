'use client'

import React from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
}

const channelLabels: Record<string, string> = {
    whatsapp: "WhatsApp",
    webchat: "Web Chat",
    voice: "Voz",
    instagram: "Instagram",
};

const roleTraits: Record<string, { tone: string; speed: string; sample: string }> = {
    sales: {
        tone: "Persuasivo",
        speed: "Alta",
        sample: "\"Hola, entiendo perfectamente que el precio es un factor clave. Permíteme mostrarte cómo nuestro ROI supera al de la competencia en solo 3 meses...\"",
    },
    service: {
        tone: "Empático",
        speed: "Media",
        sample: "\"Lamento mucho la situación. Voy a resolverlo ahora mismo. ¿Me podrías dar tu número de pedido para verificarlo al instante?\"",
    },
    support: {
        tone: "Analítico",
        speed: "Detallada",
        sample: "\"Entendido. Vamos a diagnosticar el problema paso a paso. Primero, ¿podrías confirmar la versión que estás utilizando?\"",
    },
    calendar: {
        tone: "Eficiente",
        speed: "Rápida",
        sample: "\"Perfecto, te tengo el jueves a las 10:00 disponible. ¿Te viene bien o prefieres que busquemos otra franja?\"",
    },
};

const AgentPreviewCard: React.FC<Props> = ({ config }) => {
    const traits = config.role ? roleTraits[config.role] : null;

    return (
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#82ff1f]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 text-center relative z-10">Vista Previa</h2>

            {/* The Card */}
            <div className="relative bg-white rounded-[1.5rem] shadow-xl border border-zinc-100 p-6 flex flex-col items-center transition-all duration-500">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82ff1f] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#82ff1f]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#82ff1f] uppercase tracking-wider">Activo</span>
                </div>

                {/* Avatar */}
                <div className="mt-6 mb-4 relative">
                    <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#82ff1f] to-blue-500">
                        <div className="w-full h-full rounded-full bg-white p-[3px]">
                            <div className="w-full h-full rounded-full bg-zinc-100 flex items-center justify-center text-4xl">
                                {config.gender === 'female' ? '👩🏻‍💼' :
                                    config.gender === 'male' ? '👨🏻‍💼' :
                                        config.gender === 'neutral' ? '🧑🏻‍💼' :
                                            <svg className="w-10 h-10 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>}
                            </div>
                        </div>
                    </div>
                    {config.gender && (
                        <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md">
                            <svg className="w-4 h-4 text-[#82ff1f]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-black mb-1">
                    {config.knowledge?.businessName || "Tu Agente"}
                </h3>
                {config.roleName && (
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-xs font-medium mt-1 mb-4">
                        {config.roleName}
                    </div>
                )}

                {/* Channels */}
                {config.channels.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                        {config.channels.map(ch => (
                            <span key={ch} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#82ff1f]/15 text-black border border-[#82ff1f]/20">
                                {channelLabels[ch] || ch}
                            </span>
                        ))}
                    </div>
                )}

                {/* Traits */}
                {traits && (
                    <div className="w-full grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-zinc-50 rounded-lg p-2.5 text-center">
                            <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Tono</span>
                            <span className="block text-xs font-semibold text-zinc-800">{traits.tone}</span>
                        </div>
                        <div className="bg-zinc-50 rounded-lg p-2.5 text-center">
                            <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Velocidad</span>
                            <span className="block text-xs font-semibold text-zinc-800">{traits.speed}</span>
                        </div>
                    </div>
                )}

                {/* Sample Response */}
                {traits && (
                    <div className="w-full bg-zinc-50 rounded-lg p-3 text-left relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#82ff1f]" />
                        <p className="text-[10px] text-zinc-400 mb-1 pl-2">Respuesta Ejemplo:</p>
                        <p className="text-xs text-zinc-600 italic leading-snug pl-2">{traits.sample}</p>
                    </div>
                )}

                {/* Empty State */}
                {!config.role && config.channels.length === 0 && (
                    <div className="text-center py-4">
                        <p className="text-sm text-zinc-400 italic">Configura tu agente para ver la vista previa</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgentPreviewCard;
