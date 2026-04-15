'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="footer-outer"
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .footer-outer {
            padding-top: 60px !important;
            padding-bottom: 32px !important;
          }
          .footer-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-bottom: 40px !important;
            margin-bottom: 40px !important;
            gap: 24px !important;
          }
          .footer-cta-row h2 {
            font-size: clamp(24px, 7vw, 36px) !important;
          }
          .footer-cta-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 40px !important;
          }
          .footer-labs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>

      <div className="v5-container">

        {/* CTA row */}
        <div
          className="footer-cta-row"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            paddingBottom: '60px',
            marginBottom: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <h2
            style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              margin: 0,
              maxWidth: '560px',
            }}
          >
            ¿Listo para implementar IA en tu empresa?
          </h2>
          <Link
            href="/systems-lab/sesion-de-claridad"
            className="footer-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: '#F5F5F0',
              color: '#080808',
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              fontWeight: 400,
              textDecoration: 'none',
              borderRadius: '0px',
              flexShrink: 0,
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#E8E8E3'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
          >
            Auditoría gratuita →
          </Link>
        </div>

        {/* 3-column grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '64px',
          }}
        >

          {/* Column 1 — Logo + tagline + social icons */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/aether-logo-white.png"
                alt="Aether Labs"
                width={90}
                height={23}
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.28)',
                maxWidth: '220px',
                margin: '0 0 20px 0',
              }}
            >
              Implementamos IA en empresas. Resultados reales, sin humo.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aether-labs-tech/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.30)',
                  transition: 'all 200ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.2)';
                  el.style.color = 'rgba(255,255,255,0.7)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.color = 'rgba(255,255,255,0.30)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34627281459"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.30)',
                  transition: 'all 200ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.2)';
                  el.style.color = 'rgba(255,255,255,0.7)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.color = 'rgba(255,255,255,0.30)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hola@aetherlabs.es"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.30)',
                  transition: 'all 200ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.2)';
                  el.style.color = 'rgba(255,255,255,0.7)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.color = 'rgba(255,255,255,0.30)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,12 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Labs (2-sub-column grid) */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555',
                marginBottom: '16px',
                margin: '0 0 16px 0',
              }}
            >
              Labs
            </h4>
            <div
              className="footer-labs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4px 24px',
              }}
            >
              {[
                { label: 'Claude Lab', href: '/claude-lab' },
                { label: 'Marketing Lab', href: '/marketing-lab' },
                { label: 'Software Lab', href: '/software-lab' },
                { label: 'Learn Lab', href: '/learn-lab' },
                { label: 'Agents Lab', href: '/agents-lab' },
                { label: 'Open Lab', href: '/open-lab' },
                { label: 'Gen AI Lab', href: '/gen-ai-lab' },
                { label: 'AI Team Lab', href: '/systems-lab/sesion-de-claridad' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '12px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.32)',
                    textDecoration: 'none',
                    marginBottom: '8px',
                    transition: 'color 200ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555',
                margin: '0 0 16px 0',
              }}
            >
              Empresa
            </h4>
            {[
              { label: 'Casos', href: '/casos' },
              { label: 'Nosotros', href: '/nosotros' },
              { label: 'Contacto', href: 'mailto:hola@aetherlabs.es' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.32)',
                  textDecoration: 'none',
                  marginBottom: '8px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)'; }}
              >
                {label}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.16)',
            }}
          >
            © 2026 Aether Labs · Barcelona
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Privacidad', href: 'mailto:hola@aetherlabs.es?subject=Política de privacidad' },
              { label: 'Términos', href: 'mailto:hola@aetherlabs.es?subject=Términos y condiciones' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.16)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.16)'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
