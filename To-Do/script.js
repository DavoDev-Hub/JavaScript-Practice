const buttonAdd = document.getElementById("add");
const listTask = document.getElementById("listTask");
const taskValue = [];

buttonAdd.addEventListener("click", () => {
  addTask();
});

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskAdd = taskInput.value;

  if (taskAdd.trim() !== "") {
    taskValue.push(taskAdd);
    const listTaskItem = document.createElement("div");
    listTaskItem.textContent = taskAdd;
    listTaskItem.classList.add("task-item");
    listTask.appendChild(listTaskItem);
    taskInput.value = "";
  }
}
