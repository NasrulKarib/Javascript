// Catch
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let inComplete = document.querySelector('#items');
let complete = document.querySelector('.complete-list ul');

// Input new task
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

// Add task

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    inComplete.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}


let completeTask = function(){
    let listItem = this.parentNode;

    // add delete button
    let dltBtn = document.createElement('button');
    dltBtn.innerText = 'Delete';
    dltBtn.className = 'delete';
    listItem.appendChild(dltBtn);

    // delete checkbox and update button
    let checkbox = listItem.querySelector('input[type = "checkbox"]');
    checkbox.remove();
    complete.appendChild(listItem);

    // remove deleted task
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}


for(let i=0; i< inComplete.children.length; i++ ) {
    bindInCompleteItems(inComplete.children[i], completeTask);
}

for(let i=0; i< complete.children.length; i++ ) {
    bindCompleteItems(complete.children[i], deleteTask);
}

form.addEventListener('submit', addTask);


