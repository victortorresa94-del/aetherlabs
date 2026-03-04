'use client';

import { Building2, Stethoscope, ShoppingBag, Briefcase } from 'lucide-react';

const CASES = [
    {
        icon: <Building2 color="#25D366" size={28} />,
        border: '#25D366',
        title: 'INMOBILIARIA',
        problem: 'Leads de portales que escriben por Instagram a las 11pm esperando respuesta al momento.',
        solution: 'La IA responde al instante, cualifica por zona y presupuesto, agenda visita y crea el deal en el CRM. El comercial llega a la mañana siguiente con 3 visitas agendadas y contexto completo.',
        results: '↓ 60% tiempo de respuesta / ↑ 40% visitas cualificadas / 0 leads perdidos fuera de horario',
        cta: 'Ver demo inmobiliaria →',
        ctaColor: '#25D366'
    },
    {
        icon: <Stethoscope color="#00E5FF" size={28} />,
        border: '#00E5FF',
        title: 'CLÍNICAS Y SALUD',
        problem: 'Pacientes que llaman, no hay respuesta, llaman a otra clínica. Agenda infrautilizada.',
        solution: 'IA atiende consultas, informa de servicios y agenda citas directamente en el calendario. Confirmación automática y recordatorio anti no-show.',
        results: '↓ 70% llamadas perdidas / ↑ 35% ocupación de agenda / ×2 capacidad de atención sin contratar',
        cta: 'Ver demo clínica →',
        ctaColor: '#00E5FF'
    },
    {
        icon: <ShoppingBag color="#FFB800" size={28} />,
        border: '#FFB800',
        title: 'E-COMMERCE Y RETAIL',
        problem: 'Clientes que preguntan por WhatsApp e Instagram y el equipo no da abasto respondiendo tallas, precios, plazos.',
        solution: 'La IA responde dudas de producto, gestiona devoluciones, hace upsell automático y pasa al equipo solo las incidencias complejas.',
        results: '↓ 80% carga del equipo de atención / ↑ 25% tasa de conversión en chat / Soporte 24/7 real',
        cta: 'Ver demo e-commerce →',
        ctaColor: '#FFB800'
    },
    {
        icon: <Briefcase color="#25D366" size={28} />,
        border: '#25D366',
        title: 'SERVICIOS B2B',
        problem: 'Leads que piden presupuesto por formulario y si no respondes en 2 horas ya firmaron con otro.',
        solution: 'La IA contacta al lead en menos de 60 segundos, recoge información del proyecto y agenda llamada con el comercial correcto con el briefing preparado.',
        results: '↓ 90% tiempo de primera respuesta / ↑ 50% leads que avanzan a propuesta / Comerciales enfocados solo en cerrar',
        cta: 'Consultar para mi sector →',
        ctaColor: '#25D366'
    }
];

export default function AchieveApexUseCases() {
    return (
        <section style={{
            padding: '120px 0',
            background: '#0A0A0A',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        color: '#666', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ CASOS DE USO ]
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '24px', maxWidth: '800px', margin: '0 auto 16px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>¿A qué se dedica tu empresa?</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300,
                        color: '#888', maxWidth: '640px', margin: '0 auto'
                    }}>
                        AchieveApex se adapta a tu sector. Aquí van los más comunes en España.
                    </p>
                </div>

                <div className="cases-grid">
                    {CASES.map((useCase, idx) => (
                        <div key={idx} className="case-card" style={{
                            background: '#111', borderRadius: '8px', padding: '40px',
                            borderLeft: `3px solid ${useCase.border}`,
                            transition: 'all 0.3s ease', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.03)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {useCase.icon}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>
                                    {useCase.title}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, marginBottom: '32px' }}>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666', textTransform: 'uppercase', marginBottom: '8px' }}>Problema</h4>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.6 }}>{useCase.problem}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666', textTransform: 'uppercase', marginBottom: '8px' }}>Solución AchieveApex</h4>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#fff', lineHeight: 1.6 }}>{useCase.solution}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666', textTransform: 'uppercase', marginBottom: '8px' }}>Resultados Típicos</h4>
                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: useCase.border, lineHeight: 1.6 }}>{useCase.results}</p>
                                </div>
                            </div>

                            <div style={{
                                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                                color: useCase.ctaColor, transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '4px'
                            }} className="case-cta">
                                {useCase.cta}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .cases-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }
                .case-card:hover { transform: translateY(-4px); background: #131313 !important; }
                .case-card:hover .case-cta { opacity: 0.8; gap: 8px !important; }
                
                @media (max-width: 900px) {
                    .cases-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
