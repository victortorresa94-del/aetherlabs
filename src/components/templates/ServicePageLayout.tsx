'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Types
export type IconType = string | { type: 'image'; src: string; alt: string };

export interface ServicePageProps {
    hero: {
        title: string;
        subtitle: string;
        image?: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    problems: {
        title: string;
        items: { icon: IconType; title: string; description: string }[];
    };
    solutions: {
        title: string;
        items: { icon: IconType; title: string; description: string; link?: string }[];
    };
    benefits: {
        title: string;
        items: { text: string; subtext?: string }[];
    };
    useCases: {
        title: string;
        items: { title: string; before: string; after: string; image?: string }[];
    };
    integrations: {
        title: string;
        logos: { src: string; alt: string }[];
    };
    testimonials?: {
        items: { quote: string; author: string; role: string; company: string }[];
    };
    successStory?: {
        company: string;
        challenge: string;
        solution: string;
        results: string;
        quote: string;
        author: string;
    };
    ctaFinal: {
        title: string;
        subtitle: string;
        buttonText: string;
        link: string;
    };
}

const DynamicIcon = ({ icon, className }: { icon: IconType; className?: string }) => {
    if (typeof icon === 'object' && icon.type === 'image') {
        return (
            <div className={`relative ${className}`}>
                <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
            </div>
        );
    }

    const IconComponent = (LucideIcons as any)[icon as string];
    if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
};

export default function ServicePageLayout({
    hero,
    problems,
    solutions,
    benefits,
    useCases,
    integrations,
    testimonials,
    successStory,
    ctaFinal,
}: ServicePageProps) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans">
            <HeaderNavigation />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#82ff1f]/10 via-black/50 to-black" />
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20" />
                    {hero.image && (
                        <Image
                            src={hero.image}
                            alt="Background"
                            fill
                            className="object-cover opacity-20 mix-blend-overlay"
                            priority
                        />
                    )}
                </div>

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            {hero.title}
                        </h1>
                        <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                            {hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contacto"
                                className="px-8 py-4 bg-[#82ff1f] text-black font-medium text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                {hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#soluciones"
                                className="px-8 py-4 border border-white/20 text-white font-light text-sm rounded-full hover:bg-white/10 transition-colors"
                            >
                                {hero.ctaSecondary}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. PROBLEMS SECTION */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="container px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl md:text-3xl font-light mb-16 text-center"
                    >
                        {problems.title}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {problems.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#82ff1f]/50 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#82ff1f]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <DynamicIcon icon={item.icon} className="w-5 h-5 text-[#82ff1f]" />
                                </div>
                                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SOLUTIONS GRID */}
            <section id="soluciones" className="py-32 bg-black relative">
                <div className="container px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl md:text-3xl font-light mb-20 text-center"
                    >
                        {solutions.title}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.items.map((item, i) => (
                            <Link href={item.link || '#'} key={i} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="h-full p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#82ff1f] transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-[#82ff1f] -rotate-45" />
                                    </div>
                                    <div className="mb-6">
                                        <DynamicIcon icon={item.icon} className="w-8 h-8 text-white group-hover:text-[#82ff1f] transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.description}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BENEFITS & METRICS */}
            <section className="py-32 bg-[#050505] border-t border-white/5">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-light mb-12 leading-tight">
                                {benefits.title}
                            </h2>
                            <div className="space-y-6">
                                {benefits.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#82ff1f] flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-white">{item.text}</p>
                                            {item.subtext && <p className="text-zinc-500 text-sm mt-1 font-light">{item.subtext}</p>}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            {/* Abstract Visual Representation of Growth/Efficiency */}
                            <div className="aspect-square rounded-full bg-gradient-to-tr from-[#82ff1f]/20 to-transparent blur-3xl absolute inset-0" />
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                {/* Placeholder for dynamic metrics or charts if needed */}
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                    <div className="text-3xl font-light text-[#82ff1f] mb-2">+40%</div>
                                    <div className="text-xs text-zinc-400 font-light">Eficiencia Operativa</div>
                                </div>
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mt-8">
                                    <div className="text-3xl font-light text-[#82ff1f] mb-2">-60%</div>
                                    <div className="text-xs text-zinc-400 font-light">Costes Administrativos</div>
                                </div>
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                    <div className="text-3xl font-light text-[#82ff1f] mb-2">24/7</div>
                                    <div className="text-xs text-zinc-400 font-light">Disponibilidad Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. USE CASES (Before/After) */}
            <section className="py-32 bg-black">
                <div className="container px-4">
                    <h2 className="text-2xl md:text-3xl font-light mb-20 text-center">
                        {useCases.title}
                    </h2>
                    <div className="space-y-12">
                        {useCases.items.map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10"
                            >
                                <div className="p-12 bg-[#0a0a0a] flex flex-col justify-center">
                                    <h3 className="text-xl font-medium mb-8 text-white">{useCase.title}</h3>
                                    <div className="space-y-6">
                                        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                                            <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2 block">ANTES</span>
                                            <p className="text-zinc-300 text-sm font-light">{useCase.before}</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" />
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#82ff1f]/5 border border-[#82ff1f]/20">
                                            <span className="text-[10px] font-mono text-[#82ff1f] uppercase tracking-widest mb-2 block">DESPUÉS (CON IA)</span>
                                            <p className="text-white text-sm font-light">{useCase.after}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative min-h-[300px] bg-zinc-900">
                                    {useCase.image ? (
                                        <Image src={useCase.image} alt={useCase.title} fill className="object-cover" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                                            <span className="font-mono text-xs">Visualización del proceso</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. INTEGRATIONS */}
            <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
                <div className="container px-4 text-center mb-12">
                    <h3 className="text-lg text-zinc-400 font-light">{integrations.title}</h3>
                </div>
                <div className="flex justify-center flex-wrap gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {integrations.logos.map((logo, i) => (
                        <div key={i} className="relative h-10 w-28">
                            <Image src={logo.src} alt={logo.alt} fill className="object-contain brightness-0 invert" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. SUCCESS STORY (NEW) */}
            {successStory && (
                <section className="py-32 bg-[#050505] border-y border-white/5">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-[3/4] rounded-2xl bg-zinc-900 relative overflow-hidden border border-white/10">
                                        {/* Placeholder for Success Story Image - could be dynamic later */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#82ff1f]/20 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <p className="text-4xl font-bold text-white mb-2">{successStory.results}</p>
                                            <p className="text-sm text-zinc-400">Resultados Clave</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#82ff1f]/10 text-[#82ff1f] text-xs font-mono mb-6">
                                        CASO DE ÉXITO: {successStory.company}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-light text-white mb-8">
                                        "{successStory.quote}"
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-2">El Desafío</h4>
                                            <p className="text-sm text-zinc-400 font-light">{successStory.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-2">La Solución</h4>
                                            <p className="text-sm text-zinc-400 font-light">{successStory.solution}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{successStory.author}</p>
                                        <p className="text-xs text-zinc-500">{successStory.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 8. TESTIMONIALS (Optional) */}
            {testimonials && (
                <section className="py-32 bg-black">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.items.map((t, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-3 h-3 text-[#82ff1f] fill-[#82ff1f]" />
                                        ))}
                                    </div>
                                    <p className="text-zinc-300 text-sm mb-6 italic font-light">"{t.quote}"</p>
                                    <div>
                                        <p className="text-white text-sm font-medium">{t.author}</p>
                                        <p className="text-xs text-zinc-500 font-light">{t.role}, {t.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 9. FINAL CTA */}
            <section className="py-40 bg-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#82ff1f]/5 to-transparent" />

                <div className="container relative z-10 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-8">
                        {ctaFinal.title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light">
                        {ctaFinal.subtitle}
                    </p>
                    <Link
                        href={ctaFinal.link}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#82ff1f] text-black font-medium text-lg rounded-full hover:scale-105 transition-transform"
                    >
                        {ctaFinal.buttonText}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
