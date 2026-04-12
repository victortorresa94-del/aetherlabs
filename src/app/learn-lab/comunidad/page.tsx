'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const includes = [
  {
    num: '01',
    title: 'Recursos semanales',
    desc: 'Cada semana recibes herramientas, prompts y casos de uso curados. Sin ruido, solo lo que funciona.',
  },
  {
    num: '02',
    title: 'Sesiones en vivo mensuales',
    desc: 'Una sesión grupal al mes para resolver dudas, explorar novedades y aprender junto a la comunidad.',
  },
  {
    num: '03',
    title: 'Canal de preguntas y respuestas',
    desc: 'Haz tus preguntas cuando quieras. El equipo de Aether responde y la comunidad aprende contigo.',
  },
  {
    num: '04',
    title: 'Acceso al archivo completo',
    desc: 'Todos los recursos anteriores disponibles desde el primer día. Aprende a tu ritmo, sin perderte nada.',
  },
];

export default function ComunidadPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <div style={{ maxWidth: '720px' }}>
              <span
                className="v5-reveal"
                style={{
                  display: 'block',
                  marginBottom: '28px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                }}
              >
                School Lab · Comunidad
              </span>
              <h1
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  color: '#F5F5F0',
                  marginBottom: '32px',
                  transitionDelay: '80ms',
                }}
              >
                Aprende IA con quien<br />
                <span style={{ color: 'rgba(245,245,240,0.35)' }}>ya lo está usando.</span>
              </h1>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.48)',
                  maxWidth: '540px',
                  transitionDelay: '160ms',
                }}
              >
                Acceso a una comunidad activa donde compartimos recursos, herramientas y experiencias cada semana.
                Para ir a tu ritmo, con apoyo real.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="mb-20 v5-reveal flex flex-col items-start gap-4">
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
                Qué incluye la comunidad
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
                Todo lo que necesitas<br />
                <span style={{ color: '#999999' }}>sin lo que no.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includes.map((item, i) => (
                <div
                  key={item.num}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: 'clamp(32px, 4vw, 48px)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#CCCCCC',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                    }}
                  >
                    {item.title}
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="v5-reveal flex flex-col gap-6">
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
                  Para quién
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                  }}
                >
                  No hace falta<br />
                  <span style={{ color: '#999999' }}>saber nada previo.</span>
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                  }}
                >
                  Personas que quieren explorar la IA sin presión. Profesionales que necesitan mantenerse al día sin cursos intensivos.
                  Si tienes curiosidad, la comunidad tiene el ritmo que necesitas.
                </p>
              </div>
              <div className="v5-reveal flex flex-col gap-4" style={{ transitionDelay: '80ms' }}>
                {[
                  'Curiosos que quieren empezar sin compromisos',
                  'Profesionales que necesitan mantenerse actualizados',
                  'Personas que ya probaron la IA y quieren ir más lejos',
                  'Equipos que aprenden juntos a su propio ritmo',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '20px 24px',
                      background: '#FFFFFF',
                      border: '1px solid #EBEBEB',
                      borderRadius: '12px',
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#111111',
                        marginTop: '8px',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: '#444444',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '560px',
                margin: '0 auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
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
                Precio
              </span>
              <div
                style={{
                  background: '#F8F8F8',
                  border: '1px solid #EBEBEB',
                  borderRadius: '20px',
                  padding: '48px 40px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(48px, 6vw, 72px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    color: '#111111',
                    lineHeight: 1,
                  }}
                >
                  29€
                </span>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#999999',
                  }}
                >
                  / mes
                </span>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: '#666666',
                    maxWidth: '380px',
                    textAlign: 'center',
                  }}
                >
                  Acceso completo a recursos, sesiones en vivo y el archivo histórico. Cancela cuando quieras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
              }}
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
                ¿Listo para unirte?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '440px',
                }}
              >
                Empieza hoy. Sin compromisos. El primer mes siempre es el mejor momento para empezar.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: '#F5F5F0',
                  color: '#080808',
                  borderRadius: '0px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                Quiero unirme →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
