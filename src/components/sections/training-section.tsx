import Link from "next/link";
import { ArrowRight, GraduationCap, BrainCircuit } from "lucide-react";

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

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/learn/personal"
                                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors group"
                                >
                                    Empezar a Aprender
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative lg:h-[400px] flex items-center justify-center">
                            {/* Abstract Visual Representation of Learning/AI */}
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full animate-pulse" />
                                <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <BrainCircuit className="w-32 h-32 text-white/20" strokeWidth={1} />
                                </div>
                                {/* Floating cards effect */}
                                <div className="absolute top-10 right-10 bg-zinc-900/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <span className="text-green-400 text-xs">AI</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Masterclass</p>
                                            <p className="text-xs text-zinc-500">Generación de Video</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-20 left-0 bg-zinc-900/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <span className="text-blue-400 text-xs">PRO</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Automatización</p>
                                            <p className="text-xs text-zinc-500">Workflows Avanzados</p>
                                        </div>
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
