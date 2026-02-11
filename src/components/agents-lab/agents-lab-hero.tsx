'use client'

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Brain,
    Target,
    Zap,
    TrendingUp,
    ArrowRight
} from "lucide-react";

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
    const scrollToWizard = () => {
        const wizard = document.getElementById('agents-lab-wizard');
        if (wizard) {
            wizard.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen w-full bg-black flex flex-col justify-center pt-48 pb-32 overflow-hidden">

            {/* Background Image - Translucent as requested */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
                style={{
                    backgroundImage: `url('/images/experimental-lab-bg-v2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Dark Overlay to ensure text readability over the image */}
            <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />

            {/* Subtle network node effect - on top of image for texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="85%" cy="20%" r="2" fill="#333" />
                    <circle cx="90%" cy="50%" r="2" fill="#333" />
                    <line x1="85%" y1="20%" x2="90%" y2="50%" stroke="#222" strokeWidth="1" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px] h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#82ff1f]">AETHER AI AGENTS</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[0.95]">
                            AETHER<br />
                            AGENTS LAB
                        </h1>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Tu equipo de ventas que <span className="text-[#82ff1f]">nunca duerme.</span>
                        </h2>

                        <p className="text-zinc-300 text-lg font-medium max-w-lg mb-10 leading-relaxed">
                            Diseña y despliega agentes de IA comerciales inteligentes con nuestro sistema modular. Adapta cada aspecto para tus procesos de ventas.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToWizard}
                            className="flex items-center gap-3 px-8 py-4 bg-[#82ff1f] text-black rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(130,255,31,0.3)] hover:shadow-[0_0_30px_rgba(130,255,31,0.5)] transform hover:-translate-y-1"
                        >
                            Explorar la plataforma
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* Right Content - Cards Stack */}
                    <div className="flex flex-col gap-3">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-[20px] p-5 shadow-xl flex items-center gap-5 group hover:-translate-x-2 transition-transform duration-300 relative z-10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#82ff1f] transition-colors border border-zinc-100 flex-none">
                                    {step.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-lg font-bold text-zinc-900 truncate pr-4">
                                            {step.title}
                                        </h3>
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex-none">
                                            {step.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-500 font-medium leading-snug line-clamp-2">
                                        {step.description}
                                    </p>
                                    <div className="mt-3 h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${step.progress}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                            className="h-full bg-[#82ff1f]"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle glow at the bottom right corner like in the image */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#82ff1f]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        </section>
    );
};

export default AgentsLabHero;
