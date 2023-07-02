const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");

addBtn.addEventListener('click',function(){
    if(taskInput.value.trim() !== ""){
        console.log("Task added")
        taskInput.value = ""
    }
    console.log("Add Task")
})