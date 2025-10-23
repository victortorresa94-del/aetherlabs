// src/components/AgentDemoModal.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

/**
 * Modal demo para probar el agente "LAURA".
 * - Lee public/agents/laura.json
 * - Muestra welcome text y permite escribir mensajes
 * - Respuestas son simuladas (placeholder). Reemplazar con API Retell cuando esté listo.
 *
 * Cómo usar:
 * - Importar <AgentDemoModal /> en AgentsLab y controlar su visibilidad con un useState local.
 */

type AgentJson = {
  agent_name?: string;
  conversationFlow?: {
    nodes?: Array<any>;
    start_node_id?: string;
  };
};

export default function AgentDemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [agentJson, setAgentJson] = useState<AgentJson | null>(null);
  const [messages, setMessages] = useState<{ from: "agent" | "user"; text: string; id?: string }[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // Carga JSON desde public
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch("/agents/laura.json")
      .then((r) => r.json())
      .then((j: AgentJson) => {
        setAgentJson(j);
        // extraer start node text si existe
        const startId = j?.conversationFlow?.start_node_id;
        const startNode = j?.conversationFlow?.nodes?.find((n: any) => n.id === startId);
        // fallback: buscar first node with static_text/instruction.text
        let welcome = "Hola — soy tu asistente. ¿En qué puedo ayudarte?";
        if (startNode?.instruction?.text) welcome = startNode.instruction.text;
        if (startNode?.instruction?.type === "static_text" && startNode.instruction.text) welcome = startNode.instruction.text;
        setMessages([{ from: "agent", text: welcome }]);
      })
      .catch((e) => {
        console.error("Error cargando JSON agente demo:", e);
        setMessages([{ from: "agent", text: "Demo no disponible. Intenta más tarde." }]);
      })
      .finally(() => setLoading(false));
  }, [open]);

  // Simula respuesta del agente (placeholder)
  const simulateAgentResponse = async (userText: string) => {
    setTyping(true);
    await new Promise((r) => setTimeout(r, 700 + Math.random() * 600)); // pequeño delay
    // Opciones de respuesta simple (puedes ampliar)
    const lowered = userText.toLowerCase();
    let reply = "Perdona, soy una demo. Puedo ayudarte con reservas, horarios y servicios. ¿Qué necesitas?";
    if (lowered.includes("cita") || lowered.includes("reserv")) {
      reply = "Perfecto. ¿Qué servicio necesitas y cuándo te vendría bien la cita?";
    } else if (lowered.includes("horario") || lowered.includes("hora")) {
      reply = "Abrimos de L a V de 9:00 a 19:00. ¿Quieres que te reserve una franja?";
    } else if (lowered.includes("servicio") || lowered.includes("fisioter")) {
      reply = "Ofrecemos medicina general, odontología y fisioterapia. ¿Cuál te interesa?";
    } else if (lowered.length < 3) {
      reply = "¿Puedes darme un poco más de detalle?";
    } else {
      // eco corto + CTA demo
      reply = `Entendido: "${userText}". (Esto es una demo — para una versión real conecta el agente Retell). ¿Quieres que te reserve una cita de prueba?`;
    }

    setTyping(false);
    setMessages((m) => [...m, { from: "agent", text: reply }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    // simulate
    simulateAgentResponse(text);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="fixed left-1/2 top-1/2 z-50 max-w-2xl w-[92%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Demo agente Laura"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="font-semibold">Laura — Demo Centro Médico</div>
                <div className="text-sm text-gray-500">Asistente de demo. No es un agente real (aún).</div>
              </div>
              <div className="ml-auto">
                <Button label="Cerrar" variant="secondary" onClick={onClose} ariaLabel="Cerrar demo" />
              </div>
            </div>

            <div className="border rounded-xl p-4 mb-4 h-[360px] overflow-y-auto" id="agent-demo-scroll">
              {/* mensajes */}
              <div className="flex flex-col gap-3">
                {messages.map((m, i) => (
                  <div key={i} className={m.from === "agent" ? "self-start" : "self-end"}>
                    {m.from === "agent" ? (
                      <div className="inline-block bg-[#f1fff0] text-black rounded-lg px-4 py-2 max-w-[85%]">
                        {m.text}
                      </div>
                    ) : (
                      <div className="inline-block bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-[85%]">
                        {m.text}
                      </div>
                    )}
                  </div>
                ))}

                {typing && (
                  <div className="self-start">
                    <div className="inline-block bg-[#f1fff0] rounded-lg px-4 py-2">
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <input
                aria-label="Escribe un mensaje"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border rounded-lg h-11 px-4 focus:outline-none focus:ring-2 focus:ring-[#82FF1F]/30"
                placeholder="Escribe tu pregunta a Laura..."
              />
              <Button label="Enviar" variant="primary" onClick={handleSend} ariaLabel="Enviar mensaje demo" />
            </div>

            <div className="text-xs text-gray-400 mt-3">
              <strong>Nota:</strong> Esto es una demo local. Para conectar con el agente real de Retell hay que integrar su API/SDK.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
