import Navbar from '@/components/v5/Navbar';
import HeroSection from '@/components/v5/HeroSection';
import ProblemSection from '@/components/v5/ProblemSection';
import SolutionSection from '@/components/v5/SolutionSection';
import HowItWorksSection from '@/components/v5/HowItWorksSection';
import LabsSection from '@/components/v5/LabsSection';
import ClaritySessionSection from '@/components/v5/ClaritySessionSection';
import SocialProofSection from '@/components/v5/SocialProofSection';
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
        <HowItWorksSection />
        <LabsSection />
        <ClaritySessionSection />
        <SocialProofSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
