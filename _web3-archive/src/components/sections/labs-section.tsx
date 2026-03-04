"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Beaker, Brain, Cpu, ArrowRight, ScanEye } from 'lucide-react';

const labs = [
  {
    icon: Brain,
    title: "Creative Lab",
    description: "Experimenta con generación de contenido visual y audiovisual.",
    link: "/labs/creative",
    image: "/images/creative/skyflex.jpg"
  },
  {
    icon: ScanEye,
    title: "Vision Lab",
    description: "Controla partículas con tus manos y fusiona tu realidad.",
    link: "/labs/vision",
    image: "/images/labs/computer-vision-card.png"
  },
  {
    icon: Cpu,
    title: "AI Agents Lab",
    description: "Crea tus propios agentes autónomos que trabajan por ti.",
    link: "/labs/agents",
    image: "/images/learn/automatizacion.jpg"
  },
  {
    icon: Beaker,
    title: "LLM Lab",
    description: "Pon a prueba la inteligencia de nuestros chats avanzados.",
    link: "/labs/llm-lab",
    image: "/images/learn/chatbot-lifestyle.png"
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

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {labs.map((lab, index) => (
            <Link
              key={index}
              href={lab.link}
              target={lab.link.startsWith('http') ? '_blank' : '_self'}
              className="min-w-[280px] md:min-w-0 group relative flex flex-col justify-end p-8 h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 snap-center"
            >
              {/* Background Image */}
              <Image
                src={lab.image}
                alt={lab.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-[#82ff1f]">
                  <lab.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {lab.title}
                </h3>

                <p className="text-zinc-200 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
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