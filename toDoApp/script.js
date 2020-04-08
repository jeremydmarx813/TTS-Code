var taskToAdd = document.getElementById('task-to-add');
var addButton = document.getElementById('task-add-button');
var taskList = document.getElementById('task-list');

addButton.addEventListener('click', function (event) {
     var newEl = document.createElement('li');
     newEl.innerHTML = `<button class="minus-button">-</button>${taskToAdd.value}`;   
     taskList.appendChild(newEl);
     taskToAdd.value = '';
});