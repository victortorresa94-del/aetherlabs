'use client';

import { useEffect, useRef } from 'react';

const STATEMENTS = [
  {
    text: 'Tu equipo hace en 20 minutos\nlo que antes les llevaba 2 horas.',
    align: 'left' as const,
  },
  {
    text: 'Tienes procesos que funcionan\ncuando tú no estás.',
    align: 'right' as const,
  },
  {
    text: 'Tus clientes reciben respuesta\nen segundos, no en horas.',
    align: 'left' as const,
  },
];

export default function AIResultSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      sectionRef.current.querySelectorAll('.ai-result-left').forEach((el) => {
        gsap.fromTo(el,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true } }
        );
      });
      sectionRef.current.querySelectorAll('.ai-result-right').forEach((el) => {
        gsap.fromTo(el,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true } }
        );
      });

      cleanup = () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#0A0A0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <p style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: '#00E5FF',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          El resultado
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(40px, 6vw, 80px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          marginBottom: '80px',
        }}>
          Ocho semanas después.
        </h2>

        {/* Statements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {STATEMENTS.map((s, i) => (
            <div
              key={i}
              className={s.align === 'left' ? 'ai-result-left' : 'ai-result-right'}
              style={{
                textAlign: s.align,
                marginLeft: s.align === 'right' ? 'auto' : undefined,
                maxWidth: '700px',
                opacity: 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#F5F5F5',
                lineHeight: 1.2,
                margin: 0,
                whiteSpace: 'pre-line',
                letterSpacing: '-0.01em',
              }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Meta statement */}
        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: 'clamp(17px, 2.5vw, 26px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(245,245,245,0.45)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '80px auto 0',
          lineHeight: 1.6,
        }}>
          Ya no te preguntas qué puede hacer la IA por ti.
          <br />
          Lo estás viviendo.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section[style*="0A0A0A"][style*="120px"] { padding: 80px 24px !important; }
          .ai-result-right { margin-left: 0 !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
