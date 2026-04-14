'use client';

import { useState } from 'react';

const PROBLEMS = [
  {
    title: 'La formación',
    body: 'Mandas a tu equipo a un curso de IA. Aprenden. Vuelven emocionados. Dos semanas después, todo igual. Nadie cambió ningún proceso. La formación sin implementación no transforma nada.',
  },
  {
    title: 'La herramienta',
    body: 'Compras una suscripción. Otra. Otra más. El stack crece. El uso, no. Las herramientas sin adopción son gasto, no inversión. Nadie te enseñó cómo encajarlas en tu día a día real.',
  },
  {
    title: 'La consultoría',
    body: 'Alguien de fuera te dice qué hacer. Te da un plan de 80 páginas. Tú tienes que ejecutarlo. Con tu equipo. Con tus procesos actuales. Los informes no implementan nada solos.',
  },
];

export default function AITruthSection() {
  return (
    <section
      style={{
        backgroundColor: '#F5F5F5',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }} className="v5-reveal">
        {/* Label */}
        <p style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(10,10,10,0.4)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          Por qué no funciona lo que has probado
        </p>

        {/* Headline */}
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400,
          color: '#0A0A0A',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '72px',
          maxWidth: '720px',
        }}>
          Tienes tres opciones para implementar IA en tu empresa.
          Las tres tienen un problema.
        </h2>

        {/* Problem cards */}
        <div className="ai-truth-grid">
          {PROBLEMS.map((p) => (
            <ProblemCard key={p.title} {...p} />
          ))}
        </div>

        {/* Bottom statement */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          paddingTop: '72px',
          marginTop: '72px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'var(--v5-font-advercase)',
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 400,
            color: '#0A0A0A',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
          }}>
            Aether Inside es la cuarta opción.
            <br />
            Lo hacemos nosotros. Desde dentro.
          </h3>
        </div>
      </div>

      <style>{`
        .ai-truth-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .ai-truth-grid { grid-template-columns: 1fr !important; }
          section[style*="F5F5F5"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ProblemCard({ title, body }: { title: string; body: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '4px',
        padding: '36px',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.08)' : 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Strikethrough line */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '20px',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.12)' }} />
        <span style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          color: 'rgba(180,80,80,0.7)',
        }}>
          ✕
        </span>
      </div>

      <h3 style={{
        fontFamily: 'var(--v5-font-advercase)',
        fontSize: '18px',
        fontWeight: 400,
        color: '#0A0A0A',
        letterSpacing: '-0.01em',
        marginBottom: '14px',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--v5-font-body)',
        fontSize: '15px',
        fontWeight: 300,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {body}
      </p>
    </div>
  );
}
