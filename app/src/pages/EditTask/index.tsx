import { useFetchTaskDetail } from "@/hooks/task";
import { format, parse } from "@formkit/tempo"; // このモジュールが適切な日付形式に対応しているか確認
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { putWithAuth, deleteWithAuth } from "@/lib/apiClient";

const EditTask = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState<string>("");
	const [detail, setDetail] = useState<string>("");
	const [isDone, setIsDone] = useState<boolean>(false);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const { listId, taskId } = useParams<{ listId: string; taskId: string }>();

	if (!listId || !taskId) return null;

	const { data: task, isLoading, isError } = useFetchTaskDetail(listId, taskId);

	useEffect(() => {
		if (task) {
			setTitle(task.title);
			setDetail(task.detail);
			setIsDone(task.done);
			if (task.limit) {
				const limitDate = new Date(task.limit);
				setDate(format(limitDate, "YYYY-MM-DD"));
				setTime(format(limitDate, "HH:mm"));
			} else {
				setDate("");
				setTime("");
			}
		}
	}, [task]);

	const handleSave = async () => {
		try {
			const updatedTask = {
				title,
				detail,
				isDone,
				limit: date && time ? parse(`${date}T${time}Z`) : null,
			};
			await putWithAuth(`/lists/${listId}/tasks/${taskId}`, updatedTask);
			alert("Task updated successfully!");
			navigate(`/`);
		} catch (error) {
			console.error("Error updating task:", error);
			alert("Failed to update task.");
		}
	};

	const handleDelete = async () => {
		if (!window.confirm("Are you sure you want to delete?")) return;
		try {
			await deleteWithAuth(`/lists/${listId}/tasks/${taskId}`);
			alert("Task deleted successfully!");
			navigate(`/`);
		} catch (error) {
			console.error("Error deleting task:", error);
			alert("Failed to delete task.");
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading task...</div>;
	}

	if (!task) {
		return <div>Task not found</div>;
	}

	return (
		<div>
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
			<label>期限日時</label>
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
			<button onClick={handleSave}>Save</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default EditTask;
