'use client'

import React from "react";
import type { AgentConfig } from "./agents-lab-wizard";

interface Props {
    config: AgentConfig;
    updateConfig: (partial: Partial<AgentConfig>) => void;
}

const channelLabels: Record<string, string> = {
    whatsapp: "WhatsApp Business",
    webchat: "Web Chat",
    voice: "Voz / Llamadas",
    instagram: "Instagram Direct",
};

const StepDeploy: React.FC<Props> = ({ config, updateConfig }) => {
    const updateContact = (partial: Partial<AgentConfig['contact']>) => {
        updateConfig({
            contact: { ...config.contact, ...partial },
        });
    };

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3 tracking-tight">
                    Solicita tu presupuesto
                </h1>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    Revisa la configuración de tu agente y déjanos tus datos. Te contactaremos en menos de 24 horas.
                </p>
            </div>

            <div className="max-w-3xl space-y-8">
                {/* Config Summary */}
                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Resumen de tu Agente</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-1 h-6 bg-[#82ff1f] rounded-full mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-zinc-400 uppercase">Canales</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {config.channels.map(ch => (
                                        <span key={ch} className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#82ff1f]/15 text-black border border-[#82ff1f]/20">
                                            {channelLabels[ch] || ch}
                                        </span>
                                    ))}
                                    {config.channels.length === 0 && <span className="text-xs text-zinc-400 italic">Ninguno seleccionado</span>}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-1 h-6 bg-[#82ff1f] rounded-full mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-zinc-400 uppercase">Rol</span>
                                <p className="text-sm font-medium text-black">{config.roleName || 'No seleccionado'}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-1 h-6 bg-[#82ff1f] rounded-full mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-zinc-400 uppercase">Negocio</span>
                                <p className="text-sm font-medium text-black">{config.knowledge.businessName || 'No especificado'}</p>
                                {config.knowledge.industry && (
                                    <p className="text-xs text-zinc-500">{config.knowledge.industry}</p>
                                )}
                            </div>
                        </div>
                        {config.instructions && (
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-6 bg-[#82ff1f] rounded-full mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-xs font-semibold text-zinc-400 uppercase">Instrucciones</span>
                                    <p className="text-sm text-zinc-600 line-clamp-2">{config.instructions}</p>
                                </div>
                            </div>
                        )}
                        {config.knowledge.faqs.length > 0 && (
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-6 bg-[#82ff1f] rounded-full mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-xs font-semibold text-zinc-400 uppercase">FAQs</span>
                                    <p className="text-sm text-zinc-600">{config.knowledge.faqs.length} pregunta(s) cargada(s)</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Tus Datos de Contacto</h3>
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

                {/* Privacy note */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                    Al enviar esta solicitud, aceptas que Aether Labs contacte contigo para proporcionarte un presupuesto personalizado. Tus datos no serán compartidos con terceros.
                </p>
            </div>
        </div>
    );
};

export default StepDeploy;
