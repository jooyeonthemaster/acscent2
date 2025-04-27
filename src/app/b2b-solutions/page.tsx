"use client"
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// 레퍼런스 이미지 데이터 타입 정의
interface ReferenceImage {
  src: string;
  alt: string;
  caption: string;
}

interface ReferenceImagesData {
  event: ReferenceImage[];
  ai: ReferenceImage[];
  media: ReferenceImage[];
  scent: ReferenceImage[];
}

// 레퍼런스 이미지 데이터
const referenceImages: ReferenceImagesData = {
  event: [
    { src: "/images/references/event1.jpg", alt: "하현상 공식 컴백 'Elegy' 팝업 이벤트", caption: "하현상 공식 컴백 'Elegy' 팝업 이벤트" },
    { src: "/images/references/event2.jpg", alt: "무진 생일 기념 이벤트", caption: "무진 생일 기념 이벤트" },
    { src: "/images/references/event3.jpg", alt: "톡식 발매 기념 이벤트", caption: "톡식 발매 기념 이벤트" },
    { src: "/images/references/event4.jpg", alt: "셀럽 방문 이벤트", caption: "빅뱅 태양, 청하, 뉴진스, 하현상 등 셀럽 방문 이벤트" },
  ],
  ai: [
    { src: "/images/references/ai1.jpg", alt: "개인 이미지 분석 AI 향기 추천 서비스", caption: "개인 이미지 분석 AI 향기 추천 서비스" },
    { src: "/images/references/ai2.jpg", alt: "AI 챗봇 기반 아이돌 성향 분석 프로그램", caption: "AI 챗봇 기반 아이돌 성향 분석 프로그램" },
  ],
  media: [
    { src: "/images/references/media1.jpg", alt: "마초의 사춘기 이육사 시인 미디어아트 전시 제작", caption: "마초의 사춘기 이육사 시인 미디어아트 전시 제작" },
    { src: "/images/references/media2.jpg", alt: "서대문구 카페 폭포 고가도로 프로젝션 맵핑", caption: "서대문구 카페 폭포 고가도로 프로젝션 맵핑" },
    { src: "/images/references/media3.jpg", alt: "한국 콘텐츠 진흥원 미디어아트 전시", caption: "한국 콘텐츠 진흥원 미디어아트 전시" },
    { src: "/images/references/media4.jpg", alt: "서울 시내 상설 미디어아트 전시관 운영", caption: "서울 시내 상설 미디어아트 전시관 운영" },
  ],
  scent: [
    { src: "/images/references/scent1.jpg", alt: "하현상 올림픽 경기장 콘서트 향 설계 및 분사", caption: "하현상 올림픽 경기장 콘서트 향 설계 및 분사" },
    { src: "/images/references/scent2.jpg", alt: "디아트 82 아세움 작가 개인전 향 설계 및 상품화", caption: "디아트 82 아세움 작가 개인전 향 설계 및 상품화" },
    { src: "/images/references/scent3.jpg", alt: "일러스트 작가 파랑&굥디 작품 바탕 향 설계 및 분사", caption: "일러스트 작가 파랑&굥디 작품 바탕 향 설계 및 분사" },
  ],
};

// 갤러리 토글 컴포넌트의 props 타입 정의
interface GalleryToggleProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  images: ReferenceImage[];
  category: 'event' | 'ai' | 'media' | 'scent';
}

// 이미지 갤러리 컴포넌트
const GalleryToggle: React.FC<GalleryToggleProps> = ({ isOpen, setIsOpen, images, category }) => {
  const toggleVariants = {
    closed: { 
      opacity: 0.7,
      scale: 1
    },
    open: { 
      opacity: 1,
      scale: 1
    }
  };
  
  const galleryVariants = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };
  
  // 이미지가 없는 경우 대체 UI를 표시
  if (!images || images.length === 0) {
    return (
      <div className="mt-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all p-3"
        >
          <span className="text-sm uppercase tracking-wider font-light">작업 레퍼런스 보기</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={galleryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="p-8 border border-t-0 border-white/20 bg-white/5 flex items-center justify-center">
                <p className="text-gray-400">현재 준비된 레퍼런스 이미지가 없습니다.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  
  return (
    <div className="mt-8">
      <motion.button 
        variants={toggleVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all p-3"
      >
        <span className="text-sm uppercase tracking-wider font-light">작업 레퍼런스 보기</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={galleryVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 border border-t-0 border-white/20 bg-white/5">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-w-16 aspect-h-9 bg-white/10 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white/50">
                      {image.src ? 
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          width={600} 
                          height={400} 
                          className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" 
                        /> :
                        <div className="p-4 text-center">이미지 준비중</div>
                      }
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-white/70">{image.caption}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function B2BSolutions() {
  // 토글 상태 관리
  const [openGallery, setOpenGallery] = useState({
    event: false,
    ai: false,
    media: false,
    scent: false
  });
  
  const toggleGallery = (category: 'event' | 'ai' | 'media' | 'scent') => {
    setOpenGallery(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50]);
  
  // 메인 페이지의 히어로 섹션과 동일한 애니메이션 설정
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        duration: 0.8 
      } 
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      } 
    }
  };
  
  // 섹션별 애니메이션 variants 추가
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.6 
      } 
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      } 
    }
  };

  const contentBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 20,
        delay: 0.4
      } 
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: 0.7 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      } 
    })
  };

  const boxNumberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.9 + (i * 0.1)
      } 
    })
  };
  
  // 섹션 스크롤 효과를 위한 변수
  const sectionRefs = {
    event: useRef<HTMLDivElement>(null),
    ai: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
    scent: useRef<HTMLDivElement>(null)
  };
  
  return (
    <main ref={sectionRef} className="bg-black text-white relative overflow-hidden">
      <div className="h-screen flex flex-col justify-center items-center px-4 relative">
        <motion.div 
          className="text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* 메인 페이지의 히어로 섹션과 동일한 스타일의 로고와 애니메이션 */}
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter"
          >
            <span className="text-white">NEANDER</span>
          </motion.h1>
          
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-light uppercase tracking-tighter mb-8 text-white"
          >
            B2B 솔루션
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            네안데르는 브랜드와 기업을 위한 차별화된 B2B 솔루션을 제공합니다.<br className="hidden md:block" />
            이벤트 대행부터 AI 프로그램 개발, 미디어아트 제작, 작품 기반 향 설계까지<br className="hidden md:block" />
            귀사의 브랜드 가치를 높이는 모든 서비스를 원스톱으로 제공합니다.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="h-px w-24 bg-white/20 mx-auto mt-12"
          ></motion.div>

          {/* 스크롤 다운 화살표 추가 */}
          <motion.div
            variants={item}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/50"
            >
              <path 
                d="M12 4L12 20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-40">        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-40"
        >
          {/* 이벤트 대행 서비스 */}
          <motion.div 
            ref={sectionRefs.event}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="flex items-center space-x-6 mb-12">
              <motion.div 
                variants={numberVariants}
                className="text-3xl text-white/50 font-light tracking-widest"
              >
                01
              </motion.div>
              <motion.div 
                variants={lineVariants}
                className="h-px flex-grow bg-white/20"
              ></motion.div>
            </div>
            
            <motion.div 
              variants={contentBoxVariants}
              className="bg-white/5 border border-white/20 backdrop-blur-sm p-12 md:p-16"
            >
              <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-tighter mb-8 text-white">
                이벤트 대행 서비스 <span className="text-white/70">(무료 지원)</span>
              </h3>
              <p className="text-base text-gray-400 mb-12 leading-relaxed max-w-3xl">
                당신의 브랜드 이벤트를 무료로 완벽하게 대행해 드립니다. 기획부터 실행까지 A to Z 모든 과정을 책임집니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">제공 서비스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3, 4, 5].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "아이돌 생일 이벤트, 발매 기념 이벤트 등 전문 기획"}
                          {index === 1 && "포스터 및 홍보물 디자인"}
                          {index === 2 && "맞춤형 굿즈 제작 및 지원"}
                          {index === 3 && "아티스트/인플루언서용 시그니처 향수 제공"}
                          {index === 4 && "AC'SCENT 신촌, AC'SCENT WOW 전용 공간 제공"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">주요 레퍼런스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3, 4].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "하현상 공식 컴백 'Elegy' 팝업 이벤트"}
                          {index === 1 && "무진 생일 기념 이벤트"}
                          {index === 2 && "톡식 발매 기념 이벤트"}
                          {index === 3 && "빅뱅 태양, 청하, 뉴진스, 하현상 등 셀럽 방문 이벤트"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <GalleryToggle 
                isOpen={openGallery.event} 
                setIsOpen={(isOpen) => toggleGallery('event')} 
                images={referenceImages.event}
                category="event"
              />
              
              <div className="mt-12 text-center">
                <Link 
                  href="/contact" 
                  className="inline-block text-white/70 hover:text-white tracking-wider uppercase text-sm border-b border-white/20 hover:border-white transition-colors pb-1"
                >
                  문의하기
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* AI 프로그램 개발 및 콘텐츠 기획 */}
          <motion.div 
            ref={sectionRefs.ai}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="flex items-center space-x-6 mb-12">
              <motion.div 
                variants={numberVariants}
                className="text-3xl text-white/50 font-light tracking-widest"
              >
                02
              </motion.div>
              <motion.div 
                variants={lineVariants}
                className="h-px flex-grow bg-white/20"
              ></motion.div>
            </div>
            
            <motion.div 
              variants={contentBoxVariants}
              className="bg-white/5 border border-white/20 backdrop-blur-sm p-12 md:p-16"
            >
              <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-tighter mb-8 text-white">
                AI 프로그램 개발 및<br className="md:hidden" /> 콘텐츠 기획
              </h3>
              <p className="text-base text-gray-400 mb-12 leading-relaxed max-w-3xl">
                최신 AI 기술을 활용한 맞춤형 솔루션으로 브랜드 경험을 혁신합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">제공 서비스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3, 4, 5].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "브랜드/기업 이벤트 맞춤형 AI 챗봇 개발"}
                          {index === 1 && "AI 기반 분석 콘텐츠 프로그램 개발"}
                          {index === 2 && "팝업스토어, 박람회용 AI 체험형 콘텐츠 구현"}
                          {index === 3 && "AI 분석 기반 브랜드 시그니처 향기 제품 제작"}
                          {index === 4 && "콘텐츠 기획부터 디자인, 구현, 백엔드 연동까지"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">주요 레퍼런스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "개인 이미지 분석 AI 향기 추천 서비스"}
                          {index === 1 && "AI 챗봇 기반 아이돌 성향 분석 프로그램"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <GalleryToggle 
                isOpen={openGallery.ai} 
                setIsOpen={(isOpen) => toggleGallery('ai')} 
                images={referenceImages.ai}
                category="ai"
              />
              
              <div className="mt-12 text-center">
                <Link 
                  href="/contact" 
                  className="inline-block text-white/70 hover:text-white tracking-wider uppercase text-sm border-b border-white/20 hover:border-white transition-colors pb-1"
                >
                  문의하기
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 미디어아트 콘텐츠 제작 */}
          <motion.div 
            ref={sectionRefs.media}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="flex items-center space-x-6 mb-12">
              <motion.div 
                variants={numberVariants}
                className="text-3xl text-white/50 font-light tracking-widest"
              >
                03
              </motion.div>
              <motion.div 
                variants={lineVariants}
                className="h-px flex-grow bg-white/20"
              ></motion.div>
            </div>
            
            <motion.div 
              variants={contentBoxVariants}
              className="bg-white/5 border border-white/20 backdrop-blur-sm p-12 md:p-16"
            >
              <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-tighter mb-8 text-white">
                미디어아트 콘텐츠 제작
              </h3>
              <p className="text-base text-gray-400 mb-12 leading-relaxed max-w-3xl">
                공간의 가치를 높이는 몰입형 미디어아트 콘텐츠를 개발하고 설치합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">제공 서비스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "팝업스토어, 박람회, 매장 등 공간 맞춤형 미디어아트"}
                          {index === 1 && "프로젝션 맵핑, 미디어 파사드 기획 및 구현"}
                          {index === 2 && "콘텐츠 개발부터 제작, 설치까지 원스톱 서비스"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">주요 레퍼런스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3, 4].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "마초의 사춘기 이육사 시인 미디어아트 전시 제작"}
                          {index === 1 && "서대문구 카페 폭포 고가도로 프로젝션 맵핑"}
                          {index === 2 && "한국 콘텐츠 진흥원 미디어아트 전"}
                          {index === 3 && "서울 시내 상설 미디어아트 전시관 운영"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <GalleryToggle 
                isOpen={openGallery.media} 
                setIsOpen={(isOpen) => toggleGallery('media')} 
                images={referenceImages.media}
                category="media"
              />
              
              <div className="mt-12 text-center">
                <Link 
                  href="/contact" 
                  className="inline-block text-white/70 hover:text-white tracking-wider uppercase text-sm border-b border-white/20 hover:border-white transition-colors pb-1"
                >
                  문의하기
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 작품 기반 향 설계 */}
          <motion.div 
            ref={sectionRefs.scent}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="flex items-center space-x-6 mb-12">
              <motion.div 
                variants={numberVariants}
                className="text-3xl text-white/50 font-light tracking-widest"
              >
                04
              </motion.div>
              <motion.div 
                variants={lineVariants}
                className="h-px flex-grow bg-white/20"
              ></motion.div>
            </div>
            
            <motion.div 
              variants={contentBoxVariants}
              className="bg-white/5 border border-white/20 backdrop-blur-sm p-12 md:p-16"
            >
              <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-tighter mb-8 text-white">
                작품 기반 향 설계
              </h3>
              <p className="text-base text-gray-400 mb-12 leading-relaxed max-w-3xl">
                예술 작품과 공간의 몰입도를 높이는 맞춤형 향기를 설계하고 상품화합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">제공 서비스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "콘서트, 갤러리 등 예술 작품 기반 맞춤형 향기 설계"}
                          {index === 1 && "공간 맞춤형 향기 분사 시스템 구축"}
                          {index === 2 && "개발된 향기의 상품화 및 수익 창출 모델 구축"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider mb-6 font-light">주요 레퍼런스</h4>
                  <ul className="text-gray-400 text-base list-none space-y-4">
                    {[1, 2, 3].map((num, index) => (
                      <motion.li 
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        className="flex items-center"
                      >
                        <motion.div 
                          custom={index}
                          variants={boxNumberVariants}
                          className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70"
                        >
                          {num}
                        </motion.div>
                        <span>
                          {index === 0 && "하현상 올림픽 경기장 콘서트 향 설계 및 분사"}
                          {index === 1 && "디아트 82 아세움 작가 개인전 향 설계 및 상품화"}
                          {index === 2 && "일러스트 작가 파랑&굥디 작품 바탕 향 설계 및 분사"}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <GalleryToggle 
                isOpen={openGallery.scent} 
                setIsOpen={(isOpen) => toggleGallery('scent')} 
                images={referenceImages.scent}
                category="scent"
              />
              
              <div className="mt-12 text-center">
                <Link 
                  href="/contact" 
                  className="inline-block text-white/70 hover:text-white tracking-wider uppercase text-sm border-b border-white/20 hover:border-white transition-colors pb-1"
                >
                  문의하기
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-40 text-center"
        >
          <div className="h-px w-24 bg-white/20 mx-auto mb-16"></div>
          <Link 
            href="/contact"
            className="px-12 py-4 border border-white text-white font-light uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            서비스 문의하기
          </Link>
        </motion.div>
      </div>
      
      {/* 배경 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-1/3 h-px bg-white/10"></div>
        <div className="absolute bottom-10 right-10 w-1/3 h-px bg-white/10"></div>
        <div className="absolute top-10 right-10 h-1/3 w-px bg-white/10"></div>
        <div className="absolute bottom-10 left-10 h-1/3 w-px bg-white/10"></div>
        
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '80%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[10%] left-[15%] w-px bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '80%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[10%] left-[85%] w-px bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '70%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="absolute top-[35%] right-0 h-px bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '70%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="absolute top-[65%] left-0 h-px bg-white/5"
        ></motion.div>
      </div>
    </main>
  )
} 