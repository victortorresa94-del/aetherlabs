'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function WebServicePage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <ScrollAnimations />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 v5-reveal" style={{ color: '#999999' }}>WEB CORPORATIVA Y LANDINGS</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9] v5-reveal" style={{ transitionDelay: '80ms' }}>
                        Tu web que convierte,<br />
                        <span style={{ color: 'rgba(245,245,240,0.38)' }}>no que informa.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 v5-reveal" style={{ transitionDelay: '160ms' }}>
                        El 70% de las webs corporativas son catálogos que nadie lee.<br />
                        Las nuestras están diseñadas para convertir visitas en contactos.
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
                            <span className="text-white/30 text-sm font-mono mb-4 block">01 / VISIBILIDAD</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Tu web no aparece en Google</h3>
                            <p className="text-white/50">Construimos con SEO técnico desde el primer día. No como un añadido 3 meses después.</p>
                        </div>
                        <div>
                            <span className="text-white/30 text-sm font-mono mb-4 block">02 / CONVERSIÓN</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Llegan y se van</h3>
                            <p className="text-white/50">Cada sección de nuestra web tiene un objetivo claro. Cada botón tiene un motivo y una llamada a la acción irresistible.</p>
                        </div>
                        <div>
                            <span className="text-white/30 text-sm font-mono mb-4 block">03 / CONTROL</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Dependencia técnica</h3>
                            <p className="text-white/50">Antigravity, Framer o Webflow. Tú tienes el control absoluto de tus contenidos una vez terminamos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Web Section */}
            <section id="tipos" className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16 v5-reveal">
                        <h2 className="v5-h2" style={{ color: '#111111' }}>Modelos de Trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Web Corporativa */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Web Corporativa</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[60px]">Para presentar la empresa, generar confianza y recibir leads recurrentes.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 2-3 semanas</li>
                                    <li className="flex gap-2"><span>🛠</span> Antigravity / Framer / Webflow</li>
                                    <li className="flex gap-2"><span>✅</span> Diseño, Copy, SEO Técnico</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 1.500€
                            </div>
                        </div>

                        {/* Landing Page */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between bg-black text-white relative overflow-hidden group v5-reveal">
                            <div className="relative z-10">
                                <span className="v5-label mb-4" style={{ color: '#999999' }}>Más popular</span>
                                <h3 className="font-display text-2xl font-bold mb-4">Landing Page</h3>
                                <p className="text-sm opacity-80 mb-6 min-h-[60px]">Para vender un producto o servicio específico. Maximizar conversión.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-white/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 1 semana</li>
                                    <li className="flex gap-2"><span>🛠</span> HTML/Tailwind alta velocidad</li>
                                    <li className="flex gap-2"><span>✅</span> Copy persuasivo y A/B test</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-white/10 relative z-10">
                                Desde 800€
                            </div>
                        </div>

                        {/* Eventos */}
                        <div className="p-8 border border-black/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Web de Campaña</h3>
                                <p className="text-sm opacity-60 mb-6 min-h-[60px]">Para lanzamientos, webinars o eventos con una vida de pocas semanas.</p>
                                <ul className="text-xs space-y-3 opacity-80 mb-8 border-t border-black/10 pt-6">
                                    <li className="flex gap-2"><span>⏱</span> 3-5 días</li>
                                    <li className="flex gap-2"><span>🛠</span> Builders rápidos</li>
                                    <li className="flex gap-2"><span>✅</span> Focalizada en registro rápido</li>
                                </ul>
                            </div>
                            <div className="font-mono text-sm font-bold pt-4 border-t border-black/10">
                                Desde 500€
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="v5-container">
                    <h2 className="v5-h2 mb-16">El Proceso</h2>
                    <div className="space-y-6 max-w-3xl">
                        <div className="flex gap-6 border border-white/10 p-6 rounded-xl bg-white/5">
                            <span className="v5-label" style={{ color: '#CCCCCC' }}>01</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Brief (1h)</h4>
                                <p className="text-white/60 text-sm">Rellenáis nuestro brief de 20 preguntas en 30 min. Si hay dudas, hacemos sesión de claridad.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border border-white/10 p-6 rounded-xl bg-white/5">
                            <span className="v5-label" style={{ color: '#CCCCCC' }}>02</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Propuesta visual (3 días)</h4>
                                <p className="text-white/60 text-sm">Os presentamos 3 estéticas (paleta, tipo, mood). Elegís y empezamos.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border border-white/10 p-6 rounded-xl bg-white/5">
                            <span className="v5-label" style={{ color: '#CCCCCC' }}>03</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Diseño y desarrollo (7-14 días)</h4>
                                <p className="text-white/60 text-sm">Construimos en el CMS elegido con acceso en tiempo real a los avances.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border border-white/10 p-6 rounded-xl bg-white/5">
                            <span className="v5-label" style={{ color: '#CCCCCC' }}>04</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Revisión (3 días)</h4>
                                <p className="text-white/60 text-sm">Ronda de feedback. Ajustes finales para un lanzamiento impecable.</p>
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
