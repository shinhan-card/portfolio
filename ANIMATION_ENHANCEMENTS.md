# UI 애니메이션 개선사항

이 문서는 사이트에 추가된 고급 애니메이션 효과들을 정리합니다.

---

## 🎨 **적용된 애니메이션 효과**

### 1. **Hero Parallax 효과**
- **파일**: `components/Hero.tsx`
- **효과**: 배경 레이어(gradient, grid)가 스크롤 시 다른 속도로 움직임
- **기술**: 
  - 그라데이션: 0.3x 속도
  - 그리드: 0.5x 속도
  - Passive scroll listener로 성능 최적화
- **결과**: 깊이감 있는 입체적인 Hero 섹션

---

### 2. **스크롤 트리거 Reveal 애니메이션**
- **적용 컴포넌트**:
  - `ImpactMetrics` (100ms stagger)
  - `FeaturedCaseStudies` (150ms stagger)
  - `Skills` (80ms stagger)
  - `Awards` (100ms stagger)
  - `Contact` (단일 reveal)
- **효과**: Intersection Observer로 뷰포트 진입 시 fade-up 애니메이션
- **특징**:
  - 한 번만 재생 (성능 최적화)
  - Configurable delay for stagger
  - Smooth easing (700ms duration)

---

### 3. **카드 고급 호버 효과**

#### 3.1 Glow Effect
- **파일**: `app/globals.css` - `.card-glow`
- **효과**: 
  - 호버 시 accent 색상의 glow border 표시
  - 4px 위로 lift
  - 향상된 shadow
- **적용**: `hover` prop이 true인 모든 Card 컴포넌트

#### 3.2 Shine Effect
- **파일**: `app/globals.css` - `.card-shine`
- **효과**: 
  - 호버 시 대각선 빛 반사 애니메이션
  - 카드 표면을 가로지르는 shine 효과
  - 600ms 부드러운 전환

#### 3.3 3D Tilt (subtle)
- **파일**: `app/globals.css` - `.card-tilt`
- **효과**: 
  - 미묘한 3D 회전 (2deg x/y)
  - perspective 1000px
  - 1.02x scale up
- **조건**: 호버 가능한 디바이스에만 적용

---

### 4. **버튼 Ripple 효과**
- **파일**: 
  - `components/ui/ButtonWithRipple.tsx` (hook)
  - `components/ui/Button.tsx` (적용)
- **효과**: 
  - 클릭 위치에서 확장되는 물결 효과
  - 600ms 애니메이션
  - Primary 버튼에만 적용
- **기술**: 
  - Custom hook `useRipple()`
  - Dynamic ripple generation
  - Auto cleanup

---

### 5. **헤더 스크롤 시 변화**
- **파일**: `components/Header.tsx`
- **효과**:
  - 스크롤 시 배경 opacity 증가 (60% → 95%)
  - Backdrop blur 강화
  - Shadow 추가
  - 높이 약간 감소
- **Threshold**: 16px 스크롤

---

### 6. **Awards 카드 개선**
- **추가된 효과**:
  - 호버 시 제목 accent 색상 전환
  - 별 아이콘 배경 accent/10으로 변경
  - 아이콘 색상 accent로 전환
  - Shadow 강화
- **기술**: Group hover utility

---

### 7. **기존 애니메이션 유지**
- Fade-up (Hero 초기 로드)
- Fade-in (일반)
- Bounce (스크롤 인디케이터)
- Page loading bar
- Scroll progress indicator
- Back to top 버튼 fade-in

---

## 🎯 **애니메이션 원칙**

### 성능
- ✅ `transform`과 `opacity`만 사용 (GPU 가속)
- ✅ Passive scroll listeners
- ✅ Intersection Observer (한 번만 트리거)
- ✅ CSS transitions 우선 사용
- ✅ `will-change` 최소화

### 접근성
- ✅ `prefers-reduced-motion` 지원
- ✅ Focus states 유지
- ✅ 애니메이션이 없어도 기능 유지

### 일관성
- ✅ 300ms 표준 duration
- ✅ `cubic-bezier(0.4, 0, 0.2, 1)` easing
- ✅ Accent color 일관된 사용
- ✅ Stagger delays 규칙적 (80-150ms)

---

## 📊 **애니메이션 타이밍 차트**

| 효과 | Duration | Easing | Trigger |
|------|----------|--------|---------|
| Hero Parallax | 100ms | ease-out | Scroll |
| Card Hover | 300ms | cubic-bezier | Hover |
| Reveal | 700ms | ease-out | Viewport enter |
| Ripple | 600ms | ease-out | Click |
| Button Hover | 200ms | ease | Hover |
| Header Scroll | 300ms | ease | Scroll >16px |

---

## 🔧 **커스터마이제이션**

### Parallax 속도 조정
```typescript
// Hero.tsx
const gradientY = scrollY * 0.3;  // 0.1 ~ 0.5
const gridY = scrollY * 0.5;      // 0.3 ~ 0.7
```

### Reveal Delay 조정
```tsx
<RevealOnScroll delay={150}>  // 0 ~ 500ms
```

### Card Glow 색상 변경
```css
/* globals.css */
background: linear-gradient(135deg, var(--color-accent), transparent);
```

---

## 🚀 **향후 추가 가능한 효과**

1. **Magnetic buttons**: 마우스 따라가는 버튼
2. **Scroll-linked animations**: GSAP ScrollTrigger
3. **Particle effects**: Hero 배경 파티클
4. **Morphing shapes**: 섹션 구분선 모프
5. **Text reveal**: 글자 단위 reveal
6. **Image zoom on scroll**: Parallax + zoom
7. **Cursor trail**: 커스텀 커서 효과
8. **Loading animations**: 페이지 진입 시퀀스

---

**작성일**: 2026년 1월  
**상태**: ✅ 프로덕션 적용 완료
