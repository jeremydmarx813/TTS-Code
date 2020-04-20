var inputField = document.getElementById('userSubmit');
var submitButton = document.getElementById('submitButton');
var resultDisplay = document.getElementById('resultDisplay');

submitButton.addEventListener('click', function(event) {
	event.preventDefault();
	if (inputField.value) {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				console.log(json);
				var foundUser = json.find(function(obj) {
					return obj.username === inputField.value;
				});
				console.log(foundUser);

				var foundUserPosts = fetch(`http://jsonplaceholder.typicode.com/posts?userId=${foundUser.id}`)
					.then(function(response) {
						return response.json();
					})
					.then(function(json) {
                        console.log(json);
                        json.forEach(function(e) {
                            var nodeToAppend = document.createElement(`<div><p><span>Post number ${e.id}: </span><span>${e.title}</span></p></div>`);
                            resultDisplay.appendChild(nodeToAppend);
                        })
					});

				resultDisplay.innerHTML = `<div><p><span>User name: </span><span>${foundUser.name}</span></p></div>`;
			});
	} else {
		console.error('no input entered');
		resultDisplay.innerHTML = `<div><p>Error retrieving user</p></div>`;
	}
});
