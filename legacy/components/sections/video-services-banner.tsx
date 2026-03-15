"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const VideoServicesBanner = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Video de servicios"
        >
          <source src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              Transformamos Ideas en Realidad Digital
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Desde contenido visual impactante hasta automatizadores inteligentes. 
              Hacemos que la tecnología compleja sea accesible para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Explora Nuestros Servicios
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoServicesBanner;
