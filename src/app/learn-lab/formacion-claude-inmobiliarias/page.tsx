'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const casos = [
  { num: '01', title: 'Redacción de descripciones de inmuebles persuasivas y detalladas' },
  { num: '02', title: 'Emails de seguimiento personalizados a compradores y vendedores' },
  { num: '03', title: 'Informes de valoración con contexto de mercado y argumentario' },
  { num: '04', title: 'Creación de contenido para redes sociales sobre inmuebles y mercado' },
  { num: '05', title: 'Respuestas a consultas de portales inmobiliarios (Idealista, Fotocasa)' },
  { num: '06', title: 'Preparación de presentaciones para captar nuevos vendedores' },
  { num: '07', title: 'Análisis de comparables de mercado con síntesis narrativa' },
  { num: '08', title: 'Redacción de contratos de arras y otros documentos repetitivos' },
  { num: '09', title: 'Comunicaciones multicanal para gestión de alquileres' },
  { num: '10', title: 'Formación interna: onboarding de nuevos agentes con materiales Claude' },
];

const modulos = [
  {
    num: '01',
    title: 'Listing Intelligence',
    desc: 'Fichas de inmuebles, descripciones persuasivas y argumentarios de venta. De 45 minutos a 8 minutos por ficha, con descripciones que destacan en los portales.',
  },
  {
    num: '02',
    title: 'Client Communication',
    desc: 'Compradores, vendedores y seguimiento. Claude genera comunicaciones personalizadas para cada etapa del proceso de compraventa o alquiler.',
  },
  {
    num: '03',
    title: 'Market & Analytics',
    desc: 'Informes de mercado, valoraciones y comparables. Claude transforma datos de mercado en narrativa que convence a vendedores de confiar en tu agencia.',
  },
  {
    num: '04',
    title: 'Lead Generation',
    desc: 'Contenido para redes, portales y captación de vendedores. Claude genera el volumen de contenido que una agencia pequeña no puede producir de otra forma.',
  },
];

const faqs = [
  {
    q: '¿Claude puede conectarse con Idealista o Fotocasa?',
    a: 'Para integraciones directas, trabajamos con Systems Lab. La formación enseña a usar Claude en paralelo con los portales de forma eficiente.',
  },
  {
    q: '¿Las fichas generadas por Claude superan el filtro de los portales?',
    a: 'Sí. Una parte de la formación es optimizar descripciones para los algoritmos de los principales portales españoles.',
  },
  {
    q: '¿Puede ayudar con el marketing en Instagram y TikTok?',
    a: 'Absolutamente. Claude genera ideas de contenido, guiones para vídeos y textos para publicaciones adaptados al tono de tu agencia.',
  },
  {
    q: '¿Funciona si solo soy yo con 1-2 personas?',
    a: 'Especialmente para agencias pequeñas. Con Claude, 2 personas pueden hacer el trabajo de comunicación de una agencia de 6. Es un multiplicador de capacidad, no una herramienta para grandes empresas.',
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

export default function FormacionClaudeInmobiliariasPage() {
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
                <span style={{ color: '#555555' }}>agencias inmobiliarias.</span>
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
                Más captaciones. Mejor comunicación. Menos tiempo.
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
                Claude ayuda a redactar fichas de inmuebles, gestionar la comunicación con compradores y vendedores, crear contenido para redes y preparar informes de valoración.
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
                Lo que tu agencia inmobiliaria
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
                  De 45 minutos a 8 minutos por ficha de inmueble.
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
                  Agencia independiente · 6 agentes en Barcelona
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
                  Una agencia independiente de 6 agentes en Barcelona redujo el tiempo de redacción de fichas de 45 a 8 minutos. Claude genera la descripción, el argumentario y el contenido para portales. El agente revisa y publica.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '-82%', label: 'tiempo en redacción de fichas y comunicaciones' },
                  { stat: 'x3', label: 'velocidad en respuesta a consultas de portales' },
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
                <span style={{ color: '#999999' }}>con tu agencia.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Taller',
                  badge: null,
                  details: '2-3 horas · Presencial o remoto · Hasta 15 personas',
                  desc: 'Sesión intensiva donde el equipo aprende a redactar fichas, responder consultas y crear contenido con Claude. Sale con plantillas listas para usar en Idealista y Fotocasa.',
                  price: 'Desde 400€',
                },
                {
                  num: '02',
                  title: 'Programa Intensivo',
                  badge: 'MÁS POPULAR',
                  details: '5 sesiones de 2h · 1 semana · Presencial o remoto',
                  desc: 'Cinco sesiones donde cada agente trabaja con sus propios inmuebles y clientes. Sale con biblioteca de prompts para inmobiliarias y plantillas del despacho generadas.',
                  price: 'Desde 1.200€',
                },
                {
                  num: '03',
                  title: 'Formación Continua',
                  badge: null,
                  details: 'Mensual · Seguimiento y actualización',
                  desc: 'Sesión mensual para actualizar el uso de Claude según el mercado, nuevas zonas y tipologías de inmueble. Ideal para agencias en crecimiento.',
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
                las agencias inmobiliarias.
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
              ¿Listo para que tu agencia trabaje con Claude?
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
              Cuéntanos cuántos agentes tenéis y en qué zona operáis. En 24h te enviamos una propuesta a medida.
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
