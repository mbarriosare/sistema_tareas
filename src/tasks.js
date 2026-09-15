import { renderTasks } from "./ui.js";
let tasks = [];

let nextId = 1;

export function getTasks() {
    return tasks;
}

export function addTask(title) {
    const task = {
        id: nextId,
        title: title,
        completed: false
    };

    tasks.push(task);
    nextId++;

    return task;
}

export function toggleTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
    }

    return task;
}

export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}
