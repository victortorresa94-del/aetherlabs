// app/agents-lab/page.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import Button from "@/components/Button";
import Jason from "@/components/Jason";

// -------------------------------------------------
// Data
// -------------------------------------------------

type Agent = {
  title: string;
  sector?: string;
  category: "Ventas" | "Atención" | "Operaciones";
  promise: string;
  bullets: string[];
  outcome?: string;
  tools: string[]; // icons8 ids
};

const agents: Agent[] = [
  {
    title: "Agente para Restaurantes — Pedidos, Reservas y Pagos",
    sector: "Restauración",
    category: "Ventas",
    promise: "Convierte llamadas y WhatsApps en pedidos pagados en minutos.",
    bullets: ["Registra pedidos y gestiona reservas automáticamente", "Envía link de pago seguro y confirma al momento"],
    outcome: "–40% tiempo medio de respuesta",
    tools: ["twilio", "whatsapp", "stripe", "google-sheets"],
  },
  {
    title: "Agente Comercial B2B — Leads y Presupuestos",
    sector: "Servicios / Industria",
    category: "Ventas",
    promise: "Califica leads y envía presupuestos 24/7 sin colas de correo.",
    bullets: ["Lee formularios o emails y clasifica por urgencia", "Genera propuestas con tu plantilla y hace seguimiento"],
    outcome: "+18% ratio de respuesta a presupuestos",
    tools: ["typeform", "gmail", "notion", "openai"],
  },
  {
    title: "Agente de Ventas Web — Chat Conversacional",
    category: "Ventas",
    promise: "Detecta intención de compra y captura el lead caliente al vuelo.",
    bullets: ["Responde objeciones y muestra producto/catálogos", "Enlaza con CRM y dispara secuencias"],
    outcome: "+22% captación desde la web",
    tools: ["tidio", "webflow", "openai"],
  },
  {
    title: "Agente de Captación en Redes Sociales",
    category: "Ventas",
    promise: "Responde DMs, califica y envía formularios inteligentes.",
    bullets: ["Plantillas por campaña y palabras clave", "Pasa a WhatsApp o embudo web"],
    outcome: "+17% leads cualificados desde RRSS",
    tools: ["instagram", "openai", "typeform"],
  },
  {
    title: "Agente de Atención WhatsApp 24/7",
    category: "Atención",
    promise: "Responde dudas, agenda y segmenta clientes sin intervención humana.",
    bullets: ["FAQ en tu tono y derivación a humano cuando toca", "Agendado y recordatorios por WhatsApp/email"],
    outcome: "–50% carga de soporte de primera línea",
    tools: ["whatsapp", "google-calendar", "notion"],
  },
  {
    title: "Agente de Citas Médicas/Estéticas",
    category: "Atención",
    promise: "Agenda, confirma y reprograma sin llamadas perdidas.",
    bullets: ["Sincroniza agendas y evita solapes", "Recordatorios multi‑canal con confirmación"],
    outcome: "–30% no‑shows en citas",
    tools: ["whatsapp", "google-calendar", "gmail"],
  },
  {
    title: "Agente de Soporte Técnico con IA",
    category: "Atención",
    promise: "Resuelve incidencias frecuentes y escala solo lo complejo.",
    bullets: ["Base de conocimiento + respuestas en tu tono", "Creación de ticket y hand‑off a humano"],
    outcome: "–45% first‑line tickets",
    tools: ["gmail", "notion", "openai", "slack"],
  },
  {
    title: "Agente Postventa y Fidelización",
    category: "Atención",
    promise: "Activa reseñas y recompra con mensajes postventa automatizados.",
    bullets: ["Encuestas NPS y cupones de fidelidad", "Recogida de reseñas en portales"],
    outcome: "+15% repetición de compra",
    tools: ["google-forms", "gmail", "trustpilot"],
  },
  {
    title: "Agente de Cobros y Seguimiento",
    category: "Operaciones",
    promise: "Detecta impagos y envía recordatorios con links de pago.",
    bullets: ["Reglas por antigüedad/importe y tono escalado", "Registro contable y notificación al equipo"],
    outcome: "–35% cuentas por cobrar a 30 días",
    tools: ["airtable", "stripe", "whatsapp"],
  },
  {
    title: "Agente de Pre‑Onboarding de Clientes",
    category: "Operaciones",
    promise: "Pide documentación, la valida y la organiza solo.",
    bullets: ["Checklist automático con recordatorios", "Clasificación en carpetas y confirmación"],
    outcome: "–50% tiempo de alta de cliente",
    tools: ["gmail", "notion", "google-drive"],
  },
  {
    title: "Agente CRM Inteligente",
    category: "Operaciones",
    promise: "Actualiza fichas, etiqueta y triggea tareas según eventos.",
    bullets: ["Enriquece contactos y deduplica", "Sincroniza con email y hojas"],
    outcome: "+100% higiene de datos",
    tools: ["hubspot", "gmail", "google-sheets"],
  },
  {
    title: "Agente de Gestión Interna",
    category: "Operaciones",
    promise: "Asigna tareas, avisa al equipo y prepara briefings.",
    bullets: ["Notas → tareas, con deadlines y dueños", "Resumen diario al canal de equipo"],
    outcome: "–25% tiempo en coordinación",
    tools: ["slack", "notion", "openai", "trello"],
  },
];

const getIconUrl = (tool: string) => `https://img.icons8.com/color/24/${tool}.png`;

function SectionTitle({ kicker, main }: { kicker?: string; main: string }) {
  return (
    <div className="text-center mb-6">
      {kicker && (
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-2">{kicker}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        <span className="font-inter">{main.split(" ").slice(0, -1).join(" ")}</span>{" "}
        <span className="font-playfair italic">{main.split(" ").slice(-1)}</span>
      </h2>
    </div>
  );
}

export default function AgentsLabPage() {
  // Calendly embed loader (optional, graceful if blocked)
  useEffect(() => {
    const id = "calendly-widget-js";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id + "-css"; l.rel = "stylesheet"; l.href = "https://assets.calendly.com/assets/external/widget.css";
    const s = document.createElement("script");
    s.id = id; s.src = "https://assets.calendly.com/assets/external/widget.js"; s.async = true;
    document.head.appendChild(l); document.body.appendChild(s);
  }, []);

  const byCategory = (cat: Agent["category"]) => agents.filter(a => a.category === cat);

  return (
    <main className="alabPage relative text-white">
      <div className="alabOverlay" />

      {/* --------------------------------------------- */}
      {/* HERO */}
      {/* --------------------------------------------- */}
      <section className="alabHeader">
        <div className="text-center">
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-white/75 mb-4">Agents Lab</p>
          <h1 className="leading-tight m-0">
            <span className="font-inter text-[38px] md:text-[60px] font-extrabold">Agents</span>{" "}
            <span className="font-playfair italic text-[34px] md:text-[56px] align-baseline">Lab</span>
          </h1>
          <p className="mt-4 text-[16px] md:text-[18px] text-white/90 max-w-3xl mx-auto">
            Automatiza tu negocio con agentes de inteligencia artificial: una capa 24/7 que responde, ejecuta y vende en tus canales existentes.
          </p>
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* ¿QUÉ ES UN AGENTE? + FLUJO (en un mismo bloque) */}
      {/* --------------------------------------------- */}
      <section className="alabSection">
        <div className="alabCard">
          <h3 className="alabH3">¿Qué es un Agente de IA?</h3>
          <p className="alabP">
            Un agente es un <b>empleado virtual</b> que opera conectado a tus sistemas. <b>Escucha</b> (web, WhatsApp, email, llamadas), <b>decide</b> (reglas + IA) y <b>actúa</b> (responder,
            agendar, cobrar, registrar y notificar). No sustituye a tu equipo: <b>lo potencia</b> y reduce errores.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <ul className="alabList">
                <li>🔌 <b>Interconecta sistemas</b>: CRM, calendarios, pagos, hojas, e‑commerce.</li>
                <li>🧠 <b>Flujo</b> = pasos orquestados: <i>Entrada → Lógica → Acción</i> (ej.: mensaje entrante → validación → presupuesto).</li>
                <li>🧱 <b>Lo que hace</b>: responde, agenda, clasifica, cobra, crea tickets, documenta.</li>
                <li>🚫 <b>Lo que no hace</b>: decisiones legales/médicas sin revisión, suplantar identidad, SPAM.</li>
                <li>🛡️ <b>Control</b>: hand‑off a humano cuando el caso lo requiere; logs y trazabilidad.</li>
              </ul>
            </div>
            <div>
              <div className="alabFlow">
                <div className="alabFlowHeader">Cómo piensa un agente IA</div>
                <img
                  src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp"
                  alt="Diagrama de flujo IA"
                />
                <div className="alabFlowFoot">
                  <div>
                    <b>1) Escucha</b>
                    <span> Web, WhatsApp, email, formularios, llamadas</span>
                  </div>
                  <div>
                    <b>2) Decide</b>
                    <span> Reglas + IA: valida, clasifica, prioriza, redacta</span>
                  </div>
                  <div>
                    <b>3) Actúa</b>
                    <span> Responde, agenda, cobra, registra y notifica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* GRID POR CATEGORÍAS (4 columnas) */}
      {/* --------------------------------------------- */}
      <section className="alabSection">
        <SectionTitle kicker="catálogo" main="Algunos agentes disponibles" />

        {/* Ventas */}
        <h4 className="alabCat">Ventas</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {byCategory("Ventas").map((a, i) => (
            <a key={i} href="#cta-agents" className="alabAgentCard" title="Ver este agente">
              <div className="flex flex-wrap gap-2 mb-2">
                {a.tools.map((t, j) => (
                  <img key={j} src={getIconUrl(t)} alt={t} title={t} className="h-5 w-5" />
                ))}
              </div>
              <h5 className="alabAgentTitle">{a.title}</h5>
              <p className="alabAgentPromise">{a.promise}</p>
              <ul className="alabAgentBullets">
                {a.bullets.slice(0, 2).map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
              {a.outcome && <div className="alabOutcome">📈 {a.outcome}</div>}
            </a>
          ))}
        </div>

        {/* Atención */}
        <h4 className="alabCat">Atención</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {byCategory("Atención").map((a, i) => (
            <a key={i} href="#cta-agents" className="alabAgentCard" title="Ver este agente">
              <div className="flex flex-wrap gap-2 mb-2">
                {a.tools.map((t, j) => (
                  <img key={j} src={getIconUrl(t)} alt={t} title={t} className="h-5 w-5" />
                ))}
              </div>
              <h5 className="alabAgentTitle">{a.title}</h5>
              <p className="alabAgentPromise">{a.promise}</p>
              <ul className="alabAgentBullets">
                {a.bullets.slice(0, 2).map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
              {a.outcome && <div className="alabOutcome">📈 {a.outcome}</div>}
            </a>
          ))}
        </div>

        {/* Operaciones */}
        <h4 className="alabCat">Operaciones</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {byCategory("Operaciones").map((a, i) => (
            <a key={i} href="#cta-agents" className="alabAgentCard" title="Ver este agente">
              <div className="flex flex-wrap gap-2 mb-2">
                {a.tools.map((t, j) => (
                  <img key={j} src={getIconUrl(t)} alt={t} title={t} className="h-5 w-5" />
                ))}
              </div>
              <h5 className="alabAgentTitle">{a.title}</h5>
              <p className="alabAgentPromise">{a.promise}</p>
              <ul className="alabAgentBullets">
                {a.bullets.slice(0, 2).map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
              {a.outcome && <div className="alabOutcome">📈 {a.outcome}</div>}
            </a>
          ))}
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* CTA NEXT STEP → JASON + CALENDLY */}
      {/* --------------------------------------------- */}
      <section id="cta-agents" className="alabSection">
        <SectionTitle kicker="siguiente paso" main="Crea tu agente personalizado" />
        <div className="alabCard">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="alabH4">Habla con Jason (guía del laboratorio)</h4>
              <p className="alabP">Jason te ayuda a elegir el agente correcto, prototiparlo en minutos y recibir una propuesta inmediata. Conversación segura y cifrada.</p>
              <div className="mt-2">
                <Jason />
              </div>
            </div>
            <div>
              <h4 className="alabH4">Reserva ahora (Calendly)</h4>
              <p className="alabP">Si prefieres agendar directamente, usa el calendario interactivo:</p>
              {/* Calendly inline embed */}
              <div className="calendly-inline-widget" data-url="https://calendly.com/aetherlabs1986/30min" style={{ minWidth: 320, height: 680 }} />
              <div className="text-center mt-3">
                <Button label="Abrir Calendly en ventana" href="https://calendly.com/aetherlabs1986/30min" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        /* Background full-page con overlay (estilo Creative Lab) */
        .alabPage {
          min-height: 100vh;
          background-image: url('/images/creative-lab.png');
          background-size: cover; background-position: center; background-attachment: fixed;
        }
        .alabOverlay { position: fixed; inset: 0; z-index: 0;
          background: linear-gradient(180deg, rgba(5,11,25,.40) 0%, rgba(5,11,25,.55) 40%, rgba(5,11,25,.70) 100%),
                      radial-gradient(50% 50% at 50% 30%, rgba(12,20,40,.25), transparent 60%);
          pointer-events: none; }
        .alabHeader { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 160px 24px 24px; }
        .alabSection { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 24px; }
        .alabCard { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 18px; padding: 22px; backdrop-filter: blur(2px); }
        .alabH3 { margin: 0 0 10px 0; font-size: 22px; font-weight: 800; }
        .alabH4 { margin: 0 0 10px 0; font-size: 18px; font-weight: 800; }
        .alabP { color: #e8f0ff; opacity: .95; }
        .alabList { color: #e8f0ff; opacity: .95; display: grid; gap: 8px; }
        .alabFlow { background: #0f0f13; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; }
        .alabFlowHeader { padding: 10px 14px; color: #dce4ff; font-size: 13px; background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .alabFlow img { width: 100%; max-width: 720px; display: block; margin: 0 auto; }
        .alabFlowFoot { display: grid; grid-template-columns: 1fr; border-top: 1px solid rgba(255,255,255,0.08); }
        @media (min-width: 640px){ .alabFlowFoot{ grid-template-columns: repeat(3, 1fr);} }
        .alabFlowFoot > div { padding: 10px 12px; color: #d0d8fb; font-size: 13px; border-top: 1px solid rgba(255,255,255,0.06); }

        .alabCat { margin: 18px 0 10px; font-weight: 800; }
        .alabAgentCard { display: block; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 14px; padding: 14px; color: #e8f0ff; text-decoration: none; transition: transform .08s, box-shadow .15s, background .15s; }
        .alabAgentCard:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(0,0,0,0.35); background: rgba(255,255,255,0.09); }
        .alabAgentTitle { font-size: 15px; font-weight: 700; margin: 4px 0; }
        .alabAgentPromise { font-size: 13px; opacity: .95; }
        .alabAgentBullets { margin: 6px 0 8px; padding-left: 16px; font-size: 13px; opacity: .9; }
        .alabOutcome { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: #00d17a; background: rgba(0, 209, 122, 0.12); border: 1px solid rgba(0, 209, 122, 0.35); padding: 4px 8px; border-radius: 999px; }

        /* Tipos */
        .font-inter { font-family: var(--font-inter, Inter, system-ui, -apple-system, Segoe UI, Roboto), sans-serif; }
        .font-playfair { font-family: var(--font-playfair, 'Playfair Display'), serif; }
      `}</style>
    </main>
  );
}
