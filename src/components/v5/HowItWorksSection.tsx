'use client';

const steps = [
  {
    number: '01',
    title: 'Sesión de Claridad',
    description: '90 minutos. Te decimos exactamente qué necesitas y qué no. Sin compromiso. 150€ o gratis en sesiones de lanzamiento.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    description: 'Un plan concreto con entregables, plazos y precio. Sin letra pequeña. Sin sorpresas.',
  },
  {
    number: '03',
    title: 'Ejecución y entrega',
    description: 'Construimos, implementamos y te entregamos algo que funciona desde el día 1.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
            Cómo funciona
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111111',
            }}
          >
            Tres pasos. Sin fricciones.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {steps.map((step, i) => (
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
                {step.number}
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
                {step.title}
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
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
