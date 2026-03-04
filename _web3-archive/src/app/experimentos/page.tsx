import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { categories, experiments as projects } from '@/data/experiments';

export default function ExperimentosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Laboratorio & Portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">experimentos</span>
                    </h1>
                    <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed">
                        Aquí es donde "cacharreamos". Una colección de proyectos para clientes, herramientas internas que usamos a diario y experimentos locos de fin de semana.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat) => (
                            <div key={cat.id} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                                <p className="text-[#a0a0a0] text-sm">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Feed */}
            <section className="py-24">
                <div className="container">
                    <div className="space-y-32">
                        {categories.map((category) => {
                            const categoryProjects = projects.filter(p => p.category === category.id);
                            if (categoryProjects.length === 0) return null;

                            return (
                                <div key={category.id} className="relative">
                                    <div className="flex items-end gap-4 mb-12 border-b border-white/10 pb-4">
                                        <h2 className="text-3xl md:text-3xl font-bold flex items-center gap-3">
                                            <category.icon className="w-6 h-6" />
                                            {category.title}
                                        </h2>
                                        <span className="text-[#a0a0a0] text-lg font-mono mb-1">
                                            / 0{projects.filter(p => p.category === category.id).length}
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {categoryProjects.map((project: any, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
                                            >
                                                {/* Image Area */}
                                                <div className="relative h-[400px] bg-[#151515] group-hover:bg-[#1a1a1a] transition-colors overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
                                                    {project.image.startsWith('/') ? (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className={`object-cover ${project.imagePosition || 'object-center'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className={`object-cover ${project.imagePosition || 'object-center'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-8 flex-1 flex flex-col relative z-20">
                                                    <div className="mb-6">
                                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-[#82ff1f] font-medium text-sm mb-4 uppercase tracking-wide">
                                                            {project.type}
                                                        </p>

                                                        {/* Bullet Points Description */}
                                                        <ul className="space-y-2">
                                                            {Array.isArray(project.description) ? (
                                                                project.description.map((item, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-[#a0a0a0] text-sm leading-relaxed">
                                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                                                        {item}
                                                                    </li>
                                                                ))
                                                            ) : (
                                                                <p className="text-[#a0a0a0] leading-relaxed">{project.description}</p>
                                                            )}
                                                        </ul>
                                                    </div>

                                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.map((tag, tIdx) => (
                                                                <span key={tIdx} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[#d0d0d0] border border-white/5">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {project.link && (
                                                            <Link
                                                                href={project.link}
                                                                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                                                            >
                                                                Ver Detalles <ArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
