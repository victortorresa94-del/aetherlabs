"use client";

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FlaskConical, Bot, BrainCircuit, Sparkles } from 'lucide-react';

export default function LabsPage() {
    const labs = [
        {
            title: 'Experimental Lab',
            description: 'Un entorno 3D inmersivo donde probamos las últimas tecnologías en desarrollo. Explora prototipos y conceptos futuristas.',
            image: '/images/experimental-lab-bg-final.jpg',
            icon: FlaskConical,
            link: '/labs/experimental',
            color: 'text-[#82ff1f]',
            borderColor: 'group-hover:border-[#82ff1f]',
            bgGradient: 'group-hover:shadow-[#82ff1f]/20'
        },
        {
            title: 'Creative Lab',
            description: 'Herramientas de IA generativa listas para usar. Desde creación de avatares hasta edición de imágenes avanzada.',
            image: '/images/creative/skyflex-fence.jpg',
            icon: Sparkles,
            link: '/labs/creative',
            color: 'text-purple-400',
            borderColor: 'group-hover:border-purple-400',
            bgGradient: 'group-hover:shadow-purple-400/20'
        },
        {
            title: 'AI Agents Lab',
            description: 'Construye y despliega agentes autónomos capaces de ejecutar tareas complejas y flujos de trabajo automatizados.',
            image: '/images/learn/nano-banana-user.jpg', // Placeholder, ideally a more technical image
            icon: Bot,
            link: '/labs/agents',
            color: 'text-blue-400',
            borderColor: 'group-hover:border-blue-400',
            bgGradient: 'group-hover:shadow-blue-400/20'
        },
        {
            title: 'LLM Lab',
            description: 'Investigación y desarrollo sobre Grandes Modelos de Lenguaje. Fine-tuning, RAG y arquitecturas cognitivas.',
            image: '/images/creative/chleopatra-egypt.png', // Placeholder
            icon: BrainCircuit,
            link: '/labs/llm-lab',
            color: 'text-orange-400',
            borderColor: 'group-hover:border-orange-400',
            bgGradient: 'group-hover:shadow-orange-400/20'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <HeaderNavigation />

            <main className="pt-32 pb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                            Aether <span className="text-zinc-500">Labs</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Nuestra división de I+D. Aquí es donde experimentamos, rompemos cosas y construimos el futuro de la inteligencia artificial.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {labs.map((lab, index) => (
                            <Link
                                key={index}
                                href={lab.link}
                                className={`group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-zinc-900 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${lab.borderColor} ${lab.bgGradient}`}
                            >
                                {/* Image Section */}
                                <div className="h-64 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                    <Image
                                        src={lab.image}
                                        alt={lab.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className={`w-12 h-12 bg-black/50 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 ${lab.color}`}>
                                            <lab.icon size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 relative z-20 -mt-12">
                                    <h2 className="text-3xl font-light text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {lab.title}
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed mb-8 min-h-[3rem]">
                                        {lab.description}
                                    </p>

                                    <div className={`flex items-center text-sm font-bold tracking-widest uppercase ${lab.color} group-hover:gap-4 transition-all duration-300`}>
                                        Entrar al Lab
                                        <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
