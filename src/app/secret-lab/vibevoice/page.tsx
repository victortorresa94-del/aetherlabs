'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

/* ── Tipos ─────────────────────────────────────────────────────────────── */
type Mode = 'tts' | 'asr';
type TTSVoice = 'default' | 'es-ES-ElviraNeural' | 'es-ES-AlvaroNeural' | 'en-US-AriaNeural' | 'en-US-GuyNeural';

const VOICES: { id: TTSVoice; label: string; lang: string }[] = [
  { id: 'default', label: 'Default', lang: 'EN' },
  { id: 'en-US-AriaNeural', label: 'Aria', lang: 'EN ♀' },
  { id: 'en-US-GuyNeural', label: 'Guy', lang: 'EN ♂' },
  { id: 'es-ES-ElviraNeural', label: 'Elvira', lang: 'ES ♀' },
  { id: 'es-ES-AlvaroNeural', label: 'Álvaro', lang: 'ES ♂' },
];

/* ── Estilos compartidos ────────────────────────────────────────────────── */
const mono = { fontFamily: 'var(--v5-font-mono)' } as const;
const display = { fontFamily: 'var(--v5-font-display)' } as const;
const body = { fontFamily: 'var(--v5-font-body)' } as const;

export default function VibeVoicePage() {
  const [mode, setMode] = useState<Mode>('tts');

  /* TTS state */
  const [ttsText, setTtsText] = useState('Hola, soy Jason, el agente de voz de Aether Labs. ¿En qué puedo ayudarte hoy?');
  const [ttsVoice, setTtsVoice] = useState<TTSVoice>('es-ES-ElviraNeural');
  const [ttsSpeed, setTtsSpeed] = useState(1.0);
  const [ttsLoading, setTtsLoading] = useState(false);
  const [ttsAudio, setTtsAudio] = useState<string | null>(null);
  const [ttsError, setTtsError] = useState<string | null>(null);

  /* ASR state */
  const [asrFile, setAsrFile] = useState<File | null>(null);
  const [asrText, setAsrText] = useState('');
  const [asrLoading, setAsrLoading] = useState(false);
  const [asrError, setAsrError] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  /* ── TTS: llamar a la API ─────────────────────────────────────────────── */
  async function handleTTS() {
    if (!ttsText.trim()) return;
    setTtsLoading(true);
    setTtsError(null);
    setTtsAudio(null);
    try {
      const res = await fetch('/api/vibevoice/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: ttsText, voice: ttsVoice, speed: ttsSpeed }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Error generando audio');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setTtsAudio(url);
    } catch (e: unknown) {
      setTtsError(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setTtsLoading(false);
    }
  }

  /* ── ASR: grabar ────────────────────────────────────────────────────────── */
  async function toggleRecording() {
    if (recording) {
      mediaRef.current?.stop();
      setRecording(false);
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    chunksRef.current = [];
    mr.ondataavailable = (e) => chunksRef.current.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      setAsrFile(new File([blob], 'grabacion.webm', { type: 'audio/webm' }));
      stream.getTracks().forEach((t) => t.stop());
    };
    mr.start();
    mediaRef.current = mr;
    setRecording(true);
  }

  /* ── ASR: transcribir ────────────────────────────────────────────────── */
  async function handleASR() {
    if (!asrFile) return;
    setAsrLoading(true);
    setAsrError(null);
    setAsrText('');
    try {
      const fd = new FormData();
      fd.append('audio', asrFile);
      const res = await fetch('/api/vibevoice/asr', { method: 'POST', body: fd });
      if (!res.ok) throw new Error((await res.json()).error || 'Error transcribiendo');
      const { text } = await res.json();
      setAsrText(text);
    } catch (e: unknown) {
      setAsrError(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setAsrLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#080808' }}>
      <ScrollAnimations />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="v5-container">
          <Link href="/secret-lab" style={{ ...mono, fontSize: '11px', color: '#444', letterSpacing: '0.1em', textDecoration: 'none' }}>
            ← Secret Lab
          </Link>
          <div style={{ marginTop: '32px' }}>
            <span style={{ ...mono, fontSize: '11px', color: '#10B981', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              VibeVoice · Microsoft Research
            </span>
            <h1 style={{ ...display, fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#F5F5F0', maxWidth: '720px', marginBottom: '20px' }}>
              Voz sintética<br />de nivel frontier.
            </h1>
            <p style={{ ...body, fontSize: '16px', fontWeight: 300, color: 'rgba(245,245,240,0.4)', maxWidth: '540px', lineHeight: 1.7 }}>
              TTS en tiempo real con VibeVoice-Realtime-0.5B y transcripción de audio largo con ASR-7B. Ambos modelos de Microsoft Research via Hugging Face.
            </p>
          </div>
        </div>
      </section>

      {/* ── TABS ──────────────────────────────────────────────────────────── */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="v5-container">

          {/* Tab selector */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '40px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '4px', width: 'fit-content' }}>
            {(['tts', 'asr'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  ...mono,
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  background: mode === m ? '#F5F5F0' : 'transparent',
                  color: mode === m ? '#080808' : '#555555',
                }}
              >
                {m === 'tts' ? 'Texto → Voz' : 'Voz → Texto'}
              </button>
            ))}
          </div>

          {/* ── PANEL TTS ──────────────────────────────────────────────── */}
          {mode === 'tts' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>
              {/* Main */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ ...mono, fontSize: '11px', color: '#555', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
                    TEXTO A SINTETIZAR
                  </label>
                  <textarea
                    value={ttsText}
                    onChange={(e) => setTtsText(e.target.value)}
                    placeholder="Escribe el texto que quieres convertir a voz..."
                    rows={8}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '20px',
                      color: '#F5F5F0',
                      ...body,
                      fontSize: '15px',
                      lineHeight: 1.7,
                      resize: 'vertical',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                  <span style={{ ...mono, fontSize: '10px', color: '#333', float: 'right', marginTop: '4px' }}>
                    {ttsText.length} caracteres
                  </span>
                </div>

                <button
                  onClick={handleTTS}
                  disabled={ttsLoading || !ttsText.trim()}
                  style={{
                    padding: '16px 32px',
                    background: ttsLoading ? 'rgba(255,255,255,0.05)' : '#F5F5F0',
                    color: ttsLoading ? '#555' : '#080808',
                    border: 'none',
                    borderRadius: '0',
                    ...body,
                    fontSize: '15px',
                    fontWeight: 400,
                    cursor: ttsLoading ? 'not-allowed' : 'pointer',
                    transition: 'background 200ms',
                    alignSelf: 'flex-start',
                  }}
                >
                  {ttsLoading ? 'Generando audio...' : 'Generar voz →'}
                </button>

                {ttsError && (
                  <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '16px' }}>
                    <span style={{ ...mono, fontSize: '12px', color: '#EF4444' }}>{ttsError}</span>
                  </div>
                )}

                {ttsAudio && (
                  <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px', padding: '24px' }}>
                    <span style={{ ...mono, fontSize: '11px', color: '#10B981', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
                      AUDIO GENERADO
                    </span>
                    <audio ref={audioRef} controls src={ttsAudio} style={{ width: '100%', borderRadius: '8px' }} />
                    <a
                      href={ttsAudio}
                      download="vibevoice-output.wav"
                      style={{ ...mono, fontSize: '11px', color: '#10B981', display: 'inline-block', marginTop: '12px', textDecoration: 'none', letterSpacing: '0.08em' }}
                    >
                      ↓ Descargar WAV
                    </a>
                  </div>
                )}
              </div>

              {/* Sidebar config */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <span style={{ ...mono, fontSize: '11px', color: '#555', letterSpacing: '0.15em' }}>CONFIGURACIÓN</span>

                <div>
                  <label style={{ ...mono, fontSize: '11px', color: '#555', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>VOZ</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {VOICES.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setTtsVoice(v.id)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 14px',
                          background: ttsVoice === v.id ? 'rgba(245,245,240,0.08)' : 'transparent',
                          border: `1px solid ${ttsVoice === v.id ? 'rgba(245,245,240,0.15)' : 'rgba(255,255,255,0.05)'}`,
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 150ms',
                        }}
                      >
                        <span style={{ ...body, fontSize: '14px', color: ttsVoice === v.id ? '#F5F5F0' : '#666' }}>{v.label}</span>
                        <span style={{ ...mono, fontSize: '10px', color: '#444' }}>{v.lang}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ ...mono, fontSize: '11px', color: '#555', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                    VELOCIDAD — {ttsSpeed.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min={0.5}
                    max={2.0}
                    step={0.1}
                    value={ttsSpeed}
                    onChange={(e) => setTtsSpeed(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: '#F5F5F0' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                    <span style={{ ...mono, fontSize: '10px', color: '#333' }}>0.5x</span>
                    <span style={{ ...mono, fontSize: '10px', color: '#333' }}>2.0x</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                  <span style={{ ...mono, fontSize: '10px', color: '#333', display: 'block', marginBottom: '4px' }}>MODELO</span>
                  <span style={{ ...body, fontSize: '13px', color: '#555' }}>VibeVoice-Realtime-0.5B</span>
                  <span style={{ ...mono, fontSize: '10px', color: '#2A2A2A', display: 'block', marginTop: '4px' }}>microsoft/VibeVoice-Realtime-0.5B</span>
                </div>
              </div>
            </div>
          )}

          {/* ── PANEL ASR ──────────────────────────────────────────────── */}
          {mode === 'asr' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>
              {/* Main */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Upload / Record */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      flex: 1,
                      padding: '40px 24px',
                      background: asrFile ? 'rgba(16,185,129,0.06)' : 'rgba(255,255,255,0.03)',
                      border: `1px dashed ${asrFile ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ ...mono, fontSize: '24px', marginBottom: '8px' }}>📁</div>
                    <div style={{ ...body, fontSize: '14px', color: asrFile ? '#10B981' : '#555' }}>
                      {asrFile ? asrFile.name : 'Subir audio (MP3, WAV, M4A, WebM)'}
                    </div>
                    {asrFile && (
                      <div style={{ ...mono, fontSize: '11px', color: '#333', marginTop: '4px' }}>
                        {(asrFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    )}
                  </button>
                  <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: 'none' }} onChange={(e) => e.target.files?.[0] && setAsrFile(e.target.files[0])} />

                  <button
                    onClick={toggleRecording}
                    style={{
                      padding: '24px',
                      background: recording ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${recording ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      minWidth: '100px',
                    }}
                  >
                    <span style={{ fontSize: '28px' }}>{recording ? '⏹️' : '🎙️'}</span>
                    <span style={{ ...mono, fontSize: '10px', color: recording ? '#EF4444' : '#555', letterSpacing: '0.08em' }}>
                      {recording ? 'DETENER' : 'GRABAR'}
                    </span>
                  </button>
                </div>

                <button
                  onClick={handleASR}
                  disabled={asrLoading || !asrFile}
                  style={{
                    padding: '16px 32px',
                    background: asrLoading || !asrFile ? 'rgba(255,255,255,0.05)' : '#F5F5F0',
                    color: asrLoading || !asrFile ? '#555' : '#080808',
                    border: 'none',
                    borderRadius: '0',
                    ...body,
                    fontSize: '15px',
                    fontWeight: 400,
                    cursor: asrLoading || !asrFile ? 'not-allowed' : 'pointer',
                    transition: 'background 200ms',
                    alignSelf: 'flex-start',
                  }}
                >
                  {asrLoading ? 'Transcribiendo...' : 'Transcribir →'}
                </button>

                {asrError && (
                  <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '16px' }}>
                    <span style={{ ...mono, fontSize: '12px', color: '#EF4444' }}>{asrError}</span>
                  </div>
                )}

                {asrText && (
                  <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px', padding: '24px' }}>
                    <span style={{ ...mono, fontSize: '11px', color: '#10B981', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
                      TRANSCRIPCIÓN
                    </span>
                    <p style={{ ...body, fontSize: '15px', color: '#F5F5F0', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                      {asrText}
                    </p>
                    <button
                      onClick={() => navigator.clipboard.writeText(asrText)}
                      style={{ ...mono, fontSize: '11px', color: '#10B981', background: 'none', border: 'none', cursor: 'pointer', marginTop: '16px', letterSpacing: '0.08em' }}
                    >
                      📋 Copiar texto
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar info */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ ...mono, fontSize: '11px', color: '#555', letterSpacing: '0.15em' }}>INFO DEL MODELO</span>

                {[
                  { label: 'Modelo', value: 'VibeVoice-ASR-7B' },
                  { label: 'Audio máximo', value: '60 minutos' },
                  { label: 'Idiomas', value: '50+ idiomas' },
                  { label: 'Salida', value: 'Quién · Cuándo · Qué' },
                  { label: 'Hotwords', value: 'Soportado' },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '16px' }}>
                    <span style={{ ...mono, fontSize: '10px', color: '#333', display: 'block', marginBottom: '4px', letterSpacing: '0.08em' }}>{item.label}</span>
                    <span style={{ ...body, fontSize: '14px', color: '#666' }}>{item.value}</span>
                  </div>
                ))}

                <div>
                  <span style={{ ...mono, fontSize: '10px', color: '#2A2A2A', display: 'block' }}>microsoft/VibeVoice-ASR</span>
                  <a
                    href="https://huggingface.co/microsoft/VibeVoice-ASR"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...mono, fontSize: '10px', color: '#444', display: 'block', marginTop: '8px', textDecoration: 'none' }}
                  >
                    Ver en HuggingFace →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
