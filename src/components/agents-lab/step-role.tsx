'use client'

import React from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
    updateConfig: (partial: Partial<AgentConfig>) => void;
}

const roles = [
    {
        id: "sales",
        name: "Ventas & Conversión",
        description: "Optimizado para persuasión, cierre de tratos y manejo de objeciones comerciales.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        id: "service",
        name: "Atención al Cliente",
        description: "Empático y resolutivo. Ideal para primera línea de contacto y FAQs.",
        color: "bg-purple-50 text-purple-600",
    },
    {
        id: "support",
        name: "Soporte Técnico",
        description: "Analítico y detallista. Especializado en troubleshooting paso a paso.",
        color: "bg-orange-50 text-orange-600",
    },
    {
        id: "calendar",
        name: "Gestión de Agenda",
        description: "Eficiente y organizado. Gestiona citas, recordatorios y disponibilidad.",
        color: "bg-pink-50 text-pink-600",
    },
];

const roleIcons: Record<string, React.ReactNode> = {
    sales: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
    ),
    service: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    support: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12" />
        </svg>
    ),
    calendar: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
    ),
};

const StepRole: React.FC<Props> = ({ config, updateConfig }) => {
    const selectRole = (roleId: string, roleName: string) => {
        updateConfig({ role: roleId, roleName });
    };

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3 tracking-tight">
                    Define el Rol de tu Agente
                </h1>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    Selecciona un módulo base y personaliza las instrucciones para adaptar el comportamiento a tus necesidades.
                </p>
            </div>

            {/* Role Cards */}
            <div className="space-y-4 mb-10">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Módulos de Comportamiento</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roles.map(role => {
                        const isSelected = config.role === role.id;
                        return (
                            <button
                                key={role.id}
                                onClick={() => selectRole(role.id, role.name)}
                                className={`text-left p-5 rounded-xl border transition-all duration-300 h-full flex flex-col hover:shadow-lg ${isSelected
                                    ? 'ring-2 ring-[#82ff1f] bg-[#82ff1f]/5 border-[#82ff1f]'
                                    : 'border-zinc-200 bg-white hover:border-zinc-300'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className={`w-10 h-10 rounded-lg ${role.color} flex items-center justify-center`}>
                                        {roleIcons[role.id]}
                                    </div>
                                    {isSelected && (
                                        <svg className="w-6 h-6 text-[#82ff1f]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="font-bold text-black mb-1">{role.name}</h3>
                                <p className="text-sm text-zinc-500">{role.description}</p>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Gender / Avatar Selector */}
            <div className="space-y-4 mb-10">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Apariencia del Agente</label>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { id: "female", label: "Mujer", emoji: "👩🏻‍💼" },
                        { id: "male", label: "Hombre", emoji: "👨🏻‍💼" },
                        { id: "neutral", label: "No binario", emoji: "🧑🏻‍💼" },
                    ].map(g => {
                        const isSelected = config.gender === g.id;
                        return (
                            <button
                                key={g.id}
                                onClick={() => updateConfig({ gender: g.id })}
                                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 hover:shadow-lg ${isSelected
                                        ? 'ring-2 ring-[#82ff1f] bg-[#82ff1f]/5 border-[#82ff1f]'
                                        : 'border-zinc-200 bg-white hover:border-zinc-300'
                                    }`}
                            >
                                <span className="text-3xl">{g.emoji}</span>
                                <span className="text-sm font-semibold text-black">{g.label}</span>
                                {isSelected && (
                                    <svg className="w-5 h-5 text-[#82ff1f]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Instructions Textarea */}
            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Instrucciones Específicas</label>
                    <span className="text-xs text-zinc-400">{config.instructions.length} / 1500</span>
                </div>
                <textarea
                    value={config.instructions}
                    onChange={e => {
                        if (e.target.value.length <= 1500) {
                            updateConfig({ instructions: e.target.value });
                        }
                    }}
                    className="w-full h-40 p-6 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all resize-none text-base leading-relaxed placeholder-zinc-400 outline-none"
                    placeholder="Escribe aquí cómo debe comportarse tu agente. Por ejemplo: 'Sé extremadamente cortés pero firme al negociar precios. Si el cliente menciona a la competencia, resalta nuestra garantía de 30 días...'"
                />
            </div>
        </div>
    );
};

export default StepRole;

