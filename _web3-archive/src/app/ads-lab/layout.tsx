import type { Metadata } from "next";
import HeaderNavigation from "@/components/sections/header-navigation";

export const metadata: Metadata = {
    title: "Ads Lab — Aether Labs",
    description: "Genera anuncios de alto impacto con IA. Define tu campaña y obtén creatividades listas para publicar.",
};

export default function AdsLabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
            <div className="bg-black text-white">
                <HeaderNavigation />
            </div>
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
