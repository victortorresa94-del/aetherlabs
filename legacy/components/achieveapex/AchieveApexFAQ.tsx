'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
    {
        q: "¿La IA responde en nombre de mi empresa sin que yo lo controle?",
        a: "Tú defines exactamente cómo habla la IA, qué puede decir y qué no, y cuándo escala a un humano. El control es tuyo. La IA ejecuta tus reglas."
    },
    {
        q: "¿Funciona con el WhatsApp Business que ya tengo?",
        a: "Sí. AchieveApex conecta con tu número de WhatsApp Business actual a través de la API oficial de Meta. No pierdes el número ni el historial."
    },
    {
        q: "¿Mis clientes sabrán que están hablando con una IA?",
        a: "Eso lo decides tú. Puedes configurar la IA para que se presente como asistente virtual o para que responda como si fuera un miembro del equipo. Muchos clientes ni lo notan."
    },
    {
        q: "¿Cuánto tiempo lleva tener todo funcionando?",
        a: "Con Aether Labs, entre 48 horas y una semana dependiendo de la complejidad de tus flujos. El setup básico es cosa de horas."
    },
    {
        q: "¿El plan gratuito es realmente gratuito?",
        a: "Sí. Sin tarjeta de crédito, sin fecha de expiración. Tiene límites (100 contactos, 1 asistente) pero es funcional para validar si encaja con tu negocio."
    },
    {
        q: "¿Por qué contratar la implementación con Aether Labs y no hacerlo solo?",
        a: "Porque configurar bien los flujos de IA para que conviertan requiere criterio comercial, no solo técnico. Nosotros llevamos los flujos, el tono, la lógica de cualificación y la integración con tu proceso real. Tú te llevas un sistema funcionando, no un software instalado."
    },
    {
        q: "¿Qué pasa con el RGPD y la protección de datos?",
        a: "AchieveApex cumple con GDPR/RGPD. Los datos de tus clientes se gestionan según la política de privacidad del producto. Aether Labs puede orientarte sobre las implicaciones específicas para tu sector en España."
    }
];

export default function AchieveApexFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section style={{
            padding: '120px 0',
            background: '#0D0D0D',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{
                        color: '#666', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ PREGUNTAS FRECUENTES ]
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 40px)',
                        fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em'
                    }}>
                        Resolvemos las dudas antes de que las tengas.
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: '100%',
                                    padding: '24px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                {faq.q}
                                <ChevronDown
                                    size={20}
                                    style={{
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: openIndex === idx ? 'rotate(180deg)' : 'none',
                                        color: openIndex === idx ? '#25D366' : '#666'
                                    }}
                                />
                            </button>

                            <div
                                style={{
                                    height: openIndex === idx ? 'auto' : '0',
                                    maxHeight: openIndex === idx ? '500px' : '0',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    opacity: openIndex === idx ? 1 : 0
                                }}
                            >
                                <div style={{
                                    padding: '0 24px 24px',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '15px',
                                    color: '#888',
                                    lineHeight: 1.6
                                }}>
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
