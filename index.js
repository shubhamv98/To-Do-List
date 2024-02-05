function addTodo() {
    const todoInput = document.getElementById("new-todo");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a valid todo item.");
        return;
    }

    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTodo);

    const todoLabel = document.createElement("label");
    todoLabel.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    todoInput.value = "";
}

function toggleTodo(event) {
    const todoLabel = event.target.nextElementSibling;
    todoLabel.style.textDecoration = event.target.checked ? "line-through" : "none";
}

function deleteTodo(event) {
    const todoItem = event.target.parentNode;
    const todoList = document.getElementById("todo-list");
    todoList.removeChild(todoItem);
}