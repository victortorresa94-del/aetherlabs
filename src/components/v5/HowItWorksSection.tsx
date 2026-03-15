'use client';

const steps = [
  {
    number: '01',
    title: 'Sesión de Claridad (gratuita)',
    description: '90 minutos. Te decimos exactamente qué necesitas y qué no necesitas. Sin compromiso.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    description: 'Un plan concreto con entregables, plazos y precio. Sin letra pequeña.',
  },
  {
    number: '03',
    title: 'Ejecución y entrega',
    description: 'Construimos, implementamos y te entregamos algo que funciona desde el día 1.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)', position: 'relative', overflow: 'hidden' }}>
      <div className="v5-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
            Cómo funciona
          </span>
          <h2 className="v5-h2 v5-reveal">
            En tres pasos, de donde estás<br />
            a donde quieres ir
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0',
          position: 'relative',
        }}
          className="v5-steps-container"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flex: 1,
              }}
              className="v5-step-wrapper"
            >
              {/* Step */}
              <div
                className="v5-reveal"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  paddingTop: '20px',
                }}
              >
                {/* Background number */}
                <span style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(80px, 10vw, 140px)',
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.05em',
                }}>
                  {step.number}
                </span>

                {/* Number badge */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--v5-accent)',
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.number}
                </div>

                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: 'var(--v5-text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '260px',
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  color: 'var(--v5-text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '260px',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.description}
                </p>
              </div>

              {/* Connector line (not after last) */}
              {i < steps.length - 1 && (
                <div
                  className="v5-step-connector"
                  style={{
                    width: '80px',
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(99,102,241,0.4), rgba(99,102,241,0.1))',
                    marginTop: '44px',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-steps-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
          }
          .v5-step-wrapper {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }
          .v5-step-connector {
            width: 1px !important;
            height: 40px !important;
            margin: 0 !important;
            background: linear-gradient(180deg, rgba(99,102,241,0.4), rgba(99,102,241,0.1)) !important;
          }
        }
      `}</style>
    </section>
  );
}
