"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type GenState = "idle" | "generating" | "done" | "error";
type Preset = "generic" | "fashion" | "cosmetics" | "food" | "tech" | "home" | "health" | "music" | "sports";

export default function CreativeLabClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<GenState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [preset, setPreset] = useState<Preset>("generic");
  const [triesLeft, setTriesLeft] = useState<number>(3);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const saved = Number(localStorage.getItem("aether_creativelab_tries") || "0");
    setTriesLeft(Math.max(0, 3 - saved));
  }, []);
  function bumpTries() {
    const used = Number(localStorage.getItem("aether_creativelab_tries") || "0") + 1;
    localStorage.setItem("aether_creativelab_tries", String(used));
    setTriesLeft(Math.max(0, 3 - used));
  }
  function resetTries() {
    localStorage.removeItem("aether_creativelab_tries");
    setTriesLeft(3);
  }

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  function handleNewFile(f: File) {
    setError(null); setResult(null); setFile(f);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(f));
  }
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return; handleNewFile(f);
  }

  // Evita abrir la imagen fuera del drop
  useEffect(() => {
    const prevent = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); };
    window.addEventListener("dragover", prevent);
    window.addEventListener("drop", prevent);
    return () => { window.removeEventListener("dragover", prevent); window.removeEventListener("drop", prevent); };
  }, []);

  // Drag & drop real
  useEffect(() => {
    const el = dropRef.current; if (!el) return;
    const onDragOver = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); el.classList.add("dragging"); };
    const onDragLeave = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); el.classList.remove("dragging"); };
    const onDrop = (e: DragEvent) => {
      e.preventDefault(); e.stopPropagation(); el.classList.remove("dragging");
      const f = e.dataTransfer?.files?.[0]; if (f && f.type.startsWith("image/")) handleNewFile(f);
    };
    el.addEventListener("dragover", onDragOver);
    el.addEventListener("dragleave", onDragLeave);
    el.addEventListener("drop", onDrop);
    return () => { el.removeEventListener("dragover", onDragOver); el.removeEventListener("dragleave", onDragLeave); el.removeEventListener("drop", onDrop); };
  }, []);

  const canGenerate = useMemo(() => !!file && status !== "generating" && triesLeft > 0, [file, status, triesLeft]);

  function resetInput() {
    setFile(null); setPreview(null); setResult(null); setStatus("idle"); setError(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (triesLeft <= 0) { setError("Has alcanzado el máximo de 3 pruebas gratuitas. Si quieres más, reserva tu sesión completa."); return; }
    if (!file) { setError("Selecciona o arrastra una imagen (JPG/PNG/WEBP)."); return; }
    const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    if (!allowed.includes(file.type)) { setError("Formato no soportado. Usa PNG, JPG o WEBP."); return; }
    if (file.size > 7 * 1024 * 1024) { setError("La imagen supera 7MB."); return; }

    try {
      setStatus("generating");
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      const form = new FormData();
      form.append("file", file);
      form.append("preset", preset);

      const r = await fetch("/api/generate-image", {
        method: "POST",
        body: form,
        signal: abortRef.current.signal,
        // En dev, puedes descomentar para ignorar rate-limit del server:
        // headers: { "x-aether-dev": "1" },
      });
      const data = await r.json();

      if (!r.ok) {
        if (r.status === 429 && data?.quotaExhausted) {
          setError("Nos quedamos sin cuota gratuita por hoy. Déjanos tu email y te lo enviamos cuando el laboratorio se recargue.");
        } else if (r.status === 429 && data?.rateLimit) {
          setError("Has alcanzado el máximo de 3 pruebas gratuitas en este dispositivo. Vuelve mañana o reserva una sesión completa.");
        } else {
          setError(data?.error || "No se pudo generar la imagen.");
        }
        setStatus("error");
        return;
      }

      if (data?.imageBase64) {
        setResult(`data:image/png;base64,${data.imageBase64}`);
        setStatus("done"); bumpTries();
      } else {
        setStatus("error"); setError("Respuesta sin imagen.");
      }
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      setStatus("error"); setError(err?.message || "Error de red.");
    }
  }

  const presets: { key: Preset; label: string }[] = [
    { key: "generic", label: "Genérico" },
    { key: "fashion", label: "Moda" },
    { key: "cosmetics", label: "Cosmética" },
    { key: "food", label: "Alimentación" },
    { key: "tech", label: "Tecnología" },
    { key: "home", label: "Hogar" },
    { key: "health", label: "Salud" },
    { key: "music", label: "Música" },
    { key: "sports", label: "Deportes" },
  ];

  return (
    <div className="clab-grid">
      <section className="panel">
        <h3 className="panel-title">Input</h3>

        <div className="presets" role="tablist" aria-label="Selecciona tu tipo de producto">
          {presets.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={preset === key}
              className={`preset-btn ${preset === key ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); setPreset(key); }}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <label className="label" htmlFor="file">Sube o arrastra una imagen (JPG/PNG/WEBP) — máx. 7MB</label>

        <div ref={dropRef} className="drop" onClick={() => inputRef.current?.click()}>
          <input id="file" ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={onSelectFile} style={{ display: "none" }} />
          {!preview ? (
            <div className="drop-empty">Arrastra aquí tu imagen, haz clic para seleccionar o pega desde el portapapeles (Ctrl/Cmd + V)</div>
          ) : (
            <div className="drop-preview">
              <img src={preview} alt="preview" className="preview-img" />
              <div className="preview-meta">
                <div className="muted">{file?.name} · {Math.round((file!.size / 1024 / 1024) * 10) / 10} MB</div>
                <div className="row">
                  <button type="button" className="btn ghost" onClick={resetInput}>Cambiar imagen</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="actions">
          <button type="submit" className="btn primary" disabled={!canGenerate} onClick={onSubmit}>
            {status === "generating" ? "Generando..." : `Probar gratis (${triesLeft}/3)`}
          </button>

          <button
            type="button"
            className="btn ghost"
            onClick={async () => {
              resetTries(); setStatus("idle"); setError(null); setResult(null);
              try { await fetch("/api/generate", { method: "DELETE" }); } catch { }
              alert("Contador reiniciado. (En producción este botón no aparecerá)");
            }}
          >
            Reiniciar prueba
          </button>

          {status === "generating" && <span className="muted">Un momento…</span>}
        </div>

        {error && <div className="error">{error}</div>}
      </section>

      <section className="panel">
        <h3 className="panel-title">Output</h3>
        {!result ? (
          <div className="placeholder">
            <div className="muted">Aquí verás el resultado generado a partir de tu imagen.</div>
            <ul className="muted list">
              <li>— Iluminación y encuadre de estudio</li>
              <li>— Fondo y contexto acordes a tu sector</li>
              <li>— Respeto máximo del producto original</li>
            </ul>
          </div>
        ) : (
          <div className="outbox">
            <img src={result} alt="Resultado AetherLabs" className="out-img" />
          </div>
        )}
      </section>

      <style jsx>{`
        .clab-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 980px) { .clab-grid { grid-template-columns: 1fr 1fr; } }
        .panel { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 16px; padding: 18px; backdrop-filter: blur(2px); }
        .panel-title { margin: 0 0 10px 0; font-size: 16px; font-weight: 700; opacity: .95; letter-spacing: .02em; }

        .presets { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
        .preset-btn { border: 1px solid rgba(255,255,255,0.25); background: rgba(0,0,0,0.2); color: #e8f0ff; border-radius: 10px; padding: 8px 12px; cursor: pointer; font-size: 13px; }
        .preset-btn:hover { border-color: rgba(130,255,31,0.6); }
        .preset-btn.active { background: #1a5cff; border-color: #1a5cff; color: #fff; }

        .label { display: block; font-size: 13px; opacity: .9; margin: 6px 0; }

        .drop { border: 1.5px dashed rgba(255,255,255,0.3); border-radius: 14px; padding: 20px; text-align: center; cursor: pointer; margin-bottom: 14px; min-height: 120px; display: grid; place-items: center; background: rgba(0,0,0,0.15); transition: border-color .15s, background .15s; }
        .drop.dragging { border-color: #82ff1f; background: rgba(130,255,31,0.08); }
        .drop-empty { opacity: .85; }

        .drop-preview { display: flex; gap: 14px; align-items: flex-start; justify-content: center; flex-wrap: wrap; width: 100%; }
        .preview-img { width: 240px; height: auto; border-radius: 8px; box-shadow: 0 6px 24px rgba(0,0,0,0.35); }
        .preview-meta { text-align: left; max-width: 340px; }
        .muted { opacity: .85; font-size: 13px; }
        .row { display: flex; gap: 8px; flex-wrap: wrap; }

        .actions { display: flex; gap: 10px; align-items: center; margin-top: 12px; flex-wrap: wrap; }
        .btn { display: inline-block; border-radius: 10px; padding: 10px 14px; text-decoration: none; cursor: pointer; transition: transform .06s; user-select: none; }
        .btn:active { transform: translateY(1px); }
        .btn.primary { background: #82ff1f; color: #0a0f1f; border: none; font-weight: 800; }
        .btn.ghost { background: transparent; color: #e8f0ff; border: 1px solid rgba(255,255,255,0.35); }

        .placeholder { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; min-height: 240px; display: grid; place-content: center; text-align: center; }
        .list { margin: 10px auto 0; max-width: 360px; text-align: left; }

        .outbox { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; }
        .out-img { width: 100%; max-width: 640px; border-radius: 12px; display: block; margin: 0 auto; box-shadow: 0 8px 28px rgba(0,0,0,0.45); }

        .error { margin-top: 12px; background: rgba(255,60,60,0.12); border: 1px solid rgba(255,60,60,0.45); color: #ffdcdc; border-radius: 10px; padding: 10px 12px; font-size: 14px; }
      `}</style>
    </div>
  );
}
