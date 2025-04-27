"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FlagshipStore() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">플래그십 스토어</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            예술과 기술이 만나는 공간, 네안데르의 오프라인 플래그십 스토어를 소개합니다.
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
              <h2 className="text-4xl font-bold text-white">오프라인 매장 이미지</h2>
            </div>
          </motion.div>
          
          {/* Store Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">스토어 소개</h2>
              <p className="text-gray-300 mb-4">
                네안데르 플래그십 스토어는 예술과 기술, 향기의 조화로운 융합을 경험할 수 있는 
                공간입니다. 방문객들은 인터랙티브 미디어 전시, 독특한 향기 경험, 그리고 혁신적인 
                기술을 통해 감각의 경계를 넘어서는 여행을 떠나게 됩니다.
              </p>
              <p className="text-gray-300 mb-4">
                모든 전시품과 경험은 네안데르의 철학인 '과거와 현재, 미래가 공존하는 공간에서 
                잊을 수 없는 순간 만들기'를 반영합니다. 방문객들은 동굴 벽화에서 영감을 받은 
                예술 작품부터 최첨단 기술로 구현된 인터랙티브 전시까지 시간을 초월하는 경험을 
                할 수 있습니다.
              </p>
              <p className="text-gray-300">
                또한, 네안데르만의 독특한 향기 라인업을 직접 경험하고 구매할 수 있습니다. 
                각 향기는 특별한 스토리와 경험을 담고 있어, 단순한 제품 이상의 가치를 제공합니다.
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
                  <p className="text-gray-400">서울특별시 강남구 테헤란로</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">운영 시간</h3>
                  <p className="text-gray-400">화요일 - 일요일: 10:30 - 20:00</p>
                  <p className="text-gray-400">월요일: 휴무</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">연락처</h3>
                  <p className="text-gray-400">02-123-4567</p>
                  <p className="text-gray-400">store@neander.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">입장료</h3>
                  <p className="text-gray-400">성인: 15,000원</p>
                  <p className="text-gray-400">학생: 10,000원</p>
                  <p className="text-gray-400">* 모든 입장료는 스토어 내 제품 구매 시 사용 가능한 바우처로 제공됩니다.</p>
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
          
          {/* Experience Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-white text-center">경험 쇼케이스</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">인터랙티브 미디어</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    몸의 움직임에 따라 변화하는 몰입형 미디어아트를 경험해보세요.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">향기 연구소</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    네안데르만의 독특한 향기 컬렉션을 경험하고 자신만의 향기를 만들어 보세요.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">VR 예술 여행</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    VR 기술로 구현된 네안데르탈인의 동굴 속으로 여행을 떠나보세요.
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