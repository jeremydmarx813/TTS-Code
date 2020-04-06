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
// return Array.prototype.filter.call(arguments, function(arg) {
// 	return Object.prototype.hasOwnProperty.call(arg, 'quack');
// }).length;
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
//found on git hub
// module.exports = function(namespace) {
// 	return console.log.bind(null, namespace);
// };
//!!11
// module.exports = function arrayMap(arr, fn) {
// 	return arr.reduce(function(s, e) {
//        s.push(fn(e));
//        return s;
//     }, []);
// };
//!!12
// function Spy(target, method) {
//     //!!github answer
// 	var final = { count: 0 };
// 	var func = target[method];
// 	target[method] = function() {
// 		final.count++;
// 		return func.apply(this, arguments);
// 	};
// 	return final;
// }

// module.exports = Spy;
//!!13
// function repeat(operation, num) {
// 	// modify this so it can be interrupted
// 	//code from github
// 	if (num <= 0) return;
// 	operation();
// 	if (num % 10 === 0) {
// 		setTimeout(function() {
// 			repeat(operation, --num);
// 		});
// 	} else {
// 		repeat(operation, --num);
// 	}
// }

// module.exports = repeat;
//!!14
//??Github code
// function repeat(operation, num) {
// 	// Modify this so it doesn't cause a stack overflow!
// 	if (num <= 0) return;
// 	return function() {
// 		operation();
// 		return repeat(operation, --num);
// 	};
// }

// function trampoline(fn) {
// 	while (fn && typeof fn === 'function') {
// 		fn = fn();
// 	}
// 	return fn;
// }

// module.exports = function(operation, num) {
// 	// You probably want to call your trampoline here!
// 	return trampoline(function() {
// 		return repeat(operation, num);
// 	});
// };
//!!15
//??git hub code
// function loadUsers(userIds, load, done) {
// 	var users = [];
// 	var count = 0;
// 	userIds.forEach(function(e, i) {
// 		load(e, function(data) {
// 			users[i] = data;
// 			count++;
// 			if (count === userIds.length) {
// 				return done(users);
// 			}
// 		});
// 	});
// }

// module.exports = loadUsers;
//!!16
// var loremIpsum = {
// 	name         : 'lorem-ipsum',
// 	version      : '0.1.1',
// 	dependencies : {
// 		optimist   : {
// 			version      : '0.3.7',
// 			dependencies : {
// 				wordwrap : {
// 					version : '0.0.2'
// 				}
// 			}
// 		},
// 		inflection : {
// 			version : '1.2.6'
// 		}
// 	}
// };

// function getDependencies(tree, result) {
//??git hb code

// result = result || [];
// var dep;
// if (tree && tree.hasOwnProperty('dependencies')) {
//   var dependencies = tree['dependencies'];
//   for (var key in dependencies) {
//     getDependencies(dependencies[key], result);
//     dep = key + '@' + dependencies[key]['version'];
//     if (result.indexOf(dep) === -1) {
//       result.push(dep);
//     }
//   }
// }
// return result.sort();

// var result = result || [];
// var deps = tree.dependencies || {};
// if(!tree.dependencies) return [];

// Object.keys(deps).forEach(function(dep) {
//     var depStr = dep + "@" + deps[dep].version;

//     if(result.indexOf(depStr) < 0) {
//         result.push(depStr);
//     }

//     getDependencies(deps[dep], result);
// })

// return result.sort();
// if (!tree.hasOwnProperty('dependencies')) {
// 	return arr.sort((a, b) => a - b);
// }
// // console.log(tree.dependencies);
// Object.keys(tree.dependencies).forEach(function(e) {
// 	console.log(e);
// 	var pushStr = '';
// 	pushStr += e;
// 	pushStr += '@';
// 	pushStr += e.version;
// 	if (arr.indexOf(pushStr) === -1) {
// 		arr.push(pushStr);
// 	}
// })
// Object.keys(tree.dependencies).forEach(function(e){
//     if (e.hasOwnProperty('dependencies')) {
//         	return getDependencies(e.dependencies, arr);
//         }
// })
// }

// module.exports = getDependencies;
//!!17
// function curryN(fn, n) {
//     //!!git hub code!!
//     n = n || fn.length
//     return function curriedN(arg) {
//       if (n <= 1) return fn(arg)
//       return curryN(fn.bind(this, arg), n - 1)
//     }
// }

// module.exports = curryN;
//!!18
module.exports = Function.call.bind(Array.prototype.slice);