'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

const contactMethods = [
  {
    label: 'EMAIL',
    value: 'hola@aetherlabs.es',
    href: 'mailto:hola@aetherlabs.es',
    desc: 'Para consultas generales, presupuestos o propuestas de colaboración.',
  },
  {
    label: 'WHATSAPP',
    value: '+34 627 281 459',
    href: 'https://wa.me/34627281459',
    desc: 'Respuesta rápida. Normalmente contestamos en menos de 2 horas.',
  },
  {
    label: 'LINKEDIN',
    value: 'Aether Labs',
    href: 'https://www.linkedin.com/company/aether-labs-tech/?viewAsMember=true',
    desc: 'Síguenos para novedades, casos de uso y contenido sobre IA.',
  },
];

export default function ContactoPage() {
  return (
    <div className="v5-page">
      <Navbar />
      <main>

        {/* Hero */}
        <section
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
              Contacto
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
              Hablemos.<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>
                Sin compromiso, sin formularios eternos.
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
              Cuéntanos tu reto por el canal que prefieras. Te respondemos siempre personalmente.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '24px',
                    alignItems: 'start',
                    padding: '40px 0',
                    borderTop: i === 0 ? 'none' : '1px solid #E0E0E0',
                    textDecoration: 'none',
                    transition: 'opacity 200ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#999999',
                        marginBottom: '8px',
                      }}
                    >
                      {method.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '20px',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        color: '#111111',
                      }}
                    >
                      {method.value}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                      margin: 0,
                      paddingTop: '4px',
                    }}
                  >
                    {method.desc}
                  </p>
                </a>
              ))}
              <div style={{ borderTop: '1px solid #E0E0E0' }} />
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div style={{ maxWidth: '560px' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  marginBottom: '24px',
                }}
              >
                Ubicación
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                  marginBottom: '24px',
                }}
              >
                Barcelona, España
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#555555',
                }}
              >
                Trabajamos con empresas de toda España y en remoto. Si prefieres vernos en persona, estamos en Barcelona.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
          <div className="v5-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#F5F5F0',
                marginBottom: '24px',
                maxWidth: '560px',
              }}
            >
              ¿Prefieres ir directo al grano?
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                marginBottom: '40px',
                maxWidth: '420px',
              }}
            >
              Reserva una sesión de claridad gratuita de 30 minutos. Sin compromiso.
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
                borderRadius: '0px',
                transition: 'opacity 200ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
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
