// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const WA_NUMBER = "34627281459";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Aether%20Labs%20quiero%20hablar%20con%20el%20equipo`;

export default function Hero() {
  return (
    <section 
      className="bg-white text-black pt-32 md:pt-48" // ← ESPACIO A LA FUERZA
      style={{ paddingTop: "8rem" }} // ← +128px INAMOVIBLE
    >
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left py-8"
        >
          <h1 className="text-4xl md:text-6xl leading-tight">
            El futuro es <span className="font-playfair">hoy</span>.
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Crea tu propia inteligencia artificial en 1 minuto.
          </p>
          <p className="mt-2 text-base text-black/60">
            Automatiza tu negocio y libera tu tiempo para las tareas que realmente necesitas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
            <Button
              label="Crear mi IA ahora"
              href="#crea-tu-ia"
              ariaLabel="Ir a la sección Crea tu IA"
              variant="primary"
            />
            <Button
              label="Hablar con el equipo"
              href={WA_URL}
              ariaLabel="Hablar por WhatsApp con el equipo de Aether Labs"
              variant="secondary"
            />
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block"
        >
          <img 
            src="/images/gameboy-hero.png" 
            alt="Gameboy Hero"
            className="w-full max-w-md h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}