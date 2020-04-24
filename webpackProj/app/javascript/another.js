// /app/javascript/another.js

var $ = require('jquery');
function sayHello() {
	var header = $('#greeting');
	var button = $('#button-container button');
	var hello = $('<h1> hello world </h1>');
	$(button).click(function() {
		$(header).append(hello);
		$(button).hide();
	});
}

module.exports = sayHello();
