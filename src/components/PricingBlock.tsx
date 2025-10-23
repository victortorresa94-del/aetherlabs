// components/PricingBlock.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

/**
 * SECTION: PricingBlock
 * - id="planes"
 * - Tres planes: Starter, Pro, Creative
 * - CTA a Contacto (o futuro Stripe)
 */

const plans = [
  {
    icon: "💡",
    name: "Plan Starter",
    features: [
      "Agente básico para atender llamadas o WhatsApps.",
      "Configuración inicial + guía de uso."
    ],
    price: "99 €",
    cta: "Empezar ahora"
  },
  {
    icon: "⚙️",
    name: "Plan Pro",
    features: [
      "Agente avanzado + personalización + dashboard simple.",
      "Incluye entrenamiento básico para el equipo."
    ],
    price: "249 €",
    cta: "Solicitar configuración"
  },
  {
    icon: "🎨",
    name: "Plan Creative",
    features: [
      "Pack de 5 anuncios creados con IA.",
      "Entrega en 48 h. Incluye revisión."
    ],
    price: "999 €",
    cta: "Encargar pack"
  }
];

export default function PricingBlock() {
  return (
    <section id="planes" className="section bg-gray-900 text-white">
      <div className="container text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Elige tu plan y empieza <span className="font-playfair">hoy</span>.
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Sin complicaciones. Precios cerrados y resultados reales.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-gray-700 bg-gray-800 p-8 text-left"
            >
              <div className="text-3xl" aria-hidden>{p.icon}</div>
              <h3 className="text-xl font-medium mt-3">{p.name}</h3>

              <ul className="mt-4 space-y-2 text-gray-200">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#75c4af]" aria-hidden>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <div className="text-2xl font-extrabold">{p.price}</div>
              </div>

              <Button
                label={p.cta}
                href="#contacto"
                ariaLabel={`${p.cta} desde Pricing`}
                variant="primary"
                className="mt-6"
              />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-gray-300 mt-8">
          ¿Tienes otra idea? Escríbenos y te hacemos un plan a medida.
        </p>
      </div>
    </section>
  );
}
