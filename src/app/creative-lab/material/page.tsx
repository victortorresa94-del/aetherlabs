'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  AlertTriangle,
  TrendingDown,
  Battery,
  FileText,
  Search,
  CalendarDays,
  PenTool,
  Hash,
  BarChart3,
  Sparkles,
  Zap,
  Cpu,
  ImageIcon,
  CheckCircle2,
  Send,
  ChevronDown,
  Layers,
  RefreshCw,
  Target,
  LineChart,
} from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const faqs = [
  {
    q: 'En que plataformas publicais?',
    a: 'Producimos contenido para Instagram, LinkedIn, X (Twitter), TikTok, Facebook, YouTube, blog propio y newsletter. Adaptamos formato, tono y dimensiones a cada plataforma automaticamente.',
  },
  {
    q: 'Manteneis el tono de mi marca?',
    a: 'Si. En la fase de estrategia definimos un brand voice document que Claude usa como referencia para todo el contenido. Iteramos hasta que el tono sea identico al de tu marca.',
  },
  {
    q: 'Vosotros publicais o solo entregais el contenido?',
    a: 'Entregamos el contenido organizado y listo para publicar. Si necesitas que gestionemos la publicacion directa, lo hacemos con herramientas como Metricool o Buffer. El coste de gestion se incluye en el pack.',
  },
  {
    q: 'Que metricas reportais cada mes?',
    a: 'Entregamos un informe mensual con alcance, engagement, crecimiento de seguidores, CTR, mejores posts y recomendaciones para el mes siguiente. Sin vanity metrics: datos que sirven para decidir.',
  },
  {
    q: 'Puedo cancelar el servicio mensual?',
    a: 'Si. Todos los packs mensuales se contratan sin permanencia. Solo pedimos un aviso de 15 dias antes del siguiente ciclo para cerrar correctamente el calendario editorial.',
  },
];

export default function MaterialServicePage() {
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
            Creative Lab &middot; Contenido
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
            Contenido que posiciona.
            <br />
            <span style={{ color: 'rgba(245,245,240,0.35)' }}>No que rellena.</span>
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
            Posts de redes sociales, articulos de blog, newsletters y contenido LinkedIn.
            Todo con estrategia, calendario y produccion continua mes a mes.
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
              Ver packs <ArrowRight size={16} />
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
            Publicar sin estrategia es peor que no publicar.
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                icon: <Target size={28} />,
                title: 'Publicar sin estrategia',
                text: 'Posts aleatorios sin hilo conductor. Tu feed parece un collage de ideas sueltas que no construyen autoridad ni generan leads.',
              },
              {
                icon: <TrendingDown size={28} />,
                title: 'Tono inconsistente',
                text: 'Un dia formal, otro dia coloquial. Cada persona del equipo escribe diferente. Tu marca suena a cinco voces distintas.',
              },
              {
                icon: <Battery size={28} />,
                title: 'Content burnout',
                text: 'Producir contenido diario agota. A las 3 semanas, el calendario editorial esta vacio y vuelves a improvisar.',
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

      {/* ───────── 3. TIPOS DE CONTENIDO ───────── */}
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
            Packs mensuales
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
            Elige el nivel de produccion que necesitas
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {/* Pack Social Media */}
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
                <MessageCircle size={32} style={{ color: '#0891B2', marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: '#111',
                  }}
                >
                  Pack Social Media
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
                  20 posts al mes con copy y diseno incluido. Calendario editorial mensual para
                  mantener la consistencia sin esfuerzo.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['20 publicaciones/mes (copy + diseno)', 'Calendario editorial mensual', 'Adaptacion a 2-3 plataformas', 'Hashtags y horarios optimizados'].map((li, i) => (
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
                Desde 600 EUR/mes
              </div>
            </div>

            {/* Blog + SEO — highlighted */}
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
                <Search size={32} style={{ color: '#0891B2', marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Blog + SEO
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
                  4-8 articulos al mes optimizados para Google. Keyword research, estructura SEO y
                  contenido largo que posiciona y genera trafico organico.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['4-8 articulos/mes (1.500-2.500 palabras)', 'Keyword research mensual', 'Estructura SEO on-page', 'Internal linking strategy'].map((li, i) => (
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
                Desde 800 EUR/mes
              </div>
            </div>

            {/* Pack Completo */}
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
                  Pack Completo
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
                  Social media + blog + newsletter + LinkedIn. Todo el ecosistema de contenido
                  producido y coordinado bajo una sola estrategia.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                  {['20+ posts social + 4-8 articulos blog', 'Newsletter semanal o quincenal', 'LinkedIn personal del CEO/fundador', 'Informe de resultados mensual'].map((li, i) => (
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
                Desde 1.400 EUR/mes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4. QUE INCLUYE ───────── */}
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
            Incluido en todos los packs
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
              { icon: <Target size={24} />, label: 'Estrategia de contenido' },
              { icon: <CalendarDays size={24} />, label: 'Calendario editorial mensual' },
              { icon: <PenTool size={24} />, label: 'Copy + diseno por pieza' },
              { icon: <Hash size={24} />, label: 'Hashtags y distribucion' },
              { icon: <BarChart3 size={24} />, label: 'Metricas mensuales' },
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
            Por que producimos con IA
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
            La IA no sustituye la estrategia ni la creatividad. La multiplica. Donde antes
            producias 8 posts al mes, ahora produces 30 sin perder calidad.
          </p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                icon: <Cpu size={28} />,
                title: 'Claude escribe todo el copy',
                text: 'Claude genera cada pieza de contenido siguiendo tu brand voice. Itera con el tono de tu marca hasta que cada frase suene autentica.',
              },
              {
                icon: <ImageIcon size={28} />,
                title: 'Midjourney para visuales unicos',
                text: 'Cada post tiene graficos y visuales generados a medida. Sin stock, sin plantillas de Canva. Imagenes que solo tu marca tiene.',
              },
              {
                icon: <Zap size={28} />,
                title: '30 posts donde antes habia 8',
                text: 'La produccion asistida por IA multiplica x3 el volumen sin sacrificar calidad. Mas contenido, mas alcance, mismo presupuesto.',
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
            Asi funciona cada mes
          </h2>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              {
                step: '01',
                title: 'Estrategia',
                text: 'Definimos objetivos, audiencia, pilares de contenido y brand voice. Esto se hace una vez y se refina cada trimestre.',
              },
              {
                step: '02',
                title: 'Calendario',
                text: 'Creamos el calendario editorial del mes con temas, formatos y fechas. Lo validamos contigo antes de producir.',
              },
              {
                step: '03',
                title: 'Produccion semanal',
                text: 'Cada semana entregamos el lote de contenido: copy, diseno, hashtags y horarios de publicacion listos.',
              },
              {
                step: '04',
                title: 'Analisis y ajuste',
                text: 'Al final de cada mes revisamos metricas, identificamos que funciona y ajustamos la estrategia del mes siguiente.',
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
          <RefreshCw size={32} style={{ color: '#0891B2', margin: '0 auto 24px', display: 'block' }} />
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
            Deja de improvisar contenido cada semana
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
            Cuentanos tu situacion actual y te proponemos un plan de contenido adaptado a tu marca
            y tus objetivos.
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
              Solicitar propuesta <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/34624023421?text=Hola%2C%20necesito%20produccion%20de%20contenido"
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
