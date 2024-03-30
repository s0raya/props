import { useState } from "react";

const Task = ({tasksList, deleteTask}) => {
    const [taskCompleted, setTaskCompleted ] = useState(false);

    const handleTaskCompleted = (taskId) => {
        setTaskCompleted({
            ...taskCompleted,
            [taskId]: !taskCompleted[taskId]
        });
    }

    return ( 
        <>
            {tasksList.map(task => (
                <span key={task.id} style={{ textDecoration: taskCompleted[task.id] ? 'line-through' : ''}}>
                    <p onClick={() => handleTaskCompleted(task.id)}>{task.text}</p>
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </span>
            ))}
        </>
    )
}

export default Task;