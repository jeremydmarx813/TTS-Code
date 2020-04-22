var Moment = require('moment');
var momentFuncs = new Moment();

var timeObj = {
	getTime : function() {
		console.log(momentFuncs.format('h:mm:ss a'));
	}
};

module.exports = timeObj;
