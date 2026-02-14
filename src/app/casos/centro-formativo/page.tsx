'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, GraduationCap, Users, BookOpen, Clock, CalendarCheck, Clipboard } from 'lucide-react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function CentroFormativoPage() {
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
                            <span className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4 block">CASE 04</span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-display">Centro Formativo <br /><span className="text-zinc-500">Privado</span></h1>
                        </div>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300">100-300 solicitudes/mes</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300">Formación</span>
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
                            <li className="flex items-center"><GraduationCap className="w-5 h-5 mr-3 text-zinc-600" /> Másters / FP / Academia</li>
                            <li className="flex items-center"><Users className="w-5 h-5 mr-3 text-zinc-600" /> Tráfico de Leads intenso en campañas</li>
                            <li className="flex items-center"><Clipboard className="w-5 h-5 mr-3 text-zinc-600" /> Procesos de admisión largos</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-red-400 uppercase tracking-widest">Problema Habitual</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Respuesta tardía ante solicitudes de información (el lead busca otra opción).</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Interesados que se "enfrían" tras recibir el primer PDF sin seguimiento.</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3">×</span> Falta de seguimiento estructurado hasta el cierre de la matrícula.</li>
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
                            <h3 className="text-xl font-bold mb-4 mt-2">Ads por Programa</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Conexión directa del anuncio a una conversación específica del programa de interés.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">CAPTACIÓN SEGMENTADA</div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">2</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">Agente Admisiones</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Envía dossier básico, resuelve dudas frecuentes (precios, horarios), recoge datos y detecta interés real.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">ATENCIÓN 24/7</div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">3</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">CRM por Fases</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Pipeline: Nuevo Interesado &rarr; Info Enviada &rarr; Entrevista Agendada &rarr; Documentación Pendiente &rarr; Matrícula.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">EMBUDO DE ADMISIÓN</div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative p-8 bg-black border border-white/10 rounded-2xl group hover:border-[#82ff1f] transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-800 text-white font-bold flex items-center justify-center rounded-xl text-xl border border-white/20">4</div>
                            <h3 className="text-xl font-bold mb-4 mt-2">Cierre Automático</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Recordatorios de fechas límite de inscripción. Reactivación de interesados de meses anteriores.</p>
                            <div className="text-xs text-zinc-500 font-mono bg-white/5 p-3 rounded">MAXIMIZAR MATRÍCULA</div>
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
                            <span className="text-zinc-200">Respuesta inmediata al interés del estudiante</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Seguimiento constante durante todo el proceso</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Mayor organización de equipo de admisiones</span>
                        </div>
                        <div className="flex items-center p-6 bg-white/5 rounded-xl border border-white/5">
                            <Check className="text-[#82ff1f] w-6 h-6 mr-4" />
                            <span className="text-zinc-200">Mayor probabilidad de conversión a matrícula</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adaptation CTA */}
            <section className="py-20 px-6 bg-[#82ff1f] text-black text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Gestionas formación?</h2>
                <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-80">
                    Esta arquitectura escala desde academias locales hasta universidades privadas.
                </p>
                <Link href="/contacto" className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                    Solicitar Implementación Educativa
                </Link>
            </section>

            <Footer />
        </main>
    );
}
