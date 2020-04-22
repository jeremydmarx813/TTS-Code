var assert = require('assert');
var Data = require('../DataAccess');

describe('time func test', function() {
	it('returns what is put in to function', function() {
		assert.equal(Data.getPost('sup'), 'sup');
	});
});
