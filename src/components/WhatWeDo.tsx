// components/WhatWeDo.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/utils/animations";
import Button from "./Button";
import Link from "next/link";


export default function WhatWeDo() {
  const cards = [
    {
      title: "Agents Lab",
      desc: "Agentes IA que atienden llamadas, responden WhatsApp y automatizan tu negocio 24/7",
      href: "/agents-lab",
      img: "/images/ai-agents-lab.png"
    },
    {
      title: "Creative Lab",
      desc: "Anuncios, imágenes y vídeos generados con IA, listos para publicar en 48h",
      href: "/creative-lab",
      img: "/images/creative-lab.png"
    },
    {
      title: "Learning Lab",
      desc: "Cursos prácticos de IA desde cero para autónomos y empresas",
      href: "#learning-lab",
      img: "/images/learning-lab.png"
    }
  ];

  return (
    <section id="que-hacemos" className="section bg-white py-20">
      <div className="container">
        
        {/* HERO - ALINEADO IZQUIERDA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-4">
            <span className="font-inter">Qué es</span>{' '}
            <span className="font-playfair">Aether Labs</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeUp} 
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            Creamos tecnología de última generación en nuestros laboratorios, donde contamos con 
            las mejores herramientas para hacer anuncios, agentes IA o formaciones completamente 
            personalizadas para ti. Contamos con <strong>3 laboratorios especializados</strong>:
          </motion.p>
        </motion.div>

        {/* 3 CARDS GRID - ALINEADAS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* IMAGEN CON TÍTULO + CTA DENTRO */}
                <div className="relative h-64">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
                  
                  {/* TÍTULO PLAYFAIR */}
                  <div className="absolute top-8 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-playfair text-white drop-shadow-lg">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* DESCRIPCIÓN */}
                  <div className="absolute bottom-28 left-6 right-6">
                    <p className="text-sm text-white/95 leading-relaxed drop-shadow-md">
                      {card.desc}
                    </p>
                  </div>
                  
                  {/* CTA BOTÓN BLANCO TRANSPARENTE */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <Button
                      label="Ver Lab"
                      variant="outline-white"
                      href={card.href}
                      size="sm"
                      className="w-full border-white/80 text-white hover:bg-white/20 backdrop-blur-sm"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}