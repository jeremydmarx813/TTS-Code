$(document).ready(function() {
	function minusButton() {
         $(this).next().css('text-decoration', 'line-through');
	}

	Array.from($('#task-list').children()).forEach(function(e) {
		$(e).children('button').click(minusButton);
	});

	$('#task-add-button').click(function() {
		if ($('#task-to-add').val() !== '') {
			// debugger;
			var newEl = $(`<li><button class="minus-button">-</button><span>${$('#task-to-add').val()}</span></li>`);
			$(newEl).children('button').click(minusButton);

			$('#task-list').append(newEl);

			$('#task-to-add').val('');
		} else {
			console.log('no input value');
		}
	});
});
