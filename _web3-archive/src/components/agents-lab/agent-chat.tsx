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

const AgentChat: React.FC<Props> = ({ config }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

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
        <div className="bg-white rounded-2xl border border-zinc-100 flex flex-col overflow-hidden" style={{ height: '340px' }}>
            {/* Header */}
            <div className="px-4 py-3 border-b border-zinc-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">Probar Agente</span>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-xs text-zinc-400">Escribe un mensaje para probar tu agente</p>
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.role === 'user'
                            ? 'bg-black text-white rounded-br-sm'
                            : 'bg-zinc-100 text-black rounded-bl-sm'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-zinc-100 px-4 py-2 rounded-xl rounded-bl-sm flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-zinc-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Escribe un mensaje..."
                        className="flex-1 px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent outline-none"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className={`px-3 py-2 rounded-lg transition-colors ${input.trim() && !isLoading
                            ? 'bg-[#82ff1f] text-black hover:bg-[#6ee000]'
                            : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentChat;
