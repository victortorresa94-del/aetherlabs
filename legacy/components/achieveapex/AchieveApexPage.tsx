'use client';

import { useEffect, useState } from 'react';
import AchieveApexNavbar from './AchieveApexNavbar';
import AchieveApexHero from './AchieveApexHero';
import AchieveApexProblem from './AchieveApexProblem';
import AchieveApexFeatures from './AchieveApexFeatures';
import AchieveApexScreenshots from './AchieveApexScreenshots';
import AchieveApexUseCases from './AchieveApexUseCases';
import AchieveApexPricing from './AchieveApexPricing';
import AchieveApexIntegrations from './AchieveApexIntegrations';
import AchieveApexFAQ from './AchieveApexFAQ';
import AchieveApexCTA from './AchieveApexCTA';
import Footer from '@/components/sections/footer';

export default function AchieveApexPage() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main style={{ background: '#0A0A0A', position: 'relative', overflowX: 'hidden', cursor: 'none' }}>
            <AchieveApexNavbar />

            <div className="achieveapex-content" style={{ position: 'relative', zIndex: 1 }}>
                <AchieveApexHero />
                <AchieveApexProblem />
                <AchieveApexFeatures />
                <AchieveApexScreenshots />
                <AchieveApexUseCases />
                <AchieveApexPricing />
                <AchieveApexIntegrations />
                <AchieveApexFAQ />
                <AchieveApexCTA />
            </div>

            {/* Custom Footer Add-on */}
            <div style={{ background: '#0D0D0D', padding: '20px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#666' }}>
                    AchieveApex es un producto de EME Agencia Digital S.A.S. Distribuido e implementado en España por Aether Labs.
                </p>
            </div>
            <Footer />

            <style jsx global>{`
                .achieveapex-content { scroll-behavior: smooth; }
                ::selection { background: #25D366; color: #000; }
                .achieveapex-content::-webkit-scrollbar { width: 6px; }
                .achieveapex-content::-webkit-scrollbar-track { background: #0A0A0A; }
                .achieveapex-content::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
                .achieveapex-content::-webkit-scrollbar-thumb:hover { background: #25D366; }
                
                /* Simple fade-in utility */
                @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
                .fade-up { animation: fadeUp 0.6s ease-out forwards; opacity: 0; }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }
                .delay-5 { animation-delay: 0.5s; }
            `}</style>
        </main>
    );
}
