const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener('click',function(){
    if(taskInput.value.trim() !== ""){
        addTask(taskInput.value.trim());
        console.log("Task added")
        taskInput.value = ""
    }
})

function addTask(taskText){
    const li=document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleComplete);
    li.appendChild(checkbox);

    const span=document.createElement('span');
    span.classList.add("task-text");
    span.textContent = taskText;
    span.addEventListener("click", toggleComplete);
    li.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    console.log("Task Created");
    updateTaskCount();
}

function toggleComplete() {
    const taskItem = this.parentNode;
    taskItem.classList.toggle("completed");
    console.log("Task Completed")
    updateTaskCount();
}

function deleteTask(){
    const taskItem = this.parentNode;
    taskList.removeChild(taskItem);
    console.log("Task Removed")
    updateTaskCount();
}

function updateTaskCount(){
    const totalTasks = taskList.childElementCount;
    const completedTasks = taskList.querySelectorAll('.completed').length;
    const remainingTasks = totalTasks - completedTasks;

    taskCount.textContent = `Total: ${totalTasks} | Completed: ${completedTasks} | Remaining: ${remainingTasks}`
    console.log("Task Updated")
}