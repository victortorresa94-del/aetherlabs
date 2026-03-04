"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { hubsData } from "../data";

interface PageProps {
    params: {
        category: string;
    };
}

export default function HubDetailPage({ params }: PageProps) {
    const hub = hubsData.find((h) => h.id === params.category);

    if (!hub) {
        notFound();
    }

    const Icon = hub.icon;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${hub.color} opacity-10 pointer-events-none`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black via-black to-black pointer-events-none" />

                <div className="container relative z-10">
                    <Link
                        href="/servicios/ai-hub"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al catálogo
                    </Link>

                    <div className="max-w-4xl">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                            <Icon className="w-8 h-8 text-[#82ff1f]" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
                            {hub.title}
                        </h1>
                        <p className="text-xl text-zinc-400 mb-10 max-w-3xl leading-relaxed">
                            {hub.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            {hub.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-[#82ff1f]" />
                                    <span className="text-sm text-zinc-300">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-[#82ff1f] text-black font-semibold hover:bg-[#72e61b] transition-colors inline-block"
                        >
                            Solicitar implementación
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-24 border-t border-white/5 bg-zinc-900/20">
                <div className="container">
                    <h2 className="text-3xl font-light mb-12">Herramientas que implementamos</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {hub.tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-[#82ff1f]/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 p-2">
                                            <Image
                                                src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                                                alt={tool.name}
                                                width={48}
                                                height={48}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-medium">{tool.name}</h3>
                                    </div>
                                    <Link
                                        href={tool.url}
                                        target="_blank"
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>

                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    {tool.description}
                                </p>

                                {tool.features && (
                                    <div className="space-y-3">
                                        {tool.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contact" className="py-24 relative overflow-hidden">

                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">
                        Lleva tu {hub.title.replace(" Hub", "")} al siguiente nivel
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Te ayudamos a elegir, instalar y dominar las herramientas de este Hub en tiempo récord.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#82ff1f] text-black text-lg font-bold hover:bg-[#72e61b] transition-all hover:scale-105"
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
