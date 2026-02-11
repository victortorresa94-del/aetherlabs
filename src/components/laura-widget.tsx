'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LauraWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

const LauraWidget: React.FC<LauraWidgetProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Initial greeting if empty
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setLoading(true); // Fake thinking for greeting
            setTimeout(() => {
                setMessages([{ role: 'assistant', content: "¡Hola! Soy Laura. 👋 ¿Estás pensando en contratar un agente como yo para tu negocio? Pregúntame lo que quieras." }]);
                setLoading(false);
            }, 800);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            const response = await fetch('/api/laura/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg,
                    history: messages.map(m => ({ role: m.role, content: m.content }))
                }),
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, tuve un problema técnico. ¿Me lo repites?" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 bg-black/90 border border-white/10 backdrop-blur-md w-[380px] h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#82ff1f] relative">
                                <img src="/images/agentes/Laura.png" alt="Laura" className="w-full h-full object-cover object-top" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#82ff1f] rounded-full border border-black"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base">Laura AI</h3>
                                <p className="text-xs text-zinc-400">Agente de Atención y Citas</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {m.role === 'assistant' && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0 mr-2 self-end mb-1">
                                        <img src="/images/agentes/Laura.png" alt="Laura" className="w-full h-full object-cover object-top" />
                                    </div>
                                )}
                                <div className={`max-w-[80%] p-3 text-sm rounded-xl leading-relaxed ${m.role === 'user'
                                        ? 'bg-[#82ff1f] text-black font-medium rounded-tr-none'
                                        : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-white/5'
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0 mr-2 self-end mb-1">
                                    <img src="/images/agentes/Laura.png" alt="Laura" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="bg-zinc-800 p-4 rounded-xl rounded-tl-none flex gap-1 border border-white/5">
                                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10 bg-zinc-900/50">
                        <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-full px-4 py-3 focus-within:ring-1 focus-within:ring-[#82ff1f] transition-all">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleSend()}
                                placeholder="Escribe un mensaje a Laura..."
                                className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className="text-[#82ff1f] disabled:text-zinc-600 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LauraWidget;
