'use client';

import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { name: 'KMeleon', type: 'text' },
  { name: 'Claude', type: 'claude' },
  { name: 'Artiverse', type: 'artiverse' },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="v5-container relative z-10 w-full">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="lg:!grid-cols-[1.3fr_0.7fr] lg:!gap-[12rem]"
        >

          {/* Left — Text */}
          <div className="flex flex-col items-start text-left">

            {/* Eyebrow label */}
            <span
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#666666',
                transitionDelay: '0ms',
                marginBottom: '28px',
              }}
            >
              Implementación de IA · Barcelona
            </span>

            {/* H1 */}
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                color: '#F5F5F0',
                transitionDelay: '80ms',
                marginBottom: '32px',
              }}
            >
              El puente<br />
              entre personas<br />
              <span style={{ color: 'rgba(245,245,240,0.35)' }}>y tecnología.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.48)',
                maxWidth: '500px',
                transitionDelay: '160ms',
                marginBottom: '48px',
              }}
            >
              Ayudamos a empresas con buen producto a conseguir clientes
              y operar mejor, usando IA de forma práctica.
            </p>

            {/* CTAs */}
            <div
              className="v5-reveal flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: '220ms', marginBottom: '72px' }}
            >
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: '#F5F5F0',
                  color: '#080808',
                  borderRadius: '0px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  whiteSpace: 'nowrap',
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
                Reservar sesión
              </Link>
              <Link
                href="#servicios"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.50)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '0px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.50)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                Ver servicios
              </Link>
            </div>

            {/* Partner logos */}

          </div>

          {/* Right — 3D card */}
          <div className="hidden lg:flex w-full justify-end">
            <div
              className="v5-reveal relative w-full max-w-[460px]"
              style={{
                animation: 'heroFloat 7s ease-in-out infinite',
                transitionDelay: '100ms',
              }}
            >
              <div
                className="card-3d-object card-3d-object-shadow"
                style={{
                  aspectRatio: '4/5',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/chrome-sculpture.jpeg"
                    alt="Aether Labs"
                    fill
                    className="object-cover"
                    style={{ filter: 'contrast(1.1) brightness(1.05)', mixBlendMode: 'luminosity' }}
                    priority
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(237,232,223,0.20)', mixBlendMode: 'color' }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle at 65% 25%, rgba(237,232,223,0.025) 0%, transparent 55%)',
        }}
      />
    </section>
  );
}
