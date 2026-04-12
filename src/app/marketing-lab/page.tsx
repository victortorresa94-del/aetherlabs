'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Target, Rocket, Mail, Sparkles, BarChart2 } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

/* ─── Animation helpers ─────────────────────────────────────────────────── */

const EASE = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────────── */

const problems = [
  {
    number: '01',
    title: 'La agencia que cobra y desaparece',
    desc: 'Pagas la cuota mensual. Recibes informes. No sabes qué funciona. No puedes cambiar nada. Y los resultados no mejoran.',
  },
  {
    number: '02',
    title: 'El contenido que no convierte',
    desc: 'Publicas, creas, mandas emails. La audiencia crece pero los clientes no. El problema no es el volumen — es la estrategia.',
  },
  {
    number: '03',
    title: 'La campaña que se lanza sola',
    desc: 'Lanzas un producto o servicio sin sistema. Pico inicial, luego silencio. Sin un sistema de nurturing, cada lanzamiento empieza de cero.',
  },
];

const services = [
  {
    featured: true,
    title: 'Sistema de captación automático',
    desc: 'Construimos el embudo completo: anuncio → landing → lead magnet → email sequence → llamada. Automatizado, medido, optimizado con IA.',
    icon: Target,
  },
  {
    featured: false,
    title: 'Campañas de lanzamiento',
    desc: 'Estrategia + contenido + ads + email para el lanzamiento de un producto o servicio. Con IA generando variantes y optimizando en tiempo real.',
    icon: Rocket,
  },
  {
    featured: false,
    title: 'Lead nurturing con IA',
    desc: 'Secuencias de emails personalizadas según el comportamiento del lead. El mensaje correcto, en el momento correcto, sin trabajo manual.',
    icon: Mail,
  },
  {
    featured: false,
    title: 'Ads con IA generativa',
    desc: 'Decenas de variantes de copy e imagen generadas y testadas automáticamente. Los mejores, escalados. Los peores, descartados solos.',
    icon: Sparkles,
  },
  {
    featured: false,
    title: 'Análisis y optimización',
    desc: 'Dashboard de métricas en tiempo real. Sabemos qué funciona, qué falla y qué hacer — sin esperar al informe mensual de la agencia.',
    icon: BarChart2,
  },
];

const stats = [
  { value: '3x', label: 'ROI medio vs agencia tradicional en misma inversión' },
  { value: '-60%', label: 'Tiempo invertido en marketing manual' },
  { value: 'Todo medido', label: 'Sin decisiones a ciegas' },
];

const steps = [
  {
    number: '01',
    title: 'Auditoría de marketing',
    desc: 'Analizamos qué tienes, qué falta y dónde están las mayores oportunidades. Diagnóstico honesto en 48h.',
  },
  {
    number: '02',
    title: 'Construcción del sistema',
    desc: 'Montamos el stack de automatización: CRM, email, ads, landing. Todo conectado, todo midiendo.',
  },
  {
    number: '03',
    title: 'Gestión y optimización',
    desc: 'Ejecutamos, medimos y optimizamos cada semana. No somos la agencia que desaparece — somos el equipo que mejora.',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function MarketingLab() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── 1. HERO (dark) ──────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}>
          <Image
            src="/images/creative-lab/branding.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.65) 100%)',
            zIndex: 1,
          }} />
          <div className="v5-container w-full relative z-10">

            <FadeUp>
              <span
                style={{
                  display: 'block',
                  marginBottom: '28px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555555',
                }}
              >
                Marketing Lab · 05
              </span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.0,
                  color: '#F5F5F0',
                  maxWidth: '1100px',
                  marginBottom: '32px',
                  whiteSpace: 'pre-line',
                }}
              >
                {'El marketing que escala.\nNo el que consume.'}
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.50)',
                  maxWidth: '560px',
                  marginBottom: '48px',
                }}
              >
                Automatizaciones de captación, campañas de lanzamiento y sistemas de lead nurturing. Con IA como motor — no como herramienta secundaria.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  border: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                }}
              >
                Auditoría gratuita <ArrowUpRight size={16} />
              </Link>
            </FadeUp>

          </div>
        </section>

        {/* ── 2. PAIN SECTION (light) ─────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F8F8F5', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  El problema
                </span>
                <h2
                  style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    maxWidth: '680px',
                  }}
                >
                  ¿Por qué tu marketing no rinde lo que debería?
                </h2>
              </div>
            </FadeUp>

            <div
              className="ml-problems-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
            >
              {problems.map((p, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div
                    className="ml-card"
                    style={{
                      background: '#fff',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: '36px 32px',
                      height: '100%',
                      transition: 'transform 320ms ease, box-shadow 320ms ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(-3px)';
                      el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        marginBottom: '20px',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#CCCCCC',
                      }}
                    >
                      {p.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontSize: '20px',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                        marginBottom: '14px',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.75,
                        color: '#666666',
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* ── 3. WHAT WE DO (dark) ────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#080808', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555555',
                  }}
                >
                  Servicios
                </span>
                <h2
                  style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#F5F5F0',
                    maxWidth: '680px',
                  }}
                >
                  ¿Qué incluye Marketing Lab?
                </h2>
              </div>
            </FadeUp>

            {/* Bento grid */}
            <div
              className="ml-bento-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {/* Featured card — spans 2 columns */}
              <FadeUp delay={0} className="ml-featured-card" style={{ gridColumn: 'span 2' }}>
                <div
                  style={{
                    background: '#111111',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '48px 44px',
                    height: '100%',
                    transition: 'border-color 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.16)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Target size={17} color="#F5F5F0" />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#555555',
                        border: '1px solid #333',
                        borderRadius: '4px',
                        padding: '4px 10px',
                      }}
                    >
                      Servicio principal
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                      fontSize: 'clamp(22px, 2.5vw, 32px)',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      color: '#F5F5F0',
                      marginBottom: '18px',
                    }}
                  >
                    {services[0].title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: 'rgba(245,245,240,0.45)',
                      maxWidth: '520px',
                      margin: 0,
                    }}
                  >
                    {services[0].desc}
                  </p>
                </div>
              </FadeUp>

              {/* Regular cards */}
              {services.slice(1).map((s, i) => {
                const ServiceIcon = s.icon;
                return (
                <FadeUp key={i + 1} delay={(i + 1) * 0.08}>
                  <div
                    style={{
                      background: '#111111',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      padding: '36px 32px',
                      height: '100%',
                      transition: 'border-color 300ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.16)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <div style={{ width: '34px', height: '34px', borderRadius: '7px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <ServiceIcon size={15} color="#999" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontSize: '18px',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                        color: '#F5F5F0',
                        marginBottom: '14px',
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.75,
                        color: 'rgba(245,245,240,0.40)',
                        margin: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </FadeUp>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 4. STATS STRIP (dark #111) ──────────────────────────────────── */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              className="ml-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
              }}
            >
              {stats.map((s, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontSize: 'clamp(40px, 5vw, 64px)',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '-0.02em',
                        color: '#F5F5F0',
                        lineHeight: 1,
                        marginBottom: '12px',
                      }}
                    >
                      {s.value}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'rgba(245,245,240,0.40)',
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. PROCESS (light) ──────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F8F8F5', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#888888',
                  }}
                >
                  El proceso
                </span>
                <h2
                  style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    maxWidth: '540px',
                  }}
                >
                  Cómo lo hacemos
                </h2>
              </div>
            </FadeUp>

            <div
              className="ml-steps-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
            >
              {steps.map((step, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: '40px 32px',
                      height: '100%',
                      transition: 'transform 320ms ease, box-shadow 320ms ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(-3px)';
                      el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        marginBottom: '24px',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#CCCCCC',
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontSize: '20px',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                        marginBottom: '14px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.75,
                        color: '#666666',
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* ── 6. CTA (dark) ───────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#080808', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: '720px' }}>

              <FadeUp>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '24px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555555',
                  }}
                >
                  Siguiente paso
                </span>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h2
                  style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#F5F5F0',
                    marginBottom: '24px',
                  }}
                >
                  ¿Quieres un sistema de marketing que trabaje aunque no estés?
                </h2>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.50)',
                    marginBottom: '48px',
                  }}
                >
                  Sesión de diagnóstico gratuita. Analizamos tu situación actual y te decimos dónde está el dinero que estás dejando sobre la mesa.
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '18px 36px',
                    background: '#F5F5F0',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Auditoría gratuita <ArrowUpRight size={16} />
                </Link>
              </FadeUp>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── Responsive overrides ──────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .ml-problems-grid,
          .ml-steps-grid,
          .ml-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .ml-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .ml-featured-card {
            grid-column: span 1 !important;
          }
          /* Hero H1 min 36px */
          .v5-page section h1 {
            font-size: clamp(36px, 9vw, 80px) !important;
          }
          /* Hero padding */
          .v5-page section.relative {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
          /* Section padding */
          .v5-page section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          /* Container padding */
          .v5-page .v5-container,
          .v5-page [style*="maxWidth: '1280px'"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (max-width: 1024px) {
          .ml-bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ml-featured-card {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </div>
  );
}
