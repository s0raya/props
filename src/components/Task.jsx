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
                <span key={task.id} style={{ textDecoration: taskCompleted[task.id] ? 'line-through' : '', cursor: "pointer"}}>
                    <p onClick={() => handleTaskCompleted(task.id)}>{task.text}</p>
                    {console.log(tasksList)}
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </span>
            ))}
        </>
    )
}

export default Task;