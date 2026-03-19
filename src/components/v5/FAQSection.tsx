'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Necesito saber de IA para trabajar con vosotros?',
    a: 'No. Nosotros somos los que sabemos. Tú solo necesitas saber qué quieres conseguir.',
  },
  {
    q: '¿Trabajáis solo con empresas de Barcelona?',
    a: 'Trabajamos con empresas de toda España, principalmente en remoto. Las formaciones presenciales las hacemos en Barcelona y área metropolitana.',
  },
  {
    q: '¿Cuánto tarda un proyecto típico?',
    a: 'Una landing page: 10-14 días. Implementación de Claude: 2-3 semanas. Automatización de flujos: 1-2 semanas. Todo empieza con la Sesión de Claridad.',
  },
  {
    q: '¿Qué pasa si después de la sesión no continuamos?',
    a: 'Nada. La sesión tiene valor por sí sola. Sales con un diagnóstico y un plan de acción, uses nuestros servicios o no.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
      <div className="v5-container">

        {/* Header */}
        <div className="mb-16 v5-reveal flex flex-col items-start gap-4">
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#999999',
            }}
          >
            Preguntas frecuentes
          </span>
          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111111',
            }}
          >
            Lo que nos suelen preguntar
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto v5-reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderTop: '1px solid #E2E2DF' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '28px',
                  paddingBottom: '28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '19px',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#111111',
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '20px',
                    fontWeight: 300,
                    color: '#AAAAAA',
                    flexShrink: 0,
                    transition: 'transform 200ms ease',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                    paddingBottom: '24px',
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid #E2E2DF' }} />
        </div>

      </div>
    </section>
  );
}
