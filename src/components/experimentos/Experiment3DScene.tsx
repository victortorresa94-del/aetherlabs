'use client';

import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Center, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

// ─── GLB asset map ────────────────────────────────────────────────────────────

const GLB_MAP: Record<string, string> = {
  'bamba-stock':          '/3D/smartphone_-_google_pixel_6a.glb',
  'artiverse':            '/3D/mail_box.glb',
  'suma-salut':           '/3D/mini_robot.glb',
  'bramer':               '/3D/pc-9801ux.glb',
  'bonito-sound':         '/3D/headphone_retro%20(1).glb',
  'musikeo':              '/3D/walkman.glb',
  'restaurante-ia':       '/3D/old_french_mail_box.glb',
  'asesoria-inteligente': '/3D/arcade_cabinet.glb',
  'cannabis-club':        '/3D/artel3d_tv_color__pop_edition.glb',
  'aura':                 '/3D/retro_tv.glb',
};

// Shared interaction state: lives outside Canvas, updated by pointer/touch/wheel
interface IX { rotX: number; rotY: number; camZ: number; }

// ─── Lights ───────────────────────────────────────────────────────────────────

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]}  intensity={2.2} color="#FFF0E0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.6} color="#D0DFFF" />
    </>
  );
}

// ─── Generic GLB scene ────────────────────────────────────────────────────────

function GlbScene({ path, ix }: { path: string; ix: React.MutableRefObject<IX> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene }  = useGLTF(path);
  const cloned     = useMemo(() => scene.clone(true), [scene]);
  const [baseScale, setBaseScale] = useState(1);
  const smooth     = useRef({ rotX: 0, rotY: 0, camZ: 6.5 });

  useEffect(() => {
    const box  = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const max  = Math.max(size.x, size.y, size.z);
    if (max > 0) setBaseScale(2.4 / max);
  }, [cloned]);

  useFrame(({ camera }) => {
    const s = smooth.current;
    const t = ix.current;
    s.rotX += (t.rotX - s.rotX) * 0.08;
    s.rotY += (t.rotY - s.rotY) * 0.08;
    s.camZ += (t.camZ - s.camZ) * 0.1;
    if (groupRef.current) {
      groupRef.current.rotation.x = s.rotX;
      groupRef.current.rotation.y = s.rotY;
    }
    camera.position.z = s.camZ;
  });

  return (
    <>
      <Lights />
      <Float speed={0.9} floatIntensity={0.22} rotationIntensity={0}>
        <group ref={groupRef} scale={baseScale}>
          <Center>
            <primitive object={cloned} />
          </Center>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── Robot scene (suma-salut) — greeting animation ────────────────────────────

function RobotScene({ ix }: { ix: React.MutableRefObject<IX> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/3D/mini_robot.glb');
  const cloned     = useMemo(() => scene.clone(true), [scene]);
  const [baseScale, setBaseScale] = useState(1);
  const smooth     = useRef({ rotX: 0, rotY: 0, camZ: 6.5 });
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    const box  = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const max  = Math.max(size.x, size.y, size.z);
    if (max > 0) setBaseScale(2.4 / max);
  }, [cloned]);

  // Play built-in animation if the GLB has one
  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      action?.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(0.3).play();
    }
  }, [actions, names]);

  useFrame(({ clock, camera }) => {
    const t = clock.elapsedTime;
    const s = smooth.current;
    s.rotX += (ix.current.rotX - s.rotX) * 0.08;
    s.rotY += (ix.current.rotY - s.rotY) * 0.08;
    s.camZ += (ix.current.camZ - s.camZ) * 0.1;
    camera.position.z = s.camZ;
    if (groupRef.current) {
      // Greeting: bob + lateral sway — no full spin
      groupRef.current.position.y = Math.sin(t * 2.2) * 0.05;
      groupRef.current.rotation.z = Math.sin(t * 1.8) * 0.14;
      groupRef.current.rotation.x = Math.sin(t * 0.6) * 0.1 + s.rotX;
      groupRef.current.rotation.y = s.rotY;
    }
  });

  return (
    <>
      <Lights />
      <Float speed={0.8} floatIntensity={0.18} rotationIntensity={0}>
        <group ref={groupRef} scale={baseScale}>
          <Center>
            <primitive object={cloned} />
          </Center>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── Scene selector ───────────────────────────────────────────────────────────

function SceneContent({ id, ix }: { id: string; ix: React.MutableRefObject<IX> }) {
  if (id === 'suma-salut') return <RobotScene ix={ix} />;
  const path = GLB_MAP[id] ?? GLB_MAP['aura'];
  return <GlbScene path={path} ix={ix} />;
}

// ─── Export ───────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  geometry: string;
  animationType: string;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({ id }: Props) {
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ix = useRef<IX>({ rotX: 0, rotY: 0, camZ: 6.5 });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const el = containerRef.current;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.05, rootMargin: '100px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  // Non-passive wheel (zoom) + touch (rotate) listeners
  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;

    let lastX = 0, lastY = 0;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      ix.current.camZ = Math.max(3.5, Math.min(11, ix.current.camZ + e.deltaY * 0.01));
    };

    const onTouchStart = (e: TouchEvent) => {
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      ix.current.rotY = Math.max(-Math.PI, Math.min(Math.PI, ix.current.rotY + dx * 0.012));
      ix.current.rotX = Math.max(-0.9, Math.min(0.9, ix.current.rotX - dy * 0.012));
    };

    const onTouchEnd = () => {
      ix.current.rotY = 0;
      ix.current.rotX = 0;
    };

    el.addEventListener('wheel',      onWheel,      { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true  });
    el.addEventListener('touchmove',  onTouchMove,  { passive: false });
    el.addEventListener('touchend',   onTouchEnd,   { passive: true  });
    return () => {
      el.removeEventListener('wheel',      onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove',  onTouchMove);
      el.removeEventListener('touchend',   onTouchEnd);
    };
  }, [mounted]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    ix.current.rotY = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.6;
    ix.current.rotX = -((e.clientY - rect.top)  / rect.height - 0.5) * 0.9;
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    ix.current.rotY = 0;
    ix.current.rotX = 0;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        maxHeight: 'clamp(280px, 55vw, 560px)',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {mounted && inView && (
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <SceneContent id={id} ix={ix} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
