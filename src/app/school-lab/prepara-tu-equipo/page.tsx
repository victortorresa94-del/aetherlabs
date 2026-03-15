'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function PreparaTuEquipoPage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5] selection:bg-green-500 selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black border-b border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="v5-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block bg-green-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-6 rounded-sm">B2B • EMPRESAS Y PYMES</span>
                        <h1 className="v5-h1 mb-6 leading-[1.05] tracking-tight text-white font-medium text-4xl lg:text-5xl">
                            Tu equipo puede trabajar más rápido, cometer menos errores y centrarse en lo que importa.
                        </h1>
                        <p className="text-xl text-white/60 mb-10 max-w-lg">
                            Solo necesita saber cómo usar la IA en su día a día. De forma práctica, segura y adaptada a sus procesos actuales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contacto" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                                Preparar a mi equipo
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-black/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold border border-red-500/30">X</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">El Problema</h4>
                                        <p className="text-sm text-white/60">Las empresas pagan suscripciones de IA caras, pero los empleados no saben cómo usarlas. El resultado es que nadie cambia su forma de trabajar.</p>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10 w-full"></div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold border border-green-500/30">✓</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">La Solución</h4>
                                        <p className="text-sm text-white/60">No enseñamos qué es un LLM. Enseñamos cómo reducir la generación de un informe de 4 horas a 15 minutos en tu caso concreto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Los 4 pilares formativos */}
            <section className="v5-section bg-black py-24">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Cómo impactamos en los resultados</h2>
                        <p className="text-white/50 max-w-2xl mx-auto mt-4">Formación orientada a casos de uso 100% aplicables desde el día uno.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-xl mb-6">⚡</div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Eficiencia por Área</h3>
                            <p className="text-white/60">Detectamos cuellos de botella en marketing, ventas, RRHH o administración y enseñamos al equipo la herramienta exacta (ChatGPT, Copilot, Midjourney) para automatizar gran parte de esa tarea específica.</p>
                        </div>

                        <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-xl mb-6">📚</div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Prompts Corporativos</h3>
                            <p className="text-white/60">Ayudamos a construir y organizar una biblioteca de 'prompts' interna de la empresa. Aseguramos que la voz de la marca y la estructura de los datos sea idéntica, use quien use la IA.</p>
                        </div>

                        <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-xl mb-6">🔥</div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Proyectos en Caliente</h3>
                            <p className="text-white/60">Durante la formación trabajamos con proyectos y datos reales y actuales de la empresa (anonimizados o bajo NDA). El empleado aprende haciendo su propio trabajo, en la sesión.</p>
                        </div>

                        <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-xl mb-6">🏭</div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Adaptación al Sector</h3>
                            <p className="text-white/60">La IA no se usa igual en un despacho de abogados que en una agencia de marketing o en una empresa industrial. Filtramos el 'hype' para entregar solo lo que tiene ROI en tu vertical.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Profiles */}
            <section className="v5-section bg-white text-black py-24 rounded-t-[3rem]">
                <div className="v5-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="v5-h2 mb-12 text-center">Para quién diseñamos estas formaciones</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center p-6 border border-black/10 rounded-2xl bg-black/[0.02]">
                                <div className="hidden sm:block text-3xl">👥</div>
                                <p className="font-medium text-lg">Para empresas que ven el potencial de la IA pero <strong>quieren que su equipo la adopte de verdad</strong>, más allá de jugar con ChatGPT 5 minutos.</p>
                            </div>
                            <div className="flex gap-4 items-center p-6 border border-black/10 rounded-2xl bg-black/[0.02]">
                                <div className="hidden sm:block text-3xl">🔑</div>
                                <p className="font-medium text-lg">Para directivos que <strong>han comprado licencias Copilot o ChatGPT Enterprise</strong> y se dan cuenta de que nadie dentro les está sacando partido.</p>
                            </div>
                            <div className="flex gap-4 items-center p-6 border border-black/10 rounded-2xl bg-black/[0.02]">
                                <div className="hidden sm:block text-3xl">🚀</div>
                                <p className="font-medium text-lg">Para agencias, pymes y startups que <strong>quieren ser la versión hiper-eficiente</strong> de su negocio antes de que la competencia lo haga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process CTA */}
            <section id="contacto" className="v5-section bg-zinc-900 border-t border-white/10 py-24 text-center">
                <div className="v5-container max-w-2xl">
                    <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-4 block">PASOS A SEGUIR</span>
                    <h2 className="text-3xl font-display font-bold mb-12">El proceso es sencillo</h2>

                    <div className="text-left space-y-8 mb-16 relative">
                        <div className="absolute top-0 bottom-0 left-6 w-px bg-white/10 hidden md:block"></div>

                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex justify-center items-center text-green-500 font-bold shrink-0">1</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Nos contactas (Cero compromiso)</h4>
                                <p className="text-white/60">Nos mandas un mensaje contándonos a qué se dedica tu empresa y qué número de personas querrías formar.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex justify-center items-center text-green-500 font-bold shrink-0">2</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Diseñamos el plan</h4>
                                <p className="text-white/60">Te proponemos un índice de contenidos, duración (generalmente bloques de 2h a 4h) y si es presencial (in-company) o remoto.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex justify-center items-center text-green-500 font-bold shrink-0">3</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Tu equipo empieza a crear</h4>
                                <p className="text-white/60">Vamos a impartirlo. Ese mismo día se llevan configuraciones hechas y resultados en su correo listos para usar.</p>
                            </div>
                        </div>
                    </div>

                    <button className="v5-btn-primary w-full sm:w-auto" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                        Contactar vía WhatsApp o Email
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
