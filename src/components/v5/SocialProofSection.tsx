'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, suffix: '+', label: 'Proyectos' },
  { value: 3, suffix: '', label: 'Continentes' },
  { value: 11, suffix: '+', label: 'Años exp.' },
  { value: 100, suffix: '%', label: '1ª sesión free' },
];

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(value);
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
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '48px 32px' }}>
      <span
        style={{
          fontFamily: 'var(--v5-font-display)',
          fontSize: 'clamp(32px, 8vw, 56px)',
          fontWeight: 200,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#F5F5F0',
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(245,245,240,0.45)',
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
          className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-sm v5-reveal"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <CounterStat {...stat} />
            </div>
          ))}
        </div>

        {/* Casos / Testimonios */}
        <div className="v5-reveal mt-20 md:mt-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors">
              <p className="v5-body-large text-[15px] md:text-[16px] text-white/70 mb-10 italic leading-relaxed">
                &ldquo;Una agencia creciendo rápido sin estructura para soportarlo. Implementamos ClickUp desde cero y formamos al equipo.&rdquo;
              </p>
              <div>
                <p className="text-white font-display text-xl mb-2">+40 proyectos a la vez</p>
                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Sistema propio escalable</p>
              </div>
            </div>

            <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors">
              <p className="v5-body-large text-[15px] md:text-[16px] text-white/70 mb-10 italic leading-relaxed">
                &ldquo;Llevar la IA a mujeres de 40-60 que nunca habían tocado una herramienta de IA. Sin tecnicismos, solo móvil.&rdquo;
              </p>
              <div>
                <p className="text-white font-display text-xl mb-2">9 programas en catálogo</p>
                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Validación institucional</p>
              </div>
            </div>

            <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors">
              <p className="v5-body-large text-[15px] md:text-[16px] text-white/70 mb-10 italic leading-relaxed">
                &ldquo;Un equipo de marketing generaba el triple de contenido en el mismo tiempo después de implementar Claude Cowork.&rdquo;
              </p>
              <div>
                <p className="text-white font-display text-xl mb-2">x3 en creación de contenido</p>
                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Skills personalizados</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
