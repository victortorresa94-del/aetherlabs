'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

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
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '100px' }}
        >
          <div className="v5-container">
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
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
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
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal max-w-3xl mb-24">
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
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
                  color: '#555555',
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
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                  marginBottom: '32px',
                }}
              >
                El Equipo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Victor */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0] rounded-xl border border-black/5">
                    <img src="/images/team/Víctor.png" alt="Víctor Torres" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#111111] tracking-tight">Víctor Torres</h3>
                    <span className="font-mono text-[11px] text-[#888888] uppercase tracking-widest block mt-1">CEO & Founder</span>
                  </div>
                </div>

                {/* David */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0] rounded-xl border border-black/5">
                    <img src="/images/team/David.jpg" alt="David Montesinos" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#111111] tracking-tight">David Montesinos</h3>
                    <span className="font-mono text-[11px] text-[#888888] uppercase tracking-widest block mt-1">Head of Institutional Relations</span>
                  </div>
                </div>

                {/* Xavi */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0] rounded-xl border border-black/5">
                    <img src="/images/team/xavi.png" alt="Xavi Rodriguez" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#111111] tracking-tight">Xavi Rodriguez</h3>
                    <span className="font-mono text-[11px] text-[#888888] uppercase tracking-widest block mt-1">Business Development</span>
                  </div>
                </div>

                {/* Juan Sebastian */}
                <div className="flex flex-col gap-5 group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0] rounded-xl border border-black/5">
                    <img src="/images/team/juan.png" alt="Juan Sebastian" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#111111] tracking-tight">Juan Sebastian</h3>
                    <span className="font-mono text-[11px] text-[#888888] uppercase tracking-widest block mt-1">AI Builder</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Trayectoria */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                Proyectos y experiencia
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 v5-reveal">
              {trayectoria.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid #E8E8E8',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '8px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#111111',
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
                        color: '#888888',
                        marginTop: '2px',
                      }}
                    >
                      {item.servicio}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '13px',
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
        </section>

        {/* Cómo trabajamos */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                Nuestra forma de trabajar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 v5-section-gap">
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
                      color: '#CCCCCC',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
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
                      color: '#666666',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosistema */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="v5-reveal max-w-2xl">
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#111111',
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
                  color: '#555555',
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
                  color: '#111111',
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
        </section>

        {/* Partners */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="mb-16 v5-reveal">
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                Con quienes trabajamos
              </h2>
            </div>
            <div className="flex flex-col v5-reveal">
              {partners.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px 0',
                    borderTop: '1px solid #E8E8E8',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '24px',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#111111',
                    }}
                  >
                    {p.nombre}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      color: '#666666',
                      lineHeight: 1.7,
                    }}
                  >
                    {p.desc}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #E8E8E8' }} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
