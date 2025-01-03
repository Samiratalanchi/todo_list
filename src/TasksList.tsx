import { Task } from "./Task";

interface TasksListProps {
    tasks: Task[],
    toggleTaskDone: (id: number) => void,
    deleteTask: (id: number) => void,
}

export default function TasksList({tasks, toggleTaskDone, deleteTask} : TasksListProps) {

    function handleCheckboxChange(taskId: number) {
        toggleTaskDone(taskId)
    }

    function handleDeleteButton(taskId: number) {
        deleteTask(taskId)
    }

    return (
        <ul style={{listStyleType: "none"}}>
            {tasks.map((task, index) => (
                <div key={`${index}-${task}`}>
                    <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={() => handleCheckboxChange(task.id)}
                    />
                    <li style={{
                            display: "inline",
                            textDecoration: task.isDone ? "line-through" : "none",
                            marginLeft: "8px",
                        }}
                    >
                        {task.title}
                    </li>
                    <button
                        style={{ marginLeft: "8px" }}
                        onClick={() => handleDeleteButton(task.id)}
                    >
                        Delete
                    </button>
                </div>      
            ))}
        </ul>
    );
}