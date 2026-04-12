---
name: threejs-pro
description: Three.js + React Three Fiber + Drei mastery for Next.js — 3D scenes, geometries, shaders, particles, post-processing, GLTF models, Spline. Use when building 3D hero sections, interactive WebGL backgrounds, particle systems, or 3D product showcases.
version: 1.0.0
---

# Three.js + React Three Fiber — 3D Web

## Setup (R3F + Drei already installed)
```tsx
'use client' // WebGL is client-only
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Text3D, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
```

## Basic Canvas Setup

```tsx
// Always lazy-load 3D components in Next.js
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-[#0A0A0A]" />
})

// Canvas component
export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}  // limit pixel ratio for performance
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <MyMesh />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
```

## Animated Mesh with useFrame

```tsx
function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
    // Float animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}
```

## Particle System

```tsx
function Particles({ count = 2000 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [count])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}
```

## Glassmorphism 3D Material

```tsx
import { MeshTransmissionMaterial } from '@react-three/drei'

function GlassSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        resolution={512}
        transmission={1}
        roughness={0}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.06}
        distortion={0.5}
        color="#ffffff"
      />
    </mesh>
  )
}
```

## Spline Integration (already in this project)

```tsx
'use client'
import Spline from '@splinetool/react-spline'
import dynamic from 'next/dynamic'

const SplineScene = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />
})

<SplineScene
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  onLoad={(splineApp) => {
    // interact with scene
    splineApp.setVariable('color', '#ffffff')
  }}
/>
```

## Interactive Mouse-tracking

```tsx
function MouseTracker() {
  const { viewport } = useThree()
  const meshRef = useRef<THREE.Mesh>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      }
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += (mousePos.current.x * 0.5 - meshRef.current.rotation.y) * 0.05
    meshRef.current.rotation.x += (mousePos.current.y * 0.3 - meshRef.current.rotation.x) * 0.05
  })

  return <mesh ref={meshRef}>...</mesh>
}
```

## Performance Guidelines
- `dpr={[1, 2]}` — cap pixel ratio
- Use `instancedMesh` for 100+ identical objects
- Dispose geometries/materials on unmount
- `<Suspense fallback={...}>` around models
- Avoid creating objects in `useFrame` — mutate refs instead
- Use `drei`'s `<PerformanceMonitor>` to adapt quality

## GLTF Models
```tsx
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/model.glb')
  return <primitive object={scene} />
}

// Preload
useGLTF.preload('/models/model.glb')
```
