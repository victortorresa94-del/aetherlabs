import HeaderNavigation from "@/components/sections/header-navigation";
import HeroVideoSection from "@/components/sections/hero-video-section";
import CreativeContentIntro from "@/components/sections/creative-content-intro";
import ServicesOverview from "@/components/sections/services-overview";
import UseCasesSection from "@/components/sections/use-cases-section";
import LabsSection from "@/components/sections/labs-section";
import WorkspaceSection from "@/components/sections/workspace-section";
import TrustedBrandsSection from "@/components/sections/trusted-brands-section";
import CommunitySection from "@/components/sections/community-section";
import ProcessSteps from "@/components/sections/process-steps";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <HeroVideoSection />
      <CreativeContentIntro />
      <ServicesOverview />
      <UseCasesSection />
      <LabsSection />
      <WorkspaceSection />
      <TrustedBrandsSection />
      <CommunitySection />
      <ProcessSteps />
      <TestimonialsCarousel />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}