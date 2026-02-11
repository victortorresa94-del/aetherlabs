import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border transition-colors duration-300 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-[45px] w-[184px]">
                <Image
                  src="/aether-logo-white.png"
                  alt="Aether Labs"
                  fill
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transformando lo complejo en simple con inteligencia artificial.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Contacto
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:hola@aetherlabs.es" className="hover:text-foreground transition-colors duration-200">
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
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Empresa
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors duration-200 ease-out w-fit">
                Inicio
              </Link>
              <Link href="/servicios" className="hover:text-foreground transition-colors duration-200 ease-out w-fit">
                Servicios
              </Link>
              <Link href="/labs" className="hover:text-foreground transition-colors duration-200 ease-out w-fit">
                Labs
              </Link>
              <Link href="/proyectos" className="hover:text-foreground transition-colors duration-200 ease-out w-fit">
                Proyectos
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-foreground transition-colors duration-200 ease-out w-fit">
                Sobre Nosotros
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-xs text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} Aether Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;