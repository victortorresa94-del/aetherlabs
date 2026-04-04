'use client';

import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    title: 'Claude.ai',
    desc: 'Chat, análisis y proyectos con memoria',
  },
  {
    title: 'Claude Cowork',
    desc: 'Agente de escritorio que trabaja con tus archivos',
  },
  {
    title: 'Claude via MCP',
    desc: 'Conectado a ClickUp, HubSpot, Gmail y más',
  },
];

export default function ClaudeSection() {
  return (
    <section className="v5-section" style={{ backgroundColor: '#080808' }}>
      <div className="v5-container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.8fr_1.2fr] items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-6 v5-reveal">
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#666666',
              }}
            >
              Potenciado por
            </span>

            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              Implementamos Claude.<br />
              <span style={{ color: '#555555' }}>El agente de IA más avanzado.</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#888888',
                maxWidth: '400px',
              }}
            >
              No vendemos herramientas. Las ponemos a funcionar.
              Claude conectado a tus procesos, datos y equipo.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {columns.map((col, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {col.title}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: '#666666',
                        lineHeight: 1.5,
                      }}
                    >
                      {col.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/systems-lab/claude"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 400,
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'opacity 200ms ease',
                marginTop: '16px',
              }}
              className="hover:opacity-60"
            >
              Ver cómo lo implementamos →
            </Link>
          </div>

          {/* Right — Image card */}
          <div className="v5-hide-on-mobile v5-reveal" style={{ transitionDelay: '80ms', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '5/4',
                overflow: 'hidden',
                borderRadius: '24px',
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.05)',
                width: '100%'
              }}
            >
              <Image
                src="/crystal-sculpture.jpeg"
                alt="Claude — IA avanzada implementada"
                fill
                className="object-cover"
                style={{ filter: 'contrast(1.02) brightness(0.98)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
