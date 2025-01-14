import { useFetchTaskDetail } from "@/hooks/task";
import { format } from "@formkit/tempo";

export const TaskItem = ({
	listId,
	taskId,
}: { listId: string; taskId: string }) => {
	const { data: task, isLoading, isError } = useFetchTaskDetail(listId, taskId);
	const date = "2010-06-09T15:32:00Z";

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading tasks...</div>;
	}

	return (
		<>
			{task && (
				<>
					<h3>{task.title}</h3>
					<p>{task.detail}</p>
					<p>{task.limit ? format(task.limit) : null}</p>
					<p>{format(date, { date: "medium", time: "long" })}</p>
					<p>---</p>
				</>
			)}
		</>
	);
};
