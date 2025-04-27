"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Logo3D from './Logo3D'
import Background3D from './Background3D'

export default function Scene() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 2.5} 
        />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Logo3D position={[0, 0, 0]} scale={[1, 1, 1]} />
          <Background3D color="#001020" noiseIntensity={0.7} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}