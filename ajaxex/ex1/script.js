$(document).ready(function() {
	var contentDisplay = $('#contentDisplay');

	$('#button1').click(function() {
		$(contentDisplay).empty();
		$.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
			posts.forEach(function(post) {
				var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`);
				$(contentDisplay).append(newPost);
			});
		});
	});

	$('#button2').click(function() {
		$(contentDisplay).empty();
		$.get('https://jsonplaceholder.typicode.com/posts/10', function(post) {
			var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`);
			$(contentDisplay).append(newPost);
		});
	});

	$('#button3').click(function() {
		$(contentDisplay).empty();
		$.get('https://jsonplaceholder.typicode.com/posts/12/comments', function(posts) {
			// console.log(post);
			posts.forEach(function(post) {
				var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.name}</span></div>`);
				$(contentDisplay).append(newPost);
			});
		});
	});

	$('#button4').click(function() {
		$(contentDisplay).empty();
		$.get('https://jsonplaceholder.typicode.com/posts?userId=2', function(posts) {
			posts.forEach(function(post) {
				var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`);
				$(contentDisplay).append(newPost);
			});
		});
	});

	$('#button5').click(function() {
		$(contentDisplay).empty();
		$.post('https://jsonplaceholder.typicode.com/posts', function(post) {
			console.log(post);
			var newPost = $(`<div class='postContainer'><span>ID</span>: <span>${post.id}</span></div>`);
			$(contentDisplay).append(newPost);
		});
	});

	$('#button6').click(function() {
		$(contentDisplay).empty();
		$.ajax({
			method   : 'PUT',
			url      : 'https://jsonplaceholder.typicode.com/posts/12',
			data     : {
				title : 'new post 12',
				body  : 'this is the new post12'
			},
			complete : function(post) {
				console.log(post.responseJSON);
				var newPost = $(
					`<div class='postContainer'><div><span>ID</span>: <span>${post.responseJSON
						.id}</span></div><div><span>Title: </span><span>${post.responseJSON
						.title}</span></div><div><span>Body: </span><span>${post.responseJSON.body}</span></div></div>`
				);
				$(contentDisplay).append(newPost);
			}
		});
	});

	$('#button7').click(function() {
		$(contentDisplay).empty();
		$.ajax({
			method   : 'PATCH',
			url      : 'https://jsonplaceholder.typicode.com/posts/12',
			data     : {
				title : 'new post 12 title'
			},
			complete : function(post) {
				console.log(post.responseJSON);
				var newPost = $(
					`<div class='postContainer'><div><span>ID</span>: <span>${post.responseJSON
						.id}</span></div><div><span>Title: </span><span>${post.responseJSON
						.title}</span></div><div><span>Body: </span><span>${post.responseJSON.body}</span></div></div>`
				);
				$(contentDisplay).append(newPost);
			}
		});
	});

	$('#button8').click(function() {
		$(contentDisplay).empty();
		$.ajax({
			method   : 'DELETE',
			url      : 'https://jsonplaceholder.typicode.com/posts/12',
			complete : function(post) {
				if (post.status === 200) {
					console.log(post);
					var newPost = $(
						`<div class='postContainer'><span>Deletion status: </span><span>${post.statusText}</span></div>`
					);
					$(contentDisplay).append(newPost);
				}
			}
		});
	});

	$('#button9').click(function() {
		$(contentDisplay).empty();
		$.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
			posts.forEach(function(post) {
				var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`);
				$(newPost).click(function() {
					$(contentDisplay).empty();
					$.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, function(comments) {
						// console.log(post);
						comments.forEach(function(comment) {
							var newPost1 = $(
								`<div class='postContainer'><span>${comment.id}</span>: <span>${comment.name}</span></div>`
							);

							$(contentDisplay).append(newPost1);
						});
						var returnButton = $('<div><button>Go back to all posts</button></div>');
						$(returnButton).find('button').click(function() {
							$(contentDisplay).empty();
							$.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
								posts.forEach(function(post) {
									var newPost = $(
										`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`
									);
									$(contentDisplay).append(newPost);
								});
							});
						});
						$(returnButton).appendTo(contentDisplay);
					});
				});
				$(contentDisplay).append(newPost);
			});
		});
	});
});
