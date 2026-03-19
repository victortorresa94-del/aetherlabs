'use client';

import Link from 'next/link';
import Image from 'next/image';

const proyectos = [
  {
    badge: 'Creative Lab',
    sector: 'EDUCACIÓN ONLINE',
    title: 'Llenar un máster en un mercado saturado',
    desc: 'Estrategia de lanzamiento, reels, lead magnets y funnel completo con ManyChat.',
    metrica: '+20.000€',
    metricaLabel: 'en ventas · ~200 alumnos inscritos',
    image: '/images/creative-lab/video.jpg',
  },
  {
    badge: 'Systems Lab',
    sector: 'AGENCIA DE MARKETING',
    title: 'Agencia creciendo sin estructura que lo soporte',
    desc: 'ClickUp desde cero, +40 SOPs documentados, formación del equipo completo.',
    metrica: '+40 proyectos',
    metricaLabel: 'gestionados simultáneamente',
    image: '/images/aether-office.jpg',
  },
];

export default function ProyectosSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="v5-container">

        {/* Header */}
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
            Trabajo real
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111111',
            }}
          >
            Proyectos que hablan<br />
            <span style={{ color: '#999999' }}>por sí solos.</span>
          </h2>
        </div>

        {/* Cards — 2-column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((p, i) => (
            <div
              key={i}
              className="v5-reveal flex flex-col"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: '#F8F8F8',
                border: '1px solid #EBEBEB',
                borderRadius: '16px',
                overflow: 'hidden',
                minHeight: '280px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  backgroundColor: '#EDE8DF',
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-4" style={{ padding: '56px 48px' }}>
                <div className="flex items-center gap-3">
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
                    {p.badge}
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
                    {p.sector}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '22px',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    color: '#111111',
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: '#666666',
                  }}
                >
                  {p.desc}
                </p>

                {/* Result metric — large and eye-catching */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '24px',
                    borderTop: '1px solid #EBEBEB',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: 300,
                      letterSpacing: '-0.03em',
                      color: '#111111',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}
                  >
                    {p.metrica}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: '#999999',
                    }}
                  >
                    {p.metricaLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 v5-reveal flex justify-center">
          <Link
            href="/casos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--v5-font-body)',
              fontSize: '15px',
              fontWeight: 400,
              color: '#111111',
              textDecoration: 'none',
              padding: '14px 28px',
              border: '1px solid #DEDEDE',
              borderRadius: '100px',
              transition: 'opacity 200ms ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            Ver todos los casos →
          </Link>
        </div>

      </div>
    </section>
  );
}
