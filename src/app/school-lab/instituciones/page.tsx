'use client';

import React from 'react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function InstitucionesPage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5] selection:bg-[#059669] selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black text-center">
                <div className="v5-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <span className="v5-label mb-6 text-[#059669] border-[#059669]/30 bg-[#059669]/10">PARA INSTITUCIONES</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.95] tracking-tight text-white font-medium" style={{ fontWeight: 400 }}>
                        ¿Quieres llevar la IA<br />
                        <span className="text-white/40 italic">a tu comunidad?</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl">
                        Diseñamos talleres y programas a medida para fundaciones, asociaciones, centros educativos y ayuntamientos. Llevamos la formación nosotros. Tú pones el espacio y las personas.
                    </p>
                </div>
            </section>

            {/* Quiénes somos / Para quién */}
            <section className="v5-section bg-black border-t border-white/5 py-24">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Colectivos con los que trabajamos</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">🤝</span>
                            <p className="font-bold">Fundaciones y asociaciones sociales</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">👩</span>
                            <p className="font-bold">Asociaciones de mujeres</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">🏫</span>
                            <p className="font-bold">Colegios e institutos</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">🏛️</span>
                            <p className="font-bold">Ayuntamientos</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">🏢</span>
                            <p className="font-bold">Ocupación Pública</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-black text-center">
                            <span className="text-3xl block mb-3">👵</span>
                            <p className="font-bold">Centros de día (Mayores)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Por qué Aether School */}
            <section className="v5-section bg-white text-black py-24 rounded-t-[3rem] mt-[-3rem] relative z-20">
                <div className="v5-container grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="v5-h2 mb-8">Por qué Aether School para instituciones</h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-[#059669] font-bold">✓</span>
                                <p><strong>No somos una academia online.</strong> Venimos presencialmente a vosotros para asegurar adopción 100%.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#059669] font-bold">✓</span>
                                <p><strong>Adaptamos el programa a tu colectivo.</strong> No obligamos a la fundación a encajar en un curso grabado. Hacemos el curso a medida.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#059669] font-bold">✓</span>
                                <p><strong>Inclusividad Digital.</strong> Explicamos conceptos tecnológicos para que los entienda alguien de 70 años o alguien de 12.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#059669] font-bold">✓</span>
                                <p><strong>Resultados desde el primer día.</strong> Materiales didácticos y resúmenes en papel hiper-simplificados incluidos.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="bg-zinc-50 border border-zinc-200 p-8 sm:p-12 rounded-3xl">
                        <h3 className="font-display text-2xl font-bold mb-6">Solicita un taller</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-zinc-700">Nombre</label>
                                    <input type="text" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-zinc-700">Organización</label>
                                    <input type="text" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669]" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-zinc-700">Email</label>
                                    <input type="email" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-zinc-700">Teléfono</label>
                                    <input type="text" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669]" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-zinc-700">¿A qué colectivo va dirigido?</label>
                                <input type="text" placeholder="Ej: Jóvenes en riesgo, Profesores, Jubilados..." className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669]" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-zinc-700">Mensaje (Asunto del taller, nº aproximado de personas)</label>
                                <textarea rows={4} className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#059669] resize-none"></textarea>
                            </div>
                            <button type="button" className="v5-btn-primary w-full flex justify-center py-4 text-center" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
