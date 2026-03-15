'use client';

const pillars = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Criterio',
    description: 'Sabemos qué herramientas funcionan. No tienes que buscarlas.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Velocidad',
    description: 'Lo que antes tardaba semanas, ahora tarda días.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Resultado',
    description: 'Entregamos cosas que funcionan. No decks que no se usan.',
  },
];

export default function SolutionSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
      <div className="v5-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
            La solución
          </span>
          <h2 className="v5-h2 v5-reveal">
            Un equipo externo de IA<br />
            que actúa como si fuera interno
          </h2>
          <p className="v5-body-large v5-reveal" style={{ marginTop: '20px', maxWidth: '540px', margin: '20px auto 0' }}>
            No somos una agencia que cobra por horas.
            Somos el departamento que no tenías.
          </p>
        </div>

        {/* 3 Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
          className="v5-solution-grid"
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="v5-reveal"
              style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: '1px solid var(--v5-border)',
                borderRadius: 'var(--v5-radius-lg)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'border-color var(--v5-transition), transform var(--v5-transition)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--v5-border-hover)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--v5-border)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--v5-radius-md)',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
                border: '1px solid rgba(99,102,241,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--v5-accent)',
              }}>
                {pillar.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: 'var(--v5-text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  color: 'var(--v5-text-secondary)',
                  lineHeight: 1.65,
                }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
