'use client';

import Script from 'next/script';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function SesionDeClaridadPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* Section 1 — Hero & Calendly */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '160px', minHeight: '100vh' }}
        >
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
              Auditoría Gratuita
            </span>

            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#F5F5F0',
                maxWidth: '700px',
                marginBottom: '48px',
                whiteSpace: 'pre-line',
              }}
            >
              {'Hablemos de tu proyecto.'}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-24 items-start v5-reveal">

              {/* Left Column: Calendly Container */}
              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '16px', overflow: 'hidden' }}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/aetherlabs1986/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=111111"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>

              {/* Right Column: Contact Info */}
              <div style={{ padding: '32px 0' }}>
                <div style={{ marginBottom: '40px' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#666', letterSpacing: '0.1em', marginBottom: '8px' }}>EMAIL</span>
                  <a href="mailto:info@aetherlabs.es" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', color: '#F5F5F0', textDecoration: 'none' }}>info@aetherlabs.es</a>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#666', letterSpacing: '0.1em', marginBottom: '8px' }}>TELÉFONO</span>
                  <a href="https://wa.me/34627281459" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', color: '#F5F5F0', textDecoration: 'none' }}>+34 627 281 459</a>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#666', letterSpacing: '0.1em', marginBottom: '8px' }}>UBICACIÓN</span>
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', color: '#F5F5F0', lineHeight: 1.6 }}>Rambla Balmes 27<br />Mollet del Vallès, Barcelona</span>
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
