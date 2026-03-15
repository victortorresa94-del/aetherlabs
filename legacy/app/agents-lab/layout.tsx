import type { Metadata } from "next";
import HeaderNavigation from "@/components/sections/header-navigation";

export const metadata: Metadata = {
    title: "Agents Lab — Aether Labs",
    description: "Configura tu agente de IA personalizado en minutos. Elige canales, rol, conocimiento y despliega.",
};

export default function AgentsLabLayout({
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
