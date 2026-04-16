'use client';

import { useRef, useEffect, useState } from 'react';
import type { Experiment } from '@/data/experiments-page';
import StatusBadge from './StatusBadge';
import LiveDemoChat from './LiveDemoChat';
import Experiment3DScene from './Experiment3DScene';
import {
  Camera, RefreshCw, ShoppingBag, Mail, Bot, BarChart2,
  MessageCircle, Clock, Mic, Image, Bell, Briefcase,
  Globe, PenLine, TrendingUp, Search, Layers, Zap,
  UserCheck, Link2, FileText, Shield, Target,
  ScanLine, Sparkles, Newspaper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ExperimentCardProps {
  experiment: Experiment;
  index: number;
}

const INITIAL_MESSAGES: Record<string, string> = {
  'suma-salut': '¡Hola! Soy el asistente de Suma Salut. Estoy aquí para responder tus dudas sobre horarios, seguros, precios y especialidades. ¿En qué te puedo ayudar?',
  'restaurante-ia': '¡Hola! Bienvenido a La Taberna del Puerto. Puedo ayudarte con reservas, horarios, carta, alérgenos... ¿Qué necesitas?',
};

const FEATURES: Record<string, { Icon: LucideIcon; text: string }[]> = {
  'bamba-stock': [
    { Icon: Camera, text: 'Foto → ficha completa generada por IA en 8 segundos' },
    { Icon: RefreshCw, text: 'Stock sincronizado en los 3 locales en tiempo real' },
    { Icon: ShoppingBag, text: 'Catálogo publicado en WordPress automáticamente' },
  ],
  'artiverse': [
    { Icon: Mail, text: '6 secuencias de email personalizadas por segmento' },
    { Icon: Bot, text: 'Enriquecimiento de contactos con IA' },
    { Icon: BarChart2, text: 'Pipeline de outreach desde Instantly.ai' },
  ],
  'suma-salut': [
    { Icon: MessageCircle, text: 'Resuelve el 80% de consultas sin intervención humana' },
    { Icon: Clock, text: 'Disponible 24/7, respuesta en menos de 3 segundos' },
    { Icon: UserCheck, text: 'Escala a agente humano cuando detecta urgencia' },
  ],
  'bramer': [
    { Icon: Mic, text: 'El técnico dicta el parte por voz, la IA lo estructura' },
    { Icon: Image, text: 'Fotos de reparación categorizadas automáticamente' },
    { Icon: Bell, text: 'Cliente notificado en tiempo real sin intervención manual' },
  ],
  'bonito-sound': [
    { Icon: Layers, text: 'Identidad visual renovada con catálogo de artistas dinámico' },
    { Icon: Link2, text: 'Integración con Artiverse para booking directo' },
    { Icon: Search, text: 'SEO optimizado para búsquedas de booking en España' },
  ],
  'musikeo': [
    { Icon: Zap, text: 'Alquiler de material técnico en menos de 24 horas' },
    { Icon: UserCheck, text: 'Red de colaboradores verificados por ciudad e instrumento' },
    { Icon: Bot, text: 'IA de matching por disponibilidad y estilo musical' },
  ],
  'restaurante-ia': [
    { Icon: MessageCircle, text: 'Responde FAQs en WhatsApp e Instagram DM automáticamente' },
    { Icon: FileText, text: 'Gestiona reservas y envía el menú en PDF al instante' },
    { Icon: Shield, text: 'Escala a humano ante quejas o situaciones complejas' },
  ],
  'asesoria-inteligente': [
    { Icon: Briefcase, text: 'Consulta el CRM y responde el estado del expediente' },
    { Icon: Clock, text: 'Sin intervención humana para consultas de estado' },
    { Icon: Target, text: 'Agente de captación que cualifica leads las 24h' },
  ],
  'cannabis-club': [
    { Icon: ScanLine, text: 'OCR de DNI para alta automática de socios' },
    { Icon: Sparkles, text: 'Generador de fichas de producto con IA' },
    { Icon: Newspaper, text: 'Agente editorial para noticias del sector' },
  ],
  'aura': [
    { Icon: Globe, text: 'Identidad digital + web construida sobre tu expertise' },
    { Icon: PenLine, text: 'Sistema de contenido con IA que se mantiene solo' },
    { Icon: TrendingUp, text: 'Estrategia de LinkedIn con publicaciones semanales' },
  ],
};

const CATEGORY_LABEL: Record<string, string> = {
  'bamba-stock': 'App web a medida',
  'artiverse': 'Sistema de outreach automatizado',
  'suma-salut': 'Chatbot conversacional con IA',
  'bramer': 'Software ERP a medida',
  'bonito-sound': 'Rediseño web + migración',
  'musikeo': 'Marketplace de músicos',
  'restaurante-ia': 'Agente WhatsApp Business',
  'asesoria-inteligente': 'Agente de gestión de expedientes',
  'cannabis-club': 'Suite de automatización',
  'aura': 'Marca personal digital',
};

export default function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);

  // Alternating dark/light
  const isDark = index % 2 === 0;

  const bg             = isDark ? '#050505' : '#F5F5F0';
  const titleColor     = isDark ? '#FFFFFF' : '#111111';
  const headlineColor  = isDark ? 'rgba(245,240,232,0.82)' : 'rgba(0,0,0,0.72)';
  const featureText    = isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.55)';
  const featureIcon    = isDark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.28)';
  const featureBorder  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const metaColor      = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.38)';
  const dividerColor   = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
  const ghostNumColor  = isDark ? 'rgba(255,255,255,0.022)' : 'rgba(0,0,0,0.04)';

  const features = FEATURES[experiment.id] ?? [];
  const label    = CATEGORY_LABEL[experiment.id] ?? experiment.name;

  useEffect(() => {
    (async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const el = sectionRef.current;
      if (!el) return;

      // 1. Section wipe-in
      gsap.fromTo(el,
        { clipPath: 'inset(6% 0 0 0 round 0px)', opacity: 0.65 },
        {
          clipPath: 'inset(0% 0 0 0 round 0px)',
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 12%', scrub: 0.7 },
        }
      );

      // 2. Scale-down exit
      gsap.to(el, {
        scale: 0.94,
        filter: isDark ? 'brightness(0.45)' : 'brightness(0.85)',
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'bottom 65%', end: 'bottom top', scrub: 1.2 },
      });

      // 3. Word-split title
      const titleEl = titleRef.current;
      if (titleEl) {
        const words = label.split(' ');
        titleEl.innerHTML = words
          .map(w => `<span class="exp-word-wrap"><span class="exp-word">${w}</span></span>`)
          .join(' ');
        gsap.fromTo(titleEl.querySelectorAll('.exp-word'),
          { y: '105%' },
          {
            y: '0%', stagger: 0.07, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 75%' },
          }
        );
      }

      // 4. Meta row
      const metaEl = el.querySelector('.exp-meta');
      if (metaEl) {
        gsap.fromTo(metaEl, { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 72%' } }
        );
      }

      // 5. Feature rows from left
      const featureEls = el.querySelectorAll('.exp-feature-row');
      if (featureEls.length) {
        gsap.fromTo(featureEls, { opacity: 0, x: -24 },
          {
            opacity: 1, x: 0, stagger: 0.07, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 65%' },
          }
        );
      }

      // 6. Subheadline + CTA
      const subEls = el.querySelectorAll('.exp-sub, .exp-cta');
      if (subEls.length) {
        gsap.fromTo(subEls, { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 68%' },
          }
        );
      }

      // 7. Visual float in
      const visualEl = el.querySelector('.exp-card-visual');
      if (visualEl) {
        gsap.fromTo(visualEl, { opacity: 0, x: 48, scale: 0.96 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 72%' },
          }
        );
      }
    })();
  }, [label, isDark]);

  return (
    <section
      ref={sectionRef}
      id={experiment.id}
      aria-label={experiment.name}
      className="exp-card-section"
      style={{
        position: 'relative',
        backgroundColor: bg,
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0',
        transformOrigin: 'center top',
        willChange: 'transform',
      }}
    >
      {/* Ghost index number */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-0.05em',
          right: '-0.02em',
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(180px, 26vw, 380px)',
          fontWeight: 700,
          color: ghostNumColor,
          lineHeight: 1,
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        {experiment.number}
      </div>

      <div className="v5-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Meta row */}
        <div
          className="exp-meta"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}
        >
          <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: metaColor, letterSpacing: '0.15em' }}>
            {experiment.number}
          </span>
          <div style={{ width: '1px', height: '14px', background: dividerColor }} />
          <StatusBadge status={experiment.status} />
          <div style={{ width: '1px', height: '14px', background: dividerColor }} />
          <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: metaColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {experiment.sector}
          </span>
        </div>

        {/* Two-column grid */}
        <div className="exp-card-grid">
          {/* LEFT */}
          <div className="exp-card-text">
            {/* Word-split title */}
            <div
              ref={titleRef}
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(30px, 5vw, 58px)',
                fontWeight: 700,
                color: titleColor,
                lineHeight: 1.05,
                marginBottom: '18px',
                letterSpacing: '-0.01em',
                overflow: 'hidden',
              }}
            >
              {label}
            </div>

            <h2 className="exp-sub" style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 300,
              color: headlineColor,
              lineHeight: 1.5,
              marginBottom: '12px',
              maxWidth: '560px',
            }}>
              {experiment.headline}
            </h2>

            <p className="exp-sub" style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '12.5px',
              fontWeight: 400,
              color: '#EA580C',
              marginBottom: '36px',
              lineHeight: 1.5,
              letterSpacing: '0.01em',
              maxWidth: '540px',
            }}>
              {experiment.subheadline}
            </p>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '40px' }}>
              {features.map(({ Icon, text }, i) => (
                <div
                  key={i}
                  className="exp-feature-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '11px 0',
                    borderBottom: `1px solid ${featureBorder}`,
                  }}
                >
                  <Icon size={13} strokeWidth={1.5} style={{ color: featureIcon, flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: featureText,
                    lineHeight: 1.4,
                    letterSpacing: '0.01em',
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="exp-cta">
              <ExperimentCTA href={experiment.ctaHref} isDark={isDark} />
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="exp-card-visual">
            {experiment.hasLiveDemo && experiment.demoContext ? (
              <LiveDemoChat
                experimentId={experiment.id}
                accentColor="#EA580C"
                initialMessage={INITIAL_MESSAGES[experiment.id] ?? '¡Hola! ¿En qué puedo ayudarte?'}
              />
            ) : (
              <Experiment3DScene
                id={experiment.id}
                geometry={experiment.geometry}
                animationType={experiment.animationType}
                accentColor={experiment.accentColor}
                particleCount={experiment.particleCount}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        .exp-word-wrap {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }
        .exp-word { display: inline-block; }
        .exp-card-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .exp-card-grid { grid-template-columns: 1fr; gap: 28px; }
          .exp-card-visual { order: -1; }
        }
        @media (max-width: 768px) {
          .exp-card-section {
            padding: 72px 0 60px !important;
            min-height: auto !important;
            min-height: 100svh !important;
          }
          .exp-card-visual { max-height: 280px; }
          .exp-card-grid { gap: 20px; }
        }
        @media (max-width: 480px) {
          .exp-card-section {
            padding: 56px 0 48px !important;
          }
          .exp-card-visual { max-height: 240px; }
        }
      `}</style>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function ExperimentCTA({ href, isDark }: { href: string; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);

  const borderNormal  = isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.18)';
  const borderHovered = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.6)';
  const bgHovered     = isDark ? '#F5F5F0' : '#111111';
  const colorNormal   = isDark ? '#F5F5F0' : '#111111';
  const colorHovered  = isDark ? '#080808' : '#F5F5F0';

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
        border: `1px solid ${hovered ? borderHovered : borderNormal}`,
        backgroundColor: hovered ? bgHovered : 'transparent',
        color: hovered ? colorHovered : colorNormal,
        fontFamily: 'var(--v5-font-body)',
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '0.02em',
        textDecoration: 'none',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      }}
    >
      Hablar de este proyecto →
    </a>
  );
}
