import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 환경 변수가 올바르게 설정되었는지 확인
const isConfigured = supabaseUrl.includes('.supabase.co') && supabaseAnonKey.length > 10;

// 설정 전 fetch 네트워크 에러(TypeError)를 방지하기 위해 빈 껍데기(Dummy) 클라이언트 제공
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      auth: {
        signInWithPassword: async () => ({
          data: null,
          error: { message: "가짜(Dummy) 연결 상태입니다. .env.local 파일에 실제 Supabase URL과 KEY를 기입해 주세요." }
        }),
        signUp: async () => ({
          data: null,
          error: { message: "가짜(Dummy) 연결 상태입니다. .env.local 파일에 실제 Supabase URL과 KEY를 기입해 주세요." }
        })
      }
    } as any;
