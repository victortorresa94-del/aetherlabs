'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const benefits = [
  { num: '01', title: 'Sesiones en vivo 2h', desc: 'Cada taller dura exactamente 2 horas. Sin grabaciones largas que nunca terminas. Estás presente o no estás.' },
  { num: '02', title: 'Grupos reducidos', desc: 'Máximo 12 personas por taller. Suficiente para interactuar, suficiente para aprender de los demás.' },
  { num: '03', title: 'Práctica durante el taller', desc: 'No miramos, hacemos. El 80% del tiempo es práctica directa aplicada a casos reales.' },
  { num: '04', title: 'Grabación disponible 48h', desc: 'Si necesitas repasar algo, tienes 48 horas. Lo suficiente para consolidar sin caer en la trampa de posponer.' },
  { num: '05', title: 'Certificado de asistencia', desc: 'Cada taller incluye un certificado digital que acredita tu participación y el contenido trabajado.' },
];

const upcomingTopics = [
  { tag: 'Productividad', title: 'Automatiza tu semana con IA', desc: 'Construye tu primer flujo de trabajo automatizado usando herramientas de IA accesibles para todos.' },
  { tag: 'Comunicación', title: 'Escribe mejor en menos tiempo', desc: 'Aprende a usar la IA como colaborador de escritura: emails, informes, posts. Sin perder tu voz.' },
  { tag: 'Negocio', title: 'Crea tu primer agente de ventas', desc: 'Configura un asistente que responda preguntas, filtre leads y ahorre horas de trabajo manual cada semana.' },
];

export default function TalleresPage() {
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
                School Lab · Talleres
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
                Aprende haciendo,<br />
                <span style={{ color: 'rgba(245,245,240,0.35)' }}>no viendo.</span>
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
                Talleres grupales en vivo de 2 horas. Un tema específico, práctica inmediata, preguntas en tiempo real.
                Sin grabaciones que no ves nunca.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Cómo funcionan
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
                Dos horas que<br />
                <span style={{ color: '#999999' }}>valen por diez.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((item, i) => (
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
                      fontSize: '20px',
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {benefits.slice(3).map((item, i) => (
                <div
                  key={item.num}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: 'clamp(32px, 4vw, 48px)',
                    transitionDelay: `${(i + 3) * 80}ms`,
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
                      fontSize: '20px',
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

        {/* Próximos talleres */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
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
                Próximos talleres
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
                Lo que viene<br />
                <span style={{ color: '#999999' }}>este mes.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {upcomingTopics.map((taller, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: 'clamp(24px, 3vw, 40px)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '32px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#F8F8F8',
                      border: '1px solid #EBEBEB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#CCCCCC',
                      letterSpacing: '0.05em',
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#AAAAAA',
                      }}
                    >
                      {taller.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 'clamp(18px, 2vw, 22px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#111111',
                      }}
                    >
                      {taller.title}
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
                      {taller.desc}
                    </p>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#CCCCCC',
                      alignSelf: 'center',
                    }}
                  >
                    Próximamente
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '480px',
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
                  gap: '12px',
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
                  49€
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
                  / taller
                </span>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: '#666666',
                    maxWidth: '320px',
                    textAlign: 'center',
                    marginTop: '8px',
                  }}
                >
                  Acceso a la sesión en vivo, materiales y grabación disponible durante 48 horas.
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
                ¿Cuándo es el próximo?
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
                Consulta el calendario de talleres y reserva tu plaza antes de que se llene.
              </p>
              <Link
                href="/contacto"
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
                Ver próximos talleres →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
