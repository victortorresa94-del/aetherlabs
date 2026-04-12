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

function Section({
  children,
  bg,
  id,
  paddingY = '120px',
}: {
  children: React.ReactNode;
  bg: string;
  id?: string;
  paddingY?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section id={id} ref={ref} style={{ background: bg, padding: `${paddingY} 0` }}>
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

const useCases = [
  {
    label: 'PROSPECCIÓN',
    title: 'Agente de prospección',
    desc: 'Recibe una lista de empresas objetivo. Investiga cada una online. Redacta un email personalizado para cada contacto. Lo envía desde tu cuenta. Registra la respuesta en tu CRM. Solo.',
    featured: true,
  },
  {
    label: 'ATENCIÓN',
    title: 'Agente de atención',
    desc: 'Lee el email de soporte. Busca la respuesta en tu documentación. Redacta y envía la respuesta. Escala lo que no puede resolver. Sin que nadie lo supervise.',
    featured: false,
  },
  {
    label: 'CONTENIDO',
    title: 'Agente de contenido',
    desc: 'Monitoriza noticias del sector. Selecciona las relevantes. Genera un resumen editorial. Lo publica en tu LinkedIn. A las 8am, todos los días.',
    featured: false,
  },
  {
    label: 'ANÁLISIS',
    title: 'Agente de análisis',
    desc: 'Descarga el informe semanal de ventas. Lo analiza. Detecta anomalías. Redacta un resumen ejecutivo y lo envía a dirección.',
    featured: false,
  },
  {
    label: 'ONBOARDING',
    title: 'Agente de onboarding',
    desc: 'Cuando entra un cliente nuevo, dispara el proceso completo: crea cuenta, envía bienvenida, programa reunión, notifica al equipo, crea el proyecto en Notion.',
    featured: false,
  },
  {
    label: 'FACTURACIÓN',
    title: 'Agente de facturación',
    desc: 'Detecta que se completó un proyecto. Genera la factura. La envía al cliente. Registra el pago pendiente. Te avisa si no pagan en el plazo acordado.',
    featured: false,
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Uso de herramientas',
    desc: 'Se conectan a APIs, bases de datos, email, calendarios, CRMs — lo que el proceso necesite. No solo responden: actúan.',
  },
  {
    number: '02',
    title: 'Razonamiento profundo',
    desc: 'Analizan situaciones complejas, toman decisiones y ajustan el plan cuando algo falla. No siguen un script: piensan.',
  },
  {
    number: '03',
    title: 'Memoria de contexto',
    desc: 'Recuerdan el historial de cada cliente, tarea o conversación para actuar con contexto real. Sin empezar desde cero cada vez.',
  },
  {
    number: '04',
    title: 'Ejecución paralela',
    desc: 'Varios agentes trabajando en simultáneo, cada uno en su tarea. Escala sin contratar. Funciona sin que nadie lo pida.',
  },
];

const stats = [
  { number: '24/7', label: 'Trabajan sin descanso' },
  { number: '0', label: 'Supervisión humana necesaria para tareas definidas' },
  { number: 'Días', label: 'Para tener el primer agente en producción' },
];

const steps = [
  {
    number: '01',
    title: 'Definimos el agente',
    desc: 'Elegimos un proceso repetitivo de tu empresa. Mapeamos qué herramientas necesita y qué decisiones debe tomar. Salimos con el alcance cerrado.',
  },
  {
    number: '02',
    title: 'Lo construimos y probamos',
    desc: 'Desarrollamos el agente, lo conectamos a tus sistemas y lo probamos exhaustivamente antes de desplegarlo. Sin sorpresas.',
  },
  {
    number: '03',
    title: 'Desplegamos y monitorizamos',
    desc: 'El agente entra en producción. Lo monitorizamos, ajustamos y mejoramos con el tiempo. Evoluciona a medida que cambia tu negocio.',
  },
];

export default function AgentsLab() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── 1. HERO (dark) ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#080808' }}
        >
          <Image
            src="/images/heroes/agents_hero_1775968174442.png"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#555',
                }}>Agents Lab</span>
                <span style={{ width: '32px', height: '1px', background: '#2a2a2a' }} />
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#444',
                }}>03</span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(44px, 6.5vw, 84px)',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#F5F5F0',
                marginBottom: '32px',
                maxWidth: '780px',
              }}>
                Trabajan solos.<br />
                Tú supervisas los resultados.
              </h1>

              {/* Subtitle */}
              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                lineHeight: 1.65,
                color: '#888',
                maxWidth: '600px',
                marginBottom: '52px',
              }}>
                No son chatbots. Son agentes — programas de IA que ejecutan tareas completas de forma
                autónoma, usando herramientas reales, conectados a tus sistemas, sin que nadie les
                diga qué hacer paso a paso.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#casos-de-uso" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 400,
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}>
                  Ver casos de uso
                  <ArrowUpRight size={15} />
                </a>
                <Link href="/systems-lab/sesion-de-claridad" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: '#888',
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 300,
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  border: '1px solid #1e1e1e',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}>
                  Auditoría gratuita
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHAT IS AN AGENT (light) ── */}
        <Section bg="#F8F8F5">
          {/* H2 */}
          <div style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <span style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888',
              display: 'block',
              marginBottom: '20px',
            }}>¿Qué es un agente, exactamente?</span>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#111',
              marginBottom: '24px',
            }}>
              No es un chatbot.<br />
              Es un trabajador.
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#555',
            }}>
              Un chatbot espera tu pregunta y responde. Un agente recibe un objetivo y va a por él
              — busca información, toma decisiones, usa herramientas, actúa sobre sistemas reales
              y te entrega el resultado. Solo.
            </p>
          </div>

          {/* Comparison cards */}
          <div className="agents-comparison-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {/* Chatbot card (light) */}
            <div style={{
              background: '#fff',
              border: '1px solid #e8e8e5',
              borderRadius: '12px',
              padding: '40px',
            }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#888',
                display: 'block',
                marginBottom: '16px',
              }}>Chatbot</span>
              <h3 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: '28px',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                color: '#111',
                marginBottom: '28px',
              }}>El que espera</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Espera a que le preguntes',
                  'Responde con texto',
                  'No hace nada por su cuenta',
                  'Necesita supervisión constante',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      color: '#ccc',
                      marginTop: '3px',
                      flexShrink: 0,
                    }}>→</span>
                    <span style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontWeight: 300,
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: 1.5,
                    }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent card (dark, featured) */}
            <div style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '12px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #333, transparent)',
              }} />
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#555',
                display: 'block',
                marginBottom: '16px',
              }}>Agente</span>
              <h3 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: '28px',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                color: '#F5F5F0',
                marginBottom: '28px',
              }}>El que actúa</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Recibe un objetivo',
                  'Planifica los pasos',
                  'Usa herramientas reales',
                  'Entrega resultados',
                  'Funciona sin supervisión',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      color: '#F5F5F0',
                      marginTop: '3px',
                      flexShrink: 0,
                    }}>→</span>
                    <span style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontWeight: 300,
                      fontSize: '15px',
                      color: '#aaa',
                      lineHeight: 1.5,
                    }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── 3. USE CASES (dark) ── */}
        <Section bg="#080808" id="casos-de-uso">
          <div style={{ marginBottom: '64px' }}>
            <span style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#444',
              display: 'block',
              marginBottom: '20px',
            }}>Casos de uso</span>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#F5F5F0',
              marginBottom: '20px',
            }}>
              ¿Qué hace un agente en la práctica?
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontWeight: 300,
              fontSize: '17px',
              color: '#666',
              maxWidth: '520px',
            }}>
              Casos reales que estamos construyendo ahora mismo.
            </p>
          </div>

          {/* Bento grid */}
          <div className="agents-bento-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}>
            {useCases.map((c, i) => (
              <div
                key={i}
                className={c.featured ? 'agents-card-featured' : ''}
                style={{
                  gridColumn: c.featured ? 'span 2' : 'span 1',
                  background: '#111',
                  border: '1px solid #1e1e1e',
                  borderRadius: '12px',
                  padding: c.featured ? '48px' : '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: c.featured ? '280px' : '220px',
                  transition: 'border-color 0.25s',
                  cursor: 'default',
                }}
              >
                <div>
                  <span style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#444',
                    display: 'block',
                    marginBottom: '16px',
                  }}>{c.label}</span>
                  <h3 style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: c.featured ? '30px' : '22px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                    color: '#F5F5F0',
                    marginBottom: '16px',
                    lineHeight: 1.15,
                  }}>{c.title}</h3>
                </div>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 300,
                  fontSize: c.featured ? '16px' : '14px',
                  color: '#666',
                  lineHeight: 1.65,
                  margin: 0,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 4. TECHNOLOGY (light) ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <span style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888',
              display: 'block',
              marginBottom: '20px',
            }}>Tecnología</span>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#111',
              marginBottom: '20px',
            }}>
              Construidos con Claude 4
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#555',
            }}>
              Los nuevos modelos de Claude (abril 2026) permiten agentes que razonan, planifican
              y ejecutan con una fiabilidad nunca vista. No es hype — es la infraestructura sobre
              la que construimos.
            </p>
          </div>

          <div className="agents-capabilities-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e5',
                  borderRadius: '12px',
                  padding: '32px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  color: '#ccc',
                  display: 'block',
                  marginBottom: '20px',
                }}>{cap.number}</span>
                <h3 style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: '20px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.01em',
                  color: '#111',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}>{cap.title}</h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 300,
                  fontSize: '14px',
                  color: '#777',
                  lineHeight: 1.65,
                  margin: 0,
                }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 5. STATS STRIP (dark #111) ── */}
        <section style={{ background: '#111', padding: '80px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div className="agents-stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
              borderLeft: '1px solid #1e1e1e',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '48px 40px',
                  borderRight: '1px solid #1e1e1e',
                  borderTop: '1px solid #1e1e1e',
                  borderBottom: '1px solid #1e1e1e',
                }}>
                  <div style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(48px, 5vw, 72px)',
                    fontWeight: 400,
                    letterSpacing: '-0.03em',
                    color: '#F5F5F0',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}>{s.number}</div>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontWeight: 300,
                    fontSize: '14px',
                    color: '#555',
                    lineHeight: 1.5,
                    margin: 0,
                  }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. PROCESS (light) ── */}
        <Section bg="#F8F8F5">
          <div style={{ marginBottom: '72px', maxWidth: '560px' }}>
            <span style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888',
              display: 'block',
              marginBottom: '20px',
            }}>Proceso</span>
            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#111',
            }}>
              De caso de uso a agente en producción
            </h2>
          </div>

          <div className="agents-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e5',
                  borderRadius: '12px',
                  padding: '40px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <span style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  color: '#ccc',
                  display: 'block',
                  marginBottom: '24px',
                }}>{step.number}</span>
                <h3 style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: '22px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#777',
                  lineHeight: 1.65,
                  margin: 0,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 7. CTA (dark) ── */}
        <section style={{ background: '#080808', padding: '120px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '680px',
            }}>
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#444',
                marginBottom: '24px',
              }}>Empezar</span>
              <h2 style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#F5F5F0',
                marginBottom: '24px',
              }}>
                ¿Qué proceso de tu empresa debería hacerse solo?
              </h2>
              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 300,
                fontSize: '17px',
                color: '#666',
                lineHeight: 1.65,
                marginBottom: '48px',
              }}>
                Sesión de diagnóstico gratuita. Identificamos el primer agente con más impacto
                para tu negocio — en menos de una hora.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontWeight: 400,
                  fontSize: '15px',
                  letterSpacing: '0.01em',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                Auditoría gratuita
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .agents-comparison-grid {
            grid-template-columns: 1fr !important;
          }
          .agents-capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .agents-steps-grid {
            grid-template-columns: 1fr !important;
          }
          .agents-stats-grid {
            grid-template-columns: 1fr !important;
            border-left: none !important;
          }
          .agents-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .agents-card-featured {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          .agents-capabilities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
