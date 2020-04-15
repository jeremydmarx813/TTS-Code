$(document).ready(function() {
	function minusButton() {
		console.log('test');
	}

	Array.from($('#task-list').children()).forEach(function(e) {
		$(e).children('button').click(minusButton);
        
	});

	$('#task-add-button').click(function() {
		if ($('#task-to-add').val() !== '') {
			// debugger; 
			// var that = $(this).prev().children('input').val();
			// console.log(that);
			var newEl = `<li><button class="minus-button">-</button><span>${$('#task-to-add').val(  /*$(this).prev().children('input').val()*/)}</span></li>`;
			$(newEl).children('button')  .click( function(){console.log('test')}/*  minusButton.bind($(newEl).children('button')) */ )   ;
			// console.log($(newEl).children('button'));
			$('#task-list').append(newEl /*  .children('button').click(  minusButton   .bind($(newEl).children('button'))  ) */ ) /* .children('button')  .click(minusButton)  */  ;
			
			$('#task-to-add').val('');
		} else {
			console.log('no input value');
		}
	});
});
