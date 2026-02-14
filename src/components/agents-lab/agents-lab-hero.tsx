'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Terminal, Cpu, Clock, Zap, Mic, MessageSquare, Users, Brain, Target, TrendingUp, ArrowRight } from 'lucide-react'

const INDUSTRIES = [
    { id: 'fintech', name: 'Fintech & Banking', color: '#82ff1f' },
    { id: 'biotech', name: 'Biotech Systems', color: '#3b82f6' },
    { id: 'logistics', name: 'Logistics AI', color: '#f59e0b' },
    { id: 'energy', name: 'Energy Grids', color: '#10b981' },
    { id: 'realestate', name: 'Real Estate Lab', color: '#8b5cf6' },
]

const steps = [
    {
        icon: <Users className="w-5 h-5" />,
        title: "Define su Rol",
        description: "Leads escriben por WhatsApp o IG y reciben respuesta cualificada en segundos.",
        status: "80% COMPLETO",
        progress: 80
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: "Entrena su Cerebro",
        description: "Selecciona su conocimiento y su personalidad (formal, cercano).",
        status: "80% COMPLETO",
        progress: 80
    },
    {
        icon: <Target className="w-5 h-5" />,
        title: "Crea su Estrategia",
        description: "Configura objetivos estratégicos y pasos a seguir para maximizar cierres.",
        status: "80% COMPLETO",
        progress: 80
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Conecta su Entorno",
        description: "Sube tus FAQs, catálogo y conecta con tu CRM favorito.",
        status: "80% COMPLETO",
        progress: 80
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Activa y Mide",
        description: "Despliega en vivo, analiza las conversaciones y monitoriza el retorno.",
        status: "LISTO PARA DESPLEGAR",
        progress: 100
    }
];

const AgentsLabHero = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0])
    const [isVoice, setIsVoice] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: `Analizando flujos de capital para el sector ${selectedIndustry.name}. He detectado una ineficiencia en la reconciliación de pagos del 14%.`,
            time: 'Hace 2s'
        }
    ])

    const scrollToWizard = () => {
        const wizard = document.getElementById('agents-lab-wizard');
        if (wizard) {
            wizard.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            {/* SECTION 1: PROVING GROUND (HERO) - WHITE BACKGROUND, NO TITLE AS REQUESTED */}
            <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                <div className="max-w-7xl w-full mx-auto relative z-10 font-sans">
                    {/* Title block removed from here */}

                    <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[700px] border border-zinc-100">
                        {/* Proving Ground Sidebar */}
                        <div className="w-full md:w-80 bg-[#fbfcfd] p-10 flex flex-col justify-between border-r border-zinc-100">
                            <div>
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-12">Industrias Disponibles</span>
                                <div className="space-y-6">
                                    {INDUSTRIES.map((ind) => (
                                        <button
                                            key={ind.id}
                                            onClick={() => {
                                                setSelectedIndustry(ind);
                                                setMessages([{
                                                    role: 'ai',
                                                    content: `Módulo ${ind.name} iniciado. Cargando base de conocimientos y optimización dinámica.`,
                                                    time: 'Ahora'
                                                }]);
                                            }}
                                            className="flex items-center group relative w-full text-left"
                                        >
                                            {selectedIndustry.id === ind.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute -left-10 w-1.5 h-8 bg-[#82ff1f] rounded-full"
                                                    initial={false}
                                                />
                                            )}
                                            <span className={`text-xl font-bold transition-colors ${selectedIndustry.id === ind.id ? 'text-zinc-900' : 'text-zinc-300 group-hover:text-zinc-500'}`}>
                                                {ind.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-[#82ff1f] uppercase tracking-widest">IA Capacity</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">85%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: '85%' }} className="h-full bg-[#82ff1f]" />
                                </div>
                            </div>
                        </div>

                        {/* Proving Ground Chat Lab Area */}
                        <div className="flex-1 p-10 bg-white flex flex-col relative">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex gap-3">
                                    <div className="px-4 py-1.5 bg-zinc-50 rounded-full flex items-center gap-2 border border-zinc-100">
                                        <Terminal className="w-3 h-3 text-zinc-400" />
                                        <span className="text-[10px] font-bold text-zinc-600 font-mono">NODE: SYST-829</span>
                                    </div>
                                    <div className="px-4 py-1.5 bg-zinc-50 rounded-full flex items-center gap-2 border border-zinc-100">
                                        <Clock className="w-3 h-3 text-zinc-400" />
                                        <span className="text-[10px] font-bold text-zinc-600 font-mono">0.02ms</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-8 h-8 rounded-full bg-[#82ff1f] flex items-center justify-center text-black">
                                        <Zap className="w-4 h-4 fill-current" />
                                    </motion.div>
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 overflow-hidden border border-zinc-200">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-8 mb-10 pt-10 px-4">
                                <AnimatePresence mode="popLayout">
                                    {messages.map((msg, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                            <div className={`max-w-[85%] p-8 rounded-[30px] shadow-sm relative ${msg.role === 'user' ? 'bg-zinc-950 text-white rounded-tr-none italic' : 'bg-zinc-50 text-zinc-800 border border-zinc-100 rounded-tl-none leading-relaxed'}`}>
                                                <p className="text-lg">"{msg.content}"</p>
                                            </div>
                                            <span className="mt-4 text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                                {msg.role === 'ai' ? 'Aether Core' : 'Admin'} • {msg.time}
                                            </span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="relative group">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-4 text-zinc-400">
                                    <button onClick={() => setIsVoice(!isVoice)} className={`p-2 rounded-lg transition-colors ${isVoice ? 'bg-[#82ff1f]/10 text-[#82ff1f]' : 'hover:bg-zinc-100'}`}>
                                        {isVoice ? <Mic className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                                    </button>
                                </div>
                                <input type="text" placeholder={isVoice ? "Escucha activa..." : "Escribe un comando de sistema..."} className="w-full h-20 bg-white border border-zinc-200 rounded-[28px] pl-20 pr-44 text-lg text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-all shadow-sm" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 px-10 py-3.5 bg-[#82ff1f] text-black font-bold uppercase tracking-widest text-[11px] rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-[#82ff1f]/20">Ejecutar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE INFO BANNER - BLACK BACKGROUND, NEW TITLE "Crea tu propio Agente IA" */}
            <section className="relative py-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url('/images/experimental-lab-bg-v2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 mb-8 backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#82ff1f]">AETHER LABS</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-none">Crea tu propio<br /><span className="text-[#82ff1f]">Agente IA</span></h1>
                            <p className="text-zinc-400 text-lg font-medium max-w-lg mb-10 leading-relaxed">Diseña y despliega agentes de IA comerciales inteligentes con nuestro sistema modular. Adapta cada aspecto para tus procesos de ventas y maximiza la conversión.</p>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToWizard} className="flex items-center gap-3 px-8 py-4 bg-[#82ff1f] text-black rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(130,255,31,0.3)] hover:shadow-[0_0_30_rgba(130,255,31,0.5)]">
                                Explorar la plataforma <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>

                        <div className="flex flex-col gap-3">
                            {steps.map((step, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-white rounded-[24px] p-6 shadow-xl flex items-center gap-6 group hover:-translate-x-2 transition-transform duration-300 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#82ff1f] transition-colors border border-zinc-100 flex-none">{step.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-lg font-bold text-zinc-900 truncate pr-4">{step.title}</h3>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex-none">{step.status}</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-medium leading-normal line-clamp-2">{step.description}</p>
                                        <div className="mt-4 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${step.progress}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }} className="h-full bg-[#82ff1f]" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AgentsLabHero
