'use client';

import Link from 'next/link';

const labs = [
  {
    key: 'creative',
    label: 'Creative Lab',
    title: 'Haz que te vean,\nte entiendan\ny te elijan',
    description: 'Producimos el material de marketing que tu empresa necesita para existir en el mundo digital.',
    services: [
      'Web corporativa y landing pages',
      'Vídeos con IA (avatar, explicativos, reels)',
      'Branding e identidad visual',
      'Presentaciones y material de venta',
      'Creatividades para anuncios',
    ],
    cta: 'Explorar Creative Lab →',
    href: '/creative-lab',
    large: true,
  },
  {
    key: 'systems',
    label: 'Systems Lab',
    title: 'Automatiza cómo\nopera tu negocio',
    description: 'Claude, Copilot, n8n. Lo que necesitas, implementado.',
    services: [
      'Sesión de Claridad (diagnóstico)',
      'Implementación de Claude y Copilot',
      'Automatización de flujos',
      'AI Stacks por departamento',
      'Formación de equipos',
    ],
    cta: 'Explorar Systems Lab →',
    href: '/systems-lab',
    large: false,
  },
  {
    key: 'school',
    label: 'School Lab',
    title: 'Aprende IA\ndesde cero',
    description: 'Talleres y programas para personas, equipos e instituciones.',
    services: [
      'Talleres para equipos de empresa',
      'Programa para personas no técnicas',
      'Formación para jóvenes',
      'Charlas para instituciones',
    ],
    cta: 'Explorar School Lab →',
    href: '/school-lab',
    large: false,
  },
];

export default function LabsSection() {
  return (
    <section id="servicios" className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <div className="v5-container">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '16px' }}>
            Nuestros servicios
          </span>
          <h2 className="v5-h2 v5-reveal">
            Tres laboratorios.<br />
            Un objetivo: que tu empresa avance.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="v5-bento-grid v5-reveal">
          {labs.map((lab) => (
            <div
              key={lab.key}
              className={`v5-lab-card ${lab.large ? 'v5-bento-large' : 'v5-bento-small'}`}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              {/* Creative lab animated diagonal BG */}
              {lab.large && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--v5-radius-lg)',
                  pointerEvents: 'none',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'repeating-linear-gradient(135deg, transparent 0px, transparent 38px, rgba(0,229,255,0.04) 38px, rgba(0,229,255,0.04) 40px)',
                    backgroundSize: '80px 80px',
                  }} />
                </div>
              )}

              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                {/* Label */}
                <span className="v5-label" style={{ display: 'block', marginBottom: '20px' }}>
                  {lab.label}
                </span>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 700,
                  fontSize: lab.large ? 'clamp(28px, 3vw, 42px)' : 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#000000',
                  marginBottom: '16px',
                  whiteSpace: 'pre-line',
                }}>
                  {lab.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                }}>
                  {lab.description}
                </p>

                {/* Services list */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {lab.services.map((service) => (
                    <li key={service} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--v5-accent)" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        color: '#444444',
                      }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={lab.href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--v5-accent)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'gap var(--v5-transition)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.gap = '12px'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.gap = '6px'}
              >
                {lab.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
