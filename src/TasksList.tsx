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

    );
}