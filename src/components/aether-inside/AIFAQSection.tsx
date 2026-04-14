'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: '¿Cuánto tiempo tenemos que dedicarle nosotros?',
    a: 'La fase de diagnóstico requiere que alguien del equipo esté disponible para las conversaciones iniciales — unas 2-3 horas en la primera semana. Durante la implementación, dependemos más de nosotros que de vosotros. En la formación, necesitamos que el equipo esté presente — lo coordinamos con vuestros horarios.',
  },
  {
    q: '¿Qué pasa si mi equipo tiene resistencia a adoptar IA?',
    a: 'Es la pregunta más frecuente y la más legítima. La resistencia suele venir del miedo a ser reemplazado o de haber visto implementaciones anteriores que no funcionaron. Lo abordamos desde el primer día: explicamos qué cambia, qué no cambia, y por qué la IA hace el trabajo aburrido para que ellos puedan hacer el trabajo interesante. En nuestra experiencia, el escepticismo desaparece cuando la gente prueba la herramienta con un caso real de su trabajo.',
  },
  {
    q: '¿Necesito tener conocimientos técnicos?',
    a: 'No. Si los tienes, genial — vamos más rápido en algunas áreas. Si no los tienes, no hay problema — trabajamos con lo que hay. Lo que sí necesitas es tener claridad sobre qué quieres mejorar en tu empresa. El "cómo" es nuestro trabajo.',
  },
  {
    q: '¿Funciona para cualquier sector?',
    a: 'Hemos trabajado con empresas de servicios técnicos, música, salud, retail, educación y artes escénicas. El sector importa menos de lo que parece. Lo que importa es que haya procesos repetitivos, comunicación con clientes, y un equipo que pueda ganar tiempo. Eso existe en prácticamente todos los sectores.',
  },
  {
    q: '¿Qué pasa después de las 8 semanas?',
    a: 'Te dejamos con los sistemas funcionando, el equipo formado, y una hoja de ruta para la siguiente fase. No creamos dependencia — al contrario, el objetivo es que podáis seguir sin nosotros. Si queréis continuar, ofrecemos soporte mensual, pero no es obligatorio ni la condición para que lo que hemos hecho siga funcionando.',
  },
  {
    q: '¿Qué garantías tenéis?',
    a: 'La única garantía real que existe en tecnología: nos quedamos hasta que funciona. Si al final de las 8 semanas algo no funciona como acordamos, extendemos el soporte sin coste adicional. No cobramos por hitos que no hemos cumplido.',
  },
];

export default function AIFAQSection() {
  return (
    <section style={{ backgroundColor: '#0A0A0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <p style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: '#00E5FF',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Lo que más nos preguntan
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(28px, 3.5vw, 52px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '64px',
        }}>
          Respuestas directas.
        </h2>

        {/* Accordion */}
        {FAQS.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          section[style*="0A0A0A"][style*="120px 48px"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '17px',
          fontWeight: 400,
          color: '#F5F5F5',
          lineHeight: 1.4,
          flex: 1,
        }}>
          {q}
        </span>
        <span style={{
          color: '#00E5FF',
          fontSize: '20px',
          lineHeight: 1,
          flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          display: 'block',
        }}>
          ↓
        </span>
      </button>

      <div style={{
        maxHeight: open ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '16px',
          fontWeight: 300,
          color: 'rgba(245,245,245,0.65)',
          lineHeight: 1.75,
          paddingBottom: '24px',
          margin: 0,
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}
