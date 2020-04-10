$(document).ready(function() {
  $('#submit').click(function(){
    var nameInput = $('#name');
    var emailInput = $('#email');
    var phoneInput = $('#phone');
    var messageInput = $('#message');
    var required = [nameInput, emailInput, phoneInput];

    for(let i = 0; i < required.length; i++){
        if(required[i].val() === ''){
            required[i].val() = "Please Fill Out Required Fields";
            required[i].addClass('warning');
        }
    }
  });
});