# 폰트 업그레이드 상세

프리미엄 포트폴리오에 걸맞은 최신 웹폰트로 전면 교체했습니다.

---

## 🎨 **새로운 폰트 스택**

### 1. **한글: Pretendard Variable**
- **출처**: [Pretendard by cactus](https://github.com/orioncactus/pretendard)
- **타입**: Variable Font (가변 폰트)
- **특징**:
  - 한글 웹폰트 중 가장 모던하고 깔끔한 디자인
  - Apple SD Gothic Neo, Noto Sans CJK의 장점 결합
  - Variable Font로 용량 최적화
  - 9단계 굵기 지원 (100~900)
  - Dynamic subset으로 필요한 글자만 로드
- **로드 방식**: CDN (jsDelivr)
- **라이선스**: SIL Open Font License 1.1

### 2. **영문: Inter**
- **출처**: [Inter by Rasmus Andersson](https://rsms.me/inter/)
- **타입**: Google Fonts (Next.js 최적화)
- **특징**:
  - UI/UX에 최적화된 중립적 디자인
  - 높은 가독성 (특히 소형 크기)
  - OpenType features (ss01, ss02, cv01 등)
  - 스크린에서의 명확한 렌더링
  - Apple, GitHub 등 tech 기업 사용
- **가중치**: 300, 400, 500, 600, 700, 800
- **로드 방식**: next/font/google (자동 최적화)

### 3. **Mono: JetBrains Mono**
- **출처**: [JetBrains](https://www.jetbrains.com/lp/mono/)
- **타입**: Google Fonts (Next.js 최적화)
- **특징**:
  - 코드 가독성을 위한 디자인
  - 개발자 친화적 (ligatures 지원)
  - 모던한 모노스페이스 느낌
  - 뛰어난 문자 구분성
- **가중치**: 400, 500, 600, 700
- **로드 방식**: next/font/google

---

## 📊 **기존 vs 새 폰트 비교**

| 항목 | 기존 (Geist) | 신규 (Pretendard + Inter) |
|------|--------------|----------------------------|
| **한글 가독성** | 보통 | ⭐⭐⭐⭐⭐ 탁월 |
| **영문 가독성** | 좋음 | ⭐⭐⭐⭐⭐ 탁월 |
| **모던함** | 보통 | ⭐⭐⭐⭐⭐ 최신 |
| **브랜드 감각** | 기본 | ⭐⭐⭐⭐⭐ 프리미엄 |
| **Variable Font** | ❌ | ✅ |
| **OpenType Features** | 제한적 | ✅ 풍부 (ss01, ss02, cv01 등) |
| **용량 최적화** | 보통 | ⭐⭐⭐⭐⭐ |
| **Tech 브랜드 사용** | 일부 | ✅ (Apple, GitHub, Stripe 등) |

---

## 🎯 **타이포그래피 개선사항**

### Font Weights (굵기)
```
- Light: 300 (부드러운 텍스트)
- Regular: 400 (본문)
- Medium: 500 (강조)
- Semibold: 600 (소제목)
- Bold: 700 (제목)
- Extrabold: 800 (Hero, 대제목)
```

### Letter Spacing (자간)
```
- H1: -0.03em (타이트한 대제목)
- H2: -0.025em
- H3: -0.02em
- Body: -0.011em (자연스러운 본문)
```

### OpenType Features
```css
font-feature-settings:
  "rlig" 1,  /* 필수 합자 */
  "calt" 1,  /* 문맥적 대체 */
  "kern" 1,  /* 커닝 */
  "ss01" 1,  /* Stylistic Set 01 */
  "ss02" 1,  /* Stylistic Set 02 */
  "cv01" 1;  /* Character Variant 01 */
```

---

## 📁 **수정된 파일**

```
app/
├── layout.tsx (폰트 import 및 적용)
└── globals.css (타이포그래피 시스템 재정의)

tailwind.config.ts (폰트 family 업데이트)

FONT_UPGRADE.md (이 문서)
```

---

## 🚀 **성능 최적화**

### 1. **Next.js Font Optimization**
- `next/font/google`로 자동 최적화
- 빌드 타임에 폰트 다운로드
- CSS inlining으로 FOUT 방지
- Preload 자동 적용

### 2. **Variable Font 사용**
- Pretendard Variable: 하나의 파일로 모든 굵기 지원
- 용량 절감 (9개 파일 → 1개 파일)
- 부드러운 굵기 전환

### 3. **Dynamic Subset**
- 사용되는 글자만 로드
- 초기 로딩 속도 향상
- CDN 캐싱 활용

### 4. **Font Display Strategy**
```
display: "swap"
- FOUT 방식 사용
- 시스템 폰트 먼저 표시
- 웹폰트 로드 후 전환
- 빠른 First Contentful Paint
```

---

## 🎨 **디자인 효과**

### Before (Geist)
- ❌ 한글이 다소 딱딱하고 기본적
- ❌ 브랜드 차별화 부족
- ❌ 굵기 변화가 제한적

### After (Pretendard + Inter)
- ✅ 한글이 부드럽고 모던함
- ✅ 프리미엄 브랜드 느낌
- ✅ 풍부한 굵기 표현 (300~800)
- ✅ Tech/Fintech 포트폴리오에 최적
- ✅ 한글/영문 조화 완벽
- ✅ 애플/스트라이프 수준의 타이포그래피

---

## 📖 **폰트 사용 예시**

### Hero Section
```css
h1 {
  font-weight: 800;  /* Extrabold */
  letter-spacing: -0.03em;
  font-size: 4.5rem;
}
```

### Body Text
```css
p {
  font-weight: 400;  /* Regular */
  line-height: 1.7;
  letter-spacing: -0.011em;
}
```

### Subtitles
```css
h3 {
  font-weight: 700;  /* Bold */
  letter-spacing: -0.02em;
}
```

### Code/Mono
```css
code, pre {
  font-family: var(--font-jetbrains-mono);
  font-weight: 500;
}
```

---

## 🌐 **브라우저 지원**

✅ **Chrome/Edge**: 완벽 지원  
✅ **Firefox**: 완벽 지원  
✅ **Safari**: 완벽 지원 (Variable Font 포함)  
✅ **모바일**: iOS/Android 완벽 지원  

---

## 📚 **참고 자료**

- [Pretendard 공식 GitHub](https://github.com/orioncactus/pretendard)
- [Inter 공식 사이트](https://rsms.me/inter/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Next.js Font Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)

---

## ✨ **결과**

사이트의 타이포그래피가 **프리미엄급**으로 업그레이드되었습니다.

**한글**은 부드럽고 모던하며, **영문**은 전문적이고 세련되게 표현됩니다.

Apple, GitHub, Stripe 같은 선도적인 tech 기업들이 사용하는 수준의 폰트 시스템을 갖추었습니다.

---

**업그레이드 완료일**: 2026년 1월  
**상태**: ✅ 프로덕션 적용 완료
