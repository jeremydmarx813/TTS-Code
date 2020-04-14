$(document).ready(function() {
	function minusButton() {
		console.log('test');
	}

	Array.from($('#task-list').children()).forEach(function(e) {
		$(e).children('button').click(minusButton);
        
	});

	$('#task-add-button').click(function() {
		if ($('#task-to-add').val() !== '') {
            debugger; 
			var newEl = `<li><button class="minus-button">-</button><span>${$('#task-to-add').val($(this))}</span></li>`;
			$('#task-list').append($(newEl).children('button').click(minusButton.bind($(newEl).children('button'))));
			$('#task-to-add').val(' ');
		}
	});
});
