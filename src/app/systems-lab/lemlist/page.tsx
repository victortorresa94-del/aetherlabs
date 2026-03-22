'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Workflow, PenLine, GitMerge, BarChart2 } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Shield,
    title: 'Configuración técnica del dominio',
    desc: 'SPF, DKIM y DMARC configurados correctamente. Lemwarm activado para calentar el dominio de envío antes de la primera campaña. Sin esto, los emails llegan a spam antes de que alguien los lea.',
  },
  {
    icon: Workflow,
    title: 'Diseño de secuencias por ICP',
    desc: 'Secuencias de 3 a 5 pasos adaptadas a cada perfil de cliente. Variables dinámicas con nombre, empresa y contexto. Imágenes personalizadas generadas automáticamente. Condiciones de rama según comportamiento del prospecto.',
  },
  {
    icon: PenLine,
    title: 'Generación de copy con Claude',
    desc: 'Primer email, follow-up y break-up escritos con Claude según el sector y el cargo del prospecto. A/B testing de asuntos y primeras líneas. Personalización que va más allá del nombre: contexto real de la empresa.',
  },
  {
    icon: GitMerge,
    title: 'Integración Lemlist + Apollo + HubSpot',
    desc: 'Los leads entran desde Apollo con sus datos ya completos, pasan por Lemlist para el outreach personalizado y llegan a HubSpot cuando responden. El flujo es automático de extremo a extremo.',
  },
  {
    icon: BarChart2,
    title: 'Reporting y optimización mensual',
    desc: 'Dashboard de métricas: tasa de apertura, tasa de respuesta, reuniones generadas y coste por reunión. Revisión mensual de secuencias para ajustar copy, asuntos y timing según los datos reales.',
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en llegar la primera respuesta?',
    a: 'Con el dominio correctamente calentado y una secuencia bien construida, las primeras respuestas llegan en la primera o segunda semana de campaña. El volumen se incrementa progresivamente a medida que el dominio gana reputación. No arrancar con 500 emails el primer día es una decisión técnica, no una limitación.',
  },
  {
    q: '¿Necesito un dominio separado para el cold outreach?',
    a: 'Sí, es la práctica estándar. Usamos un dominio similar al principal (por ejemplo, aetherlabs.es para outreach vs aetherlabs.com para la web corporativa) para proteger la reputación del dominio principal. Configuramos el dominio secundario, el DNS y Lemwarm desde cero.',
  },
  {
    q: '¿Lemlist funciona bien para el mercado hispanohablante?',
    a: 'Sí. El copy en español con personalización contextual funciona igual de bien o mejor que en inglés porque hay menos saturación de outreach en este idioma. La clave es el nivel de personalización: el nombre de la empresa, el sector y un contexto relevante en el primer email marcan la diferencia entre una respuesta y un bloqueo.',
  },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FAQAccordion({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const borderColor = dark ? 'rgba(255,255,255,0.12)' : '#E2E2DF';
  const questionColor = dark ? '#F5F5F0' : '#111111';
  const answerColor = dark ? 'rgba(245,245,240,0.55)' : '#666666';
  const iconColor = dark ? 'rgba(245,245,240,0.4)' : '#AAAAAA';

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: `1px solid ${borderColor}` }}>
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
                color: questionColor,
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
                color: iconColor,
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
                color: answerColor,
                paddingBottom: '24px',
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: `1px solid ${borderColor}` }} />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LemlistPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              Systems Lab · Outreach
            </span>
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '860px',
                marginBottom: '32px',
                transitionDelay: '80ms',
              }}
            >
              Emails de prospecting<br />
              que parecen escritos a mano.<br />
              <span style={{ color: 'rgba(245,245,240,0.35)' }}>Enviados a escala.</span>
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '560px',
                marginBottom: '24px',
                transitionDelay: '160ms',
              }}
            >
              El problema del email frío no es el volumen. Es que todos parecen iguales. Lemlist personaliza cada email con el nombre, la empresa y el contexto del prospecto. La tasa de respuesta no tiene nada que ver con los emails genéricos.
            </p>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: 'rgba(245,245,240,0.6)',
                marginBottom: '40px',
                transitionDelay: '200ms',
              }}
            >
              5-15% tasa de respuesta con una secuencia bien configurada
            </p>
            <div className="v5-reveal" style={{ transitionDelay: '280ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Implementar Lemlist →
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUÉ IMPLEMENTAMOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                De mandar emails genéricos a tener una máquina de outreach personalizado.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderTop: '2px solid #111111',
                      borderRadius: '16px',
                      padding: '40px',
                      transitionDelay: `${i * 80}ms`,
                    }}
                  >
                    <div style={{ marginBottom: '20px' }}>
                      <Icon size={22} color="#111111" strokeWidth={1.5} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '18px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                        marginBottom: '12px',
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#666666',
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              <div className="v5-reveal">
                <h2
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    color: '#111111',
                  }}
                >
                  Preguntas frecuentes
                </h2>
              </div>
              <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
                <FAQAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                padding: '80px 40px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(24px, 3.5vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Listo para tener outreach que funciona de verdad?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Empieza con una Sesión de Claridad de 90 minutos. Sin compromiso.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Reservar Sesión de Claridad →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
