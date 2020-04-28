var $ = require('jquery');
var _ = require('lodash');

var numsArr = [1, 2, 3, 4, 5, 6];

module.exports = $('#buttonContainer').find('button').click(function () {
    $('#rollDisplay').empty();
    var testArr = _.shuffle(numsArr);
    console.log('shuffled arr: %o', testArr);
    var randomNum = Math.floor(Math.random() * testArr.length);
    console.log('random num: %i', randomNum);
    $('#rollDisplay').append(`<h1>${randomNum}</h1>`);
    $(this).html('Play Again???');
})