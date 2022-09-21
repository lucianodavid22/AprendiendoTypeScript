import React from "react";
import { Task } from "../Interfaces/Interfaces";
import TaskCard from "./TaskCard";

interface Props {
	tasks: Task[];
	deleteTask: (id: number) => void;
};

export default function TaskList({ tasks, deleteTask }: Props) {
	return (
		<>
			{tasks.map((task) => (
				<TaskCard task={task} deleteTask={deleteTask}/>
			))}
		</>
	);
};
