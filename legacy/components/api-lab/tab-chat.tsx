'use client';

import React, { useState } from 'react';

const TabChat = () => {
    const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim() || loading) return;
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            const response = await fetch('/api/api-lab/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, history: messages }),
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', content: "Error communicating with Gemini." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[600px] gap-4">
            <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg bg-black/40 border border-white/10">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#82ff1f]">
                            <img src="/jason-avatar.jpg" alt="Jason" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-mono text-sm max-w-md text-center">
                            Hola, soy <strong>Jason</strong>, el asistente de Aether Labs.
                            <br />¿En qué puedo ayudarte hoy?
                        </p>
                    </div>
                )}
                {messages.map((m, i) => (
                    <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {m.role === 'model' && (
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                                <img src="/jason-avatar.jpg" alt="Jason" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${m.role === 'user'
                            ? 'bg-[#82ff1f] text-black font-medium'
                            : 'bg-zinc-800 text-zinc-200'
                            }`}>
                            {m.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-zinc-800 text-zinc-500 p-3 rounded-xl text-xs font-mono animate-pulse">
                            Gemini is typing...
                        </div>
                    </div>
                )}
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:ring-1 focus:ring-[#82ff1f] outline-none font-mono text-sm"
                />
                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="bg-[#82ff1f] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#72e01b] disabled:opacity-50 transition-colors"
                >
                    SEND
                </button>
            </div>
        </div>
    );
};

export default TabChat;
