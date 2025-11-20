import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/LOGO-OK-1763511624593.png"
                alt="Aether Labs"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0"
              />
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Transformando lo complejo en simple con inteligencia artificial.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-uppercase-label text-black mb-6 tracking-wider">
              Contacto
            </h3>
            <div className="space-y-3 text-base">
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
            <h3 className="text-uppercase-label text-black mb-6 tracking-wider">
              Empresa
            </h3>
            <nav className="flex flex-col space-y-3 text-base">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-200 ease-out">
                Inicio
              </Link>
              <Link href="/servicios" className="hover:text-gray-600 transition-colors duration-200 ease-out">
                Servicios
              </Link>
              <Link href="/labs" className="hover:text-gray-600 transition-colors duration-200 ease-out">
                Labs
              </Link>
              <Link href="/proyectos" className="hover:text-gray-600 transition-colors duration-200 ease-out">
                Proyectos
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-gray-600 transition-colors duration-200 ease-out">
                Sobre Nosotros
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Aether Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;