"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProcessSteps = () => {
  const steps = [
    {
      step: "01",
      title: "Análisis y Estrategia",
      desc: "Analizamos tu situación actual, identificamos cuellos de botella y definimos dónde la IA tendrá mayor impacto."
    },
    {
      step: "02",
      title: "Diseño de Solución",
      desc: "Creamos un plan a medida, seleccionando las herramientas y modelos (LLMs, Agentes, Vision) perfectos para ti."
    },
    {
      step: "03",
      title: "Desarrollo e Implementación",
      desc: "Construimos y desplegamos la solución. Integramos chatbots, automatizaciones o generadores de contenido en tu flujo."
    },
    {
      step: "04",
      title: "Formación y Adopción",
      desc: "No solo te damos la tecnología, te enseñamos a usarla. Formamos a tu equipo para garantizar el éxito."
    },
    {
      step: "05",
      title: "Optimización Continua",
      desc: "La IA avanza rápido. Monitorizamos los resultados y actualizamos los sistemas para que siempre estés a la vanguardia."
    }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Nuestro Proceso
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Un método probado para transformar ideas en soluciones de IA tangibles y rentables.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-[#1a1a1a] z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#82ff1f] rounded-full" />
              </div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <span className="text-xs font-bold text-[#82ff1f] tracking-widest mb-2 block">FASE {item.step}</span>
                <h3 className="text-2xl font-light text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;