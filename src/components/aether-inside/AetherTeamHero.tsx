'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AetherTeamHero() {
  const mounted = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    setReady(true);

    (async () => {
      const { gsap } = await import('gsap');
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from('.ath-label',   { opacity: 0, y: -16, duration: 0.5, ease: 'power3.out' })
        .from('.ath-title-1', { opacity: 0, y: 80,  duration: 0.8, ease: 'power4.out' }, '-=0.2')
        .from('.ath-title-2', { opacity: 0, y: 80,  duration: 0.8, ease: 'power4.out' }, '-=0.6')
        .from('.ath-body > *', { opacity: 0, y: 24,  duration: 0.55, ease: 'power3.out', stagger: 0.1 }, '-=0.3')
        .from('.ath-cta',     { opacity: 0, y: 20,  duration: 0.4 }, '-=0.1')
        .from('.ath-panel',   { opacity: 0, x: 40,  duration: 0.9, ease: 'power3.out' }, 0.2);
    })();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT: text content ── */}
      <div style={{
        flex: '0 0 58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(100px, 12vw, 160px) clamp(32px, 5vw, 80px) clamp(80px, 10vw, 120px)',
        position: 'relative',
        zIndex: 2,
      }}
      className="ath-left"
      >
        {/* Label */}
        <div
          className="ath-label"
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            fontWeight: 400,
            color: 'rgba(245,240,232,0.35)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '48px',
            opacity: ready ? undefined : 0,
          }}
        >
          Servicio flagship · Aether Labs
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(72px, 10vw, 148px)',
            fontWeight: 400,
            color: '#F5F0E8',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            marginBottom: '52px',
            opacity: ready ? undefined : 0,
          }}
        >
          <div className="ath-title-1">Aether</div>
          <div className="ath-title-2" style={{ color: 'rgba(245,240,232,0.45)' }}>Team</div>
        </div>

        {/* Body lines */}
        <div
          className="ath-body"
          style={{
            marginBottom: '52px',
            opacity: ready ? undefined : 0,
          }}
        >
          {[
            'No contratas herramientas.',
            'Contratas un equipo de IA dedicado a tu empresa.',
            'Que implementa, evoluciona y mejora sin parar.',
          ].map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: 'clamp(15px, 1.6vw, 19px)',
                fontWeight: i === 0 ? 400 : 300,
                color: i === 0 ? 'rgba(245,240,232,0.85)' : 'rgba(245,240,232,0.4)',
                lineHeight: 1.7,
                margin: 0,
                fontStyle: i === 0 ? 'italic' : 'normal',
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="ath-cta" style={{ display: 'flex', alignItems: 'center', gap: '32px', opacity: ready ? undefined : 0 }}>
          <CTAButton href="/systems-lab/sesion-de-claridad" primary>
            Sesión de claridad gratuita →
          </CTAButton>
          <Link
            href="#proceso"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.35)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.65)'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.35)'; }}
          >
            Ver cómo funciona
          </Link>
        </div>

        {/* Bottom meta */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(32px, 5vw, 56px)',
          left: 'clamp(32px, 5vw, 80px)',
          display: 'flex',
          gap: '32px',
        }}>
          {['Desde 1.200€/mes', 'Sin permanencia', 'Resultado en 30 días'].map((t) => (
            <span key={t} style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '9px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.2)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── RIGHT: image panel ── */}
      <div
        className="ath-panel"
        style={{
          flex: '0 0 42%',
          position: 'relative',
          opacity: ready ? undefined : 0,
          overflow: 'hidden',
        }}
      >
        {/* Real photo — generated by scripts/generate-aether-team-hero.mjs */}
        <Image
          src="/images/aether-team-hero.jpg"
          alt="Aether Team — textura arquitectónica"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
        />

        {/* Fallback gradient (visible when image hasn't been generated yet) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #D9CFC0 0%, #C8B89A 25%, #BCA98A 50%, #C4B49C 70%, #D4C8B4 100%)',
          zIndex: 0,
        }} />

        {/* Grain texture fallback overlay */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="ath-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          filter: 'url(#ath-grain)',
          opacity: 0.3,
          background: 'linear-gradient(160deg, #D9CFC0 0%, #C8B89A 25%, #BCA98A 50%, #C4B49C 70%, #D4C8B4 100%)',
          zIndex: 1,
        }} />

        {/* Light diffusion overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(130deg, rgba(255,252,245,0.15) 0%, transparent 45%, rgba(0,0,0,0.25) 100%)',
          zIndex: 2,
        }} />

        {/* Dark fade on left edge — blends with the dark text side */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '140px',
          height: '100%',
          background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.6) 40%, transparent 100%)',
          zIndex: 3,
        }} />

        {/* Dark fade bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          background: 'linear-gradient(to top, rgba(8,8,8,0.5), transparent)',
          zIndex: 3,
        }} />

        {/* Small descriptor — top right */}
        <div style={{
          position: 'absolute',
          top: 'clamp(100px, 12vw, 140px)',
          right: 'clamp(28px, 4vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
          zIndex: 4,
        }}>
          <span style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.35)',
          }}>Flagship</span>
          <div style={{ width: '32px', height: '1px', background: 'rgba(245,240,232,0.2)' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        animation: 'athScrollBounce 1.8s ease-in-out infinite',
        zIndex: 3,
      }}>
        <div style={{ width: '1px', height: '32px', background: 'rgba(245,240,232,0.15)' }} />
      </div>

      <style>{`
        @keyframes athScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .ath-left {
            flex: none !important;
            width: 100% !important;
            padding: 120px 28px 80px !important;
          }
          .ath-panel { display: none !important; }
          section { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}

function CTAButton({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 28px',
        background: primary
          ? (hovered ? 'rgba(245,240,232,0.95)' : '#F5F0E8')
          : 'transparent',
        color: primary ? '#080808' : 'rgba(245,240,232,0.5)',
        border: primary ? 'none' : '1px solid rgba(245,240,232,0.15)',
        fontFamily: 'var(--v5-font-body)',
        fontSize: '14px',
        fontWeight: primary ? 400 : 300,
        letterSpacing: '0.01em',
        textDecoration: 'none',
        transition: 'all 200ms ease',
        transform: hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      {children}
    </Link>
  );
}
