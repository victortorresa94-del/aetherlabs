import { ClientScene, ClientOverlays, ClientBootScreen } from '@/components/web4/ClientWrappers';
import NavBar from '@/components/web4/NavBar';
import HeroSection from '@/components/web4/HeroSection';
import ServiceSection from '@/components/web4/ServiceSection';
import CtaSection from '@/components/web4/CtaSection';
import '@/components/web4/web4.css';

export default function HomePage() {
  return (
    <div className="web4-root">
      {/* Boot Screen — Game Boy Power On */}
      <ClientBootScreen />

      {/* CRT Screen Frame wrapping the entire experience */}
      <div className="w4-screen-frame">
        {/* Three.js atmosphere (particles + grid + lights) */}
        <ClientScene />

        {/* CRT overlays: scanlines, flicker, grain, cursor, HP bar */}
        <ClientOverlays />

        {/* Scroll content */}
        <div className="w4-scroll-wrap">
          <NavBar />

          {/* LEVEL 0 — Title Screen */}
          <HeroSection />

          {/* LEVEL 1 — AI Implementation & Consulting */}
          <ServiceSection
            id="w4-c1"
            number="01"
            category="Consultoría"
            title={<>AI Implementation<br />& <em>Consulting</em></>}
            description="Diagnosticamos tus procesos, seleccionamos las herramientas que encajan con tu momento actual y las implementamos. Sin desarrollar desde cero — aprovechando lo que ya existe: Copilot, agentes, CRM con IA, automatizaciones."
            tags={['AI Strategy', 'Process Automation', 'Conversational AI', 'AI Stack Integration', 'AI Training']}
            align="right"
            spriteImage="/pixel-pcb.jpeg"
            spriteAlt="PCB Circuit Board — AI Implementation"
          />

          {/* LEVEL 2 — AI Content Production */}
          <ServiceSection
            id="w4-c2"
            number="02"
            category="Producción"
            title={<>AI Content<br /><em>Production</em></>}
            description="Producimos material de marketing con IA: vídeo, imagen, copy y creatividades para paid media. Sin rodajes, sin equipos de producción. Entregamos en días lo que antes tardaba semanas."
            tags={['Video & Motion', 'Visual Assets', 'Copy & Messaging', 'Performance Creative']}
            align="left"
            spriteImage="/pixel-camera.jpeg"
            spriteAlt="Analog Camera — AI Content Production"
          />

          {/* LEVEL 3 — Web & Identidad Digital */}
          <ServiceSection
            id="w4-c3"
            number="03"
            category="Digital"
            title={<>Web & Identidad<br /><em>Digital</em></>}
            description="Diseñamos y desarrollamos webs, landings y sistemas de identidad visual. Gestionamos paid media y SEO. La presencia digital como herramienta de conversión, no como decoración."
            tags={['Web Design', 'Brand Identity', 'Paid Media', 'SEO']}
            align="right"
            spriteImage="/pixel-mac.jpeg"
            spriteAlt="Retro Computer — Web & Digital Identity"
          />

          {/* INSERT COIN — Final CTA */}
          <CtaSection />
        </div>
      </div>
    </div>
  );
}