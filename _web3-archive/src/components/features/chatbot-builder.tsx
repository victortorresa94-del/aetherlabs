import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageSquare, Mic, Globe, Smartphone, Check, ArrowRight, Mail, Loader2, User, Sparkles,
    Zap, Database, Calendar, ShoppingCart, FileText, BrainCircuit, Server, CreditCard, Clock,
    DollarSign, Shield, FileJson, Image as ImageIcon, Phone
} from 'lucide-react';
import Image from 'next/image';

export default function ChatbotBuilder() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const [formData, setFormData] = useState({
        // Step 1: Basics
        queries: 100,
        channels: [] as string[],
        timeline: 'no_rush',

        // Step 2: Capabilities
        capabilities: [] as string[],
        sources: [] as string[],

        // Step 3: Tech
        integrations: [] as string[],
        memory: 'session',
        aiLevel: 'professional',

        // Step 4: Identity
        type: 'text',
        gender: 'neutral',
        personality: 'professional',

        // Step 5: Contact
        email: ''
    });

    const toggleList = (field: 'channels' | 'capabilities' | 'sources' | 'integrations', value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value]
        }));
    };

    const calculateQuote = () => {
        setLoading(true);

        // Simulate AI Processing
        setTimeout(() => {
            let implementationCost = 1000; // Base setup
            let monthlyFixed = 29; // Base hosting

            // --- Implementation Costs ---

            // Channels
            if (formData.channels.includes('whatsapp')) implementationCost += 400;
            if (formData.channels.includes('voice')) implementationCost += 800;
            if (formData.channels.includes('instagram')) implementationCost += 300;

            // Capabilities (Complexity)
            const complexCaps = ['appointments', 'orders', 'quotes', 'voice_calls', 'images'];
            const complexityScore = formData.capabilities.filter(c => complexCaps.includes(c)).length;
            implementationCost += complexityScore * 300;

            // Integrations
            implementationCost += formData.integrations.length * 250;

            // AI Level & Memory
            if (formData.aiLevel === 'premium') implementationCost += 500;
            if (formData.memory === 'long_term') {
                implementationCost += 300; // VectorDB setup
                monthlyFixed += 20; // VectorDB hosting
            }

            // --- Monthly Costs ---

            // AI Model Cost Factor
            let costPerMsg = 0.002; // Economic
            if (formData.aiLevel === 'professional') costPerMsg = 0.005;
            if (formData.aiLevel === 'premium') costPerMsg = 0.01;
            if (formData.type === 'voice') costPerMsg += 0.05; // Voice overhead

            const msgsPerConversation = 15; // Average
            const monthlyVariable = formData.queries * msgsPerConversation * costPerMsg;

            // Adjust based on budget constraint if set (just for logic simulation)
            // In a real app, we might suggest a lower tier if budget is low.

            const totalMonthly = monthlyFixed + monthlyVariable;

            setResult({
                implementation: implementationCost,
                monthly: Math.round(totalMonthly),
                breakdown: {
                    fixed: monthlyFixed,
                    variable: Math.round(monthlyVariable)
                }
            });
            setLoading(false);
            setStep(6); // Go to Result
        }, 3000); // Longer wait for "AI Generation" effect
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const steps = [
        { num: 1, title: "Alcance" },
        { num: 2, title: "Funcionalidades" },
        { num: 3, title: "Tecnología" },
        { num: 4, title: "Identidad" },
        { num: 5, title: "Contacto" }
    ];

    return (
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden shadow-xl">
            <div className="p-6 md:p-12">
                {/* Progress Bar */}
                <div className="flex justify-between mb-12 relative max-w-3xl mx-auto">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-200 -z-10" />
                    {steps.map((s) => (
                        <div key={s.num} className="flex flex-col items-center gap-2 bg-zinc-50 px-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${s.num <= step ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-400'
                                    }`}
                            >
                                {s.num}
                            </div>
                            <span className={`text-[10px] uppercase font-bold hidden md:block ${s.num <= step ? 'text-black' : 'text-zinc-300'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {/* STEP 1: ALCANCE Y CANALES */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Definición del Proyecto</h3>
                                <p className="text-zinc-500">Empecemos por lo básico: volumen y canales.</p>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-zinc-700 mb-4">
                                    Conversaciones mensuales: <span className="text-[#82ff1f] bg-black px-2 py-1 rounded text-xs ml-2">{formData.queries}</span>
                                </label>
                                <div className="bg-white p-6 rounded-2xl border border-zinc-200">
                                    <input
                                        type="range"
                                        min="50"
                                        max="5000"
                                        step="50"
                                        value={formData.queries}
                                        onChange={(e) => setFormData({ ...formData, queries: parseInt(e.target.value) })}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-black mb-4"
                                    />
                                    <div className="flex justify-between text-xs text-zinc-400 font-medium">
                                        <span>50 consultas</span>
                                        <span>5.000+ consultas</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-4">Canales de integración</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { id: 'web', label: 'Web', icon: 'https://img.icons8.com/color/96/chrome.png' },
                                        { id: 'whatsapp', label: 'WhatsApp', icon: 'https://img.icons8.com/color/96/whatsapp--v1.png' },
                                        { id: 'instagram', label: 'Instagram', icon: 'https://img.icons8.com/fluency/96/instagram-new.png' },
                                        { id: 'voice', label: 'Teléfono', icon: 'https://img.icons8.com/color/96/phone.png' },
                                    ].map((channel) => (
                                        <button
                                            key={channel.id}
                                            onClick={() => toggleList('channels', channel.id)}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${formData.channels.includes(channel.id)
                                                ? 'border-black bg-black text-white'
                                                : 'border-zinc-200 hover:border-zinc-300 text-zinc-600'
                                                }`}
                                        >
                                            <Image src={channel.icon} alt={channel.label} width={32} height={32} className="object-contain" />
                                            <span className="font-medium text-sm">{channel.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-4">Entrega deseada</label>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { id: 'asap', label: 'Lo antes posible' },
                                        { id: 'week', label: 'En 7 días' },
                                        { id: 'two_weeks', label: 'En 15 días' },
                                        { id: 'no_rush', label: 'No tengo prisa' },
                                    ].map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setFormData({ ...formData, timeline: t.id })}
                                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${formData.timeline === t.id
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                                                }`}
                                        >
                                            {t.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button
                                    onClick={nextStep}
                                    disabled={formData.channels.length === 0}
                                    className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    Siguiente
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: FUNCIONALIDADES */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Capacidades y Conocimiento</h3>
                                <p className="text-zinc-500">¿Qué debe hacer y saber tu agente?</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-4 flex items-center gap-2">
                                        <Zap size={16} className="text-[#82ff1f]" />
                                        ¿Qué debe hacer?
                                    </label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'faq', label: 'Responder preguntas frecuentes' },
                                            { id: 'support_247', label: 'Atender clientes 24/7' },
                                            { id: 'leads', label: 'Captar leads y pasarlos a CRM' },
                                            { id: 'appointments', label: 'Agendar citas o reservas' },
                                            { id: 'stock', label: 'Consultar stock / disponibilidad' },
                                            { id: 'email', label: 'Enviar emails automáticos' },
                                            { id: 'orders', label: 'Gestionar pedidos o devoluciones' },
                                            { id: 'docs', label: 'Leer documentos (PDF, catálogos)' },
                                            { id: 'images', label: 'Analizar imágenes (tickets, fotos)' },
                                            { id: 'quotes', label: 'Crear presupuestos automáticos' },
                                            { id: 'voice_calls', label: 'Atender llamadas de voz' },
                                        ].map((cap) => (
                                            <label key={cap.id} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors">
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.capabilities.includes(cap.id) ? 'bg-black border-black' : 'border-zinc-300'
                                                    }`}>
                                                    {formData.capabilities.includes(cap.id) && <Check size={12} className="text-white" />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={formData.capabilities.includes(cap.id)}
                                                    onChange={() => toggleList('capabilities', cap.id)}
                                                />
                                                <span className="text-sm text-zinc-700">{cap.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-4 flex items-center gap-2">
                                        <Database size={16} className="text-blue-500" />
                                        ¿Qué debe saber?
                                    </label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'pdf', label: 'Documentos PDF (menús, catálogos)' },
                                            { id: 'web', label: 'Página web corporativa' },
                                            { id: 'db_clients', label: 'Base de datos de clientes' },
                                            { id: 'faq_doc', label: 'Listado de Preguntas Frecuentes' },
                                            { id: 'pricing', label: 'Tarifas y precios' },
                                            { id: 'manuals', label: 'Manuales o políticas internas' },
                                            { id: 'scratch', label: 'Quiero que aprenda de cero' },
                                        ].map((src) => (
                                            <label key={src.id} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors">
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.sources.includes(src.id) ? 'bg-black border-black' : 'border-zinc-300'
                                                    }`}>
                                                    {formData.sources.includes(src.id) && <Check size={12} className="text-white" />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={formData.sources.includes(src.id)}
                                                    onChange={() => toggleList('sources', src.id)}
                                                />
                                                <span className="text-sm text-zinc-700">{src.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={prevStep} className="text-zinc-500 hover:text-black font-medium px-4">Atrás</button>
                                <button onClick={nextStep} className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                    Siguiente <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: TECNOLOGÍA */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Integraciones y Tecnología</h3>
                                <p className="text-zinc-500">El motor bajo el capó.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-4">Integraciones Necesarias</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {[
                                        { id: 'calendar', label: 'Google Calendar', icon: 'https://img.icons8.com/color/96/google-calendar--v2.png' },
                                        { id: 'whatsapp_api', label: 'WhatsApp Business API', icon: 'https://img.icons8.com/color/96/whatsapp--v1.png' },
                                        { id: 'crm', label: 'CRM (HubSpot, etc)', icon: 'https://img.icons8.com/color/96/hubspot.png' },
                                        { id: 'email', label: 'Gmail / Outlook', icon: 'https://img.icons8.com/color/96/gmail-new.png' },
                                        { id: 'sheets', label: 'Google Sheets', icon: 'https://img.icons8.com/color/96/google-sheets.png' },
                                        { id: 'stripe', label: 'Stripe / Pagos', icon: 'https://img.icons8.com/color/96/stripe.png' },
                                        { id: 'ecommerce', label: 'eCommerce', icon: 'https://img.icons8.com/color/96/shopping-cart.png' },
                                        { id: 'erp', label: 'ERP / Software Propio', icon: 'https://img.icons8.com/color/96/server.png' },
                                    ].map((int) => (
                                        <button
                                            key={int.id}
                                            onClick={() => toggleList('integrations', int.id)}
                                            className={`p-3 rounded-xl border transition-all flex items-center gap-3 text-left ${formData.integrations.includes(int.id)
                                                ? 'border-black bg-black/5'
                                                : 'border-zinc-200 hover:border-zinc-300'
                                                }`}
                                        >
                                            <Image src={int.icon} alt={int.label} width={24} height={24} className="object-contain" />
                                            <span className="text-sm font-medium text-zinc-800">{int.label}</span>
                                            {formData.integrations.includes(int.id) && <Check className="ml-auto text-black" size={16} />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-4">Memoria</label>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setFormData({ ...formData, memory: 'session' })}
                                            className={`w-full p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-left ${formData.memory === 'session' ? 'border-black bg-black/5' : 'border-zinc-200'
                                                }`}
                                        >
                                            <Clock className="mt-1 shrink-0" size={20} />
                                            <div>
                                                <div className="font-bold text-sm">Memoria de Sesión</div>
                                                <div className="text-xs text-zinc-500">Recuerda solo durante la conversación actual.</div>
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => setFormData({ ...formData, memory: 'long_term' })}
                                            className={`w-full p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-left ${formData.memory === 'long_term' ? 'border-black bg-black/5' : 'border-zinc-200'
                                                }`}
                                        >
                                            <BrainCircuit className="mt-1 shrink-0" size={20} />
                                            <div>
                                                <div className="font-bold text-sm">Memoria a Largo Plazo</div>
                                                <div className="text-xs text-zinc-500">Recuerda al usuario y conversaciones pasadas (VectorDB).</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-4">Nivel de Inteligencia (IA)</label>
                                    <div className="space-y-3">
                                        {[
                                            { id: 'economic', label: 'Económico', desc: 'Rápido y eficiente. Ideal para FAQs.' },
                                            { id: 'professional', label: 'Profesional', desc: 'Razonamiento avanzado y tono humano.' },
                                            { id: 'premium', label: 'Premium', desc: 'Máxima capacidad, multimodal y complejo.' },
                                        ].map((lvl) => (
                                            <button
                                                key={lvl.id}
                                                onClick={() => setFormData({ ...formData, aiLevel: lvl.id as any })}
                                                className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between text-left ${formData.aiLevel === lvl.id ? 'border-black bg-black/5' : 'border-zinc-200'
                                                    }`}
                                            >
                                                <div>
                                                    <div className="font-bold text-sm">{lvl.label}</div>
                                                    <div className="text-xs text-zinc-500">{lvl.desc}</div>
                                                </div>
                                                {formData.aiLevel === lvl.id && <Check size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={prevStep} className="text-zinc-500 hover:text-black font-medium px-4">Atrás</button>
                                <button onClick={nextStep} className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                    Siguiente <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: IDENTIDAD */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Identidad del Asistente</h3>
                                <p className="text-zinc-500">Define la apariencia y personalidad de tu IA.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-4">Género / Avatar</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { id: 'male', label: 'Masculino', image: '/images/avatars/man-hoodie.jpg' },
                                            { id: 'female', label: 'Femenino', image: '/images/avatars/woman-mic.jpg' },
                                        ].map((g) => (
                                            <button
                                                key={g.id}
                                                onClick={() => setFormData({ ...formData, gender: g.id })}
                                                className={`relative overflow-hidden rounded-xl border-2 transition-all aspect-square group ${formData.gender === g.id
                                                    ? 'border-black ring-2 ring-black ring-offset-2'
                                                    : 'border-zinc-200 hover:border-zinc-300'
                                                    }`}
                                            >
                                                <Image
                                                    src={g.image}
                                                    alt={g.label}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className={`absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/80 to-transparent transition-opacity ${formData.gender === g.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                    <span className="text-white font-medium text-sm">{g.label}</span>
                                                    {formData.gender === g.id && <Check className="ml-auto text-[#82ff1f]" size={16} />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-700 mb-4">Formato Principal</label>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'text', label: 'Solo Texto', icon: MessageSquare },
                                                { id: 'voice', label: 'Voz + Texto', icon: Mic },
                                            ].map((type) => (
                                                <button
                                                    key={type.id}
                                                    onClick={() => setFormData({ ...formData, type: type.id })}
                                                    className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${formData.type === type.id
                                                        ? 'border-black bg-black/5'
                                                        : 'border-zinc-200 hover:border-zinc-300'
                                                        }`}
                                                >
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formData.type === type.id ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                                                        <type.icon size={16} />
                                                    </div>
                                                    <span className="font-medium text-zinc-800 text-sm">{type.label}</span>
                                                    {formData.type === type.id && <Check className="ml-auto text-black" size={16} />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-zinc-700 mb-4">Personalidad</label>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'professional', label: 'Profesional', icon: User },
                                                { id: 'friendly', label: 'Cercano', icon: Sparkles },
                                            ].map((p) => (
                                                <button
                                                    key={p.id}
                                                    onClick={() => setFormData({ ...formData, personality: p.id })}
                                                    className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${formData.personality === p.id
                                                        ? 'border-black bg-black/5'
                                                        : 'border-zinc-200 hover:border-zinc-300'
                                                        }`}
                                                >
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formData.personality === p.id ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                                                        <p.icon size={16} />
                                                    </div>
                                                    <span className="font-medium text-zinc-800 text-sm">{p.label}</span>
                                                    {formData.personality === p.id && <Check className="ml-auto text-black" size={16} />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={prevStep} className="text-zinc-500 hover:text-black font-medium px-4">Atrás</button>
                                <button onClick={nextStep} className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                    Siguiente <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 5: CONTACTO */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 max-w-md mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Generar Propuesta</h3>
                                <p className="text-zinc-500">Déjanos tu email para que nuestra IA genere y te envíe el presupuesto detallado.</p>
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-black focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                                <Sparkles className="text-blue-500 shrink-0" size={20} />
                                <p className="text-xs text-blue-700">
                                    Usaremos <strong>Gemini 3</strong> para analizar tus respuestas y crear una propuesta técnica personalizada al instante.
                                </p>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={prevStep} className="text-zinc-500 hover:text-black font-medium px-4">Atrás</button>
                                <button
                                    onClick={calculateQuote}
                                    disabled={!formData.email || loading}
                                    className="bg-[#82ff1f] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-[#82ff1f]/20 w-full justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" />
                                            Generando con IA...
                                        </>
                                    ) : (
                                        <>
                                            Ver Propuesta
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 6: RESULTADO */}
                    {step === 6 && result && (
                        <motion.div
                            key="step6"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="w-20 h-20 bg-[#82ff1f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#82ff1f]/30">
                                <Check size={40} className="text-black" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4">¡Propuesta Generada!</h3>
                            <p className="text-zinc-500 mb-12 text-lg">
                                Hemos enviado el desglose técnico completo a <strong>{formData.email}</strong>.
                                Aquí tienes un resumen estimado:
                            </p>

                            <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 mb-12">
                                <Mail className="w-12 h-12 text-black mx-auto mb-4" />
                                <h4 className="text-xl font-bold mb-2">Revisa tu bandeja de entrada</h4>
                                <p className="text-zinc-600">
                                    Hemos enviado un PDF con el desglose detallado de costes (implementación + mensualidad) y una propuesta técnica basada en tus respuestas a <strong>{formData.email}</strong>.
                                </p>
                                <p className="text-xs text-zinc-400 mt-4">
                                    Si no lo recibes en unos minutos, revisa la carpeta de spam.
                                </p>
                            </div>

                            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mb-8 text-left">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <FileJson size={20} />
                                    Resumen de tu configuración
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {formData.channels.map(c => <span key={c} className="px-3 py-1 bg-white border rounded-full text-xs font-medium">{c}</span>)}
                                    {formData.capabilities.slice(0, 3).map(c => <span key={c} className="px-3 py-1 bg-white border rounded-full text-xs font-medium">{c}</span>)}
                                    {formData.capabilities.length > 3 && <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium">+{formData.capabilities.length - 3} más</span>}
                                    <span className="px-3 py-1 bg-black text-white border border-black rounded-full text-xs font-medium">{formData.aiLevel}</span>
                                </div>
                            </div>

                            <p className="text-sm text-zinc-400 mb-8 max-w-lg mx-auto">
                                *Estos precios son estimaciones preliminares generadas por IA. Un consultor humano revisará tu caso para confirmar el presupuesto final.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-6 py-3 rounded-full border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 transition-colors"
                                >
                                    Empezar de nuevo
                                </button>
                                <a
                                    href="https://wa.me/34600000000?text=Hola,%20he%20recibido%20mi%20presupuesto%20IA%20y%20quiero%20avanzar."
                                    target="_blank"
                                    className="px-8 py-3 rounded-full bg-black text-white font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                                >
                                    <MessageSquare size={18} />
                                    Hablar con un Humano
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
