import React, { useState } from 'react'

interface TaskInputProps {
    addTask: (taskTitle: string) => void;
}

export default function TaskInput({addTask} : TaskInputProps) {
    const [taskTitle,setTaskTitle] = useState("");

    function handleTaskInput(e:React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value);
    }

    return (
        <div>
            <input value={taskTitle} onChange={handleTaskInput} />
        </div>
    );
}

