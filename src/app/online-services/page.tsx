"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OnlineServices() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">온라인 서비스</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            디지털 공간에서 만나는 네안데르의 혁신적인 온라인 서비스를 소개합니다.
          </p>
        </motion.div>
        
        {/* Featured Service */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">가상 갤러리 투어</h2>
                <p className="text-gray-300 mb-6">
                  네안데르의 최신 전시를 웹브라우저에서 3D로 감상할 수 있는 가상 갤러리 투어 서비스입니다. 
                  고해상도 작품 이미지와 큐레이터의 오디오 가이드를 통해 실제 전시관에 방문한 것 같은 
                  경험을 제공합니다.
                </p>
                <div>
                  <Link 
                    href="#"
                    className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
                  >
                    가상 투어 시작하기
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-black h-80 md:h-auto flex items-center justify-center">
                <span className="text-xl font-medium text-white">가상 갤러리 이미지</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10 text-white text-center">모든 온라인 서비스</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-lg font-medium text-white">AR 아트워크</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">증강현실 아트워크</h3>
                <p className="text-gray-400 mb-4">
                  증강현실(AR) 기술을 활용해 현실 공간에 네안데르 예술 작품을 배치해볼 수 있는 서비스입니다.
                </p>
                <Link 
                  href="#"
                  className="text-white inline-flex items-center"
                >
                  자세히 보기
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-lg font-medium text-white">디지털 향기 소물리에</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">디지털 향기 맞춤 서비스</h3>
                <p className="text-gray-400 mb-4">
                  AI 기반 설문을 통해 사용자의 취향과 라이프스타일에 맞는 최적의 향기를 추천받을 수 있습니다.
                </p>
                <Link 
                  href="#"
                  className="text-white inline-flex items-center"
                >
                  자세히 보기
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-lg font-medium text-white">온라인 워크숍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">인터랙티브 온라인 워크숍</h3>
                <p className="text-gray-400 mb-4">
                  아티스트와 함께하는 실시간 온라인 워크숍으로, 집에서도 네안데르의 예술 경험을 즐길 수 있습니다.
                </p>
                <Link 
                  href="#"
                  className="text-white inline-flex items-center"
                >
                  자세히 보기
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Monthly Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 bg-white/10 rounded-lg p-10 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">네안데르 디지털 멤버십</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              월 구독 서비스를 통해 모든 온라인 서비스를 무제한으로 이용하고, 독점 콘텐츠와 할인 혜택을 받아보세요.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-md hover:bg-white/90 transition-colors"
            >
              멤버십 가입하기
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 