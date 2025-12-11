'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Mic, MicOff, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const JasonBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '¡Hey! Soy Jason, tu asistente IA. ¿En qué puedo ayudarte hoy o qué quieres construir? 🚀' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null); // Type 'any' because SpeechRecognition is not standard in all TS configs

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Speech Recognition Setup
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = false;
                recognitionRef.current.lang = 'es-ES';
                recognitionRef.current.interimResults = false;

                recognitionRef.current.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInputText(transcript);
                    // Auto-send after voice input? Maybe better let user confirm. 
                    // Let's simple send it:
                    handleSend(transcript);
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setIsRecording(false);
                }

                recognitionRef.current.onend = () => {
                    setIsRecording(false);
                };
            }
        }
    }, []);

    const toggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
        } else {
            if (recognitionRef.current) {
                setIsRecording(true);
                recognitionRef.current.start();
            } else {
                alert("Tu navegador no soporta entrada de voz nativa.");
            }
        }
    };

    const handleSend = async (text: string = inputText) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();

            const botMessage: Message = { role: 'assistant', content: data.text };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error fetching chat:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento bro, tuve un error de conexión." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-black/90 backdrop-blur-xl border border-[#333] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden font-sans"
                    >
                        {/* Header */}
                        <div className="bg-[#111] p-4 flex items-center justify-between border-b border-[#333]">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img
                                            src="/jason-avatar.jpg"
                                            alt="Jason AI"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Jason</h3>
                                    <p className="text-xs text-green-400 font-medium tracking-wide">Chief AI Architect</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-[#82ff1f] text-black rounded-tr-none font-medium'
                                        : 'bg-[#222] text-gray-100 rounded-tl-none border border-[#333]'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#222] p-3 rounded-2xl rounded-tl-none border border-[#333] flex gap-1">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#111] border-t border-[#333]">
                            <div className="flex items-center gap-2 bg-[#222] rounded-full px-2 py-2 border border-[#333] focus-within:border-neon-green transition-colors">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={toggleRecording}
                                    className={`p-2 rounded-full transition-colors ${isRecording ? 'bg-red-500/20 text-red-500 animate-pulse' : 'hover:bg-[#333] text-gray-400'}`}
                                >
                                    {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                                </motion.button>

                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={isRecording ? "Escuchando..." : "Escribe un mensaje..."}
                                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-600"
                                    disabled={isRecording || isLoading}
                                />

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSend()}
                                    disabled={!inputText.trim() || isLoading}
                                    className="p-2 bg-[#82ff1f] rounded-full text-black disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition-all"
                                >
                                    <Send size={16} className="ml-0.5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-[#82ff1f] rounded-full flex items-center justify-center shadow-lg shadow-neon-green/20 z-50 group hover:shadow-neon-green/40 transition-all"
            >
                {isOpen ? <X size={28} className="text-black" /> : <MessageSquare size={28} className="text-black fill-black" />}
                {/* Ping animation if closed */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
                )}
            </motion.button>
        </>
    );
};

// Simple Icon component to avoid import issues if Sparkles is missing
const BotIcon = ({ className }: { className?: string }) => (
    <Sparkles className={className} />
);

export default JasonBot;
