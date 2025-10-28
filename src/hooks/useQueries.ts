import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  useInfiniteQuery as useTanStackInfiniteQuery,
} from '@tanstack/react-query';

import { ApiError } from '@/types/api';
import apiService from '@/lib/apiService';

// 기본 쿼리 옵션
const defaultQueryOptions = {
  staleTime: 5 * 60 * 1000, // 5분
  gcTime: 10 * 60 * 1000, // 10분
  retry: 3,
  refetchOnWindowFocus: false,
};

// 기본 뮤테이션 옵션
const defaultMutationOptions = {
  retry: 1,
  retryDelay: 1000,
};

// GET 요청 훅
export function useApiQuery<T>(
  queryKey: string[],
  url: string,
  options?: Omit<UseQueryOptions<T, ApiError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery<T, ApiError>({
    queryKey,
    queryFn: async () => {
      const response = await apiService.get<T>(url);
      return response;
    },
    ...defaultQueryOptions,
    ...options,
  });
}

// POST 요청 뮤테이션 훅
export function useApiMutation<T, TVariables = unknown>(
  url: string,
  options?: Omit<UseMutationOptions<T, ApiError, TVariables>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation<T, ApiError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const response = await apiService.post<T>(url, variables);
      return response;
    },
    ...defaultMutationOptions,
    ...options,
    onSuccess: (data, variables, onMutateResult, context) => {
      // 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [url.split('/')[1]] });
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
}

// PUT 요청 뮤테이션 훅
export function useApiPutMutation<T, TVariables = unknown>(
  url: string,
  options?: Omit<UseMutationOptions<T, ApiError, TVariables>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation<T, ApiError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const response = await apiService.put<T>(url, variables);
      return response;
    },
    ...defaultMutationOptions,
    ...options,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: [url.split('/')[1]] });
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
}

// DELETE 요청 뮤테이션 훅
export function useApiDeleteMutation<T>(
  url: string,
  options?: Omit<UseMutationOptions<T, ApiError, void>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation<T, ApiError, void>({
    mutationFn: async () => {
      const response = await apiService.delete<T>(url);
      return response;
    },
    ...defaultMutationOptions,
    ...options,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: [url.split('/')[1]] });
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
}

// 페이지네이션 쿼리 훅
export function usePaginatedQuery<T>(
  queryKey: string[],
  url: string,
  params: { page: number; limit: number; [key: string]: unknown },
  options?: Omit<UseQueryOptions<T, ApiError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery<T, ApiError>({
    queryKey: [...queryKey, params],
    queryFn: async () => {
      const response = await apiService.get<T>(url, { params });
      return response;
    },
    ...defaultQueryOptions,
    ...options,
  });
}

// 무한 스크롤 쿼리 훅
export function useInfiniteQuery<T>(
  queryKey: string[],
  url: string,
  getNextPageParam: (lastPage: T, allPages: T[]) => number | undefined,
) {
  return useTanStackInfiniteQuery<T, ApiError>({
    queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apiService.get<T>(url, {
        params: { page: pageParam },
      });
      return response;
    },
    initialPageParam: 1,
    getNextPageParam,
    ...defaultQueryOptions,
  });
}
