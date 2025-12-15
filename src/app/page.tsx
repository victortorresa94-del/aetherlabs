import HeaderNavigation from "@/components/sections/header-navigation";
import HeroVideoSection from "@/components/sections/hero-video-section";
import ServicesOverview from "@/components/sections/services-overview";
import TrustedBrandsSection from "@/components/sections/trusted-brands-section";

import AIHubSection from "@/components/sections/ai-hub-section";
import ProjectsSection from "@/components/sections/projects-section";

import GenAICampaignCTA from "@/components/sections/gen-ai-campaign-cta";
import ProcessSteps from "@/components/sections/process-steps";
import TrainingSection from "@/components/sections/training-section";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import IdeaFormSection from "@/components/sections/idea-form-section";
import Footer from "@/components/sections/footer";

import CreateAgentCTA from "@/components/sections/create-agent-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <HeaderNavigation />

      {/* 1. BANNER */}
      <HeroVideoSection />

      {/* 2. QUE HACEMOS */}
      <ServicesOverview />

      {/* 3. NUESTROS EXPERIMENTOS */}
      <ProjectsSection />

      {/* 4. EMPRESAS QUE CONFIAN EN NOSOTROS */}
      <TrustedBrandsSection />

      {/* 5. IA EN TODA TU EMPRESA */}
      <AIHubSection />

      {/* 6. CREA TU CAMPAÑA (Imagen Izquierda) */}
      <GenAICampaignCTA />

      {/* 7. CREA TU AGENTE (Imagen Derecha) */}
      <CreateAgentCTA />

      {/* 8. BLOQUE NUESTRO PROCESO */}
      <ProcessSteps />

      {/* 9. BLOQUE FORMACION */}
      <TrainingSection />

      {/* 10. CUENTANOS TU IDEA */}
      <IdeaFormSection />

      <Footer />
    </main>
  );
}