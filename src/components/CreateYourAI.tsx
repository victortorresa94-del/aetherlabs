// src/components/CreateYourAI.tsx
"use client";

/**
 * CreateYourAI.tsx
 * Sección: Crea tu IA (lead magnet mejorado)
 *
 * - 6 pasos
 * - Resultado final con nombre sugerido, 3 beneficios y "foto/premio"
 * - CTA WhatsApp prellenado con todas las respuestas
 * - Formulario para recibir la configuración por email (usa useFormStatus + sendLead)
 *
 * Instrucciones:
 * - Coloca este archivo en: src/components/CreateYourAI.tsx
 * - Asegúrate de tener: useFormStatus (src/hooks/useFormStatus.ts), sendLead (src/lib/sendLead.ts)
 * - Importa & usa en app/page.tsx como <CreateYourAI />
 *
 * TODO:
 * - Conectar sendLead con webhook n8n en src/lib/sendLead.ts
 * - Reemplazar imagen placeholder por foto real (public/...)
 */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import Button from "./Button";
import { useFormStatus } from "@/hooks/useFormStatus";
import { sendLead } from "@/lib/sendLead";

const WA_NUMBER = "34627281459"; // +34 627 281 459 -> 34627281459 (usa tu número aquí)

type Answers = {
  paso1?: string; // qué automatizar
  paso2?: string; // sector
  paso3?: string; // canal preferido
  paso4?: string; // tamaño negocio
  paso5?: string; // volumen/actividad mensual
  paso6?: string; // objetivo prioritario
};

export default function CreateYourAI() {
  // paso index (0..5)
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const { status, sendForm } = useFormStatus();
  const [showResult, setShowResult] = useState(false);

  // Para el formulario de contacto final
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");

  // Opciones por paso
  const paso1Opts = [
    "Atender llamadas",
    "Responder WhatsApps",
    "Enviar recordatorios/presupuestos",
    "Cobros y seguimiento",
    "Otro",
  ];
  const paso2Opts = ["Restaurante", "Clínica/Fisioterapia", "Tienda/Comercio", "Servicios", "Otro"];
  const paso3Opts = ["WhatsApp", "Email", "Llamada", "Web chat"];
  const paso4Opts = ["Micro (1-2)", "Pequeña (3-10)", "Mediana (11-50)", "Grande (50+)"];
  const paso5Opts = ["Bajo (0-100/m)", "Medio (100-1000/m)", "Alto (1000+/m)"];
  const paso6Opts = ["Ahorrar tiempo", "Aumentar ventas", "Mejorar atención", "Reducir costes", "Otro"];

  // Helper: actualizar respuesta
  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
  };

  // Avanza con validación
  const next = () => {
    // validar respuesta en step
    const keys: (keyof Answers)[] = ["paso1", "paso2", "paso3", "paso4", "paso5", "paso6"];
    if (!answers[keys[step]]) return; // no avanzar si no hay respuesta
    if (step < 5) setStep((s) => s + 1);
    else {
      // último paso -> mostrar resultado
      setShowResult(true);
      setStep(6);
    }
  };
  const back = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  // Generador simple para nombre sugerido y bullets según respuestas (puedes extender)
  const buildSuggestion = () => {
    const a = answers;
    // Logica heurística: combina sector + objetivo + canal
    const s2 = a.paso2 ?? "Negocio";
    const s1 = a.paso1 ?? "Asistente";
    const objective = a.paso6 ?? "Soporte";
    // nombre
    const name =
      s2 === "Restaurante"
        ? "Retail.AI"
        : s2 === "Clínica/Fisioterapia"
        ? "Fisio.AI"
        : s2 === "Tienda/Comercio"
        ? "Tienda.AI"
        : `${s2.replace(/\s/g, "")}.AI`;
    // título
    const title =
      name === "Retail.AI"
        ? "Retail.AI – Pedidos por teléfono"
        : name === "Fisio.AI"
        ? "Fisio.AI – Agenda por WhatsApp"
        : name === "Tienda.AI"
        ? "Tienda.AI – Cobros automáticos"
        : `${name} – Asistente multicanal`;

    // bullets recomendados
    let bullets: string[] = [];
    if (a.paso1 === "Atender llamadas" && a.paso2 === "Restaurante") {
      bullets = ["Toma pedidos y resuelve dudas", "Confirma horarios y disponibilidad", "Envía confirmación por WhatsApp"];
    } else if (a.paso1 === "Responder WhatsApps" && a.paso2 === "Clínica/Fisioterapia") {
      bullets = ["Reserva citas y envía recordatorios", "Responde preguntas frecuentes", "Confirma asistencia"];
    } else if (a.paso1 === "Cobros y seguimiento" && a.paso2 === "Tienda/Comercio") {
      bullets = ["Envía recordatorios de pago", "Confirma pedidos y stock", "Registra respuestas"];
    } else {
      bullets = [
        `${s1} por ${a.paso3 ?? "canal"} para ${objective}`,
        "Automatiza tareas repetitivas y ahorra tiempo",
        "Respuestas consistentes y disponibilidad 24/7",
      ];
    }

    return { name, title, bullets };
  };

  const { name: suggestedName, title: suggestedTitle, bullets: suggestedBullets } = buildSuggestion();

  // Generar texto prellenado para WhatsApp con TODAS las respuestas (para que te lleguen)
  const waMessage = () => {
    const lines = [
      `Nuevo lead - Crea tu IA (Aether Labs)`,
      ``,
      `Respuestas:`,
      `- ¿Qué automatizar?: ${answers.paso1 ?? "-"}`,
      `- Sector: ${answers.paso2 ?? "-"}`,
      `- Canal preferido: ${answers.paso3 ?? "-"}`,
      `- Tamaño negocio: ${answers.paso4 ?? "-"}`,
      `- Volumen mensual: ${answers.paso5 ?? "-"}`,
      `- Objetivo prioritario: ${answers.paso6 ?? "-"}`,
      ``,
      `Sugerencia generada: ${suggestedTitle}`,
      ``,
      `Contactar a: Nombre: [TU_NOMBRE], Email: [TU_EMAIL]`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  // Enviar lead via webhook usando sendLead + useFormStatus
  const handleSendLead = async () => {
    const payload = {
      source: "landing_createYourAI",
      answers,
      suggested: { name: suggestedName, title: suggestedTitle, bullets: suggestedBullets },
      contact: { name: leadName, email: leadEmail },
      createdAt: new Date().toISOString(),
    };

    // sendForm maneja status/loading/success/error (hook)
    sendForm(async () => {
      // sendLead debe estar implementado en src/lib/sendLead.ts -> POST a n8n webhook
      await sendLead(payload);
    });
  };

  return (
    <section id="crea-tu-ia" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Diseña tu IA en 1 minuto (ahora 6 pasos)</h2>
          <p className="text-gray-600 mt-3">Contesta 6 preguntas y te damos una IA configurada + propuesta en segundos.</p>
        </motion.div>

        {/* Progress bar (6 pasos) */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <div>Paso 1</div>
            <div>Paso 2</div>
            <div>Paso 3</div>
            <div>Paso 4</div>
            <div>Paso 5</div>
            <div>Paso 6</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
            <div
              aria-hidden
              className="h-2 bg-[#82FF1F] transition-all"
              style={{ width: `${Math.min(100, (step / 6) * 100 + (showResult ? 100 : 0))}%` }}
            />
          </div>
        </div>

        {/* CARD / CONTAINER */}
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <AnimatePresence initial={false} mode="wait">
            {/* Steps (0..5) */}
            {step <= 5 && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Step content selector */}
                {step === 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿Qué te gustaría automatizar?</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {paso1Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso1", o)}
                          className={`text-left px-4 py-3 rounded-lg border ${
                            answers.paso1 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200 bg-white"
                          }`}
                          aria-pressed={answers.paso1 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿En qué sector trabajas?</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {paso2Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso2", o)}
                          className={`text-left px-4 py-3 rounded-lg border ${
                            answers.paso2 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200 bg-white"
                          }`}
                          aria-pressed={answers.paso2 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿Cómo prefieres que te contactemos?</h3>
                    <div className="flex gap-3 flex-wrap">
                      {paso3Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso3", o)}
                          className={`px-4 py-2 rounded-lg border ${answers.paso3 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200"}`}
                          aria-pressed={answers.paso3 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿Tamaño aproximado de tu negocio?</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {paso4Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso4", o)}
                          className={`text-left px-4 py-3 rounded-lg border ${
                            answers.paso4 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200 bg-white"
                          }`}
                          aria-pressed={answers.paso4 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿Cuál es tu volumen de actividad mensual?</h3>
                    <div className="flex gap-3 flex-wrap">
                      {paso5Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso5", o)}
                          className={`px-4 py-2 rounded-lg border ${answers.paso5 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200"}`}
                          aria-pressed={answers.paso5 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 5 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">¿Cuál es tu objetivo prioritario?</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {paso6Opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => setAnswer("paso6", o)}
                          className={`text-left px-4 py-3 rounded-lg border ${
                            answers.paso6 === o ? "border-[#82FF1F] bg-[#f7ffec]" : "border-gray-200 bg-white"
                          }`}
                          aria-pressed={answers.paso6 === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Navigation */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={back}
                    className="px-4 py-2 rounded-lg border text-sm"
                    aria-label="Atrás"
                    disabled={step === 0}
                  >
                    Atrás
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-500 hidden sm:block">Paso {Math.min(6, step + 1)} de 6</div>
                    <Button
                      label={step === 5 ? "Ver resultado" : "Siguiente"}
                      onClick={next}
                      variant="primary"
                      ariaLabel={step === 5 ? "Ver resultado" : "Siguiente paso"}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Resultado final */}
            {showResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <div className="inline-block rounded-lg overflow-hidden mb-4">
                    {/* Placeholder imagen "premio" */}
                    <div className="w-full h-44 md:h-56 bg-gradient-to-r from-[#82FF1F]/10 via-transparent to-[#007AFF]/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Premio</div>
                        <div className="text-xl font-bold">{suggestedTitle}</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold">{suggestedTitle}</h3>
                  <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Esta IA está pensada para {answers.paso2 ?? "tu negocio"} y optimizada para {answers.paso6 ?? "tus objetivos"}.
                  </p>

                  {/* Beneficios */}
                  <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto">
                    {suggestedBullets.map((b, i) => (
                      <li key={i} className="rounded-lg border p-3 bg-white shadow-sm">
                        <div className="font-semibold">{b}</div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA: WhatsApp + Recibir por email */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waMessage()}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#82FF1F] text-black font-semibold hover:scale-[1.03] transition"
                      aria-label="Contactar por WhatsApp con toda la información"
                    >
                      💬 Enviar a WhatsApp (recibiré tus respuestas)
                    </a>

                    {/* Small form to capture name/email and send via webhook */}
                    <div className="w-full sm:w-auto">
                      <div className="rounded-lg border p-4 bg-gray-50">
                        <div className="text-sm text-gray-600 mb-2">Recibe la configuración por email</div>
                        <input
                          aria-label="Tu nombre"
                          placeholder="Tu nombre"
                          className="w-full px-3 py-2 rounded-md border mb-2"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                        />
                        <input
                          aria-label="Tu email"
                          placeholder="Tu email"
                          className="w-full px-3 py-2 rounded-md border mb-2"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                        />

                        <div className="flex gap-2">
                          <Button
                            label={
                              status === "loading"
                                ? "Enviando..."
                                : status === "success"
                                ? "Enviado ✅"
                                : "Recibir por email"
                            }
                            onClick={() => {
                              // validar
                              if (!leadEmail || !leadName) {
                                alert("Por favor indica nombre y email para recibir la configuración.");
                                return;
                              }
                              handleSendLead();
                            }}
                            variant="primary"
                          />
                          <a
                            href={`mailto:tu@correo.com?subject=${encodeURIComponent("Nueva configuración IA")}&body=${encodeURIComponent(
                              `Respuestas:\n${JSON.stringify(answers, null, 2)}\n\nSugerencia: ${suggestedTitle}`
                            )}`}
                            className="px-4 py-2 rounded-lg border text-sm inline-flex items-center"
                          >
                            Enviar por email (mi cuenta)
                          </a>
                        </div>

                        <div className="text-xs text-gray-500 mt-2">
                          Sin spam. Solo te mandaremos tu configuración básica. // TODO: conectar con n8n + DeepSeek
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary / export (copiar) */}
                  <div className="mt-5 text-sm text-gray-600">
                    <strong>Resumen (para ti):</strong> {answers.paso1}, {answers.paso2}, {answers.paso3}.{" "}
                    <em>Nombre sugerido:</em> {suggestedName}.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
