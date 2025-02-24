const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i>✅</i>";
  completedButton.classList.add("completed-button");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i>🗑️</i>";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

function deleteCheck(event) {
  const item = event.target;

  if (item.closest(".trash-button")) {
    const todo = item.closest(".todo-div");
    todo.remove();
  }

  if (item.closest(".completed-button")) {
    const todo = item.closest(".todo-div");
    todo.classList.toggle("completed");
  }
}
