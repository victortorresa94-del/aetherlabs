'use client';

import Link from 'next/link';
import { Film, Palette, Globe, BarChart2, FileText, Megaphone, ArrowRight } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const services = [
  {
    icon: Film,
    name: 'Video',
    desc: 'Reels, anuncios y contenido audiovisual que para el scroll y genera interes.',
    link: '/creative-lab/video',
  },
  {
    icon: Palette,
    name: 'Branding',
    desc: 'Identidad visual que transmite lo que eres antes de que digas nada.',
    link: '/creative-lab/branding',
  },
  {
    icon: Globe,
    name: 'Web',
    desc: 'Webs corporativas y landing pages que convierten visitas en clientes.',
    link: '/creative-lab/web',
  },
  {
    icon: BarChart2,
    name: 'Presentaciones',
    desc: 'Decks que se entienden a la primera y dan ganas de trabajar contigo.',
    link: '/creative-lab/presentaciones',
  },
  {
    icon: FileText,
    name: 'Contenido',
    desc: 'Textos, posts y material diario que posiciona y atrae.',
    link: '/creative-lab/material',
  },
  {
    icon: Megaphone,
    name: 'Anuncios',
    desc: 'Creatividades para Meta, Google y LinkedIn que generan ROI medible.',
    link: '/creative-lab/anuncios',
  },
];

const problems = [
  {
    number: '01',
    title: 'Material disperso',
    desc: 'El logo lo hizo alguien hace 5 anos. La web otro. Los posts son inconsistentes. No hay marca -- hay parches.',
  },
  {
    number: '02',
    title: 'Agencias lentas y caras',
    desc: '3 meses para un video de 30 segundos. Un presupuesto que se multiplica. Un resultado que no era lo que pediste.',
  },
  {
    number: '03',
    title: 'IA sin criterio',
    desc: 'ChatGPT genera imagenes en 10 segundos. Pero sin direccion creativa, sin marca y sin estrategia, generas ruido, no contenido.',
  },
];

const stats = [
  { value: '72h', label: 'Entrega media de un proyecto creativo' },
  { value: '-65%', label: 'Menos coste vs agencia tradicional' },
  { value: '100%', label: 'Archivos fuente entregados' },
];

const steps = [
  {
    number: '01',
    title: 'Entendemos tu objetivo',
    desc: 'Antes de hacer nada, entendemos que necesitas comunicar y a quien. Un brief de 15 minutos nos da todo lo necesario.',
  },
  {
    number: '02',
    title: 'Producimos sin burocracia',
    desc: 'Diseno, video y copy en un solo equipo. Sin idas y venidas interminables. IA para velocidad, criterio humano para calidad.',
  },
  {
    number: '03',
    title: 'Entregamos y medimos',
    desc: 'Material listo para publicar. Formatos nativos para cada plataforma. Si algo no funciona, iteramos.',
  },
];

export default function CreativeLab() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ─── SECTION 1 — HERO ─── */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}>
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/labs/hero-darkroom.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.35,
            }}
          />
          <div className="v5-container relative z-10 pt-20 pb-20 md:pt-0 md:pb-0">
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
                color: '#0891B2',
              }}
            >
              CREATIVE LAB
            </span>

            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(36px, 8vw, 80px)',
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
                maxWidth: '560px',
                marginBottom: '48px',
                transitionDelay: '160ms',
              }}
            >
              Todo el material creativo que tu empresa necesita para verse profesional y convertir. Video, branding, web, presentaciones, contenido y anuncios -- producido con IA, entregado en dias.
            </p>

            <div className="v5-reveal flex flex-col sm:flex-row gap-4 w-full" style={{ transitionDelay: '240ms' }}>
              <a
                href="#servicios"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  border: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                }}
              >
                Ver servicios ↓
              </a>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: 'rgba(245,245,240,0.70)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  border: '1px solid rgba(255,255,255,0.20)',
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
                Hablar con nosotros <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — EL PROBLEMA ─── */}
        <section style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                EL PROBLEMA
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '700px',
                }}
              >
                Tu empresa tiene buen producto. Pero no se ve.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="v5-reveal flex flex-col"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '20px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      color: '#CCCCCC',
                    }}
                  >
                    {problem.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {problem.title}
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
                    {problem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 — SERVICIOS ─── */}
        <section id="servicios" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                NUESTROS SERVICIOS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '600px',
                }}
              >
                Todo lo que necesitas para comunicar bien.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={i}
                    href={service.link}
                    className="v5-reveal flex flex-col"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderRadius: '12px',
                      padding: '40px',
                      textDecoration: 'none',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease',
                      transitionDelay: `${i * 60}ms`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#111111';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={24} color="#0891B2" style={{ marginBottom: '24px' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#111111',
                        marginBottom: '12px',
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '13px',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: '#777777',
                        flexGrow: 1,
                        marginBottom: '24px',
                      }}
                    >
                      {service.desc}
                    </p>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#999999',
                      }}
                    >
                      Ver mas →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 — POR QUE CON IA ─── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '48px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#0891B2',
                }}
              >
                POR QUE CON IA
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                  maxWidth: '700px',
                  marginBottom: '24px',
                }}
              >
                Producimos en dias lo que otros tardan meses.
              </h2>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '620px',
                  transitionDelay: '80ms',
                }}
              >
                Claude escribe el copy. Midjourney genera los assets. Runway produce el video. Antigravity construye la web. Nosotros somos la direccion creativa que conecta todo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '64px' }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    padding: '40px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(36px, 4vw, 56px)',
                      fontWeight: 300,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      color: '#F5F5F0',
                      marginBottom: '16px',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: 'rgba(245,245,240,0.40)',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 — EL PROCESO ─── */}
        <section style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                EL PROCESO
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '500px',
                }}
              >
                De la idea al material final.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="v5-reveal flex flex-col"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '20px',
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
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                      marginBottom: '12px',
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

        {/* ─── SECTION 6 — CTA FINAL ─── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div
              className="v5-reveal flex flex-col gap-8"
              style={{ alignItems: 'center', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}
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
                Necesitas material creativo?<br />
                <span style={{ color: 'rgba(245,245,240,0.38)' }}>Hablemos.</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '520px',
                }}
              >
                Cuentanos que necesitas. En 24h te decimos si podemos hacerlo, cuanto costaria y cuando estaria listo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full" style={{ justifyContent: 'center', marginTop: '8px' }}>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: '#F5F5F0',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    borderRadius: '0px',
                    border: 'none',
                    transition: 'background 200ms ease',
                    width: '100%',
                    maxWidth: '300px'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Solicitar presupuesto <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/34627281459"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: 'rgba(245,245,240,0.70)',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    textDecoration: 'none',
                    borderRadius: '0px',
                    border: '1px solid rgba(255,255,255,0.20)',
                    transition: 'border-color 200ms ease, color 200ms ease',
                    width: '100%',
                    maxWidth: '300px'
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
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
