"use client"
import React from 'react'

import Scene from '@/components/3d/Scene'
import HeroSection from '@/components/ui/HeroSection'
import PhilosophySection from '@/components/ui/PhilosophySection'
import LogoSection from '@/components/ui/LogoSection'
import DirectionSection from '@/components/ui/DirectionSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 3D Background */}
      <Scene />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Logo Section */}
      <LogoSection />
      
      {/* Direction Section */}
      <DirectionSection />
    </main>
  )
}
