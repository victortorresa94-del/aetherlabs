import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import AetherTeamHero from '@/components/aether-inside/AetherTeamHero';
import AITruthSection from '@/components/aether-inside/AITruthSection';
import AIProcessSection from '@/components/aether-inside/AIProcessSection';
import AIIncludedSection from '@/components/aether-inside/AIIncludedSection';
import AIForWhoSection from '@/components/aether-inside/AIForWhoSection';
import AIDifferenceSection from '@/components/aether-inside/AIDifferenceSection';
import AIResultSection from '@/components/aether-inside/AIResultSection';
import AIInvestmentSection from '@/components/aether-inside/AIInvestmentSection';
import AIFAQSection from '@/components/aether-inside/AIFAQSection';
import AIFinalCTASection from '@/components/aether-inside/AIFinalCTASection';

export default function AetherTeamPage() {
  return (
    <div style={{ backgroundColor: '#080808' }}>
      <ScrollAnimations />
      <Navbar />
      <main>
        <AetherTeamHero />
        <AITruthSection />
        <AIProcessSection />
        <AIIncludedSection />
        <AIForWhoSection />
        <AIDifferenceSection />
        <AIResultSection />
        <AIInvestmentSection />
        <AIFAQSection />
        <AIFinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
