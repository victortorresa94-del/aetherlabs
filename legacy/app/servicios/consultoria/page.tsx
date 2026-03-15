import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, TrendingUp, ShieldCheck, Activity, Target, Zap } from "lucide-react";
import BusinessConsultant from "@/components/sections/business-consultant";

export default function ConsultoriaPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#82ff1f]/10 via-black/80 to-black" />
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20" />
                </div>

                <div className="container relative z-10 text-center px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <Activity className="w-4 h-4 text-[#82ff1f]" />
                        <span className="text-sm font-medium text-white/90">Aether Consulting</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Consultoría de IA <br />
                        <span className="text-white">Estratégica</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        No implementes tecnología por moda. Diseñamos sistemas de Inteligencia Artificial que resuelven problemas reales de tu negocio y generan ROI medible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="#audit-tool"
                            className="px-8 py-4 bg-[#82ff1f] text-black font-medium text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(130,255,31,0.3)]"
                        >
                            Auditoría Gratuita Ahora <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contacto"
                            className="px-8 py-4 border border-white/20 text-white font-light text-sm rounded-full hover:bg-white/10 transition-colors"
                        >
                            Hablar con un Humano
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-[#82ff1f]/10 flex items-center justify-center md:mx-0 mx-auto">
                                <Target className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium text-white">Parálisis por Análisis</h3>
                            <p className="text-zinc-400 font-light">
                                Hay miles de herramientas de IA. ¿Cuál sirve para tu empresa? Te ayudamos a filtrar el ruido y elegir lo que funciona.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-[#82ff1f]/10 flex items-center justify-center md:mx-0 mx-auto">
                                <ShieldCheck className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium text-white">Seguridad de Datos</h3>
                            <p className="text-zinc-400 font-light">
                                Implementamos soluciones privadas y seguras. Tus datos corporativos nunca deben entrenar modelos públicos sin tu permiso.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-[#82ff1f]/10 flex items-center justify-center md:mx-0 mx-auto">
                                <TrendingUp className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium text-white">ROI Real</h3>
                            <p className="text-zinc-400 font-light">
                                Nos enfocamos en métricas de negocio. Si la IA no reduce costes o aumenta ingresos, no la implementamos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BUSINESS CONSULTANT TOOL (Key Interaction) */}
            <section id="audit-tool" className="py-24 relative bg-black">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-light mb-6">Diagnóstico Instantáneo</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Usa nuestra herramienta propietaria para escanear oportunidades de IA en tu sector.
                        </p>
                    </div>

                    <BusinessConsultant />

                </div>
            </section>

            {/* 4. METHODOLOGY */}
            <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Nuestro Proceso de Consultoría</h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {[
                                { title: "1. Auditoría de Flujos", desc: "Mapeamos tus procesos actuales manuales y detectamos ineficiencias." },
                                { title: "2. Diseño de Arquitectura", desc: "Seleccionamos los modelos (GPT-4, Claude, Llama 3) y herramientas adecuados." },
                                { title: "3. Prototipado Rápido", desc: "En 2 semanas te entregamos un MVP funcional para validar la solución." },
                                { title: "4. Escalamiento", desc: "Integramos la IA en tu ERP/CRM y formamos a tu equipo." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 font-mono group-hover:border-[#82ff1f] group-hover:text-[#82ff1f] transition-colors relative shrink-0">
                                        {i + 1}
                                        {i !== 3 && <div className="absolute top-12 left-1/2 w-px h-12 bg-white/10 -ml-px" />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                                        <p className="text-zinc-400 font-light">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#82ff1f]/5 to-purple-900/10 border border-white/10 flex items-center justify-center p-12">
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                        <div className="text-[#82ff1f] text-4xl mb-2 font-light">40%</div>
                                        <div className="text-zinc-500 text-xs uppercase tracking-wider">Ahorro Operativo</div>
                                    </div>
                                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 mt-8">
                                        <div className="text-white text-4xl mb-2 font-light">24/7</div>
                                        <div className="text-zinc-500 text-xs uppercase tracking-wider">Disponibilidad</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA FINAL */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="container relative z-10">
                    <h2 className="text-4xl md:text-6xl font-light mb-8">¿Listo para transformar tu negocio?</h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Agenda una llamada de descubrimiento de 30 minutos. Sin coste. Sin compromiso. Solo valor.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-medium text-lg rounded-full hover:bg-[#82ff1f] transition-colors"
                    >
                        Agendar Consultoría
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
