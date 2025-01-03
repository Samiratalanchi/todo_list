import React, { useState } from 'react'

interface TaskInputProps {
    addTask: (taskTitle: string) => void;
}

export default function TaskInput({addTask} : TaskInputProps) {
    const [taskTitle,setTaskTitle] = useState("");

    function handleTaskInput(e:React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value);
    }
    
    function handleSubmit() {
        if (taskTitle.length) {
            addTask(taskTitle);
            setTaskTitle("");
        }
    }

    return (
        <div>
            <input value={taskTitle} onChange={handleTaskInput} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}