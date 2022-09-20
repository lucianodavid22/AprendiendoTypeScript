import React from 'react';
import { Task } from '../Interfaces/Interfaces';

interface Props {
  task: Task
};

export default function TaskCard({ task }: Props) {
  return (
    <div key={task.id}>
      <button>Borrar</button>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <h5>{task.completed === false ? "Sin hacer" : "Hecho"}</h5>
    </div>
  );
};
