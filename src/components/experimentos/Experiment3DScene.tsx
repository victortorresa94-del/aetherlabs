'use client';

import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float, Sparkles, Environment,
  MeshDistortMaterial, MeshTransmissionMaterial, MeshWobbleMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import createGlobe from 'cobe';

type GeometryType = 'sphere' | 'torus' | 'box' | 'cone' | 'icosahedron' | 'octahedron' | 'cylinder';
type AnimationType = 'float' | 'rotate' | 'pulse';

// ─── 01 Bamba Stock ─────────────────────────────────────────────────────────
// MeshDistortMaterial blob + scan rings → IA de inventario, visión por computador

function BambaScene({ color }: { color: string }) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (ring1.current) ring1.current.rotation.z += d * 0.9;
    if (ring2.current) {
      ring2.current.rotation.x += d * 0.5;
      ring2.current.rotation.z -= d * 0.3;
    }
  });

  return (
    <>
      <Float speed={1.8} floatIntensity={0.5} rotationIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[1.15, 64, 64]} />
          <MeshDistortMaterial color={color} distort={0.38} speed={2.2} metalness={0.15} roughness={0.05} />
        </mesh>
      </Float>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.016, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring2} rotation={[0.8, 0, 0.4]}>
        <torusGeometry args={[2.1, 0.01, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} />
      </mesh>
      <Environment preset="city" />
    </>
  );
}

// ─── 02 Artiverse — cobe Globe ──────────────────────────────────────────────
// Globo interactivo (Aceternity/Magic UI pattern) → outreach global, red de contactos

function GlobeScene({ color }: { color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  };

  const onRender = useCallback((state: Record<string, unknown>) => {
    if (pointerInteracting.current !== null) {
      phiRef.current += pointerInteractionMovement.current / 200;
    } else {
      phiRef.current += 0.003;
    }
    (state as { phi: number }).phi = phiRef.current;
    (state as { width: number }).width = widthRef.current * 2;
    (state as { height: number }).height = widthRef.current * 2;
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const c = new THREE.Color(color);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.5,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.18, 0.18, 0.22],
      markerColor: [c.r, c.g, c.b],
      glowColor: [c.r * 0.5 + 0.1, c.g * 0.5 + 0.1, c.b * 0.5 + 0.1],
      markers: [
        { location: [40.4168, -3.7038], size: 0.07 },  // Madrid
        { location: [41.3851,  2.1734], size: 0.10 },  // Barcelona
        { location: [48.8566,  2.3522], size: 0.05 },  // Paris
        { location: [51.5074, -0.1278], size: 0.05 },  // London
        { location: [40.7128,-74.0060], size: 0.06 },  // NYC
        { location: [35.6762,139.6503], size: 0.04 },  // Tokyo
      ],
      onRender,
    });

    widthRef.current = canvasRef.current.offsetWidth;
    const ro = new ResizeObserver(() => {
      if (canvasRef.current) widthRef.current = canvasRef.current.offsetWidth;
    });
    ro.observe(canvasRef.current);

    return () => { globe.destroy(); ro.disconnect(); };
  }, [color, onRender]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => updateMovement(e.touches[0].clientX)}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '440px',
          maxHeight: '440px',
          aspectRatio: '1 / 1',
          cursor: 'grab',
          contain: 'layout style size',
        }}
      />
    </div>
  );
}

// ─── 04 Bramer ───────────────────────────────────────────────────────────────
// MeshTransmissionMaterial (glass) → precisión técnica, cristal/ERP

function BramerScene({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.28;
      ref.current.rotation.y += d * 0.42;
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <octahedronGeometry args={[1.35, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          transmission={0.95}
          roughness={0.04}
          thickness={0.4}
          ior={1.6}
          chromaticAberration={0.05}
          color={color}
        />
      </mesh>
      <mesh ref={ref} scale={1.05}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
      <Environment preset="studio" />
    </>
  );
}

// ─── 05 Bonito Sound ─────────────────────────────────────────────────────────
// MeshWobbleMaterial bars → ecualizador musical

function BonitoScene({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const BARS = 9;
  const phases = Array.from({ length: BARS }, (_, i) => (i * Math.PI * 2) / BARS + Math.random() * 0.6);

  useFrame((s) => {
    if (!groupRef.current) return;
    const t = s.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const h = 0.25 + Math.abs(Math.sin(t * 2.8 + phases[i])) * 2.4;
      (child as THREE.Mesh).scale.y = h;
      (child as THREE.Mesh).position.y = h * 0.5 - 1.1;
    });
    groupRef.current.rotation.y += 0.004;
  });

  return (
    <>
      <group ref={groupRef}>
        {Array.from({ length: BARS }, (_, i) => (
          <mesh key={i} position={[(i - (BARS - 1) / 2) * 0.46, 0, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 1, 6]} />
            <MeshWobbleMaterial color={color} factor={0.15} speed={3} metalness={0.2} roughness={0.2} />
          </mesh>
        ))}
      </group>
      <Environment preset="dawn" />
    </>
  );
}

// ─── 06 Musikeo ──────────────────────────────────────────────────────────────
// DistortMaterial torus → ritmo, ondas, comunidad musical

function MusiceoScene({ color }: { color: string }) {
  return (
    <>
      <Float speed={1.5} floatIntensity={0.6} rotationIntensity={0.8}>
        <mesh>
          <torusGeometry args={[1.1, 0.42, 32, 100]} />
          <MeshDistortMaterial color={color} distort={0.3} speed={3} metalness={0.1} roughness={0.1} />
        </mesh>
      </Float>
      <Sparkles count={18} scale={5} size={1.5} speed={0.4} color={color} />
      <Environment preset="city" />
    </>
  );
}

// ─── 08 Asesoría Inteligente ─────────────────────────────────────────────────
// Glass sphere + orbits → disponibilidad 24/7, precisión

function AsesoriaScene({ color }: { color: string }) {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (r1.current) r1.current.rotation.z += d * 0.65;
    if (r2.current) r2.current.rotation.y += d * 0.42;
    if (r3.current) r3.current.rotation.x += d * 0.28;
  });

  return (
    <>
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.15}>
        <mesh>
          <sphereGeometry args={[1.05, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            transmission={0.92}
            roughness={0.05}
            thickness={0.35}
            ior={1.5}
            chromaticAberration={0.04}
            color={color}
          />
        </mesh>
      </Float>
      <mesh ref={r1} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[1.72, 0.018, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <mesh ref={r2} rotation={[0.35, 0, 1.2]}>
        <torusGeometry args={[2.2, 0.013, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.32} />
      </mesh>
      <mesh ref={r3} rotation={[0.8, 0.6, 0]}>
        <torusGeometry args={[2.6, 0.009, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.16} />
      </mesh>
      <Environment preset="studio" />
    </>
  );
}

// ─── 09 Cannabis Club ────────────────────────────────────────────────────────
// DistortMaterial icosahedron + wireframe + scan line → OCR, automatización

function CannabisScene({ color }: { color: string }) {
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame((s) => {
    if (scanRef.current) {
      scanRef.current.position.y = Math.sin(s.clock.elapsedTime * 1.6) * 1.3;
      (scanRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.2 + Math.abs(Math.sin(s.clock.elapsedTime * 1.6)) * 0.55;
    }
  });

  return (
    <>
      <Float speed={1.3} floatIntensity={0.4} rotationIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial color={color} distort={0.25} speed={1.8} metalness={0.2} roughness={0.1} transparent opacity={0.85} />
        </mesh>
        <mesh scale={1.06}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      <mesh ref={scanRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.02, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <Environment preset="city" />
    </>
  );
}

// ─── 10 Aura ─────────────────────────────────────────────────────────────────
// Big DistortMaterial blob + Sparkles → presencia digital, marca personal, aura

function AuraScene({ color }: { color: string }) {
  return (
    <>
      <Float speed={1.1} floatIntensity={0.7} rotationIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[1.35, 128, 128]} />
          <MeshDistortMaterial color={color} distort={0.55} speed={1.8} metalness={0.05} roughness={0.0} />
        </mesh>
      </Float>
      <Sparkles count={24} scale={6} size={1.8} speed={0.3} color={color} />
      <Environment preset="dawn" />
    </>
  );
}

// ─── Generic fallback ────────────────────────────────────────────────────────

function GenericScene({ geometry, animationType, color }: {
  geometry: GeometryType;
  animationType: AnimationType;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((s, d) => {
    if (!ref.current) return;
    if (animationType === 'rotate') {
      ref.current.rotation.x += d * 0.3;
      ref.current.rotation.y += d * 0.5;
    } else if (animationType === 'pulse') {
      ref.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 1.5) * 0.07);
      ref.current.rotation.y += d * 0.2;
    }
  });

  const geo: Record<GeometryType, React.ReactNode> = {
    sphere:      <sphereGeometry args={[1.2, 64, 64]} />,
    torus:       <torusGeometry args={[1.1, 0.38, 24, 100]} />,
    box:         <boxGeometry args={[1.8, 1.8, 1.8]} />,
    cone:        <coneGeometry args={[1, 2, 6]} />,
    icosahedron: <icosahedronGeometry args={[1.3, 0]} />,
    octahedron:  <octahedronGeometry args={[1.4, 0]} />,
    cylinder:    <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />,
  };

  const inner = (
    <mesh ref={ref}>
      {geo[geometry]}
      <MeshDistortMaterial color={color} distort={0.3} speed={2} metalness={0.1} roughness={0.1} />
    </mesh>
  );

  return animationType === 'float'
    ? <><Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>{inner}</Float><Environment preset="city" /></>
    : <>{inner}<Environment preset="city" /></>;
}

// ─── R3F scene selector ──────────────────────────────────────────────────────

function SceneContent({ id, geometry, animationType, accentColor }: {
  id: string;
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
}) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 6]} intensity={2} color={accentColor} />
      <pointLight position={[-3, -3, -4]} intensity={0.5} color="#ffffff" />
      {(() => {
        switch (id) {
          case 'bamba-stock':          return <BambaScene color={accentColor} />;
          case 'bramer':               return <BramerScene color={accentColor} />;
          case 'bonito-sound':         return <BonitoScene color={accentColor} />;
          case 'musikeo':              return <MusiceoScene color={accentColor} />;
          case 'asesoria-inteligente': return <AsesoriaScene color={accentColor} />;
          case 'cannabis-club':        return <CannabisScene color={accentColor} />;
          case 'aura':                 return <AuraScene color={accentColor} />;
          default: return (
            <GenericScene geometry={geometry} animationType={animationType} color={accentColor} />
          );
        }
      })()}
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({ id, geometry, animationType, accentColor }: Props) {
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '120px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  // artiverse uses cobe — plain canvas, no R3F
  if (id === 'artiverse') {
    return (
      <div
        ref={containerRef}
        style={{ width: '100%', aspectRatio: '1 / 1', maxHeight: '440px', position: 'relative' }}
      >
        {mounted && inView && <GlobeScene color={accentColor} />}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', aspectRatio: '1 / 1', maxHeight: '440px', position: 'relative' }}
    >
      {mounted && inView && (
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <SceneContent
              id={id}
              geometry={geometry}
              animationType={animationType}
              accentColor={accentColor}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
