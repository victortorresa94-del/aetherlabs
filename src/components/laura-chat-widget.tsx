'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LauraChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

const LauraChatWidget = ({ isOpen, onClose }: LauraChatWidgetProps) => {
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
            setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, tuve un problema de conexión. ¿Puedes repetirlo?" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Chat Window - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[95vw] max-w-[420px] h-[600px] max-h-[85vh] bg-black/95 border border-[#82ff1f]/30 backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(130,255,31,0.15)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-zinc-900/60">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#82ff1f] relative bg-zinc-800">
                                    <img src="/images/agentes/Laura.png" alt="Laura" className="w-full h-full object-cover object-[50%_20%]" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#82ff1f] rounded-full border-2 border-black"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Laura</h3>
                                    <p className="text-xs text-[#82ff1f]">Recepcionista Digital · En línea</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4" ref={scrollRef}>
                            {messages.length === 0 && (
                                <div className="text-center mt-8 space-y-3">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#82ff1f]/30 mx-auto bg-zinc-800">
                                        <img src="/images/agentes/Laura.png" alt="Laura" className="w-full h-full object-cover object-[50%_20%]" />
                                    </div>
                                    <p className="text-white font-semibold text-base">Hola 😊 Soy Laura</p>
                                    <p className="text-zinc-400 text-sm px-4 leading-relaxed">
                                        Me encargo de la atención y agenda en clínicas de salud y estética.
                                    </p>
                                    <p className="text-zinc-500 text-xs px-6">
                                        Escríbeme para ver cómo trabajo o hacemos una simulación.
                                    </p>
                                </div>
                            )}
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3.5 text-sm rounded-2xl leading-relaxed ${m.role === 'user'
                                        ? 'bg-[#82ff1f] text-black font-medium rounded-br-md'
                                        : 'bg-zinc-800/80 text-zinc-200 rounded-bl-md border border-white/5'
                                        }`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-800/80 p-3.5 rounded-2xl rounded-bl-md flex gap-1.5 border border-white/5">
                                        <div className="w-2 h-2 bg-[#82ff1f]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-2 h-2 bg-[#82ff1f]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-2 h-2 bg-[#82ff1f]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-zinc-900/60">
                            <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-4 py-2.5 focus-within:ring-1 focus-within:ring-[#82ff1f]/50 focus-within:border-[#82ff1f]/30 transition-all">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                                    placeholder="Escribe un mensaje..."
                                    className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                                    autoFocus
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={loading || !input.trim()}
                                    className="text-[#82ff1f] disabled:text-zinc-600 hover:text-white transition-colors p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LauraChatWidget;
