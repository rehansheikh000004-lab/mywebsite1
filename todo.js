// Load saved tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  createTaskElement(taskValue);

  saveTask(taskValue);

  taskInput.value = "";
}

function createTaskElement(taskText, completed = false) {
  let li = document.createElement("li");
  li.textContent = taskText;

  if (completed) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateLocalStorage();
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    updateLocalStorage();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: task, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}

function updateLocalStorage() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({ 
      text: li.childNodes[0].textContent, 
      completed: li.classList.contains("completed") 
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
