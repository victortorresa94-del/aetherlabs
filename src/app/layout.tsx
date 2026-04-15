import type { Metadata } from "next";
import "./globals.css"; // V5 Design System Optimized
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherlabs.es"),
  title: {
    default: "Aether Labs — Implementación de IA para empresas | Barcelona",
    template: "%s | Aether Labs",
  },
  description:
    "Implementamos IA en empresas. Claude, automatizaciones, agentes, software a medida y formación. Barcelona.",
  keywords: [
    "implementar IA empresa",
    "agencia inteligencia artificial Barcelona",
    "automatización empresas IA",
    "Claude implementación",
    "agentes IA autónomos",
    "formación IA equipos",
    "software a medida IA",
    "Aether Labs Barcelona",
  ],
  authors: [{ name: "Aether Labs", url: "https://aetherlabs.es" }],
  creator: "Aether Labs",
  openGraph: {
    title: "Aether Labs — Implementación de IA para empresas",
    description:
      "Implementamos IA en empresas. Claude, automatizaciones, agentes, software a medida y formación.",
    images: [
      {
        url: "/og-image-black.png",
        width: 1200,
        height: 630,
        alt: "Aether Labs — Implementación de IA para empresas en Barcelona",
      },
    ],
    locale: "es_ES",
    type: "website",
    siteName: "Aether Labs",
    url: "https://aetherlabs.es",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether Labs — Implementación de IA para empresas",
    description:
      "Implementamos IA en empresas. Claude, automatizaciones, agentes, software a medida y formación. Barcelona.",
    images: ["/og-image-black.png"],
  },
  alternates: {
    canonical: "https://aetherlabs.es",
    languages: { "es-ES": "https://aetherlabs.es" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MFFHMKJR8Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MFFHMKJR8Q');
        `}
      </Script>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T2K2L3NQ');`}
      </Script>
      {/* Kill any stale service workers from previous Vite/Antigravity builds */}
      <Script id="sw-cleanup" strategy="afterInteractive">
        {`if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(regs){regs.forEach(function(r){r.unregister();});});}`}
      </Script>
      <body className="antialiased bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2K2L3NQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}