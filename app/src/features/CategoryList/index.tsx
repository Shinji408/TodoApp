import { Button } from "@/components/ui/button";
import { TaskList } from "@/features/TaskList";
import { useFetchCategoryList } from "@/hooks/list";
import type { CategoryListResponse } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CategoryList = () => {
	const navigate = useNavigate();
	const [isDoneDisplay, setIsDoneDisplay] = useState("todo"); // todo->未完了 done->完了
	const { data: lists, isLoading, isError } = useFetchCategoryList();
	const [selectListId, setSelectListId] = useState<string | null>(null);
	const handleIsDoneDisplayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setIsDoneDisplay(e.target.value);

	const handleSelectList = (id: string | null) => {
		setSelectListId(id);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading lists...</div>;
	}

	return (
		<>
			<div className="display-select-wrapper">
				<select onChange={handleIsDoneDisplayChange} className="display-select">
					<option value="todo">未完了</option>
					<option value="done">完了</option>
				</select>
			</div>
			<Button onClick={() => navigate(`/lists/${selectListId}/edit`)}>
				リスト編集
			</Button>
			<Button onClick={() => navigate("/list/create")}>新規リスト</Button>
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
				<Button onClick={() => navigate(`/lists/${selectListId}/task/add`)}>
					タスク追加
				</Button>
			) : null}
			{selectListId ? (
				<TaskList listId={selectListId} isDone={isDoneDisplay} />
			) : null}
		</>
	);
};
