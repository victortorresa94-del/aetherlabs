'use client'

import React from "react";
import { motion } from "framer-motion";
import { Database, PhoneForwarded, Target, GraduationCap, ArrowRight } from "lucide-react";
import Link from 'next/link';

const services = [
    {
        title: "CRM con IA",
        subtitle: "Achieve Apex",
        description: "Gestiona grandes volúmenes de leads sin perder el control.",
        icon: <Database className="w-6 h-6 text-purple-400" />,
        link: "#crm"
    },
    {
        title: "Copiloto de Llamadas",
        subtitle: "Closius",
        description: "Asistente en tiempo real para equipos de venta telefónica.",
        icon: <PhoneForwarded className="w-6 h-6 text-orange-400" />,
        link: "#copiloto"
    },
    {
        title: "Ads con IA",
        subtitle: "Generación de Demanda",
        description: "Campañas automatizadas que traen leads listos para comprar.",
        icon: <Target className="w-6 h-6 text-pink-400" />,
        link: "#ads"
    },
    {
        title: "Formación",
        subtitle: "Academy",
        description: "Capacita a tu equipo interno para dominar la IA comercial.",
        icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
        link: "#formacion"
    }
];

const AdvancedServicesSection = () => {
    return (
        <section className="relative w-full py-24 bg-black flex flex-col items-center justify-center border-t border-zinc-900">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        Cuando necesitas ir <span className="font-medium text-white">un paso más allá</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Soluciones avanzadas para empresas con mayor volumen o estructuras más complejas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <Link
                                href={service.link}
                                className="block h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                                </div>

                                <div className="w-12 h-12 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>

                                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                                    {service.subtitle}
                                </h4>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvancedServicesSection;
