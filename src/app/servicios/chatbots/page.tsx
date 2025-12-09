"use client";

import React, { useState } from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Bot,
    MessageSquare,
    BrainCircuit,
    Server,
    Database,
    Zap,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Users,
    ShoppingBag,
    Briefcase,
    Stethoscope,
    Calculator
} from 'lucide-react';
import ChatbotBuilder from '@/components/features/chatbot-builder';

export default function ChatbotsPage() {
    // Calculator State
    const [queries, setQueries] = useState(1000);
    const [botType, setBotType] = useState('text'); // text, voice, multimodal
    const [model, setModel] = useState('standard'); // economic, standard, advanced

    // Calculator Logic
    const calculateCost = () => {
        let baseCostPerQuery = 0.005; // Standard text

        if (botType === 'voice') baseCostPerQuery = 0.06;
        if (botType === 'multimodal') baseCostPerQuery = 0.02;

        if (model === 'economic') baseCostPerQuery *= 0.5;
        if (model === 'advanced') baseCostPerQuery *= 2;

        const totalCost = queries * baseCostPerQuery;
        const humanCost = queries * 1; // Assuming 1€ per interaction
        const savings = humanCost - totalCost;

        return {
            monthly: totalCost.toFixed(2),
            savings: savings.toFixed(2),
            human: humanCost.toFixed(2)
        };
    };

    const costs = calculateCost();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="pt-40 pb-20 relative overflow-hidden">
                    {/* Subtle Green Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#82ff1f]/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-mono tracking-widest uppercase mb-8"
                            >
                                <Bot size={14} />
                                <span>Asistentes Inteligentes 24/7</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight"
                            >
                                Chatbots <span className="text-[#82ff1f]">IA</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-light text-white mb-6"
                            >
                                Asistentes inteligentes de texto y voz para tu negocio, disponibles 24/7.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                Olvida los chatbots antiguos. Creamos agentes reales que entienden, razonan y ejecutan acciones.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center bg-[#82ff1f] text-black font-bold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(130,255,31,0.4)]"
                                >
                                    Solicitar Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <a
                                    href="#calculadora"
                                    className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white font-medium text-base py-4 px-8 rounded-full transition-all duration-200 hover:bg-white/5"
                                >
                                    Calcula tu coste
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. VALUE BLOCKS */}
                <section className="py-20 bg-[#050505]">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: MessageSquare,
                                    title: "Texto y Voz",
                                    desc: "Chatbots en Web, WhatsApp, Instagram, Telegram, Apps propias y líneas telefónicas."
                                },
                                {
                                    icon: Zap,
                                    title: "Acciones Reales",
                                    desc: "Agendar citas, consultar stock, enviar emails, actualizar CRM, procesar leads."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Costes Ridículos",
                                    desc: "Una consulta cuesta hoy menos de 0.002€. Eficiencia máxima para tu negocio."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Latencia Casi Nula",
                                    desc: "Respuestas en milisegundos. Fluidez total en conversaciones de voz y texto."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-[#82ff1f]/30 transition-colors group">
                                    <div className="w-12 h-12 bg-[#82ff1f]/10 rounded-xl flex items-center justify-center mb-6 text-[#82ff1f] group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. TYPES OF CHATBOTS */}
                <section className="py-24 border-t border-white/5">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">¿Qué tipos de chatbots podemos crear?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "Atención al cliente 24/7",
                                "Ventas y captación de leads",
                                "Asistentes internos para empleados",
                                "Gestión de agenda y reservas",
                                "Agentes especializados (Legal, Médico...)",
                                "Chatbots de voz (Llamadas)",
                                "Chatbots multimodales (Analizan imágenes/PDFs)"
                            ].map((type, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/20 border border-white/5">
                                    <div className="w-2 h-2 bg-[#82ff1f] rounded-full shadow-[0_0_10px_#82ff1f]" />
                                    <span className="text-zinc-300 font-light">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. INTEGRATIONS */}
                <section className="py-24 bg-[#050505]">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">¿Dónde se pueden integrar?</h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                { icon: "https://img.icons8.com/color/96/chrome.png", label: "Web" },
                                { icon: "https://img.icons8.com/color/96/whatsapp--v1.png", label: "WhatsApp API" },
                                { icon: "https://img.icons8.com/fluency/96/instagram-new.png", label: "Instagram DM" },
                                { icon: "https://img.icons8.com/color/96/telegram-app.png", label: "Telegram" },
                                { icon: "https://img.icons8.com/color/96/hubspot.png", label: "ERP / CRM" },
                                { icon: "https://img.icons8.com/color/96/phone.png", label: "Teléfono (Voz)" },
                            ].map((channel, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 w-32 md:w-40 hover:border-[#82ff1f]/50 transition-colors">
                                    <Image src={channel.icon} alt={channel.label} width={48} height={48} className="object-contain" />
                                    <span className="text-sm text-zinc-300 font-medium">{channel.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. ARCHITECTURE */}
                <section className="py-24 border-y border-white/5 relative">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-light mb-20 text-center">Cómo funciona la arquitectura</h2>

                        <div className="grid md:grid-cols-4 gap-8 items-center relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#82ff1f]/30 to-transparent -translate-y-1/2 z-0" />

                            {[
                                { icon: MessageSquare, title: "Canales", desc: "Web, WhatsApp, Voz" },
                                { icon: BrainCircuit, title: "Cerebro IA", desc: "LLM (GPT-4, Claude)" },
                                { icon: Server, title: "Memoria", desc: "VectorDB (Conocimiento)" },
                                { icon: Database, title: "Acciones", desc: "CRM, Calendario, API" }
                            ].map((step, idx) => (
                                <div key={idx} className="relative z-10 bg-black p-6 rounded-2xl border border-white/10 text-center h-full flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#82ff1f]/10 rounded-full flex items-center justify-center mb-6 text-[#82ff1f] border border-[#82ff1f]/20 shadow-[0_0_15px_rgba(130,255,31,0.1)]">
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-medium mb-2 text-white">{step.title}</h3>
                                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. COSTS & EFFICIENCY */}
                <section className="py-24 bg-[#050505]">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-light mb-8">Costes y eficiencia</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10">
                                            <span className="text-[#82ff1f] font-bold text-xl">1¢</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white mb-2">Menos de un céntimo</h4>
                                            <p className="text-zinc-400 leading-relaxed">
                                                Una conversación completa puede costar menos que un céntimo de euro.
                                                La eficiencia de los nuevos modelos hace que el coste sea despreciable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10">
                                            <Users className="text-[#82ff1f]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white mb-2">Escalabilidad Infinita</h4>
                                            <p className="text-zinc-400 leading-relaxed">
                                                Atiende a 1 o a 10.000 clientes simultáneamente sin esperas ni costes fijos de personal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5">
                                <h3 className="text-2xl font-light mb-6 text-center">Impacto Real</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-black/50 rounded-xl border border-white/5">
                                        <span className="text-zinc-400">Coste 1.000 consultas (Humano)</span>
                                        <span className="text-red-400 font-mono font-bold">~2.500€</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-[#82ff1f]/10 rounded-xl border border-[#82ff1f]/20">
                                        <span className="text-white">Coste 1.000 consultas (IA)</span>
                                        <span className="text-[#82ff1f] font-mono font-bold">~5€</span>
                                    </div>
                                    <div className="mt-4 text-center text-sm text-zinc-500">
                                        *Estimación basada en tiempo medio de atención y salario estándar.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. COST CALCULATOR UI */}
                <section id="calculadora" className="py-24 border-t border-white/5 bg-black">
                    <div className="container max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Calculadora de Ahorro</h2>
                        <p className="text-zinc-400 text-center mb-12">Estima cuánto podrías ahorrar automatizando tu atención al cliente.</p>

                        <div className="bg-zinc-900/50 rounded-3xl border border-white/10 p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Controls */}
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-4">Consultas mensuales: <span className="text-[#82ff1f] font-mono text-lg ml-2">{queries}</span></label>
                                        <input
                                            type="range"
                                            min="100"
                                            max="50000"
                                            step="100"
                                            value={queries}
                                            onChange={(e) => setQueries(parseInt(e.target.value))}
                                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#82ff1f]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-4">Tipo de Chatbot</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'text', label: 'Texto' },
                                                { id: 'voice', label: 'Voz' },
                                                { id: 'multimodal', label: 'Multi' }
                                            ].map((type) => (
                                                <button
                                                    key={type.id}
                                                    onClick={() => setBotType(type.id)}
                                                    className={`py-2 px-3 rounded-lg text-sm transition-all ${botType === type.id
                                                        ? 'bg-[#82ff1f] text-black font-bold'
                                                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                                        }`}
                                                >
                                                    {type.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-4">Modelo IA</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'economic', label: 'Eco' },
                                                { id: 'standard', label: 'Std' },
                                                { id: 'advanced', label: 'Pro' }
                                            ].map((m) => (
                                                <button
                                                    key={m.id}
                                                    onClick={() => setModel(m.id)}
                                                    className={`py-2 px-3 rounded-lg text-sm transition-all ${model === m.id
                                                        ? 'bg-[#82ff1f] text-black font-bold'
                                                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                                        }`}
                                                >
                                                    {m.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="flex flex-col justify-center space-y-6 bg-black/50 p-8 rounded-2xl border border-white/5">
                                    <div>
                                        <div className="text-zinc-500 text-sm mb-1">Coste Mensual Estimado (IA)</div>
                                        <div className="text-4xl font-mono text-white">{costs.monthly}€</div>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-sm mb-1">Coste Estimado (Humano)</div>
                                        <div className="text-2xl font-mono text-zinc-400 line-through decoration-red-500">{costs.human}€</div>
                                    </div>
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="text-[#82ff1f] text-sm font-bold uppercase tracking-wider mb-1">Ahorro Mensual</div>
                                        <div className="text-5xl font-mono text-[#82ff1f]">{costs.savings}€</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. REAL CASES */}
                <section className="py-24 bg-[#050505]">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Casos de uso reales</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: ShoppingBag,
                                    title: "E-commerce",
                                    desc: "Gestión automática de devoluciones y estado de pedidos."
                                },
                                {
                                    icon: Stethoscope,
                                    title: "Clínicas",
                                    desc: "Confirmación de citas por WhatsApp y triaje básico."
                                },
                                {
                                    icon: Briefcase,
                                    title: "Consultoría",
                                    desc: "Cualificación de leads y generación de presupuestos preliminares."
                                },
                                {
                                    icon: Calculator,
                                    title: "Restaurantes",
                                    desc: "Reservas automáticas y gestión de carta/alérgenos."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-zinc-300">
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-medium mb-3 text-white">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. WHY NOW? */}
                <section className="py-24 border-t border-white/5">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-light mb-12">¿Por qué ahora?</h2>
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                {[
                                    "Precios de tokens en caída libre (más barato que nunca)",
                                    "Latencia mínima con modelos nuevos (GPT-4o, Claude 3.5)",
                                    "Fiabilidad muy alta en comprensión del lenguaje",
                                    "Integración rápida en días, no meses",
                                    "Accesible para PYMES, no solo grandes corporaciones"
                                ].map((reason, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <CheckCircle2 className="text-[#82ff1f] shrink-0" size={20} />
                                        <span className="text-zinc-300">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. BUILD YOUR CHATBOT WIZARD */}
                <section className="py-32 bg-white text-black">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Construye tu Chatbot</h2>
                                <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                                    Diseña tu asistente ideal y obtén un presupuesto estimado al instante.
                                </p>
                            </div>

                            <ChatbotBuilder />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}

