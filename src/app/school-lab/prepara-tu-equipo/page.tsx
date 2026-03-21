'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard, Clock, AlertTriangle,
  Megaphone, Users, BarChart2, TrendingUp, Settings,
  Check,
} from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ────────────────────────────────────────────────────────────────────

const problemas = [
  {
    icon: <CreditCard size={24} strokeWidth={1.5} />,
    num: '01',
    title: 'Licencias que no se usan',
    desc: 'El 70% de las empresas con licencias de Microsoft Copilot o ChatGPT Enterprise reconocen que su equipo sigue trabajando exactamente igual que antes.',
  },
  {
    icon: <Clock size={24} strokeWidth={1.5} />,
    num: '02',
    title: 'Tiempo perdido en tareas manuales',
    desc: 'Informes que tardan 4 horas. Emails que se repiten cada semana. CVs que se leen uno a uno. Tareas que Claude puede hacer en minutos y nadie sabe cómo.',
  },
  {
    icon: <AlertTriangle size={24} strokeWidth={1.5} />,
    num: '03',
    title: 'Formación genérica que no sirve',
    desc: 'Los cursos genéricos de IA enseñan teoría. Tu equipo sale sin saber qué hacer el lunes por la mañana con su trabajo real.',
  },
];

const departamentos = [
  {
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    color: '#EA580C',
    title: 'Marketing',
    items: [
      'Genera briefs de campaña en minutos',
      'Adapta contenido a todos los canales a la vez',
      'Analiza resultados y extrae insights',
      'Crea variantes de copy sin briefing extra',
    ],
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    color: '#6366F1',
    title: 'Recursos Humanos',
    items: [
      'Criba de 50 CVs en 10 minutos',
      'Descripciones de puesto en 2 minutos',
      'Planes de onboarding personalizados',
      'Análisis de encuestas de clima laboral',
    ],
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    color: '#10B981',
    title: 'Finanzas',
    items: [
      'Análisis de Excel con lenguaje natural',
      'Comparativas de proveedores desde PDFs',
      'Informes ejecutivos desde datos en bruto',
      'Forecasts con escenarios en minutos',
    ],
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    color: '#0891B2',
    title: 'Ventas',
    items: [
      'Propuestas comerciales personalizadas',
      'Secuencias de email de seguimiento',
      'Análisis del pipeline y priorización',
      'Scripts de llamada por perfil de cliente',
    ],
  },
  {
    icon: <Settings size={22} strokeWidth={1.5} />,
    color: '#EA580C',
    title: 'Operaciones',
    items: [
      'Documentación de procesos y SOPs',
      'Planning de proyectos con dependencias',
      'Reporting semanal automatizado',
      'Actas de reunión con action items',
    ],
  },
];

const formatos = [
  {
    num: '01',
    title: 'Taller de Descubrimiento',
    badge: null,
    details: '2-3 horas · Presencial o remoto · Hasta 15 personas',
    desc: 'El primer contacto con Claude en tu empresa. El equipo aprende los 5 casos de uso más impactantes para su trabajo específico. Sale con configuraciones hechas.',
    price: 'Desde 400€',
  },
  {
    num: '02',
    title: 'Programa Intensivo',
    badge: 'MÁS POPULAR',
    details: '5 sesiones de 2h · 1 semana · Presencial o remoto',
    desc: 'Cinco sesiones donde cada departamento trabaja con sus proyectos y datos reales. Sale con biblioteca de prompts corporativa, flujos documentados y el equipo usando Claude de verdad en su trabajo diario.',
    price: 'Desde 1.200€',
  },
  {
    num: '03',
    title: 'Formación Continua',
    badge: null,
    details: 'Mensual · Seguimiento y actualización',
    desc: 'Sesión mensual para incorporar nuevas funcionalidades de Claude, resolver dudas del equipo y añadir nuevos casos de uso según evoluciona el negocio.',
    price: 'Desde 300€/mes',
  },
];

const pasos = [
  {
    num: '01',
    title: 'Nos contactas',
    desc: 'Cuéntanos a qué se dedica tu empresa, cuántas personas quieres formar y qué departamentos. Sin compromiso.',
  },
  {
    num: '02',
    title: 'Diseñamos el plan',
    desc: 'Proponemos un programa a medida: contenidos, duración, formato (presencial / remoto) y precio cerrado.',
  },
  {
    num: '03',
    title: 'Tu equipo aprende haciendo',
    desc: 'Trabajamos con vuestros proyectos y datos reales desde el primer día. Ese mismo día el equipo lleva algo hecho.',
  },
];

const instituciones = ['UAB', 'Colegio Virolai', 'Fundació Pere Tarrés', 'Ajuntament de Badalona'];

const faqs = [
  {
    q: '¿En qué se diferencia vuestra formación de un curso online de IA?',
    a: 'Los cursos online enseñan teoría genérica. Nosotros trabajamos con los procesos reales de tu empresa desde el primer día. El equipo aprende con sus propios proyectos, en su propio contexto. Al terminar, ya tienen cosas hechas.',
  },
  {
    q: '¿Es presencial o puede ser remota?',
    a: 'Las dos opciones están disponibles. Las formaciones presenciales (in-company) las hacemos en Barcelona y área metropolitana. Las remotas funcionan igual de bien para equipos de cualquier ciudad.',
  },
  {
    q: '¿Cuánto dura una formación típica?',
    a: 'El Taller de Descubrimiento son 2-3 horas. El Programa Intensivo son 5 sesiones de 2 horas en una semana. La formación continua es una sesión mensual.',
  },
  {
    q: '¿Necesita mi equipo saber programar o tener conocimientos técnicos?',
    a: 'No. La formación está diseñada para usuarios no técnicos. Solo necesitan su ordenador y sus proyectos habituales.',
  },
  {
    q: '¿Qué herramienta usan los participantes durante la formación?',
    a: 'Claude.ai principalmente. Si la empresa ya tiene Copilot o ChatGPT Enterprise, trabajamos también con esas herramientas. La formación se adapta al stack que ya tenéis.',
  },
  {
    q: '¿Podéis hacer la formación fuera de Barcelona?',
    a: 'Sí. Las formaciones presenciales las hacemos en toda España para empresas que cubren los gastos de desplazamiento. Las remotas no tienen límite geográfico.',
  },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: '1px solid #E2E2DF' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '28px',
              paddingBottom: '28px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '18px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: '#111111',
                lineHeight: 1.3,
              }}
            >
              {faq.q}
            </span>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '20px',
                fontWeight: 300,
                color: '#AAAAAA',
                flexShrink: 0,
                transition: 'transform 200ms ease',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#666666',
                paddingBottom: '24px',
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: '1px solid #E2E2DF' }} />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PreparaTuEquipoPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── SECCIÓN 1 — HERO ── */}
        <section
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <div className="flex flex-col items-start" style={{ maxWidth: '720px' }}>
              <span
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  marginBottom: '32px',
                }}
              >
                School Lab · Formación Corporativa
              </span>
              <h1
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(44px, 6vw, 88px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '32px',
                }}
              >
                Formación en Claude
                <br />
                <span style={{ color: '#555555' }}>para empresas.</span>
              </h1>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '20px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#888888',
                  marginBottom: '48px',
                  maxWidth: '560px',
                }}
              >
                Tu equipo puede trabajar más rápido, cometer menos errores y centrarse en lo que importa. Solo necesita saber cómo usar Claude en su día a día. Con casos reales. Adaptado a sus procesos.
              </p>
              <div className="v5-reveal flex flex-wrap gap-4">
                <Link
                  href="#contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: '#FFFFFF',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'opacity 200ms ease',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                >
                  Preparar a mi equipo →
                </Link>
                <Link
                  href="#proceso"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#888888',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    border: '1px solid #2A2A2A',
                    borderRadius: '8px',
                    transition: 'border-color 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#555555'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2A2A2A'; (e.currentTarget as HTMLElement).style.color = '#888888'; }}
                >
                  Ver cómo funciona
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — EL PROBLEMA ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '80px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                El Problema
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Tu empresa ya paga por IA.
                <br />
                <span style={{ color: '#999999' }}>Nadie la usa bien.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problemas.map((p, i) => (
                <div
                  key={p.num}
                  className="v5-reveal"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                  }}
                >
                  <div style={{ color: '#111111', marginBottom: '20px' }}>{p.icon}</div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#CCCCCC',
                      marginBottom: '12px',
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — QUÉ APRENDE TU EQUIPO ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Qué aprende tu equipo
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Casos de uso reales.
                <br />
                <span style={{ color: '#999999' }}>Por departamento.</span>
              </h2>
            </div>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#666666',
                maxWidth: '640px',
                marginBottom: '72px',
              }}
            >
              No enseñamos qué es un LLM. Enseñamos cómo tu equipo de marketing genera el triple de contenido, cómo RRHH criba 50 CVs en 10 minutos y cómo finanzas construye un forecast en lugar de un Excel interminable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departamentos.map((dep, i) => (
                <div
                  key={dep.title}
                  className="v5-reveal"
                  style={{
                    transitionDelay: `${i * 70}ms`,
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '36px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      background: '#F7F7F5',
                      borderRadius: '10px',
                      color: dep.color,
                      marginBottom: '20px',
                    }}
                  >
                    {dep.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '20px',
                    }}
                  >
                    {dep.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {dep.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={14} strokeWidth={2} style={{ color: '#111111', marginTop: '3px', flexShrink: 0 }} />
                        <span
                          style={{
                            fontFamily: 'var(--v5-font-body)',
                            fontSize: '14px',
                            fontWeight: 300,
                            lineHeight: 1.6,
                            color: '#555555',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — CASO REAL ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span
                  className="v5-reveal"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555555',
                    marginBottom: '24px',
                  }}
                >
                  Caso Real
                </span>
                <h2
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(26px, 3vw, 42px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                    marginBottom: '24px',
                  }}
                >
                  De 40 proyectos al caos a 40 proyectos bajo control.
                </h2>
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#888888',
                  }}
                >
                  Una agencia de marketing en Barcelona gestionaba 40 proyectos simultáneamente sin ningún sistema. Formamos al equipo en Claude y ClickUp. Resultado: cada proyecto tiene su flujo documentado, el equipo genera propuestas en minutos y el director dejó de ser el cuello de botella.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '+40', label: 'proyectos gestionados simultáneamente' },
                  { stat: 'x3', label: 'velocidad en generación de propuestas' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      transitionDelay: `${i * 120}ms`,
                      padding: '40px 32px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(36px, 4vw, 56px)',
                        fontWeight: 300,
                        letterSpacing: '-0.03em',
                        color: '#FFFFFF',
                        lineHeight: 1,
                        marginBottom: '12px',
                      }}
                    >
                      {s.stat}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: '#888888',
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 5 — FORMATOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '80px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Formatos
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Elige el formato que encaja
                <br />
                <span style={{ color: '#999999' }}>con tu empresa.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {formatos.map((f, i) => (
                <div
                  key={f.num}
                  className="v5-reveal flex flex-col"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                    position: 'relative',
                  }}
                >
                  {f.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '24px',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '9px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        background: '#111111',
                        padding: '4px 10px',
                        borderRadius: '0 0 6px 6px',
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#CCCCCC',
                      marginBottom: '12px',
                    }}
                  >
                    {f.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '8px',
                    }}
                  >
                    {f.title}
                  </h3>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 400,
                      color: '#999999',
                      marginBottom: '20px',
                    }}
                  >
                    {f.details}
                  </span>
                  <p
                    className="flex-1"
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                      marginBottom: '28px',
                    }}
                  >
                    {f.desc}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#111111',
                    }}
                  >
                    {f.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 6 — PROCESO ── */}
        <section id="proceso" className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '80px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Cómo Funciona
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                El proceso es sencillo.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: '1px solid #E0E0E0', borderRadius: '16px', overflow: 'hidden' }}>
              {pasos.map((p, i) => (
                <div
                  key={p.num}
                  className="v5-reveal"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    padding: '48px 40px',
                    background: '#FFFFFF',
                    borderRight: i < pasos.length - 1 ? '1px solid #E0E0E0' : 'none',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#CCCCCC',
                      marginBottom: '20px',
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7 — INSTITUCIONES ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="flex flex-col items-center text-center">
              <span
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  marginBottom: '16px',
                }}
              >
                Ya confían en nosotros
              </span>
              <h2
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(22px, 3vw, 36px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: '#111111',
                  marginBottom: '64px',
                  maxWidth: '560px',
                }}
              >
                Empresas e instituciones que forman a sus equipos con Aether School.
              </h2>

              <div className="v5-reveal flex flex-wrap justify-center gap-8" style={{ marginBottom: '48px' }}>
                {instituciones.map((inst) => (
                  <div
                    key={inst}
                    style={{
                      padding: '16px 32px',
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#333333',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {inst}
                  </div>
                ))}
              </div>

              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#999999',
                  maxWidth: '480px',
                }}
              >
                También hemos formado a equipos de marketing, ventas y operaciones en pymes y agencias de toda España.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 8 — FAQ ── */}
        <section id="faq" className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="flex flex-col items-start gap-3" style={{ marginBottom: '64px' }}>
              <span
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Preguntas Frecuentes
              </span>
              <h2
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Lo que nos preguntan las empresas
              </h2>
            </div>

            <div style={{ maxWidth: '720px' }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 9 — CTA FINAL ── */}
        <section
          id="contacto"
          className="v5-section"
          style={{ backgroundColor: '#080808' }}
        >
          <div className="v5-container flex flex-col items-center text-center">
            <span
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '24px',
              }}
            >
              Empieza hoy
            </span>
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(32px, 4vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '24px',
                maxWidth: '640px',
              }}
            >
              ¿Listo para que tu equipo use Claude de verdad?
            </h2>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#888888',
                marginBottom: '48px',
                maxWidth: '480px',
              }}
            >
              Cuéntanos a qué se dedica tu empresa y cuántas personas quieres formar. En 24h te enviamos una propuesta a medida.
            </p>
            <div className="v5-reveal flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/34627281459"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#FFFFFF',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'opacity 200ms ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                Hablar con nosotros →
              </Link>
              <Link
                href="mailto:hola@aetherlabs.es"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: '#888888',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  border: '1px solid #2A2A2A',
                  borderRadius: '8px',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#555555'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2A2A2A'; (e.currentTarget as HTMLElement).style.color = '#888888'; }}
              >
                Enviar email
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
