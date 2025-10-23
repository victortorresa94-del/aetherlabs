// src/components/AIHubImplementation.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";



/**
 * AIHubImplementation (v4)
 * - Título grande como "Crea tu IA personalizada"
 * - Playfair en "Implementation" y en la 2ª palabra de cada card
 * - Logos locales desde /public/images (Next sirve /public como raíz)
 * - Apps centradas con place-items-center
 * - Más aire y botón verde-azulado (#75c4af) centrado y alineado al fondo
 */

// Logos principales (archivos en /public/images/)
const GOOGLE_LOGO = "https://img.icons8.com/?size=100&id=17949&format=png&color=000000";
const COPILOT_LOGO = "https://img.icons8.com/?size=100&id=PxQoyT1s0uFh&format=png&color=000000";

// Apps (usarás tus assets cuando los tengas en /public; mientras dejo URLs fiables)
const googleApps = [
  { name: "Gemini", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYM-_oCfjiysWdSUR-8tzX8fUEtcdTo1naJg&s" },
  { name: "NotebookLM", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/notebooklm.png" },
  { name: "Gmail", src: "https://img.icons8.com/color/48/gmail--v1.png" },
  { name: "Drive", src: "https://img.icons8.com/color/48/google-drive--v2.png" },
  { name: "Docs", src: "https://img.icons8.com/color/48/google-docs--v1.png" },
  { name: "Sheets", src: "https://img.icons8.com/color/48/google-sheets.png" },
  { name: "Meet", src: "https://img.icons8.com/color/48/google-meet.png" },
  { name: "Chat", src: "https://img.icons8.com/color/48/google-chat.png" },
  { name: "Calendar", src: "https://img.icons8.com/color/48/google-calendar--v2.png" },
];

const msApps = [
  { name: "Outlook", src: "https://img.icons8.com/color/48/ms-outlook.png" },
  { name: "Word", src: "https://img.icons8.com/color/48/microsoft-word-2019.png" },
  { name: "Excel", src: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
  { name: "PowerPoint", src: "https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png" },
  { name: "OneDrive", src: "https://img.icons8.com/color/48/microsoft-onedrive-2019.png" },
  { name: "OneNote", src: "https://img.icons8.com/?size=100&id=13653&format=png&color=000000" },
  { name: "Forms", src: "https://img.icons8.com/color/48/microsoft-forms-2019.png" },
  { name: "Teams", src: "https://img.icons8.com/?size=100&id=zQ92KI7XjZgR&format=png&color=000000" },
  { name: "Designer", src: "https://play-lh.googleusercontent.com/bokU-UCUydUf-4YsWPjWisTrpR287_Gq1YsNX92ROGMvxN04bicMErfmK4uvW5OZzo7e" },
];

// Checks lenguaje PyME + color de marca
const brandColor = "#75c4af";

const googleChecks = [
  "Gmail con IA: respuestas y envíos personalizados",
  "Drive como ‘cerebro’ de la empresa (búsqueda smart)",
  "Docs que escriben por ti con tu tono",
  "Sheets que hacen informes solos",
  "Reuniones en Meet con resúmenes automáticos",
  "Chat interno con un bot que resuelve dudas",
  "Aprobaciones y avisos automáticos (Apps Script)",
  "Paneles en Looker Studio con tus KPIs al día",
];

const msChecks = [
  "Copilot con tus archivos (SharePoint/OneDrive)",
  "Outlook que redacta emails por ti",
  "Word que crea contratos y plantillas",
  "Excel con IA: reportes y fórmulas sin dolor",
  "Reuniones resumidas con tareas automáticas",
  "OneDrive organizado y compartido sin caos",
  "Agentes internos con Copilot Studio (FAQs, pedidos)",
  "Seguridad y permisos: cada uno ve lo que debe",
];

export default function AIHubImplementation() {
  return (
    <section id="ecosistema-ia" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-20">
        {/* Título separado en dos líneas */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ecosistema IA
          </h2>
          <h3 className="text-2xl md:text-3xl font-playfair italic mt-2">
            Inteligencia artificial en toda tu empresa
          </h3>

          <p className="text-zinc-600 mt-6 max-w-3xl mx-auto">
            Conectamos la IA a las herramientas que tu equipo usa cada día para
            ahorrar tiempo, automatizar tareas y tomar mejores decisiones sin
            cambiar la forma en la que ya trabajan.
          </p>
        </div>

        {/* Dos bloques grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <HubCard
      logo={{ src: COPILOT_LOGO, alt: "Microsoft Copilot" }}
      titleA="Microsoft"
      titleB="Copilot"
      apps={msApps}
      checks={msChecks}
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <HubCard
      logo={{ src: GOOGLE_LOGO, alt: "Google Workspace" }}
      titleA="Google"
      titleB="Workspace"
      apps={googleApps}
      checks={googleChecks}
    />
  </motion.div>
</div>


        {/* CTA final */}
        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">
              ¿Listo para tener IA en toda tu empresa?
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Te hacemos una demostración sin compromiso.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contacto"
              className="btn btn-primary bg-[#75c4af] text-zinc-900 border-transparent hover:opacity-90"
            >
              Solicitar demo
            </a>
            <a href="#casos-reales" className="btn btn-outline">
              Ver casos reales
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500 text-center">
          Los logos de apps se muestran como prototipo. En producción, sirve tus
          assets desde /public y respeta las guías de marca.
        </p>
      </div>
    </section>
  );
}


function HubCard({
  logo,
  titleA,
  titleB,
  apps,
  checks,
}: {
  logo: { src: string; alt: string };
  titleA: string;
  titleB: string;
  apps: { name: string; src: string }[];
  checks: string[];
}) {
  return (
    <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-lg transition ring-1 ring-zinc-100 flex flex-col">
      {/* Logo grande arriba */}
      <div className="flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt={logo.alt} className="h-16 md:h-20 object-contain mx-auto" />
      </div>

      {/* Título debajo (Playfair en la segunda palabra, sin negrita) */}
      <h3 className="mt-5 text-center text-2xl font-semibold">
        {titleA} <span className="font-playfair">{titleB}</span>
      </h3>

      {/* Apps centradas */}
      <div className="mt-8 grid grid-cols-7 sm:grid-cols-9 gap-4 place-items-center">
        {apps.map((a) => (
          <div key={a.name} className="flex flex-col items-center gap-2 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.src} alt={a.name} className="w-8 h-8 object-contain mx-auto" />
            <span className="text-[10px] text-zinc-500">{a.name}</span>
          </div>
        ))}
      </div>

      {/* Checks con color de marca y más aire */}
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {checks.map((c, i) => (
          <li key={i} className="text-sm text-zinc-700 flex items-start gap-2 leading-relaxed">
            <span style={{ color: brandColor }}>✔</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>

      {/* Botón centrado con espacio generoso, alineado al fondo */}
      <div className="mt-auto pt-10 flex justify-center">
        <a
          href="#contacto"
          className="btn btn-primary bg-[#75c4af] text-zinc-900 border-transparent hover:opacity-90"
        >
          Pedir información
        </a>
      </div>
    </div>
  );
}
