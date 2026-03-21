import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Learn — Guías y recursos sobre IA para empresas | Aether Labs',
  description: 'Guías prácticas, comparativas y casos de uso reales de IA para empresas. Claude, automatización, formación corporativa y mucho más.',
};

const articulos = [
  {
    slug: 'claude-vs-chatgpt-empresas',
    label: 'Comparativa',
    title: 'Claude vs ChatGPT para empresas: cuál es mejor en 2026',
    desc: 'Alta búsqueda, comparativa directa e intención de compra. Analizamos ambas herramientas para uso corporativo real.',
    tiempo: '8 min',
    proximamente: true,
  },
  {
    slug: 'claude-cowork-que-es',
    label: 'Guía',
    title: 'Qué es Claude Cowork y cómo usarlo en tu empresa',
    desc: 'El agente de escritorio de Anthropic que trabaja con tus archivos locales. Zero competencia en Google ahora mismo.',
    tiempo: '6 min',
    proximamente: true,
  },
  {
    slug: 'casos-uso-claude-empresa',
    label: 'Casos de uso',
    title: '15 casos de uso reales de Claude en empresas españolas',
    desc: 'Marketing, RRHH, finanzas, ventas y operaciones. Casos documentados con antes y después.',
    tiempo: '12 min',
    proximamente: true,
  },
  {
    slug: 'cuanto-cuesta-implementar-claude',
    label: 'Pricing',
    title: 'Cuánto cuesta implementar Claude en una empresa',
    desc: 'Licencias, formación, implementación. Desglose completo sin letra pequeña.',
    tiempo: '5 min',
    proximamente: true,
  },
  {
    slug: 'prompts-claude-marketing',
    label: 'Prompts',
    title: '30 prompts de Claude para equipos de marketing',
    desc: 'Briefs, copy, análisis de resultados, adaptación de contenido. Listos para copiar y usar.',
    tiempo: '10 min',
    proximamente: true,
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

            {/* Próximamente notice */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderLeft: '4px solid #111111',
                borderRadius: '12px',
                padding: '24px 32px',
                marginBottom: '64px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  flexShrink: 0,
                }}
              >
                En construcción
              </span>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#666666',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Estos artículos están en proceso de publicación. Volveremos pronto con contenido de calidad sobre IA para empresas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {articulos.map((art, i) => (
                <div
                  key={art.slug}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    opacity: art.proximamente ? 0.6 : 1,
                    position: 'relative',
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
                    {art.proximamente && (
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '9px',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#CCCCCC',
                          border: '1px solid #E0E0E0',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        Próximamente
                      </span>
                    )}
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
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA — Newsletter / Aviso ── */}
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
              Mientras tanto
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
              ¿Quieres saber cómo usamos Claude en Aether Labs?
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
              Reserva una sesión gratuita y te lo mostramos en directo con tus procesos reales.
            </p>
            <Link
              href="/systems-lab/sesion-de-claridad"
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
              Reservar sesión gratuita →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
