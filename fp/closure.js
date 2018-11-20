/*****
Closure
*****/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/*
var me = 'Bruce'
function greetMe() {
	console.log('Hello, ' + me + '!');
}
me = 'Batman'
greetMe();

//greetMe() has an access to outer scope.

*/

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
//different lexical environment contained to each other
/***********************/


/*Emulating private methods with closures
The following code illustrates how to use closures to define public functions 
that can access private functions and variables. 
Using closures in this way is known as the module pattern.

we create a single lexical environment that is shared by three functions: 
	counter.increment, counter.decrement, and counter.value.
*/
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */