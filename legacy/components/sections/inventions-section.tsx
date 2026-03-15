import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Beaker } from "lucide-react";

const inventions = [
    {
        title: "Partículas 3D",
        category: "Computer Vision",
        description: "Sistema de control gestual en tiempo real que fusiona el mundo físico con el digital.",
        image: "/images/labs/computer-vision-card.png",
        link: "/labs/vision"
    },
    {
        title: "Numa - Assistant",
        category: "Chatbot IA",
        description: "Asistente clínico inteligente que gestiona citas y dudas 24/7 para Suma Salut.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        link: "/proyectos/suma-salut"
    },
    {
        title: "Editor Fotos IA",
        category: "Creative Lab",
        description: "Herramienta de generación y edición masiva de activos para ecommerce.",
        image: "/images/creative/skyflex.jpg",
        link: "/labs/creative"
    }
];

const InventionsSection = () => {
    return (
        <section className="py-24 bg-black text-white border-t border-white/5">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-6">
                            <Beaker size={12} />
                            Aether Inventions
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                            Nuestros Inventos
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-xl">
                            Desarrollos propios donde llevamos la tecnología al límite para solucionar problemas reales.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inventions.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-[#82ff1f]/50 transition-colors"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase">
                                        {item.category}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InventionsSection;
