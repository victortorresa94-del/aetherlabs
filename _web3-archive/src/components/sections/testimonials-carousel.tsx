"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "La implementación de agentes IA ha reducido nuestra carga administrativa un 40%.",
    highlight: "agentes IA",
    author: "Carlos Méndez",
    role: "CEO, TechFlow",
    image: "/images/testimonials/carlos.png",
    type: "Automatización"
  },
  {
    quote: "Gracias a la formación personalizada, nuestro equipo de marketing ahora crea campañas en horas, no semanas.",
    highlight: "formación personalizada",
    author: "Laura García",
    role: "CMO, CreativeStudio",
    image: "/images/testimonials/laura.png",
    type: "Formación"
  },
  {
    quote: "El chatbot que desarrollaron no solo atiende clientes, cierra ventas automáticamente.",
    highlight: "cierra ventas",
    author: "Marc Soler",
    role: "Fundador, E-Shop",
    image: "/images/testimonials/marc.png",
    type: "Chatbots"
  },
  {
    quote: "Increíble cómo el LLM a medida entiende nuestra jerga técnica y nos ayuda a redactar informes.",
    highlight: "LLM a medida",
    author: "Sofía Martínez",
    role: "Directora Legal, LexCorp",
    image: "/images/testimonials/sofia.png",
    type: "Automatización"
  },
  {
    quote: "La calidad de los avatares generados para nuestros videos corporativos es indistinguible de la realidad.",
    highlight: "avatares generados",
    author: "Elena Torres",
    role: "Directora de Comunicación, GlobalCorp",
    image: "/images/testimonials/elena.png",
    type: "IA Generativa"
  },
  {
    quote: "Implementar agentes autónomos para la gestión de inventario ha optimizado nuestra logística un 200%.",
    highlight: "agentes autónomos",
    author: "Javier Ruiz",
    role: "COO, LogisticsPro",
    image: "/images/testimonials/javier.png",
    type: "Agentes IA"
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-24 bg-black text-white border-t border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-0 bg-zinc-900/30 border border-white/5 p-8 rounded-3xl relative group hover:border-[#82ff1f]/30 transition-colors snap-center flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#82ff1f]/20 mb-6 group-hover:text-[#82ff1f]/40 transition-colors" />

              <div className="mb-4">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-full">
                  {item.type}
                </span>
              </div>

              <p className="text-lg text-zinc-300 leading-relaxed mb-8 flex-grow">
                {item.quote.split(item.highlight).map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-[#82ff1f] font-medium">{item.highlight}</span>
                    )}
                  </React.Fragment>
                ))}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.author}</h4>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;