"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Star,
    Instagram,
    Zap,
    MessageSquare,
    Mic,
    ArrowRight,
    CheckCircle2,
    Download,
    ChevronRight,
    TrendingUp,
    AlertCircle
} from "lucide-react";

// --- Design Tokens & Assets ---
const THEME = {
    colors: {
        bg: "#000000",
        accent: "#00ff88",
        accentDim: "rgba(0, 255, 136, 0.1)",
        text: "#ffffff",
        textMuted: "#a1a1aa",
        cardBg: "#0a0a0a",
        border: "#27272a"
    }
};

const ICONS = {
    Search: ({ className }: { className?: string }) => <Search className={className} />,
    Reviews: ({ className }: { className?: string }) => <Star className={className} />,
    Instagram: ({ className }: { className?: string }) => <Instagram className={className} />,
    Automation: ({ className }: { className?: string }) => <Zap className={className} />,
    Chatbot: ({ className }: { className?: string }) => <MessageSquare className={className} />,
    Voicebot: ({ className }: { className?: string }) => <Mic className={className} />
};

// --- Types ---
type ScreenState = "form" | "loading" | "results" | "report";

interface FormData {
    company: string;
    website: string;
    instagram: string;
    sector: string;
    email: string;
}

// --- Components ---

const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"
        />
    </div>
);

const Card = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <motion.div
        whileHover={{ scale: 1.02, borderColor: "#00ff88", boxShadow: "0 0 20px rgba(0, 255, 136, 0.1)" }}
        onClick={onClick}
        className={`bg-[#0a0a0a] border border-[#27272a] p-6 rounded-xl transition-colors cursor-pointer group ${className}`}
    >
        {children}
    </motion.div>
);

const NeonButton = ({ children, onClick, className = "", secondary = false }: { children: React.ReactNode; onClick?: () => void; className?: string; secondary?: boolean }) => (
    <button
        onClick={onClick}
        className={`
      relative px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300
      flex items-center justify-center gap-2 group overflow-hidden
      ${secondary
                ? "bg-transparent border border-white/20 text-white hover:border-[#00ff88] hover:text-[#00ff88]"
                : "bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
            }
      ${className}
    `}
    >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
);

// --- Screen 1: Form ---
const FormScreen = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
    const [data, setData] = useState<FormData>({ company: "", website: "", instagram: "", sector: "", email: "" });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg mx-auto space-y-8"
        >
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                    Aether <span className="text-[#00ff88]">Consultant</span>
                </h2>
                <p className="text-white/60 text-lg">
                    Descubre oportunidades ocultas de IA en tu negocio en segundos.
                </p>
            </div>

            <div className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#00ff88] font-semibold">Empresa</label>
                    <input
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff88] focus:outline-none focus:ring-1 focus:ring-[#00ff88] transition-all placeholder:text-white/20"
                        value={data.company} onChange={e => setData({ ...data, company: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#00ff88] font-semibold">Web</label>
                        <input
                            type="text"
                            placeholder="tusitio.com"
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff88] focus:outline-none transition-all placeholder:text-white/20"
                            value={data.website} onChange={e => setData({ ...data, website: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#00ff88] font-semibold">Instagram</label>
                        <input
                            type="text"
                            placeholder="@usuario"
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff88] focus:outline-none transition-all placeholder:text-white/20"
                            value={data.instagram} onChange={e => setData({ ...data, instagram: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#00ff88] font-semibold">Sector</label>
                    <select
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff88] focus:outline-none transition-all"
                        value={data.sector} onChange={e => setData({ ...data, sector: e.target.value })}
                    >
                        <option value="">Selecciona tu sector...</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="realestate">Inmobiliaria</option>
                        <option value="services">Servicios Profesionales</option>
                        <option value="retail">Retail / Tienda Física</option>
                        <option value="hospitality">Restauración / Hotelería</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#00ff88] font-semibold">Email</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff88] focus:outline-none transition-all placeholder:text-white/20"
                        value={data.email} onChange={e => setData({ ...data, email: e.target.value })}
                    />
                </div>

                <NeonButton className="w-full mt-6" onClick={() => onSubmit(data)}>
                    Analizar mi Negocio <ArrowRight className="w-4 h-4" />
                </NeonButton>
            </div>
        </motion.div>
    );
};

// --- Screen 2: Loading ---
const steps = [
    { icon: Search, label: "Analizando estructura web..." },
    { icon: Star, label: "Escaneando opiniones..." },
    { icon: Instagram, label: "Revisando engagement..." },
    { icon: Zap, label: "Detectando oportunidades..." },
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= steps.length - 1) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return prev;
                }
                return prev + 1;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full max-w-md mx-auto text-center space-y-12"
        >
            <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 border-t-2 border-[#00ff88] rounded-full animate-spin" />
                <div className="absolute inset-2 border-r-2 border-[#00ff88]/50 rounded-full animate-spin reverse" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    {steps[currentStep] && (() => {
                        const Icon = steps[currentStep].icon;
                        return <Icon className="w-10 h-10 text-[#00ff88]" />;
                    })()}
                </div>
            </div>

            <div className="space-y-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0.3, x: -10 }}
                        animate={{
                            opacity: index === currentStep ? 1 : index < currentStep ? 0.5 : 0.2,
                            x: index === currentStep ? 0 : 0,
                            scale: index === currentStep ? 1.05 : 1
                        }}
                        className="flex items-center justify-center gap-3 text-lg"
                    >
                        {index < currentStep ? <CheckCircle2 className="w-5 h-5 text-[#00ff88]" /> : <div className="w-5 h-5" />}
                        <span className={index === currentStep ? "text-[#00ff88] font-bold" : "text-white"}>{step.label}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// --- Screen 3: Results ---
const ResultsScreen = ({ onDetailedClick }: { onDetailedClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full max-w-4xl mx-auto space-y-10"
        >
            <div className="text-center space-y-4">
                <div className="inline-block border border-[#00ff88] rounded-full px-6 py-2 bg-[#00ff88]/10">
                    <span className="text-[#00ff88] font-bold text-xl tracking-widest">AETHER SCORE: 42/100</span>
                </div>
                <h2 className="text-3xl font-light text-white">Hemos encontrado <span className="text-[#00ff88] font-bold">5 oportunidades críticas</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { icon: MessageSquare, title: "Chatbot de Ventas", impact: "Alto", desc: "Automatiza el 80% de consultas recurrentes." },
                    { icon: Star, title: "Gestión de Reviews", impact: "Medio", desc: "Mejora tu reputación respondiendo automáticamente." },
                    { icon: Instagram, title: "Auto-Responder IG", impact: "Alto", desc: "No pierdas leads por tardar en contestar DMs." },
                    { icon: Mic, title: "Voice Agent", impact: "Muy Alto", desc: "Atiende llamadas 24/7 sin coste extra." },
                    { icon: TrendingUp, title: "Predictive Analytics", impact: "Medio", desc: "Anticipa la demanda de stock." },
                ].map((item, i) => (
                    <Card key={i} className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <item.icon className="w-24 h-24 text-[#00ff88]" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="bg-[#00ff88]/10 w-fit p-3 rounded-lg">
                                <item.icon className="w-6 h-6 text-[#00ff88]" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs uppercase text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded">Impacto {item.impact}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    </Card>
                ))}

                {/* Call to Action Card */}
                <div className="bg-gradient-to-br from-[#00ff88]/20 to-black border border-[#00ff88]/50 p-6 rounded-xl flex flex-col justify-center items-center text-center space-y-4 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-shadow">
                    <h4 className="text-xl font-bold text-white">¿Quieres implementar esto?</h4>
                    <NeonButton onClick={() => window.open("/contacto", "_self")}>
                        Solicitar Demo
                    </NeonButton>
                </div>
            </div>

            <div className="flex justify-center pt-8">
                <button
                    onClick={onDetailedClick}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                >
                    Ver informe detallado y ROI simulado
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};

// --- Screen 4: Detailed Report ---
const ReportScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto bg-[#0a0a0a] border border-[#27272a] rounded-2xl overflow-hidden"
        >
            <div className="border-b border-[#27272a] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-3 h-8 bg-[#00ff88] rounded-full inline-block" />
                        Informe de Consultoría IA
                    </h2>
                    <p className="text-gray-400 mt-1 ml-6">Generado para tu negocio</p>
                </div>
                <NeonButton secondary className="text-sm px-4 py-2">
                    <Download className="w-4 h-4" /> PDF Report
                </NeonButton>
            </div>

            <div className="p-8 space-y-12">
                {/* Executive Summary */}
                <section>
                    <h3 className="text-[#00ff88] uppercase tracking-widest text-sm font-bold mb-4">Resumen Ejecutivo</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Tras analizar la presencia digital de su empresa, detectamos un alto potencial de automatización en la
                        atención al cliente y cualificación de leads. La implementación de agentes de IA podría reducir los costes
                        operativos un 40% en el primer año.
                    </p>
                </section>

                {/* Findings Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <Search className="w-5 h-5 text-[#00ff88]" /> Hallazgos Web
                        </div>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                            <li>Tiempo de carga mejorable</li>
                            <li>Falta de chatbot captador</li>
                            <li>SEO técnico optimizable</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <Star className="w-5 h-5 text-[#00ff88]" /> Hallazgos Reviews
                        </div>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                            <li>4.2/5 Score medio</li>
                            <li>15% reviews sin respuesta</li>
                            <li>Sentimiento positivo</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <Instagram className="w-5 h-5 text-[#00ff88]" /> Hallazgos Social
                        </div>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                            <li>Engagement rate: 3.5%</li>
                            <li>Frecuencia posts: Baja</li>
                            <li>DMs manuales detectados</li>
                        </ul>
                    </div>
                </div>

                {/* Oportunidades Matrix */}
                <section>
                    <h3 className="text-[#00ff88] uppercase tracking-widest text-sm font-bold mb-6">Matriz de Oportunidades IA</h3>
                    <div className="bg-black/40 rounded-xl p-6 border border-white/5 space-y-4">
                        {[
                            { name: "Asistente de Voz IA", impact: 95, diff: 60 },
                            { name: "Automatización de Citas", impact: 80, diff: 30 },
                            { name: "Generación de Contenido", impact: 70, diff: 20 },
                        ].map((op, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="w-1/3 text-white font-medium">{op.name}</div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Impacto {op.impact}%</span>
                                        <span>Dificultad {op.diff}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                                        <div style={{ width: `${op.impact}%` }} className="bg-[#00ff88] h-full" />
                                        <div style={{ width: `${op.diff}%` }} className="bg-red-500 h-full opacity-50" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Model ROI & Next Steps */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#00ff88]/5 p-6 rounded-xl border border-[#00ff88]/20">
                        <h3 className="text-[#00ff88] font-bold mb-2">ROI Simulado (Anual)</h3>
                        <div className="text-4xl font-bold text-white mb-1">€14.500</div>
                        <p className="text-sm text-gray-400">Ahorro estimado en horas hombre y recuperación de leads perdidos.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Próximos Pasos</h3>
                        <NeonButton className="w-full text-sm">
                            Agendar Reunión de Estrategia
                        </NeonButton>
                        <p className="text-xs text-center text-gray-500">Sin compromiso de compra</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Container ---
const BusinessConsultant = () => {
    const [screen, setScreen] = useState<ScreenState>("form");

    const handleFormSubmit = (data: FormData) => {
        // In a real app, send data here
        setScreen("loading");
    };

    const handleLoadingComplete = () => {
        setScreen("results");
    };

    return (
        <section className="py-32 px-4 md:px-8 relative overflow-hidden bg-black" id="business-consultant">
            {/* Background Ambient Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="container max-w-7xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    {screen === "form" && <FormScreen key="form" onSubmit={handleFormSubmit} />}
                    {screen === "loading" && <LoadingScreen key="loading" onComplete={handleLoadingComplete} />}
                    {screen === "results" && <ResultsScreen key="results" onDetailedClick={() => setScreen("report")} />}
                    {screen === "report" && <ReportScreen key="report" />}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default BusinessConsultant;
