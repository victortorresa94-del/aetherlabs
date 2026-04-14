'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AIHeroSection() {
  const mounted = useRef(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    setShow(true);

    (async () => {
      const { gsap } = await import('gsap');
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('.ai-hero-label',  { opacity: 0, y: -20, duration: 0.4, ease: 'power3.out' })
        .from('.ai-hero-line-1', { opacity: 0, y: 60, duration: 0.7, ease: 'power4.out' }, '-=0.1')
        .from('.ai-hero-line-2', { opacity: 0, y: 60, duration: 0.7, ease: 'power4.out' }, '-=0.5')
        .from('.ai-hero-claim > p', {
          opacity: 0, y: 20, duration: 0.5, ease: 'power3.out', stagger: 0.08,
        }, '-=0.2')
        .from('.ai-hero-cta',  { opacity: 0, y: 20, duration: 0.4 }, '-=0.1')
        .from('.ai-hero-sub',  { opacity: 0, duration: 0.4 }, '-=0.1')
        .from('.ai-hero-scroll', { opacity: 0, duration: 0.4 }, '-=0.1');
    })();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 48px',
        textAlign: 'center',
        backgroundImage:
          'radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.04) 0%, transparent 60%)',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <div
        className="ai-hero-label"
        style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: '#00E5FF',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '32px',
          opacity: show ? undefined : 0,
        }}
      >
        El servicio principal de Aether Labs
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(100px, 15vw, 220px)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          lineHeight: 0.9,
          marginBottom: '56px',
          opacity: show ? undefined : 0,
        }}
        aria-label="AETHER INSIDE"
      >
        <div className="ai-hero-line-1">AETHER</div>
        <div className="ai-hero-line-2">INSIDE</div>
      </div>

      {/* Claim */}
      <div
        className="ai-hero-claim"
        style={{
          marginBottom: '56px',
          opacity: show ? undefined : 0,
        }}
      >
        {[
          'Vamos a tu empresa.',
          'Formamos a tu equipo.',
          'Construimos los sistemas.',
          'Nos aseguramos de que funcionen.',
        ].map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(17px, 2vw, 24px)',
              fontWeight: 300,
              color: 'rgba(245,245,245,0.8)',
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* CTA */}
      <div className="ai-hero-cta" style={{ opacity: show ? undefined : 0 }}>
        <CTALink href="/contacto" />
      </div>

      {/* Reassurance */}
      <p
        className="ai-hero-sub"
        style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          color: 'rgba(245,245,245,0.3)',
          letterSpacing: '0.1em',
          marginTop: '16px',
          opacity: show ? undefined : 0,
        }}
      >
        Sin compromiso · Sin presentación de ventas
      </p>

      {/* Scroll indicator */}
      <div
        className="ai-hero-scroll"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: show ? undefined : 0,
          animation: 'aiScrollBounce 1.6s ease-in-out infinite',
        }}
      >
        <span style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '9px',
          color: 'rgba(245,245,245,0.25)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Continúa
        </span>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M6 1v16M1 11l5 6 5-6" stroke="rgba(245,245,245,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes aiScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 640px) {
          section[style*="100vh"] { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}

function CTALink({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '18px 40px',
        backgroundColor: hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        color: '#FFFFFF',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'}`,
        borderRadius: '2px',
        fontFamily: 'var(--v5-font-body)',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      }}
    >
      Cuéntanos lo que necesitas
    </Link>
  );
}
