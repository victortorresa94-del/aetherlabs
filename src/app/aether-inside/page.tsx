import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import AIHeroSection from '@/components/aether-inside/AIHeroSection';
import AITruthSection from '@/components/aether-inside/AITruthSection';
import AIProcessSection from '@/components/aether-inside/AIProcessSection';
import AIIncludedSection from '@/components/aether-inside/AIIncludedSection';
import AIForWhoSection from '@/components/aether-inside/AIForWhoSection';
import AIDifferenceSection from '@/components/aether-inside/AIDifferenceSection';
import AIResultSection from '@/components/aether-inside/AIResultSection';
import AIInvestmentSection from '@/components/aether-inside/AIInvestmentSection';
import AIFAQSection from '@/components/aether-inside/AIFAQSection';
import AIFinalCTASection from '@/components/aether-inside/AIFinalCTASection';

export default function AetherInsidePage() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <ScrollAnimations />
      <Navbar />
      <main>
        {/* 01 — Hero */}
        <AIHeroSection />

        {/* 02 — The Truth */}
        <AITruthSection />

        {/* 03 — The Process */}
        <AIProcessSection />

        {/* 04 — What's Included */}
        <AIIncludedSection />

        {/* 05 — Who It's For */}
        <AIForWhoSection />

        {/* 06 — What Makes It Different */}
        <AIDifferenceSection />

        {/* 07 — The Result */}
        <AIResultSection />

        {/* 08 — Investment */}
        <AIInvestmentSection />

        {/* 09 — FAQ */}
        <AIFAQSection />

        {/* 10 — Final CTA */}
        <AIFinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
