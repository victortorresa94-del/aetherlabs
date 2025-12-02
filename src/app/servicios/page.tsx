import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { Bot, Palette, MessageSquareCode, GraduationCap, ArrowRight, CheckCircle2, Sparkles, Zap, Brain } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const mainServices = [
        {
            icon: Palette,
            title: "IA Generativa",
            description: "Revoluciona tu marca con contenido visual generado por Inteligencia Artificial. Creamos desde la identidad visual hasta campañas publicitarias completas con una velocidad y calidad imposibles de igualar tradicionalmente.",
            link: "/servicios/ia-generativa",
            features: ["Fotografía de Producto IA", "Avatares Virtuales", "Videos Publicitarios (Ads)", "Virtual Staging Inmobiliario"]
        },
        {
            icon: Bot,
            title: "Agentes IA",
            description: "Delega tareas repetitivas en trabajadores digitales incansables. Diseñamos agentes que operan 24/7 para gestionar procesos, ventas y atención al cliente sin intervención humana.",
            link: "/servicios/automatizacion",
            features: ["Atención al Cliente 24/7", "Cualificación de Leads", "Gestión de Citas", "Automatización de Procesos"]
        },
        {
            icon: MessageSquareCode,
            title: "Desarrollo IA a Medida",
            description: "Soluciones tecnológicas personalizadas para problemas específicos. Desde chatbots entrenados con tus propios datos hasta integraciones complejas de LLMs en tu software existente.",
            link: "/servicios/ia-a-medida",
            features: ["Chatbots Personalizados (RAG)", "Integración de APIs", "Análisis de Datos", "Consultoría Técnica"]
        },
        {
            icon: GraduationCap,
            title: "Formación & Consultoría",
            description: "No te quedes atrás. Formamos a tu equipo para que domine las herramientas de IA y diseñamos la estrategia de adopción tecnológica de tu empresa.",
            link: "/servicios/consultoria",
            features: ["Formación In-Company", "Mentoria 1 a 1", "Auditoría de Procesos", "Workshops Prácticos"]
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <Sparkles className="w-4 h-4 text-[#82ff1f]" />
                            <span className="text-sm font-medium text-white/80">Soluciones Integrales</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Servicios</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            Combinamos creatividad, tecnología y estrategia para ofrecerte soluciones de Inteligencia Artificial que generan impacto real en tu negocio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="pb-32">
                <div className="container">
                    <div className="grid grid-cols-1 gap-8">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-zinc-900/50 transition-all duration-500"
                            >
                                <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#82ff1f]/30 group-hover:bg-[#82ff1f]/10 transition-all duration-300">
                                            <service.icon className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" strokeWidth={1.5} />
                                        </div>
                                        <h2 className="text-3xl font-light mb-6 group-hover:text-[#82ff1f] transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-[#82ff1f] transition-colors"
                                        >
                                            Ver detalles del servicio
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    <div className="bg-black/50 rounded-2xl p-8 border border-white/5">
                                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
                                            Qué incluye
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f] flex-shrink-0" />
                                                    <span className="text-zinc-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#050505] border-t border-white/5">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Cómo trabajamos</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Un proceso simple y transparente para llevar la IA a tu negocio sin fricciones.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {[
                            {
                                icon: Brain,
                                step: "01",
                                title: "Análisis",
                                desc: "Estudiamos tu caso para identificar dónde la IA puede aportar más valor real."
                            },
                            {
                                icon: Zap,
                                step: "02",
                                title: "Implementación",
                                desc: "Desarrollamos e integramos la solución de forma ágil y sin interrumpir tu operativa."
                            },
                            {
                                icon: CheckCircle2,
                                step: "03",
                                title: "Optimización",
                                desc: "Monitorizamos los resultados y ajustamos para maximizar el rendimiento."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative pt-8 text-center">
                                <div className="w-16 h-16 mx-auto bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                                    <span className="text-[#82ff1f] font-mono font-bold">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#82ff1f]/5" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-8">
                        ¿No sabes por dónde empezar?
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        Reserva una consultoría de descubrimiento gratuita y analizaremos tu caso para recomendarte la mejor solución.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#82ff1f] transition-colors duration-300"
                    >
                        Hablar con un experto
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
