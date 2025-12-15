
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { experiments } from '@/data/experiments';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2, FlaskConical, AlertTriangle } from 'lucide-react';

export async function generateStaticParams() {
    return experiments.map((experiment) => ({
        slug: experiment.slug,
    }));
}

export default async function ExperimentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = experiments.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                <div className="container relative z-10">
                    <Link href="/experimentos" className="inline-flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Volver a experimentos
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                                <FlaskConical className="w-4 h-4 text-[#82ff1f]" />
                                <span className="text-xs font-medium text-white/80 uppercase tracking-widest">{project.type}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl text-[#a0a0a0] leading-relaxed mb-8">
                                {project.longDescription || project.description[0]}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-[#d0d0d0]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Demo/Try Button */}
                            {project.demoLink && (
                                <Link
                                    href={project.demoLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#82ff1f] text-black font-bold hover:bg-[#72e01b] transition-colors"
                                >
                                    Probar Experimento <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}

                            {project.status === 'Internal' || project.status === 'Private' ? (
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm">
                                    <AlertTriangle className="w-4 h-4" />
                                    <span>Herramienta de uso interno. No disponible para el público general.</span>
                                </div>
                            ) : null}

                        </div>

                        <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={`object-cover ${project.imagePosition || 'object-center'}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
                <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-16">
                            {project.problem && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm">✕</span>
                                        El Problema
                                    </h3>
                                    <p className="text-[#a0a0a0] leading-relaxed text-lg">
                                        {project.problem}
                                    </p>
                                </div>
                            )}
                            {project.solution && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#82ff1f]/20 text-[#82ff1f] flex items-center justify-center text-sm">✓</span>
                                        La Solución
                                    </h3>
                                    <p className="text-[#a0a0a0] leading-relaxed text-lg">
                                        {project.solution}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Key Features / Bullet Points */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Características Clave</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {project.description.map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <CheckCircle2 className="w-8 h-8 text-[#82ff1f] mb-4" />
                                <p className="text-lg font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
