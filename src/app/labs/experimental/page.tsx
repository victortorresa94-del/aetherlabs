import React from 'react';
import InteractiveLab from '@/components/labs/experimental/InteractiveLab';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ExperimentalLabPage() {
    return (
        <main className="w-full h-screen overflow-hidden bg-black relative">
            <InteractiveLab />

            {/* UI Overlay */}
            <div className="absolute top-6 left-6 z-40">
                <Link
                    href="/labs"
                    className="flex items-center gap-2 text-white/70 hover:text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-[#82ff1f]/50 transition-all group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Volver a Labs</span>
                </Link>
            </div>

            <div className="absolute top-6 right-6 z-40 text-right pointer-events-none">
                <h1 className="text-2xl font-light text-white tracking-tight">Experimental Lab</h1>
                <p className="text-xs text-[#82ff1f] font-mono mt-1">v1.0.0 // INTERACTIVE_MODE</p>
            </div>
        </main>
    );
}
