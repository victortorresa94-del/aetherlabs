import AchieveApexPage from '@/components/achieveapex/AchieveApexPage';
import GlobalInteractivity from '@/components/v4/GlobalInteractivity';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AchieveApex en España | CRM Conversacional con IA para WhatsApp e Instagram | Aether Labs',
    description: 'Gestiona todas tus conversaciones de WhatsApp, Instagram, Facebook y Email con IA 24/7. CRM conversacional con IA. Partners oficiales AchieveApex en España. Implementación incluida.',
};

export default function Page() {
    return (
        <>
            <GlobalInteractivity />
            <AchieveApexPage />
        </>
    );
}
