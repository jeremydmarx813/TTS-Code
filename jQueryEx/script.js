$(document).ready(function() {
  var messagePStatus = false;
  var messageP = $('#message-p');
  var nameInput = $('#name');
  var emailInput = $('#email');
  var phoneInput = $('#phone');
  var messageInput = $('#message-box');
  var required = [ nameInput, emailInput, phoneInput ];
	$('#submit').click(function() {
		for (let i = 0; i < required.length; i++) {
			if (required[i].val() === '') {
				required[i].prev('label').addClass('warning');
				if (messagePStatus === false) {
					$(messageP).append(' <br> *"Please Fill Out Required Fields"*').addClass('warning');
					messagePStatus = true;
        }
			} else if (required[i].val() !== '') {
        required[i].prev('label').removeClass('warning');
			} 
    }
    var labelArr = Array.from($('label')).every(function(e){
       return e.className !== 'warning';
     });

     if(labelArr === true){
       $('#form').remove();
       $('#pre-form h2').text('Thanks for your feedback!');
     }
     
    // if($('label'))
	});
});
