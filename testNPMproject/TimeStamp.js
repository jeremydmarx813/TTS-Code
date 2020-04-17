var Moment = require('moment');

var timeObj = {
    getTime: function(){
        var momentFuncs = new Moment();
        console.log(momentFuncs.format('h:mm:ss a'));
    }
};

module.exports = timeObj;