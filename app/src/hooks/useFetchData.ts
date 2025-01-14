import { getWithAuth } from "@/lib/apiClient";
import type { ErrorResponse } from "@/types";
import useSWR from "swr";

type UseFetchResponse<Data> = {
	data: Data | null;
	isLoading: boolean;
	isError: ErrorResponse | null;
};

export const useFetchData = <Data>(path: string): UseFetchResponse<Data> => {
	const { data, isLoading, error } = useSWR<Data, ErrorResponse>(
		path,
		getWithAuth,
	);

	return {
		data: data ?? null,
		isLoading,
		isError: error ?? null,
	};
};
