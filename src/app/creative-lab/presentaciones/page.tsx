'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function PresentacionesServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <ScrollAnimations />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 v5-reveal" style={{ color: '#999999' }}>PRESENTACIONES Y PITCH DECKS</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9] v5-reveal" style={{ transitionDelay: '80ms' }}>
                        Decks que cierran<br />
                        <span style={{ color: 'rgba(245,245,240,0.38)' }}>reuniones.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 v5-reveal" style={{ transitionDelay: '160ms' }}>
                        No hacemos presentaciones bonitas. Hacemos presentaciones que convencen, que cierran inversión, que ganan concursos.
                    </p>
                    <div className="flex gap-4 v5-reveal" style={{ transitionDelay: '220ms' }}>
                        <Link href="#tipos" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                            Ver Opciones
                        </Link>
                    </div>
                </div>
            </section>

            {/* Diferenciador Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6">
                            <span className="text-white/30 text-sm font-mono mb-4 block">01</span>
                            <h3 className="font-display text-xl font-bold mb-3">Copy Primero</h3>
                            <p className="text-white/50 text-sm">Definimos el mensaje antes de diseñar. La mayoría diseña primero y pone texto después. Eso es al revés.</p>
                        </div>
                        <div className="p-6">
                            <span className="text-white/30 text-sm font-mono mb-4 block">02</span>
                            <h3 className="font-display text-xl font-bold mb-3">Narrativa Hormozi</h3>
                            <p className="text-white/50 text-sm">Cada deck tiene un hook, desarrollo del problema, solución irresistible y CTA claro.</p>
                        </div>
                        <div className="p-6">
                            <span className="text-white/30 text-sm font-mono mb-4 block">03</span>
                            <h3 className="font-display text-xl font-bold mb-3">Diseño Editorial</h3>
                            <p className="text-white/50 text-sm">Nada de plantillas vintage. Cada presentación tiene una identidad visual propia y contemporánea.</p>
                        </div>
                        <div className="p-6">
                            <span className="text-white/30 text-sm font-mono mb-4 block">04</span>
                            <h3 className="font-display text-xl font-bold mb-3">100% Editable</h3>
                            <p className="text-white/50 text-sm">Entregamos el archivo fuente (PPTX/Figma). Tu equipo puede iterar sin depender de un diseñador.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Presentations Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16 v5-reveal">
                        <h2 className="v5-h2" style={{ color: '#111111' }}>Modelos de Trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pitch deck */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group v5-reveal">
                            <div className="relative z-10">
                                <span className="v5-label mb-4" style={{ color: '#999999' }}>Startups</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Pitch Deck para Inversión</h3>
                                <p className="text-sm opacity-80 mb-6">El documento más importante para levantar capital. Estructurado para convencer a VC's.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>📂</span> Problem, Solution, Market, Traction, Team, Ask</li>
                                    <li className="flex gap-2"><span>📄</span> 10-15 diapositivas clave</li>
                                    <li className="flex gap-2"><span>⏱</span> 5-7 días de producción</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-white/10 relative z-10">
                                Desde 800€
                            </div>
                        </div>

                        {/* Corp pres */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Presentación Corporativa</h3>
                                <p className="text-sm opacity-60 mb-6">Para presentar la empresa a clientes, partners o grandes proveedores. Institucional pero moderna.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>📄</span> 15-30 diapositivas maestras</li>
                                    <li className="flex gap-2"><span>⚙️</span> Diseño maestro reutilizable por departamentos</li>
                                    <li className="flex gap-2"><span>⏱</span> 4-6 días de producción</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 600€
                            </div>
                        </div>

                        {/* Sales */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Presentación de Ventas</h3>
                                <p className="text-sm opacity-60 mb-6">Para que tu equipo comercial cierre más ventas con storytelling de producto o servicio.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>🎯</span> Orientada a objeciones y cierres</li>
                                    <li className="flex gap-2"><span>🧩</span> Plantilla editable para customizar por cliente</li>
                                    <li className="flex gap-2"><span>⏱</span> 3-5 días de producción</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 500€
                            </div>
                        </div>

                        {/* One-page */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">One-Page Executive Summary</h3>
                                <p className="text-sm opacity-60 mb-6">El teaser. A enviar por email en reuniones frías. 1 sola página para captar atención inmediata.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>📄</span> Formato PDF + PNG (Alta resolución)</li>
                                    <li className="flex gap-2"><span>⏱</span> 1-2 días de producción</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 200€
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
