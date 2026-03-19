'use client';

import Link from 'next/link';
import Image from 'next/image';

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

        {/* CTA row — Sesión de Claridad */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '60px',
          marginBottom: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.70)', marginBottom: '8px' }}>
              ¿Listo para empezar?
            </p>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.30)' }}>
              Reserva una sesión de claridad gratuita.
            </p>
          </div>
          <Link href="/systems-lab/sesion-de-claridad" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.70)',
            fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400,
            textDecoration: 'none', borderRadius: '0px',
            transition: 'all 200ms ease',
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}>
            Reservar sesión →
          </Link>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo + tagline + social links */}
          <div className="md:col-span-2">
            <div style={{ marginBottom: '20px' }}>
              <Image
                src="/aether-logo-new.png"
                alt="Aether Labs"
                height={32}
                width={96}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.4 }}
              />
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
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a href="https://www.linkedin.com/company/aetherlabs" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--v5-font-mono)', letterSpacing: '0.1em', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)'; }}>
                LinkedIn
              </a>
              <a href="https://wa.me/34627281459" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--v5-font-mono)', letterSpacing: '0.1em', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)'; }}>
                WhatsApp
              </a>
              <a href="mailto:hola@aetherlabs.es" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--v5-font-mono)', letterSpacing: '0.1em', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)'; }}>
                Email
              </a>
            </div>
          </div>

          {/* Labs */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
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
                fontSize: '11px',
                fontWeight: 500,
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
            © {currentYear} Aether Labs · aetherlabs.es · Barcelona.
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
