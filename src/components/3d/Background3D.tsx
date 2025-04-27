"use client"
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, BufferGeometry, BufferAttribute } from 'three'
import { createNoise2D } from 'simplex-noise'

interface Background3DProps {
  color?: string;
  noiseIntensity?: number;
}

export default function Background3D({ 
  color = "#050505", 
  noiseIntensity = 0.5 
}: Background3DProps) {
  const meshRef = useRef<Mesh>(null)
  
  // simplex-noise 인스턴스 생성
  const noise2D = useMemo(() => createNoise2D(), [])
  
  // 노이즈가 적용된 지오메트리 생성
  const geometry = useMemo(() => {
    const geo = new BufferGeometry()
    const width = 64
    const height = 64
    
    // 정점 위치 계산
    const positions = []
    const indices = []
    
    // 격자 생성
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const u = x / (width - 1)
        const v = y / (height - 1)
        
        // 노이즈 값 계산
        const nx = u * 2 - 1
        const ny = v * 2 - 1
        const noiseValue = noise2D(nx * 2, ny * 2) * noiseIntensity
        
        positions.push(u - 0.5, v - 0.5, noiseValue * 0.1)
      }
    }
    
    // 삼각형 인덱스 계산
    for (let y = 0; y < height - 1; y++) {
      for (let x = 0; x < width - 1; x++) {
        const idx = x + y * width
        
        indices.push(idx, idx + 1, idx + width)
        indices.push(idx + 1, idx + width + 1, idx + width)
      }
    }
    
    // 버퍼 설정
    geo.setIndex(indices)
    geo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
    geo.computeVertexNormals()
    
    return geo
  }, [noise2D, noiseIntensity])
  
  // 배경 애니메이션
  useFrame((state) => {
    if (meshRef.current) {
      // 천천히 회전하도록 설정
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05
      
      // 약간의 웨이브 효과를 위한 위치 이동
      meshRef.current.position.z = -5 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -5]}
      scale={[30, 30, 1]}
      geometry={geometry}
    >
      <meshStandardMaterial 
        color={color}
        metalness={0.8}
        roughness={0.3}
        wireframe={true}
        transparent={true}
        opacity={0.6}
      />
    </mesh>
  )
} 