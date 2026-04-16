'use client';

import { useState, useRef, useEffect } from 'react';
import { hexToRgba } from '@/lib/colors';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LiveDemoChatProps {
  experimentId: string;
  accentColor: string;
  initialMessage: string;
}

export default function LiveDemoChat({
  experimentId,
  accentColor,
  initialMessage,
}: LiveDemoChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: initialMessage },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't scrollIntoView on initial mount — only when new messages arrive
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/experimentos/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages, // history before user msg
          experimentId,
        }),
      });
      const data = await res.json();
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }]);
      if (data.fallback) setIsFallback(true);
    } catch {
      setMessages([
        ...nextMessages,
        { role: 'assistant', content: 'Lo siento, ha habido un problema técnico. Prueba de nuevo.' },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#0D0D0D',
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: accentColor,
            flexShrink: 0,
            animation: 'chatPulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            fontWeight: 500,
            color: '#555',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Demo en vivo
        </span>
        {isFallback && (
          <span
            style={{
              marginLeft: 'auto',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '9px',
              color: '#444',
              letterSpacing: '0.05em',
            }}
          >
            API demo offline · respuesta simulada
          </span>
        )}
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '9px 13px',
                borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                backgroundColor:
                  msg.role === 'user'
                    ? hexToRgba(accentColor, 0.18)
                    : '#1a1a1a',
                border:
                  msg.role === 'user'
                    ? `1px solid ${hexToRgba(accentColor, 0.3)}`
                    : '1px solid rgba(255,255,255,0.05)',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 300,
                color: msg.role === 'user' ? '#F0F0F0' : '#CCCCCC',
                lineHeight: 1.5,
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                padding: '10px 14px',
                borderRadius: '12px 12px 12px 2px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: accentColor,
                    animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '12px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          gap: '8px',
          flexShrink: 0,
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Escribe un mensaje..."
          disabled={loading}
          style={{
            flex: 1,
            backgroundColor: '#111',
            border: `1px solid ${loading ? 'rgba(255,255,255,0.06)' : hexToRgba(accentColor, 0.2)}`,
            borderRadius: '8px',
            padding: '8px 12px',
            fontFamily: 'var(--v5-font-body)',
            fontSize: '13px',
            fontWeight: 300,
            color: '#E0E0E0',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            backgroundColor: loading || !input.trim() ? '#1a1a1a' : accentColor,
            color: loading || !input.trim() ? '#444' : '#080808',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 14px',
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            fontWeight: 600,
            cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            flexShrink: 0,
          }}
        >
          →
        </button>
      </div>

      <style>{`
        @keyframes chatPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes dotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
