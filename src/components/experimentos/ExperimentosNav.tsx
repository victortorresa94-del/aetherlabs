'use client';

import { useEffect, useState, useRef } from 'react';
import { experiments } from '@/data/experiments-page';

export default function ExperimentosNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>(experiments[0].id);
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

      // Show nav after hero scrolls past
      const heroTrigger = ScrollTrigger.create({
        trigger: '#exp-hero',
        start: 'bottom top',
        onEnter: () => setVisible(true),
        onLeaveBack: () => setVisible(false),
      });

      // Active pill per experiment section
      const sectionTriggers = experiments.map((exp) => {
        const el = document.getElementById(exp.id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveId(exp.id),
          onEnterBack: () => setActiveId(exp.id),
        });
      });

      cleanup = () => {
        heroTrigger.kill();
        sectionTriggers.forEach((t) => t?.kill());
      };
    })();

    return () => cleanup?.();
  }, [mounted]);

  if (!mounted) return null;

  const activeExp = experiments.find((e) => e.id === activeId) ?? experiments[0];
  const activeIndex = experiments.indexOf(activeExp) + 1;

  return (
    <nav
      aria-label="Navegación de experimentos"
      style={{
        position: 'fixed',
        top: '78px',
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '-120%'})`,
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        zIndex: 900,
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      {/* Desktop pills */}
      <div
        className="exp-nav-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '100px',
          padding: '6px 14px',
        }}
      >
        {experiments.map((exp) => {
          const isActive = exp.id === activeId;
          return (
            <a
              key={exp.id}
              href={`#${exp.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(exp.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive ? exp.accentColor : 'rgba(255,255,255,0.4)',
                padding: '4px 8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.8,
              }}
            >
              {exp.number}
            </a>
          );
        })}
      </div>

      {/* Mobile counter */}
      <div
        className="exp-nav-mobile"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '100px',
          padding: '8px 16px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            color: activeExp.accentColor,
            letterSpacing: '0.1em',
          }}
        >
          {String(activeIndex).padStart(2, '0')} / {String(experiments.length).padStart(2, '0')}
        </span>
        <span
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: '11px',
            fontWeight: 300,
            color: '#aaa',
            marginLeft: '4px',
          }}
        >
          {activeExp.name}
        </span>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .exp-nav-desktop { display: none !important; }
          .exp-nav-mobile  { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
