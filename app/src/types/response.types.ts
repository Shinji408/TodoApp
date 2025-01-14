export type CategoryListResponse = {
	id: string;
	title: string;
};

export type TaskDetail = {
	id: string;
	title: string;
	detail: string;
	limit: string | null;
	done: boolean;
};

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

export interface TaskListResponse {
	listId: string;
	name: string;
	tasks: TaskDetail[];
}

export interface UseFetchCategoryListResponse {
	lists: CategoryListResponse[] | null;
	isLoading: boolean;
	isError: ErrorResponse | null;
}

export interface UseFetchTaskListResponse {
	tasks: TaskListResponse | null;
	isLoading: boolean;
	isError: ErrorResponse | null;
}

export interface UseFetchTaskDetailResponse {
	task: TaskDetail | null;
	isLoading: boolean;
	isError: ErrorResponse | null;
}
