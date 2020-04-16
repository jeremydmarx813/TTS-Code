$(document).ready(function() {
	function minusButton() {
		var that = this;
		 $(that).next().css('text-decoration', 'line-through');
		 setTimeout(function(){
			 $(that).parent().fadeOut('slow', function(){
				 $(that).parent().remove();
			 });
		 }, 2000);
	}

	Array.from($('#task-list').children()).forEach(function(e) {
		$(e).children('button').click(minusButton);
	});

	$('#task-add-button').click(function() {
		if ($('#task-to-add').val() !== '') {
			var newEl = $(`<li><button class="minus-button">-</button><span>${$('#task-to-add').val()}</span></li>`);
			$(newEl).children('button').click(minusButton);
			$('#task-list').append(newEl);
			$('#task-to-add').val('');
		} else {
			console.error('no input value');
		}
	});
});
