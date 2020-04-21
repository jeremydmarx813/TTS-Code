$(document).ready(function() {
	var inputField = $('#userSubmit');
	var submitButton = $('#submitButton');
	var resultDisplay = $('#resultDisplay');

	$(submitButton).click(function(event) {
		event.preventDefault();
		var nameFromInput = $(inputField).val();
		var getUserFunc = function(n) {
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
			});
		};

		var getUserPosts = function(num) {
			return new Promise(function(pos, neg) {
				$.get(`http://jsonplaceholder.typicode.com/posts?userId=${num}`, function(posts) {
					if (posts.length) {
						// console.log(posts);
						var postsDiv = $(`<div><h3>User posts</h3><ul></ul></div>`);
						posts.forEach(function(e) {
							var newListItem = $(`<li>${e.title}</li>`);
							$(newListItem).click(function() {
								var newPostFull = $(
									`<div><p><span class="data-field">Title: </span><span>${e.title}</span></p><p><span class="data-field">Post Text: </span><span>${e.body}</span></p><p><h3>Post comments</h3><ul></ul></p><button>Back to user Homepage</button></div>`
								);
								$(newPostFull).find('button').click(function() {
									// console.log('an idea how to make this go back to user hompage!');
									return getUserFunc(nameFromInput)
										.then(function(obj) {
											var objId = obj.id;
											var promToReturn1 = getUserPosts(objId);
											var promToReturn2 = getUserAlbums(objId);
											return Promise.all([ promToReturn1, promToReturn2 ]);
										})
										.catch(console.log);
								});

								var newPostComments = function() {
									return new Promise(function(pos, neg) {
										$.get(`http://jsonplaceholder.typicode.com/comments?postId=${e.id}`, function(
											comments
										) {
											if (comments.length) {
												pos(comments);
											} else {
												neg(`no comments found for post ${e.id}`);
											}
										});
									}).then(function(postComments) {
										console.log(postComments);
										var listVariable = $(newPostFull).find('ul');
										postComments.forEach(function(el) {
											console.log(el.name);
											$(listVariable).append(`<li>${el.name}</li>`);
										});
									}, console.log);
								};
								newPostComments();
								$(resultDisplay).empty();
								$(resultDisplay).append(newPostFull);
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

		var getUserAlbums = function(num) {
			return new Promise(function(pos, neg) {
				$.get(`http://jsonplaceholder.typicode.com/albums?userId=${num}`, function(albums) {
					if (albums.length) {
						// console.log(albums);
						var albumsDiv = $(`<div><h3>User Albums</h3><ul></ul></div>`);
						albums.forEach(function(e) {
							var newListItem = $(`<li>${e.title}</li>`);
							$(newListItem).click(function() {
								var newAlbumThumbnails = $(
									'<div><div><h3>Search for photos</h3><input type="text"></div><div><h3>Album Photo Thumbnails</h3><ul></ul></div><button>Back to user Homepage</button></div>'
								);
								$(newAlbumThumbnails).find('button').click(function() {
									return getUserFunc(nameFromInput)
										.then(function(obj) {
											var objId = obj.id;
											var promToReturn1 = getUserPosts(objId);
											var promToReturn2 = getUserAlbums(objId);
											return Promise.all([ promToReturn1, promToReturn2 ]);
										})
										.catch(console.log);
								});
								$(resultDisplay).empty();
								$(resultDisplay).append(newAlbumThumbnails);
							});
							$(albumsDiv).children('ul').append(newListItem);
						});
						$(resultDisplay).append(albumsDiv);
						pos(albums);
					} else {
						neg(`User albums not found`);
					}
				});
			});
		};

		if ($(inputField).val()) {
			getUserFunc(nameFromInput)
				.then(function(obj) {
					var objId = obj.id;
					var promToReturn1 = getUserPosts(objId);
					var promToReturn2 = getUserAlbums(objId);
					return Promise.all([ promToReturn1, promToReturn2 ]);
				})
				.then(function(results) {
					console.log('promise all itterable arr: %o', results);
				}, console.log);
		} else {
			console.error('no input entered');
			$(resultDisplay).append(`<div><p>Error retrieving user</p></div>`);
		}
	});
});
