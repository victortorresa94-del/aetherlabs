'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';

export default function MaterialServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 text-[#059669]">MATERIAL CORPORATIVO</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9]">
                        Documentos que<br />
                        <span className="text-white/40 italic">abren puertas.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 text-white/60">
                        Dossieres, one-pagers, propuestas y catálogos. Todo con el mismo nivel de diseño y precisión narrativa que tu web principal.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#tipos" className="v5-btn-primary !bg-[#059669] !text-white hover:!bg-[#047857]">
                            Ver Opciones
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container text-center">
                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">📧</span>
                            <h3 className="font-display text-xl font-bold mb-2">El primer paso</h3>
                            <p className="text-white/60">El documento que envías cuando alguien pregunta "¿me mandas algo sobre vuestra empresa?" suele ser la primera impresión tangible física o PDF.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">📋</span>
                            <h3 className="font-display text-xl font-bold mb-2">Unidad Visual</h3>
                            <p className="text-white/60">Desde la app técnica hasta un catálogo físico en una feria, tu empresa debe verse como una sola entidad premium e indivisible.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">🛠</span>
                            <h3 className="font-display text-xl font-bold mb-2">Sistémico</h3>
                            <p className="text-white/60">No diseñamos piezas aisladas. Construimos plantillas en PDF interactivo, Notion o Word para tu equipo de ventas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / Types Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Modelos de Trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Dossier de empresa */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669]/20 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <span className="inline-block bg-[#059669] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-4 rounded-sm">Institucional</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Dossier de Empresa</h3>
                                <p className="text-sm opacity-80 mb-6 min-h-[40px]">Para inversores o nuevos grandes clientes corporativos.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>📂</span> 8-16 páginas + formato impresión</li>
                                    <li className="flex gap-2"><span>📄</span> Presentación, servicios, casos de éxito</li>
                                    <li className="flex gap-2"><span>⏱</span> 5-7 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-white/10 relative z-10 text-[#6EE7B7]">
                                Desde 500€
                            </div>
                        </div>

                        {/* Catálogo */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Catálogo Completo</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Visual y estructurado. Catálogos físicos y de exportación digital.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> PDF 12-30 páginas</li>
                                    <li className="flex gap-2"><span>•</span> Orientado a distribución</li>
                                    <li className="flex gap-2"><span>⏱</span> 5-8 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 600€
                            </div>
                        </div>

                        {/* Propuesta Plantilla */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Propuesta Comercial</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Un template profesional que tu equipo rellena para cada cliente.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Index, secciones y pricing tables</li>
                                    <li className="flex gap-2"><span>•</span> Notion, Word, Canva o PDF</li>
                                    <li className="flex gap-2"><span>⏱</span> 3-4 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 400€
                            </div>
                        </div>

                        {/* One-pager */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">One-Pager Resumen</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Una sola cara que cuenta de un vistazo de qué sois capaces.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Formatos A4/A3 o 16:9 digital</li>
                                    <li className="flex gap-2"><span>⏱</span> 1-2 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 200€
                            </div>
                        </div>

                        {/* Firmas */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Signatures Email</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Firmas corporativas técnicas limpias compatibles con clientes modernos.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Gmail, Outlook, Apple</li>
                                    <li className="flex gap-2"><span>⏱</span> 1 día (por bloque)</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                80€/firma
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FinalCtaSection />
            <Footer />
        </main>
    );
}
