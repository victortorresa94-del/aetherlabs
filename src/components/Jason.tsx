// components/CreateYourAIChat.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { useEffect } from "react";

export default function CreateYourAIChat() {
  useEffect(() => {
    // Cargar el script de ElevenLabs
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    // Añadir al head en lugar del body
    document.head.appendChild(script);

    // Crear el elemento del widget después de que el script se cargue
    script.onload = () => {
      // Verificar si el elemento ya existe
      if (!document.querySelector('elevenlabs-convai')) {
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_7901k85nn7wyfynsqgs4qym0h48t');
        document.body.appendChild(widget);
      }
    };

    return () => {
      // Limpiar al desmontar
      const existingWidget = document.querySelector('elevenlabs-convai');
      if (existingWidget) {
        existingWidget.remove();
      }
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="crea-tu-ia-chat" className="section bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container">
        
        {/* HERO TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-inter">Crea tu</span>{' '}
            <span className="font-playfair">IA personalizada</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Habla con Jason, nuestro asistente de voz con IA. Pulsa el botón y cuéntale qué necesitas
          </p>
        </motion.div>

        {/* MAIN CONTENT: CENTERED CARD */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          
          {/* CARD CON IMAGEN Y CONTENIDO */}
          <motion.div 
            variants={fadeUp}
            className="rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <div className="grid md:grid-cols-2">
              
              {/* LEFT: IMAGE */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/jason-avatar.png"
                  alt="Jason - Asistente de voz de Aether Labs"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#82FF1F] flex items-center justify-center">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair">
                        Jason
                      </h3>
                      <p className="text-white/80 text-sm">Asistente de voz IA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: CONTENT */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Habla con Jason en <span className="font-playfair">tiempo real</span>
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Jason es nuestro asistente de voz con inteligencia artificial. Habla con él como si fuera una persona y te ayudará a diseñar tu agente de IA perfecto.
                </p>

                {/* BENEFITS */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#82FF1F] text-xl mt-0.5">✓</span>
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Conversación por voz</strong> • Habla naturalmente, sin escribir
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#82FF1F] text-xl mt-0.5">✓</span>
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Respuestas instantáneas</strong> • Jason entiende y responde al momento
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#82FF1F] text-xl mt-0.5">✓</span>
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Propuesta personalizada</strong> • Recibe tu configuración y presupuesto
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-[#82FF1F]/20 to-[#75c4af]/20 p-5 border-2 border-[#82FF1F]/40">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        ¿Cómo empezar?
                      </p>
                      <p className="text-sm text-gray-700">
                        Busca el botón flotante de <strong>Jason</strong> en la esquina inferior derecha de tu pantalla y pulsa para empezar a hablar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* INFO ADICIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <span>🔒</span>
              <span>Conversación segura y cifrada • Tus datos están protegidos</span>
            </div>
          </motion.div>

          {/* ALTERNATIVA DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-600">
              ¿Prefieres escribir?{' '}
              <a 
                href="#contacto" 
                className="text-[#75c4af] hover:underline font-semibold"
              >
                Ir a contacto
              </a>
              {' '}o{' '}
              <a 
                href="https://wa.me/34627281459" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#75c4af] hover:underline font-semibold"
              >
                WhatsApp
              </a>
            </p>
          </motion.div>

        </motion.div>
        

      </div>
    </section>
    
  );
}