'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const experiments = [
  {
    id: 'vibevoice',
    title: 'VibeVoice',
    subtitle: 'Síntesis de voz con IA',
    description: 'Clona voces, genera speech con modelos de Anthropic y Microsoft. Configura pitch, speed, emoción y exporta en múltiples formatos.',
    status: 'ACTIVO',
    href: '/secret-lab/vibevoice',
    badge: 'NEW',
  },
  {
    id: 'jason',
    title: 'Jason — AI Avatar',
    subtitle: 'Agente de voz en tiempo real',
    description: 'El futuro representante de Aether Labs. Integración de voz, personalidad y capacidad de respuesta en tiempo real.',
    status: 'EN DESARROLLO',
    href: '#',
    badge: 'WIP',
  },
];

export default function SecretLabPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section
          className="v5-section relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#080808' }}
        >
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#444444',
                display: 'block',
                marginBottom: '24px',
              }}
            >
              ⬡ SECRET LAB — ACCESO RESTRINGIDO
            </span>

            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '720px',
                marginBottom: '28px',
              }}
            >
              El laboratorio<br />
              donde probamos<br />
              cosas que aún no<br />
              existen.
            </h1>

            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.4)',
                maxWidth: '520px',
              }}
            >
              Si estás aquí es porque sabes que estás aquí. Experimentos en curso, prototipos activos y cosas que todavía no le contamos a nadie.
            </p>
          </div>
        </section>

        {/* EXPERIMENTOS */}
        <section className="v5-section" style={{ backgroundColor: '#111111' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#444444',
                display: 'block',
                marginBottom: '48px',
              }}
            >
              EXPERIMENTOS ACTIVOS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiments.map((exp, i) => (
                <div
                  key={exp.id}
                  className="v5-reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {exp.href !== '#' ? (
                    <Link href={exp.href} style={{ textDecoration: 'none' }}>
                      <ExperimentCard exp={exp} />
                    </Link>
                  ) : (
                    <ExperimentCard exp={exp} muted />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function ExperimentCard({ exp, muted }: { exp: typeof experiments[0]; muted?: boolean }) {
  return (
    <div
      style={{
        background: muted ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${muted ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.10)'}`,
        borderRadius: '16px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: muted ? 'default' : 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: exp.badge === 'NEW' ? '#10B981' : '#F59E0B',
            background: exp.badge === 'NEW' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          {exp.badge}
        </span>
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            color: muted ? '#333333' : '#555555',
            letterSpacing: '0.1em',
          }}
        >
          {exp.status}
        </span>
      </div>

      <div>
        <h2
          style={{
            fontFamily: 'var(--v5-font-display)',
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: muted ? '#444444' : '#F5F5F0',
            marginBottom: '4px',
          }}
        >
          {exp.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            color: '#555555',
            letterSpacing: '0.08em',
          }}
        >
          {exp.subtitle}
        </p>
      </div>

      <p
        style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '14px',
          fontWeight: 300,
          lineHeight: 1.7,
          color: muted ? '#333333' : 'rgba(245,245,240,0.45)',
        }}
      >
        {exp.description}
      </p>

      {!muted && (
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            color: '#666666',
            letterSpacing: '0.08em',
            marginTop: '8px',
          }}
        >
          Abrir experimento →
        </span>
      )}
    </div>
  );
}
