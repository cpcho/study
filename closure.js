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
//greetMe() has an access to outer scope.

//Why closures are useful:

function sendRequest() {
	var requestID='123';
	$.ajax({
		url: '/myUrl',
		success: function(res) {
			alert('Request ' + reqeustID + ' returned')
		}
	});
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/***********************/
function makeAdder(x) { // function factory
	return function(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
/***********************/

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