//!!1
// function foo() {
// 	var bar;
// }
//!!2
// function foo() {
// 	var bar;
// 	function zip() {
//         var quux;
//     }
// }
//!!3
// function foo() {
//     var bar;
//     quux = 'q';
// 	function zip() {
//         var quux = 'x';
//     }
// }
//!!4
function foo() {
    var bar;
    quux = 'q';
	function zip() {
        var quux = 'x';
        bar = 'true';
    }
    return zip;
}