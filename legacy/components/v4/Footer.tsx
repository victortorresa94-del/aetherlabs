'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const year = 2025;

    return (
        <footer
            style={{
                background: '#050505',
                borderTop: '1px solid #111',
                padding: '80px 0 32px',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 80px',
                }}
            >
                {/* 4 columns */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
                        gap: '48px',
                        marginBottom: '64px',
                    }}
                >
                    {/* Col 1 — Logo + tagline */}
                    <div>
                        <Image
                            src="/aether-logo-white.png"
                            alt="Aether Labs"
                            width={120}
                            height={32}
                            style={{ objectFit: 'contain', marginBottom: '16px' }}
                        />
                        <p
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '14px',
                                color: '#666',
                                lineHeight: 1.65,
                                marginBottom: '12px',
                                maxWidth: '260px',
                            }}
                        >
                            El puente entre la tecnología y las empresas.
                        </p>
                        <p
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: '#444',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Barcelona, España — {year}
                        </p>
                    </div>

                    {/* Col 2 — Productos */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: '#666',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                            }}
                        >
                            Productos
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Closius', href: '/closius' },
                                { label: 'AchieveApex', href: '/achieveapex' },
                                { label: 'Osvecto', href: '#', badge: 'Próximamente' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <a
                                        href={item.href}
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '14px',
                                            color: '#888',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                                    >
                                        {item.label}
                                    </a>
                                    {item.badge && (
                                        <span
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '9px',
                                                color: '#555',
                                                border: '1px solid #333',
                                                padding: '2px 6px',
                                                borderRadius: '100px',
                                                letterSpacing: '0.05em',
                                            }}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 3 — Empresa */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: '#666',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                            }}
                        >
                            Empresa
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Sobre nosotros', href: '#credenciales' },
                                { label: 'Contacto', href: '#cta' },
                                { label: 'Aether School', href: 'https://school.aetherlabs.es', external: true },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '14px',
                                        color: '#888',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                                >
                                    {item.label}
                                    {item.external && (
                                        <span style={{ color: '#555', fontSize: '11px', marginLeft: '4px' }}>↗</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 4 — Contacto */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: '#666',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                            }}
                        >
                            Contacto
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a
                                href="mailto:hola@aetherlabs.es"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '14px',
                                    color: '#888',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                            >
                                <EmailIcon />
                                hola@aetherlabs.es
                            </a>
                            <a
                                href="https://wa.me/34600000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '14px',
                                    color: '#888',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                            >
                                <WaIcon />
                                WhatsApp
                            </a>
                            <a
                                href="https://linkedin.com/in/victortorres"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '14px',
                                    color: '#888',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                            >
                                <LinkedInIcon />
                                Víctor Torres
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: '1px solid #111',
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
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: '#333',
                            letterSpacing: '0.05em',
                        }}
                    >
                        © {year} Aether Labs. Todos los derechos reservados.
                    </span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {[
                            { label: 'Política de Privacidad', href: '/privacidad' },
                            { label: 'Términos', href: '/terminos' },
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '10px',
                                    color: '#333',
                                    textDecoration: 'none',
                                    letterSpacing: '0.05em',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#888')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div {
            padding: 0 24px !important;
          }
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}

function EmailIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

function WaIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    );
}
