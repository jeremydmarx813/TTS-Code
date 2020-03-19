// !!Challenge 4
var testArr = [ 'pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee' ];
var cart = [];

// prompt 1
testArr.push('fruit loops');
console.log(testArr);
// prompt 2
testArr.splice(4, 1, 'fair trade coffee');
console.log(testArr);
// 3
testArr.splice(2, 2, 'rice', 'beans');
console.log(testArr);
// 4
cart.push(testArr[testArr.length - 1]);
console.log(cart);
// 5
cart.push(testArr[0]);
console.log(cart);

while (testArr.length) {
	cart.push(testArr.pop());
}

cart.sort(function(a, b) {
	return a > b;
});

console.log(cart.join(', '));
