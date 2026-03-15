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
    <section className="v5-section" style={{ backgroundColor: '#080808' }}>
      <div className="v5-container">

        {/* Heading */}
        <div className="text-center mb-20 v5-reveal">
          <span
            style={{
              display: 'block',
              marginBottom: '16px',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#666666',
            }}
          >
            La solución
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#F5F5F0',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Un equipo externo de IA que actúa como si fuera interno
          </h2>
        </div>

        {/* Pillars grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="v5-reveal flex flex-col gap-6 p-10 md:p-12"
              style={{
                backgroundColor: '#0D0D0D',
                borderRight: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.20)',
                  letterSpacing: '0.05em',
                }}
              >
                {pillar.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '22px',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.42)',
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
