"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  // 화려한 애니메이션을 위한 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }
  
  return (
    <motion.section 
      ref={sectionRef}
      className="py-40 bg-black text-white relative overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 50
          }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light mb-24 tracking-tighter uppercase text-center"
        >
          우리의 철학
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:grid-cols-2 gap-0 max-w-6xl mx-auto relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="border-t border-l border-r-0 md:border-r border-b-0 md:border-b-0 border-white/20 p-12 md:p-16"
          >
            <div className="w-16 h-px bg-white mb-12"></div>
            <h3 className="text-2xl md:text-3xl font-light mb-8 tracking-wide uppercase">인류 최초의 예술가들</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              인류 역사상 최초의 예술가들은 네안데르탈인이었습니다. 현생 인류에 앞서 동굴 벽화를 그리고 장신구를 만들며 
              예술적 표현의 시초를 열었던 그들의 본질을 담습니다.
            </p>
            <p className="text-gray-400 leading-relaxed text-base mt-4">
              사라진 그들의 예술적 유산이 오늘날까지 영향을 미치듯, 
              우리는 시대를 초월하는 가치를 창조합니다.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="border-t md:border-t border-l-0 md:border-l border-r border-b border-white/20 p-12 md:p-16"
          >
            <div className="w-16 h-px bg-white mb-12"></div>
            <h3 className="text-2xl md:text-3xl font-light mb-8 tracking-wide uppercase">이름의 의미</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              네안데르(Neander)는 단순한 이름 그 이상의 이야기를 담고 있습니다. 독일의 한 계곡 이름인 네안데르탈에서 
              발견된 고대 인류를 &apos;네안데르탈인&apos;이라 부르지만, 실제 &apos;네안데르&apos;는 그 지역의 시인이자 작곡가 요아힘 네안더의 
              이름에서 비롯되었습니다.
            </p>
            <p className="text-gray-400 leading-relaxed text-base mt-4">
              흥미로운 점은 이 이름의 언어적 변화입니다. 그리스식 표기인 &apos;네안데르&apos;는 독일어로 &apos;노이먼(Neumann)&apos;이며, 
              영어로는 &apos;뉴먼(Newman)&apos;, 즉 &apos;신인류&apos;를 의미합니다.
            </p>
            <div className="mt-8 border-l-0 border-t border-white/40 pt-8">
              <p className="text-white text-sm tracking-widest uppercase">
                최초의 예술가(네안데르)의 유산을 계승하는 현대 예술가(노이먼)가 새로운 가능성(뉴먼)을 열어간다.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* 하단 가로선 */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-white/20 w-full max-w-6xl mx-auto"
        ></motion.div>
      </div>
      
      {/* 절제된 배경 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* 모든 테두리 제거 */}
      </div>
    </motion.section>
  )
} 