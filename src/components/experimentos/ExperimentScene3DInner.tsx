'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import type { GeometryType, AnimationType } from '@/data/experiments-page';

// ─── Geometry mesh with animation ───────────────────────────────────────────

function GeometryMesh({
  geometry,
  animationType,
  accentColor,
}: {
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;

    if (animationType === 'float') {
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.25;
      meshRef.current.rotation.y = t * 0.3;
      if (wireRef.current) {
        wireRef.current.position.y = meshRef.current.position.y;
        wireRef.current.rotation.y = meshRef.current.rotation.y;
      }
    } else if (animationType === 'rotate') {
      meshRef.current.rotation.y = t * 0.6;
      meshRef.current.rotation.x = t * 0.2;
      if (wireRef.current) {
        wireRef.current.rotation.y = meshRef.current.rotation.y;
        wireRef.current.rotation.x = meshRef.current.rotation.x;
      }
    } else if (animationType === 'pulse') {
      const scale = 1 + Math.sin(t * 1.2) * 0.08;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.y = t * 0.25;
      if (wireRef.current) {
        wireRef.current.scale.setScalar(scale * 1.005);
        wireRef.current.rotation.y = meshRef.current.rotation.y;
      }
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'sphere':      return new THREE.SphereGeometry(1.2, 32, 32);
      case 'torus':       return new THREE.TorusGeometry(1.0, 0.38, 16, 60);
      case 'box':         return new THREE.BoxGeometry(1.8, 1.8, 1.8);
      case 'cone':        return new THREE.ConeGeometry(1.1, 2.0, 6);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1.3, 0);
      case 'octahedron':  return new THREE.OctahedronGeometry(1.4, 0);
      case 'cylinder':    return new THREE.CylinderGeometry(0.9, 0.9, 2.0, 16);
      default:            return new THREE.SphereGeometry(1.2, 32, 32);
    }
  }, [geometry]);

  return (
    <group>
      {/* Main mesh */}
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial
          color={accentColor}
          metalness={0.6}
          roughness={0.3}
          emissive={accentColor}
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh ref={wireRef} geometry={geo}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.06} transparent />
      </mesh>
    </group>
  );
}

// ─── Particle field ──────────────────────────────────────────────────────────

function ParticleField({
  count,
  accentColor,
}: {
  count: number;
  accentColor: string;
}) {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const accentRgb = new THREE.Color(accentColor);
    const HOT = 5; // accent-colored hot points

    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      if (i < HOT) {
        colors[i * 3]     = accentRgb.r;
        colors[i * 3 + 1] = accentRgb.g;
        colors[i * 3 + 2] = accentRgb.b;
      } else {
        colors[i * 3]     = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }
    }
    return { positions, colors };
  }, [count, accentColor]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.035}
        opacity={0.55}
        transparent
        sizeAttenuation
      />
    </points>
  );
}

// ─── Exported default ────────────────────────────────────────────────────────

interface Props {
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
  particleCount: number;
}

export default function ExperimentScene3DInner({
  geometry,
  animationType,
  accentColor,
  particleCount,
}: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} color={accentColor} intensity={2} />
      <pointLight position={[-3, -1, -2]} color="#ffffff" intensity={0.4} />
      <GeometryMesh
        geometry={geometry}
        animationType={animationType}
        accentColor={accentColor}
      />
      <ParticleField count={particleCount} accentColor={accentColor} />
    </Canvas>
  );
}
