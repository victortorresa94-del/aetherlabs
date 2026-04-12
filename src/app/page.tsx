import Navbar from '@/components/v5/Navbar';
import HeroSection from '@/components/v5/HeroSection';
import TrustBandSection from '@/components/v5/TrustBandSection';
import LabsBannerSection from '@/components/v5/LabsBannerSection';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function HomePage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBandSection />
        <LabsBannerSection />
      </main>
      <Footer />
    </div>
  );
}
