import { useFetchTaskDetail } from "@/hooks/task";
import { format } from "@formkit/tempo";

export const TaskItem = ({
	listId,
	taskId,
}: { listId: string; taskId: string }) => {
	const { data: task, isLoading, isError } = useFetchTaskDetail(listId, taskId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading tasks...</div>;
	}

	if (!task) {
		return <div>Task not found</div>;
	}

	return (
		<>
			<div>
				<h1>{task.title}</h1>
				<p>{task.detail}</p>
				<p>
					{task.limit
						? format(task.limit, { date: "full", time: "short" })
						: null}
				</p>
			</div>
		</>
	);
};
