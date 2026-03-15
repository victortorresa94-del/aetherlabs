'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, suffix: '+', label: 'Proyectos' },
  { value: 3, suffix: '', label: 'Continentes' },
  { value: 11, suffix: '+', label: 'Años exp.' },
  { value: 100, suffix: '%', label: '1ª sesión free' },
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
          const duration = 1600;
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
    <div ref={ref} style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span
        style={{
          fontFamily: 'var(--v5-font-display)',
          fontSize: 'clamp(40px, 4vw, 56px)',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.88)',
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.30)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: '#080808' }}>
      <div className="v5-container">

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl v5-reveal"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: '#0C0C0C',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <CounterStat {...stat} />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="v5-reveal mt-24 max-w-2xl mx-auto text-center">
          <blockquote
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.55,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '32px',
            }}
          >
            &ldquo;Llevo más de 11 años construyendo proyectos de marketing y tecnología.
            Aether Labs es lo que me habría gustado tener como cliente.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              Víctor Torres
            </span>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              Fundador
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
