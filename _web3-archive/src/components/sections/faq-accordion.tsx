"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es Aether Labs?",
    answer: "Somos una agencia especializada en hacer que la inteligencia artificial sea accesible para todos. Convertimos tecnología compleja en herramientas simples y efectivas que cualquiera puede usar.",
  },
  {
    question: "¿Qué son los 'Automatizadores con IA'?",
    answer: "Son asistentes digitales inteligentes que hacen tareas repetitivas por ti. Por ejemplo, pueden responder correos, procesar documentos, gestionar citas o analizar datos. Todo sin necesidad de que tú sepas programar.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Para nada. Ese es precisamente nuestro objetivo: hacer que la IA sea tan fácil de usar como cualquier otra herramienta. Nosotros nos encargamos de toda la parte técnica.",
  },
  {
    question: "¿Qué son los Laboratorios Aether Labs?",
    answer: "Es nuestro espacio de experimentación donde puedes probar herramientas de IA, crear contenido y aprender cómo funciona todo esto. Es como un patio de juegos donde la curiosidad es bienvenida.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar una solución?",
    answer: "Depende del proyecto. Algunas soluciones simples pueden estar listas en días, mientras que proyectos más complejos pueden tomar semanas. Siempre te damos una estimación clara desde el principio.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer: "Sí, incluimos soporte y capacitación para que sepas usar tu solución al máximo. También ofrecemos mantenimiento continuo si lo necesitas.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer: "Absolutamente. Desde emprendedores individuales hasta grandes empresas. Adaptamos nuestras soluciones a tus necesidades y presupuesto.",
  },
  {
    question: "¿Cómo empiezo?",
    answer: "Simplemente contáctanos. Agendamos una llamada donde nos cuentas qué necesitas, y nosotros te explicamos cómo podemos ayudarte. Sin compromiso.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-black">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left transition-colors hover:text-gray-600"
              >
                <span className="text-lg font-medium text-black pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-600 leading-relaxed pr-12">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;