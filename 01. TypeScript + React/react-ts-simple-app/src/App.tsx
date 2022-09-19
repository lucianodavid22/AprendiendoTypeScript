import React, { useState } from 'react';
import './App.css';

interface Props {
  title: string;
};

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

/* Minuto 15 */ 
export default function App({title}:Props) {

  const [ task, setTask ] = useState<Task[]>([
    {
      id:1,
      title: "Learn React",
      description: "Aprender React",
      completed: false
    }
  ]);

  return(
  <div className='App'>
    <h1>{title}</h1>
    {task.map(task => (
      <div key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    ))}
  </div>
  );
};
