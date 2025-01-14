import useSWR from 'swr';
import { getWithAuth } from '@/services/apiClient';
import { TaskListResponse,UseFetchAllListResponse,ErrorResponse } from '@/types';

export const useFetchAllList = (): UseFetchAllListResponse => {
  const { data,isLoading, error } = useSWR<TaskListResponse[],ErrorResponse>('/lists', getWithAuth);

  return {
    lists: data,
    isLoading,
    isError: error,
  };
};