'use client';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const checklistItems = [
  'Análisis de procesos actuales',
  'Identificación de oportunidades de IA',
  'Priorización por impacto y esfuerzo',
  'Herramientas específicas recomendadas',
  'Plan de acción con siguientes pasos',
  'Documento resumen post-sesión (PDF)',
];

const audienceCards = [
  {
    title: 'Empresas de 2-20 personas',
    desc: 'Con estructura mínima pero sin tiempo para explorar herramientas.',
  },
  {
    title: 'Fundadores con poco tiempo',
    desc: 'Que saben que la IA puede ayudarles pero no saben por dónde empezar.',
  },
  {
    title: 'Equipos que ya usan IA',
    desc: 'Pero de forma desordenada, sin sistema ni estrategia clara.',
  },
];

const faqs = [
  {
    q: '¿Tengo que contratar algo después?',
    a: 'No. La sesión es independiente. Si tiene sentido seguir trabajando juntos, lo proponemos. Si no, te vas con el informe.',
  },
  {
    q: '¿Cómo es el formato?',
    a: 'Videollamada de 90 minutos. Te pedimos que vengas con información básica de tu empresa y tus principales dolores.',
  },
  {
    q: '¿Los 150€ se descuentan si contrato?',
    a: 'Sí. Si decides trabajar con nosotros, los 150€ se aplican al primer proyecto.',
  },
  {
    q: '¿En cuánto tiempo tengo el informe?',
    a: 'En menos de 48h después de la sesión.',
  },
];

export default function SesionDeClaridadPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Section 1 — Hero */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '100px' }}
        >
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
              Sesión de Claridad
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
                maxWidth: '700px',
                marginBottom: '28px',
                whiteSpace: 'pre-line',
              }}
            >
              {'90 minutos.\nTodo claro.'}
            </h1>

            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '520px',
                marginBottom: '32px',
              }}
            >
              Analizamos tu empresa, identificamos las oportunidades de IA más rentables y te decimos exactamente qué hacer. Sin humo. Sin compromiso.
            </p>

            <div
              className="v5-reveal"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '8px 20px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(245,245,240,0.6)',
                }}
              >
                150€ · o gratis en sesiones de lanzamiento
              </span>

              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 40px',
                  background: '#FFFFFF',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#E8E8E0';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                }}
              >
                Reservar sesión →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 — Qué incluye */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div
              className="sdc-two-col"
              style={{
                display: 'grid',
                gridTemplateColumns: '5fr 7fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              {/* Left */}
              <div>
                <h2
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    marginBottom: '24px',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {'Una conversación honesta\nsobre tu empresa.'}
                </h2>

                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: '#555555',
                    marginBottom: '20px',
                  }}
                >
                  90 minutos contigo. Sin presentación de ventas. Hablamos de cómo funciona tu empresa, dónde se pierde tiempo y dinero, y qué haríamos exactamente para mejorarlo con IA.
                </p>

                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: '#555555',
                  }}
                >
                  Al acabar tienes un documento con las 3-5 acciones concretas que recomendamos. Sin compromiso de contratar.
                </p>
              </div>

              {/* Right */}
              <div className="v5-reveal">
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '18px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: '#111111',
                    marginBottom: '24px',
                  }}
                >
                  Lo que incluye:
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {checklistItems.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle cx="8" cy="8" r="7.5" stroke="#111111" strokeOpacity="0.15" />
                        <path
                          d="M4.5 8.5L6.5 10.5L11.5 5.5"
                          stroke="#111111"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '16px',
                          fontWeight: 300,
                          color: '#444444',
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Para quién */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '48px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '16px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Perfil
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                ¿Para quién es?
              </h2>
            </div>

            <div
              className="sdc-cards-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
            >
              {audienceCards.map((card, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: '32px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
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
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — FAQ */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '16px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                FAQ
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Preguntas frecuentes
              </h2>
            </div>

            <div
              className="sdc-faq-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px 80px',
                maxWidth: '960px',
              }}
            >
              {faqs.map((faq, i) => (
                <div key={i} className="v5-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '17px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.q}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', textAlign: 'center' }}
        >
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Listo para tenerlo todo claro?
              </h2>

              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Sin compromiso. Sin presentación de ventas.
              </p>

              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 40px',
                  background: '#FFFFFF',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#E8E8E0';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                }}
              >
                Reservar mi sesión →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .sdc-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .sdc-cards-grid { grid-template-columns: 1fr !important; }
          .sdc-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
