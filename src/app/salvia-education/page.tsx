'use client'

import React from "react";
import Link from "next/link";
import HeaderNavigation from "@/components/sections/header-navigation";
import {
    GraduationCap,
    MessageSquare,
    Users,
    Database,
    Zap,
    CheckCircle2,
    ArrowRight,
    School,
    BookOpen
} from "lucide-react";

export default function SalviaEducationPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#7bf906] selection:text-black">
            {/* Custom Styles Injection */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
                
                body {
                    font-family: 'Manrope', sans-serif;
                }
                
                .text-huge {
                    font-size: clamp(3rem, 10vw, 8rem);
                    line-height: 0.9;
                }
                
                .workflow-connector {
                    background: linear-gradient(90deg, rgba(123, 249, 6, 0) 0%, rgba(123, 249, 6, 1) 50%, rgba(123, 249, 6, 0) 100%);
                }
            `}</style>

            {/* NAV with black background for visibility */}
            <div className="bg-black relative z-50">
                <HeaderNavigation />
            </div>

            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8 text-center bg-white">
                <div className="max-w-5xl mx-auto space-y-12">
                    <h1 className="text-huge font-extrabold tracking-tighter text-black">
                        SALVIA Education
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-black/60 tracking-tight">
                        Sistema listo para admisiones.
                    </p>
                    <p className="text-xl text-black/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Captación, seguimiento y conversión estructurada para centros formativos.
                    </p>
                    <div className="flex flex-col gap-2 max-w-lg mx-auto pt-4">
                        <p className="text-black/80 font-medium text-lg">Menos consultas perdidas.</p>
                        <p className="text-black/80 font-medium text-lg">Más matrículas confirmadas.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link href="/contacto" className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#7bf906] hover:text-black transition-all">
                            Solicitar Diagnóstico Educativo
                        </Link>
                        <Link href="#componentes" className="px-8 py-3 border border-black/10 text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                            Ver Componentes
                        </Link>
                    </div>
                </div>
            </section>

            {/* COMPONENTES (Black Section) */}
            <section id="componentes" className="py-12 px-4 bg-white">
                <div className="max-w-[95%] xl:max-w-[1600px] mx-auto bg-black rounded-[24px] p-8 md:p-16">
                    <div className="mb-20 text-center md:text-left">
                        <span className="text-[#7bf906] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Estructura del Pack</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Componentes del Sistema</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* Card 1: Ads */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <Zap className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Ads orientados a solicitud</h3>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-2 list-disc list-inside marker:text-[#7bf906]">
                                <li>Campañas Meta Ads dirigidas a programas concretos.</li>
                                <li>Segmentación por edad e interés.</li>
                                <li>Conexión directa a WhatsApp o formulario.</li>
                            </ul>
                        </div>

                        {/* Card 2: Agente */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <MessageSquare className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Agente de Admisiones</h3>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-2 list-disc list-inside marker:text-[#7bf906]">
                                <li>Responder dudas frecuentes y enviar info básica.</li>
                                <li>Recoger datos del interesado.</li>
                                <li>Detectar nivel de interés.</li>
                                <li>Escalar a asesor humano.</li>
                            </ul>
                        </div>

                        {/* Card 3: CRM */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <Database className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">CRM de Admisión</h3>
                            <p className="text-white/80 text-[17px] font-medium mb-2">Pipeline estructurado:</p>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-1 list-disc list-inside marker:text-[#7bf906] mb-4">
                                <li>Nuevo interesado</li>
                                <li>Información enviada</li>
                                <li>Entrevista programada</li>
                                <li>Matrícula confirmada</li>
                            </ul>
                            <p className="text-white/40 text-xs pt-4 border-t border-white/10">Registro automático de cada interacción.</p>
                        </div>

                        {/* Card 4: Formación */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <Users className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Formación Equipo Admisiones</h3>
                            <p className="text-white/80 text-[17px] font-medium mb-2">Formación práctica en:</p>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-1 list-disc list-inside marker:text-[#7bf906] mb-4">
                                <li>Gestión del pipeline y priorización.</li>
                                <li>Seguimiento estratégico.</li>
                                <li>Reactivación de leads.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Micro block footer */}
                    <div className="pt-12 border-t border-white/10 text-center">
                        <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
                            Este pack combina <span className="text-white">captación + información + seguimiento</span> en un solo sistema.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMPACTO (White Section) */}
            <section id="impacto" className="py-32 bg-white text-black">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-12 tracking-tight leading-none">
                                Lo que cambia <br /> en tu centro.
                            </h2>
                            <div className="grid grid-cols-1 gap-10">
                                {[
                                    { title: "Respuesta inmediata", desc: "Atención al instante para cada solicitud de información." },
                                    { title: "Información organizada", desc: "Datos centralizados y accesibles para el equipo de admisiones." },
                                    { title: "Seguimiento estructurado", desc: "Nadie se olvida de llamar a un interesado potencial." },
                                    { title: "Más matriculas", desc: "Mayor conversión gracias a un proceso eficiente y constante." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-6">
                                        <CheckCircle2 className="text-[#7bf906] w-6 h-6 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg text-black">{item.title}</h4>
                                            <p className="text-black/50 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-[24px] overflow-hidden shadow-2xl h-[600px]">
                                <img
                                    alt="Modern educational center"
                                    className="w-full h-full object-cover grayscale opacity-90"
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLUJO (Black Section) */}
            <section id="flujo" className="py-32 bg-black text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#7bf906] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Proceso de Admisión</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Cómo funciona en la práctica</h2>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] workflow-connector hidden md:block opacity-20"></div>

                        {/* Steps */}
                        {[
                            { icon: Users, label: "Interesado ve anuncio" },
                            { icon: MessageSquare, label: "Solicita info" },
                            { icon: Zap, label: "Agente responde" },
                            { icon: Database, label: "Registro CRM" },
                            { icon: ArrowRight, label: "Seguimiento" },
                        ].map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="relative z-10 flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-[#7bf906] transition-all duration-500">
                                        <step.icon className="text-white/40 group-hover:text-[#7bf906] transition-colors w-8 h-8" />
                                    </div>
                                    <span className="mt-6 font-bold text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors max-w-[100px] text-center leading-tight">{step.label}</span>
                                </div>
                                {i < 4 && (
                                    <div className="hidden md:block text-[#7bf906]/30">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL (Dark Section as requested) */}
            <section className="py-48 bg-[#0a0a0a] text-center px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Convierte tu proceso de admisión <br /> en un sistema.
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Captación + información + seguimiento en un solo pack.
                    </p>
                    <div className="pt-10">
                        <Link href="/contacto" className="px-12 py-5 bg-[#7bf906] text-black rounded-full font-black text-lg uppercase tracking-widest hover:shadow-2xl hover:scale-105 transition-all inline-block">
                            Solicitar Diagnóstico Estratégico
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                <span className="text-black font-extrabold text-[10px]">A</span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Aether Labs</span>
                        </Link>
                    </div>
                    <div className="text-white/30 text-[10px] font-medium uppercase tracking-widest">
                        © 2026 SALVIA Education by Aether Labs.
                    </div>
                    <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
                        <Link href="#" className="hover:text-[#7bf906] transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-[#7bf906] transition-colors">Términos</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
