"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: [
      { text: "Aether Labs hizo un trabajo increíble diseñando el contenido visual para nuestro proyecto. ", highlighted: false },
      { text: "Realmente capturaron la esencia que buscábamos de forma perfecta.", highlighted: true },
    ],
    author: "Laura Martínez, Directora Creativa",
    image: "/images/testimonials/laura.png",
    alt: "Cliente satisfecho de Aether Labs",
  },
  {
    quote: [
      { text: "Lo primero que nos impresionó fue lo bien adaptadas que estaban las imágenes a nuestras necesidades específicas. El servicio no solo cumplió, sino que ", highlighted: false },
      { text: "superó nuestras expectativas creativas y de marca.", highlighted: true },
    ],
    author: "Carlos González, Director de Marketing",
    image: "/images/testimonials/carlos.png",
    alt: "Testimonio de cliente satisfecho"
  },
  {
    quote: [
      { text: "Aether Labs nos ayudó a revolucionar nuestro sector creando contenido completamente con IA. Incluso crearon vídeos promocionales que nos ayudaron a conseguir ", highlighted: false },
      { text: "resultados extraordinarios en tiempo récord.", highlighted: true },
    ],
    author: "Ana Rodríguez, CEO",
    image: "/images/testimonials/elena.png",
    alt: "Testimonio de cliente"
  },
  {
    quote: [
      { text: "Recurrimos a Aether Labs para crear contenido visual para nuestras redes sociales, y ", highlighted: false },
      { text: "los resultados han sido notables con un engagement impresionante.", highlighted: true },
    ],
    author: "David Fernández, Social Media Manager",
    image: "/images/testimonials/david.png",
    alt: "Testimonio cliente redes sociales"
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  React.useEffect(() => {
    if (!api) return;
  }, [api]);

  return (
    <section className="relative w-full bg-black text-white py-24 overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map(({ quote, author, image, alt }, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                  <div className="lg:w-3/5 relative text-center lg:text-left">
                    <p className="absolute -top-16 lg:-top-12 -left-4 lg:-left-12 text-[120px] font-serif text-zinc-800" aria-hidden="true">
                      "
                    </p>
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl leading-relaxed font-light">
                        {quote.map((part, i) => (
                          <span key={i} className={part.highlighted ? `text-purple-400` : ""}>
                            {part.text}
                          </span>
                        ))}
                      </p>
                      <p className="mt-8 text-sm text-[#9ca3af]">
                        {author}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-2/5 w-full max-w-xs sm:max-w-sm lg:max-w-none flex-shrink-0">
                    <Image
                      src={image}
                      alt={alt}
                      width={480}
                      height={480}
                      className="rounded-2xl shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/10 text-white border-none hover:bg-white/20 transition-all duration-200" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/10 text-white border-none hover:bg-white/20 transition-all duration-200" />
      </Carousel>
    </section>
  );
}