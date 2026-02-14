'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

export type MaturityStage = 'awareness' | 'consideration' | 'decision';
export type UserIntent = 'explorer' | 'technical' | 'commercial' | 'evaluator';

export interface FlubyState {
    context: {
        section: string;
        scrollDepth: number;
        timeOnPage: number;
        entrySource: string;
    };
    intent: {
        profile: UserIntent;
        confidence: number;
    };
    maturity: {
        stage: MaturityStage;
        score: number;
    };
}

export const useFlubyLogic = () => {
    const pathname = usePathname();
    const [currentMessage, setCurrentMessage] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [lastSpeakTime, setLastSpeakTime] = useState(0);
    const [state, setState] = useState<FlubyState>({
        context: { section: 'home', scrollDepth: 0, timeOnPage: 0, entrySource: 'organic' },
        intent: { profile: 'explorer', confidence: 0.5 },
        maturity: { stage: 'awareness', score: 0.1 }
    });

    const sessionStart = useRef(Date.now());
    const pageViews = useRef(new Set<string>());

    useEffect(() => {
        pageViews.current.add(pathname);
    }, [pathname]);

    // Track scroll and time
    useEffect(() => {
        const handleScroll = () => {
            const depth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setState(prev => ({
                ...prev,
                context: { ...prev.context, scrollDepth: depth }
            }));
        };

        const timer = setInterval(() => {
            const time = (Date.now() - sessionStart.current) / 1000;
            setState(prev => ({
                ...prev,
                context: { ...prev.context, timeOnPage: time }
            }));
        }, 3000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    // Analyze Intent and Maturity
    useEffect(() => {
        const analyze = () => {
            const { timeOnPage, scrollDepth } = state.context;
            let profile: UserIntent = 'explorer';
            let stage: MaturityStage = 'awareness';

            // Intent Heuristics
            if (pathname.includes('/agentes-ia') || pathname.includes('/crm')) {
                profile = 'technical';
            } else if (pathname.includes('/ads') || pathname.includes('/industries')) {
                profile = 'commercial';
            } else if (pageViews.current.size > 2 && pathname.includes('/academy')) {
                profile = 'evaluator';
            }

            // Maturity Heuristics
            if (timeOnPage > 180 || pageViews.current.size > 4) {
                stage = 'decision';
            } else if (timeOnPage > 60 || scrollDepth > 0.4 || pageViews.current.size > 2) {
                stage = 'consideration';
            }

            setState(prev => ({
                ...prev,
                context: { ...prev.context, section: pathname === '/' ? 'home' : pathname.split('/')[1] },
                intent: { profile, confidence: 0.8 },
                maturity: { stage, score: Math.min((timeOnPage / 200) + (scrollDepth / 2), 1) }
            }));
        };

        analyze();
    }, [pathname, state.context.scrollDepth, state.context.timeOnPage]);

    const showMessage = useCallback((msg: string) => {
        const now = Date.now();
        if (now - lastSpeakTime < 40000 && lastSpeakTime !== 0) return; // 40s rule

        setCurrentMessage(msg);
        setLastSpeakTime(now);

        setTimeout(() => {
            setCurrentMessage(prev => prev === msg ? null : prev);
        }, 12000);
    }, [lastSpeakTime]);

    // Adaptive triggers based on architecture
    useEffect(() => {
        const { stage } = state.maturity;
        const { profile } = state.intent;
        const { scrollDepth, section } = state.context;

        let msg = "";

        // Case A: Explorer + Awareness
        if (stage === 'awareness' && profile === 'explorer' && scrollDepth > 0.1) {
            msg = "Estás entendiendo cómo funciona el sistema. No corras.";
        }
        // Case B: Technical
        else if (profile === 'technical' && section === 'agentes-ia') {
            msg = "Veo que te interesa la parte operativa. La ingeniería es lo que nos separa del resto.";
        }
        // Case C: Commercial
        else if (profile === 'commercial' && stage === 'consideration') {
            msg = "Lo que te preocupa es convertir más, no solo automatizar. Te entiendo perfectamente.";
        }
        // Case D: Evaluator
        else if (profile === 'evaluator' || stage === 'decision') {
            msg = "Quieres saber si esto encaja en tu estructura. El impacto real no se ve en diapositivas, se ve en el CRM.";
        }
        // Generic Scroll trigger
        else if (scrollDepth > 0.8 && stage === 'consideration') {
            msg = "Ahora vamos a lo interesante. ¿Quieres que te lo explique rápido?";
        }

        if (msg) {
            const timer = setTimeout(() => showMessage(msg), 10000);
            return () => clearTimeout(timer);
        }
    }, [pathname, state.maturity.stage, state.intent.profile, showMessage, state.context.scrollDepth, state.context.section]);

    return {
        currentMessage,
        isExpanded,
        setIsExpanded,
        state,
        showMessage
    };
};
