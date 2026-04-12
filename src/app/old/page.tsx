import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

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
import HeroSectionOld from '@/components/v5/HeroSectionOld';
import SalviaHero3D from '@/app/SalviaHero3D';

const LABEL_STYLE =
    'absolute top-4 left-4 z-50 bg-black border border-white text-white text-[10px] px-3 py-1 font-mono uppercase tracking-widest pointer-events-none';

export default function OldPage() {
    return (
        <div className="v5-page">
            <Navbar />

            {/* Archive banner */}
            <div
                className="w-full text-center py-1.5 font-mono text-[10px] uppercase tracking-widest"
                style={{
                    background: '#080808',
                    color: '#00FF41',
                    borderBottom: '1px solid #00FF4130',
                    position: 'sticky',
                    top: 0,
                    zIndex: 40,
                }}
            >
                ARCHIVO DE COMPONENTES — Reutiliza cualquiera diciendo &ldquo;usa el X de /old&rdquo;
            </div>

            <main>
                {/* HeroSectionOld */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>HeroSectionOld — Home V5</span>
                    <HeroSectionOld />
                </section>

                {/* ProblemSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>ProblemSection — Home V5</span>
                    <ProblemSection />
                </section>

                {/* SolutionSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>SolutionSection — Home V5</span>
                    <SolutionSection />
                </section>

                {/* ClaudeSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>ClaudeSection — Home V5</span>
                    <ClaudeSection />
                </section>

                {/* HowItWorksSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>HowItWorksSection — Home V5</span>
                    <HowItWorksSection />
                </section>

                {/* LabsSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>LabsSection — Home V5</span>
                    <LabsSection />
                </section>

                {/* ProyectosSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>ProyectosSection — Home V5</span>
                    <ProyectosSection />
                </section>

                {/* ClaritySessionSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>ClaritySessionSection — Home V5</span>
                    <ClaritySessionSection />
                </section>

                {/* SocialProofSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>SocialProofSection — Home V5</span>
                    <SocialProofSection />
                </section>

                {/* FAQSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>FAQSection — Home V5</span>
                    <FAQSection />
                </section>

                {/* FinalCtaSection */}
                <section className="relative border-b border-white/10">
                    <span className={LABEL_STYLE}>FinalCtaSection — Home V5</span>
                    <FinalCtaSection />
                </section>

                {/* SalviaHero3D */}
                <section className="relative border-b border-white/10 pt-20 pb-32 bg-[#080808]">
                    <span className={LABEL_STYLE}>SalviaHero3D — Concept</span>
                    <div className="v5-container mx-auto">
                        <SalviaHero3D height={600} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
