"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface Logo3DProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}

export default function Logo3D(props: Logo3DProps) {
  // 실제 모델이 없으므로 간단한 메쉬로 대체합니다
  const meshRef = useRef<Mesh>(null)
  
  // 로고 회전 애니메이션
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <boxGeometry args={[2, 2, 0.2]} />
      <meshStandardMaterial 
        color={props.color || "#7000FF"} 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
} 