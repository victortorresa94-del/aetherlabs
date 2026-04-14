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
  'suma-salut': '¡Hola! Soy el asistente de Suma Salut. Estoy aquí para responder tus dudas sobre horarios, seguros, precios y especialidades. ¿En qué te puedo ayudar?',
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
        backgroundColor: experiment.id === 'suma-salut' ? '#061412' :
          experiment.id === 'artiverse' ? '#080D1A' :
            experiment.id === 'bamba-stock' ? '#1A0A08' :
              experiment.id === 'bramer' ? '#1A1204' :
                experiment.id === 'bonito-sound' ? '#100A1A' :
                  experiment.id === 'restaurante-ia' ? '#1A0808' :
                    experiment.id === 'asesoria-inteligente' ? '#0A0A1A' :
                      experiment.id === 'cannabis-club' ? '#081A0D' :
                        experiment.id === 'aura' ? '#00101A' :
                          experiment.id === 'musikeo' ? '#1A0812' : '#0A0A0A',
        overflow: 'hidden',
        padding: '100px 0',
      }}
    >
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
              color: 'rgba(255,255,255,0.3)',
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
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {experiment.sector}
          </span>
        </div>

        {/* Main grid */}
        <div className="exp-card-grid">
          {/* Text side */}
          <div className="exp-card-text">
            {/* C6: Project Type */}
            <div
              className="experiment-type"
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(28px, 5vw, 52px)',
                fontWeight: 700,
                color: experiment.accentColor,
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              {experiment.id === 'bamba-stock' ? 'App móvil a medida' :
                experiment.id === 'artiverse' ? 'Sistema de outreach automatizado' :
                  experiment.id === 'suma-salut' ? 'Chatbot conversacional con IA' :
                    experiment.id === 'bramer' ? 'Software ERP a medida' :
                      experiment.id === 'bonito-sound' ? 'Rediseño web + migración' :
                        experiment.id === 'musikeo' ? 'Marketplace de músicos' :
                          experiment.id === 'restaurante-ia' ? 'Agente WhatsApp Business' :
                            experiment.id === 'asesoria-inteligente' ? 'Agente de gestión de expedientes' :
                              experiment.id === 'cannabis-club' ? 'Suite de automatización' :
                                experiment.id === 'aura' ? 'Marca personal digital' : 'Experimento IA'}
            </div>

            <h2
              className="experiment-pain-headline"
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(24px, 4vw, 44px)',
                fontWeight: 700,
                color: '#F5F0E8',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {experiment.headline}
            </h2>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: experiment.accentColor,
                marginBottom: '24px',
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              {experiment.subheadline}
            </p>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                marginBottom: '28px',
                paddingLeft: '14px',
                borderLeft: `2px solid ${experiment.accentColor}`,
                maxWidth: '480px',
              }}
            >
              {experiment.solution}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
              {experiment.tags.slice(0, 4).map((tag) => (
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
            <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="exp-scene-height">
              {experiment.hasLiveDemo && experiment.demoContext ? (
                <LiveDemoChat
                  experimentId={experiment.id}
                  accentColor={experiment.accentColor}
                  initialMessage={INITIAL_MESSAGES[experiment.id] ?? '¡Hola! ¿En qué puedo ayudarte?'}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <ExperimentScene3D
                    geometry={experiment.geometry}
                    animationType={experiment.animationType}
                    accentColor={experiment.accentColor}
                    particleCount={experiment.particleCount}
                  />
                </div>
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
