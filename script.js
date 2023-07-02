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

    const span=document.createElement('span');
    span.classList.add("task-text");
    span.textContent = taskText;
    li.appendChild(span);

    taskList.appendChild(li);
    console.log("Task Created");
}