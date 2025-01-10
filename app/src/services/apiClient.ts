import axios, { AxiosRequestConfig } from "axios";
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
export const getWithAuth = async (path: string, config: AxiosRequestConfig = {}): Promise<any> => {
  try {
    const token = getToken();
    // headers の型を Record<string, string> に設定
    const headers: Record<string, string> = {
      ...config.headers as Record<string, string>,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await apiClient.get(path, { ...config, headers });
    return response.data;
  } catch (error: any) {
    // エラーハンドリング
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error: No response received', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};

// 認証トークン（JWT）を使用するPOSTリクエストを行う関数
export const postWithAuth = async (path: string, data: any, config: AxiosRequestConfig = {}): Promise<any> => {
  const token = getToken();
  const headers: Record<string, string> = {
    ...config.headers as Record<string, string>,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return apiClient
    .post(path, data, { ...config, headers })
    .then((response) => response.data);
};

// 認証トークン（JWT）を使用するPUTリクエストを行う関数
export const putWithAuth = async (path: string, data: any, config: AxiosRequestConfig = {}): Promise<any> => {
  const token = getToken();
  const headers: Record<string, string> = {
    ...config.headers as Record<string, string>,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return apiClient
    .put(path, data, { ...config, headers })
    .then((response) => response.data);
};

// 認証トークン（JWT）を使用するDELETEリクエストを行う関数
export const deleteWithAuth = async (path: string, config: AxiosRequestConfig = {}): Promise<any> => {
  const token = getToken();
  const headers: Record<string, string> = {
    ...config.headers as Record<string, string>,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return apiClient
    .delete(path, { ...config, headers })
    .then((response) => response.data);
};

// 通常のGETリクエスト関数
export async function get(path: string, config: AxiosRequestConfig = {}): Promise<any> {
  return await apiClient.get(path, config).then((res) => res.data);
}

// 通常のPOSTリクエスト関数
export async function post(path: string, data: any): Promise<any> {
  return await apiClient.post(path, data).then((res) => res.data);
}

