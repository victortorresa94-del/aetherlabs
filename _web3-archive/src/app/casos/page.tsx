'use client'

import React from "react";
import Link from 'next/link';
import { ArrowRight, Activity, Building, Wrench, GraduationCap, ArrowUpRight } from "lucide-react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

const cases = [
    {
        id: "01",
        slug: "clinica-estetica",
        title: "Clínica Estética Local",
        icon: Activity,
        stats: "60-120 consultas/mes",
        problem: "Pérdida de citas y falta de seguimiento.",
        solution: "Agente de triaje y CRM automatizado.",
        description: "Automatización completa desde el primer mensaje de WhatsApp hasta el recordatorio de la cita y el seguimiento post-tratamiento."
    },
    {
        id: "02",
        slug: "inmobiliaria",
        title: "Inmobiliaria Urbana",
        icon: Building,
        stats: "100-150 leads/mes",
        problem: "Leads de baja calidad y visitas improductivas.",
        solution: "Cualificación profunda y asignación inteligente.",
        description: "Sistema que filtra curiosos de compradores reales, detecta presupuesto y urgencia antes de agendar cualquier visita."
    },
    {
        id: "03",
        slug: "servicios-tecnicos",
        title: "Empresa de Servicios Técnicos",
        icon: Wrench,
        stats: "40-80 solicitudes/mes",
        problem: "Caos en la gestión de avisos y presupuestos lentos.",
        solution: "Agente técnico y geolocalización.",
        description: "Recepción de averías con IA que solicita fotos y ubicación, organizando la agenda de los técnicos automáticamente."
    },
    {
        id: "04",
        slug: "centro-formativo",
        title: "Centro Formativo Privado",
        icon: GraduationCap,
        stats: "100-300 solicitudes/mes",
        problem: "Los leads se enfrían por falta de rapidez.",
        solution: "Respuesta inmediata y nutrición de leads.",
        description: "Atención al estudiante 24/7 que resuelve dudas de temario y precios, guiando al alumno hasta la matrícula."
    }
];

export default function CasesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 border-b border-white/10">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 bg-white/5 border border-white/10 rounded-full text-[#82ff1f] font-mono text-[10px] tracking-[0.3em] uppercase mb-8">
                        Arquitectura Aplicada
                    </span>
                    <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-bold tracking-tighter mb-8 font-display">
                        Casos de uso reales <br />
                        <span className="text-zinc-500">del sistema SALVIA™</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                        No son teorías. Son arquitecturas de automatización desplegadas para resolver problemas de negocio específicos.
                    </p>
                </div>
            </section>

            {/* Grid of Cases */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cases.map((useCase) => (
                            <Link href={`/casos/${useCase.slug}`} key={useCase.id} className="group relative block">
                                <article className="h-full bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:border-[#82ff1f]/50 hover:bg-zinc-900 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="text-[#82ff1f] w-8 h-8" />
                                    </div>

                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#82ff1f]/30 transition-colors">
                                            <useCase.icon className="text-white w-6 h-6" />
                                        </div>
                                        <span className="font-mono text-zinc-600 text-sm">CASE {useCase.id}</span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#82ff1f] transition-colors">
                                        {useCase.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-zinc-400 border border-white/5">
                                            {useCase.stats}
                                        </span>
                                    </div>

                                    <p className="text-zinc-400 leading-relaxed mb-8 border-l-2 border-zinc-800 pl-4">
                                        <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">El Reto</span>
                                        {useCase.problem}
                                    </p>

                                    <p className="text-zinc-300 leading-relaxed">
                                        {useCase.description}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-[#82ff1f] text-sm font-bold tracking-widest uppercase">
                                        Ver Arquitectura <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA General */}
            <section className="py-24 px-6 border-t border-white/10 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        ¿Tu sector no está aquí?
                    </h2>
                    <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
                        La arquitectura SALVIA™ es modular y adaptable. Si tienes leads, clientes y procesos repetitivos, podemos automatizarlo.
                    </p>
                    <Link href="/contacto" className="inline-flex h-12 items-center justify-center rounded-full bg-[#82ff1f] px-8 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
                        Solicitar Análisis de Viabilidad
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
