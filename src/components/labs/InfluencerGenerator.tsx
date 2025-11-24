'use client';

import React, { useState } from 'react';
import { Sparkles, User, Download, RefreshCw, Layers, Palette, MapPin, Activity, Users } from 'lucide-react';

// Types based on the prompt
type Gender = 'male' | 'female';
type Ethnicity = 'asian' | 'black' | 'latino' | 'white' | 'middle_eastern' | 'indian' | 'mixed';
type BodyType = 'slim' | 'average' | 'athletic' | 'muscular' | 'plus_size';
type Style = 'streetwear' | 'elegant' | 'casual' | 'sporty' | 'techwear' | 'business';
type Background = 'studio_black' | 'studio_white' | 'urban' | 'nature' | 'interior_modern' | 'interior_loft';

export default function InfluencerGenerator() {
    // State for controls
    const [gender, setGender] = useState<Gender>('female');
    const [ageRange, setAgeRange] = useState<number>(25);
    const [ethnicity, setEthnicity] = useState<Ethnicity>('white');
    const [bodyType, setBodyType] = useState<BodyType>('slim');
    const [style, setStyle] = useState<Style>('streetwear');
    const [background, setBackground] = useState<Background>('studio_black');
    const [numImages, setNumImages] = useState<number>(3);

    // State for generation
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        setResults([]);

        try {
            // We send the frontend state as is to our internal proxy
            // The proxy will handle the mapping to the external API payload
            const res = await fetch('/api/create-influencer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gender,
                    ageRange, // Included in state but ignored by proxy as per requirements
                    ethnicity,
                    bodyType,
                    style,
                    background,
                    numImages
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || `Error: ${res.status}`);
            }

            // Handle response format: { images: ["base64...", ...] }
            if (data.images && Array.isArray(data.images)) {
                setResults(data.images);
            } else {
                throw new Error('Formato de respuesta inesperado: no se encontraron imágenes');
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    // Helper for pill buttons
    const Pill = ({
        active,
        onClick,
        children
    }: {
        active: boolean;
        onClick: () => void;
        children: React.ReactNode
    }) => (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${active
                ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                : 'bg-[#1a1a1a] text-[#a0a0a0] border-transparent hover:border-[#333] hover:text-white'
                }`}
        >
            {children}
        </button>
    );

    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 h-fit sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-white">Configuración</h3>
                </div>

                <div className="space-y-8">
                    {/* Gender */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <User className="w-3 h-3" /> Género
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['male', 'female'] as Gender[]).map((g) => (
                                <Pill key={g} active={gender === g} onClick={() => setGender(g)}>
                                    {g === 'male' ? 'Hombre' : 'Mujer'}
                                </Pill>
                            ))}
                        </div>
                    </div>

                    {/* Age Range */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <Activity className="w-3 h-3" /> Edad: {ageRange} años
                        </label>
                        <input
                            type="range"
                            min="18"
                            max="65"
                            value={ageRange}
                            onChange={(e) => setAgeRange(Number(e.target.value))}
                            className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-white"
                        />
                        <div className="flex justify-between text-[10px] text-[#666] mt-1">
                            <span>18</span>
                            <span>65</span>
                        </div>
                    </div>

                    {/* Ethnicity */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <Users className="w-3 h-3" /> Etnia
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['asian', 'black', 'latino', 'white', 'middle_eastern', 'indian', 'mixed'] as Ethnicity[]).map((e) => (
                                <Pill key={e} active={ethnicity === e} onClick={() => setEthnicity(e)}>
                                    {e.charAt(0).toUpperCase() + e.slice(1).replace('_', ' ')}
                                </Pill>
                            ))}
                        </div>
                    </div>

                    {/* Body Type */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <Activity className="w-3 h-3" /> Cuerpo
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['slim', 'average', 'athletic', 'muscular', 'plus_size'] as BodyType[]).map((b) => (
                                <Pill key={b} active={bodyType === b} onClick={() => setBodyType(b)}>
                                    {b.charAt(0).toUpperCase() + b.slice(1).replace('_', ' ')}
                                </Pill>
                            ))}
                        </div>
                    </div>

                    {/* Style */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <Palette className="w-3 h-3" /> Estilo
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['streetwear', 'elegant', 'casual', 'sporty', 'techwear', 'business'] as Style[]).map((s) => (
                                <Pill key={s} active={style === s} onClick={() => setStyle(s)}>
                                    {s.charAt(0).toUpperCase() + s.slice(1)}
                                </Pill>
                            ))}
                        </div>
                    </div>

                    {/* Background */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <MapPin className="w-3 h-3" /> Fondo
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['studio_black', 'studio_white', 'urban', 'nature', 'interior_modern', 'interior_loft'] as Background[]).map((b) => (
                                <Pill key={b} active={background === b} onClick={() => setBackground(b)}>
                                    {b.replace('studio_', 'Studio ').replace('interior_', 'Interior ').replace('_', ' ')}
                                </Pill>
                            ))}
                        </div>
                    </div>

                    {/* Num Images */}
                    <div>
                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#808080] mb-3">
                            <Layers className="w-3 h-3" /> Cantidad
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <Pill key={n} active={numImages === n} onClick={() => setNumImages(n)}>
                                    {n}
                                </Pill>
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
                                <Sparkles className="w-5 h-5" /> Crear Influencer IA
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

            {/* Results Panel */}
            <div className="lg:col-span-8">
                {results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                        {results.map((img, idx) => (
                            <div key={idx} className="group relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
                                <img
                                    src={`data:image/png;base64,${img}`}
                                    alt={`Influencer ${idx + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={`data:image/png;base64,${img}`}
                                        download={`influencer-${Date.now()}-${idx}.png`}
                                        className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform flex items-center gap-2 font-medium"
                                    >
                                        <Download className="w-5 h-5" /> Descargar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-full min-h-[600px] bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 border border-[#2a2a2a]">
                            <User className="w-10 h-10 text-[#4a4a4a]" />
                        </div>
                        <h3 className="text-2xl font-light text-white mb-3">
                            Tu Influencer Virtual
                        </h3>
                        <p className="text-[#808080] max-w-md">
                            Configura los parámetros a la izquierda y pulsa "Crear" para generar modelos únicos y ultra-realistas.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
