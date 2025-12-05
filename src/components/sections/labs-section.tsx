"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Beaker, Brain, Cpu, ArrowRight, ScanEye } from 'lucide-react';

const labs = [
  {
    icon: Brain,
    title: "Creative Lab",
    description: "Experimenta con generación de imágenes, videos y contenido.",
    link: "/labs/creative",
    image: "/images/creative/skyflex.jpg",
    color: "text-purple-400",
    overlay: "from-purple-900/80 to-black/50"
  },
  {
    icon: ScanEye,
    title: "Vision Lab",
    description: "Controla partículas con tus manos. Una experiencia interactiva que fusiona tu realidad con el mundo digital.",
    link: "/labs/vision",
    image: "/images/labs/computer-vision-card.png",
    color: "text-[#82ff1f]",
    overlay: "from-green-900/80 to-black/50"
  },
  {
    icon: Cpu,
    title: "AI Agents Lab",
    description: "Crea tus propios automatizadores y agentes autónomos.",
    link: "/labs/agents",
    image: "/images/learn/automatizacion.jpg",
    color: "text-blue-400",
    overlay: "from-blue-900/80 to-black/50"
  },
  {
    icon: Beaker,
    title: "LLM Lab",
    description: "Experimenta con Grandes Modelos de Lenguaje y chats personalizados.",
    link: "/labs/llm-lab",
    image: "/images/learn/chatbot-lifestyle.png",
    color: "text-orange-400",
    overlay: "from-orange-900/80 to-black/50"
  },
];

const LabsSection = () => {
  return (
    <section className="bg-black text-white py-32 border-b border-white/5 overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Aether Labs
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Un espacio donde puedes experimentar, crear y jugar con inteligencia artificial.
            Sin conocimientos técnicos necesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {labs.map((lab, index) => (
            <Link
              key={index}
              href={lab.link}
              target={lab.link.startsWith('http') ? '_blank' : '_self'}
              className="group relative flex flex-col justify-end p-8 h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={lab.image}
                alt={lab.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${lab.overlay} opacity-90 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-12 h-12 mb-6 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 ${lab.color}`}>
                  <lab.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {lab.title}
                </h3>

                <p className="text-zinc-200 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {lab.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm tracking-wide py-4 px-8 rounded-full transition-all duration-200 ease-out hover:bg-[#82ff1f] hover:scale-105"
          >
            Ver Todos los Laboratorios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;