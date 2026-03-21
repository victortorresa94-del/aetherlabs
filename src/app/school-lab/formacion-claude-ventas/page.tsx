'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ────────────────────────────────────────────────────────────────────

const casosDeUso = [
  { num: '01', desc: 'Investigación de prospectos antes de la primera reunión' },
  { num: '02', desc: 'Redacción de propuestas comerciales personalizadas' },
  { num: '03', desc: 'Emails de seguimiento que generan respuesta' },
  { num: '04', desc: 'Preparación de argumentarios por sector y perfil de cliente' },
  { num: '05', desc: 'Resúmenes de reuniones con próximos pasos' },
  { num: '06', desc: 'Análisis de objeciones y respuestas preparadas' },
  { num: '07', desc: 'Creación de casos de éxito y testimonios estructurados' },
  { num: '08', desc: 'Actualización de CRM con notas de llamadas y reuniones' },
  { num: '09', desc: 'Presentaciones de producto adaptadas al cliente' },
  { num: '10', desc: 'Reporting de pipeline y forecast para dirección' },
];

const modulos = [
  {
    title: 'Prospecting Intelligence',
    desc: 'Investigación de cuentas, personalización outreach. Llega a cada reunión sabiendo más que el cliente sobre sus propios retos.',
  },
  {
    title: 'Proposal Engine',
    desc: 'Propuestas rápidas, personalizadas y ganadoras. De 45 minutos a 8 minutos sin perder calidad ni personalización.',
  },
  {
    title: 'Follow-up System',
    desc: 'Emails que convierten, secuencias de nurturing. Nunca más un lead perdido por falta de seguimiento estructurado.',
  },
  {
    title: 'Sales Analytics',
    desc: 'Análisis de pipeline, reporting para dirección. Claude transforma tus datos de CRM en narrativas claras y accionables.',
  },
];

const formatos = [
  {
    title: 'Taller Intensivo',
    badge: null,
    desc: '1 día, hasta 20 personas. Para equipos que quieren empezar rápido. Casos reales del sector.',
    price: '400€',
    priceBadge: 'Por equipo',
  },
  {
    title: 'Programa de 4 semanas',
    badge: 'MÁS POPULAR',
    desc: 'Formación progresiva con seguimiento semanal. Prompts personalizados para tus procesos.',
    price: '1.200€',
    priceBadge: 'Por equipo',
  },
  {
    title: 'Formación Continua',
    badge: null,
    desc: 'Acceso mensual al equipo de Aether. Nuevos módulos cada mes.',
    price: '300€/mes',
    priceBadge: 'Mínimo 3 meses',
  },
];

const faqs = [
  {
    q: '¿Claude puede integrarse con nuestro CRM?',
    a: 'Para integraciones directas, trabajamos con el equipo de Systems Lab. La formación enseña a usar Claude en paralelo con el CRM de forma eficiente.',
  },
  {
    q: '¿Las propuestas generadas con Claude suenan robotizadas?',
    a: 'Solo si no se hace bien. Una parte central de la formación es conseguir que el output de Claude suene exactamente como tú: con tu tono, tu estructura y tus argumentos.',
  },
  {
    q: '¿Funciona para ventas B2B complejas con ciclos largos?',
    a: 'Especialmente para eso. Claude ayuda a gestionar la complejidad: múltiples stakeholders, propuestas técnicas largas, seguimientos estructurados.',
  },
  {
    q: '¿Cuánto tiempo tarda en verse el retorno?',
    a: 'Los equipos que formamos ven mejoras medibles en la primera semana. La curva de adopción es rápida porque los casos de uso son inmediatos y tangibles.',
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

export default function FormacionClaudeVentasPage() {
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
                School Lab · Ventas
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
                Formación en Claude para equipos comerciales.{' '}
                <span style={{ color: '#555555' }}>Más propuestas. Mejores emails. Más cierres.</span>
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
                Claude ayuda a tu equipo a preparar reuniones, redactar propuestas personalizadas y dar seguimiento a leads sin invertir horas en cada uno.
              </p>
              <div className="v5-reveal">
                <Link
                  href="/school-lab/formacion-claude-empresas#contacto"
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
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — CASOS DE USO ── */}
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
              Qué puede hacer Claude por tu equipo comercial
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {casosDeUso.map((caso) => (
                <div
                  key={caso.num}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '32px 40px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: '#AAAAAA',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {caso.num}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#333333',
                      margin: 0,
                    }}
                  >
                    {caso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — MÓDULOS ── */}
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
              Módulos del programa para ventas
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {modulos.map((m) => (
                <div
                  key={m.title}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '16px',
                    }}
                  >
                    {m.title}
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
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — CASO REAL ── */}
        <section style={{ backgroundColor: '#F7F7F5', paddingTop: '100px', paddingBottom: '100px' }}>
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
                  color: '#AAAAAA',
                  display: 'block',
                  marginBottom: '32px',
                }}
              >
                Caso real · SaaS B2B, equipo de 5 comerciales
              </span>
              <h2
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#111111',
                  marginBottom: '48px',
                }}
              >
                De 45 minutos por propuesta a 8 minutos
              </h2>
              <div className="v5-reveal flex flex-wrap gap-12" style={{ marginBottom: '40px' }}>
                {[
                  { stat: '-85%', label: 'tiempo en propuestas comerciales' },
                  { stat: '+40%', label: 'tasa de respuesta en email outreach' },
                ].map((item) => (
                  <div key={item.stat}>
                    <div
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(48px, 6vw, 72px)',
                        fontWeight: 300,
                        letterSpacing: '-0.04em',
                        color: '#111111',
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
                        color: '#888888',
                        marginTop: '8px',
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 5 — FORMATOS ── */}
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

        {/* ── SECCIÓN 6 — FAQ ── */}
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

        {/* ── SECCIÓN 7 — CTA FINAL ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
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
                ¿Tu equipo comercial podría cerrar más con menos tiempo de gestión?
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
                Cuéntanos cuántas personas son y en qué procesos queréis empezar. Te enviamos propuesta en 24h.
              </p>
              <div className="v5-reveal" style={{ marginBottom: '40px' }}>
                <Link
                  href="/school-lab/formacion-claude-empresas#contacto"
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
              </div>
              <p className="v5-reveal">
                <Link
                  href="/school-lab/formacion-claude-empresas"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#555555',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Ver formación en Claude para empresas →
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
