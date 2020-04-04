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
function reduce(arr, fn, initial) {
	return (function step(idx, value) {
		if (idx > arr.length - 1) return value;
		return step(idx + 1, fn(value, arr[idx], idx, arr));
	})(0, initial);
}

module.exports = reduce;
