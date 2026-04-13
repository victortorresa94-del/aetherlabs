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
        top: '60px',
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '-100%'})`,
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
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
          gap: '4px',
          backgroundColor: 'rgba(8,8,8,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '40px',
          padding: '6px',
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
              title={exp.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '28px',
                borderRadius: '30px',
                backgroundColor: isActive ? exp.accentColor : 'transparent',
                color: isActive ? '#080808' : '#555',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
                transition: 'background-color 0.2s, color 0.2s',
                letterSpacing: '0.05em',
                flexShrink: 0,
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
          backgroundColor: 'rgba(8,8,8,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '40px',
          padding: '8px 16px',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: activeExp.accentColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            color: '#aaa',
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
            color: '#555',
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
