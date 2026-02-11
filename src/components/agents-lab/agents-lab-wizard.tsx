'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import StepChannels from "./step-channels";
import StepRole from "./step-role";
import StepKnowledge from "./step-knowledge";
import StepDeploy from "./step-deploy";
import AgentPreviewCard from "./agent-preview-card";
import AgentChat from "./agent-chat";

export interface AgentConfig {
    channels: string[];
    role: string;
    roleName: string;
    instructions: string;
    gender: string; // 'male' | 'female' | 'neutral'
    knowledge: {
        businessName: string;
        industry: string;
        description: string;
        faqs: { question: string; answer: string }[];
    };
    contact: {
        name: string;
        email: string;
        phone: string;
        company: string;
    };
}

const defaultConfig: AgentConfig = {
    channels: [],
    role: "",
    roleName: "",
    instructions: "",
    gender: "",
    knowledge: {
        businessName: "",
        industry: "",
        description: "",
        faqs: [],
    },
    contact: {
        name: "",
        email: "",
        phone: "",
        company: "",
    },
};

const steps = [
    { number: "01", label: "Canal" },
    { number: "02", label: "Rol" },
    { number: "03", label: "Conocimiento" },
    { number: "04", label: "Despliegue" },
];

const AgentsLabWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [config, setConfig] = useState<AgentConfig>(defaultConfig);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateConfig = (partial: Partial<AgentConfig>) => {
        setConfig(prev => ({ ...prev, ...partial }));
    };

    const canAdvance = () => {
        switch (currentStep) {
            case 1: return config.channels.length > 0;
            case 2: return config.role !== "" && config.gender !== "";
            case 3: return config.knowledge.businessName !== "" && config.knowledge.description !== "";
            case 4: return config.contact.name !== "" && config.contact.email !== "";
            default: return false;
        }
    };

    const handleNext = async () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsSubmitting(true);
            try {
                const res = await fetch("/api/agents-lab/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(config),
                });
                if (res.ok) setIsSubmitted(true);
            } catch (e) {
                console.error("Submit error:", e);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    if (isSubmitted) {
        return (
            <div className="flex-1 bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                        backgroundImage: `linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center max-w-lg"
                >
                    <div className="w-20 h-20 rounded-full bg-[#82ff1f]/20 flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 text-[#82ff1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-extrabold text-black mb-4 tracking-tight">¡Solicitud enviada!</h1>
                    <p className="text-lg text-zinc-500 font-light mb-8">
                        Hemos recibido la configuración de tu agente. Nuestro equipo te contactará en menos de 24h con un presupuesto personalizado.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
                    >
                        Volver al inicio
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="relative flex-1 flex flex-col bg-white overflow-hidden">
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                    backgroundImage: `linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 flex flex-col flex-1 max-w-[1600px] mx-auto w-full p-6 md:p-8 lg:p-10 gap-10 pt-52 pb-10">
                {/* Header with steps */}
                <header className="flex flex-col gap-6 flex-none">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#82ff1f] shadow-[0_0_15px_rgba(130,255,31,0.3)] relative">
                                <img
                                    src="/images/agentes/Diego.png"
                                    alt="Agents Lab"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
                                    Agents Lab
                                </h1>
                                <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase mt-1">by Aether Labs</p>
                            </div>
                        </div>
                        <Link href="/" className="group flex items-center gap-2 text-zinc-400 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-zinc-100">
                            <span className="text-sm font-medium hidden sm:block">Cancelar</span>
                            <div className="bg-zinc-100 group-hover:bg-zinc-200 p-2 rounded-full transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Steps Navigation */}
                    <nav className="w-full max-w-4xl mx-auto hidden md:block">
                        <div className="relative flex justify-between items-center w-full">
                            <div className="absolute top-5 left-0 w-full h-[1px] bg-zinc-200 -z-10" />
                            {steps.map((step, idx) => {
                                const stepNum = idx + 1;
                                const isActive = stepNum === currentStep;
                                const isDone = stepNum < currentStep;
                                return (
                                    <div key={step.number} className="flex flex-col items-center gap-3 bg-white px-4 z-10">
                                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${isActive ? 'bg-[#82ff1f] border-[#82ff1f] text-black' :
                                            isDone ? 'bg-[#82ff1f] border-[#82ff1f] text-black' :
                                                'bg-white border-zinc-200 text-zinc-400'
                                            }`}>
                                            {isDone ? (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : step.number}
                                        </div>
                                        <span className={`text-xs uppercase tracking-wider ${isActive || isDone ? 'text-black font-bold' : 'text-zinc-400'}`}>
                                            {step.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Mobile step indicator */}
                    <div className="md:hidden flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#82ff1f]">Paso {String(currentStep).padStart(2, '0')} / 04</span>
                        <span className="text-sm font-bold text-black">{steps[currentStep - 1].label}</span>
                        <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#82ff1f] rounded-full transition-all duration-500" style={{ width: `${(currentStep / 4) * 100}%` }} />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden">
                    {/* Left Column: Step Content */}
                    <div className="flex-1 min-h-0 overflow-y-auto pr-2 pb-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentStep === 1 && <StepChannels config={config} updateConfig={updateConfig} />}
                                {currentStep === 2 && <StepRole config={config} updateConfig={updateConfig} />}
                                {currentStep === 3 && <StepKnowledge config={config} updateConfig={updateConfig} />}
                                {currentStep === 4 && <StepDeploy config={config} updateConfig={updateConfig} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Agent Preview & Chat */}
                    <aside className="hidden lg:flex w-[400px] xl:w-[440px] flex-none flex-col gap-6 overflow-y-auto">
                        <AgentPreviewCard config={config} />
                        <AgentChat config={config} />
                    </aside>
                </main>

                {/* Footer Actions */}
                <footer className="flex-none pt-2 pb-2">
                    <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                        {currentStep > 1 ? (
                            <button
                                onClick={handleBack}
                                className="text-zinc-500 hover:text-black font-medium text-sm transition-colors flex items-center gap-1 px-4 py-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                Atrás
                            </button>
                        ) : (
                            <Link href="/" className="text-zinc-500 hover:text-black font-medium text-sm transition-colors flex items-center gap-1 px-4 py-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                Volver
                            </Link>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={!canAdvance() || isSubmitting}
                            className={`font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 text-base ${canAdvance()
                                ? 'bg-[#82ff1f] hover:bg-[#6ee000] text-black shadow-[#82ff1f]/20 hover:shadow-[#82ff1f]/40 transform active:scale-95'
                                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed shadow-none'
                                }`}
                        >
                            {isSubmitting ? 'Enviando...' : currentStep === 4 ? 'Solicitar presupuesto' : 'Siguiente paso'}
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AgentsLabWizard;
