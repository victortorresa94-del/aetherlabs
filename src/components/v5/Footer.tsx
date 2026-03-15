'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="v5-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.40)" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="5" fill="rgba(255,255,255,0.40)" />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'rgba(255,255,255,0.50)',
                }}
              >
                Aether Labs
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.22)',
                maxWidth: '240px',
              }}
            >
              El puente entre personas y tecnología. IA, contenido y presencia digital para empresas.
            </p>
          </div>

          {/* Labs */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.20)',
                marginBottom: '20px',
              }}
            >
              Labs
            </h4>
            {[
              { label: 'Creative Lab', href: '/creative-lab' },
              { label: 'Systems Lab', href: '/systems-lab' },
              { label: 'School Lab', href: '/school-lab' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.28)'; }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.20)',
                marginBottom: '20px',
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
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.28)'; }}
              >
                {label}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
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
            {currentYear} Aether Labs. Barcelona.
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
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
