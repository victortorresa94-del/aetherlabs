'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
    >
      <div className="v5-container relative z-10 w-full">
        <div className="v5-hero-grid items-center">

          {/* Left — Text */}
          <div className="flex flex-col items-start text-left">
            <span
              className="v5-reveal mb-8"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
                transitionDelay: '0ms',
              }}
            >
              Implementación de IA · Barcelona
            </span>

            <h1
              className="v5-reveal mb-8"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(48px, 6.8vw, 92px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                transitionDelay: '80ms',
              }}
            >
              El puente<br />
              entre personas<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>y tecnología.</span>
            </h1>

            <p
              className="v5-reveal mb-12"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.50)',
                maxWidth: '420px',
                transitionDelay: '160ms',
              }}
            >
              Ayudamos a empresas con buen producto a conseguir clientes
              y operar mejor, usando IA de forma práctica.
            </p>

            <div
              className="v5-reveal v5-hero-buttons"
              style={{ transitionDelay: '220ms' }}
            >
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  borderRadius: '100px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 400,
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
              <Link href="#servicios" className="v5-btn-ghost">
                Ver servicios
              </Link>
            </div>

            <div
              className="v5-reveal mt-16 flex flex-col items-start gap-3"
              style={{ transitionDelay: '300ms' }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.22)',
                }}
              >
                Con quienes trabajamos
              </span>
              <div className="flex gap-8 items-center flex-wrap">
                {['KMeleon', 'Microsoft', 'Tech BCN', 'Closius'].map((name) => (
                  <span
                    key={name}
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '13px',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: 'rgba(255,255,255,0.18)',
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Warm card */}
          <div className="v5-hide-on-mobile w-full flex justify-end">
            <div
              className="v5-reveal relative w-full max-w-[440px]"
              style={{
                animation: 'heroFloat 7s ease-in-out infinite',
                transitionDelay: '100ms',
              }}
            >
              {/* Card */}
              <div
                style={{
                  background: '#EDE8DF',
                  borderRadius: '20px',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 4px 20px rgba(0,0,0,0.30)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/chrome-sculpture.jpeg"
                    alt="Chrome sculpture"
                    fill
                    className="object-cover"
                    style={{ filter: 'contrast(1.1) brightness(1.05)', mixBlendMode: 'luminosity' }}
                    priority
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(237,232,223,0.25)', mixBlendMode: 'color' }}
                  />
                </div>
              </div>

              {/* Pills */}
              <div
                className="v5-floating-pill"
                style={{ top: '10%', right: '-16px' }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 flex-shrink-0" />
                  Sistema online
                </span>
              </div>

              <div
                className="v5-floating-pill"
                style={{ bottom: '16%', left: '-16px' }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  IA Ready
                </span>
              </div>

              <div
                className="v5-floating-pill"
                style={{ top: '52%', right: '-16px', fontSize: '10px' }}
              >
                v5.0
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
          background: 'radial-gradient(circle at 65% 25%, rgba(237,232,223,0.030) 0%, transparent 55%)',
        }}
      />
    </section>
  );
}
