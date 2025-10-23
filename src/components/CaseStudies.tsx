// components/CaseStudies.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

/**
 * SECTION: CaseStudies
 * - id="casos-reales"
 * - Cards con KPI + carrusel móvil
 */

export default function CaseStudies() {
  const cases = [
    {
      icon: "🍗",
      title: "Llamadas y pedidos",
      desc: "Agente que atiende y toma pedidos por teléfono.",
      kpi: "+200 pedidos/mes"
    },
    {
      icon: "💆‍♂️",
      title: "Agenda por WhatsApp",
      desc: "Reservas, recordatorios y confirmaciones.",
      kpi: "–15 h/semana"
    },
    {
      icon: "👕",
      title: "Cobros automáticos",
      desc: "Recordatorios de pago y confirmación de pedidos.",
      kpi: "+20 % ventas"
    }
  ];

  return (
    <section id="casos-reales" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center"
        >
          Lo que ya están haciendo otros <span className="font-playfair">negocios</span>
        </motion.h2>
        <p className="text-gray-600 text-center mt-2">Ejemplos reales y resultados medibles.</p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid md:grid-cols-3 gap-6 overflow-x-auto snap-x md:overflow-visible"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition snap-start"
            >
              <div className="text-2xl" aria-hidden>{c.icon}</div>
              <h3 className="font-medium mt-3">{c.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{c.desc}</p>
              <span
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-sm px-3 py-1 mt-4"
                aria-label={`Resultado: ${c.kpi}`}
              >
                {c.kpi}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button
            label="Quiero hacer lo mismo en mi negocio"
            href="#contacto"
            ariaLabel="Ir a Contacto para replicar estos resultados"
            variant="primary"
          />
          <p className="text-sm text-gray-500 mt-2">Te respondemos en &lt; 24 h.</p>
        </div>
      </div>
    </section>
  );
}
