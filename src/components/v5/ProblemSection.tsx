'use client';

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Tu web no convierte',
    description: 'Visitas que llegan y se van sin entender lo que ofreces.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'No tienes sistema de marketing',
    description: 'Las ventas dependen de ti. Si paras tú, para la empresa.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'La IA es confusa',
    description: 'Sabes que deberías usarla. No sabes por dónde empezar.',
  },
];

export default function ProblemSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
      <div className="v5-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
          className="v5-problem-grid"
        >
          {/* Left: Title */}
          <div className="v5-reveal">
            <span className="v5-label" style={{ display: 'block', marginBottom: '20px' }}>
              El problema
            </span>
            <h2 className="v5-h2">
              Tienes un buen producto.{' '}
              <span style={{ color: 'var(--v5-text-secondary)' }}>El mercado no lo sabe.</span>
            </h2>
          </div>

          {/* Right: Pain points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '28px 0',
                  borderBottom: i < painPoints.length - 1 ? '1px solid var(--v5-border)' : 'none',
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--v5-radius-md)',
                  backgroundColor: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--v5-accent)',
                }}>
                  {pain.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontWeight: 600,
                    fontSize: '17px',
                    color: 'var(--v5-text-primary)',
                    marginBottom: '6px',
                  }}>
                    {pain.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    color: 'var(--v5-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {pain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-problem-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
