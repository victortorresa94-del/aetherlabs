'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, suffix: '+', label: 'Proyectos completados' },
  { value: 3, suffix: '', label: 'Continentes' },
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
    <div ref={ref} className="bg-white/2 pb-10 flex flex-col gap-2">
      <span className="font-display font-extrabold text-[40px] md:text-6xl text-white leading-none tracking-tighter">
        {count}{suffix}
      </span>
      <span className="font-body text-xs text-white/40 uppercase tracking-widest font-bold">
        {label}
      </span>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="v5-section bg-black mt-20">
      <div className="v5-container">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 v5-reveal">
          {stats.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>

        {/* Founder quote */}
        <div className="v5-reveal mt-32 p-12 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden text-center backdrop-blur-sm">
          {/* Quote mark */}
          <div className="absolute top-6 left-10 font-display text-[120px] font-black text-white/5 leading-none select-none">
            &ldquo;
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <blockquote className="font-display italic font-medium text-2xl md:text-3xl text-white mb-10 leading-snug tracking-tight">
              Llevo más de 11 años construyendo proyectos de marketing y tecnología.
              Aether Labs es lo que me habría gustado tener como cliente cuando trabajaba en agencias.
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <span className="font-body font-bold text-lg text-white">
                Víctor Torres
              </span>
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#00E5FF]">
                Fundador de Aether Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
