"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiments } from "@/data/experiments";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const featuredSlugs = [
    'skyflex-shoes',
    'munchs-burger',
    'restaurai',
    'numa-suma-salut',
    'gestor-particulas-3d',
    'nuria-rostisseria'
  ];

  const featuredExperiments = featuredSlugs.map(slug =>
    experiments.find(e => e.slug === slug)
  ).filter(item => item !== undefined);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Nuestros Experimentos
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Innovación aplicada. Casos de uso reales donde la IA transforma negocios y experiencias.
            </p>
          </motion.div>
          <Link
            href="/experimentos"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            Ver todos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiments.map((project: any, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.link}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-[#82ff1f]/30 transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase truncate max-w-[70%]">
                      {project.type}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {project.description[0]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/experimentos"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            Ver todos los experimentos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
