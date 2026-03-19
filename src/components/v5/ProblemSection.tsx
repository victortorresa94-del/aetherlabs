'use client';

const painPoints = [
  {
    number: '01',
    title: 'Tu web no convierte',
    description: 'Visitas que llegan y se van sin entender lo que ofreces. Tienes producto, pero no presencia que venda.',
  },
  {
    number: '02',
    title: 'No tienes sistema de marketing',
    description: 'Las ventas dependen de ti. Si paras, para la empresa. Sin automatización ni estructura que funcione sola.',
  },
  {
    number: '03',
    title: 'La IA te suena pero no la usas',
    description: 'Sabes que deberías usarla. No sabes por dónde empezar. Cada semana sale algo nuevo.',
  },
];

export default function ProblemSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="v5-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left — sticky heading */}
          <div className="lg:col-span-5 v5-reveal lg:sticky lg:top-32">
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
              El problema
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
              Tienes un buen producto.<br />
              <span style={{ color: '#999999' }}>El mercado no lo sabe.</span>
            </h2>
          </div>

          {/* Right — pain points */}
          <div className="lg:col-span-7 flex flex-col">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="v5-reveal flex gap-8 py-12"
                style={{
                  borderBottom: i < painPoints.length - 1 ? '1px solid #EBEBEB' : 'none',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '13px',
                    fontWeight: 500,
                    marginTop: '5px',
                    flexShrink: 0,
                    color: '#CCCCCC',
                    letterSpacing: '0.05em',
                  }}
                >
                  {pain.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '24px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                      color: '#111111',
                    }}
                  >
                    {pain.title}
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
                    {pain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
