"use client"
import React from 'react'
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
} 