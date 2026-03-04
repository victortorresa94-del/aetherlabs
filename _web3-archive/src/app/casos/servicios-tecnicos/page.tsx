'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Smartphone, MapPin, Wrench, AlertTriangle, Clipboard } from 'lucide-react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function ServiciosTecnicosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans">
            <HeaderNavigation />

            {/* Hero Case */}
            <section className="pt-40 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#82ff1f]/5 blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link href="/casos" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 text-sm transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Casos
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4 block">CASE 03</span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-display">Servicios <br /><span className="text-zinc-500">Técnicos</span></h1>
                        </div>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300">40-80 solicitudes/mes</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300">Averías / Mantenimiento</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Context & Problem */}
            <section className="py-20 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-zinc-300 uppercase tracking-widest">Contexto</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="flex items-center"><Wrench className="w-5 h-5 mr-3 text-zinc-600" /> Fontanería / Climatización / SAT</li>
                            <li className="flex items-center"><Smartphone className="w-5 h-5 mr-3 text-zinc-600" /> Gestión por Teléfono y WhatsApp</li>
                            <li className="flex items-center"><AlertTriangle className="w-5 h-5 mr-3 text-zinc-600" /> Urgencias frecuentes</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-red-400 uppercase tracking-widest">Problema Habitual</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Llamadas perdidas mientras se trabaja, perdiendo clientes.</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Información incompleta del avería (falta modelo, fotos, dirección exacta).</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Presupuestos que tardan días en enviarse por falta de tiempo administrativo.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SALVIA Architecture */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Arquitectura SALVIA™ <span className="text-zinc-600">Implementada</span></h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#82ff1f] text-black font-bold flex items-center justify-center rounded-xl text-xl">1</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">Ads Geolocalizados</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Servicio específico publicitado solo en el radio de acción operativo para evitar leads inútiles.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">RADIO DE ACCIÓN</div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">2</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">Agente Técnico</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Pregunta tipo de avería, recoge ubicación exacta (pin), detecta urgencia (24h) y solicita fotos.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">TRIAGE TÉCNICO</div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">3</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">CRM Operativo</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Pipeline visual: Nuevo Aviso (Urgente?) &rarr; En Revisión &rarr; Presupuesto Enviado &rarr; Trabajo Programado &rarr; Finalizado.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">CONTROL DE CAMPO</div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">4</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">Post-servicio</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Confirmación automática de asistencia. Encuesta de satifacción y solicitud de reseña post-trabajo.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">REPUTACIÓN ONLINE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-sm font-mono text-[#82ff1f] tracking-[0.3em] uppercase mb-8 text-center">Resultados Operativos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Menos llamadas perdidas = Más clientes captados</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Técnicos con información completa antes de salir</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Organización clara de trabajos diarios y urgentes</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Mayor rapidez de respuesta y profesionalidad</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adaptation CTA */}
            <section className="py-20 px-6 bg-[#82ff1f] text-black text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Prestas servicios de campo?</h2>
                <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-80">
                    Esta arquitectura puede adaptarse a cualquier equipo técnico móvil.
                </p>
                <Link href="/contacto" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                    Solicitar Implementación SAT
                </Link>
            </section>

            <Footer />
        </main>
    );
}
