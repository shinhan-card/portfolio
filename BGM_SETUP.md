# BGM (배경음악) 설정 가이드

## 🎵 현재 상황

AmbientPlayer 컴포넌트가 다음 파일들을 순서대로 시도합니다:
1. `/audio/ambient.mp3` (권장)
2. `/audio/ambient.wma`
3. `/audio/bgm.wma`
4. `/audio/bgm.mp3`

---

## 📁 파일 복사 방법

### bgm.wma → ambient.mp3로 변환 (권장)

**왜 MP3?**
- .wma는 Chrome, Firefox에서 지원 안 됨
- MP3가 모든 브라우저에서 작동

**변환 방법**:

#### 옵션 1: 온라인 변환
1. https://cloudconvert.com/wma-to-mp3 방문
2. bgm.wma 업로드
3. MP3로 변환
4. 다운로드 후 `ambient.mp3`로 이름 변경
5. `public/audio/` 폴더에 배치

#### 옵션 2: Windows Media Player 사용
1. bgm.wma를 Windows Media Player에서 열기
2. 파일 → 다른 이름으로 저장 → MP3 형식 선택

#### 옵션 3: PowerShell 직접 복사 (테스트용)
```powershell
# bgm.wma 파일이 어디 있는지 찾기
Get-ChildItem -Path "C:\Users\82104\Desktop\Cursor" -Filter "bgm.wma" -Recurse | Select-Object FullName

# 찾은 후 복사 (경로는 실제 위치로 수정)
Copy-Item "실제경로\bgm.wma" "C:\Users\82104\Desktop\Cursor\portfolio-pm\public\audio\ambient.wma"
```

---

## ⚠️ 자동재생 제한 사항

### 브라우저 정책
**자동재생은 브라우저 정책상 불가능**합니다:
- Chrome, Firefox, Safari 모두 사용자 인터랙션 없이 오디오 자동재생 차단
- 광고, 스팸 방지를 위한 정책

### 현재 구현된 동작 (최선의 대안)

**✅ 이미 구현됨**:
1. 사용자가 **한 번만 재생 버튼 클릭**
2. localStorage에 상태 저장
3. **다음 방문부터는 자동으로 재생 시작**
4. 페이지 이동해도 계속 재생 (SPA)

→ 이것이 브라우저 정책 내에서 가능한 최선의 방법입니다.

---

## 🎛️ 현재 BGM 플레이어 기능

### 사용자 제어
- ✅ Play/Pause 버튼
- ✅ 볼륨 조절 (슬라이더)
- ✅ 음소거 버튼
- ✅ 상태 저장 (localStorage)

### UX 설계
- 왼쪽 하단에 플로팅 버튼
- Fade in/out 효과
- BackToTop 버튼과 겹치지 않음
- 키보드 접근 가능

---

## 📋 파일 위치

```
portfolio-pm/
└── public/
    └── audio/
        ├── README.md
        └── ambient.mp3 (또는 ambient.wma, bgm.wma, bgm.mp3 중 하나)
```

**권장 파일명**: `ambient.mp3`  
**대안 파일명**: `bgm.mp3`, `ambient.wma`, `bgm.wma` (자동 fallback)

---

## ✅ 설정 완료 후

1. bgm.wma를 MP3로 변환
2. `public/audio/ambient.mp3`로 저장
3. 브라우저 새로고침
4. 왼쪽 하단 BGM 버튼 클릭
5. 다음 방문부터는 자동 재생됨

---

## 🎯 요약

**자동재생**: 브라우저 정책상 불가 ❌  
**대안**: 한 번 클릭 → 다음부터 자동 ✅ (이미 구현됨)  
**파일 형식**: MP3 권장 (WMA는 Chrome/Firefox 미지원)

---

## 🔊 테스트 방법

1. MP3 파일 배치 후 새로고침
2. 왼쪽 하단 음표 버튼 확인
3. 재생 버튼 클릭
4. 브라우저 닫았다가 다시 열기
5. **자동으로 재생되는지 확인** ✅
