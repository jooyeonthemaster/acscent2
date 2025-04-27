"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AcscentWow() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Acscent Wow</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            감각적인 예술과 향기의 조화, Acscent Wow 매장을 소개합니다.
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
              <h2 className="text-4xl font-bold text-white">Acscent Wow 매장 이미지</h2>
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
                Acscent Wow 매장은 다양한 감각을 자극하는 최첨단 공간으로, 방문객들에게 
                &apos;Wow&apos;라는 감탄을 불러일으키는 특별한 경험을 선사합니다.
              </p>
              <p className="text-gray-300 mb-4">
                인터랙티브 향기 경험부터 디지털 아트와 향기의 결합까지, 기존의 향수 매장을 
                뛰어넘는 혁신적인 공간을 만나보세요.
              </p>
              <p className="text-gray-300">
                또한, 첨단 기술을 활용한 맞춤형 향기 서비스와 몰입형 향기 체험 공간이 
                방문객들에게 잊지 못할 경험을 제공합니다.
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
                  <p className="text-gray-400">서울특별시 성동구 왕십리로 82</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">운영 시간</h3>
                  <p className="text-gray-400">매일: 10:00 - 22:00</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">연락처</h3>
                  <p className="text-gray-400">02-222-9999</p>
                  <p className="text-gray-400">wow@acscent.com</p>
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
            <h2 className="text-2xl font-semibold mb-8 text-white text-center">Wow 매장 특징</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">향기 몰입 공간</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    특수 디자인된 공간에서 후각과 시각, 청각이 결합된 몰입형 경험을 만나보세요.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">AI 향기 매칭</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    AI 기술로 당신의 성향과 취향을 분석하여 완벽한 향기를 추천해드립니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">향기 라이브러리</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    세계 각국의 희귀하고 독특한 향기 원료를 직접 경험해볼 수 있는 라이브러리입니다.
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
