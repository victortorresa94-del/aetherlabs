'use client';

const pillars = [
  {
    number: '01',
    title: 'Criterio',
    description: 'Sabemos qué herramientas funcionan. No tienes que buscarlas. Te decimos exactamente qué necesitas y qué no.',
  },
  {
    number: '02',
    title: 'Velocidad',
    description: 'Lo que antes tardaba semanas, ahora tarda días. Ejecutamos con herramientas de IA que dominamos.',
  },
  {
    number: '03',
    title: 'Resultado',
    description: 'Entregamos cosas que funcionan. No decks que no se usan. No reuniones que no llevan a nada.',
  },
];

export default function SolutionSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
      <div className="v5-container">

        {/* Heading */}
        <div className="text-center v5-reveal flex flex-col items-center" style={{ marginBottom: '80px' }}>
          <span
            style={{
              display: 'block',
              marginBottom: '16px',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#999999',
            }}
          >
            La solución
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111111',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Un equipo de IA que actúa como si fuera interno
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="v5-reveal flex flex-col"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderTop: '2px solid #111111',
                borderRadius: '16px',
                padding: '40px',
                gap: '20px',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#BBBBBB',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {pillar.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                  lineHeight: 1.2,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#666666',
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
