$(document).ready(function() {
    var contentDisplay = $('#contentDisplay');

	$('#button1').click(function() {
        $(contentDisplay).empty();
		$.get('https://my-json-server.typicode.com/typicode/demo/posts', function(posts){
            posts.forEach(function(post){
                var newPost = $(`<div class='postContainer'><span>${post.id}</span>: <span>${post.title}</span></div>`);
                $(contentDisplay).append(newPost);
                // console.log(post);
            });
        });
	});
});
