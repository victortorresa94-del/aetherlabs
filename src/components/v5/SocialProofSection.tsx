'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, suffix: '+', label: 'Proyectos completados' },
  { value: 3,  suffix: '',  label: 'Continentes' },
  { value: 11, suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Primera sesión sin coste' },
];

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{
      backgroundColor: 'var(--v5-bg-surface)',
      padding: '40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <span style={{
        fontFamily: 'var(--v5-font-display)',
        fontWeight: 800,
        fontSize: 'clamp(40px, 5vw, 64px)',
        color: 'var(--v5-text-primary)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
      }}>
        {count}{suffix}
      </span>
      <span style={{
        fontFamily: 'var(--v5-font-body)',
        fontSize: '14px',
        color: 'var(--v5-text-secondary)',
        lineHeight: 1.4,
      }}>
        {label}
      </span>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
      <div className="v5-container">
        {/* Stats grid */}
        <div className="v5-stats-grid v5-reveal">
          {stats.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>

        {/* Founder quote */}
        <div className="v5-reveal" style={{
          marginTop: '80px',
          padding: '48px',
          backgroundColor: 'var(--v5-bg-base)',
          border: '1px solid var(--v5-border)',
          borderRadius: 'var(--v5-radius-lg)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Quote mark */}
          <div style={{
            position: 'absolute',
            top: '24px',
            left: '40px',
            fontFamily: 'var(--v5-font-display)',
            fontSize: '120px',
            fontWeight: 900,
            color: 'rgba(99,102,241,0.08)',
            lineHeight: 1,
            userSelect: 'none',
          }}>
            &ldquo;
          </div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{
              fontFamily: 'var(--v5-font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: 'var(--v5-text-primary)',
              lineHeight: 1.4,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}>
              Llevo más de 11 años construyendo proyectos de marketing y tecnología.
              Aether Labs es lo que me habría gustado tener como cliente cuando trabajaba en agencias.
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--v5-text-primary)',
              }}>
                Víctor Torres
              </span>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--v5-accent)',
              }}>
                Fundador de Aether Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
