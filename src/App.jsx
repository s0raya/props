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
      id: tasks.length + 1,
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    let nextId = 1;
    newTasks.map(task => {
      task.id = nextId++;
    });
    setTasks(newTasks);
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
