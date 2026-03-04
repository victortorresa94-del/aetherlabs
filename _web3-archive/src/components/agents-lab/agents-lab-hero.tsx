'use client'

import React, { useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import { Users, Brain, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react'

// ─── Aurora Canvas (same system as main hero) ─────────────────────────────────
function AuroraCanvas() {
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

        const draw = (
            cx: number, cy: number,
            rx: number, ry: number,
            color1: string, color2: string,
            phase: number
        ) => {
            const x = cx + Math.sin(t.current + phase) * rx * 0.3
            const y = cy + Math.cos(t.current * 0.7 + phase) * ry * 0.22
            const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry))
            grad.addColorStop(0, color1)
            grad.addColorStop(1, color2)
            ctx.globalCompositeOperation = 'screen'
            ctx.beginPath()
            ctx.ellipse(x, y, rx, ry, t.current * 0.08, 0, Math.PI * 2)
            ctx.fillStyle = grad
            ctx.fill()
        }

        const w = canvas.width, h = canvas.height
        draw(w * 0.2, h * 0.35, w * 0.4, h * 0.5, 'rgba(110,40,240,0.16)', 'rgba(0,0,0,0)', 0)
        draw(w * 0.75, h * 0.3, w * 0.35, h * 0.48, 'rgba(0,160,255,0.11)', 'rgba(0,0,0,0)', 2.1)
        draw(w * 0.5, h * 0.65, w * 0.48, h * 0.42, 'rgba(170,30,210,0.08)', 'rgba(0,0,0,0)', 4.2)
        draw(w * 0.1, h * 0.7, w * 0.28, h * 0.32, 'rgba(40,100,255,0.09)', 'rgba(0,0,0,0)', 1.5)
        draw(w * 0.88, h * 0.6, w * 0.26, h * 0.36, 'rgba(0,210,170,0.06)', 'rgba(0,0,0,0)', 3.3)
    })

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
        />
    )
}

// ─── Particles ────────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.4 + 0.4,
    dur: 9 + Math.random() * 13,
    delay: Math.random() * 9,
    dx: (Math.random() - 0.5) * 5,
    dy: -(4 + Math.random() * 7),
    opacity: 0.12 + Math.random() * 0.3,
}))

function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLES.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white"
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
                    animate={{
                        x: [0, p.dx, -p.dx * 0.5, 0],
                        y: [0, p.dy, p.dy * 1.5, p.dy * 0.3, 0],
                        opacity: [p.opacity, p.opacity * 1.4, 0, 0, p.opacity],
                    }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
}

// ─── Grid ─────────────────────────────────────────────────────────────────────
function Grid() {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(ellipse 85% 70% at 50% 40%, black 0%, transparent 100%)',
            }}
        />
    )
}

// ─── Ambient glows ────────────────────────────────────────────────────────────
function Glows() {
    return (
        <>
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '65vw', height: '50vh',
                    top: '5%', left: '50%', translateX: '-50%',
                    background: 'radial-gradient(ellipse at center, rgba(110,40,255,0.13) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '40vw', height: '30vh',
                    top: '10%', left: '65%',
                    background: 'radial-gradient(ellipse at center, rgba(0,150,255,0.07) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #000000 0%, transparent 100%)' }}
            />
        </>
    )
}

// ─── Noise ────────────────────────────────────────────────────────────────────
function Noise() {
    return (
        <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px',
            }}
        />
    )
}

// ─── Steps ────────────────────────────────────────────────────────────────────
const steps = [
    { icon: <Users className="w-4 h-4" />, title: 'Define su Rol', description: 'Personalidad, objetivos y tono de comunicación en segundos.', progress: 100 },
    { icon: <Brain className="w-4 h-4" />, title: 'Entrena su Cerebro', description: 'Base de conocimiento propia: FAQs, catálogo, procesos internos.', progress: 100 },
    { icon: <Target className="w-4 h-4" />, title: 'Crea su Estrategia', description: 'Configura pasos y objetivos para maximizar cierres y cualificación.', progress: 100 },
    { icon: <Zap className="w-4 h-4" />, title: 'Conecta su Entorno', description: 'Integra tu CRM, WhatsApp, Instagram o cualquier canal en un clic.', progress: 100 },
    { icon: <TrendingUp className="w-4 h-4" />, title: 'Activa y Mide', description: 'Despliega en vivo, analiza conversaciones y monitoriza el retorno.', progress: 100 },
]

// ─── Main Component ───────────────────────────────────────────────────────────
const AgentsLabHero = () => {
    const scrollToWizard = () => {
        const wizard = document.getElementById('agents-lab-wizard')
        if (wizard) wizard.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-24 px-6">

            {/* ── Background layers ── */}
            <Grid />
            <AuroraCanvas />
            <Glows />
            <Particles />
            <Noise />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 120% 100% at 50% 0%, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left — Headline block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-start gap-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">AETHER LABS · Agentes IA</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                            Crea tu propio<br />
                            <span
                                className="font-instrument italic font-normal"
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(130,255,31,0.85) 60%, rgba(0,180,255,0.8) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Agente IA
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="font-light text-lg text-zinc-400 max-w-lg leading-relaxed">
                            Diseña y despliega agentes comerciales inteligentes con nuestro sistema modular. Adapta cada aspecto para tus procesos de venta y maximiza la conversión.
                        </p>

                        {/* CTA */}
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={scrollToWizard}
                            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-base transition-all duration-300"
                        >
                            Crear mi agente IA
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Social proof */}
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex -space-x-2">
                                {['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face',
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face',
                                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'].map((src, i) => (
                                        <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                                    ))}
                            </div>
                            <p className="text-xs text-zinc-500">
                                <span className="text-white font-semibold">+50 empresas</span> ya tienen su agente activo
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Steps cards */}
                    <div className="flex flex-col gap-3">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 + idx * 0.09, ease: 'easeOut' }}
                                className="group relative flex items-center gap-5 px-6 py-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default"
                            >
                                {/* Step number */}
                                <div className="flex-none w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-white mb-0.5">{step.title}</p>
                                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-1">{step.description}</p>
                                </div>

                                {/* Done indicator */}
                                <div className="flex-none w-5 h-5 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/30 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                </div>

                                {/* Hover glow line */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-8 bg-[#82ff1f]/50 rounded-full transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AgentsLabHero
