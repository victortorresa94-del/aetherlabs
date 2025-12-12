import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Resultados IA Generativa para empresas
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Campañas visuales de alto impacto creadas 100% con algoritmos generativos.
            </p>
          </div>
          <Link
            href="/experimentos"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            Ver todos los experimentos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project: Munch's Burger Club - Large Card */}
          <Link href="/proyectos/munchs-burger-club" className="group relative block lg:col-span-2 aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-3xl bg-zinc-900">
            <Image
              src="/images/munchs/merch-shirt.jpg"
              alt="Munch's Burger Club - Cocina"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <p className="text-sm font-medium tracking-wider uppercase mb-2 text-green-400">Branding & Identidad</p>
              <h3 className="text-3xl md:text-5xl font-semibold mb-4">Munch's Burger Club</h3>
              <p className="text-lg text-white/80 max-w-lg">
                Creación de identidad visual completa utilizando IA generativa. Desde el logotipo hasta el packaging.
              </p>
            </div>
          </Link>

          {/* Secondary Project 1 - Skyflex */}
          <Link href="/proyectos/skyflex" className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-900">
            <Image
              src="/images/skyflex/main.jpg"
              alt="Skyflex Campaign"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-xs font-medium">Moda & IA</span>
                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Skyflex Campaign</h3>
              <p className="text-zinc-300 text-sm">Campaña de moda generada 100% con IA.</p>
            </div>
          </Link>

          {/* Secondary Project 2 - Virtual Staging */}
          <Link href="/proyectos/luxhome" className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-900">
            <Image
              src="/images/creative/real-estate.jpg"
              alt="Virtual Staging"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-xs font-medium">Real Estate</span>
                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Virtual Staging</h3>
              <p className="text-zinc-300 text-sm">Transformación de espacios vacíos en hogares soñados.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
