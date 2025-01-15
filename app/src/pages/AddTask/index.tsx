import { useState } from "react";
import { postWithAuth } from "@/lib/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { parse } from "@formkit/tempo";
import { useFetchCategoryDetail } from "@/hooks/list";

const AddTask = () => {
	const { listId } = useParams();
	if (!listId) return <div>Invalid ID</div>;
	const [title, setTitle] = useState<string>("");
	const [detail, setDetail] = useState<string>("");
	const [isDone, setIsDone] = useState<boolean>(false);
	const [date, setDate] = useState<string>("");
	const [time, setTime] = useState<string>("");
	const navigate = useNavigate();
	const { data: list, isLoading, isError } = useFetchCategoryDetail(listId);

	const handleSubmit = async () => {
		if (!listId) {
			alert("Please select a list.");
			return;
		}

		try {
			const data = {
				title,
				detail,
				done: isDone,
				limit: date && time ? parse(`${date}T${time}Z`) : null,
			};

			postWithAuth(`/lists/${listId}/tasks`, data);
			alert("Task created successfully!");
			navigate("/");
		} catch (error) {
			alert("Failed to create task.");
		}
	};

	return (
		<div>
			<h1>Create Task</h1>
			<h2>カテゴリ名：{list?.title}</h2>
			<label htmlFor="task-title">Title</label>
			<input
				id="task-title"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label htmlFor="task-detail">Detail</label>
			<textarea
				id="task-detail"
				value={detail}
				onChange={(e) => setDetail(e.target.value)}
			/>
			<br />
			<label htmlFor="task-isDone">Done</label>
			<input
				id="task-isDone"
				type="checkbox"
				checked={isDone}
				onChange={(e) => setIsDone(e.target.checked)}
			/>
			<br />
			<label>Deadline</label>
			<input
				type="date"
				onChange={(e) => setDate(e.target.value)}
				value={date}
			/>
			<input
				type="time"
				onChange={(e) => setTime(e.target.value)}
				value={time}
			/>
			<br />
			<button onClick={handleSubmit}>Create Task</button>
		</div>
	);
};

export default AddTask;
