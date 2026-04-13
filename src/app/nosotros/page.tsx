'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Image from 'next/image';

const trayectoria = [
  { cliente: 'SOMA / Audio Hackers', servicio: 'Funnel de lanzamiento', resultado: '200 alumnos, 20.000€ en ventas' },
  { cliente: 'EME Agency', servicio: 'PM + ClickUp + 40 SOPs', resultado: '40 proyectos simultáneos' },
  { cliente: 'Totemica (EE.UU.)', servicio: 'Go-to-market completo', resultado: 'Lanzamiento desde cero' },
  { cliente: 'KMeleon', servicio: 'Marketing & Growth', resultado: 'Campañas de adquisición y funnels' },
  { cliente: 'Konektor', servicio: 'Business Development', resultado: 'Estructuración comercial' },
  { cliente: 'DENETIC', servicio: 'Operaciones completas', resultado: 'Pedidos, stock, web, atención cliente' },
  { cliente: 'CulturA (Malta)', servicio: 'PM técnico Oracle NetSuite', resultado: 'Implementación ERP' },
  { cliente: 'Condor Music (Colombia)', servicio: 'Fundador', resultado: 'Giras, videoclips, booking' },
];

const principios = [
  {
    num: '01',
    title: 'Entregamos cosas que se usan',
    desc: 'No decks que se archivan. Cuando acabamos, algo funciona que antes no funcionaba.',
  },
  {
    num: '02',
    title: 'No vendemos lo que no podemos cumplir',
    desc: 'Si algo no encaja, lo decimos antes de empezar. Preferimos perder un proyecto.',
  },
  {
    num: '03',
    title: 'La IA es el medio, no el fin',
    desc: 'No vendemos tecnología. Tu empresa es el objetivo. La IA es nuestra mejor herramienta.',
  },
];

const partners = [
  {
    nombre: 'KMELEON / DUSTIN GALLEGOS',
    desc: 'Partner tecnológico. CEO de KMeleon.tech, ex-Microsoft.',
  },
  {
    nombre: 'ACHIEVEAPEX',
    desc: 'CRM conversacional omnicanal con IA. Distribuido por Aether Labs.',
  },
  {
    nombre: 'CLOSIUS',
    desc: 'AI Sales Coaching. Analiza llamadas de ventas y mejora equipos comerciales.',
  },
];

export default function NosotrosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="v5-section relative min-h-screen flex items-center overflow-hidden nosotros-hero-section"
          style={{ backgroundColor: '#080808' }}
        >
          <Image
            src="/images/heroes/nosotros.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.7) 100%)',
            zIndex: 1,
          }} />
          <div className="v5-container" style={{ position: 'relative', zIndex: 2 }}>
            <span
              style={{
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              Nosotros
            </span>
            <h1
              style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                color: '#F5F5F0',
                maxWidth: '840px',
                marginBottom: '32px',
              }}
            >
              No somos una agencia.<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>
                Somos el equipo que tu empresa necesitaba.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '560px',
              }}
            >
              Implementamos IA porque llevamos más de una década resolviendo problemas reales de empresa.
              Sabemos lo que funciona. Y lo que no.
            </p>
          </div>
        </section>

        {/* El origen */}
        <section className="v5-section" style={{ backgroundColor: '#050505' }}>
          <div className="v5-container">
            <div className="v5-reveal max-w-3xl mb-24">
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                  marginBottom: '32px',
                }}
              >
                De dónde venimos
              </h2>
              <div
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#AAAAAA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <p>
                  Once años construyendo cosas. Agencias, startups, lanzamientos internacionales,
                  implementaciones de ERP, funnels que vendían 20.000€ en semanas, sistemas operativos
                  para agencias de 40 proyectos simultáneos.
                </p>
                <p>
                  Lo que vimos en todo ese tiempo fue siempre lo mismo: empresas con buen producto
                  que no sabían cómo presentarse, venderse o escalar.
                </p>
                <p>
                  Cuando la IA empezó a cambiar las reglas del juego, la respuesta fue evidente.
                  Construir el puente entre la tecnología más potente del mercado y las empresas
                  que más la necesitan.
                </p>
                <p>
                  Eso es Aether Labs.
                </p>
              </div>
            </div>

            {/* Equipo */}
            <div className="v5-reveal" style={{ marginTop: '80px' }}>
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                  marginBottom: '32px',
                }}
              >
                El Equipo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 nosotros-team-grid">

                {/* Victor */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111] rounded-xl border border-white/5">
                    <img src="/images/team/victor.png" alt="Víctor Torres" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#F5F5F0] tracking-tight">Víctor Torres</h3>
                    <span className="font-mono text-[11px] text-[#666666] uppercase tracking-widest block mt-1">CEO & Founder</span>
                  </div>
                </div>

                {/* David */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111] rounded-xl border border-white/5">
                    <img src="/images/team/David.jpg" alt="David Montesinos" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#F5F5F0] tracking-tight">David Montesinos</h3>
                    <span className="font-mono text-[11px] text-[#666666] uppercase tracking-widest block mt-1">Head of Institutional Relations</span>
                  </div>
                </div>

                {/* Xavi */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111] rounded-xl border border-white/5">
                    <img src="/images/xavi_portrait.png" alt="Xavi Rodriguez" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#F5F5F0] tracking-tight">Xavi Rodriguez</h3>
                    <span className="font-mono text-[11px] text-[#666666] uppercase tracking-widest block mt-1">Business Development</span>
                  </div>
                </div>

                {/* Juan Sebastian */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111] rounded-xl border border-white/5">
                    <img src="/images/juan_portrait.png" alt="Juan Sebastian" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#F5F5F0] tracking-tight">Juan Sebastian</h3>
                    <span className="font-mono text-[11px] text-[#666666] uppercase tracking-widest block mt-1">AI Builder</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Trayectoria */}
        < section className="v5-section" style={{ backgroundColor: '#080808' }
        }>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                }}
              >
                Proyectos y experiencia
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 v5-reveal nosotros-trayectoria-grid">
              {trayectoria.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid #1A1A1A',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '8px',
                    alignItems: 'start',
                    paddingRight: '32px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#F5F5F0',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.cliente}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '13px',
                        fontWeight: 300,
                        color: '#666666',
                        marginTop: '2px',
                      }}
                    >
                      {item.servicio}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: '#888888',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.resultado}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Cómo trabajamos */}
        < section className="v5-section" style={{ backgroundColor: '#050505' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                }}
              >
                Nuestra forma de trabajar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 nosotros-principios-grid">
              {principios.map((p, i) => (
                <div
                  key={i}
                  className="v5-reveal flex flex-col gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#333333',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                      fontSize: '22px',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '-0.02em',
                      color: '#F5F5F0',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#AAAAAA',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Ecosistema */}
        < section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <div className="v5-reveal max-w-2xl">
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                  marginBottom: '24px',
                }}
              >
                Más que una agencia
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#AAAAAA',
                  marginBottom: '32px',
                }}
              >
                Aether Labs es el núcleo de implementación. Aether School es la academia de
                formación en IA para personas y empresas. Juntos forman un ecosistema: implementamos
                IA para las empresas que quieren delegarlo, y enseñamos a las que quieren aprenderlo.
              </p>
              <Link
                href="https://aetherschool.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#F5F5F0',
                  textDecoration: 'none',
                  transition: 'opacity 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                Explorar Aether School →
              </Link>
            </div>
          </div>
        </section >

        {/* Partners */}
        < section className="v5-section nosotros-section-padded" style={{ backgroundColor: '#050505', paddingBottom: '160px' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  color: '#F5F5F0',
                }}
              >
                Con quienes trabajamos
              </h2>
            </div>
            <div className="flex flex-col v5-reveal max-w-4xl">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="nosotros-partner-row"
                  style={{
                    padding: '32px 0',
                    borderTop: '1px solid #1A1A1A',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
                    gap: '24px',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#F5F5F0',
                    }}
                  >
                    {p.nombre}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      color: '#AAAAAA',
                      lineHeight: 1.7,
                    }}
                  >
                    {p.desc}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #1A1A1A' }} />
            </div>
          </div>
        </section >

      </main >
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          /* Hero section padding */
          .nosotros-hero-section {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
          .nosotros-hero-section h1 {
            font-size: clamp(36px, 9vw, 80px) !important;
          }

          /* All v5-section padding reduced */
          .v5-page .v5-section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .v5-page .v5-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          /* Trayectoria grid: 1 col */
          .nosotros-trayectoria-grid {
            grid-template-columns: 1fr !important;
          }

          /* Principios grid: 1 col */
          .nosotros-principios-grid {
            grid-template-columns: 1fr !important;
          }

          /* Partners: stack label/desc vertically */
          .nosotros-partner-row {
            grid-template-columns: 1fr !important;
          }

          /* Section padding override */
          .nosotros-section-padded {
            padding-bottom: 80px !important;
          }

          /* Team grid: 2 cols on mobile, 1 col on very small */
          .nosotros-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }

          /* Trayectoria card inner sub-grid: collapse */
          .nosotros-trayectoria-grid > div > div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }

          /* Partner row: tighter on mobile */
          .nosotros-partner-row {
            gap: 12px !important;
          }
          .nosotros-partner-row > div:first-child {
            padding-right: 0 !important;
          }
        }

        @media (max-width: 400px) {
          .nosotros-team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div >
  );
}
