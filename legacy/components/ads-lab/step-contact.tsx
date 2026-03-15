'use client'

import React from "react";
import type { AdConfig } from "./ads-lab-wizard";

interface Props {
    config: AdConfig;
    updateConfig: (partial: Partial<AdConfig>) => void;
}

const StepContact: React.FC<Props> = ({ config, updateConfig }) => {
    const updateContact = (partial: Partial<AdConfig['contact']>) => {
        updateConfig({
            contact: { ...config.contact, ...partial },
        });
    };

    const selectedCount = config.generatedImages.filter(img => img.selected).length;

    return (
        <div className="h-full overflow-y-auto pb-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3 tracking-tight">
                        Solicita tu presupuesto
                    </h1>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        Has seleccionado {selectedCount} creatividad(es). Déjanos tus datos y te enviaremos un presupuesto personalizado.
                    </p>
                </div>

                {/* Selected Previews */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {config.generatedImages.filter(img => img.selected).map((img, idx) => (
                        <div key={img.id} className="flex-shrink-0 w-20 rounded-xl overflow-hidden border-2 border-[#82ff1f]" style={{ aspectRatio: '9/16' }}>
                            <img src={img.url} alt={`Seleccionada ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Datos de Contacto</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-zinc-500 block mb-1.5">Nombre *</label>
                            <input
                                type="text"
                                value={config.contact.name}
                                onChange={e => updateContact({ name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-zinc-500 block mb-1.5">Email *</label>
                            <input
                                type="email"
                                value={config.contact.email}
                                onChange={e => updateContact({ email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-zinc-500 block mb-1.5">Teléfono</label>
                            <input
                                type="tel"
                                value={config.contact.phone}
                                onChange={e => updateContact({ phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none"
                                placeholder="+34 600 000 000"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-zinc-500 block mb-1.5">Empresa</label>
                            <input
                                type="text"
                                value={config.contact.company}
                                onChange={e => updateContact({ company: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-black focus:ring-2 focus:ring-[#82ff1f] focus:border-transparent focus:bg-white transition-all outline-none"
                                placeholder="Nombre de tu empresa"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                    Al enviar esta solicitud, aceptas que Aether Labs contacte contigo para proporcionarte un presupuesto de campaña publicitaria. Tus datos no serán compartidos con terceros.
                </p>
            </div>
        </div>
    );
};

export default StepContact;
