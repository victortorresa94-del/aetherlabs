// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter, playfairDisplay } from "./fonts";

// COMPONENTES CLIENT
import ScrollProgress from "@/components/ScrollProgress";
import Analytics from "@/components/Analytics";
import LoaderOverlay from "@/components/LoaderOverlay"; // (lo creamos en el paso 2)
import Navbar from "@/components/Navbar";

const SITE_URL = "https://aetherlabs.example"; // TODO: cambia al dominio final

export const metadata: Metadata = {
  title: "Aether Labs — El futuro es hoy | Crea tu IA en 1 minuto",
  description:
    "Crea tu propia inteligencia artificial que atiende llamadas, responde WhatsApps y automatiza tareas. Anuncios con IA y cursos desde cero.",
  icons: { icon: "/favicon.ico" },
  themeColor: "#5BA8A0",
  openGraph: {
    title: "Aether Labs — El futuro es hoy",
    description:
      "Crea tu IA en 1 minuto. Agentes de voz/WhatsApp, anuncios con IA y formación aplicada.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Aether Labs" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether Labs — El futuro es hoy",
    description:
      "Crea tu IA en 1 minuto. Agentes de voz/WhatsApp, anuncios con IA y formación aplicada.",
    images: ["/og.jpg"]
  },
  alternates: { canonical: SITE_URL }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Organization + Website
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aether Labs",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://instagram.com/aetherlabs",
      "https://www.linkedin.com/company/aetherlabs"
    ]
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Aether Labs",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        {/* Barra de progreso de scroll (cliente) */}
        <ScrollProgress />

        {/* Loader inicial (0.6–1s) */}
        <LoaderOverlay />

        {/* Navbar fijo con blur */}
        <Navbar />

        {/* Contenido */}
        <main>{children}</main>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />

        {/* Analytics GA4: requiere NEXT_PUBLIC_GA_ID en .env (opcional) */}
        <Analytics />
        
      </body>
    </html>
  );
}
