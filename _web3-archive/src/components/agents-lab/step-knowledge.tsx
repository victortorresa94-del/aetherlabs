'use client'

import React, { useState, useRef } from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
    updateConfig: (partial: Partial<AgentConfig>) => void;
}

const guidedQuestions = [
    { id: "q1", question: "¿A qué se dedica tu empresa?", placeholder: "Ej: Vendemos software de gestión para restaurantes..." },
    { id: "q2", question: "¿Quién es tu cliente ideal?", placeholder: "Ej: Dueños de restaurantes medianos en España..." },
    { id: "q3", question: "¿Cuáles son tus productos o servicios principales?", placeholder: "Ej: Software de TPV, gestión de reservas, control de inventario..." },
    { id: "q4", question: "¿Qué preguntas te hacen con más frecuencia?", placeholder: "Ej: ¿Cuánto cuesta? ¿Tiene prueba gratis? ¿Se integra con Glovo?..." },
    { id: "q5", question: "¿Cuál es tu ventaja competitiva?", placeholder: "Ej: Somos los únicos que ofrecemos soporte 24/7 en español..." },
];

const industries = [
    "Tecnología / SaaS",
    "E-commerce / Retail",
    "Hostelería / Restauración",
    "Salud / Clínicas",
    "Inmobiliaria",
    "Educación / Formación",
    "Servicios Profesionales",
    "Automoción",
    "Fitness / Bienestar",
    "Otro",
];

const StepKnowledge: React.FC<Props> = ({ config, updateConfig }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [newFaqQ, setNewFaqQ] = useState("");
    const [newFaqA, setNewFaqA] = useState("");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const updateKnowledge = (partial: Partial<AgentConfig['knowledge']>) => {
        updateConfig({
            knowledge: { ...config.knowledge, ...partial },
        });
    };

    const addFaq = () => {
        if (newFaqQ.trim() && newFaqA.trim()) {
            updateKnowledge({
                faqs: [...config.knowledge.faqs, { question: newFaqQ.trim(), answer: newFaqA.trim() }],
            });
            setNewFaqQ("");
            setNewFaqA("");
        }
    };

    const removeFaq = (idx: number) => {
        updateKnowledge({
            faqs: config.knowledge.faqs.filter((_, i) => i !== idx),
        });
    };

    const startRecording = async (fieldId: string) => {
        try {
            setActiveField(fieldId);
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = async () => {
                stream.getTracks().forEach(track => track.stop());
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                await transcribeAudio(blob, fieldId);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Mic error:", err);
            setActiveField(null);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const transcribeAudio = async (blob: Blob, fieldId: string) => {
        setIsTranscribing(true);
        try {
            const formData = new FormData();
            formData.append("audio", blob, "recording.webm");

            const res = await fetch("/api/agents-lab/transcribe", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                const transcription = data.text || "";

                if (fieldId === "description") {
                    updateKnowledge({ description: config.knowledge.description + " " + transcription });
                } else if (fieldId === "faq-answer") {
                    setNewFaqA(prev => prev + " " + transcription);
                } else if (fieldId.startsWith("guided-")) {
                    // Append to description as guided context
                    const qIdx = parseInt(fieldId.replace("guided-", ""));
                    const q = guidedQuestions[qIdx];
                    const entry = `${q.question}: ${transcription}`;
                    updateKnowledge({
                        description: config.knowledge.description
                            ? config.knowledge.description + "\n" + entry
                            : entry,
                    });
                }
            }
        } catch (err) {
            console.error("Transcription error:", err);
        } finally {
            setIsTranscribing(false);
            setActiveField(null);
        }
    };

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3 tracking-tight">
                    Entrena a tu agente
                </h1>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    Cuéntanos sobre tu negocio para que el agente responda con conocimiento real. Puedes escribir o usar el micrófono.
                </p>
            </div>

            <div className="space-y-8 max-w-3xl">
                {/* Business Name & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 block mb-2">Nombre del negocio</label>
                        <input
                            type="text"
                            value={config.knowledge.businessName}
                            onChange={e => updateKnowledge({ businessName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none"
                            placeholder="Ej: Mi Empresa S.L."
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 block mb-2">Sector</label>
                        <select
                            value={config.knowledge.industry}
                            onChange={e => updateKnowledge({ industry: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none appearance-none"
                        >
                            <option value="">Selecciona un sector</option>
                            {industries.map(ind => (
                                <option key={ind} value={ind}>{ind}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Guided Questions */}
                <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 block mb-4">Preguntas guiadas</label>
                    <div className="space-y-4">
                        {guidedQuestions.map((q, idx) => (
                            <div key={q.id} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-sm font-semibold text-black">{q.question}</p>
                                    <button
                                        onClick={() => isRecording && activeField === `guided-${idx}` ? stopRecording() : startRecording(`guided-${idx}`)}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isRecording && activeField === `guided-${idx}`
                                                ? 'bg-red-500 text-white animate-pulse'
                                                : 'bg-zinc-200 text-zinc-500 hover:bg-[#82ff1f] hover:text-black'
                                            }`}
                                        title={isRecording && activeField === `guided-${idx}` ? "Parar grabación" : "Grabar respuesta"}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            {isRecording && activeField === `guided-${idx}` ? (
                                                <rect x="6" y="6" width="12" height="12" rx="2" />
                                            ) : (
                                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <textarea
                                    className="w-full p-3 rounded-lg border border-zinc-200 bg-white text-black text-sm resize-none focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent outline-none"
                                    placeholder={q.placeholder}
                                    rows={2}
                                    onChange={e => {
                                        const entry = `${q.question}: ${e.target.value}`;
                                        // This is simplified - in production you'd track each field separately
                                        // For now we append to description
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Free Description */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Descripción libre del negocio</label>
                        <button
                            onClick={() => isRecording && activeField === 'description' ? stopRecording() : startRecording('description')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${isRecording && activeField === 'description'
                                    ? 'bg-red-500 text-white animate-pulse'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-[#82ff1f] hover:text-black'
                                }`}
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                {isRecording && activeField === 'description' ? (
                                    <rect x="6" y="6" width="12" height="12" rx="2" />
                                ) : (
                                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                )}
                            </svg>
                            {isRecording && activeField === 'description' ? 'Parar' : 'Dictar'}
                        </button>
                    </div>
                    {isTranscribing && activeField === 'description' && (
                        <div className="flex items-center gap-2 mb-2 text-xs text-[#82ff1f]">
                            <div className="w-3 h-3 rounded-full bg-[#82ff1f] animate-pulse" />
                            Transcribiendo audio...
                        </div>
                    )}
                    <textarea
                        value={config.knowledge.description}
                        onChange={e => updateKnowledge({ description: e.target.value })}
                        className="w-full h-32 p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all resize-none text-sm leading-relaxed placeholder-zinc-400 outline-none"
                        placeholder="Cuéntanos todo lo que el agente debería saber: tu propuesta de valor, precios, horarios, políticas..."
                    />
                </div>

                {/* FAQs */}
                <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 block mb-4">Preguntas Frecuentes (opcional)</label>

                    {config.knowledge.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-zinc-50 rounded-xl p-4 mb-3 border border-zinc-100 relative">
                            <button
                                onClick={() => removeFaq(idx)}
                                className="absolute top-2 right-2 text-zinc-400 hover:text-red-500 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <p className="text-sm font-semibold text-black mb-1">P: {faq.question}</p>
                            <p className="text-sm text-zinc-600">R: {faq.answer}</p>
                        </div>
                    ))}

                    <div className="bg-white rounded-xl p-4 border border-dashed border-zinc-300 space-y-3">
                        <input
                            type="text"
                            value={newFaqQ}
                            onChange={e => setNewFaqQ(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 bg-zinc-50 text-black text-sm focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent outline-none"
                            placeholder="Pregunta frecuente..."
                        />
                        <div className="flex gap-2">
                            <textarea
                                value={newFaqA}
                                onChange={e => setNewFaqA(e.target.value)}
                                className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 bg-zinc-50 text-black text-sm resize-none focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent outline-none"
                                placeholder="Respuesta..."
                                rows={2}
                            />
                            <button
                                onClick={() => isRecording && activeField === 'faq-answer' ? stopRecording() : startRecording('faq-answer')}
                                className={`self-end w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isRecording && activeField === 'faq-answer'
                                        ? 'bg-red-500 text-white animate-pulse'
                                        : 'bg-zinc-100 text-zinc-500 hover:bg-[#82ff1f] hover:text-black'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    {isRecording && activeField === 'faq-answer' ? (
                                        <rect x="6" y="6" width="12" height="12" rx="2" />
                                    ) : (
                                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                        {isTranscribing && activeField === 'faq-answer' && (
                            <div className="flex items-center gap-2 text-xs text-[#82ff1f]">
                                <div className="w-3 h-3 rounded-full bg-[#82ff1f] animate-pulse" />
                                Transcribiendo...
                            </div>
                        )}
                        <button
                            onClick={addFaq}
                            disabled={!newFaqQ.trim() || !newFaqA.trim()}
                            className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${newFaqQ.trim() && newFaqA.trim()
                                    ? 'bg-[#82ff1f] text-black hover:bg-[#6ee000]'
                                    : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                                }`}
                        >
                            + Añadir FAQ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepKnowledge;
