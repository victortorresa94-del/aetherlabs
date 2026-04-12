'use client';

import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function ContactoPage() {
  return (
    <div className="v5-page bg-[#080808]">
      <Navbar />
      <main>
        <section
          className="relative min-h-screen pt-32 pb-24 overflow-hidden"
          style={{ backgroundColor: '#080808' }}
        >
          {/* Subtle Glow Overlay */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '800px',
              height: '800px',
              background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)',
            }}
          />

          <div className="v5-container relative z-10 w-full h-full flex flex-col justify-center">

            {/* Header Area */}
            <div className="mb-16">
              <span
                style={{
                  display: 'inline-block',
                  marginBottom: '24px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                AETHER LABS · CONTACTO
              </span>

              <h1
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                  maxWidth: '800px',
                  marginBottom: '24px',
                }}
              >
                Hablemos de tu proyecto.
              </h1>

              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.55)',
                  maxWidth: '560px',
                }}
              >
                Puedes agendar una sesión automática en nuestro Calendly, o si lo prefieres, escribirnos por cualquiera de nuestros canales oficiales.
              </p>
            </div>

            {/* Grid Layout: Calendly + Info */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-start">

              {/* Calendly iframe — sin doble render, sin dependencias JS externas */}
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{ height: '700px', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <iframe
                  src="https://calendly.com/aetherlabs1986/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=111111"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Agenda una sesión con Aether Labs"
                  style={{ display: 'block', minWidth: '320px' }}
                />
              </div>

              {/* Contact Information Sidebar */}
              <div className="flex flex-col gap-10 pt-2 lg:pt-8">

                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#666', letterSpacing: '0.15em', marginBottom: '10px', textTransform: 'uppercase' }}>Correo Directo</span>
                  <a href="mailto:info@aetherlabs.es" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all mt-2" style={{ textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', color: '#F5F5F0', letterSpacing: '-0.01em' }}>info@aetherlabs.es</span>
                    <span style={{ color: 'rgba(245,245,240,0.4)' }}>↗</span>
                  </a>
                  <p style={{ marginTop: '8px', fontFamily: 'var(--v5-font-body)', fontSize: '13px', color: 'rgba(245,245,240,0.4)' }}>Para propuestas o dudas rápidas. Contestamos en menos de 12 horas.</p>
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#666', letterSpacing: '0.15em', marginBottom: '10px', textTransform: 'uppercase' }}>WhatsApp / Teléfono</span>
                  <a href="https://wa.me/34627281459" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#00D95F]/10 hover:bg-[#00D95F]/20 border-[#00D95F]/20 transition-all mt-2" style={{ textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', color: '#00D95F', letterSpacing: '-0.01em', fontWeight: 500 }}>Abrir WhatsApp</span>
                    <span style={{ color: '#00D95F' }}>↗</span>
                  </a>
                  <p style={{ marginTop: '8px', fontFamily: 'var(--v5-font-body)', fontSize: '13px', color: 'rgba(245,245,240,0.4)' }}>Si es urgente, escríbenos a WhatsApp. Trato directo en todo momento.</p>
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#666', letterSpacing: '0.15em', marginBottom: '10px', textTransform: 'uppercase' }}>Ubicación Física</span>
                  <div style={{ fontFamily: 'var(--v5-font-display)', fontSize: '20px', color: '#F5F5F0', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                    Rambla Balmes 27<br />
                    <span style={{ color: 'rgba(245,245,240,0.6)' }}>Mollet del Vallès, Barcelona</span>
                  </div>
                  <p style={{ marginTop: '12px', fontFamily: 'var(--v5-font-body)', fontSize: '13px', color: 'rgba(245,245,240,0.4)' }}>Trabajamos de forma global, pero nuestra sede principal está en Barcelona.</p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
