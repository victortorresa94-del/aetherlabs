import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import JasonBot from "@/components/ui/jason-bot";
import JasonWidget from "@/components/jason-widget";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherlabs.es"),
  title: "Aether Labs - Convertimos ideas en tecnología",
  description: "Laboratorios de Inteligencia Artificial - IA para PYMES sin complicaciones.",
  openGraph: {
    title: "Aether Labs - Convertimos ideas en tecnología",
    description: "Laboratorios de Inteligencia Artificial - IA para PYMES sin complicaciones.",
    images: [
      {
        url: "/og-image-black.png",
        width: 1200,
        height: 630,
        alt: "Aether Labs Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Google Analytics (gtag.js) */}
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
      {/* End Google Tag Manager */}
      <body className="antialiased bg-black text-white selection:bg-[#82ff1f] selection:text-black overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2K2L3NQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Analytics />
        <JasonWidget />
        {/* <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript" strategy="afterInteractive" /> */}
        {/* @ts-ignore */}
        {/* <elevenlabs-convai agent-id="agent_7901k85nn7wyfynsqgs4qym0h48t"></elevenlabs-convai> */}
      </body>
    </html>
  );
}