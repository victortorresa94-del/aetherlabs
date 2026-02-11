'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import StepCampaign from "./step-campaign";
import StepVariants from "./step-variants";
import StepContact from "./step-contact";

export interface AdConfig {
    objective: string;
    productDescription: string;
    productImage: string | null; // base64 data URL
    productImageFile: File | null;
    generatedImages: Array<{
        id: string;
        url: string;
        engine: string;
        caption: string;
        selected: boolean;
    }>;
    contact: {
        name: string;
        email: string;
        phone: string;
        company: string;
    };
}

const defaultConfig: AdConfig = {
    objective: "",
    productDescription: "",
    productImage: null,
    productImageFile: null,
    generatedImages: [],
    contact: {
        name: "",
        email: "",
        phone: "",
        company: "",
    },
};

const steps = [
    { number: "01", label: "Campaña" },
    { number: "02", label: "Creatividades" },
    { number: "03", label: "Presupuesto" },
];

const AdsLabWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [config, setConfig] = useState<AdConfig>(defaultConfig);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateConfig = (partial: Partial<AdConfig>) => {
        setConfig(prev => ({ ...prev, ...partial }));
    };

    const canAdvance = () => {
        switch (currentStep) {
            case 1: return config.objective !== "" && config.productDescription.length > 10;
            case 2: return config.generatedImages.some(img => img.selected);
            case 3: return config.contact.name !== "" && config.contact.email !== "";
            default: return false;
        }
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const formData = new FormData();
            formData.append("objective", config.objective);
            formData.append("description", config.productDescription);
            if (config.productImageFile) {
                formData.append("image", config.productImageFile);
            }

            const res = await fetch("/api/ads-lab/generate", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                updateConfig({
                    generatedImages: data.images.map((img: { url: string; engine: string; caption: string }, i: number) => ({
                        id: `img-${i}`,
                        url: img.url,
                        engine: img.engine,
                        caption: img.caption,
                        selected: i === 0,
                    })),
                });
                setCurrentStep(2);
            }
        } catch (error) {
            console.error("Generation error:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleNext = async () => {
        if (currentStep === 1) {
            await handleGenerate();
        } else if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Submit
            setIsSubmitting(true);
            try {
                const res = await fetch("/api/ads-lab/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        objective: config.objective,
                        productDescription: config.productDescription,
                        selectedImages: config.generatedImages.filter(img => img.selected),
                        contact: config.contact,
                    }),
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
                    <h1 className="text-4xl font-extrabold text-black mb-4 tracking-tight">¡Creatividades listas!</h1>
                    <p className="text-lg text-zinc-500 font-light mb-8">
                        Hemos recibido tu selección. Te enviaremos las creatividades optimizadas junto con un presupuesto para tu campaña.
                    </p>
                    <Link href="/" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors">
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

            <div className="relative z-10 flex flex-col flex-1 max-w-[1600px] mx-auto w-full p-6 md:p-8 lg:p-10 gap-6">
                {/* Header */}
                <header className="flex items-center justify-between flex-none">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#82ff1f] font-bold text-xl">A</div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>Ads Lab</h1>
                            <p className="text-xs text-zinc-400 font-medium -mt-0.5">by Aether Labs</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#82ff1f]">
                                Paso {String(currentStep).padStart(2, '0')} / 03
                            </span>
                            <span className="text-sm font-bold text-black">{steps[currentStep - 1].label}</span>
                        </div>
                        <div className="w-32 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#82ff1f] rounded-full transition-all duration-500"
                                style={{ width: `${(currentStep / 3) * 100}%`, boxShadow: '0 0 10px rgba(130,255,31,0.5)' }}
                            />
                        </div>
                    </div>
                    <Link href="/" className="text-zinc-400 hover:text-black transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </header>

                {/* Content */}
                <main className="flex-1 min-h-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {currentStep === 1 && <StepCampaign config={config} updateConfig={updateConfig} />}
                            {currentStep === 2 && <StepVariants config={config} updateConfig={updateConfig} onRegenerate={handleGenerate} isGenerating={isGenerating} />}
                            {currentStep === 3 && <StepContact config={config} updateConfig={updateConfig} />}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Footer */}
                <footer className="flex-none pt-4 pb-2">
                    <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                        {currentStep > 1 ? (
                            <button onClick={handleBack} className="text-zinc-500 hover:text-black font-medium text-sm transition-colors flex items-center gap-1 px-4 py-2">
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
                            disabled={!canAdvance() || isGenerating || isSubmitting}
                            className={`font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 text-lg ${canAdvance() && !isGenerating && !isSubmitting
                                ? 'bg-[#82ff1f] hover:bg-[#6ee000] text-black shadow-[#82ff1f]/20 hover:shadow-[#82ff1f]/40 transform active:scale-95'
                                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed shadow-none'
                                }`}
                        >
                            {isGenerating ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    Generando...
                                </>
                            ) : isSubmitting ? 'Enviando...' : currentStep === 1 ? 'Generar Variantes' : currentStep === 3 ? 'Solicitar presupuesto' : 'Continuar'}
                            {!isGenerating && !isSubmitting && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AdsLabWizard;
