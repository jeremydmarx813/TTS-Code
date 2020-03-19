var course = {
	name     : 'JavaScript Applications',
	awesome  : true,
	teachers : [ 'Assaf', 'Shane' ],
	students : [
		{
			name     : 'Steve',
			computer : {
				OS   : 'Linux',
				type : 'laptop'
			}
		},
		{
			name     : 'Katy',
			computer : {
				OS   : 'OSX',
				type : 'macbook'
			}
		},
		{
			name     : 'Chuck',
			computer : {
				OS   : 'OSX',
				type : 'macbook'
			}
		}
	],
	preReqs  : {
		skills    : [ 'html', 'css', 'git' ],
		equipment : {
			laptop    : true,
			OSOptions : [ 'linux', 'osx' ]
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
var kty = course.students
	.filter(function(e, i) {
		return e.name === 'Katy';
	})
	.map(function(e, i) {
		return e.computer;
	});
console.log(kty);
console.log(course.preReqs);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.join(' or '));
var filtArr = course.students
	.filter(function(e, i) {
		return e.computer.OS === 'OSX';
	})
	.map(function(e, i) {
		return e.name;
	});
console.log(filtArr);
