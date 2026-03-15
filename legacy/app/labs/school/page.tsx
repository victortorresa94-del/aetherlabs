// Server Component\n
import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Presentation, Users, BrainCircuit } from 'lucide-react';
import '@/components/web4/web4.css';

export const metadata = {
    title: "Formación en Inteligencia Artificial para Empresas | Aether School Lab",
    description: "Cursos y talleres de IA generativa (ChatGPT, Copilot, Claude) para empresas y equipos. Formación práctica y aplicable al negocio B2B.",
};

export default function SchoolLabPage() {
    const services = [
        {
            title: 'Formación para Equipos',
            description: 'Programas de integración de IA donde enseñamos a tu equipo a operar con las herramientas del futuro (ChatGPT, Claude, Midjourney).',
            icon: Users,
            tags: ['Corporate Training', 'Upskilling'],
        },
        {
            title: 'Masterclasses y Ponencias',
            description: 'Sesiones de impacto de 2-4 horas sobre el estado del arte de la Inteligencia Artificial generativa aplicado a negocios.',
            icon: Presentation,
            tags: ['Keynote', 'Masterclass'],
        },
        {
            title: 'Aether School (B2C)',
            description: 'Aprende desde cero a dominar la inteligencia artificial con nuestros programas para individuos y profesionales independientes.',
            icon: BookOpen,
            tags: ['Cursos Online', 'Comunidad'],
        },
        {
            title: 'Talleres Prácticos (Prompting)',
            description: 'Aprende a comunicarte con la máquina. Talleres de ingeniería de Prompts orientados a resultados y productividad real.',
            icon: BrainCircuit,
            tags: ['Prompt Engineering', 'Workshops'],
        }
    ];

    return (
        <div className="min-h-screen bg-[#050508] text-white selection:bg-[#00FF41] selection:text-black">\n            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","provider":{"@type":"Organization","name":"Aether Labs","url":"https://aetherlabs.es"},"areaServed":"ES","description":"Formación en IA para equipos B2B."}) }}
            />
            {/* Overlays */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay"
                style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}>
            </div>
            <div className="fixed inset-[-50%] pointer-events-none z-40 opacity-[0.025]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', animation: 'grainMove 0.5s steps(1) infinite' }}>
            </div>

            <HeaderNavigation />

            <main className="relative z-10 pt-32 pb-24">
                {/* HERO SECTION */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <div className="flex-1 space-y-6">
                            <div className="font-mono text-[#00FF41] text-xs tracking-widest uppercase">
                                Aether / School Lab
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                                Formación en IA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#00E5FF]">
                                    para equipos B2B.
                                </span>
                            </h1>
                            <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed">
                                La IA no reemplazará a tu equipo. Lo hará una empresa que sepa usarla mejor. Capacita a tus empleados con casos de uso reales en ChatGPT, Copilot y Claude para recuperar horas de trabajo cada semana.
                            </p>

                            <div className="pt-6">
                                <Link
                                    href="https://calendly.com/victor-aetherlabs" target="_blank"
                                    className="inline-flex items-center justify-center bg-transparent border border-[#00FF41] text-[#00FF41] font-mono text-sm py-4 px-8 hover:bg-[#00FF41]/10 transition-all duration-300 group"
                                >
                                    SOLICITAR MASTERCLASS GRATUITA
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-[#00FF41]/50 text-xs font-mono mt-4 max-w-sm">Garantía de Retorno: Si tras nuestras formaciones tu equipo no documenta un ahorro de al menos 5 horas por empleado a la semana, repetimos el taller gratis.</p>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full aspect-square max-w-md">
                            <div className="absolute inset-0 bg-[#00FF41]/20 blur-[100px] rounded-full" />
                            <div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-[#0A0A0A] p-2">
                                <div className="w-full h-full border border-white/5 relative overflow-hidden flex items-center justify-center bg-black">
                                    {/* Note: I'm reusing the mac image or you can use a different retro image later */}
                                    <Image
                                        src="/pixel-mac.jpeg"
                                        alt="Retro Computer Learn"
                                        fill
                                        className="object-cover opacity-80 mix-blend-screen"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="container mx-auto px-6 py-24 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-4">Nuestro Catálogo</h2>
                            <p className="text-white/40 max-w-2xl text-lg">
                                Elige el nivel de profundidad que tu equipo necesita. Desde charlas inspiracionales hasta capacitaciones técnicas intensivas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="w-12 h-12 rounded bg-[#00FF41]/10 flex items-center justify-center mb-6 text-[#00FF41] group-hover:scale-110 transition-transform">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-[#00FF41]/70 border border-[#00FF41]/20 px-2 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
