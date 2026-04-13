'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare, Code2, Bot, Sparkles,
  Megaphone, GraduationCap, Users, ArrowUpRight, Wrench,
} from 'lucide-react';

const labs = [
  {
    index: '01',
    service: 'Claude',
    name: 'Claude Lab',
    pain: '¿Tu equipo tiene acceso a Claude pero nadie sabe realmente cómo usarlo en su trabajo del día a día?',
    desc: 'Implementamos Claude en tus procesos y formamos a tu equipo.',
    icon: MessageSquare,
    href: '/claude-lab',
  },
  {
    index: '02',
    service: 'Software',
    name: 'Software Lab',
    pain: '¿Necesitas una herramienta a medida pero cotizar software cuesta una fortuna?',
    desc: 'Construimos software a medida con IA, sin meses de espera.',
    icon: Code2,
    href: '/software-lab',
  },
  {
    index: '03',
    service: 'Agents',
    name: 'Agents Lab',
    pain: '¿Tienes procesos que dependen de una persona y se rompen en cuanto esa persona no está?',
    desc: 'Creamos agentes que ejecutan tareas completas de forma autónoma.',
    icon: Bot,
    href: '/agents-lab',
    badge: 'Más demandado',
  },
  {
    index: '04',
    service: 'Gen AI',
    name: 'Gen AI Lab',
    pain: '¿Produces menos contenido visual del que necesitas porque es caro y lento?',
    desc: 'Producimos imágenes, vídeos y creatividades con IA generativa.',
    icon: Sparkles,
    href: '/gen-ai-lab',
  },
  {
    index: '05',
    service: 'Marketing',
    name: 'Marketing Lab',
    pain: '¿Inviertes en marketing sin saber qué funciona, qué falla, ni por qué tu competencia crece más rápido?',
    desc: 'Construimos sistemas de captación y campañas con IA como motor.',
    icon: Megaphone,
    href: '/marketing-lab',
  },
  {
    index: '06',
    service: 'Learn',
    name: 'Learn Lab',
    pain: '¿Tu equipo sabe que la IA existe pero no sabe cómo aplicarla en su trabajo real?',
    desc: 'Formación práctica en IA para que tu equipo la use de verdad.',
    icon: GraduationCap,
    href: '/learn-lab',
  },
  {
    index: '07',
    service: 'Open',
    name: 'Open Lab',
    pain: '¿Necesitas algo a medida — un chatbot, una web con lógica, un dashboard, un documento con IA — pero sin meses de desarrollo ni presupuestos de agencia?',
    desc: 'Chatbots, webs con lógica y dashboards. Sin agencias ni esperas.',
    icon: Wrench,
    href: '/open-lab',
    wide: true,
  },
];

const featuredLab = {
  name: 'AI Team Lab',
  pain: '¿No sabes por dónde empezar mientras tu competencia ya lleva ventaja?',
  description: 'No contratas herramientas. Contratas un equipo dedicado que implementa, evoluciona y mejora continuamente tu operativa con IA — como si fuera un departamento propio.',
  icon: Users,
  href: '/systems-lab/sesion-de-claridad',
  stat: 'Desde 1.200€/mes · Sin permanencia',
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LabsBannerSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="labs-section-inner"
      style={{
        background: '#F8F8F5',
        padding: '120px 0 120px',
        position: 'relative',
      }}
    >
      <div className="labs-section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="labs-header"
          style={{ marginBottom: '72px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#888',
            }}>Laboratorios</span>
            <span style={{ width: '32px', height: '1px', background: '#ccc' }} />
            <span style={{
              fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#aaa',
            }}>8 capacidades</span>
          </div>

          <h2 style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#111',
            maxWidth: '640px',
          }}>
            ¿Qué es<br />lo que necesitas?
          </h2>
        </motion.div>

        {/* ── FEATURED LAB ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{ marginBottom: '12px' }}
        >
          <Link href={featuredLab.href} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              background: '#111',
              borderRadius: '16px',
              padding: '48px 52px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '40px',
              alignItems: 'center',
              transition: 'transform 250ms ease',
            }}
              className="featured-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Users size={18} color="#F5F5F0" />
                  </div>
                  <span style={{
                    fontFamily: 'var(--v5-font-mono)', fontSize: '9px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}>08 · Flagship</span>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400,
                    color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.05,
                    marginBottom: '4px',
                  }}>
                    AI Team
                  </h3>
                  <span style={{
                    fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#6366F1', display: 'block',
                  }}>Lab</span>
                </div>

                <p style={{
                  fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300,
                  color: 'rgba(245,245,240,0.45)', marginBottom: '8px',
                  lineHeight: 1.6, maxWidth: '520px',
                  fontStyle: 'italic',
                }}>
                  {featuredLab.pain}
                </p>

                <p style={{
                  fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                  color: 'rgba(245,245,240,0.55)', lineHeight: 1.7, maxWidth: '520px',
                }}>
                  {featuredLab.description}
                </p>
              </div>

              <div className="featured-card-cta" style={{ flexShrink: 0, textAlign: 'right' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#F5F5F0', fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px', fontWeight: 400, marginBottom: '8px',
                }}>
                  Auditoría gratuita
                  <ArrowUpRight size={15} />
                </div>
                <p style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '9px',
                  color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em',
                }}>
                  {featuredLab.stat}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── LABS GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}
          className="labs-grid"
        >
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            const isWide = 'wide' in lab && lab.wide;
            return (
              <motion.div
                key={lab.index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.06 }}
                style={isWide ? { gridColumn: '1 / -1' } : {}}
              >
                <Link href={lab.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: isWide ? '28px 36px' : '28px 28px 24px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: isWide ? 'row' : 'column',
                      alignItems: isWide ? 'center' : undefined,
                      gap: isWide ? '40px' : undefined,
                      cursor: 'pointer',
                      transition: 'all 220ms ease',
                    }}
                    className="lab-card"
                  >
                    {/* Header */}
                    <div
                      className={isWide ? 'lab-card-header-wide' : undefined}
                      style={{
                        display: 'flex',
                        justifyContent: isWide ? undefined : 'space-between',
                        alignItems: isWide ? 'center' : 'flex-start',
                        gap: isWide ? '16px' : undefined,
                        marginBottom: isWide ? 0 : '20px',
                        flexShrink: isWide ? 0 : undefined,
                      }}
                    >
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '8px',
                        background: '#f0f0ec',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={17} color="#555" />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {lab.badge && (
                          <span style={{
                            fontFamily: 'var(--v5-font-mono)', fontSize: '8px',
                            letterSpacing: '0.12em', textTransform: 'uppercase',
                            color: '#888', border: '1px solid #ddd',
                            padding: '3px 7px', borderRadius: '4px',
                          }}>{lab.badge}</span>
                        )}
                        <span style={{
                          fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                          color: '#bbb',
                        }}>{lab.index}</span>
                      </div>
                    </div>

                    {/* Lab name — service large + "Lab" as mono label */}
                    <div
                      className={isWide ? 'lab-card-name-wide' : undefined}
                      style={{ marginBottom: isWide ? 0 : '10px', flexShrink: isWide ? 0 : undefined, minWidth: isWide ? '140px' : undefined }}
                    >
                      <h3 style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontSize: isWide ? '22px' : 'clamp(22px, 2.5vw, 28px)', fontWeight: 300,
                        color: '#111', letterSpacing: '-0.02em',
                        lineHeight: 1.1, marginBottom: '3px',
                      }}>
                        {'service' in lab ? lab.service : lab.name}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: '#6366F1', display: 'block',
                      }}>Lab</span>
                    </div>

                    {/* Pain */}
                    <p
                      className="lab-card-pain"
                      style={{
                        fontFamily: 'var(--v5-font-body)', fontSize: '12px', fontWeight: 300,
                        color: '#999', lineHeight: 1.6,
                        flex: isWide ? undefined : 1,
                      }}
                    >
                      {lab.pain}
                    </p>

                    {/* Desc */}
                    {'desc' in lab && !isWide && (
                      <p style={{
                        fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 600,
                        color: '#111', lineHeight: 1.45,
                        marginTop: '16px',
                        paddingTop: '14px',
                        borderTop: '1px solid #E8E8E5',
                      }}>
                        {lab.desc}
                      </p>
                    )}

                    {/* Arrow */}
                    <div style={{ marginTop: isWide ? 0 : '20px', display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
                      <ArrowUpRight size={15} color="#bbb" className="lab-arrow" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Grid: single column, no card spans */
          .labs-grid { grid-template-columns: 1fr !important; }
          .labs-grid > * { grid-column: 1 !important; }

          /* Section spacing */
          .labs-section-inner { padding: 80px 20px !important; }
          .labs-section-container { padding: 0 !important; }
          .labs-header { margin-bottom: 40px !important; }

          /* All lab cards: force vertical layout, auto height */
          .lab-card {
            padding: 20px !important;
            height: auto !important;
            min-height: unset !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0 !important;
          }

          /* Pain: remove flex:1 so card heights are content-driven */
          .lab-card-pain { flex: none !important; }

          /* Wide card header: reset to normal vertical card header */
          .lab-card-header-wide {
            margin-bottom: 20px !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            flex-shrink: unset !important;
            gap: 0 !important;
          }

          /* Wide card name: remove min-width forcing */
          .lab-card-name-wide {
            margin-bottom: 10px !important;
            flex-shrink: unset !important;
            min-width: unset !important;
          }

          /* Featured card: 1 column, reduced padding */
          .featured-card {
            grid-template-columns: 1fr !important;
            padding: 28px 24px !important;
            gap: 20px !important;
          }

          /* Featured CTA column: left-align */
          .featured-card-cta {
            text-align: left !important;
            flex-shrink: unset !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .labs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        .lab-card:hover {
          border-color: #ccc !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }
        .lab-card:hover .lab-arrow { color: #333 !important; }
        .featured-card:hover { transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
