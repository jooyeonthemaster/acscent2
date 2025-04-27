const fs = require('fs');
const path = require('path');

const components = [
  {
    path: 'src/components/3d/Scene.tsx',
    content: `import React, { Suspense } from 'react'
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
          <Background3D />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}`
  },
  {
    path: 'src/components/3d/Background3D.tsx',
    content: `import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { inSphere } from 'maath/random'

export default function Background3D({ count = 5000 }) {
  const ref = useRef<THREE.Points>(null)
  
  // Generate random points in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    inSphere(positions, { radius: 15 })
    return positions
  }, [count])
  
  useFrame((state, delta) => {
    if (!ref.current) return
    
    // Slow rotation effect
    ref.current.rotation.x += delta * 0.02
    ref.current.rotation.y += delta * 0.01
  })
  
  return (
    <Points
      ref={ref}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}`
  },
  {
    path: 'src/components/ui/HeroSection.tsx',
    content: `import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  return (
    <section className="h-screen flex items-center justify-center text-white pt-16">
      <motion.div 
        className="container mx-auto text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tighter"
        >
          <span className="text-white">NEANDER</span>
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
        >
          기술(Technology), 예술(Art), 그리고 향기(Fragrance)의 경계에서 새로운 감각적 경험을 구현합니다.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link 
            href="/b2b-solutions"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            B2B 솔루션 살펴보기
          </Link>
          
          <Link 
            href="/contact"
            className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-colors duration-300"
          >
            컨택하기
          </Link>
        </motion.div>
        
        <motion.div
          variants={item}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white/70"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}`
  },
  {
    path: 'src/components/ui/PhilosophySection.tsx',
    content: `import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 bg-black text-white relative overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">우리의 철학</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4">인류 최초의 예술가들</h3>
            <p className="text-gray-300 leading-relaxed">
              인류 역사상 최초의 예술가들은 네안데르탈인이었습니다. 현생 인류에 앞서 동굴 벽화를 그리고 장신구를 만들며 
              예술적 표현의 시초를 열었던 그들의 본질을 담습니다. 사라진 그들의 예술적 유산이 오늘날까지 영향을 미치듯, 
              우리는 시대를 초월하는 가치를 창조합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">이름의 의미</h3>
            <p className="text-gray-300 leading-relaxed">
              네안데르(Neander)는 단순한 이름 그 이상의 이야기를 담고 있습니다. 독일의 한 계곡 이름인 네안데르탈에서 
              발견된 고대 인류를 '네안데르탈인'이라 부르지만, 실제 '네안데르'는 그 지역의 시인이자 작곡가 요아힘 네안더의 
              이름에서 비롯되었습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              흥미로운 점은 이 이름의 언어적 변화입니다. 그리스식 표기인 '네안데르'는 독일어로 '노이먼(Neumann)'이며, 
              영어로는 '뉴먼(Newman)', 즉 '신인류'를 의미합니다. 이 언어적 여정은 우리의 정체성을 담아냅니다:
            </p>
            <p className="text-white font-medium mt-4 italic">
              최초의 예술가(네안데르)의 유산을 계승하는 현대 예술가(노이먼)가 새로운 가능성(뉴먼)을 열어간다.
            </p>
          </div>
        </div>
      </div>
      
      {/* Abstract geometric background shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform rotate-12 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/3 transform -rotate-12 -translate-x-1/4 translate-y-1/4"></div>
      </div>
    </motion.section>
  )
}`
  },
  {
    path: 'src/components/ui/LogoSection.tsx',
    content: `import React, { useRef } from 'react'
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
}`
  },
  {
    path: 'src/components/ui/DirectionSection.tsx',
    content: `import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from './Icons'

const directions = [
  {
    title: "기술을 통해 숨쉬는 예술",
    description: "차가운 기술에 생명력을 불어넣어 만지고 싶은 예술을 창조합니다.",
    icon: "✦",
  },
  {
    title: "향기로 각인되는 경험",
    description: "시각과 청각을 넘어, 가장 원초적인 감각인 후각으로 기억에 깊이를 더합니다.",
    icon: "✧",
  },
  {
    title: "예술로 승화되는 기술",
    description: "첨단 기술에 인간의 감성을 입혀 따뜻한 교감을 이끌어냅니다.",
    icon: "✦",
  },
]

export default function DirectionSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">우리의 방향성</h2>
          <p className="text-xl text-gray-300">
            네안데르는 감각의 경계를 넘어 독보적인 경험을 구현합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl mb-6 text-white/80">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.description}</p>
              
              <div className="flex items-center text-sm text-white/60 group cursor-pointer">
                <span className="mr-2 group-hover:text-white transition-colors">자세히 보기</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            우리는 예술의 상상력, 기술의 구현력, 그리고 향기의 각인력을 통해 시간이 지나도 희미해지지 않는 경험을 선사합니다.
            네안데르는 과거와 현재, 그리고 미래가 공존하는 공간에서 잊을 수 없는 순간을 만듭니다.
          </p>
        </div>
      </div>
    </section>
  )
}`
  },
  {
    path: 'src/components/ui/Icons.tsx',
    content: `import React from 'react'

type IconProps = {
  className?: string
}

export function ArrowRight({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
      />
    </svg>
  )
}

export function ArrowDown({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" 
      />
    </svg>
  )
}

export function Mail({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
      />
    </svg>
  )
}

export function Phone({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
      />
    </svg>
  )
}

export function Location({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
      />
    </svg>
  )
}`
  },
  {
    path: 'src/components/layout/Navbar.tsx',
    content: `import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: '/', label: '홈' },
    { href: '/b2b-solutions', label: 'B2B 솔루션' },
    { href: '/flagship-store', label: '플래그십 스토어' },
    { href: '/online-services', label: '온라인 서비스' },
    { href: '/contact', label: '컨택' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              NEANDER
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}`
  },
  {
    path: 'src/components/layout/Footer.tsx',
    content: `import React from 'react'
import Link from 'next/link'
import { Mail, Phone, Location } from '../ui/Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">NEANDER</Link>
            <p className="mt-4 text-gray-400 max-w-md">
              기술(Technology), 예술(Art), 그리고 향기(Fragrance)의 경계에서 새로운 감각적 경험을 구현합니다.
            </p>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><Link href="/b2b-solutions" className="text-gray-400 hover:text-white transition-colors">B2B 솔루션</Link></li>
              <li><Link href="/flagship-store" className="text-gray-400 hover:text-white transition-colors">플래그십 스토어</Link></li>
              <li><Link href="/online-services" className="text-gray-400 hover:text-white transition-colors">온라인 서비스</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">컨택</Link></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">컨택트</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <a href="mailto:contact@neander.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@neander.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <a href="tel:+8210123456789" className="text-gray-400 hover:text-white transition-colors">
                  +82 10 1234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Location className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-400">
                  서울특별시 강남구 테헤란로
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {year} NEANDER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}`
  }
];

// Create directories if they don't exist
components.forEach(component => {
  const dir = path.dirname(component.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the component file
  fs.writeFileSync(component.path, component.content, 'utf8');
  console.log(`Created ${component.path}`);
});

console.log('All components created successfully!'); 