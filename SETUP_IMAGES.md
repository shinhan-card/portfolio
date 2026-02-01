# 이미지 설정 가이드

## 📸 필수 이미지 파일 복사

아래 명령어를 **PowerShell**에서 실행하세요:

### 1. Hero 배경 이미지 (맥북 스티커)
```powershell
# 폴더 생성
New-Item -ItemType Directory -Force -Path "C:\Users\82104\Desktop\Cursor\portfolio-pm\public\images\hero"

# 이미지 복사
Copy-Item "C:\Users\82104\.cursor\projects\c-Users-82104-Desktop-Cursor\assets\c__Users_82104_AppData_Roaming_Cursor_User_workspaceStorage_c0faa9a30b3a48426827ff3fec80f107_images______2023-06-24_232620-79fd7c7f-ee18-4e99-b4ec-c9317d04a8cf.png" "C:\Users\82104\Desktop\Cursor\portfolio-pm\public\images\hero\laptop-stickers.png" -Force
```

### 2. 프로필 사진 (정장 사진)
```powershell
Copy-Item "C:\Users\82104\.cursor\projects\c-Users-82104-Desktop-Cursor\assets\c__Users_82104_AppData_Roaming_Cursor_User_workspaceStorage_c0faa9a30b3a48426827ff3fec80f107_images___1-cf35ec7e-f37a-4ea1-b215-330ec5c416e9.png" "C:\Users\82104\Desktop\Cursor\portfolio-pm\public\images\profile.png" -Force
```

---

## 🎨 적용된 디자인

### Hero 섹션
- 맥북 스티커 이미지가 **전체 배경**으로 표시
- Notion 스타일: 약간 블러 + 채도 감소 + 투명도
- 그라데이션 오버레이로 텍스트 가독성 확보
- Parallax 효과 (스크롤 시 느리게 움직임)

### About 페이지
- 페이지 헤더 배경으로 사용
- 더 블러 처리 (2px)
- 헤더 영역만 적용

---

## ✅ 완료 후

이미지 복사 완료 후:
```bash
npm run dev
```

Hero 섹션과 About 페이지에서 맥북 스티커 배경을 확인하세요!
