//!!1
// function upperCaser(input) {
//     return input.toUpperCase();
//   }

//   module.exports = upperCaser
//
//!!2
// function repeat(operation, num) {
//     while(num){
//         operation();
//         num--;
//     }
//   }

//   // Do not remove the line below
//   module.exports = repeat
//!!3
// function doubleAll(numbers) {
// 	return numbers.map(e => e * 2);
// }

// module.exports = doubleAll;
//!!4
// function getShortMessages(messages) {
//     return messages.filter(e => e.message.length < 50)
//     .map(e => e.message);
// }

// module.exports = getShortMessages;
//!!5
// function checkUsersValid(goodUsers) {
// 	var goodIds = goodUsers.map((e) => e.id);
// 	return function allUsersValid(submittedUsers) {
// 		var otherIds = submittedUsers.map((e) => e.id);
// 		return otherIds.every((e) => goodIds.indexOf(e) !== -1);
// 	};
// }

// module.exports = checkUsersValid;
//!!6
// function countWords(inputWords) {
// 	return inputWords.reduce((s, e) => {
//        if(!s[e]){
//            s[e] = 1;
//            return s;
//        } else {
//            s[e]++;
//            return s;
//        }
//     }, {});
// }

// module.exports = countWords;
//!!7
// function reduce(arr, fn, initial) {
// 	return (function step(idx, value) {
// 		if (idx > arr.length - 1) return value;
// 		return step(idx + 1, fn(value, arr[idx], idx, arr));
// 	})(0, initial);
// }

// module.exports = reduce;
//!!8
// function duckCount() {
// 	var realArr = Array.prototype.slice.call(arguments);
// 	return realArr.filter(function(e) {
// 		return Object.prototype.hasOwnProperty.call(e, 'quack');
//     }).length;
//     //??curriculum answer
// 	// return Array.prototype.filter.call(arguments, function(arg) {
// 	// 	return Object.prototype.hasOwnProperty.call(arg, 'quack');
// 	// }).length;
// }

// module.exports = duckCount;
//!!9
// var slice = Array.prototype.slice;

// function logger(namespace) {
//     //??Answer found on git hub
// 	return function() {
// 		var args = slice.call(arguments);
// 		console.log.apply(global, [namespace].concat(args));
// 	};
// }

// module.exports = logger;
//!!10

module.exports = function(namespace) {
	return console.log.bind(null, namespace);
};
