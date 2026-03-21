'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const benefits = [
  { num: '01', title: '6 semanas de programa', desc: 'Un recorrido estructurado que transforma cómo trabajas con la IA. Cada semana construye sobre la anterior.' },
  { num: '02', title: 'Sesiones 1:1 semanales', desc: 'Una sesión individual cada semana. Revisamos tu avance, resolvemos bloqueos y ajustamos el plan según lo que necesitas.' },
  { num: '03', title: 'Proyecto real de tu empresa', desc: 'No trabajamos con ejercicios. Desde el día uno aplicamos la IA a un reto concreto de tu negocio.' },
  { num: '04', title: 'Plan de acción personalizado', desc: 'Al finalizar el programa recibes un plan documentado con los sistemas, flujos y herramientas que has implementado.' },
  { num: '05', title: 'Soporte por WhatsApp', desc: 'Acceso directo al equipo durante las 6 semanas. Cuando tengas una duda, una respuesta en menos de 24h.' },
  { num: '06', title: 'Certificado de finalización', desc: 'Un certificado que acredita las competencias adquiridas y los resultados conseguidos durante el programa.' },
];

const phases = [
  {
    week: 'Semana 1–2',
    title: 'Diagnóstico y fundamentos',
    desc: 'Identificamos tu punto de partida, definimos el proyecto y establecemos las bases de trabajo con IA aplicada a tu contexto real.',
  },
  {
    week: 'Semana 3–4',
    title: 'Implementación y práctica',
    desc: 'Construimos los primeros flujos, automatizaciones y procesos. Cada sesión termina con algo funcionando en tu empresa.',
  },
  {
    week: 'Semana 5–6',
    title: 'Consolidación y entrega',
    desc: 'Refinamos lo implementado, documentamos los sistemas y preparamos tu plan de acción para seguir avanzando solo.',
  },
];

export default function ProgramaIntensivoPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <div style={{ maxWidth: '760px' }}>
              <span
                className="v5-reveal"
                style={{
                  display: 'block',
                  marginBottom: '28px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                }}
              >
                School Lab · Programa Intensivo
              </span>
              <h1
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  color: '#F5F5F0',
                  marginBottom: '32px',
                  transitionDelay: '80ms',
                }}
              >
                Transforma cómo usas<br />
                <span style={{ color: 'rgba(245,245,240,0.35)' }}>la IA en 6 semanas.</span>
              </h1>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.48)',
                  maxWidth: '560px',
                  transitionDelay: '160ms',
                }}
              >
                Acompañamiento personalizado con sesiones 1:1, proyectos reales de tu empresa y un plan de implementación
                concreto al final.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="mb-20 v5-reveal flex flex-col items-start gap-4">
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
                Qué incluye
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Todo lo que necesitas<br />
                <span style={{ color: '#999999' }}>para no fallar.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, i) => (
                <div
                  key={item.num}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: 'clamp(28px, 3vw, 44px)',
                    transitionDelay: `${i * 70}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#CCCCCC',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                    }}
                  >
                    {item.title}
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="mb-20 v5-reveal flex flex-col items-start gap-4">
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
                Estructura del programa
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                6 semanas con<br />
                <span style={{ color: '#999999' }}>propósito claro.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {phases.map((phase, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: 'clamp(28px, 3vw, 48px)',
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '32px',
                    alignItems: 'start',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#AAAAAA',
                      }}
                    >
                      {phase.week}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '22px',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#DDDDDD',
                        lineHeight: 1,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(20px, 2vw, 26px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                      }}
                    >
                      {phase.title}
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
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '520px',
                margin: '0 auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
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
                Inversión
              </span>
              <div
                style={{
                  background: '#080808',
                  borderRadius: '20px',
                  padding: '56px 48px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(52px, 7vw, 80px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    color: '#F5F5F0',
                    lineHeight: 1,
                  }}
                >
                  490€
                </span>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,245,240,0.35)',
                  }}
                >
                  programa completo
                </span>
                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    background: 'rgba(255,255,255,0.08)',
                    margin: '8px 0',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.45)',
                    maxWidth: '360px',
                    textAlign: 'center',
                  }}
                >
                  6 semanas, sesiones 1:1, proyecto real y plan de acción documentado.
                  Plazas muy limitadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
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
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                Plazas limitadas
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                El siguiente paso<br />
                <span style={{ color: 'rgba(245,245,240,0.35)' }}>es el más importante.</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '480px',
                }}
              >
                Solicita tu plaza. Te contactaremos en menos de 24 horas para hacer una primera llamada de diagnóstico sin compromiso.
              </p>
              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 40px',
                  background: '#F5F5F0',
                  color: '#080808',
                  borderRadius: '0px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                Solicitar plaza →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
