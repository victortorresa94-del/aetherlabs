'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const casos = [
  { num: '01', title: 'Generación de informes de resultados mensuales / trimestrales' },
  { num: '02', title: 'Análisis de desviaciones presupuestarias con narrativa explicativa' },
  { num: '03', title: 'Redacción de notas para los estados financieros' },
  { num: '04', title: 'Resúmenes ejecutivos de informes contables para no financieros' },
  { num: '05', title: 'Análisis de contratos y condiciones financieras de proveedores' },
  { num: '06', title: 'Preparación de presentaciones para comités de dirección' },
  { num: '07', title: 'Creación de procedimientos y políticas contables internas' },
  { num: '08', title: 'Análisis de rentabilidad por producto, cliente o unidad de negocio' },
  { num: '09', title: 'Generación de forecast y escenarios con narrativa de negocio' },
  { num: '10', title: 'Revisión y mejora de textos para informes anuales y auditorías' },
];

const modulos = [
  {
    num: '01',
    title: 'Financial Reporting',
    desc: 'Generación de informes de resultados, cierres mensuales y reportes de dirección con narrativa clara y estructurada.',
  },
  {
    num: '02',
    title: 'Data Narrative',
    desc: 'Transforma datos en historias que entiende la dirección. Convierte tablas y cifras en mensajes accionables para stakeholders.',
  },
  {
    num: '03',
    title: 'Budget Intelligence',
    desc: 'Análisis de desviaciones, forecast y escenarios. Claude genera la narrativa explicativa que acompaña cada cifra.',
  },
  {
    num: '04',
    title: 'Compliance & Documentation',
    desc: 'Procedimientos, políticas contables, notas a estados financieros y documentación de auditoría en menos tiempo.',
  },
];

const faqs = [
  {
    q: '¿Claude puede leer directamente nuestro ERP o Excel?',
    a: 'No directamente, pero el equipo aprende a exportar datos en formatos que Claude procesa eficientemente. Para integraciones directas trabajamos con Systems Lab.',
  },
  {
    q: '¿Los informes generados cumplen con normativa contable?',
    a: 'Claude genera texto, no contabilidad. Formamos al equipo para usar Claude como herramienta de redacción y análisis, con el criterio técnico siempre en manos del profesional.',
  },
  {
    q: '¿Es seguro compartir datos financieros con Claude?',
    a: 'Claude API no usa los datos para entrenamiento. Formamos protocolos de uso seguro: qué datos compartir, cómo anonimizar y qué nunca incluir en prompts.',
  },
  {
    q: '¿Puede ayudar con informes para inversores?',
    a: 'Sí. Claude es especialmente potente para transformar datos complejos en narrativa clara para audiencias no técnicas: consejos, inversores, socios estratégicos.',
  },
];

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

export default function FormacionClaudeFinanzasPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── SECCIÓN 1 — HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
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
                School Lab · Formación Sectorial
              </span>
              <h1
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(40px, 5.5vw, 80px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                Formación en Claude para
                <br />
                <span style={{ color: '#555555' }}>equipos de finanzas.</span>
              </h1>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(18px, 2vw, 26px)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  color: '#888888',
                  marginBottom: '16px',
                }}
              >
                Informes más rápidos. Análisis más profundo.
              </p>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#666666',
                  marginBottom: '48px',
                  maxWidth: '560px',
                }}
              >
                Claude transforma cómo tu equipo procesa datos financieros, genera informes y comunica resultados a dirección y stakeholders.
              </p>
              <div className="v5-reveal">
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
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — 10 CASOS DE USO ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '64px' }}>
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
                Casos de Uso
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
                Lo que tu equipo de finanzas
                <br />
                <span style={{ color: '#999999' }}>puede hacer con Claude.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {casos.map((caso, i) => (
                <div
                  key={caso.num}
                  className="v5-reveal"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '32px 40px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: '#CCCCCC',
                      flexShrink: 0,
                      paddingTop: '2px',
                    }}
                  >
                    {caso.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: '#333333',
                    }}
                  >
                    {caso.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — MÓDULOS DEL PROGRAMA ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-start gap-3" style={{ marginBottom: '64px' }}>
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
                Programa
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
                Módulos del programa
                <br />
                <span style={{ color: '#999999' }}>de formación.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modulos.map((mod, i) => (
                <div
                  key={mod.num}
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
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#CCCCCC',
                      marginBottom: '16px',
                    }}
                  >
                    {mod.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {mod.title}
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
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — CASO REAL ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                    color: '#999999',
                    marginBottom: '24px',
                  }}
                >
                  Caso Real
                </span>
                <h2
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    marginBottom: '16px',
                  }}
                >
                  Del cierre mensual en 3 días a 1 día.
                </h2>
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#999999',
                    marginBottom: '20px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Empresa industrial cotizada · Equipo de 4 personas en controlling
                </p>
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#555555',
                  }}
                >
                  Un equipo de controlling de 4 personas pasó de dedicar 3 días completos al cierre mensual a cerrarlo en 1 día. Claude ahora genera los borradores de todos los informes de dirección, que el equipo revisa y valida en horas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '-65%', label: 'tiempo en cierre mensual' },
                  { stat: '100%', label: 'de informes de dirección sin revisión previa' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      transitionDelay: `${i * 120}ms`,
                      padding: '40px 32px',
                      background: '#111111',
                      border: '1px solid #1F1F1F',
                      borderRadius: '16px',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(32px, 3.5vw, 52px)',
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
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
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
                <span style={{ color: '#999999' }}>con tu equipo.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Taller',
                  badge: null,
                  details: '2-3 horas · Presencial o remoto · Hasta 15 personas',
                  desc: 'Sesión intensiva donde el equipo de finanzas aprende los casos de uso más impactantes para su trabajo específico. Sale con configuraciones hechas y primeros prompts validados.',
                  price: 'Desde 400€',
                },
                {
                  num: '02',
                  title: 'Programa Intensivo',
                  badge: 'MÁS POPULAR',
                  details: '5 sesiones de 2h · 1 semana · Presencial o remoto',
                  desc: 'Cinco sesiones donde el equipo trabaja con sus propios datos financieros y proyectos reales. Sale con biblioteca de prompts para finanzas y flujos documentados.',
                  price: 'Desde 1.200€',
                },
                {
                  num: '03',
                  title: 'Formación Continua',
                  badge: null,
                  details: 'Mensual · Seguimiento y actualización',
                  desc: 'Sesión mensual para incorporar nuevas capacidades de Claude, resolver dudas del equipo y añadir nuevos casos de uso a medida que evoluciona el negocio.',
                  price: 'Desde 300€/mes',
                },
              ].map((f, i) => (
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

        {/* ── SECCIÓN 6 — FAQ ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                Lo que nos preguntan los
                <br />
                equipos de finanzas.
              </h2>
            </div>

            <div style={{ maxWidth: '720px' }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7 — CTA FINAL ── */}
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
              ¿Listo para que tu equipo de finanzas use Claude de verdad?
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
              Cuéntanos cuántas personas forman el equipo y qué informes o procesos quieres mejorar. En 24h te enviamos una propuesta a medida.
            </p>
            <div className="v5-reveal flex flex-wrap justify-center gap-4" style={{ marginBottom: '64px' }}>
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
                Enviar email
              </Link>
            </div>
            <div className="v5-reveal">
              <Link
                href="/school-lab/formacion-claude-empresas"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#555555',
                  textDecoration: 'none',
                  borderBottom: '1px solid #333333',
                  paddingBottom: '2px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#888888'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555555'}
              >
                Ver formación general para empresas
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
