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
        <div className="grid grid-cols-1 md:grid-cols-3 v5-section-gap">
          {steps.map((step, i) => (
            <div
              key={i}
              className="v5-reveal relative flex flex-col gap-5 p-10 md:p-12"
              style={{
                background: '#F8F8F8',
                border: '1px solid #EBEBEB',
                borderRadius: '16px',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Large background number */}
              <span
                className="absolute top-6 right-8 select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '72px',
                  fontWeight: 300,
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  color: '#E0E0E0',
                  opacity: 0.06,
                }}
              >
                {step.number}
              </span>

              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#AAAAAA',
                  letterSpacing: '0.10em',
                  position: 'relative',
                  zIndex: 1,
                  textTransform: 'uppercase',
                }}
              >
                {step.number}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#666666',
                  position: 'relative',
                  zIndex: 1,
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
