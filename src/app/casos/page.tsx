'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const casos = [
  {
    badge: 'Creative Lab',
    sector: 'EDUCACIÓN ONLINE',
    title: 'Llenar un máster de composición musical en un mercado saturado de cursos.',
    desc: 'Estrategia de lanzamiento completa. Funnel con ManyChat, reels, lead magnets y cierre de ventas directo.',
    resultado: '+20.000€',
    resultadoLabel: 'en ventas · ~200 alumnos inscritos · Objetivo cumplido.',
    image: '/images/creative/twojeys.jpg',
  },
  {
    badge: 'Systems Lab',
    sector: 'AGENCIA DE MARKETING',
    title: 'Una agencia creciendo rápido sin estructura para soportarlo.',
    desc: 'Implementamos ClickUp desde cero. Creamos +40 SOPs para que cada proceso estuviera documentado y delegable. Formamos al equipo para que lo usara.',
    resultado: '+40 proyectos',
    resultadoLabel: 'gestionados a la vez · Sistema propio que no depende de una persona.',
    image: '/images/aether-office.jpg',
  },
  {
    badge: 'Creative Lab',
    sector: 'LANZAMIENTO INTERNACIONAL',
    title: 'Lanzar una marca desde cero en el mercado americano.',
    desc: 'Go-to-market completo: estudio de mercado, definición de pricing, búsqueda de proveedores, branding y web.',
    resultado: 'Marca operativa',
    resultadoLabel: 'en EE.UU. desde cero · Base estratégica completa para escalar.',
    image: '/images/skyflex/main.jpg',
  },
  {
    badge: 'School Lab',
    sector: 'INSTITUCIONAL',
    title: 'Llevar la IA a mujeres de 40-60 que nunca habían tocado una herramienta de IA.',
    desc: 'Talleres presenciales diseñados desde cero. Sin tecnicismos. Solo móvil. En colaboración con el Ajuntament de Badalona.',
    resultado: 'Primer programa',
    resultadoLabel: 'institucional validado · Base del catálogo actual de 9 programas.',
    image: '/images/learn/learning-session-elegant.png',
  },
];

const casosDeUso = [
  {
    title: 'Reporting automático',
    desc: 'Una empresa de servicios B2B tardaba 4 horas cada lunes en preparar el informe de ventas. Implementamos Claude + n8n. Ahora el informe llega solo a las 8h del lunes, sin que nadie toque nada.',
  },
  {
    title: 'Onboarding automático de clientes',
    desc: 'Cada nuevo cliente generaba 30 minutos de trabajo manual: crear proyecto en ClickUp, carpeta en Drive, email de bienvenida. Ahora ese flujo se completa solo en 2 minutos.',
  },
  {
    title: 'Equipo de marketing con Claude',
    desc: 'Un equipo de marketing de 4 personas generaba el triple de contenido en el mismo tiempo después de implementar Claude Cowork con Skills personalizados para su proceso de creación.',
  },
];

export default function CasosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '140px', paddingBottom: '80px' }}
        >
          <div className="v5-container">
            <span
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
              Casos
            </span>
            <h1
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '800px',
                marginBottom: '24px',
              }}
            >
              Proyectos que hablan<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>por sí solos.</span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '520px',
              }}
            >
              Trabajo real. Resultados reales. Sin humo.
            </p>
          </div>
        </section>

        {/* Casos reales — vertical cards */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div
            className="v5-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {casos.map((caso, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EBEBEB',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Image — full width, top */}
                <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
                  <img
                    src={caso.image}
                    alt={caso.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Content — below image */}
                <div
                  style={{
                    padding: '48px 56px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  {/* Badge row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#111111',
                        background: '#EBEBEB',
                        padding: '4px 10px',
                        borderRadius: '100px',
                      }}
                    >
                      {caso.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      {caso.sector}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                      margin: 0,
                    }}
                  >
                    {caso.title}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                      margin: 0,
                    }}
                  >
                    {caso.desc}
                  </p>

                  {/* Resultado block */}
                  <div
                    style={{
                      borderTop: '1px solid #EBEBEB',
                      paddingTop: '24px',
                      marginTop: '4px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(32px, 3.5vw, 40px)',
                        fontWeight: 300,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                        color: '#111111',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {caso.resultado}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#999999',
                        margin: 0,
                      }}
                    >
                      {caso.resultadoLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casos de uso */}
        <section
          className="v5-section"
          style={{
            backgroundColor: '#F8F8F8',
            borderTop: '1px solid #EBEBEB',
            borderBottom: '1px solid #EBEBEB',
          }}
        >
          <div className="v5-container">
            <div className="mb-16 v5-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  marginBottom: '20px',
                }}
              >
                Casos de uso
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
                Lo que implementamos cada semana
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 v5-section-gap">
              {casosDeUso.map((cu, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Decorative background number */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '20px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '100px',
                      fontWeight: 700,
                      color: 'rgba(0,0,0,0.04)',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      margin: 0,
                    }}
                  >
                    {cu.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                      margin: 0,
                    }}
                  >
                    {cu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '672px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                textAlign: 'center',
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
                  margin: 0,
                }}
              >
                ¿Tu empresa podría ser el próximo caso?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  margin: 0,
                }}
              >
                Cuéntanos el reto.
              </p>
              <div>
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
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
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Contactar →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
