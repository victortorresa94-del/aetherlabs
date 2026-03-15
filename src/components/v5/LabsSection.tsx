'use client';

import Link from 'next/link';

const labs = [
  {
    key: 'creative',
    label: 'Creative Lab',
    title: 'Haz que te vean, te entiendan y te elijan',
    description: 'Producimos el material de marketing que tu empresa necesita para existir en el mundo digital.',
    services: [
      'Web corporativa y landing pages',
      'Vídeos con IA (avatar, explicativos, reels)',
      'Branding e identidad visual',
      'Presentaciones y material de venta',
      'Creatividades para anuncios',
    ],
    cta: 'Explorar Creative Lab',
    href: '/creative-lab',
    span: 7,
  },
  {
    key: 'systems',
    label: 'Systems Lab',
    title: 'Automatiza cómo opera tu negocio',
    description: 'Claude, Copilot, n8n. Lo que necesitas, implementado.',
    services: [
      'Sesión de Claridad (diagnóstico)',
      'Implementación de Claude y Copilot',
      'Automatización de flujos',
      'AI Stacks por departamento',
    ],
    cta: 'Explorar Systems Lab',
    href: '/systems-lab',
    span: 5,
  },
  {
    key: 'school',
    label: 'School Lab',
    title: 'Aprende IA desde cero',
    description: 'Talleres y programas para personas, equipos e instituciones.',
    services: [
      'Talleres para equipos de empresa',
      'Programa para personas no técnicas',
      'Formación para jóvenes',
      'Charlas para instituciones',
    ],
    cta: 'Explorar School Lab',
    href: '/school-lab',
    span: 12,
  },
];

export default function LabsSection() {
  return (
    <section id="servicios" className="v5-section" style={{ backgroundColor: '#080808' }}>
      <div className="v5-container">

        {/* Header */}
        <div className="mb-16 v5-reveal">
          <span
            style={{
              display: 'block',
              marginBottom: '16px',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#666666',
            }}
          >
            Servicios
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#F5F5F0',
            }}
          >
            Tres laboratorios.{' '}
            <span style={{ color: 'rgba(245,245,240,0.22)' }}>Un objetivo.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}
        >
          {labs.map((lab, i) => (
            <div
              key={lab.key}
              className="v5-reveal flex flex-col justify-between"
              style={{
                gridColumn: `span ${lab.span}`,
                minHeight: lab.span === 12 ? '160px' : '380px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: lab.span === 12 ? '36px 40px' : '40px',
                transition: 'border-color 300ms ease, background 300ms ease',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.background = 'rgba(255,255,255,0.035)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.025)';
              }}
            >
              <div className="flex-1">
                <span
                  style={{
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '10px',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.30)',
                  }}
                >
                  {lab.label}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: lab.span === 12 ? 'clamp(18px, 2vw, 24px)' : 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    color: 'rgba(255,255,255,0.88)',
                    marginBottom: '12px',
                  }}
                >
                  {lab.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.38)',
                    marginBottom: '24px',
                  }}
                >
                  {lab.description}
                </p>

                {/* Vertical list for span-7 and span-5 */}
                {lab.span !== 12 && (
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
                    {lab.services.map((service) => (
                      <li key={service} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            flexShrink: 0,
                            backgroundColor: 'rgba(255,255,255,0.22)',
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--v5-font-body)',
                            fontSize: '13px',
                            fontWeight: 300,
                            color: 'rgba(255,255,255,0.42)',
                          }}
                        >
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Pills for span-12 */}
                {lab.span === 12 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {lab.services.map((service) => (
                      <span
                        key={service}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '100px',
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '12px',
                          fontWeight: 300,
                          color: 'rgba(255,255,255,0.42)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={lab.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.40)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.80)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.40)';
                }}
              >
                {lab.cta}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
