"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    Phone,
    Megaphone,
    MessageCircle,
    Zap,
    BarChart3,
    Users,
    Scale,
    ShoppingBag,
    Building2,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Settings,
    GraduationCap,
    LayoutGrid
} from "lucide-react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import Image from "next/image";
import { hubsData } from "./data";

// --- Types ---
// Using types from data.ts implicitly by mapping

interface StepProps {
    number: string;
    title: string;
    description: string;
}

interface UseCaseProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

// --- Data ---
// Hubs data is imported from ./data.ts

const steps = [
    {
        number: "01",
        title: "Diagnóstico",
        description: "Analizamos tu negocio y elegimos el Hub ideal para tus necesidades."
    },
    {
        number: "02",
        title: "Instalación",
        description: "Configuramos las herramientas en tu entorno y las integramos con tu stack."
    },
    {
        number: "03",
        title: "Personalización",
        description: "Adaptamos los flujos de trabajo y asistentes a tu día a día."
    },
    {
        number: "04",
        title: "Formación",
        description: "Sesiones prácticas para que tu equipo domine las herramientas desde el primer día."
    }
];

const benefits = [
    "Resultados inmediatos",
    "Cero complejidad técnica",
    "Ahorro de tiempo",
    "Equipo formado en IA",
    "Adaptado a pymes y empresas"
];

const useCases = [
    {
        title: "Equipo Comercial",
        description: "Llamadas automáticas y cualificación de leads con Dapta & Vapi.",
        icon: Phone
    },
    {
        title: "Marketing",
        description: "Generación de contenido masivo y personalizado con Freepik & Higgsfield.",
        icon: Megaphone
    },
    {
        title: "Dirección",
        description: "Informes automáticos y análisis de datos en tiempo real.",
        icon: BarChart3
    },
    {
        title: "Inmobiliarias",
        description: "Video AI y Virtual Staging para propiedades.",
        icon: Building2
    }
];

// --- Components ---

const HubCard: React.FC<any> = ({ id, title, shortDescription, tools, icon: Icon, color }) => (
    <Link href={`/servicios/ai-hub/${id}`} className="block h-full">
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-zinc-900/60 transition-all duration-300 h-full flex flex-col"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                    <Icon className="w-6 h-6 text-white group-hover:text-[#82ff1f] transition-colors" />
                </div>

                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#82ff1f] transition-colors">{title}</h3>
                <p className="text-zinc-400 text-sm mb-6 min-h-[40px] flex-grow">{shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tools.slice(0, 4).map((tool: any, i: number) => (
                        <div
                            key={i}
                            className="flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5"
                        >
                            <div className="relative w-3 h-3 rounded-full overflow-hidden bg-white/10">
                                <Image
                                    src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                                    alt={tool.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                    {tools.length > 4 && (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">+{tools.length - 4}</span>
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                    <span>Ver detalles</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    </Link>
);

const StepCard: React.FC<StepProps> = ({ number, title, description }) => (
    <div className="relative p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
        <div className="text-4xl font-light text-[#82ff1f]/20 mb-4">{number}</div>
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
    </div>
);

const UseCaseCard: React.FC<UseCaseProps> = ({ title, description, icon: Icon }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
        <div className="p-2 rounded-lg bg-white/5 text-[#82ff1f]">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-white font-medium mb-1">{title}</h4>
            <p className="text-zinc-400 text-xs">{description}</p>
        </div>
    </div>
);

// --- Main Page Component ---

export default function AIHubPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#82ff1f]/10 via-black to-black pointer-events-none" />

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#82ff1f]/10 text-[#82ff1f] text-sm font-medium mb-6 border border-[#82ff1f]/20">
                                AI Hub Service
                            </span>
                            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
                                AI Hub — Implementamos las <span className="text-[#82ff1f]">mejores herramientas</span> de IA para tu empresa
                            </h1>
                            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Copilot, Google Workspace AI, Dapta, Freepik... Tú eliges el Hub. Nosotros te lo dejamos funcionando, configurado y con tu equipo formado.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="#contact"
                                    className="px-8 py-4 rounded-full bg-[#82ff1f] text-black font-semibold hover:bg-[#72e61b] transition-colors w-full sm:w-auto"
                                >
                                    Quiero mi AI Hub
                                </Link>
                                <Link
                                    href="#hubs"
                                    className="px-8 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto"
                                >
                                    Ver catálogo
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What is AI Hub */}
            <section className="py-20 border-t border-white/5 bg-zinc-900/20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-light mb-6">
                                ¿Qué es un <span className="text-[#82ff1f]">AI Hub</span>?
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Un AI Hub es un ecosistema de herramientas IA ya existentes, creadas por los mejores proveedores del mundo, que nosotros implementamos y enseñamos a usar dentro de tu empresa.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Instalación técnica completa",
                                    "Configuración personalizada para tu negocio",
                                    "Formación práctica para tu equipo",
                                    "Resultados desde el primer día"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#82ff1f] w-5 h-5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#82ff1f]/20 to-transparent rounded-3xl blur-2xl" />
                            <div className="relative bg-black border border-white/10 rounded-3xl p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
                                        <Settings className="w-8 h-8 text-[#82ff1f] mb-3" />
                                        <span className="text-sm font-medium">Configuración</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
                                        <GraduationCap className="w-8 h-8 text-[#82ff1f] mb-3" />
                                        <span className="text-sm font-medium">Formación</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
                                        <Cpu className="w-8 h-8 text-[#82ff1f] mb-3" />
                                        <span className="text-sm font-medium">Implementación</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
                                        <LayoutGrid className="w-8 h-8 text-[#82ff1f] mb-3" />
                                        <span className="text-sm font-medium">Integración</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hubs Grid */}
            <section id="hubs" className="py-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-light mb-4">Catálogo de <span className="text-[#82ff1f]">AI Hubs</span></h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Selecciona el ecosistema que necesitas. Nosotros nos encargamos del resto.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hubsData.map((hub, index) => (
                            <HubCard key={index} {...hub} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-zinc-900/20 border-y border-white/5">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light mb-4">Cómo funciona</h2>
                        <p className="text-zinc-400">De 0 a 100 en IA en cuatro pasos sencillos</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <StepCard key={index} {...step} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases & Benefits */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-light mb-8">Casos de uso reales</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {useCases.map((useCase, index) => (
                                    <UseCaseCard key={index} {...useCase} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-light mb-8">Beneficios directos</h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-white/5">
                                        <span className="font-medium">{benefit}</span>
                                        <CheckCircle2 className="text-[#82ff1f] w-5 h-5" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contact" className="py-24 relative overflow-hidden">

                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">
                        ¿Quieres un <span className="text-[#82ff1f]">AI Hub</span> en tu empresa?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Te instalamos la herramienta y te enseñamos a usarla en menos de 48h.
                        Sin complicaciones técnicas.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#82ff1f] text-black text-lg font-bold hover:bg-[#72e61b] transition-all hover:scale-105"
                    >
                        Solicitar implementación
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

