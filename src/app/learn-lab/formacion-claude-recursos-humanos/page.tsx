'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ────────────────────────────────────────────────────────────────────

const casosDeUso = [
  { num: '01', desc: 'Cribado y clasificación de currículums por criterios' },
  { num: '02', desc: 'Redacción de ofertas de empleo optimizadas para cada portal' },
  { num: '03', desc: 'Generación de preguntas de entrevista por competencias' },
  { num: '04', desc: 'Resúmenes de entrevistas y scorecards de candidatos' },
  { num: '05', desc: 'Redacción de políticas internas y protocolos de empresa' },
  { num: '06', desc: 'Comunicaciones de feedback a candidatos descartados' },
  { num: '07', desc: 'Análisis de encuestas de clima laboral' },
  { num: '08', desc: 'Creación de planes de onboarding personalizados' },
  { num: '09', desc: 'Redacción de evaluaciones de desempeño anuales' },
  { num: '10', desc: 'Formación interna: materiales y guías de aprendizaje' },
];

const modulos = [
  {
    title: 'Selección Inteligente',
    desc: 'CVs, entrevistas, evaluación de candidatos. Diseña sistemas de cribado objetivos y rápidos con Claude.',
  },
  {
    title: 'Comunicación Interna',
    desc: 'Políticas, onboarding, feedback. Redacta documentos internos claros y coherentes en minutos.',
  },
  {
    title: 'Análisis Organizacional',
    desc: 'Encuestas, clima laboral, reporting a dirección. Claude transforma datos cualitativos en insights accionables.',
  },
  {
    title: 'Privacidad y Ética',
    desc: 'RGPD con IA, uso responsable en RRHH, protocolos de datos. Formación para implementar IA con garantías.',
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
    q: '¿Es legal usar Claude para cribar CVs?',
    a: 'Sí, con las garantías adecuadas. Formamos al equipo en el uso responsable de IA en selección: transparencia con candidatos, criterios objetivos y supervisión humana de todas las decisiones.',
  },
  {
    q: '¿Cómo garantizamos la privacidad de los datos de candidatos?',
    a: 'Claude API no usa los datos para entrenamiento. Formamos protocolos específicos de RGPD para IA en RRHH: qué datos se pueden procesar, cómo y durante cuánto tiempo.',
  },
  {
    q: '¿El equipo necesita saber programar?',
    a: 'No. Toda la formación es prompt engineering aplicado. Nada de código, nada de integraciones técnicas.',
  },
  {
    q: '¿Puede Claude integrarse con nuestro ATS?',
    a: 'Depende del ATS. Para integraciones técnicas, colaboramos con el equipo de Systems Lab. La formación RRHH funciona sin integración.',
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

export default function FormacionClaudeRRHHPage() {
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
                School Lab · Recursos Humanos
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
                Formación en Claude para equipos de RRHH.{' '}
                <span style={{ color: '#555555' }}>Menos papeleo. Más tiempo para las personas.</span>
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
                Claude automatiza el cribado de CVs, redacta ofertas de trabajo, prepara entrevistas y genera los informes que tu departamento necesita.
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
              Qué puede hacer Claude por tu departamento de RRHH
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
              Módulos del programa para RRHH
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
                Caso real · Empresa 80 empleados, sector industrial
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
                Del cribado de 200 CVs en 2 días a 2 horas
              </h2>
              <div className="v5-reveal flex flex-wrap gap-12" style={{ marginBottom: '40px' }}>
                {[
                  { stat: '-95%', label: 'tiempo de cribado inicial' },
                  { stat: '100%', label: 'del equipo RRHH adoptó Claude en 3 semanas' },
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
                ¿Tu equipo de RRHH podría hacer más con menos tiempo?
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
