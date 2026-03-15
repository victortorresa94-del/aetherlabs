'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';

export default function AdsServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 text-[#DC2626]">CREATIVIDADES PARA ANUNCIOS</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9]">
                        Anuncios que<br />
                        <span className="text-white/40 italic">paran el scroll.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 text-white/60">
                        Diseñamos las creatividades de tus campañas para Meta, Google, LinkedIn y TikTok. Iterando IA generamos más variantes, más rápido.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#tipos" className="v5-btn-primary !bg-[#DC2626] !text-white hover:!bg-[#B91C1C]">
                            Ver Packs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container text-center">
                    <blockquote className="font-display italic text-2xl md:text-4xl max-w-4xl mx-auto mb-8 text-white/80 leading-tight">
                        "La creatividad ES la segmentación actual."
                    </blockquote>
                    <p className="text-white/40 mb-16 font-mono tracking-widest uppercase">— Gary Vaynerchuk</p>

                    <div className="max-w-3xl mx-auto border border-white/10 p-8 rounded-2xl bg-white/5 text-left">
                        <p className="text-white/70 text-lg leading-relaxed">
                            El 70% del rendimiento de un anuncio depende de la creatividad, no de la selección del público en la plataforma.
                            Un buen anuncio con segmentación mediocre supera siempre a un mal anuncio con segmentación técnica perfecta.
                            Nosotros proveemos las piezas visuales necesarias para alimentar el Motor y probar escalas infinitas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing / Packs Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Paquetes de Volumen</h2>
                        <p className="max-w-lg mx-auto mt-4 opacity-60">Entregados en los formatos nativos perfectos para cada plataforma: Meta, Google Display, LinkedIn y TikTok.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Lanzamiento */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Lanzamiento</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Testea nuevas audiencias con un set sólido inicial.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> 5 Imágenes Estáticas (Feed)</li>
                                    <li className="flex gap-2"><span>•</span> 2 Vídeos/Stories (Verticales)</li>
                                    <li className="flex gap-2"><span>•</span> Textos (Copies) de cada anuncio</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                600€
                            </div>
                        </div>

                        {/* Campaña Completa */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC2626]/20 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <span className="inline-block bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-4 rounded-sm">Multicanal</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Campaña Completa</h3>
                                <p className="text-sm opacity-80 mb-6 min-h-[40px]">Todo el arsenal para correr Meta, Google, LinkedIn y Short Form Vídeo al mismo tiempo.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> 10 Imágenes Estáticas</li>
                                    <li className="flex gap-2"><span>•</span> 4 Vídeos AI / Motion (15-30s)</li>
                                    <li className="flex gap-2"><span>•</span> Variantes para tests A/B</li>
                                    <li className="flex gap-2"><span>•</span> Múltiples orientaciones (1:1, 9:16, 16:9, etc)</li>
                                </ul>
                            </div>
                            <div className="font-mono text-[10px] font-bold pt-4 border-t border-white/10 relative z-10 flex justify-between items-center text-[#FCA5A5]">
                                <span className="text-sm">1.200€</span>
                            </div>
                        </div>

                        {/* Mensual */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Retainer Mensual</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[40px]">Flujo constante para combatir ad-fatigue.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>•</span> 20 Creatividades por mes</li>
                                    <li className="flex gap-2"><span>•</span> Mix libre de estático y vídeo</li>
                                    <li className="flex gap-2"><span>•</span> Iteración inteligente según performance pasado</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                800€ / Mes
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
