'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const programs = [
    {
        title: 'Empodérate con IA', target: 'Mujeres 40-60',
        desc: 'Salud, creatividad y comunicación sin tecnicismos. Desde tu móvil.',
        href: '/school-lab/empoderate-con-ia',
        iconPaths: ['M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'],
    },
    {
        title: 'Conéctate con el mundo', target: 'Personas 65+',
        desc: 'IA como asistente diario para recordar, contactar y simplificar.',
        href: '/school-lab/conectate-con-el-mundo',
        iconPaths: ['M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'],
    },
    {
        title: 'Aprende a crear', target: 'Niños 6-12',
        desc: 'Cuentos, mundos e historias potenciando la imaginación con IA.',
        href: '/school-lab/aprende-a-crear',
        iconPaths: ['M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'],
    },
    {
        title: 'Descubre tu futuro', target: 'Jóvenes 13-18',
        desc: 'Explora profesiones del futuro y crea proyectos reales con tecnología.',
        href: '/school-lab/descubre-tu-futuro',
        iconPaths: ['M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'],
    },
    {
        title: 'Monta tu negocio', target: 'Emprendedores',
        desc: 'Web, logo, contenido y ventas — sin saber programar.',
        href: '/school-lab/monta-tu-negocio',
        iconPaths: ['M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'],
    },
    {
        title: 'Mejora tu material', target: 'Profesores',
        desc: 'Menos tiempo corrigiendo, más tiempo personalizando la enseñanza.',
        href: '/school-lab/mejora-tu-material',
        iconPaths: ['M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'],
    },
    {
        title: 'Más tiempo en cocina', target: 'Hostelería',
        desc: 'Responde reseñas, gestiona reservas y atrae clientes automáticamente.',
        href: '/school-lab/mas-tiempo-para-cocina',
        iconPaths: ['M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'],
    },
    {
        title: 'Dedícate a la medicina', target: 'Sanidad',
        desc: 'Delega la burocracia clínica y agiliza informes con IA.',
        href: '/school-lab/dedicate-a-la-medicina',
        iconPaths: ['M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'],
    },
];

export default function SchoolLabPage() {
    return (
        <div className="v5-page">
            <ScrollAnimations />
            <Navbar />

            <main>

                {/* ── HERO ── */}
                <section
                    className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'url("/images/labs/learn-lab.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.35,
                        }}
                    />

                    {/* Ambient glow */}
                    <div
                        className="absolute top-0 right-0 pointer-events-none z-0"
                        style={{
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle at 60% 20%, rgba(237,232,223,0.03) 0%, transparent 55%)',
                        }}
                    />

                    <div className="v5-container relative z-10 w-full pt-20 pb-20 md:pt-0 md:pb-0">
                        <div className="flex flex-col items-start text-left max-w-[800px]">
                            <span
                                className="v5-reveal"
                                style={{
                                    fontFamily: 'var(--v5-font-mono)',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    color: '#999999',
                                    marginBottom: '28px',
                                }}
                            >
                                Learn Lab · Formación IA
                            </span>

                            <h1
                                className="v5-reveal"
                                style={{
                                    fontFamily: 'var(--v5-font-display)',
                                    fontSize: 'clamp(40px, 5vw, 72px)',
                                    fontWeight: 300,
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1.08,
                                    color: '#F5F5F0',
                                    transitionDelay: '80ms',
                                    marginBottom: '32px',
                                }}
                            >
                                Aprende a usar<br />
                                la IA<br />
                                <span style={{ color: 'rgba(245,245,240,0.35)' }}>antes de que sea tarde.</span>
                            </h1>

                            <p
                                className="v5-reveal"
                                style={{
                                    fontFamily: 'var(--v5-font-body)',
                                    fontSize: '18px',
                                    fontWeight: 300,
                                    lineHeight: 1.8,
                                    color: 'rgba(245,245,240,0.48)',
                                    maxWidth: '480px',
                                    transitionDelay: '160ms',
                                    marginBottom: '48px',
                                }}
                            >
                                El 39% de las habilidades laborales actuales serán obsoletas antes de 2030.
                                La IA no va a esperar. Nosotros tampoco.
                            </p>

                            <div
                                className="v5-reveal flex flex-col sm:flex-row gap-4 w-full"
                                style={{ transitionDelay: '220ms' }}
                            >
                                <Link
                                    href="#programas"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                        padding: '16px 36px', background: '#F5F5F0', color: '#080808',
                                        borderRadius: '0px', fontFamily: 'var(--v5-font-body)',
                                        fontSize: '15px', fontWeight: 500, textDecoration: 'none',
                                        transition: 'all 200ms ease',
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                                >
                                    Ver programas
                                </Link>
                                <Link
                                    href="#b2b"
                                    className="v5-btn-ghost flex items-center justify-center"
                                    style={{ borderRadius: '0px', padding: '16px 36px' }}
                                >
                                    Soy empresa
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ── B2C / B2B SPLIT ── */}
                <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="v5-container">
                        <div className="mb-20 v5-reveal flex flex-col items-start gap-4">
                            <span
                                style={{
                                    fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500,
                                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999999',
                                }}
                            >
                                ¿Para quién?
                            </span>
                            <h2
                                style={{
                                    fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 4vw, 64px)',
                                    fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#111111',
                                }}
                            >
                                Dos caminos.<br />
                                <span style={{ color: '#999999' }}>El mismo destino.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* B2C */}
                            <div
                                className="v5-reveal flex flex-col"
                                style={{
                                    background: '#F8F8F8', border: '1px solid #EBEBEB', borderRadius: '16px',
                                    overflow: 'hidden', transition: 'border-color 200ms ease, transform 200ms ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#CCCCCC'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#EBEBEB'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                                    <Image
                                        src="/images/school-individual.png"
                                        alt="Formación individual"
                                        fill
                                        className="object-cover"
                                        style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                                    />
                                </div>
                                <div className="flex flex-col flex-1" style={{ padding: '40px 32px' }}>
                                    <span
                                        style={{
                                            display: 'block', marginBottom: '16px',
                                            fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500,
                                            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999999',
                                        }}
                                    >
                                        B2C · Individuos
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#111111', marginBottom: '16px' }}>
                                        Para ti, si quieres aprender
                                    </h3>
                                    <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: '#666666', marginBottom: '32px' }}>
                                        9 programas diseñados para perfiles concretos. Desde mujeres de 40 a 60 años hasta médicos u hosteleros. Sin tecnicismos, orientado a resolver problemas reales.
                                    </p>
                                    <Link
                                        href="#programas"
                                        className="group"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, color: '#111111', textDecoration: 'none', transition: 'opacity 200ms ease' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                                    >
                                        Ver todos los programas
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </Link>
                                </div>
                            </div>

                            {/* B2B */}
                            <div
                                id="b2b"
                                className="v5-reveal flex flex-col"
                                style={{
                                    background: '#F8F8F8', border: '1px solid #EBEBEB', borderRadius: '16px',
                                    overflow: 'hidden', transitionDelay: '80ms',
                                    transition: 'border-color 200ms ease, transform 200ms ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#CCCCCC'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#EBEBEB'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                                    <Image
                                        src="/images/school-workshop.png"
                                        alt="Formación corporativa"
                                        fill
                                        className="object-cover"
                                        style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                                    />
                                </div>
                                <div className="flex flex-col flex-1" style={{ padding: '40px 32px' }}>
                                    <span
                                        style={{
                                            display: 'block', marginBottom: '16px',
                                            fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500,
                                            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999999',
                                        }}
                                    >
                                        B2B · Corporativo
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#111111', marginBottom: '16px' }}>
                                        Para tu empresa o institución
                                    </h3>
                                    <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: '#666666', marginBottom: '32px' }}>
                                        Formamos equipos en IA aplicada a sus flujos de trabajo. Colaboramos con fundaciones, colegios y ayuntamientos para llevar la IA a toda la organización.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link
                                            href="/school-lab/prepara-tu-equipo"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                                padding: '14px 28px', background: '#111111', color: '#FFFFFF',
                                                borderRadius: '0px', fontFamily: 'var(--v5-font-body)', fontSize: '14px',
                                                fontWeight: 400, textDecoration: 'none', transition: 'all 200ms ease',
                                            }}
                                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#333333'; }}
                                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#111111'; }}
                                        >
                                            Formar a mi equipo
                                        </Link>
                                        <Link
                                            href="/school-lab/instituciones"
                                            className="v5-btn-ghost-dark"
                                            style={{ borderRadius: '0px', padding: '14px 28px' }}
                                        >
                                            Área Instituciones
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ── BANNER CLAUDE CORPORATIVO ── */}
                <section style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="v5-container" style={{ paddingTop: '48px', paddingBottom: '0' }}>
                        <Link
                            href="/school-lab/prepara-tu-equipo"
                            className="v5-reveal"
                            style={{
                                display: 'block',
                                background: '#FFFFFF',
                                border: '1px solid #E0E0E0',
                                borderLeft: '4px solid #EA580C',
                                borderRadius: '16px',
                                padding: 'clamp(28px,4vw,40px)',
                                textDecoration: 'none',
                                transition: 'border-color 200ms ease, transform 200ms ease',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#EA580C'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = '#EA580C'; (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'; (e.currentTarget as HTMLElement).style.borderLeftColor = '#EA580C'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <span
                                        style={{
                                            fontFamily: 'var(--v5-font-mono)',
                                            fontSize: '10px',
                                            fontWeight: 600,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: '#EA580C',
                                        }}
                                    >
                                        ★ Nuevo
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: 'var(--v5-font-display)',
                                            fontSize: 'clamp(20px, 2.5vw, 28px)',
                                            fontWeight: 400,
                                            letterSpacing: '-0.02em',
                                            lineHeight: 1.15,
                                            color: '#111111',
                                            margin: 0,
                                        }}
                                    >
                                        Forma a tu equipo en Claude.{' '}
                                        <span style={{ color: '#999999' }}>La IA más potente del mercado.</span>
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: 'var(--v5-font-body)',
                                            fontSize: '15px',
                                            fontWeight: 300,
                                            lineHeight: 1.6,
                                            color: '#666666',
                                            margin: 0,
                                        }}
                                    >
                                        Talleres y programas intensivos diseñados para cada departamento de tu empresa.
                                    </p>
                                </div>
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '14px 28px',
                                        background: '#111111',
                                        borderRadius: '0px',
                                        fontFamily: 'var(--v5-font-body)',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        color: '#FFFFFF',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                    }}
                                >
                                    Ver formación corporativa →
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* ── PROGRAMS GRID ── */}
                <section id="programas" className="v5-section" style={{ backgroundColor: '#080808' }}>
                    <div className="v5-container">

                        <div className="v5-reveal flex flex-col items-start gap-4" style={{ marginBottom: '120px' }}>
                            <span
                                style={{
                                    fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500,
                                    letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
                                }}
                            >
                                Programas
                            </span>
                            <h2
                                style={{
                                    fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 4vw, 64px)',
                                    fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#F5F5F0',
                                }}
                            >
                                Especialización<br />
                                <span style={{ color: 'rgba(245,245,240,0.35)' }}>hiper-concreta.</span>
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300,
                                    lineHeight: 1.8, color: 'rgba(245,245,240,0.45)', maxWidth: '520px',
                                }}
                            >
                                No creemos en cursos genéricos. Cada programa está diseñado para un perfil concreto
                                con problemas reales y soluciones prácticas.
                            </p>
                        </div>

                        {/* Featured — Prepara tu equipo */}
                        <Link
                            href="/school-lab/prepara-tu-equipo"
                            className="group v5-reveal"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                background: 'rgba(255,255,255,0.025)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                textDecoration: 'none',
                                color: 'inherit',
                                marginBottom: '24px',
                                transition: 'border-color 300ms ease, transform 300ms ease',
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="flex flex-col justify-center" style={{ padding: 'clamp(32px,4vw,56px)' }}>
                                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: '20px' }}>
                                        B2B · Corporativo · Destacado
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F5F0', marginBottom: '16px' }}>
                                        Prepara tu equipo
                                    </h3>
                                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.45)', maxWidth: '420px', marginBottom: '32px' }}>
                                        Tu equipo puede trabajar más rápido y cometer menos errores si sabe cómo usar la IA corporativa. Casos de uso 100% reales, adaptados a vuestros procesos.
                                    </p>
                                    <span className="group-hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, color: '#F5F5F0', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        Ver programa corporativo
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </span>
                                </div>
                                <div className="hidden lg:block" style={{ position: 'relative', minHeight: '360px' }}>
                                    <Image
                                        src="/images/school-workshop.png"
                                        alt="Formación de equipos"
                                        fill
                                        className="object-cover"
                                        style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                                    />
                                </div>
                            </div>
                        </Link>

                        {/* B2C Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {programs.map((prog, i) => (
                                <Link
                                    key={prog.title}
                                    href={prog.href}
                                    className="v5-lab-card v5-reveal group flex flex-col"
                                    style={{ transitionDelay: `${i * 50}ms`, textDecoration: 'none', color: 'inherit' }}
                                >
                                    {/* Icon */}
                                    <div
                                        style={{
                                            marginBottom: '24px',
                                            width: '48px',
                                            height: '48px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(245,245,240,0.07)',
                                            borderRadius: '12px',
                                        }}
                                    >
                                        <svg
                                            width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="rgba(245,245,240,0.80)"
                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            {prog.iconPaths.map((d, idx) => <path key={idx} d={d} />)}
                                        </svg>
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500,
                                            letterSpacing: '0.15em', textTransform: 'uppercase',
                                            color: 'rgba(245,245,240,0.32)', marginBottom: '16px',
                                        }}
                                    >
                                        {prog.target}
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: 'var(--v5-font-display)', fontSize: '20px', fontWeight: 400,
                                            letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {prog.title}
                                    </h3>
                                    <p
                                        className="flex-1"
                                        style={{
                                            fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300,
                                            lineHeight: 1.7, color: 'rgba(245,245,240,0.40)', marginBottom: '24px',
                                        }}
                                    >
                                        {prog.desc}
                                    </p>
                                    <span
                                        className="group-hover:opacity-60"
                                        style={{
                                            fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 400,
                                            color: 'rgba(245,245,240,0.55)', display: 'inline-flex',
                                            alignItems: 'center', gap: '6px', transition: 'opacity 200ms ease',
                                        }}
                                    >
                                        Ver programa
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ── METHODOLOGY ── */}
                <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="v5-container">
                        <div className="mb-20 v5-reveal flex flex-col items-center text-center gap-4">
                            <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999999' }}>
                                Nuestra metodología
                            </span>
                            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#111111' }}>
                                Basada en evidencia,<br />
                                <span style={{ color: '#999999' }}>diseñada para humanos.</span>
                            </h2>
                            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: '#888888', maxWidth: '560px' }}>
                                Aprobada en base al meta-análisis SAGA 2025.
                                90% práctica empírica para vencer la curva del olvido.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { num: '01', title: 'Descúbrete', desc: 'La tecnología no tiene sentido si no sabes qué quieres amplificar. Empezamos rompiendo el muro del "yo no puedo".' },
                                { num: '02', title: 'Aprende lo que importa', desc: 'No teoría de libro. Habilidades reales de vida. Resuelves tus propios problemas, no ejercicios inventados.' },
                                { num: '03', title: 'Expándete con IA', desc: 'La IA no te reemplaza. Multiplica lo que ya eres. Aprenderás a usarla como un superpoder, no como una muleta.' },
                            ].map((step, i) => (
                                <div
                                    key={step.num}
                                    className="v5-reveal flex flex-col"
                                    style={{
                                        background: '#F8F8F8', border: '1px solid #EBEBEB', borderRadius: '16px',
                                        padding: 'clamp(32px,4vw,48px)', transitionDelay: `${i * 80}ms`,
                                    }}
                                >
                                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#CCCCCC', marginBottom: '24px' }}>
                                        {step.num}
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#111111', marginBottom: '16px' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#666666' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ── 3 FORMATS / PRICING ── */}
                <section className="v5-section" style={{ backgroundColor: '#080808' }}>
                    <div className="v5-container">
                        <div className="mb-20 v5-reveal flex flex-col items-center text-center gap-4">
                            <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)' }}>
                                Formatos
                            </span>
                            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#F5F5F0' }}>
                                Tres formatos,<br />
                                <span style={{ color: 'rgba(245,245,240,0.35)' }}>el mismo ADN.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Talleres */}
                            <Link
                                href="/school-lab/talleres"
                                className="v5-lab-card v5-reveal flex flex-col group"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: '24px' }}>
                                    2h · En vivo
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Talleres
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.40)', marginBottom: '32px' }}>
                                    Talleres grupales en vivo de 2 horas. Un tema específico, práctica inmediata, preguntas en tiempo real.
                                </p>
                                <span
                                    className="group-hover:opacity-60"
                                    style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'opacity 200ms ease' }}
                                >
                                    Ver talleres →
                                </span>
                            </Link>

                            {/* Intensivo — Featured */}
                            <Link
                                href="/school-lab/programa-intensivo"
                                className="v5-reveal flex flex-col relative group"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '20px',
                                    padding: '36px 40px',
                                    overflow: 'hidden',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    transition: 'border-color 200ms ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.30)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; }}
                            >
                                <span
                                    style={{
                                        position: 'absolute', top: '0', right: '0',
                                        padding: '6px 14px', background: '#F5F5F0', color: '#080808',
                                        fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500,
                                        letterSpacing: '0.12em', textTransform: 'uppercase',
                                        borderBottomLeftRadius: '12px',
                                    }}
                                >
                                    Más popular
                                </span>
                                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)', marginBottom: '24px' }}>
                                    6 semanas · Desde 490€
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Programa Intensivo
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.55)', marginBottom: '32px' }}>
                                    Acompañamiento personalizado con sesiones 1:1, proyectos reales de tu empresa y un plan de implementación concreto.
                                </p>
                                <span
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '100%', padding: '14px 24px', background: '#F5F5F0',
                                        color: '#080808', borderRadius: '0px', fontFamily: 'var(--v5-font-body)',
                                        fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                                    }}
                                >
                                    Solicitar plaza →
                                </span>
                            </Link>

                            {/* Comunidad */}
                            <Link
                                href="/school-lab/comunidad"
                                className="v5-lab-card v5-reveal flex flex-col group"
                                style={{ transitionDelay: '100ms', textDecoration: 'none', color: 'inherit' }}
                            >
                                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: '24px' }}>
                                    Mensual · Desde 29€
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Comunidad
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.40)', marginBottom: '32px' }}>
                                    Recursos semanales, sesiones en vivo y una red de personas aprendiendo IA a tu ritmo. Sin presión.
                                </p>
                                <span
                                    className="group-hover:opacity-60"
                                    style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'opacity 200ms ease' }}
                                >
                                    Unirse →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>


                {/* ── TRUST STRIP ── */}
                <section style={{ backgroundColor: '#080808', paddingTop: '40px', paddingBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="v5-container flex flex-col items-center gap-6">
                        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
                            Ya confían en Aether School
                        </span>
                        <div className="flex flex-wrap justify-center gap-8">
                            {['UAB', 'Colegio Virolai', 'Fundació Pere Tarrés', 'Ajuntament de Badalona'].map((name) => (
                                <span
                                    key={name}
                                    style={{
                                        fontFamily: 'var(--v5-font-display)', fontSize: '14px', fontWeight: 400,
                                        letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.20)',
                                        padding: '6px 14px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px',
                                    }}
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ── FINAL CTA ── */}
                <section className="v5-section relative overflow-hidden" style={{ backgroundColor: '#080808' }}>
                    <div className="v5-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <div className="v5-reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
                            <span style={{ display: 'block', marginBottom: '16px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>
                                ¿Empezamos?
                            </span>
                            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#F5F5F0', marginBottom: '28px' }}>
                                El primer paso siempre es el más difícil
                            </h2>
                            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.5)', maxWidth: '520px', margin: '0 auto 40px' }}>
                                ¿No sabes qué programa elegir? Cuéntanos tu situación y te orientamos en menos de 24h. Sin compromiso.
                            </p>
                            <Link
                                href="/systems-lab/sesion-de-claridad"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '8px', padding: '16px 32px', background: '#F5F5F0', color: '#080808',
                                    borderRadius: '0px', fontFamily: 'var(--v5-font-body)', fontSize: '15px',
                                    fontWeight: 400, textDecoration: 'none', transition: 'all 200ms ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                            >
                                Hablar con nuestro equipo
                            </Link>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,232,223,0.020) 0%, transparent 65%)', pointerEvents: 'none' }} />
                </section>

            </main>

            <Footer />
        </div>
    );
}
