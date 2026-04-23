'use client';

const ROWS = [
  {
    feature: 'Alguien lo hace por ti',
    consulting: false, tool: false, training: false, inside: true,
  },
  {
    feature: 'Tu equipo lo entiende',
    consulting: true, tool: true, training: false, inside: true,
  },
  {
    feature: 'Funciona desde el día 1',
    consulting: false, tool: false, training: false, inside: true,
  },
  {
    feature: 'Adaptado a tu caso',
    consulting: false, tool: false, training: true, inside: true,
  },
  {
    feature: 'Soporte post-entrega',
    consulting: false, tool: false, training: false, inside: true,
  },
];

export default function AIDifferenceSection() {
  return (
    <section style={{ backgroundColor: '#000000', padding: '100px 48px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }} className="v5-reveal">
        {/* Header */}
        <p style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(245,240,232,0.4)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Qué lo hace diferente
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(28px, 3.5vw, 48px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '64px',
        }}>
          Comparado con lo que ya conoces.
        </h2>

        {/* Table — desktop */}
        <div className="ai-diff-table-wrap">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thBase('')}></th>
                <th style={thBase('')}>Consultoría</th>
                <th style={thBase('')}>Herramienta</th>
                <th style={thBase('')}>Formación</th>
                <th style={{ ...thBase(''), color: '#F5F0E8', fontWeight: 400 }}>
                  Aether Team
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature}>
                  <td style={tdFeature}>{row.feature}</td>
                  <td style={tdCell}><Mark v={row.consulting} /></td>
                  <td style={tdCell}><Mark v={row.tool} /></td>
                  <td style={tdCell}><Mark v={row.training} /></td>
                  <td style={{ ...tdCell, backgroundColor: 'rgba(245,240,232,0.03)', borderLeft: '1px solid rgba(245,240,232,0.12)', borderRight: '1px solid rgba(245,240,232,0.12)' }}>
                    <Mark v={row.inside} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="ai-diff-mobile">
          {ROWS.map((row) => (
            <div key={row.feature} style={{
              padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(245,245,245,0.7)',
              }}>
                {row.feature}
              </span>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '14px',
                color: 'rgba(245,240,232,0.4)',
                flexShrink: 0,
              }}>
                ✓
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ai-diff-mobile { display: none; }
        @media (max-width: 640px) {
          .ai-diff-table-wrap { display: none; }
          .ai-diff-mobile { display: block; }
          section[style*="000000"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

const thBase = (_: string): React.CSSProperties => ({
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '11px',
  fontWeight: 500,
  color: 'rgba(245,245,245,0.4)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '16px 24px',
  textAlign: 'left',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
});

const tdFeature: React.CSSProperties = {
  fontFamily: 'var(--v5-font-body)',
  fontSize: '15px',
  fontWeight: 300,
  color: 'rgba(245,245,245,0.7)',
  padding: '20px 24px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
};

const tdCell: React.CSSProperties = {
  padding: '20px 24px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  textAlign: 'center',
  verticalAlign: 'middle',
};

function Mark({ v }: { v: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--v5-font-mono)',
      fontSize: '16px',
      color: v ? 'rgba(245,240,232,0.4)' : 'rgba(245,245,245,0.15)',
    }}>
      {v ? '✓' : '✕'}
    </span>
  );
}
