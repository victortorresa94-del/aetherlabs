'use client';

import { useRef, useEffect, useState } from 'react';
import type { Experiment } from '@/data/experiments-page';
import { hexToRgba } from '@/lib/colors';
import StatusBadge from './StatusBadge';
import ExperimentTag from './ExperimentTag';
import ExperimentMetrics from './ExperimentMetrics';
import ExperimentScene3D from './ExperimentScene3D';
import LiveDemoChat from './LiveDemoChat';

interface ExperimentCardProps {
  experiment: Experiment;
  index: number;
}

const INITIAL_MESSAGES: Record<string, string> = {
  'suma-salut':    '¡Hola! Soy el asistente de Suma Salut. Estoy aquí para responder tus dudas sobre horarios, seguros, precios y especialidades. ¿En qué te puedo ayudar?',
  'restaurante-ia': '¡Hola! Bienvenido a La Taberna del Puerto. Puedo ayudarte con reservas, horarios, carta, alérgenos... ¿Qué necesitas?',
};

export default function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [accentWash, setAccentWash] = useState(false);
  const isEven = index % 2 === 0;
  const bgColor = isEven ? '#080808' : '#0C0C0C';

  // GSAP ScrollTrigger — dynamic import to avoid SSR crash
  useEffect(() => {
    let trigger: any;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => setAccentWash(true),
        onLeave: () => setAccentWash(false),
        onEnterBack: () => setAccentWash(true),
        onLeaveBack: () => setAccentWash(false),
      });

      gsap.fromTo(
        containerRef.current.querySelector('.exp-content'),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 78%',
          },
        }
      );
    })();

    return () => {
      trigger?.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id={experiment.id}
      aria-label={experiment.name}
      style={{
        position: 'relative',
        backgroundColor: bgColor,
        overflow: 'hidden',
        padding: '80px 0',
      }}
    >
      {/* Accent wash */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: experiment.accentColor,
          opacity: accentWash ? 0.05 : 0,
          transition: 'opacity 600ms ease',
          pointerEvents: 'none',
        }}
      />

      <div
        className="v5-container exp-content"
        style={{ opacity: 0 }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: hexToRgba(experiment.accentColor, 0.5),
              letterSpacing: '0.15em',
            }}
          >
            {experiment.number}
          </span>
          <div
            style={{
              width: '1px',
              height: '14px',
              backgroundColor: 'rgba(255,255,255,0.12)',
            }}
          />
          <StatusBadge status={experiment.status} />
          <div
            style={{
              width: '1px',
              height: '14px',
              backgroundColor: 'rgba(255,255,255,0.12)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              color: '#555',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {experiment.sector}
          </span>
        </div>

        {/* Main grid */}
        <div
          className={isEven ? 'exp-card-grid exp-card-grid--normal' : 'exp-card-grid exp-card-grid--reversed'}
        >
          {/* Text side */}
          <div className="exp-card-text">
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(26px, 3.5vw, 48px)',
                fontWeight: 400,
                color: '#F5F5F0',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '12px',
              }}
            >
              {experiment.headline}
            </h2>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: hexToRgba(experiment.accentColor, 0.8),
                marginBottom: '24px',
                lineHeight: 1.5,
              }}
            >
              {experiment.subheadline}
            </p>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: '#888',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              {experiment.description}
            </p>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '14px',
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '28px',
                paddingLeft: '14px',
                borderLeft: `2px solid ${hexToRgba(experiment.accentColor, 0.4)}`,
              }}
            >
              {experiment.solution}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
              {experiment.tags.map((tag) => (
                <ExperimentTag key={tag} label={tag} accentColor={experiment.accentColor} />
              ))}
            </div>

            {/* Metrics */}
            {experiment.metrics && experiment.metrics.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <ExperimentMetrics
                  metrics={experiment.metrics}
                  accentColor={experiment.accentColor}
                />
              </div>
            )}

            {/* CTA */}
            <ExperimentCTA
              href={experiment.ctaHref}
              accentColor={experiment.accentColor}
              name={experiment.name}
            />
          </div>

          {/* Visual side */}
          <div className="exp-card-visual">
            <div style={{ height: '400px' }} className="exp-scene-height">
              {experiment.hasLiveDemo && experiment.demoContext ? (
                <LiveDemoChat
                  experimentId={experiment.id}
                  accentColor={experiment.accentColor}
                  initialMessage={INITIAL_MESSAGES[experiment.id] ?? '¡Hola! ¿En qué puedo ayudarte?'}
                />
              ) : (
                <ExperimentScene3D
                  geometry={experiment.geometry}
                  animationType={experiment.animationType}
                  accentColor={experiment.accentColor}
                  particleCount={experiment.particleCount}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-card-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 48px;
          align-items: center;
        }
        .exp-card-grid--reversed {
          grid-template-columns: 40% 60%;
        }
        .exp-card-grid--reversed .exp-card-text {
          order: 2;
        }
        .exp-card-grid--reversed .exp-card-visual {
          order: 1;
        }
        @media (max-width: 1024px) {
          .exp-card-grid,
          .exp-card-grid--reversed {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
          .exp-card-grid--reversed .exp-card-text,
          .exp-card-grid--reversed .exp-card-visual {
            order: unset;
          }
          .exp-card-visual {
            order: -1;
          }
          .exp-scene-height {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── CTA button ──────────────────────────────────────────────────────────────

function ExperimentCTA({
  href,
  accentColor,
  name,
}: {
  href: string;
  accentColor: string;
  name: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '11px 22px',
        border: `1px solid ${hexToRgba(accentColor, hovered ? 1 : 0.35)}`,
        borderRadius: '6px',
        backgroundColor: hovered ? accentColor : 'transparent',
        color: hovered ? '#080808' : accentColor,
        fontFamily: 'var(--v5-font-mono)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textDecoration: 'none',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      }}
    >
      Quiero esto →
    </a>
  );
}
