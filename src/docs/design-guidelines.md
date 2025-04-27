# Acscent 디자인 가이드라인

이 문서는 Acscent 웹사이트의 디자인 언어와 개발 패턴을 정의합니다. 모든 페이지는 이 가이드라인을 따라 일관성 있게 제작되어야 합니다.

## 목차
1. [디자인 철학](#디자인-철학)
2. [레이아웃](#레이아웃)
3. [타이포그래피](#타이포그래피)
4. [색상 팔레트](#색상-팔레트)
5. [애니메이션](#애니메이션)
6. [컴포넌트 스타일링](#컴포넌트-스타일링)
7. [반응형 디자인](#반응형-디자인)
8. [구현 패턴](#구현-패턴)
9. [B2B 솔루션 페이지 패턴](#b2b-솔루션-페이지-패턴)

---

## 디자인 철학

Acscent 웹사이트는 다음 원칙을 따릅니다:

- **고급스러움**: 절제된 디자인, 여백의 효과적 활용, 섬세한 디테일
- **직각적 구조**: 직선과 명확한 가장자리를 강조한 기하학적 레이아웃
- **절제와 균형**: 불필요한 요소를 최소화하고 공간과 요소 간의 균형 유지
- **의미 있는 애니메이션**: 단순히 화려함을 위한 것이 아닌, 콘텐츠의 흐름과 계층을 강화하는 애니메이션

---

## 레이아웃

### 기본 구조
- **그리드 시스템**: 12 컬럼 그리드 시스템 사용
- **컨테이너**: 최대 너비 `max-w-6xl` 기준, 중앙 정렬 (`mx-auto`)
- **여백**: `px-4` 기본 패딩, 섹션 사이 여백은 `py-40` 기준
- **정렬**: 대부분의 콘텐츠는 컨테이너 내 중앙 정렬

### 섹션 구분
- 섹션마다 충분한 세로 공간 (`py-40`) 제공
- 컨텐츠 블록 사이 적절한 간격 설정 (`gap-12`, `mb-24` 등)
- 화면의 높이와 비례하는 섹션 배치

### 경계 처리
- 직각적 테두리 (border) 사용 (`border-white/20`)
- 테두리 색상은 반투명 처리하여 섬세한 느낌 부여
- 각 섹션의 시작과 끝에 얇은 구분선 고려

---

## 타이포그래피

### 글꼴 스타일
- **제목**: 얇은 폰트 (`font-light`), 대문자 (`uppercase`), 좁은 자간 (`tracking-tighter`)
- **본문**: 적당한 두께, 적절한 행간 (`leading-relaxed`)
- **강조**: 자간 늘림 (`tracking-widest`), 대문자 사용

### 크기 체계
- **제목 (H1)**: `text-5xl md:text-6xl`
- **부제목 (H2)**: `text-4xl md:text-5xl`
- **섹션 제목 (H3)**: `text-xl md:text-2xl`
- **본문 텍스트**: `text-base` ~ `text-lg`
- **작은 텍스트**: `text-sm`

### 강조와 계층
- 중요 텍스트는 색상 대비를 통해 강조 (`text-white` vs `text-white/70`)
- 부가 정보는 투명도를 활용해 시각적 계층 형성 (`text-white/50`, `text-gray-400`)
- 인용구나 특별 내용은 경계선과 여백으로 구분 (`border-l`, `pl-4`)

---

## 색상 팔레트

### 주요 색상
- **배경**: 검은색 (`bg-black`)
- **텍스트**: 흰색과 회색 계열 (`text-white`, `text-gray-300`, `text-gray-400`)
- **강조**: 흰색의 다양한 투명도 활용 (`white/10`, `white/20`, `white/50`, `white/80`)

### 투명도 활용
- 배경 요소: `white/5` ~ `white/10`
- 테두리: `white/20` ~ `white/40`
- 보조 텍스트: `white/50` ~ `white/70`
- 주요 텍스트: `white/80` ~ `white`

### 그라데이션
- 필요한 경우 미묘한 그라데이션 활용 (`bg-gradient-to-r from-white/80 to-white/20`)
- 반투명 효과와 블러 처리 (`backdrop-blur-sm`)

---

## 애니메이션

### 기본 원칙
- 시각적 무게감과 깊이를 더하는 애니메이션
- 사용자 스크롤 위치에 반응하는 동적 효과
- 과하지 않은 섬세한 움직임으로 세련된 느낌 강화

### 주요 애니메이션 유형
- **페이드 인**: `opacity: 0` → `opacity: 1`
- **슬라이드**: `x: -100` → `x: 0` 또는 `y: 50` → `y: 0`
- **스케일**: `scaleX: 0` → `scaleX: 1` 또는 `scaleY: 0` → `scaleY: 1`
- **스프링 효과**: 자연스러운 튕김 효과 (`type: "spring", stiffness: 50~100, damping: 10~20`)
- **시퀀셜 애니메이션**: 순차적으로 나타나는 요소들 (`staggerChildren: 0.1~0.3`, `delayChildren: 0.3~0.5`)

### 애니메이션 타이밍
- 지속 시간: `duration: 0.8` ~ `duration: 1.5`
- 지연 시간: 순차적 효과를 위한 `delay: 0.2` ~ `delay: 0.7`
- 이징 함수: `ease: "easeOut"` 주로 사용

### 스크롤 기반 애니메이션
- **뷰포트 진입 감지**: `whileInView`, `viewport={{ once: true, margin: "-100px" }}`
- **스크롤 위치 감지**: `useScroll`, `useTransform`
- **요소 간 시차**: `staggerChildren`, `delayChildren`

### 리스트 애니메이션
- 리스트 아이템 순차 등장: `custom` 속성을 활용한 인덱스 기반 지연 적용
- 아이콘/번호 요소의 개별 애니메이션: 스케일 커지는 효과 (`scale: 0` → `scale: 1`)
- 텍스트 요소의 부드러운 슬라이드: 옆에서 나타나는 효과 (`x: -20` → `x: 0`)

---

## 컴포넌트 스타일링

### 카드 및 컨테이너
- 직각적 테두리 (`border`)
- 미묘한 배경색 (`bg-white/5`)
- 적절한 여백 (`p-12 md:p-16`)
- 테두리와 배경의 미묘한 대비
- 블러 효과 적용 (`backdrop-blur-sm`)

### 버튼 및 상호작용 요소
- 최소한의 장식으로 절제된 디자인
- 상태 변화를 나타내는 섬세한 트랜지션
- 호버 상태에서 미묘한 변화 (`hover:bg-white/10`)

### 아이콘 및 시각 요소
- 텍스트 형태의 번호/기호 사용 (`01`, `02`, `03`)
- 얇은 선과 최소한의 형태
- 투명도를 통한 시각적 계층 형성
- 네모 상자 안의 숫자 스타일 (`w-7 h-7 border border-white/40 flex items-center justify-center`)

### 구분 요소
- 얇은 구분선 (`h-px`, `w-px`, `bg-white/10`)
- 그리드 및 테두리를 통한 콘텐츠 구조화
- 여백을 통한 컴포넌트 간 경계 설정
- 애니메이션 적용된 가로선 (`scaleX: 0` → `scaleX: 1`)

---

## 반응형 디자인

### 중단점 (Breakpoints)
- **모바일**: 기본값
- **태블릿 이상**: `md:` (768px~)
- **데스크탑**: `lg:` (1024px~)

### 레이아웃 변화
- **모바일**: 단일 컬럼 레이아웃 (`flex-col`)
- **태블릿/데스크탑**: 다중 컬럼 레이아웃 (`md:flex-row`, `md:grid-cols-2`)
- 요소 배치 및 크기 조정 (`md:w-1/2`, `md:col-span-3`)

### 텍스트 조정
- 화면 크기에 따른 글꼴 크기 조정 (`text-2xl md:text-3xl`)
- 여백 및 간격 조정 (`mb-6 md:mb-8`, `p-8 md:p-10`)
- 모바일에서 더 집약적이고 단순한 텍스트 레이아웃

### 반응형 시각 요소
- 화면 크기에 따른 애니메이션 간소화 (모바일)
- 요소 정렬 방식 변경 (`items-center md:items-start`)
- 차등적인 여백 및 간격 적용

---

## 구현 패턴

### 컴포넌트 구조
```jsx
// 섹션 컴포넌트 기본 구조
<motion.section 
  ref={sectionRef}
  className="py-40 bg-black text-white relative overflow-hidden"
  // 애니메이션 속성들
>
  <div className="container mx-auto px-4">
    {/* 제목 영역 */}
    <motion.h2>내용</motion.h2>
    
    {/* 콘텐츠 영역 */}
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
      {/* 개별 컴포넌트들 */}
    </motion.div>
  </div>
  
  {/* 배경 요소 */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    {/* 배경 애니메이션 요소들 */}
  </div>
</motion.section>
```

### 애니메이션 패턴
```jsx
// variants 정의
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// 애니메이션 적용
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* 자식 요소들 */}
</motion.div>
```

### 스크롤 기반 애니메이션
```jsx
const sectionRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
```

### 리스트 아이템 애니메이션
```jsx
// 리스트 항목 variants
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      delay: 0.7 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    } 
  })
};

// 리스트 항목 사용
{[1, 2, 3].map((num, index) => (
  <motion.li 
    key={index}
    custom={index}
    variants={listItemVariants}
    className="flex items-center"
  >
    {/* 항목 내용 */}
  </motion.li>
))}
```

---

## B2B 솔루션 페이지 패턴

### 섹션 구성
- 메인 타이틀 영역 (NEANDER, B2B 솔루션)
- 고유 번호가 있는 4개의 서비스 섹션 (01~04)
- 각 섹션 내 서비스 설명 및 레퍼런스 구성
- 배경 장식 요소로 최소한의 선 배치

### 애니메이션 설정
```jsx
// 섹션별 애니메이션 variants
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
```

### 리스트 스타일링
- 번호 요소 스타일:
```jsx
<div className="flex-shrink-0 w-7 h-7 border border-white/40 flex items-center justify-center mr-3 text-sm text-white/70">
  {num}
</div>
```

- 각 항목의 구조:
```jsx
<li className="flex items-center">
  <div className="number-box">1</div>
  <span>항목 내용</span>
</li>
```

### 갤러리 토글 컴포넌트
- 접고 펼치는 기능을 가진 작업 레퍼런스 갤러리
- AnimatePresence를 활용한 부드러운 전환 효과
- 이미지 그리드 레이아웃과 캡션 구성

---

이 가이드라인은 진행 중인 프로젝트의 요구사항에 따라 지속적으로 업데이트될 수 있습니다. 