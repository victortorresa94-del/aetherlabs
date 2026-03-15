// Server component for SEO

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wand2, Paintbrush, Video, Layout } from 'lucide-react';
import '@/components/web4/web4.css';

export const metadata = {
    title: "Agencia de Marketing de Contenidos con IA | Aether Creative Lab",
    description: "Producimos material de marketing corporativo con IA en días, no meses. Vídeo, imagen, webs y branding para empresas B2B sin rodajes costosos.",
};

export default function CreativeLabPage() {
    const services = [
        {
            title: 'Web & Landing Pages',
            description: 'Diseñamos y desarrollamos webs y landings preparadas para convertir. La presencia digital como herramienta, no como decoración.',
            icon: Layout,
            tags: ['Diseño Web', 'UI/UX', 'CRO'],
        },
        {
            title: 'Identidad & Branding',
            description: 'Creamos sistemas de identidad visual completos, desde el naming hasta la paleta y tipografía, listos para escalar.',
            icon: Paintbrush,
            tags: ['Branding', 'Identidad Visual', 'Naming'],
        },
        {
            title: 'Producción de Vídeo IA',
            description: 'Avatar IA, vídeos corporativos, reels y contenido explicativo sin necesidad de costosos rodajes.',
            icon: Video,
            tags: ['Avatar IA', 'Reels', 'Motion'],
        },
        {
            title: 'Material Corporativo',
            description: 'Presentaciones, Pitch Decks, Dossieres y todo el material estático para cerrar ventas y reuniones.',
            icon: Wand2,
            tags: ['Dossier', 'Pitch Deck', 'Presentaciones'],
        }
    ];

    return (
        <div className="min-h-screen bg-[#050508] text-white selection:bg-[#00E5FF] selection:text-black">\n            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","provider":{"@type":"Organization","name":"Aether Labs","url":"https://aetherlabs.es"},"areaServed":"ES","description":"Producción de marketing con IA para empresas B2B."}) }}
            />
            {/* Overlays */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay"
                style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}>
            </div>
            <div className="fixed inset-[-50%] pointer-events-none z-40 opacity-[0.025]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', animation: 'grainMove 0.5s steps(1) infinite' }}>
            </div>

            <HeaderNavigation />

            <main className="relative z-10 pt-32 pb-24">
                {/* HERO SECTION */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <div className="flex-1 space-y-6">
                            <div className="font-mono text-[#00E5FF] text-xs tracking-widest uppercase">
                                Aether / Marketing Lab
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                                Producción de marketing con IA<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7B2FFF]">
                                    para empresas B2B.
                                </span>
                            </h1>
                            <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed">
                                El problema no es tu producto. El problema es que tu competencia parece más grande porque genera mejor contenido. Te entregamos tu branding, vídeos corporativos y web en menos de 14 días usando la última tecnología IA. Sin rodajes caros. Sin agencias lentas.
                            </p>

                            <div className="pt-6">
                                <Link
                                    href="https://calendly.com/victor-aetherlabs" target="_blank"
                                    className="inline-flex items-center justify-center bg-transparent border border-[#00E5FF] text-[#00E5FF] font-mono text-sm py-4 px-8 hover:bg-[#00E5FF]/10 transition-all duration-300 group"
                                >
                                    RESERVAR AUDITORÍA GRATUITA
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-[#00E5FF]/50 text-xs font-mono mt-4 max-w-sm">Si no encontramos al menos 3 cuellos de botella en tu marketing actual durante la llamada, te enviamos una botella de vino.</p>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full aspect-square max-w-md">
                            <div className="absolute inset-0 bg-[#00E5FF]/20 blur-[100px] rounded-full" />
                            <div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-[#0A0A0A] p-2">
                                <div className="w-full h-full border border-white/5 relative overflow-hidden flex items-center justify-center bg-black">
                                    <Image
                                        src="/pixel-camera.jpeg"
                                        alt="Retro Camera"
                                        fill
                                        className="object-cover opacity-80 mix-blend-screen"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="container mx-auto px-6 py-24 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-4">Nuestro Catálogo</h2>
                            <p className="text-white/40 max-w-2xl text-lg">
                                Entregamos en días lo que tradicionalmente tarda meses. Todo lo que necesitas para vender en el mundo digital, impulsado por IA.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="w-12 h-12 rounded bg-[#00E5FF]/10 flex items-center justify-center mb-6 text-[#00E5FF] group-hover:scale-110 transition-transform">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-[#00E5FF]/70 border border-[#00E5FF]/20 px-2 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
