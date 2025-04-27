"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AcscentId() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Acscent ID</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            예술과 기술이 만나는 공간, Acscent ID 매장을 소개합니다.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Hero Store Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[60vh] bg-gradient-to-r from-gray-900 to-black rounded-lg mb-16 overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">Acscent ID 매장 이미지</h2>
            </div>
          </motion.div>
          
          {/* Store Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">매장 소개</h2>
              <p className="text-gray-300 mb-4">
                Acscent ID 매장은 독창적인 향기와 예술의 공간입니다. 독특한 ID 컨셉으로
                각 방문객에게 맞춤형 향기 경험을 제공합니다.
              </p>
              <p className="text-gray-300 mb-4">
                이곳에서는 방문객 개인의 취향과 개성을 반영한 향기를 찾을 수 있으며,
                향기 분석 전문가들이 당신만의 향기 ID를 찾아드립니다.
              </p>
              <p className="text-gray-300">
                또한, 다양한 향기 워크샵과 이벤트를 통해 향기의 세계를 더 깊이 탐험할 수 있는
                기회를 제공합니다.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">방문 정보</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">위치</h3>
                  <p className="text-gray-400">서울특별시 강남구 압구정로 29길 42</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">운영 시간</h3>
                  <p className="text-gray-400">월요일 - 토요일: 11:00 - 20:00</p>
                  <p className="text-gray-400">일요일: 12:00 - 19:00</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">연락처</h3>
                  <p className="text-gray-400">02-511-1784</p>
                  <p className="text-gray-400">id@acscent.com</p>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-block mt-4 bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
                >
                  예약하기
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-white text-center">ID 매장 특징</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">맞춤형 향기 분석</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    개인의 취향과 성향을 분석하여 당신만의 향기 ID를 찾아드립니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">향기 워크샵</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    정기적인 향기 워크샵을 통해 직접 나만의 향수를 제작해볼 수 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">ID 컬렉션</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    아이덴티티를 표현하는 독점 향수 컬렉션을 만나보세요.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
