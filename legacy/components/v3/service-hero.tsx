'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useAnimationFrame } from 'framer-motion'

// ─── Aurora ─────────────────────────────────────────────────────────────────
function AuroraCanvas({ hue1 = '110,40,240', hue2 = '0,160,255' }: { hue1?: string; hue2?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const t = useRef(0)

    useAnimationFrame(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        t.current += 0.0025
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const draw = (cx: number, cy: number, rx: number, ry: number, c1: string, c2: string, phase: number) => {
            const x = cx + Math.sin(t.current + phase) * rx * 0.3
            const y = cy + Math.cos(t.current * 0.7 + phase) * ry * 0.22
            const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry))
            g.addColorStop(0, c1); g.addColorStop(1, c2)
            ctx.globalCompositeOperation = 'screen'
            ctx.beginPath()
            ctx.ellipse(x, y, rx, ry, t.current * 0.08, 0, Math.PI * 2)
            ctx.fillStyle = g; ctx.fill()
        }

        const w = canvas.width, h = canvas.height
        draw(w * 0.2, h * 0.35, w * 0.4, h * 0.5, `rgba(${hue1},0.16)`, 'rgba(0,0,0,0)', 0)
        draw(w * 0.75, h * 0.3, w * 0.35, h * 0.48, `rgba(${hue2},0.11)`, 'rgba(0,0,0,0)', 2.1)
        draw(w * 0.5, h * 0.65, w * 0.48, h * 0.42, 'rgba(170,30,210,0.07)', 'rgba(0,0,0,0)', 4.2)
        draw(w * 0.88, h * 0.55, w * 0.26, h * 0.36, 'rgba(0,210,170,0.05)', 'rgba(0,0,0,0)', 3.3)
    })

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'screen' }} />
}

// ─── Particles ───────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 1.3 + 0.4, dur: 9 + Math.random() * 12,
    delay: Math.random() * 9, dx: (Math.random() - 0.5) * 5,
    dy: -(3 + Math.random() * 6), opacity: 0.1 + Math.random() * 0.25,
}))

// ─── Props ────────────────────────────────────────────────────────────────────
interface ServiceHeroProps {
    badge: string
    titleLine1: string       // Bold line 1
    titleLine2?: string      // Normal text before accent (line 2)
    titleAccent: string      // 1-2 italic gradient words
    titlePost?: string       // Normal text after accent (same line)
    subtitle: string
    ctaLabel?: string
    ctaHref?: string
}

// Consistent aurora palette — same as /agentes
const HUE1 = '110,40,240'
const HUE2 = '0,160,255'
const GRAD = 'linear-gradient(135deg,#ffffff 0%,rgba(123,255,0,0.85) 55%,rgba(0,180,255,0.8) 100%)'

// ─── Component ────────────────────────────────────────────────────────────────
export function ServiceHero({
    badge,
    titleLine1,
    titleLine2,
    titleAccent,
    titlePost,
    subtitle,
    ctaLabel = 'Solicitar diagnóstico',
    ctaHref = '/contacto',
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-[115dvh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20 px-6">

            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.028) 1px,transparent 1px)`,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(ellipse 85% 70% at 50% 40%, black 0%, transparent 100%)',
            }} />

            {/* Aurora */}
            <AuroraCanvas hue1={HUE1} hue2={HUE2} />

            {/* Glows */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
                width: '65vw', height: '50vh', top: '5%', left: '50%', translateX: '-50%',
                background: `radial-gradient(ellipse at center,rgba(${HUE1},0.13) 0%,transparent 70%)`,
                filter: 'blur(50px)',
            }} animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="absolute rounded-full pointer-events-none" style={{
                width: '40vw', height: '30vh', top: '10%', left: '65%',
                background: `radial-gradient(ellipse at center,rgba(${HUE2},0.07) 0%,transparent 70%)`,
                filter: 'blur(60px)',
            }} animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {PARTICLES.map((p) => (
                    <motion.div key={p.id} className="absolute rounded-full bg-white"
                        style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
                        animate={{ x: [0, p.dx, -p.dx * 0.5, 0], y: [0, p.dy, p.dy * 1.5, p.dy * 0.3, 0], opacity: [p.opacity, p.opacity * 1.4, 0, 0, p.opacity] }}
                        transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            {/* Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
            }} />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to top,#050505 0%,transparent 100%)' }} />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 120% 100% at 50% 0%,transparent 40%,rgba(0,0,0,0.55) 100%)' }} />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8">

                {/* Badge */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7bff00] animate-pulse" />
                    <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{badge}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-display font-normal text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white">
                    <span className="font-bold">{titleLine1}</span>
                    <br />
                    {titleLine2 && <>{titleLine2}{' '}</>}
                    <span className="font-instrument italic font-normal" style={{
                        background: GRAD,
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                        {titleAccent}
                    </span>
                    {titlePost && <>{' '}{titlePost}</>}
                </motion.h1>

                {/* Subtitle */}
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22 }}
                    className="font-light text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    {subtitle}
                </motion.p>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }}>
                    <Link href={ctaHref}
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:scale-105 active:scale-95 transition-transform">
                        {ctaLabel}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
