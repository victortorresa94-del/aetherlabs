"use client";

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { motion } from 'framer-motion';
import { Globe, Code2, Server, Zap, Layout, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WebIAPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="pt-40 pb-20 relative overflow-hidden">
                    {/* Blue/Purle Glow for Web Dev vibe */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#82ff1f]/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/30 text-[#82ff1f] text-xs font-mono tracking-widest uppercase mb-8"
                            >
                                <Globe size={14} />
                                <span>Desarrollo Web Next Gen</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight"
                            >
                                Desarrollo Web <br /> con <span className="text-[#82ff1f]">Inteligencia Artificial</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                Creamos experiencias web ultrarrápidas, dinámicas y optimizadas mediante asistentes de código IA.
                                Reducimos tiempos de desarrollo y aumentamos la calidad del producto final.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center bg-white text-black font-bold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    Empezar Proyecto
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="/proyectos"
                                    className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white font-medium text-base py-4 px-8 rounded-full transition-all duration-200 hover:bg-white/5"
                                >
                                    Ver Portfolio
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. WHY AI WEB DEV */}
                <section className="py-24 bg-[#050505] border-t border-white/5">
                    <div className="container">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Zap,
                                    title: "Velocidad Extrema",
                                    desc: "Usamos Vercel, Next.js y React. Páginas que cargan en milisegundos y posicionan mejor en Google."
                                },
                                {
                                    icon: Code2,
                                    title: "Código Generado por IA",
                                    desc: "Nuestros ingenieros usan Copilot y agentes propios para escribir código limpio, probado y seguro 5x más rápido."
                                },
                                {
                                    icon: Layout,
                                    title: "Diseño Premium",
                                    desc: "Estética moderna, animaciones fluidas y experiencia de usuario (UX) pensada para convertir visitas en clientes."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-[#82ff1f]/30 transition-colors group">
                                    <div className="w-12 h-12 bg-[#82ff1f]/10 rounded-xl flex items-center justify-center mb-6 text-[#82ff1f] group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. TECH STACK */}
                <section className="py-24 bg-black overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#82ff1f]/5 pointer-events-none" />
                    <div className="container relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-light mb-12">Stack Tecnológico Moderno</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder Icons or Text for Tech Stack */}
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> Next.js 14</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> React</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> TypeScript</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> TailwindCSS</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> Framer Motion</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> Vercel</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full" /> Supabase</div>
                        </div>
                    </div>
                </section>

                {/* 4. SERVICES LIST */}
                <section className="py-24 bg-[#050505]">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">¿Qué construimos?</h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Landing Pages de Alta Conversión", desc: "Diseñadas para vender. Rápidas, directas y persuasivas." },
                                    { title: "Aplicaciones Web (SaaS)", desc: "Plataformas complejas con usuarios, bases de datos y pagos (Stripe)." },
                                    { title: "Webs Corporativas", desc: "Presencia digital premium para empresas que quieren destacar." },
                                    { title: "Dashboards con IA", desc: "Paneles de control internos para visualizar datos y gestionar tu negocio." },
                                ].map((service, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-xl border border-white/5 hover:bg-zinc-900/50 transition-colors items-start">
                                        <div className="mt-1">
                                            {idx === 0 && <Layout className="text-[#82ff1f]" size={24} />}
                                            {idx === 1 && <Server className="text-[#82ff1f]" size={24} />}
                                            {idx === 2 && <Globe className="text-[#82ff1f]" size={24} />}
                                            {idx === 3 && <Zap className="text-[#82ff1f]" size={24} />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                                            <p className="text-zinc-400">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}
