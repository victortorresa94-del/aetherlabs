import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-[#1a1a1a]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-80">
                <Image
                  src="/images/aether-logo-white.png"
                  alt="Aether Labs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-xs">
              Transformando lo complejo en simple con inteligencia artificial.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contacto
            </h3>
            <div className="space-y-2 text-sm text-[#a0a0a0]">
              <p>
                <a href="mailto:hola@aetherlabs.es" className="hover:text-white transition-colors duration-200">
                  hola@aetherlabs.es
                </a>
              </p>
              <p>
                Barcelona, España
              </p>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Empresa
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-[#a0a0a0]">
              <Link href="/" className="hover:text-white transition-colors duration-200 ease-out w-fit">
                Inicio
              </Link>
              <Link href="/servicios" className="hover:text-white transition-colors duration-200 ease-out w-fit">
                Servicios
              </Link>
              <Link href="/labs" className="hover:text-white transition-colors duration-200 ease-out w-fit">
                Labs
              </Link>
              <Link href="/proyectos" className="hover:text-white transition-colors duration-200 ease-out w-fit">
                Proyectos
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-white transition-colors duration-200 ease-out w-fit">
                Sobre Nosotros
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] text-center text-xs text-[#666]">
          <p>&copy; {new Date().getFullYear()} Aether Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;