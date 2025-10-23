// components/Footer.tsx
"use client";

import Link from "next/link";

/**
 * SECTION: Footer
 * - bg oscuro, 3 columnas, barra inferior
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-900 text-gray-100">
      <div className="container grid md:grid-cols-3 gap-8">
        {/* Col 1: Marca */}
        <div>
          <div className="font-semibold text-lg">Aether Labs</div>
          <p className="text-sm text-gray-300 mt-2">
            El futuro es hoy. Inteligencia artificial práctica, sin complicaciones.
          </p>
        </div>

        {/* Col 2: Enlaces */}
        <div>
          <div className="font-semibold mb-3">Enlaces</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#que-hacemos" className="hover:text-[#5BA8A0]">Labs</a></li>
            <li><a href="#crea-tu-ia" className="hover:text-[#5BA8A0]">Crea tu IA</a></li>
            <li><a href="#casos-reales" className="hover:text-[#5BA8A0]">Casos Reales</a></li>
            <li><a href="#contacto" className="hover:text-[#5BA8A0]">Contacto</a></li>
            <li><Link href="/privacy" className="hover:text-[#5BA8A0]">Política de privacidad</Link></li>
          </ul>
        </div>

        {/* Col 3: Contacto y redes */}
        <div>
          <div className="font-semibold mb-3">Contacto</div>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://wa.me/34627281459"
                aria-label="WhatsApp Aether Labs"
                className="hover:text-[#5BA8A0]"
                title="Escríbenos por WhatsApp"
              >WhatsApp</a>
            </li>
            <li>
              <a href="mailto:hola@aetherlabs.com" aria-label="Email Aether Labs" className="hover:text-[#5BA8A0]">Email</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/aetherlabs" aria-label="LinkedIn" className="hover:text-[#5BA8A0]" title="Síguenos en LinkedIn">LinkedIn</a>
            </li>
            <li>
              <a href="https://instagram.com/aetherlabs" aria-label="Instagram" className="hover:text-[#5BA8A0]" title="Síguenos en Instagram">Instagram</a>
            </li>
            <li>
              <a href="https://youtube.com/@aetherlabs" aria-label="YouTube" className="hover:text-[#5BA8A0]" title="Síguenos en YouTube">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>© {year} Aether Labs. Todos los derechos reservados.</span>
          <span className="text-xs">Nota legal: este sitio es un ejemplo en desarrollo. Actualiza los datos de empresa antes del lanzamiento.</span>
        </div>
      </div>
    </footer>
  );
}
