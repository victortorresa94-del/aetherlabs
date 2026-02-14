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
            msg = "Hola. Veo que estás explorando el ecosistema... ¿Encontraste ya lo que buscabas o te ayudo a navegar?";
        }
        // Case B: Technical
        else if (profile === 'technical' && section === 'agentes-ia') {
            msg = "Qué tal. Te gusta ver qué hay bajo el capó, ¿no? Si tienes dudas técnicas, soy todo oídos.";
        }
        // Case C: Commercial
        else if (profile === 'commercial' && stage === 'consideration') {
            msg = "Hola. Sé que buscas impacto real en las ventas. ¿Hablamos de cómo lo hacemos aquí?";
        }
        // Case D: Evaluator
        else if (profile === 'evaluator' || stage === 'decision') {
            msg = "Buenas. Estás en la fase seria. Si quieres saber cómo encajamos en tu estructura, dispárame una duda.";
        }
        // Generic Scroll trigger
        else if (scrollDepth > 0.8 && stage === 'consideration') {
            msg = "Vaya, te has leído casi todo. Qué tal si me cuentas qué te ha parecido hasta ahora.";
        }

        if (msg) {
            const timer = setTimeout(() => showMessage(msg), 25000);
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
