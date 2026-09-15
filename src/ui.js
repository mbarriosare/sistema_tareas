export function renderTasks(tasks, container, onToggle, onDelete) {
    container.innerHTML = "";

    if (tasks.length === 0) {
        const message = document.createElement("p");

        message.className = "empty-message";
        message.textContent = "No hay tareas.";

        container.appendChild(message);

        return;
    }

    tasks.forEach(task => {
        const taskElement = document.createElement("article");

        taskElement.className = "task";

        const info = document.createElement("div");
        info.className = "task-info";

        const title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = task.title;

        if (task.completed) {
            title.classList.add("task-completed");
        }

        info.appendChild(title);

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const completeButton = document.createElement("button");

        completeButton.className = "complete-button";
        completeButton.textContent = task.completed
            ? "Desmarcar"
            : "Completar";

        completeButton.addEventListener("click", () => {
            onToggle(task.id);
        });

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";
        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", () => {
            onDelete(task.id);
        });

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);

        taskElement.appendChild(info);
        taskElement.appendChild(actions);

        container.appendChild(taskElement);
    });
}