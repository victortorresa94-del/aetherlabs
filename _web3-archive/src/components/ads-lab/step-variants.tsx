'use client'

import React from "react";
import type { AdConfig } from "./ads-lab-wizard";

interface Props {
    config: AdConfig;
    updateConfig: (partial: Partial<AdConfig>) => void;
    onRegenerate: () => void;
    isGenerating: boolean;
}

const StepVariants: React.FC<Props> = ({ config, updateConfig, onRegenerate, isGenerating }) => {
    const toggleSelect = (id: string) => {
        updateConfig({
            generatedImages: config.generatedImages.map(img => ({
                ...img,
                selected: img.id === id ? !img.selected : img.selected,
            })),
        });
    };

    const selectedImage = config.generatedImages.find(img => img.selected);

    return (
        <div className="h-full flex flex-col lg:flex-row gap-8 overflow-hidden">
            {/* Left: Gallery */}
            <div className="flex-1 overflow-y-auto pr-2 pb-4">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-2 tracking-tight">Propuestas Generadas</h1>
                            <p className="text-zinc-500 text-lg">Selecciona las mejores variantes para tu campaña.</p>
                        </div>
                        <button
                            onClick={onRegenerate}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors disabled:opacity-50"
                        >
                            <svg className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                            </svg>
                            Regenerar
                        </button>
                    </div>

                    {config.generatedImages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {config.generatedImages.map((img, idx) => (
                                <div key={img.id} className="flex flex-col gap-3 w-full max-w-[280px] group">
                                    {/* Mobile Frame */}
                                    <div
                                        className={`relative cursor-pointer transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-[1.5rem] border-[6px] border-zinc-900 bg-black shadow-xl ${img.selected ? 'ring-4 ring-[#82ff1f] ring-offset-4 ring-offset-white' : 'ring-4 ring-transparent hover:ring-[#82ff1f]/20'
                                            }`}
                                        onClick={() => toggleSelect(img.id)}
                                        style={{ aspectRatio: '9/16' }}
                                    >
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-4 bg-zinc-900 rounded-b-xl z-10" />

                                        <img
                                            src={img.url}
                                            alt={`Variante ${String.fromCharCode(65 + idx)}`}
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                            <div className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-[10px] font-medium border border-white/20">
                                                {img.engine}
                                            </div>
                                        </div>

                                        {img.selected && (
                                            <div className="absolute top-6 right-3 w-7 h-7 rounded-full bg-[#82ff1f] text-black flex items-center justify-center shadow-lg">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center px-1">
                                        <span className={`text-sm font-bold ${img.selected ? 'text-[#82ff1f]' : 'text-black'}`}>
                                            Variante {String.fromCharCode(65 + idx)} {img.selected ? '(Seleccionada)' : ''}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                                </svg>
                            </div>
                            <p className="text-zinc-500">No se han generado creatividades aún.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Insights */}
            {selectedImage && (
                <div className="hidden lg:block w-[360px] bg-white rounded-2xl border border-zinc-100 p-6 overflow-y-auto">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z" />
                        </svg>
                        Insights de IA
                    </h2>

                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </div>
                            <span className="font-bold text-sm text-black">Potencial de Engagement</span>
                        </div>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Esta variante tiene un alto potencial de retención visual debido a su composición y contraste.
                        </p>
                    </div>

                    <div className="space-y-4 mb-6">
                        <h3 className="text-sm font-bold text-black">Análisis de la creatividad</h3>
                        <div className="space-y-3">
                            {[
                                { title: "Alta Retención Visual", desc: "Los colores y composición captan la atención en los primeros 3s." },
                                { title: "CTA Directo", desc: "Mensaje claro sin distracciones visuales." },
                                { title: "Formato Optimizado", desc: "Relación de aspecto 9:16 ideal para Reels/TikTok." },
                            ].map((insight, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <div>
                                        <span className="block text-sm font-semibold text-zinc-800">{insight.title}</span>
                                        <span className="text-xs text-zinc-500">{insight.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                        <h4 className="text-xs font-bold uppercase text-zinc-400 mb-3">Sugerencias</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Más brillo", "Más contraste", "Tipografía bold", "Colores cálidos"].map(s => (
                                <span key={s} className="px-3 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-600 border border-transparent hover:border-zinc-300 transition-colors cursor-pointer">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StepVariants;
