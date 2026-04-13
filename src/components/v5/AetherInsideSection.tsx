'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// ─── Lazy 3D TorusKnot ───────────────────────────────────────────────────────

const LazyTorusKnot = React.lazy(() => import('./AetherInsideTorusKnot'));

function TorusKnotWrapper() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      className="ai-sphere-canvas"
    >
      {inView ? (
        <Suspense fallback={null}>
          <LazyTorusKnot />
        </Suspense>
      ) : (
        // CSS fallback — radial gradient atmosphere
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(0,229,255,0.06) 0%, transparent 60%)',
          }}
        />
      )}
    </div>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: '3–5 días',  label: 'de onboarding' },
  { value: '100%',      label: 'implementado, no asesorado' },
  { value: 'PMEs',      label: 'de cualquier sector' },
];

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
        position: 'relative',
        overflow: 'hidden',
        padding: '18px 40px',
        backgroundColor: 'transparent',
        color: hovered ? '#00E5FF' : '#FFFFFF',
        border: `1px solid ${hovered ? '#00E5FF' : 'rgba(255,255,255,0.3)'}`,
        borderRadius: '2px',
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>
        Cuéntanos lo que necesitas
      </span>
      {/* Scan line */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: hovered ? '100%' : '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.1), transparent)',
          transition: 'left 0.4s ease',
          pointerEvents: 'none',
        }}
      />
    </Link>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function AetherInsideSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const claimRef = useRef<HTMLParagraphElement>(null);
  const diffRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP ScrollTrigger — title letter stagger + content fade
  useEffect(() => {
    if (!mounted) return;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !titleRef.current) return;

      // Split title letters into spans
      const titleEl = titleRef.current;
      const letters = titleEl.textContent?.split('') ?? [];
      titleEl.innerHTML = letters
        .map((l) => `<span class="ai-letter" style="display:inline-block;will-change:transform,opacity">${l === ' ' ? '&nbsp;' : l}</span>`)
        .join('');

      const letterEls = titleEl.querySelectorAll('.ai-letter');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      // Letters stagger in
      tl.fromTo(
        letterEls,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out',
          stagger: 0.04,
          onComplete: () => {
            // Clean up will-change after animation
            letterEls.forEach((el) => ((el as HTMLElement).style.willChange = 'auto'));
            // Subtle glow pulse
            gsap.to(titleEl, {
              textShadow: '0 0 60px rgba(0,229,255,0.2)',
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut',
            });
          },
        }
      );

      // Content fade-ups
      if (claimRef.current) {
        tl.fromTo(
          claimRef.current,
          { y: 30, opacity: 0, willChange: 'transform,opacity' },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            onComplete: () => { if (claimRef.current) claimRef.current.style.willChange = 'auto'; },
          },
          '+=0'
        );
      }

      if (diffRef.current) {
        tl.fromTo(
          diffRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.1'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, willChange: 'opacity' },
          {
            opacity: 1, duration: 0.6, ease: 'power2.out',
            onComplete: () => { if (ctaRef.current) ctaRef.current.style.willChange = 'auto'; },
          },
          '+=0.1'
        );
      }

      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '+=0.05'
        );
      }

      // Section enter/exit parallax
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 0.5,
        },
      });
      sectionTl.fromTo(sectionRef.current, { opacity: 0.3, scale: 0.98 }, { opacity: 1, scale: 1 });

      // Parallax on 3D canvas
      const canvasEl = sectionRef.current.querySelector('.ai-sphere-canvas');
      if (canvasEl) {
        gsap.to(canvasEl, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: -60,
        });
      }

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => cleanup?.();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="aether-inside-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '95vh',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 48px',
        textAlign: 'center',
      }}
    >
      {/* Top gradient blend */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, #0A0A0A, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Bottom gradient blend */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #0A0A0A, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 3D / CSS fallback atmosphere */}
      <TorusKnotWrapper />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '820px',
          width: '100%',
        }}
        className="ai-content"
      >
        {/* Label row */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#00E5FF',
            marginBottom: '24px',
            animation: mounted ? 'aiFadeDown 0.6s ease 0.2s both' : 'none',
          }}
        >
          SERVICIO PRINCIPAL
        </div>

        {/* Main title */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Syne', 'Advercase', sans-serif",
            fontSize: 'clamp(72px, 10vw, 160px)',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            marginBottom: '40px',
            opacity: mounted ? undefined : 0,
          }}
        >
          AETHER INSIDE
        </h2>

        {/* Claim */}
        <p
          ref={claimRef}
          style={{
            fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
            fontSize: 'clamp(18px, 2.2vw, 28px)',
            fontWeight: 400,
            color: 'rgba(245,245,245,0.85)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 48px',
            opacity: 0,
          }}
        >
          Vamos a tu empresa. Formamos a tu equipo.
          <br />
          Construimos los sistemas. Nos aseguramos de que funcionen.
        </p>

        {/* Differentiator */}
        <p
          ref={diffRef}
          style={{
            fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(245,245,245,0.45)',
            maxWidth: '480px',
            margin: '0 auto 56px',
            lineHeight: 1.6,
            opacity: 0,
          }}
        >
          No mandamos informes. No damos consejos desde fuera.
          <br />
          Nos metemos dentro.
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ opacity: 0, marginBottom: '20px' }}>
          <CTAButton />
        </div>

        {/* Reassurance */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(245,245,245,0.3)',
            letterSpacing: '0.1em',
            marginBottom: '72px',
          }}
        >
          Primera conversación sin coste · Sin compromiso
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="ai-stats"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            opacity: 0,
          }}
        >
          {STATS.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '0 40px', textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(245,245,245,0.4)',
                    maxWidth: '140px',
                    lineHeight: 1.3,
                  }}
                >
                  {stat.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes aiFadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .aether-inside-section {
            min-height: auto !important;
            padding: 80px 24px !important;
          }
          .ai-stats {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .ai-stats > div > div:last-child {
            display: none !important;
          }
          .ai-sphere-canvas canvas {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
