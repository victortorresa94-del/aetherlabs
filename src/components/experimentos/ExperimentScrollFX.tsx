'use client';

/**
 * ExperimentScrollFX
 * Awwwards-level scroll effects at page level:
 * 1. Fixed vertical progress indicator (right edge)
 * 2. Hero letter-spacing + fade on scroll
 * 3. Horizontal marquee strip that moves opposite to scroll direction
 * 4. Section index counter (fixed, bottom-left)
 */

import { useEffect, useState, useRef } from 'react';
import { experiments } from '@/data/experiments-page';

export default function ExperimentScrollFX() {
  const [mounted,  setMounted]  = useState(false);
  const [progress, setProgress] = useState(0);          // 0-1, total scroll through all experiments
  const [activeIdx, setActiveIdx] = useState(-1);       // -1 = hero, 0-9 = experiment index
  // marqueeSectionRef removed — marquee lives in page.tsx between hero and sections

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // ── Hero: letters drift apart on scroll out (no opacity — always visible) ─
      const heroLetters = document.querySelectorAll('.exp-hero-letter');
      if (heroLetters.length) {
        gsap.fromTo(heroLetters,
          { letterSpacing: '-0.02em' },
          {
            letterSpacing: '0.28em',
            ease: 'none',
            stagger: { each: 0.012, from: 'center' },
            scrollTrigger: {
              trigger: '#exp-hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // ── Hero subtitle: slides up gently ────────────────────────────────────
      const heroSub = document.querySelector('.exp-hero-sub');
      if (heroSub) {
        gsap.to(heroSub, {
          y: -50,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: '#exp-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // ── Horizontal marquee strip (scrolls left as you scroll down) ─────────
      const marqueeEl = document.querySelector('.exp-marquee-inner');
      if (marqueeEl) {
        gsap.to(marqueeEl, {
          xPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.exp-sections-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      // ── Progress: track total scroll through experiments ──────────────────
      const firstSection = document.getElementById(experiments[0].id);
      const lastSection  = document.getElementById(experiments[experiments.length - 1].id);

      if (firstSection && lastSection) {
        ScrollTrigger.create({
          trigger: firstSection,
          endTrigger: lastSection,
          start: 'top 60%',
          end: 'bottom 40%',
          onUpdate: (self) => setProgress(self.progress),
        });
      }

      // ── Active experiment index tracking ──────────────────────────────────
      const sectionTriggers = experiments.map((exp, i) => {
        const el = document.getElementById(exp.id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setActiveIdx(i),
          onEnterBack: () => setActiveIdx(i),
        });
      });

      // Reset when scrolled back to hero
      ScrollTrigger.create({
        trigger: '#exp-hero',
        start: 'top top',
        end: 'bottom top',
        onEnterBack: () => setActiveIdx(-1),
      });

      cleanup = () => {
        sectionTriggers.forEach(t => t?.kill());
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.trigger === firstSection || t.vars.trigger === '#exp-hero') t.kill();
        });
      };
    })();

    return () => cleanup?.();
  }, [mounted]);

  if (!mounted) return null;

  const activeExp = activeIdx >= 0 ? experiments[activeIdx] : null;

  return (
    <>
      {/* ── Fixed progress bar (right edge) ──────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          width: '2px',
          height: '100vh',
          zIndex: 9999,
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${progress * 100}%`,
            background: '#FF6B35',
            transition: 'height 0.1s linear',
            boxShadow: '0 0 8px rgba(255,107,53,0.6)',
          }}
        />
      </div>

      {/* ── Fixed experiment counter (bottom-left) ────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          left: '28px',
          bottom: '28px',
          zIndex: 9998,
          opacity: activeIdx >= 0 ? 1 : 0,
          transform: `translateY(${activeIdx >= 0 ? '0' : '12px'})`,
          transition: 'opacity 0.45s ease, transform 0.45s ease',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: '42px',
              fontWeight: 700,
              color: '#FF6B35',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {activeExp ? activeExp.number : ''}
          </span>
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.12em',
            }}
          >
            / {String(experiments.length).padStart(2, '0')}
          </span>
        </div>
        <div style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '9px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '2px',
        }}>
          {activeExp?.sector ?? ''}
        </div>
      </div>

      {/* ── Dot navigation (right, centered vertically) ───────────────────── */}
      <nav
        aria-label="Progreso de experimentos"
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          opacity: activeIdx >= 0 ? 1 : 0,
          transition: 'opacity 0.45s ease',
          pointerEvents: activeIdx >= 0 ? 'auto' : 'none',
        }}
      >
        {experiments.map((exp, i) => (
          <button
            key={exp.id}
            onClick={() => document.getElementById(exp.id)?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={`Ir a ${exp.name}`}
            style={{
              width: i === activeIdx ? '20px' : '4px',
              height: '4px',
              borderRadius: '2px',
              background: i === activeIdx ? '#FF6B35' : 'rgba(255,255,255,0.18)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s ease',
              boxShadow: i === activeIdx ? '0 0 6px rgba(255,107,53,0.5)' : 'none',
            }}
          />
        ))}
      </nav>

    </>
  );
}
