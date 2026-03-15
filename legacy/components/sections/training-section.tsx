import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Users, User } from "lucide-react";

const TrainingSection = () => {
    return (
        <section className="py-24 bg-[#050505] text-white overflow-hidden">
            <div className="container">
                <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                                <GraduationCap className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium text-green-400">Formación Premium</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light leading-tight">
                                Fórmate y Aprende <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                                    Inteligencia Artificial
                                </span>
                            </h2>

                            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                                Domina las herramientas que están cambiando el mundo. Desde la creación de contenido hasta la automatización de procesos. Una formación personalizada para potenciar tu carrera o negocio.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/learn/corporate"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors group"
                                >
                                    <Users size={18} />
                                    Formación Empresas
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/learn/personal"
                                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors group"
                                >
                                    <User size={18} />
                                    Formación Personal
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/learn/tech-guy-natural.png"
                                alt="Formación IA Profesional"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#82ff1f] flex items-center justify-center text-black font-bold">
                                        AI
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Certificación</p>
                                        <p className="text-zinc-400 text-xs">Experto en IA Generativa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
