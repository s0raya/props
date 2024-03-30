import { useState } from "react";


const AddTaskForm = ({addTask}) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskText);
        setTaskText('');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nueva tarea" id="task" value={taskText} onChange={e => setTaskText(e.target.value)}/>
            <button type="submit">Agregar</button>
        </form>
        </>
    )
}

export default AddTaskForm;