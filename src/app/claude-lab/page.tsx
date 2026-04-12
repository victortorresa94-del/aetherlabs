'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── Animation helpers ────────────────────────────────────────────────────────

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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    number: '01',
    title: 'La suscripción que nadie usa',
    desc: 'Tienen Claude Pro o Teams. Lo abrieron dos veces. Sigue sin integrarse en ningún proceso real.',
  },
  {
    number: '02',
    title: 'El prompt que no funciona',
    desc: 'Alguien del equipo intentó usarlo, le salió algo mediocre, concluyó que "la IA no sirve para esto". Nunca supo que el problema era el prompt.',
  },
  {
    number: '03',
    title: 'La formación que no forma',
    desc: 'Hicieron un taller de 2 horas. Les contaron qué es la IA. Tres semanas después, todo igual.',
  },
];

const includes = [
  {
    number: '01',
    title: 'Auditoría de procesos',
    desc: 'Mapeamos dónde Claude puede reemplazar o acelerar trabajo real en tu empresa.',
    tall: false,
  },
  {
    number: '02',
    title: 'Implementación',
    desc: 'Construimos los prompts, workflows y automatizaciones específicas para tu negocio.',
    tall: false,
  },
  {
    number: '03',
    title: 'Formación por roles',
    desc: 'No formamos a "la empresa" — formamos a cada persona según su trabajo real.',
    tall: true,
  },
  {
    number: '04',
    title: 'Actualizaciones continuas',
    desc: 'Cuando Claude saca una nueva capacidad relevante para ti, te la llevamos. Sin que tengas que enterarte tú.',
    tall: false,
  },
];

const stats = [
  { value: '3x', label: 'Velocidad media en tareas repetitivas tras implementación' },
  { value: '2 semanas', label: 'Tiempo hasta que el equipo trabaja con Claude a diario' },
  { value: 'Continuo', label: 'No es un proyecto. Es un servicio mensual.' },
];

const steps = [
  {
    number: '01',
    title: 'Sesión de diagnóstico',
    desc: 'Analizamos tus procesos y decidimos dónde empieza Claude. Salimos con un plan concreto.',
  },
  {
    number: '02',
    title: 'Implementación + formación inicial',
    desc: 'Configuramos, construimos y formamos al equipo en las primeras aplicaciones reales.',
  },
  {
    number: '03',
    title: 'Iteración mensual',
    desc: 'Revisamos, añadimos nuevos casos de uso y mantenemos al equipo al día de cada novedad relevante.',
  },
];

// ─── Shared styles ────────────────────────────────────────────────────────────

const headingAdvercase = {
  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
  fontWeight: 400,
  fontStyle: 'normal' as const,
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
};

const monoLabel = (dark: boolean) => ({
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: dark ? '#555555' : '#888888',
});

const bodyText = (dark: boolean) => ({
  fontFamily: 'var(--v5-font-body)',
  fontWeight: 300,
  lineHeight: 1.75,
  color: dark ? 'rgba(245,245,240,0.55)' : '#555555',
});

const container = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 32px',
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClaudeLabPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO (dark)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}>
          <Image
            src="/images/labs/claude-lab.png"
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

            <FadeUp delay={0}>
              <span style={{ display: 'block', marginBottom: '24px', ...monoLabel(true) }}>
                Claude Lab · 01
              </span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1
                style={{
                  ...headingAdvercase,
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  color: '#F5F5F0',
                  maxWidth: '820px',
                  marginBottom: '32px',
                  whiteSpace: 'pre-line',
                }}
              >
                {'Claude no es una suscripción.\nEs tu nuevo equipo.'}
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p
                style={{
                  ...bodyText(true),
                  fontSize: '17px',
                  maxWidth: '560px',
                  marginBottom: '52px',
                }}
              >
                Lo implementamos en tus procesos. Formamos a tu equipo. Y seguimos contigo cuando Claude evoluciona — que evoluciona cada semana.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '0px',
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
                Auditoría gratuita
                <ArrowUpRight size={16} />
              </Link>
            </FadeUp>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — PAIN (light)
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#F8F8F5', padding: '120px 0' }}>
          <div style={container}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span style={{ display: 'block', marginBottom: '20px', ...monoLabel(false) }}>
                  El problema
                </span>
                <h2
                  style={{
                    ...headingAdvercase,
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: '#111111',
                    maxWidth: '720px',
                  }}
                >
                  ¿Por qué el 90% de las empresas con Claude no lo usan bien?
                </h2>
              </div>
            </FadeUp>

            <div className="claude-lab-problems-grid">
              {problems.map((p, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: '36px 32px',
                      height: '100%',
                      transition: 'transform 300ms ease, box-shadow 300ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
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
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '20px',
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                        marginBottom: '12px',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ ...bodyText(false), fontSize: '15px' }}>
                      {p.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — WHAT WE DO (dark)
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#080808', padding: '120px 0' }}>
          <div style={container}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span style={{ display: 'block', marginBottom: '20px', ...monoLabel(true) }}>
                  Lo que incluye
                </span>
                <h2
                  style={{
                    ...headingAdvercase,
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: '#F5F5F0',
                    maxWidth: '640px',
                  }}
                >
                  Lo que incluye Claude Lab
                </h2>
              </div>
            </FadeUp>

            {/* Bento grid: 2 cols left + 1 tall right */}
            <div className="claude-lab-bento-grid">
              {/* Left column — stacked top two */}
              <FadeUp delay={0}>
                <div
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '36px 32px',
                    transition: 'border-color 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <span style={{ display: 'block', marginBottom: '16px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: '#444444' }}>
                    01
                  </span>
                  <h3 style={{ fontFamily: 'var(--v5-font-body)', fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', color: '#F5F5F0', marginBottom: '12px' }}>
                    Auditoría de procesos
                  </h3>
                  <p style={{ ...bodyText(true), fontSize: '15px' }}>
                    Mapeamos dónde Claude puede reemplazar o acelerar trabajo real en tu empresa.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <div
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '36px 32px',
                    transition: 'border-color 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <span style={{ display: 'block', marginBottom: '16px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: '#444444' }}>
                    02
                  </span>
                  <h3 style={{ fontFamily: 'var(--v5-font-body)', fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', color: '#F5F5F0', marginBottom: '12px' }}>
                    Implementación
                  </h3>
                  <p style={{ ...bodyText(true), fontSize: '15px' }}>
                    Construimos los prompts, workflows y automatizaciones específicas para tu negocio.
                  </p>
                </div>
              </FadeUp>

              {/* Right: tall card spanning 2 rows */}
              <FadeUp delay={0.06} className="claude-lab-bento-tall">
                <div
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '36px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <div>
                    <span style={{ display: 'block', marginBottom: '16px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: '#444444' }}>
                      03
                    </span>
                    <h3 style={{ fontFamily: 'var(--v5-font-body)', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.02em', color: '#F5F5F0', marginBottom: '16px', lineHeight: 1.2 }}>
                      Formación por roles
                    </h3>
                    <p style={{ ...bodyText(true), fontSize: '15px' }}>
                      No formamos a "la empresa" — formamos a cada persona según su trabajo real. El de marketing aprende a usar Claude para copies y campañas. El de operaciones, para procesos y reportes. El de ventas, para propuestas y seguimientos.
                    </p>
                  </div>
                  <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555555' }}>
                      Formación continua — no un taller puntual
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Bottom-left: spans 2 cols */}
              <FadeUp delay={0.12} className="claude-lab-bento-wide">
                <div
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '36px 32px',
                    height: '100%',
                    transition: 'border-color 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <span style={{ display: 'block', marginBottom: '16px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: '#444444' }}>
                    04
                  </span>
                  <h3 style={{ fontFamily: 'var(--v5-font-body)', fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', color: '#F5F5F0', marginBottom: '12px' }}>
                    Actualizaciones continuas
                  </h3>
                  <p style={{ ...bodyText(true), fontSize: '15px', maxWidth: '480px' }}>
                    Cuando Claude saca una nueva capacidad relevante para ti, te la llevamos. Sin que tengas que enterarte tú.
                  </p>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — STATS STRIP (dark continuation)
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
          <div style={container}>
            <div className="claude-lab-stats-grid">
              {stats.map((stat, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div style={{ textAlign: 'center', padding: '0 24px' }}>
                    <div
                      style={{
                        ...headingAdvercase,
                        fontSize: 'clamp(40px, 5vw, 64px)',
                        color: '#F5F5F0',
                        marginBottom: '12px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <p style={{ ...bodyText(true), fontSize: '14px', maxWidth: '220px', margin: '0 auto' }}>
                      {stat.label}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — PROCESS (light)
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#F8F8F5', padding: '120px 0' }}>
          <div style={container}>

            <FadeUp>
              <div style={{ marginBottom: '64px' }}>
                <span style={{ display: 'block', marginBottom: '20px', ...monoLabel(false) }}>
                  El proceso
                </span>
                <h2
                  style={{
                    ...headingAdvercase,
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: '#111111',
                    maxWidth: '560px',
                  }}
                >
                  Cómo funciona
                </h2>
              </div>
            </FadeUp>

            <div className="claude-lab-steps-grid">
              {steps.map((step, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: '40px 36px',
                      height: '100%',
                      transition: 'transform 300ms ease, box-shadow 300ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        marginBottom: '24px',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#CCCCCC',
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '22px',
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                        marginBottom: '16px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ ...bodyText(false), fontSize: '15px' }}>
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6 — CTA (dark)
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#080808', padding: '120px 0' }}>
          <div style={container}>
            <div style={{ maxWidth: '720px' }}>

              <FadeUp>
                <span style={{ display: 'block', marginBottom: '24px', ...monoLabel(true) }}>
                  Empieza hoy
                </span>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h2
                  style={{
                    ...headingAdvercase,
                    fontSize: 'clamp(32px, 4.5vw, 64px)',
                    color: '#F5F5F0',
                    marginBottom: '28px',
                  }}
                >
                  ¿Listo para que Claude trabaje de verdad en tu empresa?
                </h2>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p
                  style={{
                    ...bodyText(true),
                    fontSize: '17px',
                    marginBottom: '52px',
                  }}
                >
                  Sesión de diagnóstico gratuita. Sin compromiso. Con un plan concreto al salir.
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
                    borderRadius: '0px',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Auditoría gratuita
                  <ArrowUpRight size={16} />
                </Link>
              </FadeUp>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        /* ── Bento grid ── */
        .claude-lab-bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
        }
        .claude-lab-bento-wide {
          grid-column: 1 / 3;
        }
        .claude-lab-bento-tall {
          grid-column: 3 / 4;
          grid-row: 1 / 3;
        }

        /* ── Problems grid ── */
        .claude-lab-problems-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── Steps grid ── */
        .claude-lab-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── Stats grid ── */
        .claude-lab-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .claude-lab-stats-grid > div + div {
          border-left: 1px solid rgba(255,255,255,0.08);
        }

        /* ── Tablet (769px – 1024px) ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .claude-lab-bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: unset !important;
          }
          .claude-lab-bento-wide {
            grid-column: 1 / 3 !important;
          }
          .claude-lab-bento-tall {
            grid-column: 1 / 3 !important;
            grid-row: unset !important;
          }
          .claude-lab-problems-grid,
          .claude-lab-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ── Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          /* Section padding */
          .v5-page section {
            padding: 80px 0 !important;
          }

          /* Container padding */
          .v5-page .v5-container,
          .v5-page [style*="maxWidth: '1280px'"],
          .v5-page [style*="max-width: 1280px"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          /* Hero: 120px top, 80px bottom */
          .v5-page section.relative {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
          /* Ensure hero H1 min 36px */
          .v5-page section.relative h1 {
            font-size: clamp(36px, 9vw, 80px) !important;
          }

          /* Bento grid → 1 col */
          .claude-lab-bento-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: unset !important;
          }
          .claude-lab-bento-wide {
            grid-column: 1 / 2 !important;
          }
          .claude-lab-bento-tall {
            grid-column: 1 / 2 !important;
            grid-row: unset !important;
          }

          /* Problems grid → 1 col */
          .claude-lab-problems-grid {
            grid-template-columns: 1fr !important;
          }

          /* Steps grid → 1 col */
          .claude-lab-steps-grid {
            grid-template-columns: 1fr !important;
          }

          /* Stats grid → 1 col with top dividers */
          .claude-lab-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .claude-lab-stats-grid > div + div {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding-top: 40px !important;
            margin-top: 0 !important;
          }
          .claude-lab-stats-grid > div {
            text-align: left !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          /* No horizontal overflow */
          .v5-page {
            overflow-x: hidden !important;
          }

          /* Inline maxWidth constraints — relax on mobile */
          .v5-page h1[style],
          .v5-page p[style] {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
