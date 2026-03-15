"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, ArrowLeft, Check, Sparkles, Bot, Zap, Brain, Building2, PenTool, HelpCircle, Mic, StopCircle, Loader2, Share2, Download, Layers, Cpu, Network, BarChart3, Lock, Mail, MessageCircle, FileSpreadsheet, Database, Calendar, Globe, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
type Level = "new" | "basic" | "advanced" | "expert" | null;
type CreationType = "chatbot" | "automation" | "llm" | "business" | "content" | "unsure" | null;
type Urgency = "asap" | "week" | "month" | "no-rush" | null;

interface FormData {
    level: Level;
    creationType: CreationType;
    useCase: string[];
    sector: string;
    specificNeed: string;
    budget: string;
    urgency: Urgency;
    detailedDescription: string;
    name: string;
    email: string;
    whatsapp: string;
    message?: string;
}

interface AIProposal {
    title: string;
    summary: string;
    capabilities: string[];
    integrations: string[];
    benefits: string[];
    estimatedTimeline: string;
    complexity: "Baja" | "Media" | "Alta";
    recommendedStack: string[];
}

const INITIAL_DATA: FormData = {
    level: null,
    creationType: null,
    useCase: [],
    sector: "",
    specificNeed: "",
    budget: "",
    urgency: null,
    detailedDescription: "",
    name: "",
    email: "",
    whatsapp: "",
    message: ""
};

export default function CreateAIPage() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
    const [isRecording, setIsRecording] = useState(false);
    const [proposal, setProposal] = useState<AIProposal | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Speech Recognition Setup
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = 'es-ES';

            recognitionRef.current.onresult = (event: any) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    }
                }
                if (finalTranscript) {
                    setFormData(prev => ({
                        ...prev,
                        detailedDescription: (prev.detailedDescription + " " + finalTranscript).trim()
                    }));
                }
            };
        }
    }, []);

    const toggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            recognitionRef.current?.start();
            setIsRecording(true);
        }
    };

    const totalSteps = 9;
    const progress = Math.min((step / totalSteps) * 100, 100);

    const handleNext = () => {
        setStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const updateField = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleUseCase = (value: string) => {
        setFormData((prev) => {
            const current = prev.useCase;
            if (current.includes(value)) {
                return { ...prev, useCase: current.filter((item) => item !== value) };
            } else {
                return { ...prev, useCase: [...current, value] };
            }
        });
    };

    const handleLevelSelect = (level: Level) => {
        updateField("level", level);
        handleNext();
    };

    const submitContactForm = async () => {
        // 1. Go to processing screen
        setStep(10);
        setIsSubmitting(true);

        try {
            // 2. Call API for AI Analysis
            const response = await fetch('/api/analyze-proposal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const generatedProposal = await response.json();
            setProposal(generatedProposal);

            // 3. Send data to webhook/email (FormSubmit)
            await fetch("https://formsubmit.co/ajax/hola@aetherlabs.es", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Nuevo Proyecto IA: ${formData.name} - ${generatedProposal.title}`,
                    ...formData,
                    ai_proposal_title: generatedProposal.title,
                    ai_proposal_summary: generatedProposal.summary,
                    _template: "table"
                })
            });

        } catch (e) {
            console.error("Error processing form", e);
            // Fallback
            setProposal({
                title: "Propuesta de IA",
                summary: "Hubo un error generando el detalle, pero hemos recibido tu solicitud.",
                capabilities: [],
                integrations: [],
                benefits: [],
                estimatedTimeline: "A definir",
                complexity: "Media",
                recommendedStack: []
            });
        } finally {
            setIsSubmitting(false);
            // 4. Show result
            setStep(11);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20 font-sans print:bg-white print:text-black">
            <style jsx global>{`
                @media print {
                    @page { margin: 0; size: auto; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background-color: white !important; color: black !important; }
                    .print-hidden { display: none !important; }
                    .print-card { border: 1px solid #ddd !important; box-shadow: none !important; break-inside: avoid; }
                    .print-text-black { color: black !important; }
                }
            `}</style>

            <div className="print:hidden">
                <HeaderNavigation />
            </div>

            {/* Progress Bar */}
            {step > 0 && step < 11 && (
                <div className="fixed top-[90px] left-0 w-full h-1 bg-[#1a1a1a] z-40 print:hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            )}

            <div className="container px-4 md:px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center print:pt-0 print:pb-0 print:h-auto">
                <AnimatePresence mode="wait">

                    {/* HERO */}
                    {step === 0 && (
                        <motion.div
                            key="hero"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-4xl mx-auto text-center print:hidden"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#333] mb-8">
                                <Sparkles className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-[#c8c8c8]">Diagnóstico Gratuito de IA</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
                                Crea tu IA personalizada <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#666]">en minutos.</span>
                            </h1>

                            <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-12 leading-relaxed">
                                Te hago unas preguntas rápidas y recibirás un plan a medida para crear tu IA,
                                tu chatbot, tu automatización o tu agente personalizado.
                            </p>

                            <button
                                onClick={handleNext}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            >
                                Empieza ahora
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    )}

                    {/* STEP 1: LEVEL */}
                    {step === 1 && (
                        <StepLayout
                            key="step1"
                            title="¿Cuál es tu nivel actual con la IA?"
                            description="Esto nos ayuda a adaptar la complejidad de la solución."
                            onBack={handleBack}
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <OptionCard
                                    title="Soy completamente nuevo"
                                    description="Apenas he usado ChatGPT u otras herramientas."
                                    onClick={() => handleLevelSelect("new")}
                                    selected={formData.level === "new"}
                                />
                                <OptionCard
                                    title="La uso un poco"
                                    description="Experimentando, pero sin profundizar demasiado."
                                    onClick={() => handleLevelSelect("basic")}
                                    selected={formData.level === "basic"}
                                />
                                <OptionCard
                                    title="Ya la uso bastante bien"
                                    description="La integro en mi flujo de trabajo diario."
                                    onClick={() => handleLevelSelect("advanced")}
                                    selected={formData.level === "advanced"}
                                />
                                <OptionCard
                                    title="Domino IA"
                                    description="Busco implementaciones técnicas avanzadas."
                                    onClick={() => handleLevelSelect("expert")}
                                    selected={formData.level === "expert"}
                                />
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 2: CREATION TYPE */}
                    {step === 2 && (
                        <StepLayout
                            key="step2"
                            title="¿Qué quieres crear exactamente?"
                            description="Selecciona la opción que mejor describa tu idea."
                            onBack={handleBack}
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <OptionCard
                                    icon={Bot}
                                    title="Un chatbot personalizado"
                                    description="Un asistente que atiende clientes 24/7, resuelve dudas y agenda citas automáticamente."
                                    onClick={() => { updateField("creationType", "chatbot"); handleNext(); }}
                                />
                                <OptionCard
                                    icon={Zap}
                                    title="Una automatización"
                                    description="Conectar tus apps (Gmail, Calendar, Excel) para que trabajen solas sin que tú hagas nada."
                                    onClick={() => { updateField("creationType", "automation"); handleNext(); }}
                                />
                                <OptionCard
                                    icon={Brain}
                                    title="Mi propio LLM"
                                    description="Un 'ChatGPT' privado que conoce todos tus documentos, PDFs y procesos de empresa."
                                    onClick={() => { updateField("creationType", "llm"); handleNext(); }}
                                />
                                <OptionCard
                                    icon={Building2}
                                    title="IA para mi negocio"
                                    description="Analizar datos, predecir ventas o mejorar la operativa global de tu empresa."
                                    onClick={() => { updateField("creationType", "business"); handleNext(); }}
                                />
                                <OptionCard
                                    icon={PenTool}
                                    title="IA para contenido"
                                    description="Generar posts, vídeos, imágenes y textos para redes sociales en segundos."
                                    onClick={() => { updateField("creationType", "content"); handleNext(); }}
                                />
                                <OptionCard
                                    icon={HelpCircle}
                                    title="No lo tengo claro"
                                    description="Tengo un problema o una idea, pero no sé qué tecnología es la mejor para resolverlo."
                                    onClick={() => { updateField("creationType", "unsure"); handleNext(); }}
                                />
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 3: USE CASE */}
                    {step === 3 && (
                        <StepLayout
                            key="step3"
                            title="¿Para qué quieres usar la IA?"
                            description="Selecciona todas las que apliquen."
                            onBack={handleBack}
                            onNext={handleNext}
                            canNext={formData.useCase.length > 0}
                        >
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Para mi negocio", "Para mi trabajo", "Para contenido o marca personal",
                                    "Para aprender IA", "Para ahorrar tiempo", "Para mejorar procesos",
                                    "Para proyectos creativos", "Para estudiar o investigar"
                                ].map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => toggleUseCase(option)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${formData.useCase.includes(option)
                                            ? "bg-white text-black border-white"
                                            : "bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#444]"
                                            }`}
                                    >
                                        <span className="font-medium">{option}</span>
                                        {formData.useCase.includes(option) && <Check className="w-5 h-5" />}
                                    </div>
                                ))}
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 4: SECTOR */}
                    {step === 4 && (
                        <StepLayout
                            key="step4"
                            title="¿En qué sector trabajas o te mueves?"
                            description="Para entender mejor tu contexto."
                            onBack={handleBack}
                            onNext={handleNext}
                            canNext={formData.sector.length > 0}
                        >
                            <select
                                value={formData.sector}
                                onChange={(e) => updateField("sector", e.target.value)}
                                className="w-full p-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:border-white transition-colors text-lg"
                            >
                                <option value="">Selecciona un sector...</option>
                                <option value="marketing">Marketing y Publicidad</option>
                                <option value="tecnologia">Tecnología / Desarrollo</option>
                                <option value="educacion">Educación</option>
                                <option value="salud">Salud y Bienestar</option>
                                <option value="inmobiliaria">Inmobiliaria</option>
                                <option value="finanzas">Finanzas y Legal</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="arte">Arte y Diseño</option>
                                <option value="hosteleria">Hostelería / Restauración</option>
                                <option value="turismo">Turismo</option>
                                <option value="construccion">Construcción</option>
                                <option value="logistica">Logística</option>
                                <option value="rrhh">Recursos Humanos</option>
                                <option value="ventas">Ventas</option>
                                <option value="otro">Otro</option>
                            </select>
                        </StepLayout>
                    )}

                    {/* STEP 5: SPECIFIC NEED */}
                    {step === 5 && (
                        <StepLayout
                            key="step5"
                            title={
                                formData.creationType === "chatbot" ? "¿Qué tipo de chatbot necesitas?" :
                                    formData.creationType === "automation" ? "¿Qué te gustaría automatizar?" :
                                        formData.creationType === "llm" ? "¿Qué info quieres que aprenda tu IA?" :
                                            formData.creationType === "business" ? "¿Qué área quieres mejorar?" :
                                                formData.creationType === "content" ? "¿Qué te interesa aprender?" :
                                                    "¿Quieres que analice tu caso?"
                            }
                            onBack={handleBack}
                            onNext={handleNext}
                            canNext={formData.specificNeed.length > 0}
                        >
                            <div className="grid gap-3">
                                {getConditionalOptions(formData.creationType).map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => { updateField("specificNeed", option); handleNext(); }}
                                        className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${formData.specificNeed === option
                                            ? "bg-white text-black border-white"
                                            : "bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#444]"
                                            }`}
                                    >
                                        <span className="font-medium text-lg">{option}</span>
                                    </div>
                                ))}
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 6: BUDGET */}
                    {step === 6 && (
                        <StepLayout
                            key="step6"
                            title="¿Qué rango encaja más con lo que buscas?"
                            description="Para ofrecerte una solución realista."
                            onBack={handleBack}
                        >
                            <div className="grid gap-3">
                                {[
                                    { label: "50–200 €", sub: "Consultoría estratégica y viabilidad" },
                                    { label: "200–500 €", sub: "Automatización de procesos simples" },
                                    { label: "500–1.500 €", sub: "Agente IA o Chatbot avanzado" },
                                    { label: "1.500–3.000 €", sub: "Solución completa llave en mano" },
                                    { label: "+3.000 €", sub: "Ecosistema IA para empresas" }
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        onClick={() => { updateField("budget", item.label); handleNext(); }}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${formData.budget === item.label
                                            ? "bg-white text-black border-white"
                                            : "bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#444]"
                                            }`}
                                    >
                                        <div>
                                            <span className="font-bold block">{item.label}</span>
                                            <span className={`text-sm ${formData.budget === item.label ? "text-gray-600" : "text-gray-400"}`}>{item.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 7: URGENCY */}
                    {step === 7 && (
                        <StepLayout
                            key="step7"
                            title="¿Con qué urgencia necesitas esto?"
                            onBack={handleBack}
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { id: "asap", label: "Lo antes posible" },
                                    { id: "week", label: "Esta semana" },
                                    { id: "month", label: "Este mes" },
                                    { id: "no-rush", label: "Sin prisa" }
                                ].map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => { updateField("urgency", item.id); handleNext(); }}
                                        className={`p-6 rounded-xl border cursor-pointer text-center transition-all ${formData.urgency === item.id
                                            ? "bg-white text-black border-white"
                                            : "bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#444]"
                                            }`}
                                    >
                                        <span className="font-medium text-lg">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 8: DETAILED DESCRIPTION (AUDIO/TEXT) */}
                    {step === 8 && (
                        <StepLayout
                            key="step8"
                            title="Cuéntame más sobre tu idea"
                            description="Nuestra IA analizará tu explicación para crear la propuesta perfecta. Puedes escribirlo o usar el micrófono."
                            onBack={handleBack}
                            onNext={handleNext}
                            canNext={formData.detailedDescription.length > 5}
                        >
                            <div className="space-y-4">
                                <div className="relative">
                                    <textarea
                                        value={formData.detailedDescription}
                                        onChange={(e) => updateField("detailedDescription", e.target.value)}
                                        rows={6}
                                        className="w-full p-6 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl focus:outline-none focus:border-white transition-colors resize-none text-lg leading-relaxed"
                                        placeholder="Ejemplo: Quiero un chatbot para mi clínica dental que se conecte con Google Calendar y responda dudas sobre tratamientos..."
                                    />
                                    <button
                                        onClick={toggleRecording}
                                        className={`absolute bottom-4 right-4 p-3 rounded-full transition-all ${isRecording
                                            ? "bg-red-500 text-white animate-pulse"
                                            : "bg-[#1a1a1a] text-[#a0a0a0] hover:text-white hover:bg-[#333]"
                                            }`}
                                        title={isRecording ? "Detener grabación" : "Grabar audio"}
                                    >
                                        {isRecording ? <StopCircle className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                                    </button>
                                </div>
                                <p className="text-sm text-[#666] text-center">
                                    {isRecording ? "Escuchando... (habla claro)" : "Pulsa el micrófono para dictar tu idea"}
                                </p>
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 9: CONTACT FORM */}
                    {step === 9 && (
                        <StepLayout
                            key="step9"
                            title="¿Dónde enviamos tu Ficha Técnica?"
                            description="Para generar tu informe personalizado necesitamos saber a quién dirigirlo."
                            onBack={handleBack}
                            showNextButton={false}
                        >
                            <div className="space-y-4 max-w-md mx-auto">
                                <div>
                                    <label className="block text-sm font-medium text-[#c8c8c8] mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => updateField("name", e.target.value)}
                                        className="w-full p-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-white transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#c8c8c8] mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        className="w-full p-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-white transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#c8c8c8] mb-2">WhatsApp (Recomendado)</label>
                                    <input
                                        type="tel"
                                        value={formData.whatsapp}
                                        onChange={(e) => updateField("whatsapp", e.target.value)}
                                        className="w-full p-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-white transition-colors"
                                        placeholder="+34 600 000 000"
                                    />
                                </div>

                                <button
                                    onClick={submitContactForm}
                                    disabled={!formData.name || !formData.email || isSubmitting}
                                    className="w-full mt-6 bg-white text-black font-semibold text-lg py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Generando...
                                        </>
                                    ) : (
                                        <>
                                            Generar mi Propuesta IA
                                            <Sparkles className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </StepLayout>
                    )}

                    {/* STEP 10: PROCESSING */}
                    {step === 10 && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-[50vh] print:hidden"
                        >
                            <div className="relative w-24 h-24 mb-8">
                                <div className="absolute inset-0 border-4 border-[#1a1a1a] rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin"></div>
                                <Bot className="absolute inset-0 m-auto w-10 h-10 text-white animate-pulse" />
                            </div>
                            <h2 className="text-2xl font-light mb-2">Analizando tu caso...</h2>
                            <p className="text-[#808080]">Nuestra IA está diseñando la mejor arquitectura para ti.</p>
                        </motion.div>
                    )}

                    {/* STEP 11: RESULT (PROPOSAL) */}
                    {step === 11 && proposal && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-5xl mx-auto print:max-w-none print:w-full"
                        >
                            {/* Header Proposal */}
                            <div className="flex items-center justify-between mb-8 border-b border-[#2a2a2a] pb-6 print:border-black">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs font-mono text-[#82ff1f] print:bg-white print:border-black print:text-black">CONFIDENCIAL</span>
                                        <span className="text-[#666] text-sm print:text-black">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-light text-white print:text-black">Ficha Técnica de Solución IA</h1>
                                    <p className="text-[#a0a0a0] print:text-black">Preparado para {formData.name}</p>
                                </div>
                                <div className="hidden md:block print:block">
                                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/LOGO-OK-1763511624593.png" alt="Aether" width={120} height={40} className="opacity-50 print:opacity-100" />
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8 print:block">

                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-6 print:space-y-4">

                                    {/* Summary Card */}
                                    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl p-8 relative overflow-hidden group print:bg-white print:border-black print:text-black print:p-4 print:mb-4 print-card">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors print:hidden"></div>
                                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 print:text-black">
                                            <Sparkles className="w-5 h-5 text-[#82ff1f] print:text-black" />
                                            {proposal.title}
                                        </h2>
                                        <p className="text-lg text-[#c8c8c8] leading-relaxed print:text-black">
                                            {proposal.summary}
                                        </p>
                                    </div>

                                    {/* Capabilities Grid */}
                                    <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
                                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 print:bg-white print:border-black print:p-4 print-card">
                                            <h3 className="text-lg font-medium mb-4 flex items-center gap-2 print:text-black">
                                                <Cpu className="w-5 h-5 text-blue-400 print:text-black" />
                                                Qué hace tu IA
                                            </h3>
                                            <ul className="space-y-3">
                                                {proposal.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-[#a0a0a0] print:text-black">
                                                        <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 print:text-black" />
                                                        {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 print:bg-white print:border-black print:p-4 print-card">
                                            <h3 className="text-lg font-medium mb-4 flex items-center gap-2 print:text-black">
                                                <Network className="w-5 h-5 text-purple-400 print:text-black" />
                                                Integraciones
                                            </h3>
                                            <ul className="space-y-3">
                                                {proposal.integrations.map((int, i) => {
                                                    const Icon = getIntegrationIcon(int);
                                                    return (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-[#a0a0a0] print:text-black">
                                                            <div className="w-6 h-6 rounded-md bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#333] print:border-black print:bg-white">
                                                                <Icon className="w-3.5 h-3.5 text-white print:text-black" />
                                                            </div>
                                                            {int}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 print:bg-white print:border-black print:p-4 print:mt-4 print-card">
                                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 print:text-black">
                                            <BarChart3 className="w-5 h-5 text-green-400 print:text-black" />
                                            Impacto Estimado
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4 print:grid-cols-2">
                                            {proposal.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#222] print:bg-white print:border-black">
                                                    <div className="w-8 h-8 rounded-full bg-green-400/10 flex items-center justify-center shrink-0 print:bg-transparent print:border print:border-black">
                                                        <Check className="w-4 h-4 text-green-400 print:text-black" />
                                                    </div>
                                                    <span className="text-sm font-medium print:text-black">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6 print:space-y-4 print:mt-4">

                                    {/* Tech Stack */}
                                    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 print:bg-white print:border-black print:p-4 print-card">
                                        <h3 className="text-sm font-medium text-[#808080] uppercase tracking-wider mb-4 print:text-black">Stack Tecnológico</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {proposal.recommendedStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs text-white print:bg-white print:border-black print:text-black">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 space-y-4 print:bg-white print:border-black print:p-4 print-card">
                                        <div>
                                            <span className="text-xs text-[#666] uppercase print:text-black">Tiempo estimado</span>
                                            <p className="text-lg font-medium text-white print:text-black">{proposal.estimatedTimeline}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-[#666] uppercase print:text-black">Complejidad</span>
                                            <div className="flex items-center gap-2">
                                                <div className={`h-2 w-full rounded-full bg-[#1a1a1a] overflow-hidden print:border print:border-black`}>
                                                    <div
                                                        className={`h-full ${proposal.complexity === 'Alta' ? 'bg-red-500 w-3/4' : proposal.complexity === 'Media' ? 'bg-yellow-500 w-1/2' : 'bg-green-500 w-1/4'} print:bg-black`}
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-white print:text-black">{proposal.complexity}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Actions */}
                                    <div className="bg-white rounded-2xl p-6 text-center print:hidden">
                                        <h3 className="text-black font-semibold mb-2">¿Hacemos esto realidad?</h3>
                                        <p className="text-sm text-gray-600 mb-6">He enviado una copia de esta ficha a tu email (revisa spam por si acaso).</p>

                                        <a
                                            href={`https://wa.me/34627281459?text=Hola, he recibido la propuesta "${proposal.title}" y quiero empezar.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-3 bg-black text-white rounded-full font-medium mb-3 hover:scale-105 transition-transform"
                                        >
                                            Abrir chat en WhatsApp
                                        </a>
                                        <button
                                            onClick={() => window.print()}
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            Descargar PDF
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            <div className="print:hidden">
                <Footer />
            </div>
        </main >
    );
}

function StepLayout({
    title,
    description,
    children,
    onBack,
    onNext,
    canNext = true,
    showNextButton = true
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
    onBack?: () => void;
    onNext?: () => void;
    canNext?: boolean;
    showNextButton?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto w-full"
        >
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-light mb-4">{title}</h2>
                {description && <p className="text-xl text-[#a0a0a0]">{description}</p>}
            </div>

            <div className="mb-10">
                {children}
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#2a2a2a]">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#808080] hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Atrás
                    </button>
                )}

                {showNextButton && onNext && (
                    <button
                        onClick={onNext}
                        disabled={!canNext}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity ml-auto"
                    >
                        Siguiente
                        <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </motion.div>
    );
}

function OptionCard({
    title,
    description,
    onClick,
    selected,
    icon: Icon
}: {
    title: string;
    description?: string;
    onClick: () => void;
    selected?: boolean;
    icon?: any;
}) {
    return (
        <div
            onClick={onClick}
            className={`p-6 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] group ${selected
                ? "bg-white text-black border-white"
                : "bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#444]"
                }`}
        >
            {Icon && (
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${selected ? "bg-black/10" : "bg-[#1a1a1a]"
                    }`}>
                    <Icon className={`w-5 h-5 ${selected ? "text-black" : "text-white"}`} />
                </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {description && (
                <p className={`text-sm ${selected ? "text-gray-600" : "text-[#808080]"}`}>
                    {description}
                </p>
            )}
        </div>
    );
}

function getConditionalOptions(type: CreationType | null): string[] {
    switch (type) {
        case "chatbot":
            return ["Atención al cliente", "Ventas", "Consultor interno", "Asistente personal", "FAQ", "Otro"];
        case "automation":
            return ["Tareas de oficina", "Contenido", "Informes", "Reservas", "Emails", "Otros"];
        case "llm":
            return ["Documentos internos", "Procesos", "Producto", "Archivos", "Web", "Datos externos", "Todo lo anterior"];
        case "business":
            return ["Marketing", "Ventas", "Atención cliente", "Operaciones", "Creatividad", "Todo"];
        case "content":
            return ["Imágenes pro", "Vídeos estilo Sora", "Workflow de contenido", "Copywriting", "Prompts avanzados", "Todo"];
        default:
            return ["Sí, quiero un análisis", "No, prefiero explorar"];
    }
}

function getIntegrationIcon(name: string) {
    const lower = name.toLowerCase();
    if (lower.includes("mail") || lower.includes("outlook") || lower.includes("correo")) return Mail;
    if (lower.includes("whatsapp") || lower.includes("telegram")) return MessageCircle;
    if (lower.includes("excel") || lower.includes("sheet") || lower.includes("csv")) return FileSpreadsheet;
    if (lower.includes("crm") || lower.includes("hubspot") || lower.includes("salesforce")) return Database;
    if (lower.includes("calendar") || lower.includes("agenda")) return Calendar;
    if (lower.includes("web") || lower.includes("http") || lower.includes("api")) return Globe;
    if (lower.includes("mobile") || lower.includes("app")) return Smartphone;
    return Network; // Default icon
}
