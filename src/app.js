import {
    getTasks,
    addTask,
    toggleTask,
    deleteTask
} from "./tasks.js";

import {
    renderTasks
} from "./ui.js";

import {
    saveTasks,
    loadTasks
} from "./storage.js";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function render() {
    const tasks = getTasks();

    renderTasks(
        tasks,
        taskList,
        handleToggle,
        handleDelete
    );

    saveTasks(tasks);
}

function handleAdd(event) {
    event.preventDefault();

    const title = input.value.trim();

    if (title === "") {
        return;
    }

    addTask(title);

    input.value = "";

    render();

    input.focus();
}

function handleToggle(id) {
    toggleTask(id);

    render();
}

function handleDelete(id) {
    deleteTask(id);

    render();
}

function initialize() {
    loadTasks();

    render();

    form.addEventListener("submit", handleAdd);
}

initialize();