
export type TaskListResponse = {
  id: string;
  title: string;
}

export type TaskDetailResponse = {
  id: string;
  title: string;
  detail: string;
  limit: string;
  done: boolean;
}

export interface ErrorResponse {
  ErrorCode: number;
  ErrorMessageJP: string;
  ErrorMessageEN: string;
}

export type SignInResponse = {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};

export interface UseFetchAllListResponse {
  lists: TaskListResponse[] | undefined;
  isLoading: boolean;
  isError: ErrorResponse | undefined;
}