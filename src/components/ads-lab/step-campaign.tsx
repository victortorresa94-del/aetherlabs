'use client'

import React, { useRef, useState } from "react";
import type { AdConfig } from "./ads-lab-wizard";

interface Props {
    config: AdConfig;
    updateConfig: (partial: Partial<AdConfig>) => void;
}

const objectives = [
    {
        id: "leads",
        name: "Generar Leads",
        color: "bg-blue-50 text-blue-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
        ),
    },
    {
        id: "whatsapp",
        name: "Tráfico a WhatsApp",
        color: "bg-green-50 text-green-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
    },
    {
        id: "sales",
        name: "Ventas Directas",
        color: "bg-purple-50 text-purple-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        ),
    },
];

const StepCampaign: React.FC<Props> = ({ config, updateConfig }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleImageSelect = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            updateConfig({
                productImage: e.target?.result as string,
                productImageFile: file,
            });
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            handleImageSelect(file);
        }
    };

    return (
        <div className="h-full flex flex-col lg:flex-row gap-8 overflow-hidden">
            {/* Left: Form */}
            <div className="flex-1 overflow-y-auto pr-2 pb-4">
                <div className="max-w-3xl space-y-10">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3 tracking-tight">
                            Diseña tu anuncio con IA
                        </h1>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            Configura el objetivo y los detalles de tu campaña para generar variantes de alto impacto.
                        </p>
                    </div>

                    {/* Objective */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">1. Objetivo de la Campaña</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {objectives.map(obj => {
                                const isSelected = config.objective === obj.id;
                                return (
                                    <button
                                        key={obj.id}
                                        onClick={() => updateConfig({ objective: obj.id })}
                                        className={`text-left p-5 rounded-xl border transition-all duration-300 hover:shadow-lg ${isSelected
                                                ? 'ring-2 ring-[#82ff1f] bg-[#82ff1f]/5 border-[#82ff1f]'
                                                : 'border-zinc-200 bg-white hover:border-zinc-300'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className={`w-10 h-10 rounded-lg ${obj.color} flex items-center justify-center`}>
                                                {obj.icon}
                                            </div>
                                            {isSelected && (
                                                <svg className="w-5 h-5 text-[#82ff1f]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-black">{obj.name}</h3>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">2. Descripción del Producto</label>
                        <textarea
                            value={config.productDescription}
                            onChange={e => updateConfig({ productDescription: e.target.value })}
                            className="w-full h-32 p-6 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all resize-none text-base leading-relaxed placeholder-zinc-400 outline-none"
                            placeholder="Describe tu producto o servicio. Ejemplo: 'Zapatillas de running ultraligeras con tecnología de retorno de energía...'"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">3. Assets Visuales</label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={e => {
                                const file = e.target.files?.[0];
                                if (file) handleImageSelect(file);
                            }}
                        />
                        {config.productImage ? (
                            <div className="relative rounded-xl overflow-hidden border border-zinc-200">
                                <img src={config.productImage} alt="Producto" className="w-full h-48 object-cover" />
                                <button
                                    onClick={() => updateConfig({ productImage: null, productImageFile: null })}
                                    className="absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-lg hover:bg-black/70 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                                onDragLeave={() => setIsDragging(false)}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDragging
                                        ? 'border-[#82ff1f] bg-[#82ff1f]/5'
                                        : 'border-zinc-200 hover:border-[#82ff1f]/50 hover:bg-zinc-50'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${isDragging ? 'bg-[#82ff1f]/20 text-[#82ff1f] scale-110' : 'bg-zinc-100 text-zinc-400'
                                    }`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold text-black">Sube tu imagen o producto</p>
                                <p className="text-xs text-zinc-500 mt-1">Arrastra y suelta o haz clic para explorar</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right: Live Preview */}
            <div className="hidden lg:flex flex-col items-center justify-center w-[420px] bg-zinc-50 rounded-2xl border border-zinc-100 relative p-8">
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#82ff1f]/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="text-center mb-6 w-full flex justify-between items-center px-2">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Vista Previa</h2>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 rounded bg-white text-[10px] font-bold text-zinc-500 border border-zinc-100">INSTAGRAM</span>
                        <span className="px-2 py-1 rounded text-[10px] font-bold text-zinc-400">FACEBOOK</span>
                    </div>
                </div>

                {/* Mock Instagram Post */}
                <div className="w-[300px] bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
                    <div className="p-3 flex items-center gap-2 border-b border-zinc-50">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
                        <div>
                            <span className="text-xs font-bold text-black">Tu Marca</span>
                            <span className="block text-[10px] text-zinc-500">Publicidad</span>
                        </div>
                    </div>
                    <div className="w-full aspect-square bg-zinc-100 flex items-center justify-center overflow-hidden">
                        {config.productImage ? (
                            <img src={config.productImage} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center p-4">
                                <svg className="w-12 h-12 text-zinc-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                                </svg>
                                <p className="text-xs text-zinc-400">Sube una imagen para ver la vista previa</p>
                            </div>
                        )}
                    </div>
                    <div className="p-3">
                        <p className="text-xs text-zinc-600 leading-relaxed">
                            <span className="font-bold text-black">Tu Marca</span>{" "}
                            {config.productDescription ? config.productDescription.slice(0, 120) + "..." : "Descripción de tu producto aparecerá aquí..."}
                        </p>
                        {config.objective && (
                            <div className="mt-2 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold text-center rounded">
                                {config.objective === 'leads' ? 'Más información' : config.objective === 'whatsapp' ? 'Enviar mensaje' : 'Comprar Ahora'}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepCampaign;
