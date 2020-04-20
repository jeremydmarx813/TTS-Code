$(document).ready(function() {
	var inputField = $('#userSubmit');
	var submitButton = $('#submitButton');
	var resultDisplay = $('#resultDisplay');

	$(submitButton).click(function(event) {
        event.preventDefault();
        var nameFromInput = $(inputField).val();
        var getUserFunc = function(n){
            return new Promise(function(pos, neg) {
				$.get(`http://jsonplaceholder.typicode.com/users?username=${n}`, function(results) {
					//??How do i access status code on response obj
					//?? Am I getting back json data?
					if (results.length) {
						var finalRes = results[0];
						$(resultDisplay).empty();
						var newHTML = $(
							`<div><p><span class="data-field">Name of User:  </span><span>${finalRes.name}</span></p></div>`
						);
						$(resultDisplay).append(newHTML);
						pos(finalRes);
					} else {
						neg(`Username ${n} not found`);
					}
				});
			})
        };

        var getUserPosts = function(obj) {
            return new Promise(function(pos, neg) {
                $.get(`http://jsonplaceholder.typicode.com/posts?userId=${obj.id}`, function(posts) {
                    if (posts.length) {
                        console.log(posts);
                        var postsDiv = $(`<div><h3>User posts</h3><ul></ul></div>`);
                        posts.forEach(function(e) {
                            var newListItem = $(`<li>${e.title}</li>`);
                            $(newListItem).click(function() {
                                console.log('test');
                            });
                            $(postsDiv).children('ul').append(newListItem);
                        });
                        $(resultDisplay).append(postsDiv);
                        pos(posts);
                    } else {
                        neg(`User posts not found`);
                    }
                });
            });
        };

        var getUserAlbums = function(obj){
            return new Promise(function(pos, neg) {
                $.get(`http://jsonplaceholder.typicode.com/albums?userId=${obj.id}`, function(albums) {
                    if (albums.length) {
                        console.log(albums);
                        var albumsDiv = $(`<div><h3>User Albums</h3><ul></ul></div>`);
                        albums.forEach(function(e) {
                            var newListItem = $(`<li>${e.title}</li>`);
                            $(newListItem).click(function() {
                                console.log('test');
                            });
                            $(albumsDiv).children('ul').append(newListItem);
                        });
                        $(resultDisplay).append(albusDiv);
                        pos(albums);
                    } else {
                        neg(`User albums not found`);
                    }
                });
            });
        }

		if ($(inputField).val()) {
			
                getUserFunc(nameFromInput).then(Promise.all([getUserPosts, getUserAlbums]))
                .then(function(results){console.log(results)}, console.log);
		} else {
			console.error('no input entered');
			$(resultDisplay).append(`<div><p>Error retrieving user</p></div>`);
		}
	});
});
