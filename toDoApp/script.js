var taskToAdd = document.getElementById('task-to-add');
var addButton = document.getElementById('task-add-button');
var taskList = document.getElementById('task-list');
var minusButtons = document.getElementsByClassName('minus-button');

addButton.addEventListener('click', function(event) {
	if (taskToAdd.value.length) {
		var newEl = document.createElement('li');
		newEl.innerHTML = `<button class="minus-button">-</button><span>${taskToAdd.value}</span>`;
		taskList.appendChild(newEl);
		taskToAdd.value = '';
		addMinusFuncs.call(this, newEl.children[0]);
	}
});

function addMinusFuncs(el) {
	el.addEventListener('click', function() {
		var that = this.parentElement;
		el.nextElementSibling.style.textDecoration = 'line-through';
		setTimeout(function() {
			that.remove();
		}, 1000);
	});
}

Array.from(minusButtons).forEach(addMinusFuncs);
