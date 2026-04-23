'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

const articulos = [
  {
    slug: 'claude-vs-chatgpt-empresas',
    label: 'Comparativa',
    title: 'Claude vs ChatGPT para empresas: cuál es mejor en 2026',
    desc: 'Privacidad, contexto, precio y casos de uso reales. Analizamos ambas herramientas para uso corporativo y te ayudamos a elegir.',
    tiempo: '8 min',
  },
  {
    slug: 'copilot-vs-claude',
    label: 'Comparativa',
    title: 'Microsoft Copilot vs Claude: qué IA conviene a tu empresa',
    desc: 'Copilot está en Microsoft 365. Claude es mejor IA. ¿Cuál conviene? Analizamos precios, capacidades e integración.',
    tiempo: '7 min',
  },
  {
    slug: 'casos-uso-claude-empresa',
    label: 'Casos de uso',
    title: '15 casos de uso reales de Claude en empresas españolas',
    desc: 'Marketing, RRHH, finanzas, ventas y operaciones. Casos documentados con antes y después y métricas reales.',
    tiempo: '12 min',
  },
  {
    slug: 'prompts-claude-marketing',
    label: 'Prompts',
    title: '30 prompts de Claude para equipos de marketing',
    desc: 'Briefs, copy, análisis de campañas, contenido para redes y email marketing. Listos para copiar y usar con Claude.',
    tiempo: '10 min',
  },
  {
    slug: 'claude-recursos-humanos',
    label: 'Guía',
    title: 'Cómo usar Claude en Recursos Humanos: guía práctica 2026',
    desc: 'Criba de CVs, onboarding personalizado, clima laboral y comunicación interna. Guía práctica con prompts reales.',
    tiempo: '9 min',
  },
  {
    slug: 'claude-cowork-que-es',
    label: 'Guía',
    title: 'Qué es Claude Cowork y cómo usarlo en tu empresa',
    desc: 'El agente de escritorio de Anthropic que controla tu ordenador. Todo lo que necesitas saber para implementarlo.',
    tiempo: '6 min',
  },
  {
    slug: 'cuanto-cuesta-implementar-claude',
    label: 'Pricing',
    title: 'Cuánto cuesta implementar Claude en una empresa',
    desc: 'Licencias, formación, integración y ROI. Desglose completo sin letra pequeña. Con cálculo de amortización.',
    tiempo: '5 min',
  },
  {
    slug: 'claude-opus-47-empresas',
    label: 'Novedades IA',
    title: 'Claude Opus 4.7 para empresas: para qué sirve y si merece el cambio',
    desc: 'Anthropic lanzó Opus 4.7. Analizamos qué cambia para empresas no técnicas: task budgets, visión mejorada, cuándo usarlo y arquitectura de coste recomendada.',
    tiempo: '7 min',
  },
  {
    slug: 'ai-act-agosto-2026',
    label: 'Regulación IA',
    title: 'AI Act agosto 2026: checklist para empresas españolas antes del 2 de agosto',
    desc: 'El 2 de agosto entra en vigor el EU AI Act. Multas de hasta 35M€. Checklist práctico de 5 puntos para saber qué tienes que tener listo.',
    tiempo: '9 min',
  },
];

export default function BlogPage() {
  return (
    <div className="v5-page">
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div style={{ maxWidth: '640px' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  marginBottom: '32px',
                }}
              >
                Aether Labs · Learn
              </span>
              <h1
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(44px, 6vw, 80px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                Todo lo que necesitas saber
                <br />
                <span style={{ color: '#555555' }}>sobre IA en tu empresa.</span>
              </h1>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#888888',
                }}
              >
                Guías prácticas, comparativas y casos de uso reales. Sin hype. Sin teoría inútil. Solo lo que funciona.
              </p>
            </div>
          </div>
        </section>

        {/* ── ARTÍCULOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="flex flex-col gap-4">
              {articulos.map((art) => (
                <Link
                  key={art.slug}
                  href={`/blog/${art.slug}`}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#111111';
                    el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#E0E0E0';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      {art.label}
                    </span>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#CCCCCC' }}>·</span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 400,
                        color: '#CCCCCC',
                      }}
                    >
                      {art.tiempo} lectura
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(18px, 2vw, 22px)',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      color: '#111111',
                      margin: 0,
                    }}
                  >
                    {art.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#666666',
                      margin: 0,
                    }}
                  >
                    {art.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container flex flex-col items-center text-center">
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '24px',
              }}
            >
              Forma a tu equipo
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '24px',
                maxWidth: '560px',
              }}
            >
              ¿Listo para que tu empresa use Claude de verdad?
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#888888',
                marginBottom: '40px',
                maxWidth: '420px',
              }}
            >
              Formación práctica para equipos reales. Talleres, programas intensivos y acompañamiento continuo.
            </p>
            <Link
              href="/school-lab/formacion-claude-empresas"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: '#FFFFFF',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'opacity 200ms ease',
              }}
            >
              Ver formación en Claude →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
