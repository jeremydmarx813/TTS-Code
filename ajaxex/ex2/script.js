$(document).ready(function() {
	var inputField = $('#userSubmit');
	var submitButton = $('#submitButton');
	var resultDisplay = $('#resultDisplay');

	$(submitButton).click(function(event) {
		event.preventDefault();

		if ($(inputField).val()) {
			return new Promise(function(pos, neg) {
				$.get(`http://jsonplaceholder.typicode.com/users?username=${$(inputField).val()}`, function(results) {
					//??How do i access status code on response obj
					if (results.length) {
						pos(results[0]);
					} else {
						neg(`Username ${$(inputField).val()} not found`);
					}
				});
			}).then(function(obj) {
				return new Promise(function(pos, neg) {
					$.get(`http://jsonplaceholder.typicode.com/posts?userId=${obj.id}`, function(posts) {
						console.log(posts);
					});
				});
			}, console.log);
		} else {
			console.error('no input entered');
			resultDisplay.append(`<div><p>Error retrieving user</p></div>`);
		}
	});
});
