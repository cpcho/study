/*****
Closure
*****/
/*
var me = 'Bruce'
function greetMe() {
	console.log('Hello, ' + me + '!');
}
me = 'Batman'
greetMe();
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

var counter = function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function () {
			changeBy(1);
		},
		decrement: function () {
			changeBy(-1);
		},
		value: function () {
			return privateCounter;
		}
	}
};
var counter1 = counter();
var counter2 = counter();
console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());
console.log(counter2.value());