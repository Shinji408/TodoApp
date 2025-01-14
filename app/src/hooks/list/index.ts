import type { CategoryListResponse } from "@/types";
import { useFetchData } from "../useFetchData";

export const useFetchCategoryList = () => useFetchData<CategoryListResponse[]>(`/lists`);
