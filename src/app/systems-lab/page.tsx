'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

type FilterTab = 'Todas' | 'Agentes IA' | 'Automatización' | 'CRM & Ventas' | 'Productividad';

const tools = [
  {
    name: 'Claude',
    subtitle: 'El cerebro que conecta toda tu empresa',
    description: 'Agente, automatización, escritura, análisis. El más potente del mercado.',
    category: 'Agentes IA' as FilterTab,
    featured: true,
    partner: false,
    accentColor: '#D97706',
    href: '/systems-lab/claude',
    logo: 'C',
  },
  {
    name: 'Microsoft Copilot',
    subtitle: 'IA nativa en todo Microsoft 365',
    description: 'La IA que ya tienes sin saberlo. Solo hay que activarla.',
    category: 'Productividad' as FilterTab,
    featured: false,
    partner: false,
    accentColor: '#0078D4',
    href: '/systems-lab/copilot',
    logo: 'M',
  },
  {
    name: 'ClickUp',
    subtitle: 'Proyectos y procesos con IA integrada',
    description: 'El sistema operativo de tu empresa con IA que automatiza el 40% del trabajo manual.',
    category: 'Productividad' as FilterTab,
    featured: false,
    partner: false,
    accentColor: '#7B68EE',
    href: '/systems-lab/clickup',
    logo: 'CU',
  },
  {
    name: 'n8n / Make / Zapier',
    subtitle: 'Automatiza cualquier flujo de trabajo',
    description: 'Conectamos tus herramientas y automatizamos los procesos que consumen más horas.',
    category: 'Automatización' as FilterTab,
    featured: false,
    partner: false,
    accentColor: '#EA4B71',
    href: '/systems-lab/automatizacion',
    logo: '∞',
  },
  {
    name: 'AchieveApex',
    subtitle: 'CRM conversacional omnicanal',
    description: 'El CRM que habla con tus clientes por ti. WhatsApp, email, Instagram en una bandeja.',
    category: 'CRM & Ventas' as FilterTab,
    featured: false,
    partner: true,
    accentColor: '#059669',
    href: '/systems-lab/achieveapex',
    logo: 'AA',
  },
  {
    name: 'Closius',
    subtitle: 'Coaching de ventas con IA',
    description: 'Analiza tus llamadas de ventas y le dice a cada comercial qué mejorar exactamente.',
    category: 'CRM & Ventas' as FilterTab,
    featured: false,
    partner: true,
    accentColor: '#0EA5E9',
    href: '/systems-lab/closius',
    logo: 'CL',
  },
  {
    name: 'Apollo.io',
    subtitle: 'Prospecting y captación con IA',
    description: '275M+ contactos. Encuentra a tu cliente ideal antes de que él te encuentre.',
    category: 'CRM & Ventas' as FilterTab,
    featured: false,
    partner: false,
    accentColor: '#1D4ED8',
    href: '/systems-lab/apollo',
    logo: 'AP',
  },
  {
    name: 'HubSpot AI',
    subtitle: 'CRM que trabaja contigo, no al revés',
    description: 'Breeze AI, scoring predictivo, Claude vía MCP. El stack comercial más potente.',
    category: 'CRM & Ventas' as FilterTab,
    featured: false,
    partner: false,
    accentColor: '#FF7A59',
    href: '/systems-lab/hubspot',
    logo: 'HS',
  },
];

const tabs: FilterTab[] = ['Todas', 'Agentes IA', 'Automatización', 'CRM & Ventas', 'Productividad'];

export default function SystemsLabPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('Todas');

  const filtered = activeTab === 'Todas' ? tools : tools.filter(t => t.category === activeTab);

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        {/* Hero */}
        <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)', paddingBottom: '48px' }}>
          <div className="v5-container">
            <div style={{ maxWidth: '640px' }}>
              <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
                Systems Lab
              </span>
              <h1 className="v5-h1 v5-reveal">
                Todas las herramientas de IA que tu empresa
                {' '}<span className="v5-gradient-text">debería estar usando</span>
              </h1>
              <p className="v5-body-large v5-reveal" style={{ marginTop: '20px' }}>
                Las seleccionamos, las implementamos y te enseñamos a sacarles partido.
                Sin desarrollar nada desde cero. Sin tiempo perdido.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="v5-reveal" style={{
              display: 'flex',
              gap: '8px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '100px',
                    border: `1px solid ${activeTab === tab ? 'var(--v5-accent)' : 'var(--v5-border)'}`,
                    backgroundColor: activeTab === tab ? 'rgba(99,102,241,0.15)' : 'transparent',
                    color: activeTab === tab ? 'var(--v5-accent)' : 'var(--v5-text-secondary)',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all var(--v5-transition)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tools grid */}
        <section style={{ backgroundColor: 'var(--v5-bg-base)', padding: '0 0 96px' }}>
          <div className="v5-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
              className="v5-tools-grid"
            >
              {filtered.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="v5-tool-card"
                  style={{
                    gridColumn: tool.featured ? 'span 2' : 'span 1',
                  }}
                >
                  {/* Accent glow */}
                  <div style={{
                    position: 'absolute',
                    top: 0, right: 0,
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    transform: 'translate(30%, -30%)',
                    background: `radial-gradient(circle, ${tool.accentColor}15 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Logo */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--v5-radius-md)',
                    backgroundColor: `${tool.accentColor}20`,
                    border: `1px solid ${tool.accentColor}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--v5-font-mono)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: tool.accentColor,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                    flexShrink: 0,
                  }}>
                    {tool.logo}
                  </div>

                  {/* Badges */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '100px',
                      border: `1px solid ${tool.accentColor}40`,
                      backgroundColor: `${tool.accentColor}15`,
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '9px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: tool.accentColor,
                    }}>
                      {tool.category}
                    </span>
                    {tool.featured && (
                      <span style={{
                        padding: '3px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(99,102,241,0.4)',
                        backgroundColor: 'rgba(99,102,241,0.15)',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '9px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--v5-accent)',
                      }}>
                        Destacado
                      </span>
                    )}
                    {tool.partner && (
                      <span style={{
                        padding: '3px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(5,150,105,0.4)',
                        backgroundColor: 'rgba(5,150,105,0.12)',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '9px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#059669',
                      }}>
                        Partner
                      </span>
                    )}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontWeight: 700,
                    fontSize: tool.featured ? '24px' : '18px',
                    color: 'var(--v5-text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {tool.name}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: tool.featured ? '16px' : '15px',
                    color: 'var(--v5-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {tool.description}
                  </p>

                  <span style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: tool.accentColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    Ver cómo lo implementamos →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Sesión de Claridad */}
        <section className="v5-section" style={{
          backgroundColor: 'var(--v5-bg-surface)',
          borderTop: '1px solid var(--v5-border)',
        }}>
          <div className="v5-container" style={{ textAlign: 'center' }}>
            <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '16px' }}>
              ¿No sabes por dónde empezar?
            </h2>
            <p className="v5-body-large v5-reveal" style={{ maxWidth: '480px', margin: '0 auto 32px' }}>
              Normal. La mejor decisión es hacer primero la Sesión de Claridad, donde mapeamos
              tu empresa y decidimos juntos qué herramientas tienen sentido.
            </p>
            <div className="v5-reveal">
              <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
                Reservar Sesión de Claridad →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .v5-tools-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .v5-tool-card[style*="span 2"] {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 640px) {
          .v5-tools-grid {
            grid-template-columns: 1fr !important;
          }
          .v5-tool-card[style*="span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
