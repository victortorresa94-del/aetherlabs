import Navbar from '@/components/v5/Navbar';
import HeroSection from '@/components/v5/HeroSection';
import ProblemSection from '@/components/v5/ProblemSection';
import SolutionSection from '@/components/v5/SolutionSection';
import ClaudeSection from '@/components/v5/ClaudeSection';
import HowItWorksSection from '@/components/v5/HowItWorksSection';
import LabsSection from '@/components/v5/LabsSection';
import ProyectosSection from '@/components/v5/ProyectosSection';
import ClaritySessionSection from '@/components/v5/ClaritySessionSection';
import SocialProofSection from '@/components/v5/SocialProofSection';
import FAQSection from '@/components/v5/FAQSection';
import FinalCtaSection from '@/components/v5/FinalCtaSection';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function HomePage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ClaudeSection />
        <HowItWorksSection />
        <LabsSection />
        <ProyectosSection />
        <ClaritySessionSection />
        <SocialProofSection />
        <FAQSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
