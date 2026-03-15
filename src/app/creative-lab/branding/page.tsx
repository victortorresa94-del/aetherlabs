'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function BrandingServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <ScrollAnimations />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 v5-reveal" style={{ color: '#999999' }}>BRANDING E IDENTIDAD VISUAL</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9] v5-reveal" style={{ transitionDelay: '80ms' }}>
                        Una marca que<br />
                        <span style={{ color: 'rgba(245,245,240,0.38)' }}>se recuerda.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 v5-reveal" style={{ transitionDelay: '160ms' }}>
                        No solo un logo. Un sistema de identidad completo que funciona en todos los formatos: digital, impreso, vídeo y presentaciones.
                    </p>
                    <div className="flex gap-4 v5-reveal" style={{ transitionDelay: '220ms' }}>
                        <Link href="#tipos" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                            Ver Packs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container text-center">
                    <blockquote className="font-display italic text-2xl md:text-3xl max-w-4xl mx-auto mb-16 text-white/80">
                        "Una marca que no genera rechazo en nadie, no le gusta a nadie."
                    </blockquote>

                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">📈</span>
                            <p className="text-white/80 font-bold">Las empresas con identidad visual consistente generan un 33% más de ingresos.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">🎨</span>
                            <p className="text-white/80 font-bold">El 80% de los consumidores reconoce una marca exclusivamente por su color.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
                            <span className="text-4xl mb-4 block">⏱</span>
                            <p className="text-white/80 font-bold">Tienes exactamente 0.05 segundos para causar una primera impresión online.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / Packs Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16 v5-reveal">
                        <h2 className="v5-h2" style={{ color: '#111111' }}>Modelos de Trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pack Básico */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Pack Básico</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Para arrancar proyectos rápido con solidez profesional.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Logo principal (Color, B/N)</li>
                                    <li className="flex gap-2"><span>•</span> Paleta de colores primaria</li>
                                    <li className="flex gap-2"><span>•</span> Selección tipográfica</li>
                                    <li className="flex gap-2"><span>•</span> Guía de marca (8-12 págs)</li>
                                    <li className="flex gap-2 mt-4 font-bold"><span>⏱</span> 5-7 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 800€
                            </div>
                        </div>

                        {/* Pack Profesional */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group v5-reveal">
                            <div className="relative z-10">
                                <span className="v5-label mb-4" style={{ color: '#999999' }}>Estándar</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Pack Profesional</h3>
                                <p className="text-sm opacity-80 mb-6 min-h-[40px]">Todo lo básico más el ecosistema visual necesario para operar.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Logo + Isotipo + Imagotipo</li>
                                    <li className="flex gap-2"><span>•</span> Sistema de 10-15 iconos</li>
                                    <li className="flex gap-2"><span>•</span> Plantilla presentaciones PowerPoint</li>
                                    <li className="flex gap-2"><span>•</span> Guía completa (20-30 págs)</li>
                                    <li className="flex gap-2 mt-4 font-bold"><span>⏱</span> 10-14 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-white/10 relative z-10">
                                Desde 1.500€
                            </div>
                        </div>

                        {/* Pack Completo */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Pack Completo</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">El sistema corporativo full-stack.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> Todo lo del Pack Profesional</li>
                                    <li className="flex gap-2"><span>•</span> Papelería y Tarjetas</li>
                                    <li className="flex gap-2"><span>•</span> 20 Plantillas Redes (Canva)</li>
                                    <li className="flex gap-2"><span>•</span> Vídeo de marca (30s)</li>
                                    <li className="flex gap-2 mt-4 font-bold"><span>⏱</span> 20-25 días hábiles</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 2.500€
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
