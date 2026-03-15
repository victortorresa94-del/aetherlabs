'use client';

import React from 'react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function MetodologiaPage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5] selection:bg-[#00FF41] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black text-center">
                <div className="v5-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <span className="v5-label mb-6 text-[#00FF41] border-[#00FF41]/30 bg-[#00FF41]/10">NUESTRA METODOLOGÍA</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.95] tracking-tight text-white font-medium" style={{ fontWeight: 400 }}>
                        No enseñamos IA.<br />
                        <span className="text-white/40 italic">Enseñamos personas.</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl">
                        Cada programa de Aether School se construye sobre tres ejes que el sistema educativo tradicional sobre tecnología ignora completamente.
                    </p>
                </div>
            </section>

            {/* 3 Ejes */}
            <section className="v5-section bg-black border-t border-white/5 py-24">
                <div className="v5-container max-w-5xl">
                    <div className="space-y-16">

                        {/* EJE 1 */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 md:p-12 border border-white/10 rounded-3xl bg-black">
                            <div className="w-24 h-24 shrink-0 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-4xl">🪞</div>
                            <div>
                                <span className="text-[#00FF41] font-mono tracking-widest text-sm uppercase mb-3 block">EJE 1</span>
                                <h3 className="font-display text-3xl font-bold mb-4">Descúbrete</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    La tecnología no tiene sentido si no sabes qué quieres amplificar en tu vida. Nos centramos en romper el miedo a "yo no valgo para esto" a través de dinámicas de acercamiento temprano donde comprendes que la IA entiende tu lenguaje natural como un humano.
                                </p>
                            </div>
                        </div>

                        {/* EJE 2 */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 md:p-12 border border-white/10 rounded-3xl bg-black">
                            <div className="w-24 h-24 shrink-0 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-4xl">🛠</div>
                            <div>
                                <span className="text-[#00FF41] font-mono tracking-widest text-sm uppercase mb-3 block">EJE 2</span>
                                <h3 className="font-display text-3xl font-bold mb-4">Aprende lo que importa</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Cero teoría de libro que olvidas en dos días. Habilidades reales. En lugar de explicar la arquitectura de una red neuronal, resolvemos problemas literales y urgentes que tienes en tu día a día: cómo resumir la hipoteca, cómo crear un temario, cómo organizar una cita médica.
                                </p>
                            </div>
                        </div>

                        {/* EJE 3 */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 md:p-12 border border-white/10 rounded-3xl bg-black">
                            <div className="w-24 h-24 shrink-0 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-4xl">🚀</div>
                            <div>
                                <span className="text-[#00FF41] font-mono tracking-widest text-sm uppercase mb-3 block">EJE 3</span>
                                <h3 className="font-display text-3xl font-bold mb-4">Expándete con tecnología</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    La IA no viene a reemplazarte sino a multiplicar tu potencial inherente. Lo llamamos inteligencia aumentada. Diseñamos nuestras formaciones para desmitificar que la IA "roba" trabajos, y enseñártela como una exosuit intelectual para tu cerebro.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Respaldo Cientifico */}
            <section className="v5-section bg-black border-t border-white/5 py-24">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">No enseñamos de oídas</h2>
                        <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg">La metodología de Aether School se apoya en tres fuertes pilares de investigación global comprobada.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border-l border-white/10">
                            <h4 className="font-mono text-[#00FF41] mb-2 font-bold text-sm tracking-widest">SAGA 2025</h4>
                            <h3 className="font-bold text-2xl mb-4 text-white">350 Estudios de Meta-Análisis</h3>
                            <p className="text-white/50 text-sm leading-relaxed">Nuestra metodología, iterativa y centrada en la utilidad inmediata por encima del conocimiento pasivo, responde a las conclusiones más extensas sobre neuroplasticidad en adultos.</p>
                        </div>

                        <div className="p-8 border-l border-white/10">
                            <h4 className="font-mono text-[#00FF41] mb-2 font-bold text-sm tracking-widest">EBBINGHAUS</h4>
                            <h3 className="font-bold text-2xl mb-4 text-white">La Curva del Olvido</h3>
                            <p className="text-white/50 text-sm leading-relaxed">El 80% de la información técnica pasiva se olvida en 24h sin aplicación práctica. Por eso el 90% de nuestro tiempo lectivo es empírico. Practicamos en cada sesión.</p>
                        </div>

                        <div className="p-8 border-l border-white/10">
                            <h4 className="font-mono text-[#00FF41] mb-2 font-bold text-sm tracking-widest">WEF 2025</h4>
                            <h3 className="font-bold text-2xl mb-4 text-white">Future of Jobs Report</h3>
                            <p className="text-white/50 text-sm leading-relaxed">El Foro Económico Mundial expone que el 39% de habilidades actuales caducarán en 5 años. Preparamos y formamos solo en las competencias blandas y duras que perdurarán.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabla comparativa */}
            <section className="v5-section bg-white text-black py-24 rounded-[3rem] mb-8 container mx-auto w-[95%]">
                <div className="text-center mb-16">
                    <h2 className="v5-h2">La diferencia visible</h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black/10">
                                <th className="p-4 bg-transparent"></th>
                                <th className="p-4 font-display font-bold text-xl text-green-700 bg-green-50 rounded-t-xl text-center">AETHER SCHOOL</th>
                                <th className="p-4 text-black/50 font-normal uppercase tracking-widest text-sm text-center">Cursos masivos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black/5">
                                <td className="p-4 font-bold text-sm">Diseñado explícitamente para tu perfil</td>
                                <td className="p-4 bg-green-50 text-center font-bold text-green-700">✓ SÍ</td>
                                <td className="p-4 text-center text-black/40">Genérico técnico</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-4 font-bold text-sm">Práctica Real en sala</td>
                                <td className="p-4 bg-green-50 text-center font-bold text-green-700">✓ 90% del tiempo</td>
                                <td className="p-4 text-center text-black/40">Videos pasivos</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-4 font-bold text-sm">Presencialidad / Acompañamiento 1-a-1</td>
                                <td className="p-4 bg-green-50 text-center font-bold text-green-700">✓ SÍ</td>
                                <td className="p-4 text-center text-black/40">Solo online PDF</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-4 font-bold text-sm">Comunidad Alumni Post-curso</td>
                                <td className="p-4 bg-green-50 text-center font-bold text-green-700">✓ SÍ</td>
                                <td className="p-4 text-center text-black/40">Inexistente</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-4 font-bold text-sm">Basado en metaanálisis reales</td>
                                <td className="p-4 bg-green-50 rounded-b-xl text-center font-bold text-green-700">✓ SÍ</td>
                                <td className="p-4 text-center text-black/40">A menudo obsoleto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
        </main>
    );
}
