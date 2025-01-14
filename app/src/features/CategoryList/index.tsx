import { TaskList } from "@/features/TaskList";
import { useFetchCategoryList } from "@/hooks/list";
import type { CategoryListResponse } from "@/types";
import { useState } from "react";

export const CategoryList = () => {
	const [isDoneDisplay, setIsDoneDisplay] = useState("todo"); // todo->未完了 done->完了
	const { data: lists, isLoading, isError } = useFetchCategoryList();
	const [selectListId, setSelectListId] = useState<string | null>(null);
	const handleIsDoneDisplayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setIsDoneDisplay(e.target.value);

	const handleSelectList = (id: string | null) => {
		setSelectListId(id);
	};

	if (isLoading) {
		return <div>Loading...</div>; // 読み込み中の表示
	}

	if (isError) {
		return <div>Error loading lists...</div>; // エラーの表示
	}

	return (
		<>
			<div className="display-select-wrapper">
				<select onChange={handleIsDoneDisplayChange} className="display-select">
					<option value="todo">未完了</option>
					<option value="done">完了</option>
				</select>
			</div>
			<ul className="list-tab">
				{lists?.map((list: CategoryListResponse) => {
					const isActive = list.id === selectListId;
					return (
						<li
							key={list.id}
							className={`list-tab-item ${isActive ? "active" : ""}`}
							onClick={() => handleSelectList(list.id)}
						>
							{isActive ? "▶ " : ""}
							{list.title}
						</li>
					);
				})}
			</ul>
			{selectListId ? (
				<TaskList listId={selectListId} isDone={isDoneDisplay} />
			) : null}
		</>
	);
};
