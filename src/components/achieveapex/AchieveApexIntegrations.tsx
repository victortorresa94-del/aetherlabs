'use client';

const INTEGRATIONS_FILA_1 = [
    'WhatsApp', 'Instagram', 'Facebook', 'Gmail', 'HubSpot', 'Zapier',
    'Calendly', 'Stripe', 'Shopify', 'WooCommerce', 'Slack'
];

const INTEGRATIONS_FILA_2 = [
    'Pipedrive', 'Zoho', 'Salesforce', 'Google Calendar', 'Mailchimp',
    'Twilio', 'OpenAI', 'Make', 'Notion', 'Typeform'
];

// Helper to get logo URL from Simple Icons or similar
const getLogoUrl = (name: string) => {
    const slug = name.toLowerCase().replace(' ', '');
    return `https://cdn.simpleicons.org/${slug}/white`;
};

export default function AchieveApexIntegrations() {
    return (
        <section style={{
            padding: '100px 0',
            background: '#0A0A0A',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center', marginBottom: '64px' }}>
                <div style={{
                    color: '#666', fontSize: '11px', fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                }}>
                    [ ECOSISTEMA ]
                </div>
                <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em'
                }}>
                    Se conecta con lo que ya usas.
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="marquee-container">
                {/* Row 1: Left to Right */}
                <div className="marquee-row row-1">
                    <div className="marquee-content">
                        {[...INTEGRATIONS_FILA_1, ...INTEGRATIONS_FILA_1].map((name, i) => (
                            <div key={i} className="integration-logo">
                                <img src={getLogoUrl(name)} alt={name} loading="lazy" />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="marquee-row row-2">
                    <div className="marquee-content">
                        {[...INTEGRATIONS_FILA_2, ...INTEGRATIONS_FILA_2].map((name, i) => (
                            <div key={i} className="integration-logo">
                                <img src={getLogoUrl(name)} alt={name} loading="lazy" />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Masks */}
                <div className="marquee-mask left" />
                <div className="marquee-mask right" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#555' }}>
                    ¿No ves tu herramienta? Pregúntanos. AchieveApex tiene API abierta y Aether Labs hace las integraciones personalizadas.
                </p>
                <a href="#cta" style={{
                    fontFamily: 'var(--font-body)', fontSize: '14px', color: '#00E5FF',
                    fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '12px'
                }}>
                    Consultar integración →
                </a>
            </div>

            <style jsx>{`
                .marquee-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }
                .marquee-row {
                    display: flex;
                    width: 100vw;
                    overflow: hidden;
                }
                .marquee-content {
                    display: flex;
                    gap: 60px;
                    padding: 10px 0;
                }
                
                .row-1 .marquee-content {
                    animation: marqueeL 40s linear infinite;
                }
                .row-2 .marquee-content {
                    animation: marqueeR 45s linear infinite;
                }

                @keyframes marqueeL {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marqueeR {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }

                .integration-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    filter: grayscale(1) opacity(0.4);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    cursor: default;
                }
                .integration-logo:hover {
                    filter: grayscale(0) opacity(1);
                    transform: scale(1.05);
                }
                .integration-logo img {
                    height: 28px;
                    width: auto;
                    object-fit: contain;
                }
                .integration-logo span {
                    font-family: var(--font-body);
                    font-size: 14px;
                    font-weight: 500;
                    color: #fff;
                }

                .marquee-mask {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 15vw;
                    z-index: 2;
                    pointer-events: none;
                }
                .marquee-mask.left {
                    left: 0;
                    background: linear-gradient(to right, #0A0A0A, transparent);
                }
                .marquee-mask.right {
                    right: 0;
                    background: linear-gradient(to left, #0A0A0A, transparent);
                }

                @media (prefers-reduced-motion: reduce) {
                    .marquee-content { animation: none !important; flex-wrap: wrap; justify-content: center; }
                    .marquee-row { overflow: visible; width: 100%; }
                }
            `}</style>
        </section>
    );
}
