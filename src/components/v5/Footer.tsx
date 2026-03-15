'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#050A14',
      borderTop: '1px solid var(--v5-border)',
      padding: '48px 0',
    }}>
      <div className="v5-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
          className="v5-footer-grid"
        >
          {/* Col 1: Logo + tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image src="/aether-logo-white.png" alt="Aether Labs" width={28} height={28} style={{ objectFit: 'contain' }} />
              <span style={{
                fontFamily: 'var(--v5-font-display)',
                fontWeight: 700,
                fontSize: '17px',
                color: 'var(--v5-text-primary)',
                letterSpacing: '-0.02em',
              }}>
                Aether Labs
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              color: 'var(--v5-text-muted)',
              lineHeight: 1.65,
              maxWidth: '260px',
            }}>
              El puente entre personas y tecnología. Implementación de IA, contenido y presencia digital para empresas españolas.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              {[
                { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in' },
                { href: 'https://instagram.com', label: 'Instagram', icon: 'ig' },
                { href: 'https://twitter.com', label: 'X/Twitter', icon: 'x' },
              ].map(({ href, label, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--v5-radius-sm)',
                    border: '1px solid var(--v5-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--v5-text-muted)',
                    textDecoration: 'none',
                    transition: 'border-color var(--v5-transition), color var(--v5-transition)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--v5-border-hover)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--v5-border)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-muted)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Labs */}
          <div>
            <h4 style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--v5-text-muted)',
              marginBottom: '20px',
            }}>
              Labs
            </h4>
            {[
              { label: 'Creative Lab', href: '/creative-lab' },
              { label: 'Systems Lab', href: '/systems-lab' },
              { label: 'School Lab', href: '/school-lab' },
              { label: 'Sesión de Claridad', href: '/systems-lab/sesion-de-claridad' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  color: 'var(--v5-text-secondary)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'color var(--v5-transition)',
                }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-primary)'}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--v5-text-muted)',
              marginBottom: '20px',
            }}>
              Empresa
            </h4>
            {[
              { label: 'Cómo funciona', href: '#como-funciona' },
              { label: 'Casos de estudio', href: '/casos' },
              { label: 'Contacto', href: '/contacto' },
              { label: 'hola@aetherlabs.es', href: 'mailto:hola@aetherlabs.es' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  color: 'var(--v5-text-secondary)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'color var(--v5-transition)',
                }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-primary)'}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--v5-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: '13px',
            color: 'var(--v5-text-muted)',
          }}>
            © {currentYear} Aether Labs. Barcelona, España.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Privacidad', href: '/privacidad' },
              { label: 'Términos', href: '/terminos' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  color: 'var(--v5-text-muted)',
                  textDecoration: 'none',
                  transition: 'color var(--v5-transition)',
                }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)'}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-muted)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
