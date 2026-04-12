'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare, Code2, Bot, Sparkles,
  Megaphone, GraduationCap, Users, ArrowUpRight,
} from 'lucide-react';

const labs = [
  {
    index: '01',
    name: 'Claude Lab',
    pain: '¿Tu equipo sigue trabajando como en 2020 mientras la herramienta tecnológica más potente de la historia ya está disponible para todos?',
    icon: MessageSquare,
    href: '/systems-lab',
  },
  {
    index: '02',
    name: 'Software Lab',
    pain: '¿Necesitas una herramienta a medida pero cotizar software cuesta una fortuna?',
    icon: Code2,
    href: '/systems-lab',
  },
  {
    index: '03',
    name: 'Agents Lab',
    pain: '¿Tienes procesos que dependen de una persona y se rompen en cuanto esa persona no está?',
    icon: Bot,
    href: '/open-lab',
    badge: 'Más demandado',
  },
  {
    index: '04',
    name: 'Gen AI Lab',
    pain: '¿Produces menos contenido visual del que necesitas porque es caro y lento?',
    icon: Sparkles,
    href: '/creative-lab',
  },
  {
    index: '05',
    name: 'Marketing Lab',
    pain: '¿Inviertes en marketing y no sabes qué funciona, qué falla, ni por qué tu competencia crece más rápido?',
    icon: Megaphone,
    href: '/creative-lab',
  },
  {
    index: '06',
    name: 'Learn Lab',
    pain: '¿Tu equipo sabe que la IA existe pero no sabe cómo aplicarla en su trabajo real?',
    icon: GraduationCap,
    href: '/school-lab',
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
      style={{
        background: '#F8F8F5',
        padding: '120px 0 120px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
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
            }}>7 capacidades</span>
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
            ¿Cuál es<br />tu problema?
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
                  }}>07 · Flagship</span>
                </div>

                <h3 style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400,
                  color: '#F5F5F0', marginBottom: '12px', letterSpacing: '-0.02em',
                }}>
                  AI Team Lab
                </h3>

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

              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#F5F5F0', fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px', fontWeight: 400, marginBottom: '8px',
                }}>
                  Reservar sesión gratis
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
            return (
              <motion.div
                key={lab.index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.06 }}
              >
                <Link href={lab.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e8e8e5',
                      borderRadius: '12px',
                      padding: '28px 28px 24px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 220ms ease',
                    }}
                    className="lab-card"
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '8px',
                        background: '#f0f0ec',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
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

                    {/* Lab name */}
                    <h3 style={{
                      fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                      fontSize: 'clamp(20px, 2vw, 24px)', fontWeight: 400,
                      color: '#111', marginBottom: '10px', letterSpacing: '-0.01em',
                      lineHeight: 1.15,
                    }}>
                      {lab.name}
                    </h3>

                    {/* Pain */}
                    <p style={{
                      fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300,
                      color: '#888', lineHeight: 1.65,
                      flex: 1,
                    }}>
                      {lab.pain}
                    </p>

                    {/* Arrow */}
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
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
          .labs-grid { grid-template-columns: 1fr !important; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .labs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .lab-card:hover {
          border-color: #ccc !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }
        .lab-card:hover .lab-arrow {
          color: #333 !important;
        }
        .featured-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
