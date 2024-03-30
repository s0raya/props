import './App.css'
import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  function addTask(taskText) {
    const newTask = {
      id: tasks.id + 1,
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask = {addTask} />
      <Task tasksList = {tasks} deleteTask={deleteTask}/>
    </>
  );
};

export default App;
