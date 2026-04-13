import Navbar from '@/components/v5/Navbar';
import HeroSection from '@/components/v5/HeroSection';
import TrustBandSection from '@/components/v5/TrustBandSection';
import AetherInsideSection from '@/components/v5/AetherInsideSection';
import LabsBannerSection from '@/components/v5/LabsBannerSection';
import ExperimentosBanner from '@/components/v5/ExperimentosBanner';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import { JsonLd, organizationSchema, homeFaqSchema } from '@/components/JsonLd';

export default function HomePage() {
  return (
    <div className="v5-page">
      <JsonLd data={organizationSchema} />
      <JsonLd data={homeFaqSchema} />
      <ScrollAnimations />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBandSection />

        {/* INSERTION POINT A — between VALUE PROPS and LABS */}
        <AetherInsideSection />

        <LabsBannerSection />

        {/* INSERTION POINT B — between CASES TEASER and PRIMER PASO */}
        <ExperimentosBanner />
      </main>
      <Footer />
    </div>
  );
}
