import { useState } from "react";

const Task = ({tasksList, deleteTask}) => {
    const [taskCompleted, setTaskCompleted ] = useState({});

    const handleTaskCompleted = (taskId) => {
        setTaskCompleted(prevState => ({
            ...prevState,
            [taskId]: !prevState[taskId]
        }));
    }

    return ( 
        <>
            {tasksList.map(task => (
                <span key={task.id} style={{ textDecoration: taskCompleted[task.id] ? 'line-through' : '', cursor: "pointer"}}>
                    <p onClick={() => handleTaskCompleted(task.id)}>{task.text}</p>
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </span>
            ))}
        </>
    )
}

export default Task;