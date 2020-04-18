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

//!!Prompt 8
//?? git hub help
// function attachTitle(str) {
//    return 'DR. ' + str;
// }
// //??my failed attempt
// // var promise = new Promise(function(fulfill, reject) {
// //    Promise.resolve('MANHATTAN');
// // });

// Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

//!!prompt 9
//?? needed git hub help
// function parsePromised(json) {
//     return new Promise(function(fulfill, reject) {
//         try {
//             fulfill(JSON.parse(json));
//         } catch (error){
//             reject(error);
//         }
//     });
// }

// function onReject (error){
//   console.log(error.message);
// }

// parsePromised(process.argv[2]).then(null, onReject);

//!! prompt 10
//??needed git hub help
// function alwaysThrows() {
//     throw new Error('OH NOES');
// }

// function iterate(int) {
//     console.log(int);
//     return int + 1;
// }

// function onReject(error) {
//     console.log(error.message);
// }

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .catch(onReject);

//!! prompt 11
//??needed git hub help
// function all(prom1, prom2) {
//     return new Promise(function(fulfill, reject) {
//         var counter = 0;
//         var outArr = [];
       
//         prom1.then(function(val){
//             outArr[0] = val;
//             counter++;

//             if(counter >= 2){
//                 fulfill(outArr);
//             }
//         });

//         prom2.then(function(val){
//             outArr[1] = val;
//             counter++;

//             if(counter >= 2){
//                 fulfill(outArr);
//             }
//         });
//     });
// }

// all(getPromise1(), getPromise2())
// .then(console.log);

//!! prompt 12
//??needed git hub help
// var qhttp = require('q-io/http');

// qhttp.read('http://localhost:1337').then(function(json) {
//     console.log(JSON.parse(json));
// }).then(null, console.error)
// .done();

//!! prompt 13
var qhttp = require('q-io/http');
qhttp.read('http://localhost:7000')
.then(function(id) {
   return qhttp.read(`http://localhost:7001/${id}`);
}).then(function(json) {
    console.log(JSON.parse(json));
})
.then(null, console.log)
.done();