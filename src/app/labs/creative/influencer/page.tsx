'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import InfluencerGenerator from '@/components/labs/InfluencerGenerator';

export default function InfluencerLabPage() {
    return (
        <div className="min-h-screen bg-black">
            <HeaderNavigation />

            <main>
                <section className="pt-32 pb-12 bg-black">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
                                Labs / Creative Lab / Influencer
                            </p>
                            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                                Creador de Influencers IA
                            </h1>
                            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
                                Genera modelos ultra realistas para campañas, contenido UGC o branding en segundos.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pb-20 bg-black">
                    <div className="container">
                        <InfluencerGenerator />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
