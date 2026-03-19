'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const programs = [
    { title: 'Empodérate con IA', target: 'Mujeres 40-60', desc: 'Salud, creatividad y comunicación sin tecnicismos. Desde tu móvil.', href: '/school-lab/empoderate-con-ia' },
    { title: 'Conéctate con el mundo', target: 'Personas 65+', desc: 'IA como asistente diario para recordar, contactar y simplificar.', href: '/school-lab/conectate-con-el-mundo' },
    { title: 'Aprende a crear', target: 'Niños 6-12', desc: 'Cuentos, mundos e historias potenciando la imaginación con IA.', href: '/school-lab/aprende-a-crear' },
    { title: 'Descubre tu futuro', target: 'Jóvenes 13-18', desc: 'Explora profesiones del futuro y crea proyectos reales con tecnología.', href: '/school-lab/descubre-tu-futuro' },
    { title: 'Monta tu negocio', target: 'Emprendedores', desc: 'Web, logo, contenido y ventas — sin saber programar.', href: '/school-lab/monta-tu-negocio' },
    { title: 'Mejora tu material', target: 'Profesores', desc: 'Menos tiempo corrigiendo, más tiempo personalizando la enseñanza.', href: '/school-lab/mejora-tu-material' },
    { title: 'Más tiempo en cocina', target: 'Hostelería', desc: 'Responde reseñas, gestiona reservas y atrae clientes automáticamente.', href: '/school-lab/mas-tiempo-para-cocina' },
    { title: 'Dedícate a la medicina', target: 'Sanidad', desc: 'Delega la burocracia clínica y agiliza informes con IA.', href: '/school-lab/dedicate-a-la-medicina' },
];

export default function SchoolLabPage() {
    return (
        <div className="v5-page">
            <ScrollAnimations />
            <Navbar />

            <main>

                {/* ── HERO ── */}
                <section
                    className="relative flex items-center overflow-hidden"
                    style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
                >
                    {/* Ambient glow */}
                    <div
                        className="absolute top-0 right-0 pointer-events-none"
                        style={{
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle at 60% 20%, rgba(237,232,223,0.03) 0%, transparent 55%)',
                        }}
                    />

                    <div className="v5-container relative z-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">

                            {/* Left — Text */}
                            <div className="flex flex-col items-start text-left">
                                <span
                                    className="v5-reveal"
                                    style={{
                                        fontFamily: 'var(--v5-font-mono)',
                                        fontSize: '11px',
                                        fontWeight: 500,
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: '#666666',
                                        marginBottom: '28px',
                                    }}
                                >
                                    School Lab · Formación IA
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
                                    className="v5-reveal flex flex-col sm:flex-row gap-4"
                                    style={{ transitionDelay: '220ms' }}
                                >
                                    <Link
                                        href="#programas"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '8px',
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
                                        className="v5-btn-ghost"
                                        style={{ borderRadius: '0px', padding: '16px 36px' }}
                                    >
                                        Soy empresa
                                    </Link>
                                </div>
                            </div>

                            {/* Right — Image */}
                            <div className="hidden lg:flex w-full justify-end">
                                <div
                                    className="v5-reveal relative w-full max-w-[460px]"
                                    style={{ transitionDelay: '100ms' }}
                                >
                                    <div
                                        className="card-3d-object card-3d-object-shadow"
                                        style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}
                                    >
                                        <Image
                                            src="/images/school-workshop.png"
                                            alt="Formación IA — School Lab"
                                            fill
                                            className="object-cover"
                                            style={{ filter: 'contrast(1.05) brightness(1.02)', mixBlendMode: 'luminosity' }}
                                        />
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{ background: 'rgba(237,232,223,0.20)', mixBlendMode: 'color' }}
                                        />
                                    </div>
                                </div>
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


                {/* ── PROGRAMS GRID ── */}
                <section id="programas" className="v5-section" style={{ backgroundColor: '#080808' }}>
                    <div className="v5-container">

                        <div className="mb-20 v5-reveal flex flex-col items-start gap-4">
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
                            {/* Taller */}
                            <div
                                className="v5-lab-card v5-reveal flex flex-col"
                            >
                                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: '24px' }}>
                                    90 min · Primer paso
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Taller de Descubrimiento
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.40)', marginBottom: '32px' }}>
                                    El primer paso seguro. Sales habiendo creado algo con IA directamente desde tu móvil o portátil. Sin agobios.
                                </p>
                                <Link
                                    href="/contacto"
                                    className="group"
                                    style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'opacity 200ms ease' }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                                >
                                    Ver fechas →
                                </Link>
                            </div>

                            {/* Intensivo — Featured */}
                            <div
                                className="v5-reveal flex flex-col relative"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '20px',
                                    padding: '36px 40px',
                                    overflow: 'hidden',
                                }}
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
                                    1 semana · Desde 60€
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Programa Intensivo
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.55)', marginBottom: '32px' }}>
                                    5 sesiones de 2h donde vas en serio. Desarrollas un proyecto real terminado al final de la semana, guiado paso a paso.
                                </p>
                                <Link
                                    href="/contacto"
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '100%', padding: '14px 24px', background: '#F5F5F0',
                                        color: '#080808', borderRadius: '0px', fontFamily: 'var(--v5-font-body)',
                                        fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                                        transition: 'background 200ms ease',
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
                                >
                                    Matricularme →
                                </Link>
                            </div>

                            {/* Comunidad */}
                            <div
                                className="v5-lab-card v5-reveal flex flex-col"
                                style={{ transitionDelay: '100ms' }}
                            >
                                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: '24px' }}>
                                    Mensual · Alumni
                                </span>
                                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F5F0', marginBottom: '16px' }}>
                                    Comunidad Aether
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,245,240,0.40)', marginBottom: '32px' }}>
                                    Novedades, soporte continuo, herramientas probadas y una red de personas aprendiendo igual que tú.
                                </p>
                                <Link
                                    href="/contacto"
                                    className="group"
                                    style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'opacity 200ms ease' }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                                >
                                    Acceso Alumni →
                                </Link>
                            </div>
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
                                href="/contacto"
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
