$(document).ready(function(){

    function minusButton(event) {
        event.click(function() {
            console.log($(this).next('span'));
            
        })
    }

    Array.from($('#task-list').children()).forEach(function(e){
        //!!e.children() not working 
        console.log(e);
    });
    // .click();

    $('#task-add-button').click(function () {
        if($('#task-to-add').val() !== ''){
           
            var newEl = `<li><button class="minus-button">-</button><span>${$('#task-to-add').val()}</span></li>`;
            // newEl.children()[0].click(minusButton);
            $('#task-list').append(newEl);
            $('#task-to-add').val(' ');
            // console.log($('#task-to-add'));
        }
    });
});