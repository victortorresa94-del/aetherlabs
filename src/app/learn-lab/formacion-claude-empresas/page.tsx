'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ────────────────────────────────────────────────────────────────────

const problemas = [
  {
    title: 'Adopción nula',
    desc: 'El equipo descargó Claude, lo probó un día y volvió a Google.',
    borderColor: '#EA580C',
  },
  {
    title: 'Prompts genéricos',
    desc: 'Usan Claude como buscador. Sin contexto, sin sistema, sin resultados.',
    borderColor: '#EA580C',
  },
  {
    title: 'ROI invisible',
    desc: 'La dirección no ve el retorno y empieza a cuestionar la inversión.',
    borderColor: '#EA580C',
  },
];

const departamentos = [
  {
    num: '01',
    title: 'Marketing',
    bullets: [
      'Genera briefs de campaña en minutos',
      'Adapta contenido a todos los canales a la vez',
      'Analiza resultados y extrae insights',
    ],
    href: '/school-lab/formacion-claude-marketing',
  },
  {
    num: '02',
    title: 'Recursos Humanos',
    bullets: [
      'Criba de 50 CVs en 10 minutos',
      'Descripciones de puesto en 2 minutos',
      'Planes de onboarding personalizados',
    ],
    href: '/school-lab/formacion-claude-recursos-humanos',
  },
  {
    num: '03',
    title: 'Ventas',
    bullets: [
      'Propuestas comerciales personalizadas en minutos',
      'Secuencias de email de seguimiento que convierten',
      'Análisis del pipeline y priorización de leads',
    ],
    href: '/school-lab/formacion-claude-ventas',
  },
  {
    num: '04',
    title: 'Finanzas',
    bullets: [
      'Análisis de Excel con lenguaje natural',
      'Comparativas de proveedores desde PDFs',
      'Informes ejecutivos desde datos en bruto',
    ],
    href: '/school-lab/formacion-claude-finanzas',
  },
  {
    num: '05',
    title: 'Operaciones',
    bullets: [
      'Documentación de procesos y SOPs',
      'Planning de proyectos con dependencias',
      'Reporting semanal automatizado',
    ],
    href: '/school-lab/formacion-claude-operaciones',
  },
];

const comparativa = [
  { criterio: 'Privacidad de datos', claude: true, gpt: false, gptNota: 'Datos pueden usarse para entrenamiento' },
  { criterio: 'Contexto largo (200k tokens)', claude: true, gpt: false, gptNota: '' },
  { criterio: 'Instrucciones de sistema', claude: true, gpt: false, gptNota: 'Limitado' },
  { criterio: 'Razonamiento complejo', claude: true, gpt: false, gptNota: 'Parcial' },
  { criterio: 'API empresarial', claude: true, gpt: true, gptNota: '' },
];

const formatos = [
  {
    title: 'Taller Intensivo',
    badge: null,
    desc: '1 día, hasta 20 personas. Para equipos que quieren empezar rápido. Casos reales del sector.',
    price: '400€',
    priceBadge: 'Por equipo',
    popular: false,
  },
  {
    title: 'Programa de 4 semanas',
    badge: 'MÁS POPULAR',
    desc: 'Formación progresiva con seguimiento semanal. Prompts personalizados para tus procesos.',
    price: '1.200€',
    priceBadge: 'Por equipo',
    popular: true,
  },
  {
    title: 'Formación Continua',
    badge: null,
    desc: 'Acceso mensual al equipo de Aether. Nuevos módulos cada mes.',
    price: '300€/mes',
    priceBadge: 'Mínimo 3 meses',
    popular: false,
  },
];

const instituciones = ['UAB', 'Virolai', 'Pere Tarrés', 'Badalona Formació'];

const faqs = [
  {
    q: '¿Cuánto tiempo dura la formación?',
    a: 'Depende del formato. El taller es 1 día. El programa intensivo son 4 semanas con 2h semanales de formación en directo + trabajo autónomo.',
  },
  {
    q: '¿Se puede hacer en remoto?',
    a: 'Sí. Todos los formatos están disponibles en presencial (Barcelona y alrededores) y en remoto por videoconferencia.',
  },
  {
    q: '¿Qué diferencia vuestro programa de otros?',
    a: 'Formamos con casos reales de tu sector, no con ejemplos genéricos. Cada empresa recibe prompts diseñados específicamente para sus procesos.',
  },
  {
    q: '¿Necesita el equipo saber de IA?',
    a: 'No. Formamos desde cero. El único requisito es tener acceso a Claude (ofrecemos guía de contratación incluida).',
  },
  {
    q: '¿La empresa necesita contratar Claude Team?',
    a: 'Recomendamos Claude Team (25€/usuario/mes) para uso empresarial serio. Te ayudamos con el onboarding.',
  },
  {
    q: '¿Hay certificado de formación?',
    a: 'Sí, todos los participantes reciben certificado de formación en IA para empresas por Aether Labs.',
  },
];

// ─── FAQ ACCORDION ─────────────────────────────────────────────────────────────

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

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function FormacionClaudeEmpresasPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── SECCIÓN 1 — HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="flex flex-col items-start" style={{ maxWidth: '760px' }}>
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
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '32px',
                }}
              >
                Formación en Claude para empresas.{' '}
                <span style={{ color: '#555555' }}>La IA que cambia cómo trabajan los equipos.</span>
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
                  maxWidth: '580px',
                }}
              >
                No vendemos licencias. Formamos personas. Talleres prácticos, casos reales y acompañamiento hasta que tu equipo use Claude todos los días.
              </p>
              <div className="v5-reveal flex flex-wrap gap-4" style={{ marginBottom: '64px' }}>
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
                  Solicitar formación →
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
                  Ver el programa ↓
                </Link>
              </div>
              <div className="v5-reveal flex flex-wrap gap-8">
                {[
                  '500+ profesionales formados',
                  '4.9/5 valoración media',
                  'Empresa Partner Anthropic',
                ].map((stat) => (
                  <span
                    key={stat}
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#555555',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — EL PROBLEMA ── */}
        <section style={{ backgroundColor: '#F7F7F5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '680px',
              }}
            >
              Tu empresa ya tiene acceso a Claude. Pero nadie lo usa bien.
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {problemas.map((p) => (
                <div
                  key={p.title}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: `2px solid ${p.borderColor}`,
                    borderRadius: '16px',
                    padding: '40px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '16px',
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

        {/* ── SECCIÓN 3 — DEPARTAMENTOS ── */}
        <section style={{ backgroundColor: '#FFFFFF', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '680px',
              }}
            >
              Formación específica para cada área de tu empresa
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {departamentos.map((d) => (
                <div
                  key={d.num}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: '#AAAAAA',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {d.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '20px',
                    }}
                  >
                    {d.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px' }}>
                    {d.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          lineHeight: 1.7,
                          color: '#555555',
                          paddingBottom: '6px',
                          paddingLeft: '16px',
                          position: 'relative',
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: '#111111' }}>—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={d.href}
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#111111',
                      textDecoration: 'none',
                      borderBottom: '1px solid #111111',
                      paddingBottom: '2px',
                    }}
                  >
                    Ver formación →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — COMPARATIVA ── */}
        <section style={{ backgroundColor: '#F7F7F5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '560px',
              }}
            >
              Claude vs ChatGPT para empresas
            </h2>
            <div className="v5-reveal" style={{ maxWidth: '720px' }}>
              {/* Header */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: '1fr 120px 120px',
                  gap: '0',
                  borderBottom: '2px solid #111111',
                  paddingBottom: '12px',
                  marginBottom: '0',
                }}
              >
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA' }}>Criterio</span>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111111', textAlign: 'center' }}>Claude</span>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666666', textAlign: 'center' }}>ChatGPT</span>
              </div>
              {comparativa.map((row, i) => (
                <div
                  key={i}
                  className="grid"
                  style={{
                    gridTemplateColumns: '1fr 120px 120px',
                    gap: '0',
                    borderBottom: '1px solid #E2E2DF',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#333333' }}>{row.criterio}</span>
                  <span style={{ textAlign: 'center', fontFamily: 'var(--v5-font-mono)', fontSize: '16px', color: '#16A34A', fontWeight: 600 }}>✓</span>
                  <div style={{ textAlign: 'center' }}>
                    {row.gpt ? (
                      <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '16px', color: '#16A34A', fontWeight: 600 }}>✓</span>
                    ) : (
                      <div>
                        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '16px', color: '#DC2626', fontWeight: 600 }}>✗</span>
                        {row.gptNota && (
                          <span style={{ display: 'block', fontFamily: 'var(--v5-font-body)', fontSize: '12px', fontWeight: 300, color: '#AAAAAA', marginTop: '2px' }}>{row.gptNota}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#888888',
                marginTop: '32px',
                maxWidth: '560px',
                fontStyle: 'italic',
              }}
            >
              Usamos Claude por convicción técnica, no por acuerdo comercial. Es la mejor herramienta para empresas en 2025.
            </p>
          </div>
        </section>

        {/* ── SECCIÓN 5 — CASO REAL ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <div style={{ maxWidth: '720px' }}>
              <span
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  display: 'block',
                  marginBottom: '32px',
                }}
              >
                Caso real · Empresa de servicios 45 personas
              </span>
              <h2
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '56px',
                }}
              >
                De 0 a 80% de adopción en 6 semanas
              </h2>
              <div className="v5-reveal flex flex-wrap gap-12" style={{ marginBottom: '48px' }}>
                {[
                  { stat: '-70%', label: 'tiempo en informes' },
                  { stat: 'x4', label: 'velocidad en propuestas comerciales' },
                ].map((item) => (
                  <div key={item.stat}>
                    <div
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(48px, 6vw, 80px)',
                        fontWeight: 300,
                        letterSpacing: '-0.04em',
                        color: '#FFFFFF',
                        lineHeight: 1.0,
                      }}
                    >
                      {item.stat}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#555555',
                        marginTop: '8px',
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#888888',
                }}
              >
                Trabajamos con el equipo directivo para identificar los 3 procesos con más fricción. Diseñamos prompts específicos para su sector. En 6 semanas, el 80% del equipo usaba Claude a diario.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 6 — FORMATOS Y PRECIOS ── */}
        <section id="proceso" style={{ backgroundColor: '#F7F7F5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '560px',
              }}
            >
              Elige el formato que mejor se adapta a tu equipo
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {formatos.map((f) => (
                <div
                  key={f.title}
                  className="v5-reveal"
                  style={{
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
                        display: 'inline-block',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        background: '#111111',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        marginBottom: '20px',
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '16px',
                      marginTop: f.badge ? '0' : '0',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                      marginBottom: '32px',
                    }}
                  >
                    {f.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '32px',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {f.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#AAAAAA',
                      }}
                    >
                      {f.priceBadge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7 — EEEAT / QUIÉN FORMA ── */}
        <section style={{ backgroundColor: '#FFFFFF', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '560px',
              }}
            >
              Formado por profesionales que usan Claude cada día
            </h2>
            <div
              className="v5-reveal"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderTop: '2px solid #111111',
                borderRadius: '16px',
                padding: '40px',
                maxWidth: '680px',
                marginBottom: '48px',
              }}
            >
              <div className="flex items-center gap-4" style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#E0E0E0',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                    }}
                  >
                    Víctor Torres
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: '#888888',
                      marginTop: '2px',
                    }}
                  >
                    Fundador Aether Labs
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#555555',
                }}
              >
                Partner oficial Anthropic en España. Llevo 3 años implementando Claude en empresas. No enseño teoría: enseño lo que funciona con clientes reales.
              </p>
            </div>
            <div>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#AAAAAA',
                  marginBottom: '24px',
                }}
              >
                Instituciones que ya han formado equipos con nosotros
              </p>
              <div className="v5-reveal flex flex-wrap gap-6">
                {instituciones.map((inst) => (
                  <span
                    key={inst}
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: '#333333',
                    }}
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 8 — FAQ ── */}
        <section id="faq" style={{ backgroundColor: '#F7F7F5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#111111',
                marginBottom: '56px',
                maxWidth: '480px',
              }}
            >
              Preguntas frecuentes
            </h2>
            <div style={{ maxWidth: '720px' }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 9 — CTA FINAL ── */}
        <section id="contacto" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div style={{ maxWidth: '640px' }}>
              <h2
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                Solicita información sin compromiso
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
                }}
              >
                Cuéntanos cuántas personas son, en qué área trabajáis y te enviamos propuesta en 24h.
              </p>
              <div className="v5-reveal flex flex-wrap gap-4" style={{ marginBottom: '32px' }}>
                <Link
                  href="https://wa.me/34600000000"
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
                  Hablar por WhatsApp →
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
                  hola@aetherlabs.es →
                </Link>
              </div>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: '#444444',
                  marginBottom: '32px',
                }}
              >
                También puedes escribirnos directamente a hola@aetherlabs.es
              </p>
              <p className="v5-reveal">
                <Link
                  href="/school-lab/instituciones"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#555555',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  ¿Formas parte de una institución educativa? Ver formación para instituciones →
                </Link>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
