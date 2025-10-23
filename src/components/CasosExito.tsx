// components/CasosExito.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

const casos = [
  {
    empresa: "Grupo Saona",
    sector: "Restauración",
    resumen: "Automatización de propuestas, procesos internos y atención al cliente con Copilot de Microsoft.",
    resultado: "+30% eficiencia operativa",
    fuente: "Repsol + Microsoft"
  },
  {
    empresa: "Repsol",
    sector: "Energía",
    resumen: "Uso de copilotos para acelerar documentos legales, marketing y soporte.",
    resultado: "+40% velocidad en procesos internos",
    fuente: "Microsoft Blog"
  },
  {
    empresa: "BTOB",
    sector: "Publicidad",
    resumen: "60 modelos de IA personalizados para creatividad, gestión y atención.",
    resultado: "–70% tareas administrativas",
    fuente: "PublicidAD"
  },
  {
    empresa: "Clínica dental (España)",
    sector: "Sanidad",
    resumen: "Chatbot 24/7 para agendar, confirmar citas y responder dudas por WhatsApp.",
    resultado: "+20% ingresos mensuales",
    fuente: "Odontonet"
  },
  {
    empresa: "Bufetes Vigo",
    sector: "Legal",
    resumen: "Asistente IA para redactar demandas y automatizar procesos jurídicos repetitivos.",
    resultado: "+50% productividad legal",
    fuente: "La Voz de Galicia"
  },
  {
    empresa: "Tienda Natural Huelva",
    sector: "Retail",
    resumen: "IA generativa para marketing digital, email personalizado y posicionamiento SEO.",
    resultado: "+tráfico, +engagement",
    fuente: "Universidad de Salamanca"
  }
];

export default function CasosExito() {
  return (
    <section id="casos-reales" className="section bg-gray-50 py-20">
      <div className="container">
        {/* Título */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold">
            Lo que ya están haciendo <span className="font-playfair">otros negocios</span>
          </motion.h2>
        </motion.div>

        {/* Cards de casos */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {casos.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-1">{c.empresa}</h3>
              <p className="text-sm text-gray-500 mb-2">{c.sector}</p>
              <p className="text-gray-700 mb-4 leading-relaxed">{c.resumen}</p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600 mb-2">
                📈 {c.resultado}
              </div>
              <div className="text-xs text-gray-400">Fuente: {c.fuente}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <Button label="Quiero un caso como estos" href="#contacto" variant="primary" />
        </div>
      </div>
    </section>
  );
}
