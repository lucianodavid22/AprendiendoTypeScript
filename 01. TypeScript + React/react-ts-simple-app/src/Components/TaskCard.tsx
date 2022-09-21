import React from 'react';
import { Task } from '../Interfaces/Interfaces';
import "./../App.css";
interface Props {
  task: Task;
  deleteTask: (id: number) => void;
};

export default function TaskCard({ task, deleteTask }: Props) {
  const handleBorrar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTask(task.id);
  };

  return (
    <div className='card' key={task.id}>
      <div className='titlebutton'>
        <h3>{task.title}</h3>
        <button className='delete' onClick={handleBorrar}>❌</button>
      </div>
      <p>{task.description}</p>
      <h5 className={ task.completed === false ? "rojo" : "verde"}>{task.completed === false ? "SIN HACER" : "HECHO"}</h5>
    </div>
  );
};
