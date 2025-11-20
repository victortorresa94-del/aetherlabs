import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardData {
  imageSrc: string;
  title: React.ReactNode;
  altText: string;
  link: string;
}

const workItems: WorkCardData[] = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/modern-ai-automation-dashboard-with-holo-019d1f49-20251118154107.jpg",
    title: <>Automatización Inteligente<br />Para Empresas</>,
    altText: "Dashboard de automatización con IA",
    link: "/proyectos/automatizacion",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/abstract-ai-generated-creative-content-c-b7ecf20f-20251118154106.jpg",
    title: <>Contenido Visual<br />Generado con IA</>,
    altText: "Arte digital creado con inteligencia artificial",
    link: "/proyectos/contenido-visual",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/futuristic-laboratory-setting-with-holog-59bc4d7f-20251118154107.jpg",
    title: <>Laboratorios de<br />Experimentación IA</>,
    altText: "Laboratorio futurista de inteligencia artificial",
    link: "/laboratorios",
  },
];

const WorkCard = ({ imageSrc, title, altText, link }: WorkCardData) => {
  return (
    <Link
      href={link}
      className="block group overflow-hidden rounded-[1.5rem] relative aspect-[4/5]"
    >
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="(max-width: 1023px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
        <h3 className="text-[1.375rem] font-medium leading-tight mb-4">
          {title}
        </h3>
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-neutral-300 group-hover:text-white transition-colors">
          VER MÁS
        </p>
      </div>
    </Link>
  );
};

const FeaturedWorkCards = () => {
    return (
        <section className="bg-black w-full py-16">
            <div className="max-w-[1600px] mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Descubre cómo transformamos ideas en soluciones reales
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {workItems.map((item, index) => (
                        <WorkCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorkCards;