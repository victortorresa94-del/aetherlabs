'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const services = [
  {
    emoji: '🎬',
    name: 'Vídeo',
    desc: 'Reels, anuncios y contenido audiovisual que para el scroll y genera interés.',
    link: '/creative-lab/video',
  },
  {
    emoji: '🎨',
    name: 'Branding',
    desc: 'Identidad visual que transmite lo que eres antes de que digas nada.',
    link: '/creative-lab/branding',
  },
  {
    emoji: '🌐',
    name: 'Web',
    desc: 'Webs claras, rápidas y con copy que convierte visitas en clientes.',
    link: '/creative-lab/web',
  },
  {
    emoji: '📊',
    name: 'Presentaciones',
    desc: 'Decks que se entienden a la primera y dan ganas de trabajar contigo.',
    link: '/creative-lab/presentaciones',
  },
  {
    emoji: '📝',
    name: 'Contenido',
    desc: 'Textos, posts y material diario que posiciona y atrae.',
    link: '/creative-lab/material',
  },
  {
    emoji: '📣',
    name: 'Anuncios',
    desc: 'Creatividades para Meta, Google y LinkedIn que generan ROI medible.',
    link: '/creative-lab/anuncios',
  },
];

const steps = [
  {
    number: '01',
    title: 'Entendemos tu objetivo',
    desc: 'Antes de hacer nada, entendemos qué necesitas comunicar y a quién.',
  },
  {
    number: '02',
    title: 'Producimos sin burocracia',
    desc: 'Diseño, vídeo y copy en un solo equipo. Sin idas y venidas interminables.',
  },
  {
    number: '03',
    title: 'Medimos lo que funciona',
    desc: 'Entregamos y analizamos. Iteramos hasta que el resultado sea real.',
  },
];

export default function CreativeLab() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* Section 1 - Hero */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
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
              CREATIVE LAB
            </span>

            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '800px',
                marginBottom: '32px',
                transitionDelay: '80ms',
              }}
            >
              Contenido que vende.<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>Presencia que posiciona.</span>
            </h1>

            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '520px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              Diseñamos el material que hace que tu empresa se vea como lo que realmente es. Vídeo, branding, web y textos que convierten.
            </p>

            <div className="v5-reveal" style={{ transitionDelay: '240ms' }}>
              <Link
                href="#servicios"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '14px 28px',
                  border: '1px solid rgba(255,255,255,0.20)',
                  color: 'rgba(255,255,255,0.70)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.40)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.90)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.20)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.70)';
                }}
              >
                Ver nuestros servicios →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 - Servicios */}
        <section id="servicios" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col gap-4 mb-16">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                LO QUE HACEMOS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Seis formas de hacer<br />que te vean.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: '32px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span style={{ fontSize: '32px', lineHeight: 1 }}>{service.emoji}</span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                      flexGrow: 1,
                    }}
                  >
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#111111',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'opacity 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '0.5';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '1';
                    }}
                  >
                    Explorar →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Cómo trabajamos */}
        <section style={{ backgroundColor: '#F8F8F8', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col gap-4 mb-16">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                NUESTRO PROCESO
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Estrategia, producción<br />y resultados.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="v5-reveal flex flex-col gap-4 p-10"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      color: '#CCCCCC',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Un caso real */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col gap-4 mb-16">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                }}
              >
                CASO REAL
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                Lo que pasa cuando<br />
                <span style={{ color: 'rgba(245,245,240,0.38)' }}>el contenido trabaja bien.</span>
              </h2>
            </div>

            <div
              className="v5-reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                transitionDelay: '80ms',
              }}
            >
              {/* Left: metric card */}
              <div
                className="flex flex-col justify-center gap-6 p-12 md:p-16"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#555555',
                  }}
                >
                  EDUCACIÓN ONLINE
                </span>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.95,
                    color: '#F5F5F0',
                  }}
                >
                  +20.000€<br />
                  <span style={{ color: 'rgba(245,245,240,0.38)' }}>en ventas</span>
                </p>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(245,245,240,0.35)',
                    letterSpacing: '0.01em',
                  }}
                >
                  ~200 alumnos inscritos · Objetivo cumplido
                </p>
              </div>

              {/* Right: description */}
              <div className="flex flex-col justify-center gap-6 p-12 md:p-16">
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    color: '#F5F5F0',
                  }}
                >
                  Llenar un máster de composición musical en un mercado saturado de cursos.
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.50)',
                  }}
                >
                  Estrategia de lanzamiento completa. Funnel con ManyChat, reels, lead magnets y cierre de ventas directo. Todo el material creativo producido y coordinado desde Aether.
                </p>
                <div>
                  <Link
                    href="/casos"
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(245,245,240,0.60)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#F5F5F0';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.60)';
                    }}
                  >
                    Ver todos los casos →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - CTA */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="v5-container">
            <div
              className="v5-reveal max-w-2xl mx-auto flex flex-col gap-8"
              style={{ alignItems: 'center', textAlign: 'center' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Tienes un producto que merece verse mejor?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Cuéntanos qué necesitas. Sin compromiso.
              </p>
              <div>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    background: '#F5F5F0',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    borderRadius: '0px',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Hablamos →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
