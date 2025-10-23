// components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import Button from "./Button";
import Toast from "./Toast";
import { useFormStatus } from "@/hooks/useFormStatus";
import { sendLead } from "@/lib/sendLead";

/**
 * SECTION: Contact
 * - id="contacto"
 * - Form + CTA WhatsApp
 * - Validación ligera + toasts
 */

const WA_NUMBER = "34627281459";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Quiero%20automatizar%20mi%20negocio`;

export default function Contact() {
  // Campos
  const [nombre, setNombre] = useState("");
  const [sector, setSector] = useState("");
  const [necesidad, setNecesidad] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // Estados UI
  const { status, sendForm, setStatus } = useFormStatus();
  const [toast, setToast] = useState<{open:boolean; type:"success"|"error"|"info"; message:string|null}>({
    open: false, type: "success", message: null
  });

  const validate = () => {
    if (!nombre || !sector || !necesidad || !email || !email.includes("@")) return false;
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setToast({ open: true, type: "error", message: "Por favor, completa los campos obligatorios con un email válido." });
      setTimeout(() => setToast((t) => ({ ...t, open: false })), 2500);
      return;
    }
    await sendForm(async () => {
      // Simula red
      await new Promise((r) => setTimeout(r, 900));

      // TODO: activar cuando tengas webhook:
      // await sendLead({
      //   nombre,
      //   sector,
      //   necesidad,
      //   email,
      //   telefono,
      //   origen: "Contact Form"
      // });

      setToast({ open: true, type: "success", message: "Enviado. Te contactaremos en menos de 24 h." });
      setTimeout(() => setToast((t) => ({ ...t, open: false })), 2500);

      // Limpia
      setNombre("");
      setSector("");
      setNecesidad("");
      setEmail("");
      setTelefono("");
      setStatus("idle");
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        {/* Copy/trust */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold">Cuéntanos qué quieres <span className="font-playfair">automatizar</span></h2>
          <p className="text-gray-600 mt-3">
            Te enviaremos una propuesta clara y concreta para implementarlo hoy.
          </p>

          <ul className="mt-6 text-sm text-gray-500 space-y-2">
            <li>• Sin contratos largos.</li>
            <li>• Precios claros.</li>
            <li>• Soporte por WhatsApp.</li>
          </ul>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={onSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium">Nombre *</label>
              <input
                id="nombre"
                required
                aria-label="Nombre"
                className="w-full mt-1 px-3 h-11 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="sector" className="block text-sm font-medium">Negocio o sector *</label>
              <input
                id="sector"
                required
                aria-label="Negocio o sector"
                className="w-full mt-1 px-3 h-11 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="Restaurante, Clínica, Tienda…"
              />
            </div>

            <div>
              <label htmlFor="necesidad" className="block text-sm font-medium">¿Qué quieres automatizar? *</label>
              <textarea
                id="necesidad"
                required
                aria-label="Qué quieres automatizar"
                className="w-full mt-1 px-3 min-h-[100px] rounded-md border border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
                value={necesidad}
                onChange={(e) => setNecesidad(e.target.value)}
                placeholder="Ej.: atender llamadas, responder WhatsApps, enviar recordatorios…"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email *</label>
              <input
                id="email"
                type="email"
                required
                aria-label="Email"
                className="w-full mt-1 px-3 h-11 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium">Teléfono/WhatsApp (opcional)</label>
              <input
                id="telefono"
                aria-label="Teléfono o WhatsApp"
                className="w-full mt-1 px-3 h-11 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej.: 627 281 459"
              />
            </div>

            {/* Estados de envío */}
            <div className="mt-2 grid sm:grid-cols-2 gap-3">
              {status === "loading" ? (
                <button disabled className="h-11 rounded-lg bg-gray-300 text-gray-600">Enviando...</button>
              ) : status === "success" ? (
                <button disabled className="h-11 rounded-lg bg-green-500 text-white">Enviado ✅</button>
              ) : status === "error" ? (
                <button disabled className="h-11 rounded-lg bg-red-500 text-white">Error</button>
              ) : (
                <Button label="Enviar y recibir propuesta" variant="primary" ariaLabel="Enviar formulario" />
              )}

              <Button
                label="Hablar ahora por WhatsApp"
                href={WA_URL}
                ariaLabel="Abrir chat de WhatsApp"
                variant="secondary"
                className="hover:bg-[#5BA8A0] hover:text-black"
              />
            </div>

            <p className="text-xs text-gray-500">
              // TODO: reCAPTCHA v3 u otra solución antispam · // TODO: enviar POST a webhook n8n · // TODO: DeepSeek + CRM
            </p>
          </div>

          {/* Toast */}
          <Toast
            open={toast.open}
            type={toast.type}
            message={toast.message}
            onClose={() => setToast((t) => ({ ...t, open: false }))}
          />
        </motion.form>
      </div>
    </section>
  );
}
