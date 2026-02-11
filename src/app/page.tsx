import HeroSection from "@/components/v3/hero-section";
import ProblemSection from "@/components/v3/problem-section";
import RealitySection from "@/components/v3/reality-section";
import SolutionSection from "@/components/v3/solution-section";
// SelectorSection import removed
import AgentsIntro from "@/components/v3/agents-intro";
import AgentsSection from "@/components/v3/agents-section";
import AgentsLabBanner from "@/components/v3/agents-lab-banner";
import ProcessSection from "@/components/v3/process-section";
import DataImpactSection from "@/components/v3/data-impact-section";
import CTASection from "@/components/v3/cta-section";
import DiagnosisModal from "@/components/v3/diagnosis-modal";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <HeaderNavigation />

      <HeroSection />
      <ProblemSection />
      <RealitySection />
      <AgentsIntro />
      <AgentsSection />
      <AgentsLabBanner />
      <ProcessSection />
      <SolutionSection />
      <DataImpactSection />
      <CTASection />

      <DiagnosisModal />

      <Footer />
    </main>
  );
}