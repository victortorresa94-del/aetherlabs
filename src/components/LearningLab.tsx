// components/LearningLab.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

export default function LearningLab() {
  const courses = [
    {
      title: "Curso Gratuito",
      subtitle: "YouTube • 45min",
      desc: "Crea tu primera IA en 15 minutos. ChatGPT + prompts mágicos para principiantes.",
      price: "Gratis",
      kpi: "47 alumnos ya inscritos",
      color: "bg-white"
    },
    {
      title: "Iniciación IA",
      subtitle: "3h",
      desc: "Aprende a usar IA para tu negocio. Prompts, automatizaciones y casos reales.",
      price: "A partir de 99€",
      kpi: "+35% tiempo ahorrado",
      color: "bg-gray-50"
    },
    {
      title: "Empresas",
      subtitle: "6h",
      desc: "Forma a tu equipo de forma 100% personalizada 1:1 para tu sector. IA a medida + soporte 30 días.",
      price: "A partir de 599€",
      kpi: "95% éxito implementado",
      color: "bg-white"
    }
  ];

  return (
    <section id="learning-lab" className="section bg-gray-50">
      <div className="container">

        {/* HERO LEARNING LABORATORY */}
        <div className="py-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="inline-flex items-center space-x-4">
              <span className="text-7xl md:text-8xl font-playfair">Learning</span>
              <span className="text-5xl md:text-5xl font-inter font-bold">Laboratory</span>
            </h1>
          </motion.div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12 h-96">
          <img
            src="/images/learning-lab.png"
            alt="Learning Lab"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Aprende IA <span className="font-playfair">desde cero</span>.
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Cursos prácticos para tu negocio. Copia → Pega → Ganas dinero.
              </p>
            </div>
          </div>
        </div>

        {/* 3 CARDS GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className={`rounded-2xl ${course.color} p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200`}>
                
                {/* TÍTULO PLAYFAIR */}
                <h3 className="text-xl font-playfair mb-2">{course.title}</h3>
                
                {/* SUBTÍTULO */}
                <p className="text-sm text-gray-500 mb-4">{course.subtitle}</p>

                {/* DESCRIPCIÓN */}
                <p className="text-gray-600 mb-6 leading-relaxed">{course.desc}</p>

                {/* KPI VERDE */}
                <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 text-xs px-3 py-1 rounded-full mb-6 font-medium">
                  📈 {course.kpi}
                </div>

                {/* PRECIO IZQUIERDA + CTA DERECHA */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className={`text-xl font-bold ${course.price === "Gratis" ? "text-green-600" : "text-gray-800"}`}>
                      {course.price}
                    </span>
                  </div>
                  <Button
                    label="Aprender"
                    href="#contacto"
                    variant="primary"
                    className="w-28"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* STATS BAR - BLANCO/VERDE */}
        <div className="bg-white border border-green-100 text-gray-800 py-8 rounded-2xl mb-8 shadow-sm">
          <div className="container grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">47</div>
              <div className="text-sm text-gray-600">Alumnos formados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">4.8/5</div>
              <div className="text-sm text-gray-600">Valoración</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Éxito implementado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">12h</div>
              <div className="text-sm text-gray-600">Respuesta soporte</div>
            </div>
          </div>
        </div>

        {/* TEXTO FINAL */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu negocio?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Acceso inmediato • Videos HD • Plantillas listas • Soporte WhatsApp
          </p>
          <Button label="Aprender" href="#contacto" variant="primary" size="large" />
        </div>

      </div>
    </section>
  );
}