"use client"
import React from 'react'
import { motion } from 'framer-motion'

const directions = [
  {
    title: "기술을 통해 숨쉬는 예술",
    description: "차가운 기술에 생명력을 불어넣어 만지고 싶은 예술을 창조합니다.",
    details: "인간의 감성과 첨단 기술이 만나 시각, 청각, 촉각을 아우르는 다차원적 예술 경험을 제공합니다.",
    icon: "01",
  },
  {
    title: "향기로 각인되는 경험",
    description: "시각과 청각을 넘어, 가장 원초적인 감각인 후각으로 기억에 깊이를 더합니다.",
    details: "후각은 기억에 가장 직접적으로 연결되는 감각입니다. 이 강력한 연결을 통해 잊히지 않는 순간을 만듭니다.",
    icon: "02",
  },
  {
    title: "예술로 승화되는 기술",
    description: "첨단 기술에 인간의 감성을 입혀 따뜻한 교감을 이끌어냅니다.",
    details: "기술이 주도하는 세상에서 예술은 기술에 영혼을 불어넣어 인간적 가치를 더합니다.",
    icon: "03",
  },
]

export default function DirectionSection() {
  return (
    <section className="py-40 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block text-xs tracking-[0.4em] uppercase text-white/50 mb-6"
          >
            Direction
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 50 
            }}
            className="text-5xl md:text-6xl font-light tracking-tighter uppercase mb-8"
          >
            우리의 방향성
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-24 bg-white/30 mx-auto mb-10"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-white/70"
          >
            네안데르는 감각의 경계를 넘어 독보적인 경험을 구현합니다
          </motion.p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {directions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 60,
                damping: 20
              }}
              className="grid grid-cols-12 mb-24 last:mb-0 border-t border-white/10 pt-16"
            >
              <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
                <div className="text-7xl font-light tracking-tighter text-white/20 mb-6">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight uppercase">{item.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-8 border-l border-white/10 pl-8 md:pl-12 flex flex-col justify-center">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="text-xl text-white mb-8"
                >
                  {item.description}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-white/50"
                >
                  {item.details}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 max-w-4xl mx-auto border-t border-white/10 pt-16"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-white/60 tracking-wide"
          >
            우리는 예술의 상상력, 기술의 구현력, 그리고 향기의 각인력을 통해 시간이 지나도 희미해지지 않는 경험을 선사합니다.<br/>
            네안데르는 과거와 현재, 그리고 미래가 공존하는 공간에서 잊을 수 없는 순간을 만듭니다.
          </motion.p>
        </motion.div>
      </div>
      
      {/* 절제된 직각 배경 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-[10%] w-px bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-0 left-[90%] w-px bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="absolute top-[70%] left-0 h-px bg-white/5"
        ></motion.div>
      </div>
    </section>
  )
} 