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
	const [tasks, setTask] = useState<Task[]>([
		{
			id: 1,
			title: "Aprender React + TypeScript",
			description: "Realizar app simple con React utilizando el template de TypeScript",
			completed: true,
		},
	]);

	const addNewTask = (task: Task) => setTask([...tasks, task ]);
	const deleteTask = (id: number) => setTask(tasks.filter(e => e.id !== id));

	return (
		<div className="App">
			<header className="cabecera">
				<h1>{title}</h1>
			</header>
			<section className="formulario">
				<TaskForm addNewTask={addNewTask} />
			</section>
			<div className="tareas">
				<TaskList tasks={tasks} deleteTask={deleteTask} />
			</div>
		</div>
	);
}
