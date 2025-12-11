import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react';

const AIHubSection: React.FC = () => {
    return (
        <section className="bg-black py-24 md:py-32 border-b border-white/5 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-6">
                            <LayoutGrid size={12} />
                            AI Hub
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                            Tu entorno de trabajo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82ff1f] to-blue-400 font-medium">
                                Inteligente
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                            Centraliza todas tus herramientas de IA en un solo lugar.
                            Implementamos y te formamos en el uso de Copilot, Gemini, ChatGPT Enterprise y más,
                            integrándolos perfectamente en tu flujo de trabajo diario.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Integración de Microsoft Copilot 365",
                                "Despliegue de ChatGPT Enterprise seguro",
                                "Workflows automatizados con n8n y Make",
                                "Formación de equipos en herramientas IA"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/servicios/ai-hub"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors group"
                        >
                            Explorar AI Hub
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <Image
                                src="/images/services/ai-hub-real.png"
                                alt="AI Hub Workspace"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Holographic Overlay Effect */}
                            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>

                        {/* Decorative Blur */}
                        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AIHubSection;
