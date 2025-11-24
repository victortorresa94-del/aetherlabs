"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const HeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    {
      label: "Servicios",
      href: "/servicios",
      subItems: [
        { label: "IA Generativa", href: "/servicios/ia-generativa" },
        { label: "Automatización", href: "/servicios/automatizacion" },
        { label: "IA a Medida", href: "/servicios/ia-a-medida" }
      ]
    },
    {
      label: "Labs",
      href: "/labs",
      subItems: [
        { label: "Creative Lab", href: "/labs/creative" },
        { label: "Agents Lab", href: "/labs/agents" },
        { label: "LLM Lab", href: "/labs/llm-lab" }
      ]
    },
    {
      label: "Learn",
      href: "/learn/personal",
      subItems: [
        { label: "Para Personas", href: "/learn/personal" },
        { label: "Para Empresas", href: "/learn/corporate" }
      ]
    },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Sobre&nbsp;nosotros", href: "/sobre-nosotros" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const renderNavItem = (item: NavItem) => {
    const isDropdownOpen = activeDropdown === item.label;

    if (item.subItems) {
      return (
        <li
          key={item.label}
          className="relative"
          onMouseEnter={() => setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            className="flex items-center px-4 py-2 text-sm text-white transition-colors hover:text-gray-300 whitespace-nowrap"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-black border border-[#2a2a2a] rounded-lg shadow-lg z-20">
              <ul className="py-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      href={subItem.href}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-[#1a1a1a] transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      );
    }

    return (
      <li key={item.label}>
        <Link
          href={item.href}
          className="px-4 py-2 text-sm text-white transition-colors hover:text-gray-300 whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      </li>
    );
  };

  const renderMobileNavItem = (item: NavItem) => (
    <div key={item.label} className="py-3 border-b border-[#2a2a2a] last:border-b-0">
      {item.subItems ? (
        <div>
          <h3 className="text-xl text-white font-medium" dangerouslySetInnerHTML={{ __html: item.label }} />
          <ul className="pl-4 mt-3 space-y-3">
            {item.subItems.map(subItem => (
              <li key={subItem.label}>
                <Link
                  href={subItem.href}
                  className="text-lg text-[#a0a0a0] hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link
          href={item.href}
          className="text-xl text-white font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black" : "bg-transparent"
        }`}
    >
      <div className="container h-[90px] flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center" aria-label="Aether Labs Home">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/LOGO-OK-1763511624593.png"
              alt="Aether Labs"
              width={234}
              height={78}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-1">
            {navItems.map(renderNavItem)}
          </ul>
        </nav>

        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-6">
            <Link
              href="/contacto"
              className="hidden lg:block text-sm font-semibold tracking-wider text-black bg-white rounded-full px-7 py-2.5 transition-all hover:scale-105 ease-out duration-200"
            >
              Crea tu AI
            </Link>
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] bg-black lg:hidden p-8 overflow-y-auto">
          <nav className="flex flex-col h-full">
            <ul className="space-y-4">
              {navItems.map(renderMobileNavItem)}
            </ul>
            <Link
              href="/contacto"
              className="mt-10 block text-center text-base font-semibold tracking-wider text-black bg-white rounded-full px-8 py-3 transition-all hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Crea tu AI
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNavigation;