export interface CategoryListUpdateResponse {
	title: string;
}

export interface TaskUpdateRequest {
	title: string;
	detail: string;
	limit: string | null;
	done: boolean;
}
