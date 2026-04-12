'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    title: 'La agencia que cobra y tarda',
    desc: '3 meses para un video de 30 segundos. Un presupuesto que se multiplica. Un resultado que no era lo que pediste.',
  },
  {
    number: '02',
    title: 'Contenido caro, ciclos lentos',
    desc: 'Cada revisión cuesta tiempo y dinero. Para cuando apruebas el material, la campaña ya pasó de moda.',
  },
  {
    number: '03',
    title: 'IA sin dirección creativa',
    desc: 'Generar imágenes en 10 segundos está bien. Pero sin estrategia y sin marca, generas ruido, no contenido.',
  },
];

const services = [
  {
    featured: true,
    title: 'Vídeo con IA',
    desc: 'Reels, anuncios y contenido audiovisual generado con IA. Runway, Sora y herramientas de última generación. Entregado en días.',
  },
  {
    featured: false,
    title: 'Branding con IA',
    desc: 'Identidad visual que transmite lo que eres antes de que digas nada. Generada en horas, no semanas.',
  },
  {
    featured: false,
    title: 'Creatividades para ads',
    desc: 'Decenas de variantes de imagen y copy para Meta, Google y LinkedIn. Generadas y testadas automáticamente.',
  },
  {
    featured: false,
    title: 'Presentaciones',
    desc: 'Decks que se entienden a la primera y dan ganas de trabajar contigo.',
  },
  {
    featured: false,
    title: 'Contenido para redes',
    desc: 'Posts, carruseles y material diario que posiciona y atrae. Producido con IA, con criterio editorial.',
  },
];

const stats = [
  { value: '72h', label: 'Entrega media de un proyecto creativo' },
  { value: '-65%', label: 'Menos coste vs agencia tradicional' },
  { value: '100% tuyo', label: 'Archivos fuente entregados, sin dependencias' },
];

const steps = [
  {
    number: '01',
    title: 'Entendemos tu objetivo',
    desc: 'Antes de hacer nada, entendemos qué necesitas comunicar y a quién. Un brief de 15 minutos nos da todo lo necesario.',
  },
  {
    number: '02',
    title: 'Producimos sin burocracia',
    desc: 'Diseño, video y copy en un solo equipo. Sin idas y venidas interminables. IA para velocidad, criterio humano para calidad.',
  },
  {
    number: '03',
    title: 'Entregamos y medimos',
    desc: 'Material listo para publicar. Formatos nativos para cada plataforma. Si algo no funciona, iteramos.',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function GenAILab() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── 1. HERO (dark) ──────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}>
          <Image
            src="/images/creative-lab/video.jpg"
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
                Gen AI Lab · 04
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
                {'Contenido generado con IA.\nSin agencias ni esperas.'}
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
                Video, imágenes, anuncios y creatividades producidas con IA generativa. En días, no en meses.
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
                  El problema con el contenido visual
                </h2>
              </div>
            </FadeUp>

            <div
              className="gal-problems-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
            >
              {problems.map((p, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div
                    className="gal-card"
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
                  ¿Qué incluye Gen AI Lab?
                </h2>
              </div>
            </FadeUp>

            {/* Bento grid */}
            <div
              className="gal-bento-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {/* Featured card — spans 2 columns */}
              <FadeUp delay={0} className="gal-featured-card" style={{ gridColumn: 'span 2' }}>
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
                  <span
                    style={{
                      display: 'inline-block',
                      marginBottom: '24px',
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
              {services.slice(1).map((s, i) => (
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
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. STATS STRIP (dark #111) ──────────────────────────────────── */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              className="gal-stats-grid"
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
              className="gal-steps-grid"
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
                  ¿Necesitas contenido que convierta?
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
                  Sesión de diagnóstico gratuita. Analizamos qué material necesitas y te decimos cómo producirlo con IA en días, no en meses.
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
          .gal-problems-grid,
          .gal-steps-grid,
          .gal-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .gal-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .gal-featured-card {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 1024px) {
          .gal-bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gal-featured-card {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </div>
  );
}
