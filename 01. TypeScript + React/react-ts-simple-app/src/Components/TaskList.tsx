import React from "react";
import { Task } from "../Interfaces/Interfaces";
import TaskCard from "./TaskCard";

interface Props {
	tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
	return (
		<>
			{tasks.map((task) => (
        <TaskCard task={task} />
			))}
		</>
	);
};
