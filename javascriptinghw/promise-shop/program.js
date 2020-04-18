require('es6-promise');
('use strict');
//!!Prompt 1
// setTimeout(function(){
//   console.log('TIMED OUT!');
// }, 300);

//!!Prompt 2
//??used git hub help
// 'use strict';

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function(){
//       fulfill('FULFILLED!')
//   }, 300);
// });

// promise.then(console.log);
//!!Prompt 3
//??used git hub help
// var promise = new Promise(function (fulfill, reject) {
//     // Your solution here
//     setTimeout(function(){
//         reject(new Error('REJECTED!'));
//     }, 300)
//   });

//   function onReject (error) {
//     console.log(error.message);
//   }

//   promise.then(null, onReject);

//!!Prompt 4
// var promise = new Promise(function(fulfill, reject) {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });

// function onRejected(error){
//     console.log(error.message);
// }

// promise.then(console.log, onRejected);

//!!Prompt 5
//??MOVED CONSOLE LOG OF MAIN PROGRAM TO BOTTOM OF PROGRAM AS 
//?? STATED IN NODESCHOOL SOLUTION TO SHOW ASYNCRITY BETTER
// var promise = new Promise(function(fulfill, reject) {
//     fulfill('PROMISE VALUE');
// });
// promise.then(console.log);
// console.log('MAIN PROGRAM');

//!!Prompt 6
// var promise = new Promise(function(fulfill, reject) {
//     Promise.resolve('it worked!');
//     reject(new Error('this promise sucks'))
// });



// function onRejected(error){
//     console.log(error.message);
// }

// promise.then(console.log).catch(onRejected);

//!!Prompt 7
//??a little git hub help
// first().then(function(full) {
//     return second(full);
// }).then(console.log);
