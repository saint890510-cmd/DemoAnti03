# DemoBoard 이메일 로그인 웹페이지 기획서 (PRD)

## 1. 프로젝트 개요
새롭게 구축될 `DemoBoard` 프로젝트의 핵심 진입점 역할을 하는 **이메일/비밀번호 전용 로그인 페이지**를 개발합니다. 최신의 Next.js 프레임워크와 타입 안정성을 보장하는 TypeScript, 그리고 아름답고 일관된 접근성을 제공하는 **shadcn/ui** 컴포넌트를 활용하여 구축합니다.

## 2. 목표 및 기대 효과
- **빠르고 깔끔한 인증 경험 제공:** 소셜 로그인을 제외하고 가장 직관적인 이메일 및 비밀번호만으로 인증을 수행.
- **생산성과 유지보수성 향상:** TypeScript와 shadcn/ui 기반으로 개발되어, 이후 대시보드 및 게시판 기능을 확장할 때 훌륭한 디자인 시스템 기반을 마련함.

## 3. 주요 기능 (Key Features)

### 3.1 로그인 UI 화면
- **이메일(Email) 필드:** 올바른 이메일 양식인지 확인.
- **비밀번호(Password) 필드:** 보안을 위하여 마스킹(`•`) 처리.
- **로그인 버튼(Submit Button):** 클릭 시 서버 요청을 보내고, 요청 중에는 시각적인 로딩 스피너 혹은 비활성화(Disabled) 상태 렌더링.
- 하단 부가 기능:
  - "보안을 위해 처음이신가요? [회원가입]" 링크 (더미 링크 역할이라 하더라도 배치).

### 3.2 폼 상태 및 입력값 검증 (Validation)
- 클라이언트 측에서 폼을 Submit 하기 전에 `react-hook-form`과 `zod` 스키마를 사용하여 자동 검사 수행:
  - 이메일: 빈칸 여부 및 "user@example.com" 형식 기반 여부 확인
  - 비밀번호: 빈칸 여부 및 최소 자리수 체크
- 검증 실패 시, 각 필드 하단에 붉은색의 경고 텍스트를 실시간(onBlur 혹은 onSubmit)으로 노출 (shadcn Form 컴포넌트 활용).

### 3.3 에러 상황 핸들링
- 서버와의 가상(혹은 실제) 통신 중 실패 시, shadcn의 **Toast 알림망(Notification)**을 띄워 "이메일 또는 비밀번호가 잘못되었습니다." 라는 명확한 시각적 피드백 제공 안내.

## 4. 기술 스택 (Tech Stack)
사용자의 요청에 맞춘 기술 스택으로 구성됩니다.
- **Framework:** Next.js (App Router 형태 기반)
- **Language:** TypeScript
- **CSS / UI 라이브러리:** Tailwind CSS 기반의 **shadcn/ui** (Input, Label, Button, Card, Form, Toast 모듈 중심)
- **Form Status:** `react-hook-form` + `@hookform/resolvers/zod`

## 5. 비기능적 요구사항 (Non-Functional Requirements)
- **반응형 템플릿:** 로그인 폼을 감싸고 있는 UI Card가 모바일 환경(좁은 해상도)과 PC 환경 중앙 팝업 형태로 완벽히 반응하게 배치 (Responsive Design).
- **접근성 (A11y):** 키보드의 Tab 키로 이메일 입력, 비밀번호 입력, 로그인 버튼으로 이어지는 자연스러운 초점 이동.

## 6. 향후 발전 방향 (Future Scope)
- 사용자의 인가(Authorization)를 위한 JWT 세션 연결 (예: NextAuth, Supabase).
- 메일 인증 코드를 통한 비밀번호 찾기 기능(Forgot Password) 확장.

---
*해당 PRD 문서의 내용이 적절하다면, Next.js 프로젝트 `DemoBoard`를 생성하고 shadcn/ui 컴포넌트 세팅을 시작해드리겠습니다.*
