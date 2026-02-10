import HeroSection from "@/components/v3/hero-section";
import ProblemSection from "@/components/v3/problem-section";
import SolutionSection from "@/components/v3/solution-section";
// SelectorSection import removed
import AgentsIntro from "@/components/v3/agents-intro";
import AgentsSection from "@/components/v3/agents-section";
import ProcessSection from "@/components/v3/process-section";
import ResultsSection from "@/components/v3/results-section";
import CTASection from "@/components/v3/cta-section";
import DiagnosisModal from "@/components/v3/diagnosis-modal";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative selection:bg-emerald-500 selection:text-black">
      <HeaderNavigation />

      <HeroSection />
      <ProblemSection />
      <AgentsIntro />
      <AgentsSection />
      <ProcessSection />
      <SolutionSection />
      <ResultsSection />
      <CTASection />

      <DiagnosisModal />

      <Footer />
    </main>
  );
}