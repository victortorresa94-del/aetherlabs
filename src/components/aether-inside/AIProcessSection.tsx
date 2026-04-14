'use client';

import { useEffect, useRef } from 'react';

const PHASES = [
  {
    number: '01',
    name: 'VAMOS',
    duration: 'Semana 1',
    headline: 'Nos sentamos con tu equipo',
    description:
      'Primera semana. Presencial o remoto, como prefieras. Hablamos con las personas que trabajan dentro — no solo con el CEO. Mapeamos procesos, herramientas actuales, cuellos de botella, ideas que nadie ha tenido tiempo de implementar. No hacemos preguntas de consultoría. Escuchamos como alguien que va a trabajar aquí mañana.',
    deliverable: 'Mapa completo de oportunidades de IA',
  },
  {
    number: '02',
    name: 'DEFINIMOS',
    duration: 'Semanas 1–2',
    headline: 'Priorizamos lo que mueve la aguja',
    description:
      'No todo se automatiza. No todo se debería automatizar. Con lo que aprendemos en la fase anterior, definimos exactamente qué implementar, en qué orden, y por qué. Te presentamos un plan concreto — no un documento teórico. Un plan con herramientas, plazos y resultado esperado por fase. Tú lo apruebas antes de que empecemos a construir.',
    deliverable: 'Plan de implementación priorizado y aprobado',
  },
  {
    number: '03',
    name: 'CONSTRUIMOS',
    duration: 'Semanas 2–6',
    headline: 'Implementamos. Sin intermediarios.',
    description:
      'Aquí está la diferencia real. No te damos instrucciones para que lo haga tu equipo. Lo hacemos nosotros — agentes IA, automatizaciones, integraciones, flujos de trabajo, formación específica para cada persona del equipo. Cada herramienta configurada para vuestro proceso concreto, no para el caso genérico del tutorial de YouTube.',
    deliverable: 'Sistemas funcionando en producción',
  },
  {
    number: '04',
    name: 'GARANTIZAMOS',
    duration: 'Semanas 6–8',
    headline: 'No nos vamos hasta que funciona',
    description:
      'El 80% de las implementaciones fallan porque nadie hace seguimiento. Nosotros sí. Dos semanas de soporte post-implementación incluidas. Tu equipo nos reporta fricciones, nosotros las resolvemos. Ajustamos lo que no funciona exactamente como esperaba. Cuando nos vamos, funciona. Esa es la garantía.',
    deliverable: 'Sistema adoptado + equipo autónomo',
  },
];

export default function AIProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll('.ai-phase-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 82%', once: true },
          }
        );
      });

      cleanup = () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', padding: '120px 48px' }}
    >
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
          Cómo funciona
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '96px',
        }}>
          Cuatro fases. Una transformación.
        </h2>

        {/* Phases */}
        {PHASES.map((phase) => (
          <div
            key={phase.number}
            className="ai-phase-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '72px 1fr',
              gap: '40px',
              padding: '48px 0',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              opacity: 0,
            }}
          >
            {/* Number */}
            <div style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '48px',
              fontWeight: 400,
              color: 'rgba(0,229,255,0.2)',
              lineHeight: 1,
              paddingTop: '4px',
            }}>
              {phase.number}
            </div>

            {/* Content */}
            <div>
              <p style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                color: 'rgba(245,245,245,0.35)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                {phase.name} · {phase.duration}
              </p>
              <h3 style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                fontWeight: 400,
                color: '#F5F5F5',
                letterSpacing: '-0.01em',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}>
                {phase.headline}
              </h3>
              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                color: 'rgba(245,245,245,0.65)',
                lineHeight: 1.75,
                marginBottom: '24px',
              }}>
                {phase.description}
              </p>
              <p style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '12px',
                color: '#00E5FF',
                letterSpacing: '0.05em',
              }}>
                → Entregable: {phase.deliverable}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ai-phase-card {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          section[style*="0A0A0A"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
