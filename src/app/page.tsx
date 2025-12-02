import HeaderNavigation from "@/components/sections/header-navigation";
import HeroVideoSection from "@/components/sections/hero-video-section";
import CreativeContentIntro from "@/components/sections/creative-content-intro";
import ServicesOverview from "@/components/sections/services-overview";
import ProjectsSection from "@/components/sections/projects-section";
import LabsSection from "@/components/sections/labs-section";
import RestaurAIBanner from "@/components/sections/restaurai-banner";
import TrainingSection from "@/components/sections/training-section";
import WorkspaceSection from "@/components/sections/workspace-section";
import TrustedBrandsSection from "@/components/sections/trusted-brands-section";
import CommunitySection from "@/components/sections/community-section";
import ProcessSteps from "@/components/sections/process-steps";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import IdeaFormSection from "@/components/sections/idea-form-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <HeroVideoSection />
      <CreativeContentIntro />
      <ServicesOverview />
      <ProjectsSection />
      <LabsSection />
      <RestaurAIBanner />
      <TrainingSection />
      <WorkspaceSection />
      <TrustedBrandsSection />
      <CommunitySection />
      <ProcessSteps />
      <TestimonialsCarousel />
      <IdeaFormSection />
      <Footer />
    </main>
  );
}