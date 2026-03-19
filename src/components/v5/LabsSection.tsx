'use client';

import Link from 'next/link';
import Image from 'next/image';

const labs = [
  {
    key: 'systems',
    label: 'Systems Lab',
    title: 'Automatiza cómo opera tu negocio',
    description: 'Implementamos IA como Claude y Copilot. Automatizamos flujos para que el trabajo tedioso desaparezca.',
    cta: 'Explorar Systems Lab',
    href: '/systems-lab',
    image: '/images/aether-office.jpg',
  },
  {
    key: 'creative',
    label: 'Creative Lab',
    title: 'Material de marketing que funciona',
    description: 'Interfaces, landing pages, avatares 3D y diseño. Haz que te vean, te entiendan y te elijan.',
    cta: 'Explorar Creative Lab',
    href: '/creative-lab',
    image: '/images/3d/branding.jpeg',
  },
  {
    key: 'school',
    label: 'School Lab',
    title: 'Aprende IA desde cero',
    description: 'Cursos, talleres y programas presenciales para empresas. Transforma a tu equipo con nueva tecnología.',
    cta: 'Explorar School Lab',
    href: '/school-lab',
    image: '/images/school-workshop.png',
  },
];

export default function LabsSection() {
  return (
    <section id="servicios" className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="v5-container">
        {/* Header */}
        <div className="mb-20 lg:mb-48 v5-reveal flex flex-col items-center text-center gap-4">
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
            Nuestros Labs
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
            Tres laboratorios.<br />
            <span style={{ color: '#999999' }}>Un objetivo común.</span>
          </h2>
        </div>

        {/* 3 Equal Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 v5-section-gap"
        >
          {labs.map((lab, i) => (
            <div
              key={lab.key}
              className="v5-reveal flex flex-col"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: '#F8F8F8',
                border: '1px solid #EBEBEB',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: '#EDE8DF', // Warm card inner bg
                }}
              >
                <Image
                  src={lab.image}
                  alt={lab.title}
                  fill
                  className="object-cover"
                  style={{
                    filter: 'contrast(1.05) brightness(1.02)'
                  }}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1" style={{ padding: '40px 32px' }}>
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
                  {lab.label}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '24px',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    color: '#111111',
                    marginBottom: '16px',
                  }}
                >
                  {lab.title}
                </h3>

                <p
                  className="flex-1"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                    marginBottom: '32px',
                  }}
                >
                  {lab.description}
                </p>

                <Link
                  href={lab.href}
                  className="group"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#111111',
                    textDecoration: 'none',
                    transition: 'opacity 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  {lab.cta}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                    style={{ transition: 'transform 200ms ease' }}
                    className="group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
