"use client";

import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface ServiceDetailProps {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process?: {
        title: string;
        description: string;
    }[];
    gallery?: (string | { src: string; label: string })[];
    galleryTitle?: string;
    galleryAspectRatio?: string;
    heroImage?: string;
}

const ServiceDetail = ({
    title,
    subtitle,
    description,
    benefits,
    process,
    gallery,
    galleryTitle = "Resultados",
    galleryAspectRatio = "aspect-square",
    heroImage,
}: ServiceDetailProps) => {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <Link
                            href="/servicios/ia-generativa"
                            className="inline-flex items-center text-sm text-[#a0a0a0] hover:text-white mb-6 transition-colors"
                        >
                            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                            Volver a IA Generativa
                        </Link>
                        <h1 className="text-5xl md:text-[5rem] font-light leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#c8c8c8] max-w-2xl font-light">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-gradient-to-b from-[#1a1a1a] to-transparent opacity-50 blur-3xl -z-10" />
            </section>

            {/* Main Content */}
            <section className="py-20 border-t border-[#1a1a1a]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-light mb-6">¿En qué consiste?</h2>
                            <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
                                {description}
                            </p>

                            <h3 className="text-xl font-medium mb-4 text-white">Beneficios Clave</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-[#c8c8c8]">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#111]">
                            {heroImage && (
                                <Image
                                    src={heroImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section (Optional) */}
            {process && (
                <section className="py-20 bg-[#0a0a0a]">
                    <div className="container">
                        <h2 className="text-3xl font-light mb-12 text-center">Nuestro Proceso</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {process.map((step, index) => (
                                <div key={index} className="bg-black p-8 rounded-2xl border border-[#1a1a1a]">
                                    <div className="text-4xl font-light text-[#333] mb-4">0{index + 1}</div>
                                    <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                                    <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Section */}
            {gallery && gallery.length > 0 && (
                <section className="py-20">
                    <div className="container">
                        <h2 className="text-3xl font-light mb-12">{galleryTitle}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {gallery.map((item, index) => {
                                const src = typeof item === 'string' ? item : item.src;
                                const label = typeof item === 'string' ? null : item.label;

                                return (
                                    <div key={index} className={`relative ${galleryAspectRatio} rounded-xl overflow-hidden bg-[#111] group`}>
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {label && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <span className="text-white font-medium text-xl tracking-wide">
                                                        {label}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-white text-black">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-light mb-8">
                            Empieza tu proyecto
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            ¿Listo para llevar tu marca al siguiente nivel con {title}?
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center bg-black text-white font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
                        >
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServiceDetail;
