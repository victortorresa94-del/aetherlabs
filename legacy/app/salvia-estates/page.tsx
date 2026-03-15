'use client'

import React from "react";
import Link from "next/link";
import HeaderNavigation from "@/components/sections/header-navigation";
import {
    Home,
    MessageSquare,
    Users,
    Database,
    Zap,
    CheckCircle2,
    ArrowRight,
    Building2
} from "lucide-react";

export default function SalviaEstatesPage() {
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
                        SALVIA Estates
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-black/60 tracking-tight">
                        El sistema listo para inmobiliarias.
                    </p>
                    <div className="flex flex-col gap-2 max-w-lg mx-auto">
                        <p className="text-black/80 font-medium text-lg">Menos visitas improductivas.</p>
                        <p className="text-black/80 font-medium text-lg">Más cierres organizados.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link href="/contacto" className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#7bf906] hover:text-black transition-all">
                            Solicitar Diagnóstico
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
                            <Home className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Ads orientados a propiedad</h3>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-2 list-disc list-inside marker:text-[#7bf906]">
                                <li>Campañas Meta Ads dirigidas a inmuebles concretos.</li>
                                <li>Segmentación por zona e interés (inversión/vivienda).</li>
                                <li>Conexión directa a conversación por WhatsApp.</li>
                            </ul>
                        </div>

                        {/* Card 2: Agente */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <MessageSquare className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Agente de Cualificación</h3>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-2 list-disc list-inside marker:text-[#7bf906]">
                                <li>Recoger presupuesto estimado y filtrar urgencia.</li>
                                <li>Detectar necesidad (vivir o invertir).</li>
                                <li>Enviar ficha técnica automáticamente.</li>
                                <li>Proponer visita.</li>
                            </ul>
                        </div>

                        {/* Card 3: CRM */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <Database className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">CRM Comercial Inmobiliario</h3>
                            <p className="text-white/80 text-[17px] font-medium mb-2">Pipeline estructurado:</p>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-1 list-disc list-inside marker:text-[#7bf906] mb-4">
                                <li>Nuevo Interesado</li>
                                <li>Cualificado</li>
                                <li>Visita Programada</li>
                                <li>Negociación / Cierre</li>
                            </ul>
                            <p className="text-white/40 text-xs pt-4 border-t border-white/10">Registro automático de conversaciones.</p>
                        </div>

                        {/* Card 4: Formación */}
                        <div className="group p-8 border border-white/10 rounded-[24px] hover:border-[#7bf906]/50 transition-all duration-500 bg-black h-full">
                            <Users className="text-[#7bf906] w-8 h-8 mb-8 block" />
                            <h3 className="text-[24px] font-bold text-white mb-4">Formación Equipo Comercial</h3>
                            <p className="text-white/80 text-[17px] font-medium mb-2">Formación práctica en:</p>
                            <ul className="text-white/60 text-[17px] leading-relaxed space-y-1 list-disc list-inside marker:text-[#7bf906] mb-4">
                                <li>Uso del pipeline y priorización.</li>
                                <li>Seguimiento estratégico 30-90-180 días.</li>
                                <li>Reactivación de oportunidades.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Micro block footer */}
                    <div className="pt-12 border-t border-white/10 text-center">
                        <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
                            Este pack combina <span className="text-white">captación + filtro + seguimiento</span> en un solo sistema estructurado.
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
                                Esto cambia tu <br /> proceso comercial.
                            </h2>
                            <div className="grid grid-cols-1 gap-10">
                                {[
                                    { title: "Menos visitas sin capacidad", desc: "Filtro previo automático para asegurar solvencia e interés." },
                                    { title: "Menos leads olvidados", desc: "Ningún contacto se queda sin respuesta o seguimiento." },
                                    { title: "Seguimiento estructurado", desc: "Automatizaciones para mantener el contacto a largo plazo." },
                                    { title: "Control total del pipeline", desc: "Visibilidad clara de cada operación y su estado." }
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
                                    alt="Modern architectural building"
                                    className="w-full h-full object-cover grayscale opacity-90"
                                    // Professional architectural/real estate image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
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
                        <span className="text-[#7bf906] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Operativa Diaria</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Cómo funciona en la práctica</h2>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] workflow-connector hidden md:block opacity-20"></div>

                        {/* Steps */}
                        {[
                            { icon: Users, label: "Comprador ve anuncio" },
                            { icon: MessageSquare, label: "Conversa con Agente" },
                            { icon: Zap, label: "Cualificación Auto" },
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

            {/* CTA FINAL (White Section) */}
            <section className="py-48 bg-white text-center px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight">
                        Organiza tu inmobiliaria <br /> como un sistema.
                    </h2>
                    <p className="text-xl text-black/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Captación + filtro + seguimiento en un solo pack.
                    </p>
                    <div className="pt-10">
                        <Link href="/contacto" className="px-12 py-5 bg-[#7bf906] text-black rounded-full font-black text-lg uppercase tracking-widest hover:shadow-2xl hover:scale-105 transition-all inline-block">
                            Solicitar Diagnóstico Estratégico
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER - Reusing main footer component logic but simplified for landing consistency or just import main footer */}
            {/* Using simple footer consistent with Clinics page */}
            <footer className="py-12 bg-white border-t border-black/5">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                                <span className="text-white font-extrabold text-[10px]">A</span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-black">Aether Labs</span>
                        </Link>
                    </div>
                    <div className="text-black/30 text-[10px] font-medium uppercase tracking-widest">
                        © 2026 SALVIA Estates by Aether Labs.
                    </div>
                    <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-black/40">
                        <Link href="#" className="hover:text-[#7bf906] transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-[#7bf906] transition-colors">Términos</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
