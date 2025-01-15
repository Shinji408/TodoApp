import type { TaskDetail, TaskListResponse } from "@/types";
import { useFetchData } from "../useFetchData";

// GET
export const useFetchTaskList = (listId: string) =>
	useFetchData<TaskListResponse>(`/lists/${listId}/tasks`);

export const useFetchTaskDetail = (listId: string, taskId: string) =>
	useFetchData<TaskDetail>(`/lists/${listId}/tasks/${taskId}`);
