'use client';

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import {
    Brain,
    Zap,
    TrendingUp,
    ShieldCheck,
    Building,
    Laptop,
    RefreshCw,
    Target,
    BookOpen,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';

export default function CorporateTrainingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* 1. Hero Principal */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
                            Formación Corporativa <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a0a0a0]">
                                en Inteligencia Artificial
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#c8c8c8] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                            Capacitación personalizada para equipos que quieren entender, aplicar y aprovechar la IA en su sector.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/aetherlabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                Agendar consultoría
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Por qué IA es clave */}
            <section className="py-24 bg-black border-t border-[#1a1a1a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-light text-white">
                                ¿Por qué la IA es clave para tu empresa hoy?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "La IA no es el futuro: es el estándar operativo de 2025.",
                                    "Las empresas que forman a sus equipos hoy se vuelven más eficientes.",
                                    "Comprender IA no es ser técnico: es saber usar herramientas.",
                                    "La adopción interna es la única forma de escalar sin dependencia."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a]">
                                        <TrendingUp className="h-6 w-6 text-white flex-shrink-0" />
                                        <p className="text-[#c8c8c8]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#111] p-10 rounded-3xl border border-[#2a2a2a] flex flex-col justify-center h-full text-center">
                            <p className="text-2xl text-white font-light mb-6">
                                Tu equipo no necesita saber programar.
                            </p>
                            <p className="text-[#a0a0a0] text-lg leading-relaxed">
                                Solo necesitan una formación clara, aplicada y directa que les enseñe a resolver problemas reales del día a día.
                            </p>
                        </div>
                    </div>

                    {/* 3. Beneficios */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                        {[
                            { icon: Brain, title: "Ventaja competitiva", text: "Aprenden a usar IA para tareas reales. No teoría abstracta." },
                            { icon: Zap, title: "Ahorro operativo", text: "Automatizan tareas que hoy roban horas al equipo." },
                            { icon: TrendingUp, title: "Productividad", text: "Los equipos rinden más, con menos fricción." },
                            { icon: ShieldCheck, title: "Procesos rápidos", text: "La IA elimina errores humanos y estandariza la información." },
                            { icon: BookOpen, title: "100% Práctica", text: "Casos reales de su sector, ejemplos adaptados." },
                            { icon: Target, title: "Alineado a objetivos", text: "Adaptado a marketing, ventas, operaciones, etc." }
                        ].map((card, i) => (
                            <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl">
                                <card.icon className="h-8 w-8 text-white mb-6" />
                                <h4 className="text-lg font-semibold text-white mb-3">{card.title}</h4>
                                <p className="text-[#808080] text-sm leading-relaxed">{card.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* 4. Módulos Empresa */}
                    <div className="mb-24">
                        <h3 className="text-3xl font-light text-white mb-12 text-center">Qué aprenderá tu empresa</h3>
                        <div className="space-y-6">
                            <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl">
                                <h4 className="text-xl font-semibold text-white mb-4">Módulo 1 — Fundamentos de IA</h4>
                                <p className="text-[#a0a0a0]">Qué es un modelo de IA, qué puede hacer realmente, qué tareas automatizar y cómo evitar expectativas irreales.</p>
                            </div>
                            <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl">
                                <h4 className="text-xl font-semibold text-white mb-6">Módulo 2 — Herramientas por departamento</h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { title: "Marketing", text: "Contenido, analíticas, redes" },
                                        { title: "Ventas", text: "Prospección, emails, CRM" },
                                        { title: "RRHH", text: "Cribado, onboarding, docs" },
                                        { title: "Dirección", text: "Reporting, análisis, decisiones" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-[#111] p-4 rounded-xl">
                                            <p className="text-white font-medium mb-1">{item.title}</p>
                                            <p className="text-xs text-[#808080]">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl">
                                <h4 className="text-xl font-semibold text-white mb-4">Módulo 3 — Prompting de Negocio</h4>
                                <p className="text-[#a0a0a0]">Cómo pedir bien a cualquier modelo, generar contenido profesional, analizar documentos y eliminar tareas repetitivas.</p>
                            </div>
                            <div className="bg-white text-black p-8 rounded-2xl border border-white">
                                <h4 className="text-xl font-semibold mb-4">Módulo 4 — Caso Real Aplicado (El más importante)</h4>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Analizo con vosotros vuestro negocio real</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Creamos casos de uso específicos</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Enseño al equipo a resolverlos paso a paso</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Documentación completa para el futuro</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5. Formatos y Precios Visuales */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        <div>
                            <h3 className="text-2xl font-light text-white mb-8">Formatos disponibles</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Building, title: "Presencial", text: "En vuestras oficinas. Dinámica y directa." },
                                    { icon: Laptop, title: "Online", text: "Ideal para equipos distribuidos o remotos." },
                                    { icon: RefreshCw, title: "Híbrido / Intensivo", text: "Sesiones + ejercicios + seguimiento." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a]">
                                        <item.icon className="h-8 w-8 text-white" />
                                        <div>
                                            <h4 className="text-white font-medium">{item.title}</h4>
                                            <p className="text-[#808080] text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#111] p-10 rounded-3xl border border-[#2a2a2a]">
                            <h3 className="text-2xl font-light text-white mb-8">Opciones de contratación</h3>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-center justify-between border-b border-[#333] pb-4">
                                    <span className="text-[#c8c8c8]">Equipos pequeños</span>
                                    <span className="text-white font-medium">Consultar</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-[#333] pb-4">
                                    <span className="text-[#c8c8c8]">Equipos medianos</span>
                                    <span className="text-white font-medium">Consultar</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-[#333] pb-4">
                                    <span className="text-[#c8c8c8]">Dirección y mandos</span>
                                    <span className="text-white font-medium">Consultar</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-[#333] pb-4">
                                    <span className="text-[#c8c8c8]">Programa anual</span>
                                    <span className="text-white font-medium">A medida</span>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-4">
                                <a href="https://wa.me/34627281459" className="w-full bg-white text-black text-center py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Solicitar presupuesto
                                </a>
                                <a href="https://calendly.com/aetherlabs" className="w-full bg-transparent border border-[#333] text-white text-center py-3 rounded-full font-medium hover:bg-[#222] transition-colors">
                                    Reunión 15 min
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 6. CTA Empresa */}
                    <div className="text-center mb-32">
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
                            Si tu equipo no domina IA en 2025, <br /> pierde velocidad.
                        </h3>
                        <p className="text-xl text-[#808080] mb-10">
                            Formemos a tu empresa para que sea competitiva de verdad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/aetherlabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105"
                            >
                                Hablar contigo
                            </a>
                            <a
                                href="https://wa.me/34627281459"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent text-white border border-[#333] font-medium text-lg py-4 px-10 rounded-full transition-all hover:bg-[#1a1a1a]"
                            >
                                Solicitar formación
                            </a>
                        </div>
                    </div>

                    {/* 7. Autoridad (Simplified for Corporate) */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div>
                            <h2 className="text-3xl font-light text-white mb-8">Formación impartida por Víctor Torres</h2>
                            <div className="prose prose-invert text-[#a0a0a0] leading-relaxed mb-8">
                                <p className="text-lg text-white font-medium mb-4">
                                    Consultor y desarrollador de soluciones de IA para empresas.
                                </p>
                                <p className="mb-4">
                                    Mi enfoque con empresas es puramente pragmático: ROI, eficiencia y automatización. No vengo a dar una charla motivacional sobre el futuro, vengo a enseñar a tu equipo a usar las herramientas que existen hoy para trabajar mejor.
                                </p>
                                <p>
                                    He implementado soluciones en sectores como salud, hostelería, inmobiliaria y servicios profesionales.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Consultoría Estratégica",
                                    "Automatización de Procesos",
                                    "Formación In-Company",
                                    "Resultados Medibles"
                                ].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-full text-xs text-white uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-[#2a2a2a]">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0031-1763512728087.JPG"
                                alt="Víctor Torres"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
