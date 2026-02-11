import type { Metadata } from "next";
import HeaderNavigation from "@/components/sections/header-navigation";

export const metadata: Metadata = {
    title: "API Lab — Aether Labs",
    description: "Internal playground for testing Aether Labs AI capabilities.",
};

export default function ApiLabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white antialiased flex flex-col font-sans selection:bg-[#82ff1f] selection:text-black">
            <div className="border-b border-white/10">
                <HeaderNavigation />
            </div>
            <main className="flex-1 flex flex-col relative">
                {/* Background Grid */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="relative z-10 flex-1 flex flex-col">
                    {children}
                </div>
            </main>
        </div>
    );
}
