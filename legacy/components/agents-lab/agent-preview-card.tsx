'use client'

import React, { useState, useRef, useEffect } from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const roleTraits: Record<string, { tone: string; speed: string; sample: string }> = {
    sales: {
        tone: "Persuasivo",
        speed: "Alta",
        sample: "Hola, entiendo perfectamente que el precio es un factor clave. Permíteme mostrarte cómo nuestro ROI supera al de la competencia en solo 3 meses...",
    },
    service: {
        tone: "Empático",
        speed: "Media",
        sample: "Lamento mucho la situación. Voy a resolverlo ahora mismo. ¿Me podrías dar tu número de pedido para verificarlo al instante?",
    },
    support: {
        tone: "Analítico",
        speed: "Detallada",
        sample: "Entendido. Vamos a diagnosticar el problema paso a paso. Primero, ¿podrías confirmar la versión que estás utilizando?",
    },
    calendar: {
        tone: "Eficiente",
        speed: "Rápida",
        sample: "Perfecto, te tengo el jueves a las 10:00 disponible. ¿Te viene bien o prefieres que busquemos otra franja?",
    },
};

const AgentPreviewCard: React.FC<Props> = ({ config }) => {
    const traits = config.role ? roleTraits[config.role] : null;

    // Chat State
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial greeting based on role/sample
    useEffect(() => {
        if (traits?.sample && messages.length === 0) {
            setMessages([{ role: 'assistant', content: traits.sample }]);
        }
    }, [traits, messages.length]);

    // Update greeting if role changes and chat is empty or has only the previous greeting
    useEffect(() => {
        if (traits?.sample && (messages.length === 0 || (messages.length === 1 && messages[0].role === 'assistant'))) {
            setMessages([{ role: 'assistant', content: traits.sample }]);
        }
    }, [config.role]); // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/agents-lab/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMessage.content,
                    config,
                    history: messages,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, hubo un error. Inténtalo de nuevo." }]);
            }
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "Error de conexión. Inténtalo de nuevo." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 relative w-full h-full">

            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 text-center">Vista Previa Interactiva</h2>

            {/* The CLEAN Card Style (No Mobile Frame) */}
            <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white w-full max-w-[320px] p-6 flex flex-col items-center transition-all duration-500 overflow-hidden h-[600px]">

                {/* Subtle gradient background inside */}
                <div className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-b from-zinc-50 to-white -z-10" />

                {/* Status Badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 z-10">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82ff1f] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#82ff1f]" />
                    </span>
                    <span className="text-[9px] font-extrabold text-[#82ff1f] uppercase tracking-wider">Activo</span>
                </div>

                {/* Header Section: Avatar & Info */}
                <div className="flex flex-col items-center w-full z-10">
                    {/* Avatar with Gradient Ring */}
                    <div className="mt-4 mb-4 relative group">
                        <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-b from-[#2563EB] to-[#22C55E] transition-transform duration-300 group-hover:scale-105">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                {config.gender === 'female' ? (
                                    <img src="/images/agentes/Laura.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                                ) : config.gender === 'male' ? (
                                    <img src="/images/agentes/Diego.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-zinc-100 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Verified Badge */}
                        <div className="absolute bottom-1 right-0 bg-[#82ff1f] text-white p-1 rounded-full border-2 border-white shadow-sm">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-bold text-zinc-900 mb-1 text-center leading-tight">
                        {config.knowledge?.businessName || "Agente Alpha"}
                    </h3>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 text-zinc-500 mb-5 mt-1">
                        <svg className="w-3 h-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l5-7v4h3l-5 7z" />
                        </svg>
                        <span className="text-[10px] font-semibold uppercase tracking-wide">
                            {config.roleName || "Asistente IA"}
                        </span>
                    </div>

                    {/* Traits Row */}
                    <div className="flex w-full gap-3 mb-4 px-1">
                        <div className="flex-1 bg-zinc-50 rounded-xl p-2.5 flex flex-col items-center justify-center border border-zinc-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                            <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Tono</span>
                            <span className="text-xs font-bold text-zinc-800">{traits?.tone || "Neutro"}</span>
                        </div>
                        <div className="flex-1 bg-zinc-50 rounded-xl p-2.5 flex flex-col items-center justify-center border border-zinc-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                            <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Velocidad</span>
                            <span className="text-xs font-bold text-zinc-800">{traits?.speed || "Normal"}</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-zinc-100 mb-4" />

                {/* Chat Area - Integrated into the card */}
                <div className="flex-1 w-full bg-zinc-50/50 rounded-2xl border border-zinc-100 overflow-hidden flex flex-col relative">
                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hide" ref={scrollRef}>
                        {messages.length === 0 && (
                            <div className="text-center py-6">
                                <span className="text-[10px] text-zinc-400">Prueba tu agente aquí</span>
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed shadow-sm ${msg.role === 'user'
                                    ? 'bg-[#82ff1f] text-black rounded-tr-none font-medium'
                                    : 'bg-white text-zinc-700 rounded-tl-none border border-zinc-100'
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-none border border-zinc-100 flex gap-1 shadow-sm">
                                    <div className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-2 border-t border-zinc-100 bg-white">
                        <div className="flex items-center gap-2 bg-zinc-50 rounded-full px-3 py-1.5 border border-zinc-200">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe..."
                                className="flex-1 bg-transparent text-xs outline-none text-black placeholder:text-zinc-400 min-w-0"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading}
                                className={`w-6 h-6 rounded-full flex-none flex items-center justify-center transition-all ${input.trim()
                                    ? 'bg-[#82ff1f] text-black shadow-sm hover:bg-[#76e61b]'
                                    : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'}`}
                            >
                                <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Ambient Shadow/Glow behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[280px] max-h-[400px] bg-gradient-to-b from-blue-500/10 to-[#82ff1f]/10 rounded-full blur-[60px] -z-10 pointer-events-none" />
        </div>
    );
};

export default AgentPreviewCard;
