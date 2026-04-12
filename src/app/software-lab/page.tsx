'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const advercase = "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)";

const problemCards = [
  {
    number: '01',
    title: 'Pagas por lo que no usas',
    desc: 'Tu CRM tiene 200 funciones. Usas 12. Las otras 188 las mantienen los desarrolladores y tú las pagas cada mes.',
  },
  {
    number: '02',
    title: 'Te adaptas tú al software',
    desc: 'Cambias cómo trabajas para encajar en el software. No debería ser así.',
  },
  {
    number: '03',
    title: 'La agencia que tarda 8 meses',
    desc: 'Te piden un análisis, un presupuesto, sprints, revisiones... y cuando termina, tu negocio ya ha cambiado.',
  },
];

const bentoItems = [
  {
    label: 'ERP A MEDIDA',
    title: 'ERP para servicio técnico',
    desc: 'Control de reparaciones, historial de clientes, gestión de piezas, facturación automática. El sistema completo para una empresa de servicio técnico.',
    featured: true,
  },
  {
    label: 'CRM',
    title: 'CRM a medida',
    desc: 'No el CRM genérico — el que refleja exactamente tu proceso de ventas, tus etapas, tus alertas.',
    featured: false,
  },
  {
    label: 'PORTAL',
    title: 'Portal de clientes',
    desc: 'Un acceso privado para que tus clientes vean el estado de sus pedidos, facturas o proyectos. Sin emails, sin llamadas.',
    featured: false,
  },
  {
    label: 'GESTIÓN INTERNA',
    title: 'Sistema de gestión interna',
    desc: 'Cualquier proceso repetitivo que hoy lleváis en Excel o en la cabeza — digitalizamos y automatizamos.',
    featured: false,
  },
  {
    label: 'APP DE CAMPO',
    title: 'App de campo',
    desc: 'Para equipos que trabajan fuera de la oficina — registros, partes de trabajo, fotos, firmas digitales desde el móvil.',
    featured: false,
  },
  {
    label: 'SAAS',
    title: 'Plataforma SaaS',
    desc: 'Si tienes una idea de negocio digital, la construimos contigo desde cero hasta lanzamiento.',
    featured: false,
  },
];

const stats = [
  { value: '3–6 semanas', label: 'De idea a software en producción' },
  { value: '–70%', label: 'Menos coste vs agencia tradicional' },
  { value: '100% tuyo', label: 'Sin licencias, sin dependencias' },
];

const steps = [
  {
    number: '01',
    title: 'Sesión de definición',
    desc: 'Describes el problema. Nosotros lo traducimos a funcionalidades concretas. Salimos con un alcance y precio fijo.',
  },
  {
    number: '02',
    title: 'Prototipo funcional',
    desc: 'En 1–2 semanas tienes una versión real que ya sirve. No mockups — software real.',
  },
  {
    number: '03',
    title: 'Iteración rápida',
    desc: 'Pruebas, nos das feedback, ajustamos. Cada semana hay progreso visible.',
  },
  {
    number: '04',
    title: 'Entrega y formación',
    desc: 'El código es tuyo. Te enseñamos a gestionarlo. Puedes seguir con nosotros o volar solo.',
  },
];

function Section({
  children,
  bg,
  id,
  paddingOverride,
}: {
  children: React.ReactNode;
  bg: string;
  id?: string;
  paddingOverride?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section ref={ref} id={id} style={{ background: bg, padding: paddingOverride ?? '120px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function SoftwareLab() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#080808' }}
        >
          <Image
            src="/images/heroes/software_hero_1775968118776.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.5) 40%, rgba(8,8,8,0.1) 100%)',
            zIndex: 1,
          }} />
          <div className="v5-container w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease }}
            >
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#666',
                }}>
                  Software Lab
                </span>
                <span style={{ width: '32px', height: '1px', background: '#333' }} />
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#555',
                }}>
                  02
                </span>
              </div>

              <h1 style={{
                fontFamily: advercase,
                fontSize: 'clamp(48px, 7vw, 88px)',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                color: '#F5F5F0',
                marginBottom: '32px',
                maxWidth: '1100px',
              }}>
                Tu software.<br />
                Exactamente como lo necesitas.
              </h1>

              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(245,245,240,0.5)',
                maxWidth: '520px',
                marginBottom: '48px',
              }}>
                No el software de otra empresa adaptado a ti. El tuyo. Construido para tus procesos,
                tu equipo, tu negocio. En semanas, no en años.
              </p>

              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: '#F5F5F0',
                  color: '#111',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '0px',
                }}
              >
                Auditoría gratuita <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#888',
              }}>
                El problema
              </span>
              <span style={{ width: '32px', height: '1px', background: '#ccc' }} />
            </div>
            <h2 style={{
              fontFamily: advercase,
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111',
              maxWidth: '600px',
            }}>
              ¿Por qué el software que existe nunca encaja del todo?
            </h2>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}
            className="sw-grid-3"
          >
            {problemCards.map((card) => (
              <div
                key={card.number}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e5',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="sw-problem-card"
              >
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  color: '#bbb',
                  display: 'block',
                  marginBottom: '20px',
                }}>
                  {card.number}
                </span>
                <h3 style={{
                  fontFamily: advercase,
                  fontSize: '22px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  color: '#111',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#888',
                  lineHeight: 1.65,
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── WHAT WE BUILD (bento grid) ── */}
        <Section bg="#080808" id="que-construimos">
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#555',
              }}>
                Qué tipo de software
              </span>
              <span style={{ width: '32px', height: '1px', background: '#333' }} />
            </div>
            <h2 style={{
              fontFamily: advercase,
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#F5F5F0',
              maxWidth: '580px',
              marginBottom: '16px',
            }}>
              ¿Qué tipo de software?
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '16px',
              fontWeight: 300,
              color: 'rgba(245,245,240,0.4)',
              maxWidth: '400px',
            }}>
              Si lo puedes describir, lo podemos construir.
            </p>
          </div>

          {/* Bento grid: featured left (2 rows) + 2 right column top, then 3 bottom */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '8px',
            }}
            className="sw-bento-outer"
          >
            {/* Featured card — spans 2 rows on the left */}
            <div
              style={{
                gridRow: 'span 2',
                background: '#F5F5F0',
                borderRadius: '16px',
                padding: '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '360px',
              }}
              className="sw-bento-featured"
            >
              <div>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#999',
                  display: 'block',
                  marginBottom: '24px',
                }}>
                  {bentoItems[0].label}
                </span>
                <h3 style={{
                  fontFamily: advercase,
                  fontSize: 'clamp(24px, 2.8vw, 36px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  color: '#111',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {bentoItems[0].title}
                </h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#666',
                  lineHeight: 1.7,
                  maxWidth: '420px',
                }}>
                  {bentoItems[0].desc}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                <ArrowUpRight size={18} color="#aaa" />
              </div>
            </div>

            {/* Right column top — 2 cards side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }} className="sw-bento-right-top">
              {bentoItems.slice(1, 3).map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: '#111',
                    border: '1px solid #1e1e1e',
                    borderRadius: '12px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#555',
                      display: 'block',
                      marginBottom: '16px',
                    }}>
                      {item.label}
                    </span>
                    <h3 style={{
                      fontFamily: advercase,
                      fontSize: '18px',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      color: '#F5F5F0',
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(245,245,240,0.4)',
                      lineHeight: 1.6,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column bottom — 3 cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }} className="sw-bento-right-bottom">
              {bentoItems.slice(3).map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: '#111',
                    border: '1px solid #1e1e1e',
                    borderRadius: '12px',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555',
                    display: 'block',
                    marginBottom: '14px',
                  }}>
                    {item.label}
                  </span>
                  <h3 style={{
                    fontFamily: advercase,
                    fontSize: '17px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#F5F5F0',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(245,245,240,0.4)',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── STATS STRIP ── */}
        <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
            className="sw-stats-grid"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '48px 32px',
                  borderRight: i < 2 ? '1px solid #1a1a1a' : 'none',
                }}
                className="sw-stat-item"
              >
                <div style={{
                  fontFamily: advercase,
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                  marginBottom: '8px',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(245,245,240,0.35)',
                  lineHeight: 1.5,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROCESS ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#888',
              }}>
                El proceso
              </span>
              <span style={{ width: '32px', height: '1px', background: '#ccc' }} />
            </div>
            <h2 style={{
              fontFamily: advercase,
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#111',
              maxWidth: '500px',
            }}>
              Cómo lo construimos
            </h2>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}
            className="sw-steps-grid"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e5',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="sw-step-card"
              >
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  color: '#bbb',
                  display: 'block',
                  marginBottom: '20px',
                }}>
                  {step.number}
                </span>
                <h3 style={{
                  fontFamily: advercase,
                  fontSize: '20px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  color: '#111',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#888',
                  lineHeight: 1.65,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CTA ── */}
        <Section bg="#080808">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '700px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#555',
              }}>
                Siguiente paso
              </span>
              <span style={{ width: '32px', height: '1px', background: '#333' }} />
            </div>
            <h2 style={{
              fontFamily: advercase,
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#F5F5F0',
              marginBottom: '24px',
            }}>
              ¿Qué necesitas construir?
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '17px',
              fontWeight: 300,
              color: 'rgba(245,245,240,0.45)',
              lineHeight: 1.75,
              marginBottom: '44px',
              maxWidth: '520px',
            }}>
              Cuéntanoslo en 45 minutos. Te decimos si podemos construirlo,
              cuánto cuesta y cuándo lo tendrías.
            </p>
            <Link
              href="/systems-lab/sesion-de-claridad"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: '#F5F5F0',
                color: '#111',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              Auditoría gratuita <ArrowUpRight size={16} />
            </Link>
          </div>
        </Section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .sw-grid-3 {
            grid-template-columns: 1fr !important;
          }
          .sw-steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .sw-bento-outer {
            grid-template-columns: 1fr !important;
          }
          .sw-bento-featured {
            grid-row: span 1 !important;
            min-height: 280px !important;
          }
          .sw-bento-right-top {
            grid-template-columns: 1fr !important;
          }
          .sw-bento-right-bottom {
            grid-template-columns: 1fr 1fr !important;
          }
          .sw-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .sw-stat-item {
            border-right: none !important;
            border-bottom: 1px solid #1a1a1a;
            padding: 36px 24px !important;
          }
        }
        @media (max-width: 480px) {
          .sw-steps-grid {
            grid-template-columns: 1fr !important;
          }
          .sw-bento-right-bottom {
            grid-template-columns: 1fr !important;
          }
        }
        .sw-problem-card:hover,
        .sw-step-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
        }
      `}</style>
    </div>
  );
}
