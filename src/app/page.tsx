// app/page.tsx
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AgentsLab from "@/components/AgentsLab";
import CreativeLab from "@/components/CreativeLab";
import LearningLab from "@/components/LearningLab";
import PricingBlock from "@/components/PricingBlock";
import CreateYourAI from "@/components/CreateYourAI";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import Ecosistema from "@/components/Ecosistema";
import Consulting from "@/components/Consulting"; 
import Jason from "@/components/Jason"
import CasosExito from "@/components/CasosExito"
import Link from "next/link";


export default function Page() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* QUÉ HACEMOS */}
      <WhatWeDo />

      {/* LABS */}
      <AgentsLab />
      <CreativeLab />
      <LearningLab />

      {/* LEAD MAGNET */}
      
      
      https://elevenlabs.io/app/talk-to?agent_id=agent_7901k85nn7wyfynsqgs4qym0h48t
      {/* PRICING (opcional) */}
      
      <Consulting /> 
      <Ecosistema />       {/* <-- nuevo: AI Hub */}
      

      {/* CASOS REALES */}
      <CasosExito />
      <Jason />

      {/* CONTACTO */}
      <Contact />

  

      {/* FOOTER */}
      
      <Footer />
    </>
  );
}
