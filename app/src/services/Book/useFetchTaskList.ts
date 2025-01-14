import useSWR from "swr"
import { getWithAuth } from "@/services/apiClient"


export const useFetchTaskList = (listId: string) => {
  const { data, isLoading, error } = useSWR(`/lists/${listId}/tasks`, getWithAuth)

  return {
    taskList: data,
    isLoading,
    isError: error
  }
}
