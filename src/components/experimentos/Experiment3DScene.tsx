'use client';

import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

type GeometryType = 'sphere' | 'torus' | 'box' | 'cone' | 'icosahedron' | 'octahedron' | 'cylinder';
type AnimationType = 'float' | 'rotate' | 'pulse';

// ─── Particles cloud ──────────────────────────────────────────────────────────

function ParticleCloud({ count, color }: { count: number; color: string }) {
  const ref = useRef<THREE.Points>(null);

  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 1.8;
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.07;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial color={color} size={0.035} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

// ─── 01 Bamba Stock — Scan Sphere ────────────────────────────────────────────
// Representa: visión por computador, escaneo de producto, IA de inventario

function ScanSphere({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((s, d) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += d * 0.25;
      const scale = 1 + Math.sin(s.clock.elapsedTime * 1.8) * 0.06;
      meshRef.current.scale.setScalar(scale);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += d * 0.9;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += d * 0.6;
      ring2Ref.current.rotation.z -= d * 0.3;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.1, 40, 40]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} metalness={0.55} roughness={0.3} />
      </mesh>
      {/* Orbiting scan ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.018, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.65} />
      </mesh>
      {/* Second tilted ring */}
      <mesh ref={ring2Ref} rotation={[0.8, 0, 0.4]}>
        <torusGeometry args={[2.0, 0.012, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </>
  );
}

// ─── 02 Artiverse — Network Crystal ──────────────────────────────────────────
// Representa: red de contactos, conexiones, outreach

function NetworkCrystal({ color }: { color: string }) {
  const solidRef = useRef<THREE.Mesh>(null);
  const wireRef  = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    [solidRef, wireRef].forEach(r => {
      if (!r.current) return;
      r.current.rotation.x += d * 0.22;
      r.current.rotation.y += d * 0.38;
    });
  });

  return (
    <>
      <mesh ref={solidRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.18} metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh ref={wireRef} scale={1.06}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.45} />
      </mesh>
      <Sparkles count={14} scale={4.5} size={1.4} speed={0.4} color={color} />
    </>
  );
}

// ─── 04 Bramer — Tech Octahedron ─────────────────────────────────────────────
// Representa: precisión técnica, ERP, sistemático

function TechOctahedron({ color }: { color: string }) {
  const solidRef = useRef<THREE.Mesh>(null);
  const wireRef  = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    [solidRef, wireRef].forEach(r => {
      if (!r.current) return;
      r.current.rotation.x += d * 0.32;
      r.current.rotation.y += d * 0.48;
    });
  });

  return (
    <>
      <mesh ref={solidRef}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.12} metalness={0.88} roughness={0.12} />
      </mesh>
      <mesh ref={wireRef} scale={1.06}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </>
  );
}

// ─── 05 Bonito Sound — Audio Bars ────────────────────────────────────────────
// Representa: visualizador musical, ecualizador, sonido

function AudioBars({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const BARS = 9;
  const phases = useMemo(() =>
    Array.from({ length: BARS }, (_, i) => (i * Math.PI * 2) / BARS + Math.random() * 0.5),
    []
  );

  useFrame((s) => {
    if (!groupRef.current) return;
    const t = s.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const h = 0.3 + Math.abs(Math.sin(t * 2.5 + phases[i])) * 2.2;
      (child as THREE.Mesh).scale.y = h;
      (child as THREE.Mesh).position.y = (h * 0.5) - 1.1;
    });
    groupRef.current.rotation.y += 0.004;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: BARS }, (_, i) => (
        <mesh key={i} position={[(i - (BARS - 1) / 2) * 0.46, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 6]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} metalness={0.35} roughness={0.45} />
        </mesh>
      ))}
    </group>
  );
}

// ─── 06 Musikeo — Rhythm Torus ───────────────────────────────────────────────
// Representa: ritmo, música, community

function RhythmTorus({ color }: { color: string }) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((s, d) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += d * 0.28;
      outerRef.current.rotation.y += d * 0.45;
      const scale = 1 + Math.sin(s.clock.elapsedTime * 2.2) * 0.07;
      outerRef.current.scale.setScalar(scale);
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= d * 0.35;
      innerRef.current.rotation.z += d * 0.2;
    }
  });

  return (
    <>
      <mesh ref={outerRef}>
        <torusGeometry args={[1.1, 0.38, 18, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} metalness={0.3} roughness={0.45} />
      </mesh>
      <mesh ref={innerRef} scale={0.65}>
        <torusGeometry args={[1.1, 0.14, 10, 60]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
      <Sparkles count={12} scale={4} size={1.2} speed={0.5} color={color} />
    </>
  );
}

// ─── 08 Asesoría Inteligente — Orbital Sphere ────────────────────────────────
// Representa: siempre disponible, orbita constante, precisión

function OrbitalSphere({ color }: { color: string }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += d * 0.7;
    if (ring2Ref.current) ring2Ref.current.rotation.y += d * 0.45;
    if (ring3Ref.current) ring3Ref.current.rotation.x += d * 0.3;
  });

  return (
    <>
      <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[1, 36, 36]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.18} metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      <mesh ref={ring1Ref} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[1.7, 0.022, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[0.35, 0, 1.2]}>
        <torusGeometry args={[2.15, 0.016, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0.8, 0.6, 0]}>
        <torusGeometry args={[2.55, 0.012, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </>
  );
}

// ─── 09 Cannabis Club — Scan Icosahedron ─────────────────────────────────────
// Representa: OCR, escáner digital, reconocimiento

function ScanIcosahedron({ color }: { color: string }) {
  const solidRef = useRef<THREE.Mesh>(null);
  const wireRef  = useRef<THREE.Mesh>(null);
  const scanRef  = useRef<THREE.Mesh>(null);

  useFrame((s, d) => {
    [solidRef, wireRef].forEach(r => {
      if (!r.current) return;
      r.current.rotation.x += d * 0.2;
      r.current.rotation.y += d * 0.3;
    });
    if (scanRef.current) {
      const t = s.clock.elapsedTime;
      (scanRef.current as THREE.Mesh).position.y = Math.sin(t * 1.8) * 1.3;
      const mat = (scanRef.current as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = 0.25 + Math.abs(Math.sin(t * 1.8)) * 0.5;
    }
  });

  return (
    <>
      <mesh ref={solidRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.13} metalness={0.4} roughness={0.5} transparent opacity={0.75} />
      </mesh>
      <mesh ref={wireRef} scale={1.04}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
      {/* Horizontal scan ring */}
      <mesh ref={scanRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.022, 8, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

// ─── 10 Aura — Aura Ring ─────────────────────────────────────────────────────
// Representa: presencia digital, marca personal, brillo propio

function AuraRing({ color }: { color: string }) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef  = useRef<THREE.Mesh>(null);

  useFrame((s, d) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += d * 0.18;
      outerRef.current.rotation.y += d * 0.35;
      const mat = outerRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.28 + Math.sin(s.clock.elapsedTime * 1.3) * 0.14;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= d * 0.28;
      innerRef.current.rotation.z += d * 0.15;
    }
    if (coreRef.current) {
      const scale = 1 + Math.sin(s.clock.elapsedTime * 1.6) * 0.08;
      coreRef.current.scale.setScalar(scale);
    }
  });

  return (
    <>
      {/* Outer glow ring */}
      <mesh ref={outerRef}>
        <torusGeometry args={[1.2, 0.42, 20, 100]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} metalness={0.2} roughness={0.5} />
      </mesh>
      {/* Inner counter-rotating ring */}
      <mesh ref={innerRef} scale={0.72}>
        <torusGeometry args={[1.2, 0.16, 10, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      {/* Central sphere */}
      <mesh ref={coreRef} scale={0.36}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.1} roughness={0.7} />
      </mesh>
      <Sparkles count={16} scale={5} size={1.5} speed={0.35} color={color} />
    </>
  );
}

// ─── Generic fallback ────────────────────────────────────────────────────────

function GenericMesh({ geometry, animationType, color }: {
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

  const inner: Record<GeometryType, React.ReactNode> = {
    sphere:      <sphereGeometry args={[1.2, 32, 32]} />,
    torus:       <torusGeometry args={[1.1, 0.35, 16, 80]} />,
    box:         <boxGeometry args={[1.8, 1.8, 1.8]} />,
    cone:        <coneGeometry args={[1, 2, 6]} />,
    icosahedron: <icosahedronGeometry args={[1.3, 0]} />,
    octahedron:  <octahedronGeometry args={[1.4, 0]} />,
    cylinder:    <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />,
  };

  const floatWrap = (node: React.ReactNode) =>
    animationType === 'float'
      ? <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.5}>{node}</Float>
      : node;

  return floatWrap(
    <mesh ref={ref}>
      {inner[geometry]}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} metalness={0.5} roughness={0.3} />
    </mesh>
  ) as React.ReactElement;
}

// ─── Scene selector ──────────────────────────────────────────────────────────

function SceneContent({ id, geometry, animationType, accentColor, particleCount }: {
  id: string;
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
  particleCount: number;
}) {
  const scene = (() => {
    switch (id) {
      case 'bamba-stock':           return <ScanSphere color={accentColor} />;
      case 'artiverse':             return <NetworkCrystal color={accentColor} />;
      case 'bramer':                return <TechOctahedron color={accentColor} />;
      case 'bonito-sound':          return <AudioBars color={accentColor} />;
      case 'musikeo':               return <RhythmTorus color={accentColor} />;
      case 'asesoria-inteligente':  return <OrbitalSphere color={accentColor} />;
      case 'cannabis-club':         return <ScanIcosahedron color={accentColor} />;
      case 'aura':                  return <AuraRing color={accentColor} />;
      default: return (
        <GenericMesh geometry={geometry} animationType={animationType} color={accentColor} />
      );
    }
  })();

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 6]} intensity={1.6} color={accentColor} />
      <pointLight position={[-4, -4, -5]} intensity={0.45} color="#ffffff" />
      {scene}
      <ParticleCloud count={particleCount} color={accentColor} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────

interface Experiment3DSceneProps {
  id: string;
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({
  id, geometry, animationType, accentColor, particleCount = 80,
}: Experiment3DSceneProps) {
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
              particleCount={Math.min(particleCount, 100)}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
