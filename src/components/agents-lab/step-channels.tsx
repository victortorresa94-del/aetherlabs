'use client'

import React from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
    updateConfig: (partial: Partial<AgentConfig>) => void;
}

const channels = [
    {
        id: "whatsapp",
        name: "WhatsApp Business",
        description: "Automatización de respuestas y ventas directas a través de la API oficial.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        id: "webchat",
        name: "Web Chat",
        description: "Widget flotante inteligente incrustado en tu sitio web corporativo.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    },
    {
        id: "voice",
        name: "Voz / Llamadas",
        description: "Interacción por voz natural para soporte telefónico entrante y saliente.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    {
        id: "instagram",
        name: "Instagram Direct",
        description: "Gestión de DMs, respuestas a historias y comentarios en posts.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        ),
    },
];

const StepChannels: React.FC<Props> = ({ config, updateConfig }) => {
    const toggleChannel = (channelId: string) => {
        const current = config.channels;
        const updated = current.includes(channelId)
            ? current.filter(c => c !== channelId)
            : [...current, channelId];
        updateConfig({ channels: updated });
    };

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
                    Configura tu infraestructura comercial
                </h1>
                <p className="text-zinc-500 text-lg font-medium">
                    Paso 01: Elige los canales de actuación de tu agente.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {channels.map(channel => {
                    const isSelected = config.channels.includes(channel.id);
                    return (
                        <button
                            key={channel.id}
                            onClick={() => toggleChannel(channel.id)}
                            className={`text-left h-full p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg flex flex-col justify-between min-h-[220px] ${isSelected
                                    ? 'border-[#82ff1f] shadow-[0_0_0_1px_#82ff1f,0_10px_15px_-3px_rgba(130,255,31,0.1)]'
                                    : 'border-zinc-200 bg-white hover:border-zinc-400'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-black">
                                    {channel.icon}
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-[#82ff1f] border-[#82ff1f] text-black' : 'border-zinc-200 text-transparent'
                                    }`}>
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-black">{channel.name}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{channel.description}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StepChannels;
