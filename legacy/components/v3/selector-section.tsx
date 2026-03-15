'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, BarChart3, Phone, Megaphone, GraduationCap, ArrowRight } from "lucide-react";
import Link from 'next/link';

const options = [
    {
        id: "leads",
        title: "Tienes leads pero no respondes a tiempo",
        icon: <MessageCircle className="w-6 h-6" />,
        solution: "Agentes IA de Voz y Chat",
        description: "Automatiza la atención y cualificación inmediata. Tus leads reciben respuesta en segundos, 24/7.",
        cta: "Ver Agentes",
        ctaLink: "#agentes",
        gradient: "from-blue-500 to-indigo-500"
    },
    {
        id: "volumen",
        title: "Tienes mucho volumen y necesitas orden",
        icon: <BarChart3 className="w-6 h-6" />,
        solution: "CRM con IA (Achieve Apex)",
        description: "Centraliza todos tus leads, automatiza el seguimiento y visualiza tu pipeline en tiempo real.",
        cta: "Explorar CRM",
        ctaLink: "#crm",
        gradient: "from-[#82ff1f] to-emerald-600"
    },
    {
        id: "llamadas",
        title: "Tu equipo pasa el día llamando",
        icon: <Phone className="w-6 h-6" />,
        solution: "Copiloto de Llamadas (Closius)",
        description: "IA que escucha, transcribe y asiste a tu equipo comercial en tiempo real para cerrar más ventas.",
        cta: "Ver Closius",
        ctaLink: "#copiloto",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: "masleads",
        title: "Necesitas más leads",
        icon: <Megaphone className="w-6 h-6" />,
        solution: "Ads creados con IA",
        description: "Generación de campañas publicitarias optimizadas automáticamente para atraer leads cualificados.",
        cta: "Ver Servicios de Ads",
        ctaLink: "#ads",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: "formacion",
        title: "Quieres formar a tu equipo",
        icon: <GraduationCap className="w-6 h-6" />,
        solution: "Formación en IA Comercial",
        description: "Capacita a tu fuerza de ventas para usar herramientas de IA y multiplicar su productividad.",
        cta: "Ver Formaciones",
        ctaLink: "#formacion",
        gradient: "from-yellow-500 to-amber-500"
    }
];

const SelectorSection = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="relative w-full py-32 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        Elige por dónde empezar
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Selecciona tu situación actual y te diremos exactamente qué necesitas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {options.map((option) => (
                        <motion.button
                            key={option.id}
                            onClick={() => setSelectedId(option.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-6 rounded-xl border text-left transition-all duration-300 group
                                ${selectedId === option.id
                                    ? 'bg-zinc-800 border-zinc-600 ring-1 ring-zinc-500'
                                    : 'bg-black/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'}
                            `}
                        >
                            <div className={`p-3 rounded-lg w-fit mb-4 transition-colors ${selectedId === option.id ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-400 group-hover:text-white'}`}>
                                {option.icon}
                            </div>
                            <h3 className={`text-lg font-medium transition-colors ${selectedId === option.id ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                {option.title}
                            </h3>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {selectedId && (
                        <motion.div
                            key={selectedId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            {options.map((option) => (
                                option.id === selectedId && (
                                    <div key={option.id} className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 md:p-12">
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${option.gradient}`} />
                                        <div className="flex flex-col md:flex-row items-center gap-8">
                                            <div className="flex-1">
                                                <span className="inline-block py-1 px-3 rounded-full bg-zinc-800 text-xs font-medium tracking-wider text-zinc-300 uppercase mb-4 border border-zinc-700">
                                                    Solución Recomendada
                                                </span>
                                                <h3 className="text-3xl font-light text-white mb-4">
                                                    {option.solution}
                                                </h3>
                                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                                    {option.description}
                                                </p>

                                                <div className="flex flex-wrap gap-4">
                                                    <Link
                                                        href={option.ctaLink}
                                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                                                    >
                                                        {option.cta}
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() => document.getElementById('diagnosis-modal')?.showModal()}
                                                        className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
                                                    >
                                                        Diagnóstico Express
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Visual element for the solution card */}
                                            <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-48 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-10`} />
                                                <div className={`p-4 rounded-full bg-gradient-to-br ${option.gradient} text-white shadow-lg`}>
                                                    {React.cloneElement(option.icon as React.ReactElement, { className: "w-10 h-10" })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {!selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-zinc-500 mt-8 font-light italic"
                    >
                        * Haz click en una tarjeta para ver tu solución recomendada.
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SelectorSection;
