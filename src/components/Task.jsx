import { useState } from "react";

const Task = ({tasksList, deleteTask, toggleComplete}) => {
    const [taskCompleted, setTaskCompleted ] = useState({});

    // Una forma de hacer el tachado con esta funcion, sin usar la funcion de toggleComplete.
    const handleTaskCompleted = (taskId) => {
        setTaskCompleted(prevState => ({
            ...prevState,
            [taskId]: !prevState[taskId]
        }));
    }

    return ( 
        <>
            {tasksList.map(task => (
                <li key={task.id}>
                    {/* <p onClick={() => handleTaskCompleted(task.id)}>{task.text}</p>*/ }
                    <span style={{ textDecoration: task.completed ? 'line-through' : '', cursor: "pointer"}}>
                        <p onClick={() => toggleComplete(task.id)}>{task.text}</p>
                    </span>
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            ))}
        </>
    )
}

export default Task;