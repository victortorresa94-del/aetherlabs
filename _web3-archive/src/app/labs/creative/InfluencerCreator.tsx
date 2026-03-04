'use client';

import React, { useState } from 'react';
import { Sparkles, User, Briefcase, Palette, Image as ImageIcon, Camera, Download, RefreshCw } from 'lucide-react';

type Gender = 'Hombre' | 'Mujer';
type Industry = 'Tecnología' | 'Moda' | 'Fitness' | 'Marketing' | 'Música';
type Style = 'Estudio' | 'Calle' | 'Retrofuturista' | 'UGC' | 'Lujo';
type Background = 'Negro' | 'Blanco' | 'Interior' | 'Exterior';

export default function InfluencerCreator() {
    const [gender, setGender] = useState<Gender>('Mujer');
    const [industry, setIndustry] = useState<Industry>('Moda');
    const [style, setStyle] = useState<Style>('Estudio');
    const [background, setBackground] = useState<Background>('Negro');

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('/api/create-influencer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gender,
                    industry,
                    style,
                    background,
                    pose: 'professional portrait'
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al generar el influencer');
            }

            if (data.image) {
                setResult(data.image);
            } else {
                throw new Error('No se recibió ninguna imagen');
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 h-fit">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-white">Configuración</h3>
                </div>

                <div className="space-y-6">
                    {/* Gender */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-[#808080] mb-3 flex items-center gap-2">
                            <User className="w-3 h-3" /> Género
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {(['Hombre', 'Mujer'] as Gender[]).map((g) => (
                                <button
                                    key={g}
                                    onClick={() => setGender(g)}
                                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${gender === g
                                            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                            : 'bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#2a2a2a]'
                                        }`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Industry */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-[#808080] mb-3 flex items-center gap-2">
                            <Briefcase className="w-3 h-3" /> Industria
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['Tecnología', 'Moda', 'Fitness', 'Marketing', 'Música'] as Industry[]).map((ind) => (
                                <button
                                    key={ind}
                                    onClick={() => setIndustry(ind)}
                                    className={`py-2 px-4 rounded-lg text-xs font-medium transition-all duration-200 border ${industry === ind
                                            ? 'bg-[#1a1a1a] border-[#82ff1f] text-[#82ff1f]'
                                            : 'bg-[#1a1a1a] border-transparent text-[#a0a0a0] hover:border-[#333]'
                                        }`}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Style */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-[#808080] mb-3 flex items-center gap-2">
                            <Palette className="w-3 h-3" /> Estética
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['Estudio', 'Calle', 'Retrofuturista', 'UGC', 'Lujo'] as Style[]).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStyle(s)}
                                    className={`py-2 px-4 rounded-lg text-xs font-medium transition-all duration-200 border ${style === s
                                            ? 'bg-[#1a1a1a] border-[#82ff1f] text-[#82ff1f]'
                                            : 'bg-[#1a1a1a] border-transparent text-[#a0a0a0] hover:border-[#333]'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Background */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-[#808080] mb-3 flex items-center gap-2">
                            <ImageIcon className="w-3 h-3" /> Fondo
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {(['Negro', 'Blanco', 'Interior', 'Exterior'] as Background[]).map((bg) => (
                                <button
                                    key={bg}
                                    onClick={() => setBackground(bg)}
                                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${background === bg
                                            ? 'bg-[#2a2a2a] text-white border border-white/20'
                                            : 'bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#2a2a2a]'
                                        }`}
                                >
                                    {bg}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${loading
                                ? 'bg-[#1a1a1a] text-[#666] cursor-not-allowed'
                                : 'bg-[#82ff1f] text-black hover:shadow-[0_0_20px_rgba(130,255,31,0.4)] hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? (
                            <>
                                <RefreshCw className="w-5 h-5 animate-spin" /> Generando...
                            </>
                        ) : (
                            <>
                                <Camera className="w-5 h-5" /> Crear Influencer IA
                            </>
                        )}
                    </button>

                    {error && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-8 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 flex items-center justify-center min-h-[600px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] opacity-50" />

                {result ? (
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                        <img
                            src={result}
                            alt="Generated Influencer"
                            className="max-h-[700px] w-auto rounded-lg shadow-2xl border border-[#333]"
                        />
                        <div className="mt-6 flex gap-4">
                            <a
                                href={result}
                                download={`influencer-${Date.now()}.png`}
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-[#f0f0f0] transition-colors"
                            >
                                <Download className="w-4 h-4" /> Descargar
                            </a>
                            <button
                                onClick={handleGenerate}
                                className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white border border-[#333] rounded-full font-medium hover:bg-[#2a2a2a] transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" /> Regenerar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 text-center max-w-md">
                        <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#2a2a2a]">
                            <User className="w-10 h-10 text-[#4a4a4a]" />
                        </div>
                        <h3 className="text-2xl font-light text-white mb-3">
                            Tu Influencer Virtual
                        </h3>
                        <p className="text-[#808080]">
                            Configura los parámetros a la izquierda y pulsa "Crear" para generar un modelo único y ultra-realista.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
