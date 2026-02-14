'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Terminal, Mic } from 'lucide-react';
import { FlubyMessage, FLUBY_SYSTEM_PROMPT } from '@/lib/fluby/DeepSeekService';

interface FlubyChatProps {
    isOpen: boolean;
    onClose: () => void;
    pathname: string;
    initialMessage?: string;
    state: any;
}

export const FlubyChat = ({ isOpen, onClose, pathname, initialMessage, state }: FlubyChatProps) => {
    const [messages, setMessages] = useState<FlubyMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen && initialMessage && !initialized.current) {
            initialized.current = true;
            handleSend(initialMessage);
        }
    }, [isOpen, initialMessage]);

    const handleSend = async (text?: string) => {
        const content = text || input;
        if (!content.trim() || isLoading) return;

        const userMsg: FlubyMessage = { role: 'user', content };
        setMessages(prev => [...prev, userMsg]);
        if (!text) setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/fluby/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg],
                    route: pathname,
                    context: {
                        section: state.context.section,
                        intent: state.intent.profile,
                        maturity: state.maturity.stage
                    }
                })
            });

            const data = await response.json();
            if (data.message) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20, y: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 20, y: 20 }}
                    className="fixed bottom-32 right-8 w-[380px] h-[500px] bg-black/95 border border-white/10 rounded-[30px] shadow-2xl backdrop-blur-2xl z-[110] flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#82ff1f] flex items-center justify-center animate-pulse">
                                <Terminal className="w-4 h-4 text-black" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-tight">FLUBY CORE</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Estado: {state.maturity.stage}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <X className="w-4 h-4 text-zinc-500" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center p-4">
                                <p className="text-zinc-500 text-xs italic">
                                    "Analizando tu comportamiento... perfil: {state.intent.profile}. ¿Cómo puedo optimizar tu flujo?"
                                </p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-[#82ff1f] text-black font-medium'
                                    : 'bg-white/5 text-zinc-300 border border-white/10'
                                    }`}>
                                    {msg.content}
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 px-4 py-2 rounded-xl flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#82ff1f] rounded-full animate-bounce" />
                                    <span className="w-1.5 h-1.5 bg-[#82ff1f] rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <span className="w-1.5 h-1.5 bg-[#82ff1f] rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-6 bg-white/[0.02] border-t border-white/5">
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Escribe al núcleo..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#82ff1f]/50 transition-colors"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={isLoading}
                                className="p-3 bg-[#82ff1f] text-black rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
