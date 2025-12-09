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
    AlertCircle,
    Loader2
} from "lucide-react";

// --- Types ---
type ScreenState = "form" | "loading" | "results" | "report";

interface FormData {
    company: string;
    website: string;
    instagram: string;
    sector: string;
    email: string;
}

// --- Logic Helpers ---

const SECTOR_OPPORTUNITIES: any = {
    ecommerce: [
        { title: "Recuperación de Carritos IA", icon: Zap, impact: "Alto", desc: "Emails hiper-personalizados que recuperan el 15% de ventas perdidas." },
        { title: "Descripción de Productos", icon: MessageSquare, impact: "Medio", desc: "Generación automática de fichas SEO-friendly en segundos." },
        { title: "Soporte Post-Venta 24/7", icon: MessageSquare, impact: "Muy Alto", desc: "Chatbot que resuelve incidencias de envíos sin humanos." }
    ],
    realestate: [
        { title: "Cualificación de Leads 24/7", icon: MessageSquare, impact: "Muy Alto", desc: "Agente que agenda visitas solo con clientes cualificados." },
        { title: "Virtual Staging", icon: Search, impact: "Alto", desc: "Decora propiedades vacías virtualmente para vender más rápido." },
        { title: "Generador de Fichas", icon: Zap, impact: "Medio", desc: "Crea descripciones atractivas de pisos automáticamente." }
    ],
    hospitality: [
        { title: "Reservas por Voz (Phone)", icon: Mic, impact: "Alto", desc: "IA que contesta el teléfono y anota reservas en el libro." },
        { title: "Gestión de Reseñas", icon: Star, impact: "Alto", desc: "Responde a cada review en Google/TripAdvisor automáticamente." },
        { title: "Menú Multilenguaje", icon: Search, impact: "Bajo", desc: "Traducción y adaptación de carta para turistas en tiempo real." }
    ],
    services: [
        { title: "Onboarding de Clientes", icon: CheckCircle2, impact: "Alto", desc: "Automatiza la recogida de documentación y contratos." },
        { title: "Agendamiento Inteligente", icon: Zap, impact: "Medio", desc: "Evita huecos en la agenda optimizando citas automáticamente." },
        { title: "Resúmenes de Reuniones", icon: Mic, impact: "Medio", desc: "Graba y resume videollamadas con planes de acción." }
    ],
    retail: [
        { title: "Predicción de Stock", icon: TrendingUp, impact: "Alto", desc: "Anticipa qué productos se venderán la próxima semana." },
        { title: "Fidelización WhatsApp", icon: MessageSquare, impact: "Alto", desc: "Envía ofertas personalizadas según historial de compra." },
        { title: "Turnos de Personal", icon: Zap, impact: "Medio", desc: "Optimiza horarios según afluencia prevista por IA." }
    ]
};

const DEFAULT_OPPS = [
    { title: "Chatbot de Atención", icon: MessageSquare, impact: "Medio", desc: "Responde dudas frecuentes en web 24/7." },
    { title: "Automatización de Facturas", icon: Zap, impact: "Alto", desc: "Escanea y procesa facturas sin intervención manual." },
    { title: "Content Creation", icon: Instagram, impact: "Medio", desc: "Ideas y copy para redes sociales automático." }
];

// --- Components ---

const Card = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={onClick}
        className={`bg-[#0a0a0a] border border-white/10 p-6 rounded-xl transition-all cursor-pointer group hover:border-[#82ff1f]/50 hover:shadow-[0_0_20px_rgba(130,255,31,0.1)] ${className}`}
    >
        {children}
    </motion.div>
);

const PrimaryButton = ({ children, onClick, className = "", secondary = false, disabled = false }: any) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
      px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300
      flex items-center justify-center gap-2
      ${secondary
                ? "bg-transparent border border-white/20 text-white hover:bg-white/10"
                : "bg-[#82ff1f] text-black hover:bg-[#6bcf1a] hover:scale-105 shadow-[0_0_15px_rgba(130,255,31,0.3)]"
            }
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}
    `}
    >
        {children}
    </button>
);

// --- Screen 1: Form ---
const FormScreen = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
    const [data, setData] = useState<FormData>({ company: "", website: "", instagram: "", sector: "", email: "" });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="text-center mb-10 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                        Auditoría IA Express
                    </h2>
                    <p className="text-zinc-400">
                        Analizamos tu huella digital y encontramos oportunidades de automatización en tiempo real.
                    </p>
                </div>

                <div className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#82ff1f] font-semibold ml-1">Empresa</label>
                            <input
                                type="text"
                                placeholder="Nombre de tu negocio"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#82ff1f] focus:outline-none focus:ring-1 focus:ring-[#82ff1f] transition-all placeholder:text-zinc-600"
                                value={data.company} onChange={e => setData({ ...data, company: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#82ff1f] font-semibold ml-1">Sector</label>
                            <select
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#82ff1f] focus:outline-none transition-all appearance-none cursor-pointer"
                                value={data.sector} onChange={e => setData({ ...data, sector: e.target.value })}
                            >
                                <option value="">Selecciona actividad...</option>
                                <option value="ecommerce">Tienda Online / E-Commerce</option>
                                <option value="realestate">Inmobiliaria</option>
                                <option value="services">Servicios Profesionales / Agencia</option>
                                <option value="retail">Comercio Físico / Retail</option>
                                <option value="hospitality">Restaurante / Hotel</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#82ff1f] font-semibold ml-1">Web (Opcional)</label>
                            <input
                                type="text"
                                placeholder="www.tuweb.com"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#82ff1f] focus:outline-none transition-all placeholder:text-zinc-600"
                                value={data.website} onChange={e => setData({ ...data, website: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#82ff1f] font-semibold ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="teenviaremos@elreporte.com"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#82ff1f] focus:outline-none transition-all placeholder:text-zinc-600"
                                value={data.email} onChange={e => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <PrimaryButton className="w-full mt-4 text-lg py-5" onClick={() => onSubmit(data)} disabled={!data.company || !data.sector || !data.email}>
                        Analizar Oportunidades
                    </PrimaryButton>
                    <p className="text-xs text-center text-zinc-600 mt-4">
                        *Análisis gratuito generado por IA. Tus datos están seguros.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- Screen 2: Loading ---
const LoadingScreen = ({ onComplete, data }: { onComplete: (opps: any[]) => void, data: FormData }) => {
    const [log, setLog] = useState<string>("Iniciando escáner...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const sequence = async () => {
            // Simulation of "Real" Analysis Steps
            const steps = [
                { msg: `Conectando con ${data.website || "base de datos de sector"}...`, t: 800 },
                { msg: `Analizando presencia digital de ${data.company}...`, t: 1500 },
                { msg: "Detectando tecnologías actuales...", t: 1000 },
                { msg: "Buscando reseñas y sentimiento de cliente...", t: 1200 },
                { msg: `Calculando métricas para sector: ${data.sector}...`, t: 1000 },
                { msg: "Generando hoja de ruta de IA...", t: 800 },
            ];

            for (let i = 0; i < steps.length; i++) {
                setLog(steps[i].msg);
                setProgress(((i + 1) / steps.length) * 100);
                await new Promise(r => setTimeout(r, steps[i].t));
            }

            // Generate tailored results
            const sectorOpps = SECTOR_OPPORTUNITIES[data.sector] || DEFAULT_OPPS;
            onComplete(sectorOpps);
        };

        sequence();
    }, [onComplete, data]);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full max-w-md mx-auto text-center space-y-8 py-12"
        >
            <div className="relative w-24 h-24 mx-auto">
                <Loader2 className="w-full h-full text-[#82ff1f] animate-spin" />
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-light text-white">Analizando <span className="text-[#82ff1f] font-normal">{data.company}</span>...</h3>
                <p className="text-zinc-400 font-mono text-sm">{log}</p>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto">
                    <motion.div
                        className="h-full bg-[#82ff1f]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

// --- Screen 3: Results ---
const ResultsScreen = ({ opps, data, onDetailedClick }: { opps: any[], data: FormData, onDetailedClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full max-w-5xl mx-auto space-y-10"
        >
            <div className="text-center space-y-4">
                <div className="inline-block border border-[#82ff1f]/30 rounded-full px-4 py-1 bg-[#82ff1f]/10 mb-2">
                    <span className="text-[#82ff1f] font-bold text-sm tracking-widest uppercase">Análisis Completado</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
                    Hemos detectado <span className="text-[#82ff1f] font-medium">{opps.length} Oportunidades Clave</span> para {data.company}
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Basado en el análisis de tu sector ({data.sector}), estas son las implementaciones de IA que generarían mayor ROI inmediato.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {opps.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Card key={i} className="flex flex-col h-full bg-[#0a0a0a] hover:bg-[#111]">
                            <div className="mb-6 bg-[#82ff1f]/10 w-fit p-3 rounded-xl">
                                <Icon className="w-8 h-8 text-[#82ff1f]" />
                            </div>
                            <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-zinc-400 flex-grow mb-4 leading-relaxed">{item.desc}</p>
                            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                <span className="text-xs uppercase text-[#82ff1f] font-bold">Impacto {item.impact}</span>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="text-center pt-8">
                <PrimaryButton onClick={onDetailedClick} className="mx-auto" secondary>
                    Ver Informe Detallado y Plan
                </PrimaryButton>
            </div>
        </motion.div>
    );
};

// --- Screen 4: Detailed Report ---
const ReportScreen = ({ opps, data }: { opps: any[], data: FormData }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
            <div className="p-8 md:p-12 border-b border-white/10 bg-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#82ff1f] rounded-full inline-block" />
                        Plan Estratégico IA
                    </h2>
                    <p className="text-zinc-400 mt-1 ml-5">Preparado para {data.company}</p>
                </div>
                <PrimaryButton secondary className="text-sm px-4 py-2 h-10">
                    <Download className="w-4 h-4" /> PDF Report
                </PrimaryButton>
            </div>

            <div className="p-8 md:p-12 space-y-12">
                {/* Executive Summary */}
                <section>
                    <h3 className="text-[#82ff1f] uppercase tracking-widest text-xs font-bold mb-4">Diagnóstico</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg font-light">
                        {data.website ? "Tu presencia web muestra bases sólidas," : "Tu negocio tiene potencial,"} pero hemos detectado fugas de eficiencia en procesos repetitivos.
                        En el sector <span className="text-white font-medium capitalize">{data.sector}</span>, la competencia ya está automatizando la atención al cliente y la gestión de leads.
                        Implementar estas soluciones podría <span className="text-white font-medium">ahorrarte +20h semanales</span>.
                    </p>
                </section>

                {/* Roadmap */}
                <section>
                    <h3 className="text-[#82ff1f] uppercase tracking-widest text-xs font-bold mb-6">Hoja de Ruta Recomendada</h3>
                    <div className="space-y-6">
                        {opps.map((op, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-[#82ff1f]/20 border border-[#82ff1f]/50 flex items-center justify-center text-[#82ff1f] font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    {i < opps.length - 1 && <div className="w-px h-full bg-white/10 my-2" />}
                                </div>
                                <div className="pb-6">
                                    <h4 className="text-white font-medium text-lg">{op.title}</h4>
                                    <p className="text-zinc-400 text-sm mt-1">{op.desc}</p>
                                    <div className="flex gap-4 mt-3">
                                        <div className="text-xs text-zinc-500">Dificultad: <span className="text-white">Baja</span></div>
                                        <div className="text-xs text-zinc-500">Tiempo: <span className="text-white">2 semanas</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to action */}
                <div className="bg-[#82ff1f] rounded-2xl p-8 text-black text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Hacemos esto realidad?</h3>
                    <p className="mb-8 max-w-lg mx-auto leading-relaxed opacity-90">
                        Tenemos la tecnología y la estrategia lista. Solo falta tu aprobación para empezar a transformar {data.company}.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => window.location.href = '/contacto'} className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                            Agendar Reunión Técnica
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Container ---
const BusinessConsultant = () => {
    const [screen, setScreen] = useState<ScreenState>("form");
    const [formData, setFormData] = useState<FormData>({ company: "", website: "", instagram: "", sector: "", email: "" });
    const [opportunities, setOpportunities] = useState<any[]>([]);

    const handleFormSubmit = (data: FormData) => {
        setFormData(data);
        setScreen("loading");
    };

    const handleLoadingComplete = (opps: any[]) => {
        setOpportunities(opps);
        setScreen("results");
    };

    return (
        <section className="bg-black py-12 px-4" id="consultor-ia">
            <AnimatePresence mode="wait">
                {screen === "form" && <FormScreen key="form" onSubmit={handleFormSubmit} />}
                {screen === "loading" && <LoadingScreen key="loading" data={formData} onComplete={handleLoadingComplete} />}
                {screen === "results" && <ResultsScreen key="results" opps={opportunities} data={formData} onDetailedClick={() => setScreen("report")} />}
                {screen === "report" && <ReportScreen key="report" opps={opportunities} data={formData} />}
            </AnimatePresence>
        </section>
    );
};

export default BusinessConsultant;
