import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ApiError, ApiRequestConfig as CustomRequestConfig } from '@/types/api';
import { deleteSession } from '@/utils/session/manageSession';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';
const API_TIMEOUT = 10000;

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: ApiError) => {
    const status = error.status || 'N/A';
    const data = error.message || 'No response data';

    console.error(`❌ Response Error: ${status}`, data);

    if (error.status === 401) {
      await deleteSession();
      // 여기서 더 세분화할 것
      if (typeof window !== 'undefined') {
        // window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

export class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = apiClient;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async request<T>(config: CustomRequestConfig): Promise<T> {
    const response = await this.client.request<T>(config);
    return response.data;
  }
}

export const apiService = new ApiService();

export default apiService;
