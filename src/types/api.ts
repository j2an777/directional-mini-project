// API 응답 기본 타입
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message: string;
  timestamp?: string;
}

// API 에러 타입
export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: unknown;
}

// HTTP 메서드 타입
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// API 요청 설정 타입
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  timeout?: number;
  skipAuth?: boolean;
}
