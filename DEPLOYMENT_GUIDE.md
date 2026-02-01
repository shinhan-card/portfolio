# 🚀 무료 배포 가이드 - Vercel

포트폴리오를 **Vercel 무료 호스팅**으로 배포하는 방법입니다.

---

## ✅ **Vercel을 선택하는 이유**

- ✅ **완전 무료** (개인 프로젝트)
- ✅ **Next.js 최적화** (Vercel이 Next.js 개발사)
- ✅ **자동 배포** (Git push → 자동 배포)
- ✅ **무료 도메인** (yourname.vercel.app)
- ✅ **커스텀 도메인** 지원 (본인 도메인 연결 가능)
- ✅ **Analytics 무료** (이미 설치됨)
- ✅ **SSL 자동** (HTTPS)
- ✅ **CDN 글로벌** (빠른 속도)

---

## 📋 **배포 단계 (10분 소요)**

### Step 1: Git 저장소 초기화 (로컬)

```bash
cd portfolio-pm

# Git 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Senior PM Portfolio"
```

---

### Step 2: GitHub에 푸시

#### 2-1. GitHub 계정 로그인
- https://github.com 방문
- 로그인 (계정 없으면 무료 가입)

#### 2-2. 새 저장소 생성
- "New Repository" 클릭
- 이름: `portfolio-pm` (또는 원하는 이름)
- **Public** 또는 Private (둘 다 무료 배포 가능)
- README, .gitignore 체크 **해제** (이미 있음)
- "Create repository" 클릭

#### 2-3. 로컬 저장소 연결 및 푸시
```bash
# GitHub 저장소 연결 (URL은 GitHub에서 제공)
git remote add origin https://github.com/yourusername/portfolio-pm.git

# 푸시
git branch -M main
git push -u origin main
```

---

### Step 3: Vercel 배포

#### 3-1. Vercel 계정 생성
- https://vercel.com 방문
- "Sign Up" 클릭
- **GitHub 계정으로 로그인** (연동 쉬움)
- 무료 (Hobby 플랜)

#### 3-2. 프로젝트 Import
1. Vercel 대시보드에서 **"Add New Project"** 클릭
2. **"Import Git Repository"** 선택
3. GitHub 저장소 목록에서 `portfolio-pm` 선택
4. **"Import"** 클릭

#### 3-3. 프로젝트 설정
```
Framework Preset: Next.js (자동 감지)
Root Directory: ./
Build Command: npm run build (자동 설정)
Output Directory: .next (자동 설정)
Install Command: npm install (자동 설정)
```

**Environment Variables 추가**:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### 3-4. 배포 시작
- **"Deploy"** 클릭
- 2-3분 대기
- ✅ 완료!

---

### Step 4: 도메인 확인

배포 완료 후:
```
https://portfolio-pm-[random].vercel.app
```

형식의 무료 도메인이 제공됩니다.

---

## 🔧 **Environment Variables (필수)**

Vercel 대시보드에서 설정:

### Supabase (방명록용)
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

> 💡 Supabase도 무료 티어 제공: https://supabase.com

---

## 🌐 **커스텀 도메인 연결 (선택사항)**

본인 도메인이 있다면:

1. Vercel 프로젝트 → **"Settings"** → **"Domains"**
2. 도메인 추가 (예: `yoontaewoong.com`)
3. DNS 설정:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. 24시간 내 활성화

---

## 🔄 **자동 배포 (CI/CD)**

Git push → 자동 배포:

```bash
# 코드 수정 후
git add .
git commit -m "Update: 프로젝트 내용 수정"
git push

# Vercel이 자동으로 감지하고 배포 시작
# 2-3분 후 자동으로 업데이트됨
```

---

## 📊 **Analytics 설정**

이미 `@vercel/analytics`가 설치되어 있습니다!

Vercel 배포 후:
- 자동으로 Analytics 활성화
- 대시보드에서 방문자 통계 확인 가능
- 무료 (프라이버시 준수)

---

## 💾 **Supabase 무료 설정**

방명록 기능을 위해:

1. https://supabase.com 가입 (무료)
2. 새 프로젝트 생성
3. SQL Editor에서 schema 실행:
   ```sql
   -- lib/supabase/schema.sql 내용 복사해서 실행
   ```
4. Settings → API에서 URL과 anon key 복사
5. Vercel Environment Variables에 추가

---

## 🎯 **배포 완료 체크리스트**

- [ ] Git 저장소 초기화
- [ ] GitHub에 푸시
- [ ] Vercel 계정 생성
- [ ] 프로젝트 Import
- [ ] Environment Variables 설정 (Supabase)
- [ ] 첫 배포 완료
- [ ] 도메인 확인
- [ ] Analytics 작동 확인
- [ ] 방명록 작동 확인

---

## 💰 **비용 정리**

```
Vercel 호스팅: 무료 ✅
GitHub 저장소: 무료 ✅
Supabase DB: 무료 ✅
SSL 인증서: 무료 (자동) ✅
Analytics: 무료 ✅

총 비용: $0 / 월
```

---

## 🚨 **주의사항**

### 무료 티어 제한 (충분함):
- **Vercel**: 
  - 100GB 대역폭/월
  - 무제한 배포
  - 1개 팀 멤버
  
- **Supabase**:
  - 500MB 데이터베이스
  - 50,000 MAU
  - 1GB 파일 스토리지

→ 개인 포트폴리오에는 **충분히 넉넉함**

---

## 📝 **배포 후 TODO**

1. ✅ 사이트 작동 확인
2. ✅ 모바일 반응형 확인
3. ✅ 다크모드 확인
4. ✅ 방명록 테스트
5. ✅ 링크 공유 (LinkedIn, 이력서 등)

---

## 🔗 **유용한 링크**

- Vercel: https://vercel.com
- Supabase: https://supabase.com
- GitHub: https://github.com
- 도메인 구매 (선택): https://www.namecheap.com, https://www.cloudflare.com/products/registrar/

---

**준비되셨으면 Step 1부터 시작하세요!** 🚀
