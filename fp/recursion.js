//Countdown

let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
}

countDownFrom(5);

/********************************/

let factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));
/********************************/

let reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse( str.substr(1)) + str[0];
}

console.log(reverse('hello'))

/********************************/
//Fibonacci Number
let fib = (num) => {
    if (num <= 1) return 1;
    return fib(num - 1) + fib(num -2);
}

console.log(fib(3));
/********************************/
//Write a map function
let map = (arr, fn) => {
    if (arr.length === 0) return [];
    return [fn(arr[0])].concat(map(arr.slice(1), fn));
}
/********************************/

let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals'},
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
]


let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c =>
            node[c.id] = makeTree(categories, c.id))
    return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2))