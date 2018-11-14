var orders = [
    { amount : 250 },
    { amount : 50 },
    { amount : 1354 },
    { amount : 323 },
    { amount : 11 },
]

/*for loop implementation
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
*/

//reduce function
// var totalAmount = orders.reduce(function(sum, order) {
//     return sum + order.amount
// }, 0); //second argument = initial point for sum

//reduce with fat arrow function
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);

//https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc