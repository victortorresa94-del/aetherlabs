'use client';

import { useState } from 'react';

const FAQS = [
    {
        q: '¿Cómo se integra Closius con nuestro CRM?',
        a: 'Closius se integra de forma nativa con HubSpot, Salesforce, Pipedrive y Microsoft Dynamics. Si utilizas un CRM propio, disponemos de una API robusta para sincronizar datos automáticamente.'
    },
    {
        q: '¿Puede analizar llamadas en español?',
        a: 'Absolutamente. Closius ha sido entrenado específicamente en español (incluyendo acentos de España y LATAM) y otros 15 idiomas, superando el 95% de precisión en transcripción.'
    },
    {
        q: '¿Es compatible con leyes de privacidad europeas (GDPR)?',
        a: 'Sí. Los datos se cifran en tránsito y en reposo. Ofrecemos opciones de residencia de datos en la UE y herramientas de anonimización automática para cumplir con la normativa vigente.'
    },
    {
        q: '¿Cuánto tiempo tarda la implementación?',
        a: 'Una implementación estándar con Aether Labs suele estar lista en menos de 48 horas. Para despliegues Enterprise con integraciones complejas, el plazo suele ser de 7-10 días.'
    }
];

export default function ClosiusFAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" style={{ padding: '120px 0', background: '#0D0D0D' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ FAQ ]</div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 44px)',
                        color: '#fff', letterSpacing: '-0.02em'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Preguntas</span> <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>frecuentes.</span>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            onClick={() => setOpen(open === i ? null : i)}
                            style={{
                                background: '#111', borderRadius: '16px', padding: '24px 32px',
                                cursor: 'pointer', border: `1px solid ${open === i ? 'rgba(130, 255, 31, 0.2)' : 'rgba(255,255,255,0.05)'}`,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: '#fff' }}>{faq.q}</h3>
                                <span style={{ color: 'var(--green)', fontSize: '24px' }}>{open === i ? '−' : '+'}</span>
                            </div>

                            <div style={{
                                maxHeight: open === i ? '200px' : '0', overflow: 'hidden',
                                transition: 'max-height 0.3s ease', opacity: open === i ? 1 : 0
                            }}>
                                <p style={{
                                    fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)',
                                    paddingTop: '20px', lineHeight: 1.6, fontSize: '16px'
                                }}>
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
