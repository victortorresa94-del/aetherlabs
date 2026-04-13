'use client';

import Image from 'next/image';

const clients: { name: string; logo: string; width: number }[] = [
  { name: 'Artiverse',             logo: '/images/logos/Logo Artiverse - copia.jpg', width: 130 },
  { name: 'Audio Hackers Academy', logo: '/images/customers/audio-hackers-academy.png', width: 150 },
  { name: 'Bonito Sound',          logo: '/images/customers/bonito-sound.png',          width: 160 },
  { name: 'Bramer Multiserveis',   logo: '/images/customers/bramer.png',                width: 82  },
  { name: 'Suma Salut',            logo: '/images/customers/suma-salut.png',            width: 148 },
  { name: 'Kmeleon',               logo: '/images/customers/kmeleon-horizontal.png',    width: 108 },
];

export default function TrustBandSection() {
  return (
    <section
      style={{
        backgroundColor: '#F8F8F5',
        borderTop: '1px solid #e8e8e5',
        borderBottom: '1px solid #e8e8e5',
        padding: '40px 0',
      }}
    >
      <div className="v5-container">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#bbb',
            }}
          >
            Empresas que confían en nosotros
          </span>
        </div>

        <div
          className="trust-logos-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0 56px',
            flexWrap: 'wrap',
          }}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              title={client.name}
              style={{
                flexShrink: 0,
                opacity: 0.5,
                filter: 'grayscale(1)',
                mixBlendMode: 'multiply',
                transition: 'opacity 0.2s ease, filter 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                height: '40px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.opacity = '1';
                el.style.filter = 'grayscale(0)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.opacity = '0.5';
                el.style.filter = 'grayscale(1)';
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                height={40}
                width={client.width}
                style={{
                  objectFit: 'contain',
                  height: '40px',
                  width: 'auto',
                  maxWidth: `${client.width}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-logos-row {
            gap: 20px 32px !important;
            justify-content: center !important;
          }
          .trust-logos-row img {
            max-width: 100px !important;
            height: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
