import Navbar from '@/components/v4/Navbar';
import HeroSection from '@/components/v4/HeroSection';
import GapSection from '@/components/v4/GapSection';
import BridgeSection from '@/components/v4/BridgeSection';
import ProductsSection from '@/components/v4/ProductsSection';
import CredentialsSection from '@/components/v4/CredentialsSection';
import ExtendedServicesSection from '@/components/v4/ExtendedServicesSection';
import CtaSection from '@/components/v4/CtaSection';
import Footer from '@/components/v4/Footer';
import GlobalInteractivity from '@/components/v4/GlobalInteractivity';

export default function HomePage() {
  return (
    <>
      <GlobalInteractivity />
      <Navbar />
      <main>
        <HeroSection />
        <GapSection />
        <BridgeSection />
        <ProductsSection />
        <CredentialsSection />
        <ExtendedServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}