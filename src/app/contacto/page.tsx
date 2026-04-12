'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function ContactoPage() {
  return (
    <div className="v5-page" style={{ background: '#080808' }}>
      <Navbar />

      {/* Kill any stray Calendly badge injected by global script */}
      <style>{`.calendly-badge-widget { display: none !important; }`}</style>

      <main>
        <section className="contacto-section" style={{ background: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">

            {/* Header */}
            <div style={{ marginBottom: '72px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-mono)', fontSize: '10px',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666',
                }}>Contacto</span>
                <span style={{ width: '32px', height: '1px', background: '#333' }} />
              </div>
              <h1 className="contacto-h1" style={{
                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(44px, 6vw, 80px)',
                fontWeight: 400, fontStyle: 'normal',
                letterSpacing: '-0.02em', lineHeight: 1.05,
                color: '#F5F5F0', maxWidth: '700px', marginBottom: '20px',
              }}>
                Hablemos de tu proyecto.
              </h1>
              <p style={{
                fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300,
                lineHeight: 1.7, color: 'rgba(245,245,240,0.45)', maxWidth: '480px',
              }}>
                Reserva una sesión gratuita en el calendario, o contacta directamente por el canal que prefieras.
              </p>
            </div>

            {/* Grid: Calendly + Sidebar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: '40px',
              alignItems: 'start',
            }} className="contacto-grid">

              {/* Calendly iframe — inline embed, sin badge widget */}
              <div className="contacto-iframe-wrap" style={{
                borderRadius: '0px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background: '#080808',
                height: '680px',
              }}>
                <iframe
                  src="https://calendly.com/aetherlabs1986/30min?hide_gdpr_banner=1&background_color=080808&text_color=F5F5F0&primary_color=F5F5F0&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Reservar sesión con Aether Labs"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

                {/* Email */}
                <div style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{
                    display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '9px',
                    letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555',
                    marginBottom: '10px',
                  }}>Email</span>
                  <a href="mailto:hola@aetherlabs.es" style={{
                    fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300,
                    color: '#F5F5F0', textDecoration: 'none', display: 'block', marginBottom: '6px',
                  }}>hola@aetherlabs.es</a>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)', fontSize: '12px', fontWeight: 300,
                    color: 'rgba(245,245,240,0.35)', lineHeight: 1.5,
                  }}>Contestamos en menos de 12 horas.</p>
                </div>

                {/* WhatsApp */}
                <div style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{
                    display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '9px',
                    letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555',
                    marginBottom: '10px',
                  }}>WhatsApp</span>
                  <a href="https://wa.me/34627281459" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400,
                    color: '#F5F5F0', textDecoration: 'none',
                    padding: '10px 20px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '0',
                    transition: 'border-color 200ms ease',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  >
                    Abrir WhatsApp →
                  </a>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)', fontSize: '12px', fontWeight: 300,
                    color: 'rgba(245,245,240,0.35)', lineHeight: 1.5, marginTop: '10px',
                  }}>Para urgencias o consultas rápidas.</p>
                </div>

                {/* Location */}
                <div style={{ padding: '28px 0' }}>
                  <span style={{
                    display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '9px',
                    letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555',
                    marginBottom: '10px',
                  }}>Ubicación</span>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                    color: '#F5F5F0', lineHeight: 1.6, marginBottom: '4px',
                  }}>Rambla Balmes 27<br />
                    <span style={{ color: 'rgba(245,245,240,0.5)' }}>Mollet del Vallès, Barcelona</span>
                  </p>
                </div>

                {/* Sesion de claridad CTA */}
                <div style={{
                  marginTop: '8px', padding: '24px', background: '#111',
                  border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0px',
                }}>
                  <p style={{
                    fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300,
                    color: 'rgba(245,245,240,0.55)', lineHeight: 1.6, marginBottom: '16px',
                  }}>¿Prefieres una sesión con agenda completa y contexto previo?</p>
                  <Link href="/systems-lab/sesion-de-claridad" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 400,
                    color: '#F5F5F0', textDecoration: 'none',
                  }}>
                    Sesión de claridad →
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contacto-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .contacto-section {
            padding-top: 100px !important;
            padding-bottom: 80px !important;
          }
          .contacto-grid { grid-template-columns: 1fr !important; }
          .contacto-iframe-wrap {
            height: 560px !important;
          }
          .contacto-h1 {
            font-size: clamp(36px, 9vw, 80px) !important;
          }
        }
      `}</style>
    </div>
  );
}
