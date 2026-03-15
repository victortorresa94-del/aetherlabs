import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Building2, CheckCircle2 } from "lucide-react";

export default function FormacionPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <GraduationCap className="w-4 h-4 text-[#82ff1f]" />
                            <span className="text-sm font-medium text-white/80">Aether Academy</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
                            Domina la IA antes de que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">ella domine tu mercado</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            La Inteligencia Artificial no es el futuro, es el presente. Te ayudamos a integrarla en tu carrera o empresa para multiplicar tu productividad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#programas"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#82ff1f] transition-colors duration-300"
                            >
                                Ver Formaciones
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formación Block */}
            <section id="programas" className="py-24 relative">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-[#82ff1f] font-medium tracking-wider uppercase text-sm">Educación</span>
                        <h2 className="text-3xl md:text-5xl font-light mt-4 mb-6">Despega tu Carrera</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Programas diseñados para pasar de la teoría a la práctica desde el primer día.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Para Personas */}
                        <div className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl p-10 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#82ff1f]/30 group-hover:bg-[#82ff1f]/10 transition-all duration-300">
                                <Users className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                            </div>
                            <h3 className="text-3xl font-light mb-4">Para Personas</h3>
                            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                Potencia tu perfil profesional. Aprende a utilizar ChatGPT, Midjourney y herramientas de automatización para destacar en tu sector.
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Dominio de Prompt Engineering</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Creación de contenido automatizado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Mentoria 1 a 1 personalizada</span>
                                </li>
                            </ul>
                            <Link
                                href="/learn/personal"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-medium hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Ver programa personal
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Para Empresas */}
                        <div className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl p-10 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#82ff1f]/30 group-hover:bg-[#82ff1f]/10 transition-all duration-300">
                                <Building2 className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                            </div>
                            <h3 className="text-3xl font-light mb-4">Para Empresas</h3>
                            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                Capacita a tus equipos. Workshops in-company adaptados a los flujos de trabajo reales de tu organización para maximizar el ROI.
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Workshops prácticos por departamentos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Identificación de casos de uso internos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    <span className="text-zinc-300">Soporte post-formación</span>
                                </li>
                            </ul>
                            <Link
                                href="/learn/corporate"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-medium hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Ver soluciones corporativas
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8">
                        ¿Tu equipo está listo?
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        La formación es la mejor inversión para adoptar IA con éxito.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#82ff1f] transition-colors duration-300"
                    >
                        Solicitar Workshop
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
