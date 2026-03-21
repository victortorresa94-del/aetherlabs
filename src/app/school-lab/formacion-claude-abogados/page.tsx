'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const casos = [
  { num: '01', title: 'Redacción inicial de contratos mercantiles y civiles' },
  { num: '02', title: 'Revisión y comparación de cláusulas contractuales' },
  { num: '03', title: 'Resúmenes ejecutivos de documentación jurídica extensa' },
  { num: '04', title: 'Preparación de due diligence: check-lists e informes iniciales' },
  { num: '05', title: 'Redacción de comunicaciones a clientes en lenguaje accesible' },
  { num: '06', title: 'Análisis de jurisprudencia y síntesis de sentencias relevantes' },
  { num: '07', title: 'Preparación de escritos procesales con estructura inicial' },
  { num: '08', title: 'Creación de bases de conocimiento legal interno del despacho' },
  { num: '09', title: 'Redacción de informes de compliance y cumplimiento normativo' },
  { num: '10', title: 'Automatización de documentos repetitivos: poderes, actas, certificados' },
];

const modulos = [
  {
    num: '01',
    title: 'Contract Intelligence',
    desc: 'Redacción, revisión y comparación de cláusulas contractuales. Claude genera el primer borrador y señala divergencias respecto al modelo estándar del despacho.',
  },
  {
    num: '02',
    title: 'Legal Research Acceleration',
    desc: 'Jurisprudencia, síntesis normativa y research legal. Claude acelera el proceso de investigación y genera resúmenes accionables de la documentación analizada.',
  },
  {
    num: '03',
    title: 'Client Communication',
    desc: 'Informes accesibles para clientes no jurídicos y comunicaciones claras. Transforma el lenguaje técnico en mensajes que el cliente entiende y valora.',
  },
  {
    num: '04',
    title: 'Document Automation',
    desc: 'Documentos repetitivos, plantillas y bases de conocimiento. Poderes, actas, certificados y escritos estándar generados en segundos.',
  },
];

const faqs = [
  {
    q: '¿Usar Claude implica responsabilidad profesional?',
    a: 'La responsabilidad sigue siendo del abogado. Claude es una herramienta de redacción y análisis, no un asesor jurídico. Todo output debe ser revisado por el profesional antes de usarse.',
  },
  {
    q: '¿Es seguro compartir documentación de clientes con Claude?',
    a: 'Formamos protocolos específicos de confidencialidad: anonimización de datos, qué información incluir, cuándo usar Claude API vs. modelos locales. El secreto profesional es el punto de partida.',
  },
  {
    q: '¿Claude conoce la legislación española?',
    a: 'Sí, con matices. Claude tiene conocimiento sólido del derecho español hasta su fecha de corte. Para jurisprudencia reciente, enseñamos a combinar Claude con bases de datos jurídicas.',
  },
  {
    q: '¿Puede Claude ayudar con normativa sectorial específica?',
    a: 'Sí. Cuanto más contexto le das (el texto de la norma, la casuística), mejor trabaja. Formamos al equipo para crear contextos legales reutilizables por materia.',
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

export default function FormacionClaudeAbogadosPage() {
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
                <span style={{ color: '#555555' }}>abogados y equipos legales.</span>
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
                Más rapidez en tareas documentales. Mismo rigor jurídico.
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
                Claude no ejerce la abogacía. Pero puede hacer que tu equipo sea 3 veces más rápido en las tareas que más tiempo consumen: redacción, revisión y documentación.
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
                Lo que tu despacho
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
                  De 4 horas a 45 minutos para el primer borrador de un contrato.
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
                  Despacho de 8 abogados · Especialidad mercantil
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
                  Un despacho mercantil de 8 abogados redujo el tiempo de primer borrador de contratos de 4 horas a 45 minutos. Claude genera la estructura, las cláusulas estándar y los puntos de negociación. El abogado revisa, ajusta y firma.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '-80%', label: 'tiempo en primer borrador de contratos' },
                  { stat: 'x3', label: 'capacidad de revisión de documentación' },
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
                <span style={{ color: '#999999' }}>con tu despacho.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Taller',
                  badge: null,
                  details: '2-3 horas · Presencial o remoto · Hasta 15 personas',
                  desc: 'Sesión intensiva donde el equipo aprende los casos de uso más impactantes para su práctica jurídica. Sale con configuraciones hechas y primeros contratos borradores generados.',
                  price: 'Desde 400€',
                },
                {
                  num: '02',
                  title: 'Programa Intensivo',
                  badge: 'MÁS POPULAR',
                  details: '5 sesiones de 2h · 1 semana · Presencial o remoto',
                  desc: 'Cinco sesiones donde el equipo trabaja con sus propios contratos y documentos reales. Sale con biblioteca de prompts jurídicos y plantillas del despacho generadas.',
                  price: 'Desde 1.200€',
                },
                {
                  num: '03',
                  title: 'Formación Continua',
                  badge: null,
                  details: 'Mensual · Seguimiento y actualización',
                  desc: 'Sesión mensual para incorporar nuevas capacidades, resolver dudas y adaptar el uso de Claude a nuevas áreas de práctica o cambios normativos.',
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
                Lo que nos preguntan
                <br />
                los despachos.
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
              ¿Listo para que tu despacho trabaje con Claude?
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
              Cuéntanos cuántas personas forman el equipo y en qué área de práctica queréis empezar. En 24h te enviamos una propuesta a medida.
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
