'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Presentation,
  AlertTriangle,
  Clock,
  Eye,
  FileText,
  Layers,
  BarChart3,
  Sparkles,
  Zap,
  Cpu,
  ImageIcon,
  CheckCircle2,
  MessageSquare,
  Send,
  ChevronDown,
  Palette,
  PenTool,
  Monitor,
  Download,
} from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const faqs = [
  {
    q: 'En que formato recibo la presentacion?',
    a: 'Entregamos en todos los formatos principales: Google Slides, PowerPoint (.pptx), Keynote y PDF de alta resolucion. Tu eliges cual necesitas o te los damos todos sin coste adicional.',
  },
  {
    q: 'Puedo editar la presentacion despues?',
    a: 'Si. Todas nuestras entregas incluyen el archivo fuente 100% editable. Ademas entregamos una guia rapida de uso para que tu equipo pueda modificar textos, datos y slides sin romper el diseno.',
  },
  {
    q: 'Cuantas rondas de revision incluye?',
    a: 'Cada proyecto incluye 2 rondas de revision sobre el diseno final. La estructura narrativa se valida antes de disenar, lo que reduce las correcciones al minimo. Rondas adicionales tienen un coste fijo transparente.',
  },
  {
    q: 'El copy y el contenido estan incluidos?',
    a: 'Si. No solo diseñamos: escribimos toda la narrativa, los titulares, el storytelling y las llamadas a la accion. Tu nos das el brief y nosotros producimos el contenido completo con ayuda de IA.',
  },
  {
    q: 'Cuanto tarda el proyecto completo?',
    a: 'Entre 5 y 10 dias habiles dependiendo de la complejidad. Pitch decks de inversion suelen tardar 7-10 dias. Propuestas comerciales, 5-7 dias. Si tienes urgencia, ofrecemos entrega express con recargo.',
  },
];

export default function PresentacionesServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: '#080808', color: '#F5F5F0', minHeight: '100vh' }}>
      <ScrollAnimations />
      <Navbar />

      {/* ───────── 1. HERO ───────── */}
      <section className="v5-section" style={{ background: '#080808', paddingTop: 180, paddingBottom: 100 }}>
        <div className="v5-container" style={{ textAlign: 'center' }}>
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 13,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 28,
            }}
          >
            Creative Lab &middot; Presentaciones
          </span>

          <h1
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 820,
              margin: '0 auto 32px',
            }}
          >
            Presentaciones que cierran reuniones.
            <br />
            <span style={{ color: 'rgba(245,245,240,0.35)' }}>No que las alargan.</span>
          </h1>

          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 18,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.6)',
              maxWidth: 600,
              margin: '0 auto 48px',
            }}
          >
            Pitch decks para inversores, propuestas comerciales que cierran y presentaciones
            corporativas que posicionan. Narrativa, datos y diseno editorial en un solo entregable.
          </p>

          <div className="flex gap-4" style={{ justifyContent: 'center' }}>
            <Link
              href="#tipos"
              className="v5-reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#F5F5F0',
                color: '#080808',
                padding: '16px 36px',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Ver opciones <ArrowRight size={16} />
            </Link>
            <Link
              href="/contacto"
              className="v5-reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(245,245,240,0.2)',
                color: '#F5F5F0',
                padding: '16px 36px',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Hablemos
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── 2. EL PROBLEMA ───────── */}
      <section className="v5-section" style={{ background: '#080808', borderTop: '1px solid rgba(245,245,240,0.06)' }}>
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            El problema
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              textAlign: 'center',
              maxWidth: 700,
              margin: '0 auto 64px',
              lineHeight: 1.15,
            }}
          >
            Las presentaciones de tu empresa estan costando dinero. No ganandolo.
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                icon: <AlertTriangle size={28} />,
                title: 'Death by PowerPoint',
                text: 'Slides saturadas de texto, sin jerarquia visual ni narrativa. Tu audiencia desconecta en la slide 3.',
              },
              {
                icon: <Eye size={28} />,
                title: 'Cero coherencia visual',
                text: 'Cada departamento usa su propia plantilla. El resultado: tu empresa parece tres empresas distintas.',
              },
              {
                icon: <Clock size={28} />,
                title: 'Horas perdidas en formato',
                text: 'Tu equipo pierde 6-8 horas por presentacion alineando cajas, buscando iconos y peleando con PowerPoint.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  background: 'rgba(245,245,240,0.03)',
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  padding: 40,
                }}
              >
                <div style={{ color: '#0891B2', marginBottom: 20 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.55)',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. TIPOS ───────── */}
      <section id="tipos" className="v5-section" style={{ background: '#FFFFFF', color: '#111' }}>
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Modelos de trabajo
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 64,
              lineHeight: 1.15,
              color: '#111',
            }}
          >
            Elige el tipo de presentacion que necesitas
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {/* Pitch Deck */}
            <div
              className="v5-reveal"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: 12,
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Presentation size={32} style={{ color: '#0891B2', marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: '#111',
                  }}
                >
                  Pitch Deck / Investor Deck
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#666',
                    marginBottom: 24,
                  }}
                >
                  10-15 slides con storytelling estructurado, data visualization y una narrativa
                  pensada para convencer a inversores y comites.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['Estructura Problem-Solution-Traction-Ask', 'Data viz y graficos personalizados', 'Storytelling narrativo tipo Hormozi', '7-10 dias de produccion'].map((li, i) => (
                    <li
                      key={i}
                      className="flex"
                      style={{
                        gap: 10,
                        alignItems: 'flex-start',
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 14,
                        color: '#555',
                        marginBottom: 10,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#0891B2', flexShrink: 0, marginTop: 2 }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  borderTop: '1px solid #E0E0E0',
                  paddingTop: 20,
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111',
                }}
              >
                Desde 800 EUR
              </div>
            </div>

            {/* Propuesta Comercial — highlighted */}
            <div
              className="v5-reveal"
              style={{
                background: '#080808',
                color: '#F5F5F0',
                borderRadius: 12,
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'linear-gradient(90deg, #0891B2, #06b6d4)',
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 11,
                    letterSpacing: 2,
                    color: '#0891B2',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    marginBottom: 20,
                    background: 'rgba(8,145,178,0.12)',
                    padding: '4px 12px',
                    borderRadius: 4,
                  }}
                >
                  Mas popular
                </span>
                <FileText size={32} style={{ color: '#0891B2', marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Propuesta Comercial
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.6)',
                    marginBottom: 24,
                  }}
                >
                  Deck de ventas para cerrar clientes. Personalizable por tu equipo comercial, con
                  secciones modulares y pricing tables integrados.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['Plantilla modular por cliente', 'Pricing tables y comparativas', 'Objeciones resueltas en slides', '5-7 dias de produccion'].map((li, i) => (
                    <li
                      key={i}
                      className="flex"
                      style={{
                        gap: 10,
                        alignItems: 'flex-start',
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 14,
                        color: 'rgba(245,245,240,0.55)',
                        marginBottom: 10,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#0891B2', flexShrink: 0, marginTop: 2 }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(245,245,240,0.1)',
                  paddingTop: 20,
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Desde 600 EUR
              </div>
            </div>

            {/* Presentacion Corporativa */}
            <div
              className="v5-reveal"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: 12,
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Layers size={32} style={{ color: '#0891B2', marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: '#111',
                  }}
                >
                  Presentacion Corporativa
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#666',
                    marginBottom: 24,
                  }}
                >
                  Deck institucional con plantilla reutilizable. Para presentar tu empresa a
                  partners, clientes grandes o en eventos.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['15-30 slides maestras', 'Plantilla editable por departamento', 'Guia de uso incluida', '4-6 dias de produccion'].map((li, i) => (
                    <li
                      key={i}
                      className="flex"
                      style={{
                        gap: 10,
                        alignItems: 'flex-start',
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 14,
                        color: '#555',
                        marginBottom: 10,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#0891B2', flexShrink: 0, marginTop: 2 }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  borderTop: '1px solid #E0E0E0',
                  paddingTop: 20,
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111',
                }}
              >
                Desde 500 EUR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4. QUE INCLUYE SIEMPRE ───────── */}
      <section className="v5-section" style={{ background: '#F7F7F5', color: '#111' }}>
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Incluido en todos los proyectos
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 64,
              lineHeight: 1.15,
              color: '#111',
            }}
          >
            Que incluye siempre
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: <Palette size={24} />, label: 'Diseno editorial premium' },
              { icon: <PenTool size={24} />, label: 'Copy y narrativa completa' },
              { icon: <BarChart3 size={24} />, label: 'Data visualization a medida' },
              { icon: <Monitor size={24} />, label: 'Google Slides, PPTX, Keynote, PDF' },
              { icon: <Download size={24} />, label: 'Plantilla editable entregada' },
              { icon: <MessageSquare size={24} />, label: '2 rondas de revision incluidas' },
            ].map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: 12,
                  padding: 32,
                  textAlign: 'center',
                }}
              >
                <div style={{ color: '#0891B2', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#222',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 5. POR QUE CON IA ───────── */}
      <section className="v5-section" style={{ background: '#080808' }}>
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Ventaja IA
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 24,
              lineHeight: 1.15,
            }}
          >
            Por que las hacemos con IA
          </h2>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.55)',
              textAlign: 'center',
              maxWidth: 640,
              margin: '0 auto 64px',
            }}
          >
            No usamos IA para sustituir al diseñador. La usamos para que el resultado sea
            radicalmente mejor y mas rapido.
          </p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                icon: <Cpu size={28} />,
                title: 'Claude escribe la narrativa',
                text: 'Claude analiza tu brief, tu mercado y tus datos para generar un guion narrativo que sigue frameworks probados de storytelling de inversion.',
              },
              {
                icon: <ImageIcon size={28} />,
                title: 'Midjourney para visuales unicos',
                text: 'Cada presentacion tiene assets visuales generados a medida. Sin bancos de imagenes genericos. Visuales que solo tu empresa tiene.',
              },
              {
                icon: <Zap size={28} />,
                title: '3x mas rapido que el proceso tradicional',
                text: 'Lo que una agencia tradicional tarda 3-4 semanas, nosotros lo entregamos en 5-10 dias habiles con mayor calidad de copy y narrativa.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  background: 'rgba(245,245,240,0.03)',
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  padding: 40,
                }}
              >
                <div style={{ color: '#0891B2', marginBottom: 20 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.55)',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. EL PROCESO ───────── */}
      <section className="v5-section" style={{ background: '#FFFFFF', color: '#111' }}>
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Proceso
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 64,
              lineHeight: 1.15,
              color: '#111',
            }}
          >
            De brief a entrega en 4 pasos
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              {
                step: '01',
                title: 'Brief',
                text: 'Recibimos tu contexto, datos y objetivos. Hacemos las preguntas que faltan. 30 minutos.',
              },
              {
                step: '02',
                title: 'Estructura narrativa',
                text: 'Claude genera el guion slide a slide. Lo validamos contigo antes de disenar ni una sola pantalla.',
              },
              {
                step: '03',
                title: 'Diseno',
                text: 'Producimos el deck completo: layout, tipografia, data viz, iconos y visuales Midjourney.',
              },
              {
                step: '04',
                title: 'Entrega + plantilla',
                text: 'Recibes el archivo final en todos los formatos + la plantilla editable para futuras presentaciones.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  background: '#F7F7F5',
                  borderRadius: 12,
                  padding: 40,
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 48,
                    fontWeight: 800,
                    color: 'rgba(0,0,0,0.06)',
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 12,
                    color: '#0891B2',
                    letterSpacing: 2,
                    display: 'block',
                    marginBottom: 12,
                  }}
                >
                  PASO {item.step}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: '#111',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#666',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 7. FAQ ───────── */}
      <section className="v5-section" style={{ background: '#080808' }}>
        <div className="v5-container" style={{ maxWidth: 760 }}>
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 12,
              letterSpacing: 2,
              color: '#0891B2',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            FAQ
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 48,
              lineHeight: 1.15,
            }}
          >
            Preguntas frecuentes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  borderBottom: '1px solid rgba(245,245,240,0.08)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#F5F5F0',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      marginLeft: 16,
                      transition: 'transform 0.3s ease',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: 'rgba(245,245,240,0.4)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.5)',
                      paddingBottom: 24,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 8. CTA ───────── */}
      <section className="v5-section" style={{ background: '#080808', borderTop: '1px solid rgba(245,245,240,0.06)' }}>
        <div className="v5-container" style={{ textAlign: 'center' }}>
          <Sparkles size={32} style={{ color: '#0891B2', margin: '0 auto 24px', display: 'block' }} />
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Tu proxima presentacion puede cerrar la reunion
          </h2>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.55)',
              maxWidth: 520,
              margin: '0 auto 48px',
            }}
          >
            Cuentanos que necesitas y te preparamos una propuesta en 24h.
          </p>

          <div className="flex gap-4" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contacto"
              className="v5-reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#F5F5F0',
                color: '#080808',
                padding: '18px 40px',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Solicitar presupuesto <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/34624023421?text=Hola%2C%20necesito%20una%20presentaci%C3%B3n%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="v5-reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(245,245,240,0.2)',
                color: '#F5F5F0',
                padding: '18px 40px',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              <Send size={16} /> WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
