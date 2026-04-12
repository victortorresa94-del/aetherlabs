'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemCards = [
  {
    number: '01',
    title: 'El Excel que nadie entiende',
    desc: 'Tu equipo trabaja con hojas de cálculo llenas de fórmulas que solo tú sabes usar. Cuando fallas tú, falla el sistema.',
  },
  {
    number: '02',
    title: 'El software que hace el 70%',
    desc: 'Pagas una licencia cara por un software que tiene cien funciones. Tú usas cinco. Y las cinco que necesitas de verdad, no las tiene.',
  },
  {
    number: '03',
    title: 'El desarrollo que nunca termina',
    desc: 'Contratas una agencia o desarrollador. Seis meses, varias versiones y mucho dinero después, el resultado no es lo que querías.',
  },
];

const serviceCards = [
  {
    label: 'Internal Tools',
    title: 'La app que tu equipo necesita',
    img: '/images/apps/aura-tasks.jpg',
  },
  {
    label: 'AI Chatbot',
    title: 'IA integrada en tu plataforma',
    img: '/images/personal-trainer/chatbot-mockup.png',
  },
  {
    label: 'Web Funcional',
    title: 'Una web que hace cosas, no solo informa',
    img: '/images/personal-trainer/landing-mockup.png',
  },
  {
    label: 'Dashboard',
    title: 'Tus datos en tiempo real',
    img: '/images/personal-trainer/payments-mockup.png',
  },
  {
    label: 'Document AI',
    title: 'IA que lee y procesa tus documentos',
    img: '/images/agents/legal-contract.png',
  },
  {
    label: 'Automation UI',
    title: 'Automatización que cualquier persona puede usar',
    img: '/images/agents/calendar-scheduler.png',
  },
];

const steps = [
  {
    number: '01',
    title: 'Describimos juntos la herramienta',
    desc: '45 minutos donde defines exactamente qué necesita hacer tu herramienta, quién la va a usar y qué problema resuelve. Salimos con un alcance cerrado y un precio fijo.',
  },
  {
    number: '02',
    title: 'Construimos en sprints cortos',
    desc: 'Primero una versión funcional básica que ya sirve. Luego iteramos hasta que está exactamente como necesitas. Ves el progreso cada día, no al final de meses.',
  },
  {
    number: '03',
    title: 'Te entregamos con formación',
    desc: 'La herramienta es tuya. Te entregamos el código, el acceso completo y una sesión de formación para que tú o tu equipo podáis gestionarla sin depender de nadie.',
  },
];

const stats = [
  { number: 'Días', label: 'No meses. Una herramienta funcional en 3-10 días.' },
  { number: '-80%', label: 'Menos coste vs desarrollo tradicional.' },
  { number: '100%', label: 'Tuyo. Código, acceso y control total.' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Section({ children, bg }: { children: React.ReactNode; bg: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section ref={ref} style={{ background: bg, padding: '120px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function OpenLab() {
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
          style={{ background: '#080808', paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/quantum-sculpture.jpeg"
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
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#666',
                }}>Open Lab</span>
                <span style={{ width: '32px', height: '1px', background: '#333' }} />
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#555',
                }}>07</span>
              </div>

              <h1 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(48px, 7vw, 88px)',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                color: '#F5F5F0',
                marginBottom: '32px',
                maxWidth: '800px',
              }}>
                Tu herramienta.<br />
                Construida en días.
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
                Antes hacerlo requería un equipo de desarrollo, 6 meses y decenas de miles de euros. Ahora lo construimos en días. Para ti. Exactamente como lo necesitas.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href="#que-construimos"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '14px 28px',
                    background: '#F5F5F0', color: '#111',
                    fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400,
                    textDecoration: 'none',
                  }}
                >
                  Ver qué podemos construir <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '14px 28px',
                    background: 'transparent', color: 'rgba(245,245,240,0.6)',
                    fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  Reservar sesión de claridad
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
          <div style={{
            maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '40px 32px',
                borderRight: i < 2 ? '1px solid #1a1a1a' : 'none',
              }}>
                <div style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400,
                  color: '#F5F5F0', marginBottom: '8px', letterSpacing: '-0.02em',
                }}>{s.number}</div>
                <div style={{
                  fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300,
                  color: 'rgba(245,245,240,0.4)', lineHeight: 1.5,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROBLEMS ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#888',
              }}>El problema</span>
              <span style={{ width: '32px', height: '1px', background: '#ccc' }} />
            </div>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400,
              letterSpacing: '-0.02em', lineHeight: 1.05, color: '#111', maxWidth: '580px',
            }}>
              ¿Por qué las empresas se quedan atascadas?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="open-grid-3">
            {problemCards.map((card) => (
              <div key={card.number} style={{
                background: '#fff', border: '1px solid #e8e8e5',
                borderRadius: '12px', padding: '32px 28px',
              }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                  color: '#bbb', display: 'block', marginBottom: '20px',
                }}>{card.number}</span>
                <h3 style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: '22px', fontWeight: 400,
                  color: '#111', marginBottom: '12px', letterSpacing: '-0.01em',
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                  color: '#888', lineHeight: 1.65,
                }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SERVICES ── */}
        <section id="que-construimos" style={{ background: '#080808', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#555',
                }}>Qué construimos</span>
                <span style={{ width: '32px', height: '1px', background: '#333' }} />
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#444',
                }}>6 tipos</span>
              </div>
              <h2 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400,
                letterSpacing: '-0.02em', lineHeight: 1.05, color: '#F5F5F0', maxWidth: '560px',
              }}>
                Todo lo que necesitas,<br />construido para ti.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }} className="open-grid-3">
              {serviceCards.map((card) => (
                <div key={card.label} style={{
                  background: '#111', border: '1px solid #1e1e1e',
                  borderRadius: '12px', overflow: 'hidden',
                  cursor: 'pointer', transition: 'border-color 220ms ease, transform 220ms ease',
                }}
                  className="svc-card-dark"
                >
                  <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      style={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px 24px' }}>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)', fontSize: '9px', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: '#555', display: 'block', marginBottom: '8px',
                    }}>{card.label}</span>
                    <h3 style={{
                      fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                      fontSize: '18px', fontWeight: 400,
                      color: '#F5F5F0', letterSpacing: '-0.01em', lineHeight: 1.2,
                    }}>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#888',
              }}>Cómo funciona</span>
              <span style={{ width: '32px', height: '1px', background: '#ccc' }} />
            </div>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400,
              letterSpacing: '-0.02em', lineHeight: 1.05, color: '#111', maxWidth: '560px',
            }}>
              De idea a herramienta<br />en tres pasos.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="open-grid-3">
            {steps.map((step) => (
              <div key={step.number} style={{
                background: '#fff', border: '1px solid #e8e8e5',
                borderRadius: '12px', padding: '32px 28px',
              }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                  color: '#bbb', display: 'block', marginBottom: '20px',
                }}>{step.number}</span>
                <h3 style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: '22px', fontWeight: 400,
                  color: '#111', marginBottom: '12px', letterSpacing: '-0.01em',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                  color: '#888', lineHeight: 1.65,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CTA ── */}
        <section style={{ background: '#080808', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
              <span style={{ width: '32px', height: '1px', background: '#333' }} />
              <span style={{
                fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#555',
              }}>El siguiente paso</span>
              <span style={{ width: '32px', height: '1px', background: '#333' }} />
            </div>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 400,
              letterSpacing: '-0.02em', lineHeight: 1.05,
              color: '#F5F5F0', marginBottom: '20px',
            }}>
              ¿Qué necesitas construir?
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300,
              color: 'rgba(245,245,240,0.45)', maxWidth: '440px',
              margin: '0 auto 40px', lineHeight: 1.7,
            }}>
              Cuéntanos el problema en 45 minutos. Si podemos construirlo, te damos alcance y precio fijo.
            </p>
            <Link
              href="/systems-lab/sesion-de-claridad"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px',
                background: '#F5F5F0', color: '#111',
                fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              Reservar sesión gratuita <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .open-grid-3 { grid-template-columns: 1fr !important; }
          .open-feat-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .open-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .svc-card-dark:hover { border-color: #2a2a2a !important; transform: translateY(-3px); }
      `}</style>
    </div>
  );
}
