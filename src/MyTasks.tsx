import { useState } from 'react';
import { Task } from './Task.ts'
import TaskInput from './TaskInput.tsx';
import TasksList from './TasksList';

let nextId = 1;

export default function MyTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(taskTitle: string) {
        setTasks([...tasks,
            {
                id: nextId,
                title: taskTitle,
                isDone: false
            }
        ])
        nextId++;
    }

    function toggleTaskDone(taskId: number) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isDone: !task.isDone
                };
            } else {
                return task;
            }
        })

        setTasks(newTasks);
    }

    function deleteTask(taskId : number) {
        const newTasks = tasks. filter((task) => task.id !== taskId);

        setTasks(newTasks);
    }

}

