import Link from 'next/link';

const HeroVideoSection = () => {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center bg-black">
            {/* Video de fondo */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    // IMPORTANTE: La ruta empieza con / porque apunta a la carpeta public
                    src="/videos/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Fondo animado de IA"
                >
                    Tu navegador no soporta video.
                </video>
                {/* Overlay oscuro para que el texto se lea bien */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 container">
                <div className="max-w-5xl">
                    <h1 className="font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-[-0.02em] mb-6">
                        Donde las ideas se hacen realidad.
                    </h1>
                    <p className="text-lg md:text-xl font-normal max-w-2xl text-[#c8c8c8] leading-relaxed">
                        Combinamos la creatividad y la tecnología para crear soluciones con IA, para que ésta sea entendible, segura y accesible para cualquier negocio.
                    </p>
                    <Link
                        href="#servicios"
                        className="mt-10 inline-block bg-white text-black font-semibold text-sm tracking-wide py-3.5 px-9 rounded-full transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg"
                    >
                        Mira cómo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroVideoSection;