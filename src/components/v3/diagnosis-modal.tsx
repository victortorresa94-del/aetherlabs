'use client'

import React, { useRef, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

declare global {
    interface Window {
        diagnosisModal: HTMLDialogElement;
    }
    interface HTMLElement {
        showModal: () => void;
        close: () => void;
    }
}

const DiagnosisModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Close on click outside
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleBackdropClick = (e: MouseEvent) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        };

        // We attach to the dialog itself because the backdrop is part of the dialog element in CSS
        dialog.addEventListener('click', handleBackdropClick);
        return () => dialog.removeEventListener('click', handleBackdropClick);
    }, []);


    return (
        <dialog
            id="diagnosis-modal"
            ref={dialogRef}
            className="backdrop:bg-black/80 backdrop:backdrop-blur-sm bg-transparent p-0 w-full max-w-2xl text-white open:animate-fade-in text-left rounded-3xl"
        >
            <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={() => dialogRef.current?.close()}
                    className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                        Diagnóstico Express
                    </h3>
                    <p className="text-zinc-400">
                        Responde 4 preguntas para saber si Aether Labs es para ti.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">¿Cuántos leads o contactos recibes al mes?</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-600 transition-colors">
                            <option value="">Sé sincero/a...</option>
                            <option value="<100">Menos de 100</option>
                            <option value="100-500">Entre 100 y 500</option>
                            <option value="500-2000">Entre 500 y 2.000</option>
                            <option value=">2000">Más de 2.000 (Caos total)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">¿Por dónde te escriben principalmente?</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['WhatsApp', 'Instagram DM', 'Llamadas', 'Formulario Web'].map((opt) => (
                                <label key={opt} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
                                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-600 bg-black text-[#82ff1f] focus:ring-[#82ff1f] checked:bg-[#82ff1f]" />
                                    <span className="text-sm text-zinc-300">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">¿Tienes equipo comercial o de atención?</label>
                        <div className="flex gap-4">
                            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors has-[:checked]:border-white has-[:checked]:text-white">
                                <input type="radio" name="team" className="hidden" />
                                <span className="text-sm">Sí, tengo equipo</span>
                            </label>
                            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors has-[:checked]:border-white has-[:checked]:text-white">
                                <input type="radio" name="team" className="hidden" />
                                <span className="text-sm">No, soy solo yo</span>
                            </label>
                        </div>
                    </div>

                    <button className="w-full h-14 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-lg mt-4">
                        Ver mi Diagnóstico
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-center text-zinc-600">
                        Te enviaremos el resultado por WhatsApp o Email.
                    </p>
                </form>
            </div>
        </dialog>
    );
};

export default DiagnosisModal;
