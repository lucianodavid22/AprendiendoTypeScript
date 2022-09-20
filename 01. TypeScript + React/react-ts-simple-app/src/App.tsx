import React, { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { Task } from "./Interfaces/Interfaces";
interface Props {
	title?: string;
}

/* Minuto 15 */
export default function App({ title }: Props) {
	const [task, setTask] = useState<Task[]>([
		{
			id: 1,
			title: "Learn React",
			description: "Aprender React",
			completed: false,
		},
	]);

	return (
		<div className="App">
			<h1>{title}</h1>
      <TaskForm />
			<TaskList tasks={task} />
		</div>
	);
};
