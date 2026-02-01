# 🗄️ Supabase 설정 가이드 (방명록 활성화)

방명록 기능을 활성화하기 위한 Supabase 무료 설정 가이드입니다.

---

## 📋 **Step 1: Supabase 계정 생성**

1. **https://supabase.com** 방문
2. **"Start your project"** 클릭
3. **"Sign in with GitHub"** 선택 ← 권장 (GitHub 계정 연동)
4. 무료 플랜 선택 (Free tier)

---

## 📦 **Step 2: 새 프로젝트 생성**

1. **"New Project"** 클릭
2. 설정:
   ```
   Name: portfolio-guestbook (또는 원하는 이름)
   Database Password: [강력한 비밀번호 생성]
   Region: Northeast Asia (Seoul) ← 한국에서 가장 빠름
   Pricing Plan: Free
   ```
3. **"Create new project"** 클릭
4. 2-3분 대기 (프로젝트 생성 중...)

---

## 🗃️ **Step 3: 데이터베이스 스키마 생성**

프로젝트가 준비되면:

1. 왼쪽 메뉴에서 **"SQL Editor"** 클릭
2. **"New query"** 클릭
3. 아래 SQL 코드 **전체 복사해서 붙여넣기**:

```sql
-- Enable Row Level Security
create table if not exists guestbook (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  company text,
  message text not null,
  ip_hash text
);

-- Enable RLS
alter table guestbook enable row level security;

-- Policy: Anyone can read
create policy "Anyone can read guestbook entries"
  on guestbook for select
  using (true);

-- Policy: Anyone can insert (with rate limiting handled by app)
create policy "Anyone can insert guestbook entries"
  on guestbook for insert
  with check (true);

-- Create index for better performance
create index if not exists guestbook_created_at_idx on guestbook (created_at desc);
```

4. **"Run"** 또는 **"RUN"** 버튼 클릭
5. ✅ "Success. No rows returned" 메시지 확인

---

## 🔑 **Step 4: API Keys 확인**

1. 왼쪽 메뉴에서 **"Settings"** (톱니바퀴 아이콘)
2. **"API"** 메뉴 선택
3. 다음 두 값 복사:

### **Project URL**
```
https://xxxxxxxxxxxxx.supabase.co
```

### **anon public** (API Key)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHh4eHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxNjQ4MDAsImV4cCI6MjAyMTc0MDgwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ 주의**: `service_role` 키는 **절대 사용하지 마세요!** (보안 위험)

---

## 🚀 **Step 5: Vercel Environment Variables 추가**

1. **Vercel 대시보드** → 프로젝트 클릭
2. **"Settings"** 탭
3. **"Environment Variables"** 메뉴
4. 다음 2개 변수 추가:

### **변수 1**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [Step 4에서 복사한 Project URL]
Environment: Production, Preview, Development (전체 체크)
```

**"Add"** 클릭

### **변수 2**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [Step 4에서 복사한 anon public 키]
Environment: Production, Preview, Development (전체 체크)
```

**"Add"** 클릭

---

## 🔄 **Step 6: Vercel 재배포**

환경변수 추가 후:

1. **"Deployments"** 탭
2. 최신 배포 옆 **"..."** 메뉴
3. **"Redeploy"** 클릭
4. **"Redeploy"** 확인
5. 2-3분 대기

**또는**:

로컬에서 작은 변경 후 push:
```bash
# 아무 파일이나 작은 수정 (예: README.md)
git add .
git commit -m "Add environment variables"
git push

# Vercel이 자동으로 재배포
```

---

## ✅ **Step 7: 방명록 테스트**

재배포 완료 후:

1. https://yoon-tae-woong.vercel.app/#contact 방문
2. **방명록 섹션**으로 스크롤
3. 메시지 작성해서 제출
4. ✅ 성공 메시지 표시
5. 오른쪽에 메시지 나타남

---

## 🎯 **완료 체크리스트**

- [ ] Supabase 계정 생성
- [ ] 프로젝트 생성 (Seoul region)
- [ ] SQL 스키마 실행
- [ ] Project URL 복사
- [ ] anon key 복사
- [ ] Vercel Environment Variables 추가
- [ ] Vercel 재배포
- [ ] 방명록 테스트 성공

---

## 📊 **Supabase 무료 티어**

```
✅ 500MB 데이터베이스 (방명록 수천 개 가능)
✅ 50,000 MAU (월간 활성 사용자)
✅ 5GB 대역폭
✅ 무제한 API 요청

→ 개인 포트폴리오에 충분히 넉넉함
```

---

## 🔒 **보안 기능 (이미 구현됨)**

포트폴리오에 이미 포함된 보안 기능:
- ✅ IP 해시 저장 (중복 방지)
- ✅ Honeypot (스팸봇 차단)
- ✅ 300자 제한
- ✅ Rate limiting (앱 레벨)
- ✅ Row Level Security (RLS) 활성화

---

## 🆘 **문제 해결**

### 방명록이 작동하지 않으면:

1. **브라우저 콘솔 확인** (F12)
   - Supabase 연결 에러 확인

2. **환경변수 확인**
   - Vercel Settings → Environment Variables
   - 두 변수 모두 있는지 확인

3. **재배포 확인**
   - 환경변수 추가 후 재배포 했는지 확인

4. **Supabase 프로젝트 활성화**
   - 프로젝트가 "Paused" 상태가 아닌지 확인

---

**준비되셨으면 Step 1부터 시작하세요!** 🚀

각 단계에서 막히시면 스크린샷을 보내주시거나 말씀해주세요!
