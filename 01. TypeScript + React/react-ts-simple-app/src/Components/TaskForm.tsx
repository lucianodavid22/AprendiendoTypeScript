import React, { ChangeEvent, useState } from "react";

export default function TaskForm() {
  const [tarea, setTarea] = useState({
    title:"",
    description: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTarea({...tarea, [e.target.name]: e.target.value});
  };
  // 1 hora con 2 minutos https://www.youtube.com/watch?v=HyaT88zs2EU
  // crear estado id y que sea autoincremental
  // Hacer funcion submit, crea un objeto le asigna id y lo suma al arreglo task con setTask
	return (
		<div>
			<h1>Agregar Tareas</h1>
			<form>
				<input
					type="text"
					placeholder="Escribe un titulo"
					name="title"
          onChange={handleInputChange}
				/>
				<input
					type="text"
					placeholder="Escribe una descripción"
					name="description"
          onChange={handleInputChange}
				/>

        <button>Guardar</button>
			</form>
		</div>
	);
}
