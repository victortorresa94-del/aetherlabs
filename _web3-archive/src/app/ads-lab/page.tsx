import AdsLabHero from "@/components/ads-lab/ads-lab-hero";
import AdsLabWizard from "@/components/ads-lab/ads-lab-wizard";

export default function AdsLabPage() {
    return (
        <div className="flex-1 flex flex-col bg-black">
            <AdsLabHero />
            <div id="ads-lab-wizard" className="bg-white rounded-t-[60px] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                <AdsLabWizard />
            </div>
        </div>
    );
}
