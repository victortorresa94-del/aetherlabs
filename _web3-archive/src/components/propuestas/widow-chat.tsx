"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function WidowChat() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hola, soy Widow. ¿En qué puedo ayudarte con la gestión del club hoy?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/widow/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            const data = await response.json();
            if (data.message) {
                setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
            } else {
                setMessages(prev => [...prev, { role: "assistant", content: "Lo siento, he tenido un problema técnico. ¿Puedes repetir?" }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: "assistant", content: "Error de conexión con el sistema Widow." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[500px] md:h-[550px] w-full max-w-full md:max-w-md bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 bg-[#82ff1f]/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#82ff1f]/30 overflow-hidden relative">
                    <Image
                        src="/images/widow-robot.jpg"
                        alt="Widow"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">Widow Intelligence</h3>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Online v1.0</span>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
                <AnimatePresence initial={false}>
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[90%] p-3 rounded-2xl whitespace-pre-wrap ${m.role === "user"
                                ? "bg-[#82ff1f] text-black font-semibold rounded-tr-none text-sm"
                                : "bg-zinc-800/80 text-zinc-200 rounded-tl-none border border-zinc-700/30 text-[13px] leading-relaxed"
                                }`}>
                                {m.role === "assistant" ? (
                                    <div className="space-y-2">
                                        {m.content.split('\n').map((line, lineIdx) => (
                                            <p key={lineIdx}>
                                                {line.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={partIdx} className="text-[#82ff1f] font-bold">{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    m.content
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {isLoading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="bg-zinc-800/80 p-3 rounded-2xl rounded-tl-none border border-zinc-700/30">
                            <Loader2 className="w-4 h-4 animate-spin text-[#82ff1f]" />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950/20">
                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Pregunta a Widow..."
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#82ff1f]/30 transition-all"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 p-2 text-[#82ff1f] hover:bg-[#82ff1f]/10 rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
