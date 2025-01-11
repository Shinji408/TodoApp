import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { Cookies } from "react-cookie";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || "";
const cookie = new Cookies();

// トークンを取得する関数
const getToken = (): string | undefined => {
	return cookie.get("token");
};

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		Accept: "application/json",
	},
});

// 認証トークン（JWT）を使用するGETリクエストを行う関数
export const getWithAuth = async <T>(
	path: string,
	config: AxiosRequestConfig = {},
): Promise<T> => {
	try {
		const token = getToken();
		const headers: Record<string, string> = {
			...(config.headers as Record<string, string>),
		};

		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

		const response: AxiosResponse<T> = await apiClient.get(path, {
			...config,
			headers,
		});
		return response.data;
	} catch (error: unknown) {
		// エラーハンドリング
		if (axios.isAxiosError(error)) {
			if (error.response) {
				console.error("Error:", error.response.status, error.response.data);
			} else if (error.request) {
				console.error("Error: No response received", error.request);
			} else {
				console.error("Error:", error.message);
			}
		} else {
			console.error("An unexpected error occurred:", error);
		}
		throw error;
	}
};

// 認証トークン（JWT）を使用するPOSTリクエストを行う関数
export const postWithAuth = async <T, D>(
	path: string,
	data: D,
	config: AxiosRequestConfig = {},
): Promise<T> => {
	const token = getToken();
	const headers: Record<string, string> = {
		...(config.headers as Record<string, string>),
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const response: AxiosResponse<T> = await apiClient.post(path, data, {
		...config,
		headers,
	});
	return response.data;
};

// 認証トークン（JWT）を使用するPUTリクエストを行う関数
export const putWithAuth = async <T, D>(
	path: string,
	data: D,
	config: AxiosRequestConfig = {},
): Promise<T> => {
	const token = getToken();
	const headers: Record<string, string> = {
		...(config.headers as Record<string, string>),
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const response: AxiosResponse<T> = await apiClient.put(path, data, {
		...config,
		headers,
	});
	return response.data;
};

// 認証トークン（JWT）を使用するDELETEリクエストを行う関数
export const deleteWithAuth = async <T>(
	path: string,
	config: AxiosRequestConfig = {},
): Promise<T> => {
	const token = getToken();
	const headers: Record<string, string> = {
		...(config.headers as Record<string, string>),
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const response: AxiosResponse<T> = await apiClient.delete(path, {
		...config,
		headers,
	});
	return response.data;
};

// 通常のGETリクエスト関数
export async function get<T>(
	path: string,
	config: AxiosRequestConfig = {},
): Promise<T> {
	const response: AxiosResponse<T> = await apiClient.get(path, config);
	return response.data;
}

// 通常のPOSTリクエスト関数
export async function post<T, D>(path: string, data: D): Promise<T> {
	const response: AxiosResponse<T> = await apiClient.post(path, data);
	return response.data;
}
