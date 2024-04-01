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

  const addTask = (taskText) => {
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

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task))
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask = {addTask} />
      <ul>
        <Task 
          tasksList = {tasks} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      </ul>
    </>
  );
};

export default App;
