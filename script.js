// Get the input field, add button, task list, and task count
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Add event listener for the "Add" button click
addBtn.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

// Function to add a new task
function addTask(taskText) {
  // Creating task in the taskList
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Created toggle box to toggle between completed and remaining
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleComplete);
  li.appendChild(checkbox);

  // Created the span to show the text-Input in the list
  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;
  span.addEventListener("click", toggleComplete);
  li.appendChild(span);

  // Created the delete button to delete the task from the list
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteTask);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  updateTaskCount();
}

// Function to toggle task completion
function toggleComplete() {
  const taskItem = this.parentNode;
  taskItem.classList.toggle("completed");
  updateTaskCount();
}

// Function to delete a task
function deleteTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
  updateTaskCount();
}

// Function to update the task count
function updateTaskCount() {
  const totalTasks = taskList.childElementCount;
  const completedTasks = taskList.querySelectorAll(".completed").length;
  const remainingTasks = totalTasks - completedTasks;

  taskCount.textContent = `Total: ${totalTasks} | Completed: ${completedTasks} | Remaining: ${remainingTasks}`;
}
