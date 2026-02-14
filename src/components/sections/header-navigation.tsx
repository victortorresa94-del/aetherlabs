"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NeonButton } from "@/components/ui/neon-button";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Bot,
  MessageSquare,
  Workflow,
  Eye,
  Globe,
  Shield,
  Grid,
  GraduationCap,
  Palette,
  MessageSquareText,
  Briefcase,
  Building2,
  Users,
  Megaphone,
  HeadphonesIcon,
  BookOpen,
  ShoppingBag,
  Utensils,
  Stethoscope,
  Target,
  Home,
  Store,
  School,
  HardHat,
  ShoppingCart,
  Laptop,
  Database,
  TrendingUp,
  Zap,
  LayoutGrid
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  variant?: 'default' | 'mega' | 'rich';
  description?: string;
  icon?: React.ElementType;
  subItems?: NavItem[];
}

const HeaderNavigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const isAgentsLab = pathname?.includes('/agents-lab');

  const toggleMobileItem = (label: string) => {
    // Accordion behavior: Close others, toggle current
    setExpandedMobileItems(prev =>
      prev.includes(label) ? [] : [label]
    );
  };

  const navItems: NavItem[] = [
    // V2 nav items backed up - hidden for V3
    // Servicios, Labs, Casos de Uso, Learn, Experimentos, Contacto removed from visible nav
    { label: "Agentes", href: "/agentes" },
    {
      label: "Servicios",
      href: "/servicios",
      variant: 'rich',
      subItems: [
        { label: "Ads con IA", href: "/ads-con-ia", icon: TrendingUp, description: "Atrae tráfico cualificado a tu negocio." },
        { label: "CRM con IA", href: "/crm-con-ia", icon: Database, description: "Gestión, seguimiento y cierre automatizado." },
        { label: "Formación IA", href: "/formacion-ia-ventas", icon: GraduationCap, description: "Capacitación estratégica para equipos." }
      ]
    },
    { label: "Industrias", href: "/industrias" },
    {
      label: "Labs",
      href: "#",
      subItems: [
        { label: "Agents Lab", href: "/agents-lab" },
      ],
    },
    { label: "Nosotros", href: "/sobre-nosotros" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Updated render logic for rich dropdowns (Icons + Description)
  const renderRichDropdown = (item: NavItem) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] z-50">
      <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {item.subItems?.map((subItem) => (
            <Link
              key={subItem.label}
              href={subItem.href}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="mt-0.5 text-[#82ff1f]">
                {subItem.icon && <subItem.icon size={22} />}
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  {subItem.label}
                </div>
                {subItem.description && (
                  <p className="text-zinc-400 text-sm mt-1 leading-snug group-hover:text-white transition-colors">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMegaDropdown = (item: NavItem) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] z-50">
      <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-8">
        <div className="grid grid-cols-2 gap-12">
          {item.subItems?.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
                {column.label}
              </h3>
              <ul className="space-y-2">
                {column.subItems?.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      href={subItem.href}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      {/* Optional icon for mega menu items if provided */}
                      {subItem.icon && <subItem.icon size={14} className="text-[#82ff1f]" />}
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStandardDropdown = (item: NavItem) => (
    <div className="absolute top-full left-0 pt-2 w-56 z-50">
      <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden">
        <ul className="py-1">
          {item.subItems?.map((subItem) => (
            <li key={subItem.label}>
              <Link
                href={subItem.href}
                className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 hover:text-[#82ff1f] transition-colors"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderNavItem = (item: NavItem) => {
    const isDropdownOpen = activeDropdown === item.label;
    const hasDropdown = item.subItems && item.subItems.length > 0;

    return (
      <li
        key={item.label}
        className="relative group"
        onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        <Link
          href={item.href}
          className="flex items-center px-6 py-2 text-lg font-medium text-white transition-colors hover:text-zinc-300 whitespace-nowrap gap-1"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <span dangerouslySetInnerHTML={{ __html: item.label }} />
          {hasDropdown && (
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          )}
        </Link>

        {isDropdownOpen && (
          item.variant === 'rich' ? renderRichDropdown(item) :
            item.variant === 'mega' ? renderMegaDropdown(item) :
              renderStandardDropdown(item)
        )}
      </li>
    );
  };

  const renderMobileNavItem = (item: NavItem) => (
    <div key={item.label} className="border-b border-white/10 last:border-b-0">
      {item.subItems ? (
        <div>
          <button
            className="flex items-center justify-between w-full py-4 text-left"
            onClick={() => toggleMobileItem(item.label)}
          >
            <span className="text-lg text-white font-medium" dangerouslySetInnerHTML={{ __html: item.label }} />
            <ChevronDown
              size={20}
              className={`text-white transition-transform duration-200 ${expandedMobileItems.includes(item.label) ? 'rotate-180' : ''}`}
            />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileItems.includes(item.label) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col gap-2 pb-4 pl-4">
              {item.subItems.map(subItem => (
                <li key={subItem.label}>
                  {subItem.subItems ? (
                    // Mega Menu Column (e.g., "Por Departamento")
                    <div className="mb-4">
                      <span className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">
                        {subItem.label}
                      </span>
                      <ul className="flex flex-col gap-2 pl-2 border-l border-white/10">
                        {subItem.subItems.map(nestedItem => (
                          <li key={nestedItem.label}>
                            <Link
                              href={nestedItem.href}
                              className="block py-2 text-base text-zinc-400 hover:text-white active:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {nestedItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    // Standard Item
                    <Link
                      href={subItem.href}
                      className="block py-2 text-base text-zinc-400 hover:text-white active:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Link
          href={item.href}
          className="block py-4 text-lg text-white font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen || isAgentsLab || pathname === '/servicios' || pathname === '/industrias' ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container h-[90px] flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center" aria-label="Aether Labs Home">
            <Image
              src="/aether-logo-white.png"
              alt="Aether Labs"
              width={140}
              height={47}
              className="h-[45px] w-auto transition-all duration-300"
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
            <NeonButton
              variant="default"
              size="cta"
              onClick={() => router.push('/contacto')}
              className="hidden lg:block"
            >
              Auditoría de ventas
            </NeonButton>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[90px] left-0 right-0 bottom-0 bg-black z-40 w-full h-[calc(100vh-90px)] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="container h-full overflow-y-auto pb-20 pt-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map(renderMobileNavItem)}
            <div className="pt-6 mt-6 border-t border-white/10">
              <NeonButton
                variant="default"
                size="cta"
                className="w-full"
                onClick={() => {
                  router.push('/contacto');
                  setIsMobileMenuOpen(false);
                }}
              >
                Auditoría de ventas
              </NeonButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;