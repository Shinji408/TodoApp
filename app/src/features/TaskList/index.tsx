import { useFetchTaskList } from "@/hooks/task";
import type { TaskDetail } from "@/types";
import { format } from "@formkit/tempo";

export const TaskList = ({
	listId,
	isDone,
}: { listId: string; isDone: string }) => {
	const { data: taskList, isLoading, isError } = useFetchTaskList(listId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading tasks...</div>;
	}

	if (isDone === "done") {
		return (
			<>
				{taskList?.tasks?.map((task: TaskDetail) => {
					if (task.done) {
						return (
							<div key={task.id}>
								<h3>{task.title}</h3>
								<p>{task.detail}</p>
								<p>
									{task.limit
										? format(task.limit, { date: "full", time: "short" })
										: null}
								</p>
							</div>
						);
					}
				})}
			</>
		);
	} else {
		return (
			<>
				{taskList?.tasks?.map((task: TaskDetail) => {
					if (!task.done) {
						return (
							<div key={task.id}>
								<h3>{task.title}</h3>
								<p>{task.detail}</p>
								<p>
									{task.limit
										? format(task.limit, { date: "full", time: "short" })
										: null}
								</p>
							</div>
						);
					}
				})}
			</>
		);
	}
};
