import HeaderNavigation from "@/components/sections/header-navigation";
import HeroVideoSection from "@/components/sections/hero-video-section";
import ServicesOverview from "@/components/sections/services-overview";
import TrustedBrandsSection from "@/components/sections/trusted-brands-section";
import ComputerVisionBanner from "@/components/sections/computer-vision-banner";
import LabsSection from "@/components/sections/labs-section";
import AIHubSection from "@/components/sections/ai-hub-section";
import ProjectsSection from "@/components/sections/projects-section";
import GenAICampaignCTA from "@/components/sections/gen-ai-campaign-cta";
import ProcessSteps from "@/components/sections/process-steps";
import TrainingSection from "@/components/sections/training-section";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import IdeaFormSection from "@/components/sections/idea-form-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <HeaderNavigation />

      {/* 1. BANNER */}
      <HeroVideoSection />

      {/* 2. SERVICIOS */}
      <ServicesOverview />

      {/* 3. EMPRESAS QUE CONFIAN EN NOSOTROS */}
      <TrustedBrandsSection />

      {/* 4. AETHER LABS (Moved below logos) */}
      <LabsSection />

      {/* 5. AI HUB */}
      <AIHubSection />

      {/* 6. PROYECTOS REALIZADOS */}
      <ProjectsSection />

      {/* 7. CTA CREA TU CAMPAÑA CON IA GENERATIVA */}
      <GenAICampaignCTA />

      {/* 8. BLOQUE NUESTRO PROCESO */}
      <ProcessSteps />

      {/* 9. CONTROLA LA REALIDAD CON TUS MANOS (Moved below Process) */}
      <ComputerVisionBanner />

      {/* 10. BLOQUE FORMACION */}
      <TrainingSection />

      {/* 12. CUENTANOS TU IDEA */}
      <IdeaFormSection />

      <Footer />
    </main>
  );
}