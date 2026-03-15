'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function VideoServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <ScrollAnimations />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 v5-reveal" style={{ color: '#999999' }}>VÍDEO CON IA</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9] v5-reveal" style={{ transitionDelay: '80ms' }}>
                        Vídeos profesionales<br />
                        <span style={{ color: 'rgba(245,245,240,0.38)' }}>sin rodaje, ni esperas.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 v5-reveal" style={{ transitionDelay: '160ms' }}>
                        Con IA generamos vídeos corporativos, explicativos, testimoniales y reels en días, no en semanas. Sin cámara. Sin productora. Sin presupuesto de cine.
                    </p>
                    <div className="flex gap-4 v5-reveal" style={{ transitionDelay: '220ms' }}>
                        <Link href="#tipos" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                            Ver Opciones
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <span className="text-white/30 text-sm font-mono mb-4 block">01 / LENTITUD</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Meses de proyecto</h3>
                            <p className="text-white/50">El ciclo clásico de guion, pre-producción, rodaje y post-producción mata el momentum de cualquier campaña.</p>
                        </div>
                        <div>
                            <span className="text-white/30 text-sm font-mono mb-4 block">02 / INFLEXIBLE</span>
                            <h3 className="font-display text-2xl font-bold mb-4">No se puede actualizar</h3>
                            <p className="text-white/50">Si cambias el precio o un nombre de una feature, el vídeo entero queda obsoleto. Con IA, es modificar texto y regenerar.</p>
                        </div>
                        <div>
                            <span className="text-white/30 text-sm font-mono mb-4 block">03 / COSTES</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Inversión inasumible</h3>
                            <p className="text-white/50">Equipos de rodaje, localizaciones, actores... Concéntrate en el mensaje, nosotros automatizamos el formato.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Video Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16 v5-reveal">
                        <h2 className="v5-h2" style={{ color: '#111111' }}>Modelos de Trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Avatares IA */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group v5-reveal">
                            <div className="relative z-10">
                                <span className="v5-label mb-4" style={{ color: '#999999' }}>Estrella</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Portavoces y Avatares IA</h3>
                                <p className="text-sm opacity-80 mb-6 min-h-[60px]">Creamos tu gemelo digital o usamos actores sintéticos para ser la cara de tu marca, 24/7 en cualquier idioma.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 2-5 días</li>
                                    <li className="flex gap-2"><span>🌐</span> Multi-idioma con clonación de voz</li>
                                    <li className="flex gap-2"><span>✅</span> Ideal para YouTube o tutoriales</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-white/10 relative z-10">
                                Desde 600€ / pack de minutos
                            </div>
                        </div>

                        {/* Vídeo Explicativo */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Vídeo Explicativo Software</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[60px]">Demostraciones pulidas de tu plataforma o software, combinando UI con gráficas fluidas 3D abstractas y narración generada con voz ultra realista.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 1-2 semanas</li>
                                    <li className="flex gap-2"><span>🎬</span> Screen recordings dinámicos y voice-over AI</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 1.200€
                            </div>
                        </div>

                        {/* Ads/Motion AI */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Vídeos para Ads</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[60px]">Contenidos cortos (TikToks, Reels) optimizados para retención y captación con ganchos visuales generados sintéticamente.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 3-5 días (lotes de vídeo)</li>
                                    <li className="flex gap-2"><span>🚀</span> Optimizado para Performance Marketing</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Suscripción mensual disponible
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
