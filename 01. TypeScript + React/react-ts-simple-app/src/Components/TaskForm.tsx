import React, { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../Interfaces/Interfaces";

interface Props {
	addNewTask: (task: Task) => void;
};

type InputEvent = ChangeEvent<HTMLInputElement>;
type FormSubmitEvent = FormEvent<HTMLFormElement>;

const initialState = {
	title: "",
	description: "",
};

export default function TaskForm({ addNewTask }: Props) {

	const [tarea, setTarea] = useState(initialState);

	const [ i, setI] = useState(2);

	const handleInputChange = ({ target: { name, value } }: InputEvent) => {
		setTarea({ ...tarea, [name]: value });
	};

	const handleSubmit = (e: FormSubmitEvent) => {
		e.preventDefault();
		setI(i + 1);
		addNewTask({...tarea, id: i, completed: false });
		setTarea(initialState);
	};

	return (
		<div>
			<div className="titulo">
				<h2>Agregar Tareas</h2>
			</div>

			<form onSubmit={handleSubmit}>
			<div className="inputs">
				<input
					type="text"
					placeholder="Escribe un titulo"
					name="title"
					onChange={handleInputChange}
					value={tarea.title}
					/>
				<input
					type="text"
					placeholder="Escribe una descripción"
					name="description"
					onChange={handleInputChange}
					value={tarea.description}
					/>

			</div>
				<button>GUARDAR</button>
			</form>
		</div>
	);
}
