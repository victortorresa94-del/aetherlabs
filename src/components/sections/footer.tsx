import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-80">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/LOGO-OK-1763511624593.png"
                  alt="Aether Labs"
                  fill
                  className="object-contain object-left invert"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Transformando lo complejo en simple con inteligencia artificial.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">
              Contacto
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="mailto:hola@aetherlabs.es" className="hover:text-gray-600 transition-colors duration-200">
                  hola@aetherlabs.es
                </a>
              </p>
              <p className="text-gray-600">
                Barcelona, España
              </p>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">
              Empresa
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-200 ease-out w-fit">
                Inicio
              </Link>
              <Link href="/servicios" className="hover:text-gray-600 transition-colors duration-200 ease-out w-fit">
                Servicios
              </Link>
              <Link href="/labs" className="hover:text-gray-600 transition-colors duration-200 ease-out w-fit">
                Labs
              </Link>
              <Link href="/proyectos" className="hover:text-gray-600 transition-colors duration-200 ease-out w-fit">
                Proyectos
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-gray-600 transition-colors duration-200 ease-out w-fit">
                Sobre Nosotros
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aether Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;