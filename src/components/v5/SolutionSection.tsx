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
    <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="v5-container">

        {/* Heading */}
        <div className="text-center mb-20 v5-reveal flex flex-col items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 v5-section-gap">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="v5-reveal flex flex-col gap-6 p-6 md:p-8"
              style={{
                backgroundColor: '#F8F8F8',
                border: '1px solid #EBEBEB',
                borderRadius: '16px',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#CCCCCC',
                  letterSpacing: '0.05em',
                }}
              >
                {pillar.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
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
