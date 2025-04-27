"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Location } from '@/components/ui/Icons'

export default function Contact() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            프로젝트에 대해 이야기하고 싶으신가요? 문의하기 위한 다양한 방법이 있습니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-white">연락처</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-md mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">이메일</h3>
                  <p className="text-gray-400 mt-1">contact@neander.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-md mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">전화</h3>
                  <p className="text-gray-400 mt-1">+82 10 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-md mr-4">
                  <Location className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">위치</h3>
                  <p className="text-gray-400 mt-1">서울특별시 강남구 테헤란로</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-white">운영 시간</h2>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 text-gray-300">월요일 - 금요일</td>
                    <td className="py-3 text-right text-white">9:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 text-gray-300">토요일</td>
                    <td className="py-3 text-right text-white">10:00 - 15:00</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">일요일</td>
                    <td className="py-3 text-right text-white">휴무</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-white">문의하기</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  이름
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="귀하의 이름을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  이메일
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="귀하의 이메일을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  제목
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="문의 제목을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="문의 내용을 입력해주세요"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-4 rounded-md hover:bg-white/90 transition-colors"
                >
                  보내기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 