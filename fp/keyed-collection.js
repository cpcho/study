/***
Maps
***/
var sayings = new Map();

sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'tout');
console.log(sayings.size); //3
console.log(sayings.get('fox')); //undefined
console.log(sayings.has('bird')); //false
sayings.delete('dog');
console.log(sayings.has('dog')); //false

for (var [key, value] of sayings) {
    console.log(key + ' goes ' + value);
}
console.log(sayings);

/*
sayings.clear();
sayings.size; //3
*/

/***
Sets
***/
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); //true
mySet.delete('foo');
mySet.size; //2

for (let item of mySet) console.log(item);

var newSet = Array.from(mySet);
console.log("new set", newSet);

/***
Spread Operator
Spread syntax allows an iterable such as an array 
expression or string to be expanded in places where 
zero or more arguments (for function calls) or elements 
(for array literals) are expected, or an object expression 
to be expanded in places where zero or more key-value pairs 
(for object literals) are expected.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Rest_syntax_(parameters)
***/
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
//expected output: 6

console.log(sum.apply(null, numbers));