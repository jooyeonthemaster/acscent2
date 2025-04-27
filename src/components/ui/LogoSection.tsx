"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function LogoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  return (
    <section 
      ref={ref}
      className="py-24 bg-white text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Logo Visualization */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] bg-black rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              
              {/* Simple geometric shapes representing logo */}
              <mesh position={[0, 0, 0]}>
                <octahedronGeometry args={[2, 0]} />
                <meshStandardMaterial color="white" wireframe />
              </mesh>
              
              <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="white" wireframe opacity={0.7} transparent />
              </mesh>
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </motion.div>
          
          {/* Logo Explanation Text */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">로고의 의미</h2>
            
            <p className="text-gray-800 mb-4">
              네안데르의 로고는 시간의 층위를 응축합니다. 중첩된 기하학적 형태는 원시 동굴 벽화의 본질적 선과 
              현대 미디어 아트의 프로젝션 매핑이 만나는 지점을 표현합니다.
            </p>
            
            <p className="text-gray-800 mb-4">
              이 디자인은 인류 최초의 표현 방식과 현대 기술의 만남을 담아냅니다. 흑백의 절제된 대비는 
              과거와 현재, 원시와 기술 사이의 균형을 보여줍니다.
            </p>
            
            <div className="mt-8 flex space-x-3">
              <div className="h-1 w-12 bg-black"></div>
              <div className="h-1 w-8 bg-black opacity-60"></div>
              <div className="h-1 w-4 bg-black opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 