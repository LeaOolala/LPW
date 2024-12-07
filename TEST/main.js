import { TaskManager } from "./task.js"

const newTaskInput = document.querySelector
("#newTaskInput")
const newTaskButton = document.querySelector
("#newTaskButton")
const taskManager = new TaskManager()


newTaskButton.addEventListener("click", function(e){
    taskManager.create(newTaskInput.value)
})

taskManager.create("brosser les wc")
taskManager.create("brosser les éviers")
taskManager.create("brosser les joints")
taskManager.create("brosser les radiateurs")

taskManager.erase("brosser les wc")