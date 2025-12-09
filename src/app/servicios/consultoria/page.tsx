import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Building2, Calendar, CheckCircle2, TrendingUp, Clock, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";

export default function ConsultoriaPage() {
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
                            <span className="text-sm font-medium text-white/80">Formación & Consultoría</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
                            Domina la IA antes de que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">ella domine tu mercado</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            La Inteligencia Artificial no es el futuro, es el presente. Te ayudamos a integrarla en tu carrera o empresa para multiplicar tu productividad y resultados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#formacion"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#82ff1f] transition-colors duration-300"
                            >
                                Ver Formaciones
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#consultoria"
                                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
                            >
                                Consultoría Estratégica
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem / Agitation Section */}
            <section className="py-20 bg-[#050505] border-y border-white/5">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#82ff1f]/10 rounded-full flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">Ahorro de Tiempo</h3>
                            <p className="text-zinc-400">
                                Tareas que antes llevaban horas, ahora se hacen en minutos. Recupera tu tiempo para lo estratégico.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#82ff1f]/10 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">Ventaja Competitiva</h3>
                            <p className="text-zinc-400">
                                Tus competidores ya están adoptando IA. No te quedes atrás en la carrera tecnológica.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#82ff1f]/10 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-[#82ff1f]" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">Implementación Segura</h3>
                            <p className="text-zinc-400">
                                Evita errores costosos y problemas de seguridad. Te guiamos con las mejores prácticas del mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formación Block */}
            <section id="formacion" className="py-24 relative">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-[#82ff1f] font-medium tracking-wider uppercase text-sm">Educación</span>
                        <h2 className="text-3xl md:text-5xl font-light mt-4 mb-6">Formación de Alto Impacto</h2>
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

            {/* Consultoría Block */}
            <section id="consultoria" className="py-24 bg-[#050505] border-t border-white/5">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#82ff1f] font-medium tracking-wider uppercase text-sm">Consultoría Estratégica</span>
                            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight">
                                Transformamos tu negocio con <span className="text-white">Inteligencia Artificial</span>
                            </h2>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                No se trata de usar IA por usarla. Se trata de resolver problemas reales de negocio. Analizamos tus procesos, detectamos cuellos de botella y diseñamos soluciones a medida.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#82ff1f]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#82ff1f] font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Auditoría de Procesos</h4>
                                        <p className="text-zinc-400">Analizamos cómo trabajas hoy para identificar dónde la IA aporta más valor.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#82ff1f]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#82ff1f] font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Plan de Implementación</h4>
                                        <p className="text-zinc-400">Diseñamos una hoja de ruta clara, con plazos, costes y ROI estimado.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#82ff1f]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#82ff1f] font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Ejecución y Acompañamiento</h4>
                                        <p className="text-zinc-400">No te dejamos solo. Implementamos las soluciones y formamos a tu equipo.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#82ff1f] transition-colors duration-300"
                                >
                                    Agendar Auditoría Gratuita
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#82ff1f]/20 to-purple-500/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-zinc-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <Calendar className="w-12 h-12 text-[#82ff1f] mb-6" />
                                <h3 className="text-2xl font-light mb-4">¿Por qué una consultoría?</h3>
                                <p className="text-zinc-400 mb-6">
                                    Muchas empresas fallan al intentar implementar IA sin estrategia. Gastan recursos en herramientas que no necesitan o que nadie usa.
                                </p>
                                <div className="p-6 bg-black/50 rounded-xl border border-white/5 mb-6">
                                    <p className="text-lg text-white italic">
                                        "La IA no va a reemplazar a los humanos, pero los humanos que usen IA reemplazarán a los que no lo hagan."
                                    </p>
                                </div>
                                <p className="text-zinc-400 text-sm">
                                    Asegura tu inversión con un plan validado por expertos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Preguntas Frecuentes</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "¿Necesito conocimientos técnicos previos?",
                                a: "No. Nuestras formaciones están diseñadas para todos los niveles. Adaptamos el lenguaje y los ejemplos a tu perfil, sea técnico o de negocio."
                            },
                            {
                                q: "¿Cuánto dura un proceso de consultoría?",
                                a: "Depende del alcance. Una auditoría inicial puede tomar 1-2 semanas, mientras que una implementación completa puede durar de 1 a 3 meses. Siempre trabajamos por hitos claros."
                            },
                            {
                                q: "¿La formación es presencial o remota?",
                                a: "Ofrecemos ambas modalidades. Nos desplazamos a tus oficinas para sesiones in-company o realizamos formaciones en vivo vía Zoom/Teams con la misma efectividad."
                            },
                            {
                                q: "¿Qué herramientas de IA enseñáis?",
                                a: "Nos enfocamos en las líderes del mercado: ChatGPT (OpenAI), Claude (Anthropic), Midjourney, y herramientas de automatización como Make o Zapier, además de soluciones open source si el proyecto lo requiere."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
                                <h3 className="text-lg font-medium text-white mb-3 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-[#82ff1f] flex-shrink-0 mt-1" />
                                    {item.q}
                                </h3>
                                <p className="text-zinc-400 ml-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8">
                        ¿Listo para dar el salto?
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        No dejes que la competencia te tome ventaja. Empieza hoy mismo tu transformación con IA.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#82ff1f] transition-colors duration-300"
                    >
                        Hablemos de tu proyecto
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

