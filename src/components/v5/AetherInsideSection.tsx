'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ─── CTA Button ──────────────────────────────────────────────────────────────

function CTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/aether-inside"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '16px 36px',
        backgroundColor: hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        color: '#F5F0E8',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)'}`,
        borderRadius: '4px',
        fontFamily: 'var(--v5-font-body)',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '0.02em',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      Cuéntanos lo que necesitas
    </Link>
  );
}

// ─── Stats row ───────────────────────────────────────────────────────────────

const STATS = [
  { value: 'Semanas, no meses',        label: 'de onboarding' },
  { value: 'Pymes de cualquier sector', label: 'atendidas' },
  { value: 'Resultado garantizado',     label: 'o seguimos' },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AetherInsideSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const claimRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // Words slide up
      [word1Ref.current, word2Ref.current].forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { y: 50, opacity: 0, willChange: 'transform,opacity' },
          {
            y: 0, opacity: 1,
            duration: 0.75, ease: 'power4.out',
            onComplete: () => { if (el) el.style.willChange = 'auto'; },
          },
          i === 0 ? 0 : '-=0.55'
        );
      });

      // Claim lines stagger
      if (claimRef.current) {
        const lines = claimRef.current.querySelectorAll('.ai-claim-line');
        tl.fromTo(
          lines,
          { opacity: 0, y: 20, willChange: 'transform,opacity' },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            stagger: 0.1,
            onComplete: () => {
              lines.forEach((el) => { (el as HTMLElement).style.willChange = 'auto'; });
            },
          },
          '-=0.3'
        );
      }

      if (diffRef.current) {
        tl.fromTo(diffRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');
      }
      if (ctaRef.current) {
        tl.fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1');
      }
      if (statsRef.current) {
        tl.fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');
      }

      // Section parallax entry
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.4, scale: 0.99 },
        {
          opacity: 1, scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 0.5,
          },
        }
      );

      cleanup = () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
    })();

    return () => cleanup?.();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '90vh',
        backgroundColor: '#0D0B0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Gradient blend top — from site's light bg */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
        background: 'linear-gradient(to bottom, #F8F8F5, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Gradient blend bottom — back to site's light bg */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
        background: 'linear-gradient(to top, #F8F8F5, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Content grid */}
      <div
        className="ai-grid"
        style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '0',
          width: '100%',
          maxWidth: '1280px',
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Label */}
          <div
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '28px',
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          >
            SERVICIO PRINCIPAL
          </div>

          {/* Title */}
          <div
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: 'clamp(80px, 12vw, 180px)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 0.92,
              marginBottom: '48px',
            }}
            aria-label="AETHER INSIDE"
          >
            <span
              ref={word1Ref}
              style={{ display: 'block', opacity: mounted ? undefined : 0 }}
            >
              AETHER
            </span>
            <span
              ref={word2Ref}
              style={{ display: 'block', opacity: mounted ? undefined : 0 }}
            >
              INSIDE
            </span>
          </div>

          {/* Claim lines */}
          <div
            ref={claimRef}
            style={{ marginBottom: '40px' }}
          >
            {[
              'Vamos a tu empresa.',
              'Formamos a tu equipo.',
              'Construimos los sistemas.',
              'Nos aseguramos de que funcionen.',
            ].map((line, i) => (
              <p
                key={i}
                className="ai-claim-line"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: 'clamp(17px, 2vw, 24px)',
                  fontWeight: 300,
                  color: 'rgba(245,240,232,0.72)',
                  lineHeight: 1.9,
                  margin: 0,
                  opacity: 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Differentiator */}
          <p
            ref={diffRef}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.35)',
              lineHeight: 1.65,
              marginBottom: '52px',
              opacity: 0,
              maxWidth: '460px',
            }}
          >
            No mandamos informes. No damos consejos desde fuera.
            <br />
            Nos metemos dentro.
          </p>

          {/* CTA */}
          <div ref={ctaRef} style={{ opacity: 0, marginBottom: '16px' }}>
            <CTAButton />
          </div>

          {/* Reassurance */}
          <p
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              color: 'rgba(245,240,232,0.25)',
              letterSpacing: '0.08em',
              marginTop: '12px',
            }}
          >
            Primera conversación sin coste · Sin compromiso
          </p>
        </div>

        {/* ── RIGHT COLUMN — decorative ── */}
        <div
          className="ai-right-col"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: 'clamp(200px, 28vw, 380px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            ∞
          </span>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div
        ref={statsRef}
        className="ai-stats"
        style={{
          position: 'absolute',
          bottom: '90px', // above gradient fade
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1280px',
          padding: '40px 80px 0',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          opacity: 0,
          zIndex: 2,
        }}
      >
        {STATS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '0 48px' }}>
              <div style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 400,
                color: 'rgba(245,240,232,0.55)',
                letterSpacing: '0.02em',
                lineHeight: 1.4,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                color: 'rgba(245,240,232,0.25)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>
                {s.label}
              </div>
            </div>
            {i < STATS.length - 1 && (
              <div style={{
                width: '1px', height: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                flexShrink: 0,
              }} />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .ai-right-col { display: none !important; }
          .ai-stats {
            position: static !important;
            transform: none !important;
            margin-top: 48px;
            flex-direction: column !important;
            padding: 32px 24px 0 !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 768px) {
          section[style*="0D0B0A"] {
            padding: 80px 24px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
