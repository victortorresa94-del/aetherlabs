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
    resultado: '+20.000€ en ventas · ~200 alumnos inscritos · Objetivo cumplido.',
    image: '/images/creative-lab/video.jpg',
  },
  {
    badge: 'Systems Lab',
    sector: 'AGENCIA DE MARKETING',
    title: 'Una agencia creciendo rápido sin estructura para soportarlo.',
    desc: 'Implementamos ClickUp desde cero. Creamos +40 SOPs para que cada proceso estuviera documentado y delegable. Formamos al equipo para que lo usara.',
    resultado: '+40 proyectos gestionados a la vez · Sistema propio que no depende de una persona.',
    image: '/images/aether-office.jpg',
  },
  {
    badge: 'Creative Lab',
    sector: 'LANZAMIENTO INTERNACIONAL',
    title: 'Lanzar una marca desde cero en el mercado americano.',
    desc: 'Go-to-market completo: estudio de mercado, definición de pricing, búsqueda de proveedores, branding y web.',
    resultado: 'Marca operativa en EE.UU. desde cero · Base estratégica completa para escalar.',
    image: '/images/creative-lab/web.jpg',
  },
  {
    badge: 'School Lab',
    sector: 'INSTITUCIONAL',
    title: 'Llevar la IA a mujeres de 40-60 que nunca habían tocado una herramienta de IA.',
    desc: 'Talleres presenciales diseñados desde cero. Sin tecnicismos. Solo móvil. En colaboración con el Ajuntament de Badalona.',
    resultado: 'Primer programa institucional validado · Base del catálogo actual de 9 programas.',
    image: '/images/school-individual.png',
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

        {/* Casos reales */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container flex flex-col gap-8">
            {casos.map((caso, i) => (
              <div
                key={i}
                className="v5-reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden"
                style={{
                  background: '#F8F8F8',
                  border: '1px solid #EBEBEB',
                  borderRadius: '16px',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    minHeight: '280px',
                    backgroundColor: '#EDE8DF',
                  }}
                >
                  <Image
                    src={caso.image}
                    alt={caso.title}
                    fill
                    className="object-cover"
                    style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-10 md:p-14 gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#111111',
                          background: '#DDDDD0',
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
                          color: '#AAAAAA',
                        }}
                      >
                        {caso.sector}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(20px, 2vw, 26px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                      }}
                    >
                      {caso.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#666666',
                      }}
                    >
                      {caso.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      paddingTop: '20px',
                      borderTop: '1px solid #DDDDD0',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(16px, 1.8vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        color: '#111111',
                        lineHeight: 1.4,
                      }}
                    >
                      {caso.resultado}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casos de uso */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal flex flex-col gap-4">
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
                  className="v5-reveal flex flex-col gap-4 p-10 md:p-12"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    transitionDelay: `${i * 80}ms`,
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
                    0{i + 1}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
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
            <div className="v5-reveal max-w-2xl mx-auto flex flex-col gap-8">
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
                ¿Tu empresa podría ser el próximo caso?
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
