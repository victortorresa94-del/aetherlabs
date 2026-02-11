import AgentsLabHero from "@/components/agents-lab/agents-lab-hero";
import AgentsLabWizard from "@/components/agents-lab/agents-lab-wizard";

export default function AgentsLabPage() {
    return (
        <div className="flex-1 flex flex-col bg-black">
            <AgentsLabHero />
            <div id="agents-lab-wizard" className="bg-white rounded-t-[60px] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                <AgentsLabWizard />
            </div>
        </div>
    );
}
