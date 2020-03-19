//!suggestion
var sugg = document.getElementById('suggestion');
//!!cupCount Text
var cupCount = 0;
var cupCountDisplay = document.getElementById('cupCount');
//!!Cup Button
var cupButton = document.getElementById('cupAdder');
console.group('%ccoffee counter start', 'font-size: 14px; color: red;');

function cupAddingFunc() {
	if (cupCount === 0 || cupCount === 1) {
		cupCount++;
		console.log('cup count: ', cupCount);
		cupCountDisplay.innerText = cupCount;
	} else if (cupCount === 2) {
		cupCount++;
		console.log('cup count: ', cupCount);
		cupCountDisplay.innerText = cupCount;
		enoughCups();
	}
}

function enoughCups() {
	sugg.innerText = 'Whoa there! Too much coffee!';
	cupButton.innerText = '!!!';
	cupButton.style.cssText = 'background-color: red';
	cupButton.onclick = reset;
}

function reset() {
	console.groupEnd();
	sugg.innerText = 'Would you like another cup?';
	cupButton.innerText = '+';
	cupButton.style.cssText = 'background-color: white';
	cupCount = 0;
	cupCountDisplay.innerText = cupCount;
	cupButton.onclick = cupAddingFunc;
	console.group('%ccoffee counter start', 'font-size: 14px; color: red;');
}

cupButton.onclick = cupAddingFunc;
cupCountDisplay.innerText = cupCount;
