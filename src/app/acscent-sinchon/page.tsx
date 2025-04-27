"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AcscentSinchon() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Acscent Sinchon</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            젊음과 활기가 넘치는 신촌에서 만나는 Acscent 매장을 소개합니다.
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
              <h2 className="text-4xl font-bold text-white">Acscent Sinchon 매장 이미지</h2>
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
                신촌의 활기찬 분위기와 어우러진 Acscent Sinchon 매장은 젊은 감각의 향기와
                라이프스타일을 제안합니다. 대학가 특유의 창의적인 에너지를 반영한 공간입니다.
              </p>
              <p className="text-gray-300 mb-4">
                이곳에서는 트렌디한 향수 컬렉션과 함께 MZ세대를 위한 특별한 향기 경험을
                제공합니다. 가장 최신 트렌드를 반영한 향기 제품들을 만나보세요.
              </p>
              <p className="text-gray-300">
                또한, 대학생들을 위한 특별 할인 및 다양한 향기 관련 이벤트가 정기적으로
                개최됩니다.
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
                  <p className="text-gray-400">서울 서대문구 신촌로 104</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">운영 시간</h3>
                  <p className="text-gray-400">평일: 12:00 - 21:00</p>
                  <p className="text-gray-400">주말: 11:00 - 21:30</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">연락처</h3>
                  <p className="text-gray-400">02-333-5678</p>
                  <p className="text-gray-400">sinchon@acscent.com</p>
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
            <h2 className="text-2xl font-semibold mb-8 text-white text-center">Sinchon 매장 특징</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">스튜던트 존</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    학생들을 위한 특별 공간으로, 학습과 휴식을 함께 할 수 있는 공간입니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">캠퍼스 컬렉션</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    대학 생활에 어울리는 가볍고 산뜻한 향기 컬렉션을 만나보세요.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <h3 className="text-xl font-medium text-white">팝업 이벤트</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">
                    다양한 브랜드와의 협업 및 이벤트가 정기적으로 개최됩니다.
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
