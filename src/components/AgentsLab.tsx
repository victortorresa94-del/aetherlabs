// components/AgentsLab.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

export default function AgentsLab() {
  const bullets = [
    "Atiende llamadas cuando tú no puedes",
    "Responde dudas por WhatsApp y web",
    "Agenda citas y envía recordatorios",
    "Prepara y envía presupuestos",
    "Gestiona cobros y seguimiento",
    "Integra con tu CRM y herramientas"
  ];

  const cases = [
    {
      icon: "https://static.vecteezy.com/system/resources/previews/020/398/629/non_2x/restaurant-building-icon-in-simple-black-design-isolated-on-white-background-free-vector.jpg",
      title: "Restauración",
      desc: "Un agente que toma pedidos, resuelve dudas y gestiona reservas en tiempo real.",
      kpi1: "+200 pedidos/mes",
      kpi2: "+35% satisfacción"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2645/2645358.png",
      title: "Sanidad",
      desc: "Un agente que reserva citas, envía recordatorios y confirmaciones automáticas.",
      kpi1: "–15 h/semana",
      kpi2: "+25% puntualidad"
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/034/371/612/non_2x/simple-shop-icon-retail-icon-vector.jpg",
      title: "Retail",
      desc: "Un agente que gestiona recordatorios, confirmaciones de pago y seguimiento de ventas.",
      kpi1: "+20% ventas",
      kpi2: "–40% carritos abandonados"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2939/2939872.png",
      title: "Belleza",
      desc: "Un agente que reserva citas, envía recordatorios y gestiona clientes recurrentes.",
      kpi1: "+30% ocupación",
      kpi2: "+18% retención"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2939/2939874.png",
      title: "Fitness",
      desc: "Un agente que reserva clases, gestiona membresías y envía recordatorios de pago.",
      kpi1: "–10 h/semana",
      kpi2: "+22% inscripciones"
    }
  ];

  return (
    <section id="ai-agents-lab" className="section bg-gray-50">
      <div className="container">

        {/* HERO AGENTS LABORATORY - ENCIMA IMAGEN */}
        <div className="py-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="inline-flex items-center space-x-4">
              <span className="text-7xl md:text-8xl font-playfair">Agents</span>
              <span className="text-5xl md:text-5xl font-inter font-bold">Laboratory</span>
            </h1>
          </motion.div>
        </div>

        {/* IMAGEN PRINCIPAL - TEXTO RECUPERADO */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 h-96">
          <img
            src="/images/agents-lab.png"
            alt="AI Agents Lab"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center text-white max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Crea tu asistente con inteligencia <span className="font-playfair">artificial</span>.
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Un agente que atiende llamadas, responde WhatsApps, envía presupuestos o cobra facturas.
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUE PRINCIPAL: CHECKLIST | ROBOT | CHAT */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* IZQUIERDA: CHECKLIST */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 mt-1">✔️</span>
                  <span className="text-base">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CENTRO: ROBOT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block"
          >
            <img 
              src="/images/agent.png" 
              alt="AI Agent" 
              className="w-56 h-72 object-contain bg-transparent mx-auto"
            />
          </motion.div>

          {/* DERECHA: CHAT + BOTÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-1 flex flex-col"
          >
            <div className="rounded-2xl border bg-white p-4 shadow-sm mb-6">
              <div className="flex gap-2 mb-3 text-xs">
                <div className="px-2 py-1 rounded-full bg-gray-200">Llamada</div>
                <div className="px-2 py-1 rounded-full bg-gray-100">WhatsApp</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded-lg bg-gray-100 w-fit">📞 Entrando llamada...</div>
                <div className="p-2 rounded-lg bg-[#82FF1F]/20 w-fit">IA: "Hola, ¿quieres reservar mesa?"</div>
                <div className="p-2 rounded-lg bg-gray-100 w-fit animate-pulse">Cliente escribiendo...</div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button label="Crear mi agente" href="/agents-lab" variant="primary" className="w-48" />
            </div>
          </motion.div>
        </div>

        {/* 5 CARDS HORIZONTAL */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold flex items-center mb-2">
                <img src={c.icon} alt={c.title} className="w-5 h-5 mr-2" />
                {c.title}
              </h3>
              <p className="text-gray-600 text-xs leading-tight mb-3">{c.desc}</p>
              <div className="space-y-1">
                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-xs px-2 py-1">
                  {c.kpi1}
                </span>
                <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 text-xs px-2 py-1">
                  {c.kpi2}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}