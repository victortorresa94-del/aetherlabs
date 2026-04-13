'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock, Users, Zap } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── Data ────────────────────────────────────────────────────────────────────

const casos = [
  {
    index: '01',
    sector: 'Educación online',
    lab: 'Creative Lab',
    client: 'SOMA / Audio Hackers',
    title: 'Llenar un máster de composición musical en un mercado saturado de cursos.',
    desc: 'Estrategia de lanzamiento completa: ManyChat, reels, lead magnets y cierre de ventas directo.',
    resultado: '+20.000€',
    resultadoSub: 'en ventas directas · ~200 alumnos · Objetivo superado.',
    image: '/images/creative/twojeys.jpg',
  },
  {
    index: '02',
    sector: 'Agencia de marketing',
    lab: 'Systems Lab',
    client: 'EME Agency',
    title: 'Una agencia creciendo rápido sin estructura para soportarlo.',
    desc: 'ClickUp desde cero. +40 SOPs documentados. Formación completa al equipo.',
    resultado: '40 proyectos',
    resultadoSub: 'gestionados simultáneamente · Sistema que no depende de nadie.',
    image: '/images/aether-office.jpg',
  },
  {
    index: '03',
    sector: 'Lanzamiento internacional',
    lab: 'Creative Lab',
    client: 'Totemica (EE.UU.)',
    title: 'Lanzar una marca desde cero en el mercado americano.',
    desc: 'Go-to-market completo: estudio de mercado, pricing, proveedores, branding y web.',
    resultado: 'Operativa',
    resultadoSub: 'en EE.UU. desde cero · Base estratégica completa para escalar.',
    image: '/images/skyflex/main.jpg',
  },
  {
    index: '04',
    sector: 'Institucional',
    lab: 'Learn Lab',
    client: 'Ajuntament de Badalona',
    title: 'IA para mujeres de 40-60 que nunca habían tocado una herramienta de IA.',
    desc: 'Talleres presenciales sin tecnicismos. Solo móvil. En colaboración con el ayuntamiento.',
    resultado: 'Programa validado',
    resultadoSub: 'Primer caso institucional · Base del catálogo de 9 programas.',
    image: '/images/learn/learning-session-elegant.png',
  },
];

const casosDeUso = [
  {
    icon: Clock,
    num: '01',
    title: 'Reporting automático',
    desc: 'Una empresa B2B tardaba 4h cada lunes preparando informes de ventas. Claude + n8n lo hace solo a las 8h del lunes.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Onboarding de clientes',
    desc: 'Cada nuevo cliente generaba 30min de trabajo manual. Ahora: proyecto en ClickUp, Drive y email de bienvenida en 2 minutos.',
  },
  {
    icon: Zap,
    num: '03',
    title: 'Equipo de marketing con Claude',
    desc: 'Un equipo de 4 personas generó el triple de contenido en el mismo tiempo con Skills personalizados.',
  },
];

// ─── Animation helpers ───────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CasosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>
        {/* ── Section 1: Hero (dark) ─────────────────────────────────────── */}
        <section
          className="casos-hero-section"
          style={{
            backgroundColor: '#080808',
            paddingTop: '160px',
            paddingBottom: '120px',
          }}
        >
          <div className="v5-container">
            <FadeUp>
              <span
                style={{
                  display: 'block',
                  marginBottom: '32px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                }}
              >
                Casos de éxito
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.0,
                  color: '#F5F5F0',
                  margin: '0 0 28px 0',
                  maxWidth: '760px',
                }}
              >
                Resultados reales.
                <br />
                <span style={{ color: 'rgba(245,245,240,0.35)' }}>Nada más.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '480px',
                  margin: 0,
                }}
              >
                Proyectos concretos, números concretos. Sin presentaciones.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Section 2: Casos reales (light) ───────────────────────────── */}
        <section
          className="casos-light-section"
          style={{
            backgroundColor: '#F8F8F5',
            paddingTop: '100px',
            paddingBottom: '120px',
          }}
        >
          <div className="v5-container">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
              }}
            >
              {casos.map((caso, i) => (
                <CasoCard key={caso.index} caso={caso} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Casos de uso (dark) ────────────────────────────── */}
        <section
          className="casos-dark-section"
          style={{
            backgroundColor: '#080808',
            paddingTop: '100px',
            paddingBottom: '120px',
          }}
        >
          <div className="v5-container">
            <FadeUp>
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
                En práctica
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                  margin: '0 0 64px 0',
                  maxWidth: '600px',
                }}
              >
                Lo que implementamos cada semana
              </h2>
            </FadeUp>

            <div className="casos-uso-grid">
              {casosDeUso.map((cu, i) => (
                <UsoCasoCard key={cu.num} cu={cu} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: CTA (dark continuation) ───────────────────────── */}
        <section
          className="casos-cta-section"
          style={{
            backgroundColor: '#080808',
            borderTop: '1px solid #1a1a1a',
            paddingTop: '100px',
            paddingBottom: '120px',
          }}
        >
          <div className="v5-container">
            <div
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '36px',
              }}
            >
              <FadeUp>
                <h2
                  style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(30px, 4vw, 52px)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#F5F5F0',
                    margin: 0,
                  }}
                >
                  ¿Tu empresa podría ser el próximo caso?
                </h2>
              </FadeUp>

              <FadeUp delay={0.05}>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontWeight: 300,
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.45)',
                    margin: 0,
                  }}
                >
                  Cuéntanos el reto. En 30 minutos sabes si podemos ayudarte.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <CTAButton />
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .casos-uso-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .casos-uso-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .casos-uso-grid {
            grid-template-columns: 1fr;
          }
        }

        .caso-card-inner {
          display: grid;
          grid-template-columns: 1fr 400px;
          min-height: 340px;
        }

        .caso-card-inner.reverse {
          grid-template-columns: 400px 1fr;
        }
        .caso-card-inner.reverse .caso-card-image {
          order: -1;
        }

        @media (max-width: 960px) {
          .caso-card-inner,
          .caso-card-inner.reverse {
            grid-template-columns: 1fr;
          }
          .caso-card-inner .caso-card-image,
          .caso-card-inner.reverse .caso-card-image {
            height: 240px !important;
            min-height: unset !important;
            order: -1;
          }
        }

        @media (max-width: 768px) {
          /* Hero padding */
          .casos-hero-section {
            padding-top: 120px !important;
            padding-bottom: 60px !important;
          }
          .casos-hero-section h1 {
            font-size: clamp(36px, 10vw, 96px) !important;
          }

          /* Container horizontal padding */
          .v5-page .v5-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          /* Section padding */
          .casos-light-section,
          .casos-dark-section,
          .casos-cta-section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }

          /* Editorial cards: single column, no rtl */
          .caso-card-inner {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .caso-card-inner > div:first-child {
            padding: 32px 24px !important;
          }
          .caso-card-image {
            height: 220px !important;
            min-height: unset !important;
            order: -1;
          }

          /* Resultado numbers: reduce */
          .caso-resultado-num {
            font-size: clamp(24px, 8vw, 42px) !important;
          }

          /* Casos de uso grid: 1 col */
          .casos-uso-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CasoCard({
  caso,
  index,
}: {
  caso: (typeof casos)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #e8e8e5',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <div className={`caso-card-inner${isEven ? ' reverse' : ''}`}>
        {/* Left: content */}
        <div
          style={{
            padding: '52px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '28px',
          }}
        >
          {/* Top: meta row */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#aaaaaa',
                  letterSpacing: '0.04em',
                }}
              >
                {caso.index}
              </span>
              <span
                style={{
                  width: '1px',
                  height: '12px',
                  background: '#d8d8d5',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                }}
              >
                {caso.sector}
              </span>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  background: '#f0f0ed',
                  border: '1px solid #e0e0dd',
                  padding: '3px 10px',
                  borderRadius: '100px',
                }}
              >
                {caso.lab}
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(20px, 2vw, 26px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: '#111111',
                margin: '0 0 16px 0',
              }}
            >
              {caso.title}
            </h2>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#666666',
                margin: 0,
              }}
            >
              {caso.desc}
            </p>
          </div>

          {/* Bottom: resultado block */}
          <div
            style={{
              borderTop: '1px solid #e8e8e5',
              paddingTop: '24px',
            }}
          >
            <p
              className="caso-resultado-num"
              style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 3vw, 42px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                color: '#111111',
                margin: '0 0 8px 0',
              }}
            >
              {caso.resultado}
            </p>
            <p
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.02em',
                lineHeight: 1.6,
                color: '#999999',
                margin: 0,
              }}
            >
              {caso.resultadoSub}
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="caso-card-image"
          style={{
            position: 'relative',
            height: '100%',
            minHeight: '320px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={caso.image}
            alt={caso.client}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 960px) 100vw, 400px"
          />
        </div>
      </div>
    </motion.div>
  );
}

function UsoCasoCard({
  cu,
  index,
}: {
  cu: (typeof casosDeUso)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = cu.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      style={{
        background: '#111111',
        border: '1px solid #222222',
        borderRadius: '16px',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative index */}
      <span
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '20px',
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '80px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {cu.num}
      </span>

      {/* Icon */}
      <div
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
        }}
      >
        <Icon size={16} color="#888888" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '20px',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          color: '#F5F5F0',
          margin: 0,
        }}
      >
        {cu.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--v5-font-body)',
          fontWeight: 300,
          fontSize: '14px',
          lineHeight: 1.8,
          color: 'rgba(245,245,240,0.5)',
          margin: 0,
        }}
      >
        {cu.desc}
      </p>
    </motion.div>
  );
}

function CTAButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      href="/systems-lab/sesion-de-claridad"
      ref={ref}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '16px 36px',
        background: '#F5F5F0',
        color: '#080808',
        borderRadius: '4px',
        fontFamily: 'var(--v5-font-body)',
        fontSize: '15px',
        fontWeight: 400,
        textDecoration: 'none',
        transition: 'background 200ms ease, transform 200ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#FFFFFF';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#F5F5F0';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Auditoría gratuita
      <ArrowUpRight size={16} strokeWidth={1.5} />
    </Link>
  );
}
