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
  UserCheck, Link2, Video, FileText, Shield, Target,
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

const BACKGROUND_IMAGES: Record<string, string> = {
  'bamba-stock': '/images/labs/software-lab.png',
  'artiverse': '/images/labs/agents-lab.png',
  'suma-salut': '/images/labs/hero-office.jpg',
  'bramer': '/images/labs/hero-watch.jpg',
  'bonito-sound': '/images/labs/hero-darkroom.jpg',
  'musikeo': '/images/experimentos/bg-musikeo.png',
  'restaurante-ia': '/images/experimentos/bg-restaurante-ia.png',
  'asesoria-inteligente': '/images/experimentos/bg-asesoria-inteligente.png',
  'cannabis-club': '/images/experimentos/bg-cannabis-club.png',
  'aura': '/images/labs/hero-library.png',
};

// Feature list per experiment: Lucide icon + short phrase
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

export default function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const containerRef = useRef<HTMLElement>(null);

  const bgImage = BACKGROUND_IMAGES[experiment.id] ?? '/images/labs/gen-ai-lab.png';
  const features = FEATURES[experiment.id] ?? [];

  // GSAP entrance + parallax — Awwwards-level scroll reveal
  useEffect(() => {
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!containerRef.current) return;
      const el = containerRef.current;

      // 1. Section clip-path wipe: sweeps in from the bottom edge
      gsap.fromTo(
        el,
        { clipPath: 'inset(8% 0 0 0 round 0px)', opacity: 0.6 },
        {
          clipPath: 'inset(0% 0 0 0 round 0px)',
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 0.6,
          },
        }
      );

      // 2. Text content: staggered upward reveal
      const textEls = el.querySelectorAll('.exp-stagger');
      gsap.fromTo(
        textEls,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 78%' },
        }
      );

      // 3. Background parallax
      const bgEl = el.querySelector('.exp-bg');
      if (bgEl) {
        gsap.fromTo(
          bgEl,
          { backgroundPositionY: '25%' },
          {
            backgroundPositionY: '75%',
            ease: 'none',
            scrollTrigger: { trigger: el, scrub: true, start: 'top bottom', end: 'bottom top' },
          }
        );
      }

      // 4. Right visual: subtle float in from right
      const visualEl = el.querySelector('.exp-card-visual');
      if (visualEl) {
        gsap.fromTo(
          visualEl,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 75%' },
          }
        );
      }
    })();
  }, []);

  return (
    <section
      ref={containerRef}
      id={experiment.id}
      aria-label={experiment.name}
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0',
      }}
    >
      {/* Parallax background */}
      <div
        className="exp-bg"
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.45,
          filter: 'grayscale(0.25) contrast(1.05)',
        }}
      />
      {/* Left-heavy gradient veil */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(105deg, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.84) 50%, rgba(5,5,5,0.25) 100%)',
        }}
      />

      <div
        className="v5-container exp-content"
        style={{ position: 'relative', zIndex: 2, width: '100%' }}
      >
        {/* Metadata row */}
        <div className="exp-stagger" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
            {experiment.number}
          </span>
          <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }} />
          <StatusBadge status={experiment.status} />
          <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {experiment.sector}
          </span>
        </div>

        {/* Two-column grid */}
        <div className="exp-card-grid">
          {/* LEFT: Text */}
          <div className="exp-card-text">
            <div style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: 'clamp(30px, 5vw, 58px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.05,
              marginBottom: '18px',
              letterSpacing: '-0.01em',
            }}>
              {experiment.id === 'bamba-stock' ? 'App web a medida' :
                experiment.id === 'artiverse' ? 'Sistema de outreach automatizado' :
                  experiment.id === 'suma-salut' ? 'Chatbot conversacional con IA' :
                    experiment.id === 'bramer' ? 'Software ERP a medida' :
                      experiment.id === 'bonito-sound' ? 'Rediseño web + migración' :
                        experiment.id === 'musikeo' ? 'Marketplace de músicos' :
                          experiment.id === 'restaurante-ia' ? 'Agente WhatsApp Business' :
                            experiment.id === 'asesoria-inteligente' ? 'Agente de gestión de expedientes' :
                              experiment.id === 'cannabis-club' ? 'Suite de automatización' :
                                experiment.id === 'aura' ? 'Marca personal digital' : experiment.name}
            </div>

            <h2 style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.5,
              marginBottom: '12px',
              maxWidth: '560px',
            }}>
              {experiment.headline}
            </h2>

            {/* Subheadline — orange, small */}
            <p style={{
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

            {/* Feature list — Lucide icon + phrase */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
              {features.map(({ Icon, text }, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '11px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <Icon
                    size={13}
                    strokeWidth={1.5}
                    style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}
                  />
                  <span style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.4,
                    letterSpacing: '0.01em',
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <ExperimentCTA href={experiment.ctaHref} />
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
        .exp-card-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .exp-card-grid { grid-template-columns: 1fr; gap: 36px; }
          .exp-card-visual { order: -1; }
        }
        @media (max-width: 768px) {
          .exp-card-visual { display: none; }
        }
      `}</style>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function ExperimentCTA({ href }: { href: string }) {
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
        padding: '10px 20px',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.16)'}`,
        backgroundColor: hovered ? '#F5F5F0' : 'transparent',
        color: hovered ? '#080808' : '#F5F5F0',
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
